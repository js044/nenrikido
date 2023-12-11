---
title: "Making a Preloader"
date: 2023-04-05T01:38:00-06:00
tags: tutorials
summary: How to make a simple full-page loading screen for your site.
thumbnail: /images/blog/preload.gif
draft: false
---

I recently decided it might improve user experience to get a loading screen instead of watching the grid unceremoniously disentangle itself. A few experiments later, and here we are.

{{< lightbox-image link="/images/blog/preload.gif" lightbox-id="preload" img-src="/images/blog/preload.gif" width="800" height="381" alt="A gif of a brief blue loading screen before the website loads.">}}  

Cool! The markup isn't too difficult, but I know it would've saved me time if I stumbled across a tutorial like this earlier, so I thought I'd share how I did it. Here's the code with a different loading icon. You can swap out the background-url with a different one if you like.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="dygbewv" data-user="kujara1" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/kujara1/pen/dygbewv">
  preloader</a> by jay (<a href="https://codepen.io/kujara1">@kujara1</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

{{< box-small title="CREDITS" >}}
- [SVG loaders](https://samherbert.net/svg-loaders/)
- [Preloader script](https://www.youtube.com/watch?v=Yf5d_Zx3AaI)
- [Fade out script](http://vanilla-js.com/)  
{{< /box-small >}}
