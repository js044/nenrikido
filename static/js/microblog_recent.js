// Fran Hat RSS microblog script
// Inspired by ひなちゃま
// Written: November 12, 2022
// Last edited: January 11, 2023
// https://github.com/22ru/microblog
// Enjoy!

// Config
var DisplayLatestPosts = 1;
var RSSLink = "/microblog.xml";
var MicroblogDivID = "microblog_recent";
var DisplaySubscribe = 0;
var SubscribeText = "Follow";
var DisplayLikes = 0;
var LikeSymbol = "&#9829;";
var UnlikeSymbol = "&#9825;";
var DisplayReblog = 0;
var ReblogSymbol = "&#x2673;";
var NoReblogSymbol = "&#x267A;";

// I hate to do this with a global
// but I don't have any better ideas right now.
// Where's "static"???
var firstLoad = 1;

// stolen shamelessly from w3schools
// https://www.w3schools.com/xml/xml_parser.asp
 
function buildPage(xml) {
  var xmlDoc;
  var authorName, username, iconLink, rootLink, bioText;
  var container;
  var posts, i, postCount;
  
  xmlDoc = xml.responseXML;
  authorName = xmlDoc.getElementsByTagName("webMaster")[0].innerHTML;
  username = xmlDoc.getElementsByTagName("generator")[0].innerHTML;
  iconLink = xmlDoc.getElementsByTagName("image")[0].getElementsByTagName("url")[0].innerHTML;
  rootLink = xmlDoc.getElementsByTagName("link")[0].innerHTML;

  // Initialize page on first load
  // Header and subscribe button will not be removed
  // when anchor is changed.
  if (firstLoad == 1) {
    // Event listener to reload page when anchor/hash is changed
    window.addEventListener('hashchange', function() {
      firstLoad = 0;
      posts = document.getElementsByClassName("post");
      postCount = posts.length;
      for (i = 0; i < postCount; i++) {
        document.getElementById(MicroblogDivID).removeChild(posts[0]);
      }
      loadPosts(xmlDoc, authorName, username, iconLink, rootLink);
    }, false);
  
    bioText = xmlDoc.getElementsByTagName("description")[0].innerHTML;
    
    // Create container if ID not supplied
    if (MicroblogDivID.length == 0) {
      MicroblogDivID = "container";
      container = document.createElement("div");
      container.id = MicroblogDivID;
      document.body.appendChild(container);
    }
 
  }
  loadPosts(xmlDoc, authorName, username, iconLink, rootLink);
}

function loadPosts(xmlDoc, authorName, username, iconLink, rootLink) {
  var anchor, i;
  var postsDisplayed;
  var items;
  
  items = xmlDoc.getElementsByTagName("item");
  anchor = window.location.hash.replace("#", '');

  // No anchor or invalid anchor, build feed
  if (anchor == "" || isNaN(anchor)) {
    if (DisplayLatestPosts > 0) { 
      postsDisplayed = DisplayLatestPosts;
    } else {
      postsDisplayed = items.length;
    }
    for (i = 0; i < postsDisplayed; i++) {
      loadSingle(items[i], authorName, username, iconLink, rootLink);
    }
  // Load single post with guid matching the anchor
  } else {
    for (i = 0; i < items.length; i++) {
      if (anchor == items[i].getElementsByTagName("guid")[0].innerHTML) {
        loadSingle(items[i], authorName, username, iconLink, rootLink);
        return;
      }
    }
  }
}

function loadSingle(rssItem, authorName, username, iconLink, rootLink) {
  var post, authorLink, icon, content, authorDate, author, dateLink, text, imageLink;
  var imagesPreCount, i, images, postDate;
    
  post = document.createElement("div");
  post.className = "post";
  post.id = rssItem.getElementsByTagName("guid")[0].innerHTML;
  
  authorLink = document.createElement("a");
  authorLink.href = rootLink;
  icon = document.createElement("img");
  icon.className = "profilePic";
  icon.src = iconLink;
  authorLink.appendChild(icon);
  post.appendChild(authorLink);
  
  content = document.createElement("div");
  content.className = "postContent";
  
  authorDate = document.createElement("div");
  authorDate.className = "authorDate";
  
  author = document.createElement("div");
  author.className = "author";
  author.innerHTML = "<span class='authorName'>" + authorName + "</span>";
  // Only add a space if there is something in front of it
  if (authorName.length > 0) author.innerHTML += " ";
  author.innerHTML += "<span class='username'>" + username + "</span>";
  
  dateLink = document.createElement("a");
  dateLink.href = "/microblog#" + rssItem.getElementsByTagName("guid")[0].innerHTML;
  dateLink.className = "postDate";

  postDate = new Date(rssItem.getElementsByTagName("pubDate")[0].innerHTML);
  if (postDate != NaN) {
    dateLink.innerHTML = postDate.toLocaleDateString();
    dateLink.title = postDate;
  } else {
    dateLink.innerHTML = rssItem.getElementsByTagName("pubDate")[0].innerHTML;
  }

  authorDate.appendChild(author);
  authorDate.appendChild(dateLink);
  content.appendChild(authorDate);

  text = document.createElement("div");
  text.className = "postText";
  text.innerHTML = rssItem.getElementsByTagName("title")[0].innerHTML;
  
  imageLink = rssItem.getElementsByTagName("description")[0].innerHTML;
  // Store the number of images that may exist before the post images are appended
  // so that we don't add the postImage class to them
  imagesPreCount = content.getElementsByTagName("img").length;
  content.appendChild(text);
  if (imageLink.length > 0) {
    content.innerHTML += imageLink;
    images = content.getElementsByTagName("img");
    for (i = imagesPreCount; i < images.length; i++) {
      images[i].className = "postImage";
    }
  }
  
  if (DisplayReblog || DisplayLikes) {
    content.append(loadInteractions(rssItem.getElementsByTagName("guid")[0].innerHTML)); 
  }
  
  post.appendChild(content);
  
  document.getElementById(MicroblogDivID).appendChild(post); 
}

