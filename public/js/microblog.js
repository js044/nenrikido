// Fran Hat RSS microblog script
// Inspired by ひなちゃま
// Written: November 12, 2022
// https://github.com/22ru/microblog

// Config
var RSSLink = "/microblog/index.xml";
var MicroblogDivID = "microblog";
var DisplaySubscribe = 1;
var SubscribeText = "Follow";
var DisplayLikes = 1;
var LikeSymbol = "&#9829;";
var UnlikeSymbol = "&#9825;";
var DisplayReblog = 1;
var ReblogSymbol = "&#x2673;";
var NoReblogSymbol = "&#x267A;";
var PostsPerPage = 10;

var xmlCache = null;
var authorNameCache, usernameCache, iconLinkCache, rootLinkCache;

function retrieveXML() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      buildPage(this);
    }
  };
  xhttp.open("GET", RSSLink, true);
  xhttp.send();
}

function getText(node) {
  return node ? node.textContent : "";
}

function buildPage(xml) {
  var xmlDoc = xml.responseXML;

  authorNameCache = getText(xmlDoc.getElementsByTagName("webMaster")[0]);
  usernameCache = getText(xmlDoc.getElementsByTagName("generator")[0]);
  iconLinkCache = getText(xmlDoc.getElementsByTagName("image")[0].getElementsByTagName("url")[0]);
  rootLinkCache = getText(xmlDoc.getElementsByTagName("link")[0]);
  xmlCache = xmlDoc;

  if (MicroblogDivID.length === 0) {
    MicroblogDivID = "container";
    var container = document.createElement("div");
    container.id = MicroblogDivID;
    document.body.appendChild(container);
  }

  var bioText = getText(xmlDoc.getElementsByTagName("description")[0]);
  loadHeader(authorNameCache, usernameCache, iconLinkCache, rootLinkCache, bioText);
  if (DisplaySubscribe) loadSubscribe(RSSLink);

  loadPosts(xmlDoc);
}

function loadPosts(xmlDoc) {
  var items = xmlDoc.getElementsByTagName("item");
  var totalPages = Math.ceil(items.length / PostsPerPage);
  var params = new URLSearchParams(window.location.search);

  // single post view via ?post=
  var postId = params.get("post");
  if (postId) {
    for (var i = 0; i < items.length; i++) {
      if (getText(items[i].getElementsByTagName("guid")[0]) === postId) {
        loadSingle(items[i]);
        return;
      }
    }
  }

  // pagination via ?page=
  var pageNum = parseInt(params.get("page"), 10) || 1;
  if (pageNum < 1 || pageNum > totalPages) pageNum = 1;
  var start = (pageNum - 1) * PostsPerPage;
  var end = Math.min(start + PostsPerPage, items.length);
  for (var i = start; i < end; i++) {
    loadSingle(items[i]);
  }
  generatePageLinks(totalPages, pageNum);
}

function loadHeader(authorName, username, iconLink, rootLink, bioText) {
  var header = document.createElement("div");
  header.id = "header";

  var authorLink = document.createElement("a");
  authorLink.href = rootLink;

  var icon = document.createElement("img");
  icon.className = "profilePic";
  icon.src = iconLink;
  authorLink.appendChild(icon);

  var author = document.createElement("h1");
  author.id = "name";
  author.textContent = authorName;

  var user = document.createElement("p");
  user.id = "username";
  user.textContent = username;

  var bio = document.createElement("p");
  bio.id = "bio";
  bio.textContent = bioText;

  header.appendChild(authorLink);
  header.appendChild(author);
  header.appendChild(user);
  header.appendChild(bio);

  document.getElementById(MicroblogDivID).appendChild(header);
}

function loadSubscribe(rssLink) {
  var subLink = document.createElement("a");
  subLink.href = rssLink;
  subLink.innerHTML = SubscribeText;
  subLink.className = "subscribeButton";
  document.getElementById(MicroblogDivID).appendChild(subLink);
}

function generatePageLinks(totalPages, currentPage) {
  if (totalPages <= 1) return;

  var paginationDiv = document.createElement("div");
  paginationDiv.className = "pagination";

  for (var i = 1; i <= totalPages; i++) {
    var pageLink = document.createElement("a");
    pageLink.href = "?page=" + i;
    pageLink.textContent = i;
    if (i === currentPage) pageLink.className = "currentPage";
    paginationDiv.appendChild(pageLink);
  }

  document.getElementById(MicroblogDivID).appendChild(paginationDiv);
}

function loadSingle(rssItem) {
  var post = document.createElement("div");
  post.className = "post";
  post.id = getText(rssItem.getElementsByTagName("guid")[0]);

  var authorLink = document.createElement("a");
  authorLink.href = "/microblog";
  var icon = document.createElement("img");
  icon.className = "profilePic";
  icon.src = iconLinkCache;
  authorLink.appendChild(icon);
  post.appendChild(authorLink);

  var content = document.createElement("div");
  content.className = "postContent";

  var authorDate = document.createElement("div");
  authorDate.className = "authorDate";

  var author = document.createElement("div");
  author.className = "author";
  author.innerHTML =
    "<span class='authorName'>" + authorNameCache + "</span>" +
    (authorNameCache.length > 0 ? " " : "") +
    "<span class='username'>" + usernameCache + "</span>";

  var dateLink = document.createElement("a");
  dateLink.href = "?post=" + post.id;
  dateLink.className = "postDate";

  var rawDate = getText(rssItem.getElementsByTagName("pubDate")[0]);
  var postDate = new Date(rawDate);
  if (!isNaN(postDate.getTime())) {
    dateLink.textContent = postDate.toLocaleDateString();
    dateLink.title = postDate.toString();
  } else {
    dateLink.textContent = rawDate;
  }

  authorDate.appendChild(author);
  authorDate.appendChild(dateLink);
  content.appendChild(authorDate);

  var text = document.createElement("div");
  text.className = "postText";
  text.innerHTML = getText(rssItem.getElementsByTagName("title")[0]);
  content.appendChild(text);

  var descRaw = getText(rssItem.getElementsByTagName("description")[0]);
  if (descRaw && descRaw.trim().length > 0) {
    var parser = new DOMParser();
    var descDoc = parser.parseFromString(descRaw, "text/html");
    var imagesFromDesc = descDoc.getElementsByTagName("img");
    var numImages = imagesFromDesc.length;

    if (numImages > 0) {
      var galleryId = "gallery-" + post.id;
      var galleryWrapper = document.createElement("div");
      galleryWrapper.className = "gallery-" + numImages;
      galleryWrapper.id = galleryId;

      for (var j = 0; j < numImages; j++) {
        var img = imagesFromDesc[j];
        var imageLinkWrapper = document.createElement("a");
        imageLinkWrapper.href = img.getAttribute("src");
        imageLinkWrapper.setAttribute("data-lightbox", galleryId);
        var clonedImg = img.cloneNode(true);
        clonedImg.classList.add("postImage");
        imageLinkWrapper.appendChild(clonedImg);
        galleryWrapper.appendChild(imageLinkWrapper);
      }

      content.appendChild(galleryWrapper);
    }

    // html like links + embeds 
    var nonImageContent = descDoc.body.cloneNode(true);
    var imgs = nonImageContent.getElementsByTagName("img");
    while (imgs.length > 0) imgs[0].parentNode.removeChild(imgs[0]);
    var remaining = nonImageContent.innerHTML.trim();
    if (remaining.length > 0) {
      var htmlDiv = document.createElement("div");
      htmlDiv.className = "postHtml";
      htmlDiv.innerHTML = remaining;
      content.appendChild(htmlDiv);
    }
  }

  if (DisplayReblog || DisplayLikes) {
    content.appendChild(loadInteractions(post.id));
  }

  post.appendChild(content);
  document.getElementById(MicroblogDivID).appendChild(post);
}

function loadInteractions(guid) {
  var interactions = document.createElement("div");
  interactions.className = "interactions";

  if (DisplayReblog) {
    var reblogButton = document.createElement("span");
    reblogButton.className = "reblogButton";
    reblogButton.setAttribute("onclick", "reblogPost('" + guid + "')");
    reblogButton.innerHTML = NoReblogSymbol;
    var reblogCount = document.createElement("span");
    reblogCount.className = "reblogCount";
    reblogCount.textContent = "0";
    interactions.appendChild(reblogButton);
    interactions.appendChild(reblogCount);
  }

  if (DisplayLikes) {
    var likeButton = document.createElement("span");
    likeButton.className = "likeButton";
    likeButton.setAttribute("onclick", "likePost('" + guid + "')");
    likeButton.innerHTML = UnlikeSymbol;
    var likeCount = document.createElement("span");
    likeCount.className = "likeCount";
    likeCount.textContent = "0";
    interactions.appendChild(likeButton);
    interactions.appendChild(likeCount);
  }

  return interactions;
}

function likePost(guid) {
  var post = document.getElementById(guid).getElementsByClassName("interactions")[0];
  post.getElementsByClassName("likeButton")[0].setAttribute("onclick", "unlikePost('" + guid + "')");
  post.getElementsByClassName("likeButton")[0].innerHTML = LikeSymbol;
  post.getElementsByClassName("likeCount")[0].textContent = "1";
}

function unlikePost(guid) {
  var post = document.getElementById(guid).getElementsByClassName("interactions")[0];
  post.getElementsByClassName("likeButton")[0].setAttribute("onclick", "likePost('" + guid + "')");
  post.getElementsByClassName("likeButton")[0].innerHTML = UnlikeSymbol;
  post.getElementsByClassName("likeCount")[0].textContent = "0";
}

function reblogPost(guid) {
  var post = document.getElementById(guid).getElementsByClassName("interactions")[0];
  post.getElementsByClassName("reblogButton")[0].setAttribute("onclick", "unreblogPost('" + guid + "')");
  post.getElementsByClassName("reblogButton")[0].innerHTML = ReblogSymbol;
  post.getElementsByClassName("reblogCount")[0].textContent = "1";
}

function unreblogPost(guid) {
  var post = document.getElementById(guid).getElementsByClassName("interactions")[0];
  post.getElementsByClassName("reblogButton")[0].setAttribute("onclick", "reblogPost('" + guid + "')");
  post.getElementsByClassName("reblogButton")[0].innerHTML = NoReblogSymbol;
  post.getElementsByClassName("reblogCount")[0].textContent = "0";
}