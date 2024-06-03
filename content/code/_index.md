---
title: "Code"
draft: false
layout: single
---

{{< nav title="CODE" id="code" >}} 
{{< filter >}} 
<li class="tumblr themes">Tumblr themes</li>
<li class="page themes">Page themes</li>
<li class="snippets">Snippets</li>
{{< /filter >}} 
{{< /nav >}}

{{< muuri >}}

{{< card-mll title="#Code Guide" >}}

This is a list of pre-made layouts and code snippets that are free for you to use. Check individual posts for details on how to use them. There's also a Github repository listing them [here](https://github.com/js044/freebies/tree/main). A few notes:

- All themes are licensed under the [MIT License](https://github.com/js044/freebies/blob/main/LICENSE), which means they're free for you to use however you want. The only stipulation is that you retain attribution to me, which can be as simple as leaving credit in the HTML/CSS comments (hidden from public view.) 
- Page themes are platform agnostic layouts and can be used anywhere that supports (modern) HTML/CSS. They use CSS variables to manage user settings so you can swap out colors, images, fonts, etc. These variables are located in the :root element. If you'd like to know more about CSS variables, you can read [this guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). 
- Page themes are meant to look identical to previews out-of-the-box, so they come shipped with web URL images rather than local links. I encourage you to link your content locally.
- Page themes are stored in one messy file so you can easily drop it in and test it out, but this is **not** best practice. If you plan to use any themes across multiple pages, I strongly recommend separating the CSS and JS into their own files.
- Themes are tested on Mozilla and Chrome on a variety of displays, but there's no way I'll catch all bugs. If anything is weird, let me know.
- For instructions on installing a Tumblr theme, you can read their [official documentation](https://help.tumblr.com/hc/en-us/articles/230775027-Customizing-Your-Theme#h_01GWSSBWHMQT08V15J7ZJTMDJX).

Feel free to email me ([nenrikido@pm.me](mailto:nenrikido@pm.me)) with any questions/comments or leave a comment here.
{{< comments >}}
{{< /card-mll >}}

{{< card-mll filter="tumblr themes" >}}
{{< lightbox-image lightbox-id="rainbow-tumblr" img-src="/images/code/tumblr-themes/rainbow-theme-1.gif" alt="A Tumblr theme preview. It has a pastel rainbow background with a Creamy Mami character as the sidebar icon. The theme switches through different color themes based on the flag stripe that is selected." >}} 

{{< lightbox-image lightbox-id="rainbow-tumblr" img-src="/images/code/tumblr-themes/rainbow-theme-2.png" alt="Alternate Tumblr theme preview." >}}

{{< box-small  title="Rainbow Tumblr Theme" >}}
[live preview](preview/rainbow2) 
> Finally converted the Rainbow Page Theme to a Tumblr theme. Happy pride!

Features:
*   500px posts
*   Pride flag theme toggler
*   Optional jukebox/badges boxes
*   Custom audio player for posts
*   Customizable title + title font size
*   Support for additional pages
*   User can add a link to any song for jukebox
*   Optional link 4 + 5
*   Optional background image or color
*   Semi-transparent posts
*   Custom permalink icon + favicon

{{< /box-small >}}
{{< gist js044 cd47bf7889fbc42e02759832d243605b >}}   

{{< /card-mll >}}

{{< card-mll filter="page themes" >}}
{{< preview >}}
{{< lightbox-image lightbox-id="rainbow" img-src="/images/code/page-themes/rainbow.gif" alt="A theme preview. A retro style background with boxes overlaid. There is an 8 striped flag in the corner. As the user clicks each stripe, the color scheme of the box shadows, border, and text changes to match." >}}

{{< lightbox-image lightbox-id="rainbow" img-src="/images/code/page-themes/rainbow-1.png" alt="A mobile preview of the theme." >}}
{{< /preview >}}
{{< preview >}}
{{< lightbox-image lightbox-id="rainbow" img-src="/images/code/page-themes/rainbow-2.png" alt="An alternate theme preview. This one has a sky background with a rainbow and an icon of Michiru Kaioh from Sailor Moon." >}}

{{< lightbox-image lightbox-id="rainbow" img-src="/images/code/page-themes/rainbow-3.png" alt="A zoomed-in preview of the sidebar boxes." >}}
{{< /preview >}}
{{< box-small  title="Rainbow Page Theme" >}}
[live preview](preview/rainbow) / [tumblr post](https://negg.tumblr.com/post/719689620334477312/rainbow-page-theme)
> made a theme for pride month based on the original 70s rainbow flag! you can click on stripes of the flag to swap color schemes.

features:
*   customizable background & sidebar images
*   pride flag theme toggler (uses javascript)
*   animated rainbow title
*   lightly styled audio player
*   responsive image class
*   ...and other cool stuff!

{{< /box-small >}}
{{< gist js044 213429dbb42e8c852d6747c24c6097ac >}}   
{{< /card-mll >}}


{{< card-mll filter="page themes" >}}
{{< preview >}}
{{< lightbox-image lightbox-id="sakura" img-src="/images/code/page-themes/sakura.gif" alt="A theme preview. It's a gif of a standalone page. It has a header of Sakura from Cardcaptor Sakura and a background image of cherry blossoms over a river. Two pixels are to the right and left of the header image. The gif shows someone clicking on the left pixel, which opens a pop-up box with more text." >}}

{{< lightbox-image lightbox-id="sakura" img-src="/images/code/page-themes/sakura-1.png" alt="A mobile preview of the theme. The pixels, rather than sitting besides the header image, rest beneath the main content." >}}
{{< /preview >}}
{{< preview >}}
{{< lightbox-image lightbox-id="sakura" img-src="/images/code/page-themes/sakura-2.png" alt="An alternate theme preview, with brighter pinks and blues. The theme uses a different gif of Sakura." >}}

{{< lightbox-image lightbox-id="sakura" img-src="/images/code/page-themes/sakura-3.png" alt="A mobile preview of the theme." >}}
{{< /preview >}}

{{< box-small  title="Sakura Page Theme" >}}
[live preview](preview/sakura) / [tumblr post](https://negg.tumblr.com/post/717605261468123136/sakura-page-theme)
> re-coded an unreleased page theme an anon asked me to release like 5 years ago ([example](https://tomba2.tumblr.com/four) of the original). realized i actually hated a lot of how it was originally handled and now...it is ready to be unfurled!

features:
*   2 custom pixels that trigger pop-up boxes/modals
*   customizable fonts, images, and colors
*   title font supports english & japanese
*   header designed for 4:3 ratio gifs/images
*   mobile responsive (built with flexbox)
{{< /box-small >}}

{{< gist js044 7b74c883a7fc091f1eb68614b6ea6e28 >}}    
{{< /card-mll >}}

{{< card-mll filter="page themes" >}}

{{< preview >}}
{{< lightbox-image lightbox-id="sunflower" img-src="/images/code/page-themes/sunflower-1.png" alt="A theme preview. It's a profile page with a background image of sunflowers. A foggy box with text is in the center. A PNG of a girl is sitting next to the box." >}} 

{{< lightbox-image lightbox-id="sunflower" img-src="/images/code/page-themes/sunflower-2.png" alt="A mobile preview of the theme." >}} 
{{< /preview >}}

{{< preview >}}
{{< lightbox-image lightbox-id="sunflower" img-src="/images/code/page-themes/sunflower-3.jpeg" alt="A theme preview. It's a profile page with a background image of a city road. On the left, there are storefronts with flowers and the background shows a distant mountainous forest. A PNG of an anime-styled girl stands next to the foggy text box. She is holding a green bag behind her, smiling, and wearing cat ears." >}} 

{{< lightbox-image lightbox-id="sunflower" img-src="/images/code/page-themes/sunflower-4.png" alt="A mobile preview of the theme." >}} 
{{< /preview >}}
{{< box-small  title="Sunflower Page Theme" >}}
[live preview](preview/sunflower) / [tumblr post](https://negg.tumblr.com/post/716650921639198720/redesigned-recoded-the-sunflower-about-page)
> completely re-coded and re-vamped a page theme from 2018 i made for tumblr. (original is [here](https://negg.tumblr.com/post/712181004039766016/tomba2-sunflower-about-page).) added a few features, made it behave on mobile, and it is now published for use anywhere.

features:
*   up to 2 side images (left & right)
*   customizable fonts, font sizes, images, and colors
*   mobile responsive (built with flexbox)
*   ...and more!

{{< /box-small >}}

{{< gist js044 e726caf2f2adc9374b14716e34527f37 >}}    
{{< /card-mll >}}

{{< card-mll filter="snippets" >}}
{{< lightbox-image lightbox-id="preloader" img-src="/images/code/snippets/preload.gif" alt="A gif of a loading screen as the home page for Nenrikido loads." >}} 

{{< box-small  title="Preloader" >}}
[blog post + codepen](/blog/post/making-a-preloader/)   
> "I recently decided it might improve user experience to get a loading screen instead of watching the grid unceremoniously disentangle itself. A few experiments later, and here we are."
{{< /box-small >}}
{{< gist js044 a7c2e7c6ae4bd015366bf7a06e33ae23 >}} 
{{< /card-mll >}}

{{< card-mll filter="tumblr themes" >}}
{{< lightbox-image lightbox-id="toothache" img-src="/images/code/tumblr-themes/toothache-theme-1.jpg" alt="A theme preview. It's pink and minimal." >}} 

{{< lightbox-image lightbox-id="toothache" img-src="/images/code/tumblr-themes/toothache-theme-2.jpg" alt="A blue theme with a cat icon on the sidebar." >}} 

{{< box-small  title="Toothache Theme" >}}
[live preview](preview/toothache) / [tumblr post](https://negg.tumblr.com/post/711094972280160256/toothache-theme-by-negg-re-release-u-may-or-may)
> this is a re-release of my very [first theme](https://negg.tumblr.com/post/711094099488440320/negg-toothache-theme-by-negg-so-this-is-my) back in 2016...it's cleaned up & a bit more comprehensible.

features:
*   400px posts
*   2 links w/ a customizable link divider
*   customizable post background color, permalink, favicon
*   dropdown font selection & customizable font size
*   options for rounded/square sidebar image
*   option to show/not show your description
{{< /box-small >}}

{{< gist js044 1e97e4460014faddb27b71923f1e4f58 >}}                     
{{< /card-mll >}}

{{< card-mll filter="tumblr themes" >}}

{{< lightbox-image lightbox-id="pudding" img-src="/images/code/tumblr-themes/pudding-theme-1.jpg" alt="A yellow Tumblr blog theme. It's minimal and serene with a photo of flowers and a sleeping girl." >}} 

{{< lightbox-image lightbox-id="pudding" img-src="/images/code/tumblr-themes/pudding-theme-2.jpg" alt="An alternate pink version of the theme that is left aligned rather than centered." >}} 

{{< box-small  title="Pudding Theme" >}}
[live preview](preview/pudding) / [tumblr post](https://negg.tumblr.com/post/710997721242353664/pudding-theme-plain-times-edit-by-negg-i-3-the)
> i love the plain times theme and have made lots of customizations over the years. so i decided to finally tidy it up and release it as a formal edit.

features:
*   500px posts
*   left or center aligned posts
*   links for ask & archive (if enabled)
*   customizable fonts (dropdown selection)
*   custom permalink icon or text
*   optional title, header image, & blockquote indentation

{{< /box-small >}}

{{< gist js044 86994585030ab5dc76297c2bdb2286e4 >}}                   
{{< /card-mll >}}

{{< /muuri >}}