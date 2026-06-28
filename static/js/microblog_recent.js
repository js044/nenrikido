// Fran Hat RSS microblog script — recent posts widget
// https://github.com/22ru/microblog

// Config
var RecentPostCount = 1;
var RSSLink = "/microblog/index.xml";
var MicroblogDivID = "microblog_recent";

function retrieveXML() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
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
  var authorName = getText(xmlDoc.getElementsByTagName("webMaster")[0]);
  var username   = getText(xmlDoc.getElementsByTagName("generator")[0]);
  var iconLink   = getText(xmlDoc.getElementsByTagName("image")[0].getElementsByTagName("url")[0]);
  var rootLink   = getText(xmlDoc.getElementsByTagName("link")[0]);

  var items = xmlDoc.getElementsByTagName("item");
  var count = Math.min(RecentPostCount, items.length);
  for (var i = 0; i < count; i++) {
    loadSingle(items[i], authorName, username, iconLink, rootLink);
  }
}

function loadSingle(rssItem, authorName, username, iconLink, rootLink) {
  var post = document.createElement("div");
  post.className = "post";
  post.id = "recent-" + getText(rssItem.getElementsByTagName("guid")[0]);

  var authorLink = document.createElement("a");
  authorLink.href = rootLink;
  var icon = document.createElement("img");
  icon.className = "profilePic";
  icon.src = iconLink;
  authorLink.appendChild(icon);
  post.appendChild(authorLink);

  var content = document.createElement("div");
  content.className = "postContent";

  var authorDate = document.createElement("div");
  authorDate.className = "authorDate";

  var author = document.createElement("div");
  author.className = "author";
  author.innerHTML =
    "<span class='authorName'>" + authorName + "</span>" +
    (authorName.length > 0 ? " " : "") +
    "<span class='username'>" + username + "</span>";

  var guid = getText(rssItem.getElementsByTagName("guid")[0]);
  var dateLink = document.createElement("a");
  dateLink.href = "/microblog?post=" + guid;
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

    // Images
    var images = descDoc.getElementsByTagName("img");
    if (images.length > 0) {
      var galleryWrapper = document.createElement("div");
      galleryWrapper.className = "gallery-" + images.length;
      for (var i = 0; i < images.length; i++) {
        var cloned = images[i].cloneNode(true);
        cloned.className = "postImage";
        galleryWrapper.appendChild(cloned);
      }
      content.appendChild(galleryWrapper);
    }

    // Non-image html
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

  post.appendChild(content);
  document.getElementById(MicroblogDivID).appendChild(post);
}