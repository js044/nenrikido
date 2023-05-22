---
title: "NENRIKIDO"
draft: false
---

{{< card-medium title="#WELCOME" >}} 
<img src="/images/pixels/strovi_pixel.gif" width="80" height="125" alt="A blue pixel catgirl blinking and kicking her feet gently." style="float: right; max-width: 80px;">
this is a personal site and a place for me to experiment with front-end development. it is a perpetual work in progress, so please excuse anything unfinished.
<p align="center"><i class="fa-solid fa-rss"></i> <a href="/index.xml">RSS feed</a> &nbsp <i class="fa-solid fa-mobile-screen-button"></i> responsive </p>
{{< /card-medium >}}

{{< card-medium title="#THEMES"  >}} 
click on an emoji to toggle a theme.
<div class="row justify-content-center">
<div class="col-3 p-2"> <button id="pink" title="pink theme" class="theme-button" onclick="handleThemeButtonClick('pink', this)" >💗</button></div>
<div class="col-3 p-2"> <button id="blue" title="blue theme" class="theme-button" onclick="handleThemeButtonClick('blue', this)" >🫧</button></div>
<div class="col-3 p-2"> <button id="yellow" title="yellow theme" class="theme-button" onclick="handleThemeButtonClick('yellow', this)" >🪐</button></div>
<div class="col-3 p-2"> <button id="black" title="black theme" class="theme-button" onclick="handleThemeButtonClick('black', this)" >💤</button></div>
</div>
{{< /card-medium >}}

{{< card-medium title="#DRAG N DROP" >}} 
try dragging a window by its header! 
{{< /card-medium >}}

{{< card-medium title="#MUSIC" >}} 
<div id="aWrap"> <button id="aPlay" disabled> <span id="aPlayIco" class="material-icons"> play_arrow </span></button> <input id="aSeek" type="range" min="0" value="0" step="1" disabled>
<div id="aCron"> <span id="aNow"></span> / <span id="aTime"></span> </div> </div>
<div id="aList"> <p style="text-decoration:underline;"> <i class="fa-solid fa-music"></i> PLAYLIST</p></div>
{{< /card-medium >}}

{{< card-medium title="#COUNTERS" >}} 
<p align="center"> all visits: <script language="javascript" type="text/javascript" src="//counter1.fc2.com/counter.php?id=38931944&main=1"></script><noscript><img src="//counter1.fc2.com/counter_img.php?id=38931944&main=1" /></noscript> </p>
<p align="center"> current viewers: <script language="javascript" type="text/javascript" src="//counter1.fc2.com/views.php?id=38931944&main=1"></script><noscript><img src="//counter1.fc2.com/counter_now.php?id=38931944&main=1" /></noscript> </p>
{{< /card-medium >}}

{{< card-medium title="#GUESTBOOK" >}} 
<iframe title="chatbox" src="https://www3.cbox.ws/box/?boxid=3526482&boxtag=h3SRws" width="100%" height="450" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>
{{< /card-medium >}}

{{< card-medium title="#TAMA" >}} 
<p align="center"><a href="http://tamanotchi.world/4251c" target="_blank" rel="noopener noreferrer"><img src="http://tamanotchi.world/i2/4251" alt="It's tamaNOTchi! Click to feed!"></a></p>
{{< /card-medium >}}

{{< card-medium title="#MICROBLOG" >}} 
<div id="microblog_recent"></div>
{{< /card-medium >}}

{{< card-medium title="#LUNAR" >}} 
<!-- © wdisseny -->
<div id="contain_moon" style="text-align:center;padding-top:5px;padding-bottom:5px;margin:10px;width:auto;height:17em;"><div style="font-weight:bold">the moon today</div><div style="margin-bottom:3em;padding:2em;filter:drop-shadow(0 0 30px hsl(220,100%,15%))"></div><div>.</div><div style="font-size:small">.</div></div>
<script>(function(){var d=new Date().getDate();var m=document.querySelectorAll("#contain_moon div");var a=new XMLHttpRequest();var url="https://www.icalendar37.net/lunar/api/?lang=en&month="+(new Date().getMonth()+1)+"&year="+(new Date().getFullYear())+"&size=100&lightColor=rgb(255,249,253)&shadeColor=rgb(56,56,141)&LDZ="+new Date(new Date().getFullYear(),new Date().getMonth(),1)/1000+"";m[1].style.height="100px";a.onreadystatechange=function(){if(a.readyState==4&&a.status==200){var b=JSON.parse(a.responseText);m[1].innerHTML=b.phase[d].svg;if(typeof moon_widget_loaded=="function")moon_widget_loaded(b);m[2].innerHTML=b.phase[d].npWidget;m[3].innerHTML="next full moon<br>"+b.nextFullMoon}};a.open("GET",url,true);a.send()})()</script>
{{< /card-medium >}}

{{< card-medium title="#GIFYPET" >}} 
<iframe title="gifypet" class="pet" width="345" height="250" scrolling="yes" src="https://gifypet.neocities.org/pet/pet.html?name=aurelia&dob=1678660983&gender=f&element=Water&pet=https%3A%2F%2Fimg.pokemondb.net%2Fsprites%2Fblack-white%2Fanim%2Fshiny%2Ffrillish-f.gif&map=tree.jpg&background=transparent" frameborder="0"></iframe>
{{< /card-medium >}}


{{< card-medium title="#BLOG POSTS" >}} 
Read the rest of the blog [here](/blog).
{{< blog-feed >}} 
{{< /card-medium >}}

{{< card-medium title="#UPDATES" >}} 
{{< scrollbox >}}
* **5-21-23**: new [blog](/blog) post & now there's a microblog feed on the index page. thank you hors 
* **5-6-23**: lots & lots of changes, some big and some small. there's also a new page theme up! and now there are theme previews!
* **5-1-23**: new page theme is up on the [code](/code) page! i think it's cute.
* **4-21-23**: site's finally up on [github](https://github.com/js044/nenrikido) and there's a [microblog](/microblog) now! elon could never
* **4-20-23**: added a tamanotchi and a lunar tracker to the home page & added a weblisting, added some sites to the button wall
* **4-19-23**: added two new webrings!
* **4-18-23**: there is now a digital [library](/library) and an actual [shrines](/shrines) page! also some font changes. check today's [blog](/blog) post for details.
* **4-11-23**: debugged the theme even more and fixed the gallery filter! also new blog post.
* **4-8-23**: debugged the theme some. shouldn't be irregular gaps anymore!
* **4-7-23**: (shaking the table) [cole shrine](/shrines/cole)?!
* **4-6-23**: more optimization...theme should be speedier?! working out some bugs still.
* **4-5-23**: optimized the site quite a bit, debugged mobile displays, and posted a tutorial about preloaders. u can read more on the [blog](/blog)
* **4-4-23**: so many...check [blog](/blog) for details. TLDR rebuilt the site w hugo & changed up the layout.
* **3-31-23**: rolled back windows bc it was buggy. will fix when i have time
* **3-30-23**: index page windows are draggable now! thinking about perhaps setting this site up on an SSG soon and documenting the process...
* **3-29-23**:  added some new [links](/links) to the cool sites section & web dev resources. and added the [fujofans](https://fujofans.scumsuck.com/) weblisting. old man yaoi will save the world btw. site is also on [github](https://github.com/js044/nenrikido) now. the [blog](/blog) post goes more in depth with updates.
*   **3-28-23**: added a few things to the [code](/code) page, posted a new tutorial [blog](/blog) post, and added some credits
*   **3-27-23**: new [blog](/blog) post
*   **3-25-23**: made an [RSS feed](feed.xml) & switched around some homepage windows. yayy
*   **3-23-23**: new [blog](/blog) post & added a webring to my [links](/links) page! if anything looks weird, it's probably a cache issue—sorry about that.
*   **3-21-23**: swapped some pixels, debugged mobile displays, general housekeeping, etc.
*   **3-20-23**: working on [web components](https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/) to reduce some HTML clutter 😵‍💫 1.2k lines of code deleted so far...
*   **3-17-23**: the [gallery](/gallery) is up now! AND the [blog](/blog)! it even has a post! wow!
*   **3-16-23**: added a [links page](/links) & an [about page](/about), made a button, etc.
*   **3-13-23**: it's alive!
{{< /scrollbox >}}
{{< /card-medium >}}

{{< card-medium title="#JELLY CAM" >}} 
<div class="youtube-player" data-id="rJ6_1-E_CLU" title="Youtube embed of Monterey Bay Jelly Cam"></div>
{{< /card-medium >}}

{{< card-medium title="#DREAM" >}} 
<p align="center"><img src="/images/pixels/Madotsuki_Chair_Spin.gif" style="max-width: 100px;" loading="lazy" width="100" height="100" alt="Madotsuki spinning in her chair."></p>
<p align="center"> <a href="https://ynoproject.net/" target="_blank" rel="noopener noreferrer">Yume Nikki Online Project</a></p>
<p align="center"> <a href="https://archive.ymbr.site/play/" target="_blank" rel="noopener noreferrer">Play Yume Nikki fangames online</a></p>
{{< /card-medium >}}

{{< card-medium title="#TO-DO" >}} 
{{< scrollbox >}}
*   ~~add microblog feed to index~~ ![](images/pixels/new.gif)
*   open commissions
*   make OC page (!!!)
*   fix search script
*   fix theme flickering
*   add library genre drop-down
*   add microblog pagination
*   re-design start menu
*   create zonelets theme
*   move scrollbar behind footer
*   soutaiseiriron shrine
*   fix firefox microblog bug
*   ditch bootstrap (someday)
{{< /scrollbox >}}
{{< /card-medium >}}

{{< card-medium title="#CREDITS" >}} 
{{< scrollbox >}}
{{< row-centered >}}
{{< banner img-src="/images/buttons/hugo-l.svg" link="https://gohugo.io/" loading="lazy" width="" height="" alt="hugo logo" descr="generator" >}}
{{< banner img-src="/images/buttons/muuri.svg" link="https://muuri.dev/" loading="lazy" width="" height="" alt="muuri logo"  descr="library" >}} 
{{< banner img-src="images/buttons/bootstrap-logo-shadow.png" link="https://getbootstrap.com/" loading="lazy" width="48" height="40" alt="bootstrap logo" descr="framework" >}}
{{< banner img-src="/images/buttons/strovi.png" link="https://strovi.neocities.org/" loading="lazy" width="" height="" alt="strovi button" descr="pixels" >}} 
{{< banner img-src="/images/buttons/foollovers.gif" link="https://foollovers.com/" loading="lazy" width="" height="" alt="animated pixel for fool lovers" descr="pixels" >}} 
{{< banner img-src="/images/buttons/13mo.jpg" link="https://13mo.tumblr.com/" loading="lazy" width="30" height="30" descr="pixels" >}} 
{{< banner img-src="/images/buttons/paul-j.png" link="https://www.flaticon.com/authors/paul-j/" loading="lazy" width="64" height="34" alt="banner of stylized smiling person" descr="icons" >}}
{{< banner img-src="/images/buttons/freepik.jpg" link="https://www.flaticon.com/authors/freepik/" loading="lazy" width="" height="" alt="robot on a button" descr="icons" >}} 
{{< banner img-src="/images/buttons/win98.png" link="https://win98icons.alexmeub.com/" loading="lazy" width="38" height="30" alt="windows 98 style computer icon" descr="icons" >}} 
{{< banner img-src="/images/buttons/fontawesome.png" link="https://fontawesome.com/" loading="lazy" width="56" height="40" alt="icon for fontawesome" descr="icons" >}}
{{< banner img-src="/images/buttons/twe.png" link="https://twemoji.twitter.com/" loading="lazy" width="" height="" descr="icons" >}}
{{< banner img-src="/images/buttons/gifypet.gif" link="https://gifypet.neocities.org/" loading="lazy" width="" height="" alt="animated gifypet button" descr="gifypet" >}} 
{{< banner img-src="/images/buttons/fc2.png" link="https://counter.fc2.com/en/index.html/" loading="lazy" width="" height="" alt="a button to fc2 counters" descr="counter" >}} 
{{< banner img-src="/images/buttons/cbox.png" link="https://www.cbox.ws/" loading="lazy" width="" height="" alt="speech bubble button saying CBOX" descr="chatbox" >}} 
{{< banner img-src="/images/buttons/code-boxx.png" link="https://code-boxx.com/custom-audio-player-playlist/" loading="lazy" width="" height="" alt="logo for code boxx website" descr="playlist" >}} 
{{< /row-centered >}}
{{< /scrollbox >}}
{{< /card-medium >}}

{{< card-medium title="#CONTACT" >}} 
{{< icons/email >}} Email: [nenrikido@pm.me](mailto:nenrikido@pm.me)  
{{< icons/tumblr >}} Tumblr: [nenrikido-art](https://nenrikido-art.tumblr.com/)  
{{< icons/twitter >}} Twitter: [@nenrikido](https://twitter.com/nenrikido)  
{{< icons/discord >}} Discord: ask me

<p align="center"><img src="/images/pixels/gotmail.gif" loading="lazy" alt="A pixel of two computers sending an email between them." ></p>
{{< /card-medium >}}



