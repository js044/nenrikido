// Display only latest microblog post
//
// borrowed shamelessly from hat
//
// hat.neocities.org
// https://github.com/22ru/microblog
var RSSLink = "diary/poems/microblog.xml";

function retrieveminiXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            buildPage(this);
        }
    };
    xhttp.open("GET", RSSLink, true);
    xhttp.send();
}

function buildPage(xml) {
    var xmlDoc;
    var authorName, username, iconLink, rootLink, bioText;
    var anchor, i;
    var container;
    var postsDisplayed;
    var items;

    xmlDoc = xml.responseXML;

    authorName = xmlDoc.getElementsByTagName("webMaster")[0].innerHTML;
    username = xmlDoc.getElementsByTagName("generator")[0].innerHTML;
    iconLink = xmlDoc.getElementsByTagName("image")[0].getElementsByTagName("url")[0].innerHTML;
    rootLink = xmlDoc.getElementsByTagName("link")[0].innerHTML;
    bioText = xmlDoc.getElementsByTagName("description")[0].innerHTML;

    container = document.createElement("div");
    container.id = "container";

    items = xmlDoc.getElementsByTagName("item");

    loadSingle(items[0], authorName, username, iconLink, rootLink);
}

function loadSingle(rssItem, authorName, username, iconLink, rootLink) {
    var post, authorLink, icon, content, authorDate, author, dateLink, text, imageLink;
    var imagesPrecount, i, images;

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

    dateLink = document.createElement("p");
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
    post.appendChild(authorDate);

    imageLink = rssItem.getElementsByTagName("description")[0].innerHTML;
    // Store the number of images that may exist before the post images are appended
    // so that we don't add the postImage class to them
    imagesPreCount = content.getElementsByTagName("img").length;
    if (imageLink.length > 0) {
        content.innerHTML += imageLink;
        images = content.getElementsByTagName("img");
        for (i = imagesPreCount; i < images.length; i++) {
            images[i].className = "postImage";
        }
    }
    
    text = document.createElement("div");
    text.className = "postText";
    text.innerHTML = rssItem.getElementsByTagName("title")[0].innerHTML;
    content.appendChild(text);

    post.appendChild(content);
    document.getElementById("container").appendChild(post);
}

// Put RSS Updates in Update Log so I don't have to do it twice
//
// borrowed (and amended) shamelessly from hat
//
// hat.neocities.org
// https://github.com/22ru/microblog

// Config
var UpdateLogLink = "rss.xml";
var UpdateLogID = "log";

// stolen shamelessly from w3schools
// https://www.w3schools.com/xml/xml_parser.asp
function retrieveLog() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            buildLog(this);
        }
    };
    xhttp.open("GET", UpdateLogLink, true);
    xhttp.send();
}

function buildLog(xml) {
    var xmlDoc;

    xmlDoc = xml.responseXML;
    loadLogs(xmlDoc);
}

function loadLogs(xmlDoc) {
    var i;
    var items;

    items = xmlDoc.getElementsByTagName("item");

    for (i = 0; i < items.length; i++) {
        loadLogitem(items[i]);
    }
}

function loadLogitem(rssItem) {
    // Make a new row in the table
    var logitem = document.createElement("tr");

    // Add the date
    var logdate = document.createElement("td");
    var odate = new Date(rssItem.getElementsByTagName("pubDate")[0].innerHTML);
    logdate.innerHTML = odate.toISOString().split("T").shift();
    logitem.appendChild(logdate);

    var logentry = document.createElement("td");
    
    // Iterate over source instances and add
    var updateCount = rssItem.getElementsByTagName("source").length;
    for (i = 0; i < updateCount; i++) {
        var loglink = document.createElement("a");
        loglink.innerHTML = rssItem.getElementsByTagName("source")[i].innerHTML;
        loglink.href = rssItem.getElementsByTagName("source")[i].getAttribute("url");
        
        logentry.appendChild(loglink);
        // Add space if more than one link
        if ((updateCount > 1) && (i < updateCount - 1)){
            logentry.append(", ");
        }
    }
    
    // Add text description
    var logdesc = document.createElement("span");
    logdesc.innerHTML = rssItem.getElementsByTagName("description")[0].innerHTML;
    logentry.appendChild(logdesc);
    
    logitem.appendChild(logentry);
    document.getElementById(UpdateLogID).appendChild(logitem);
}