---
title: "Mega Site Update"
date: 2023-12-10T20:14:19-04:00
tags: site updates
summary: Brand new fonts, search finally works, new blog tag filter, site got SASS'ed, microblog bug is squashed, and more!
thumbnail: /images/blog/121023/search.png
draft: false
---

Wow! It's been awhile. I apologize for how long it's been. To tell you the truth, this site got a lot more ambitious than I ever meant for it to. I definitely bit off more than I could chew, and when that happens, I tend to avoid the project until I can get no-lifer obsessed with it. 

Well it happened! I got no-lifer obsessed and now there are many new things going on.

#### Blog Updates:
- A long-term struggle I've had is figuring out how to integrate native Hugo taxonomies with JS libraries that handle filtering. As a bandaid solution, I created a /tags/ page to host all tagged blog posts, and so each had its own page (ie: /tagged/personal). Which is very Tumblr-esque and not inherently bad, but I disliked that it functioned so much differently from the rest of the site. No more! The blog is now one page without 3 separate tag pages to maintain (and so this should make Neocities updates a lot less tedious also...when will we be allowed to set our own previews btw?)
- Another thing that was much easier than I realized was conditional thumbnails. I didn't want to commit to every single post having an image, but always assumed this would be super hard. It's not. Literally all you need to do is put this in your HTML: `{{ if .Params.thumbnail }} <img class="thumbnail" src="{{ .Params.thumbnail }}" alt="Thumbnail Image"> {{ end }}` and throw a thumbnail parameter in the front matter for posts you want an image for. I'm seriously so bad at comprehending documentation. I also think I want to make alt text a parameter that can be updated, but I think making this site more accessible will be its own wild project, so I will table that for another time...

#### Search Updates:
- Really not too much much to say here. Using [Lunr.js](https://lunrjs.com/), I finally got the search feature working! Third time's the charm, as they say. ~~Plus I asked ChatGPT to debug my janky Javascript.~~


#### Font Updates:
- You may notice that the fonts are pretty different! I swapped out every single font that I did not have a commercial license for and/or was not 100% free. Fly high Porkys. You will be missed. This was surprisingly time consuming. It turns out I am not an easy woman to please when it comes to typography. But I'm actually very fond of my selections. The fonts I'm using for headers are [Distro (Heavy)](https://www.1001fonts.com/distro-font.html) (free), [Franxurter Totally Fat](https://www.fontspace.com/franxurter-totally-font-f42042) (free), [Kirom](https://elements.envato.com/kirom-modern-futuristic-sans-serif-font-H42FCRW) (paid), and [Pixel Gamer](https://elements.envato.com/pixel-gamer-NAM5T2Z) (paid). Shout out to my mother for letting me hijack her Envato Elements account! 
- I suppose this is as good a place as any to shoehorn in the announcement that I do plan to open web development commissions pretty soon. I think I'll do simple one-pagers, and I'm not sure how much I want to charge, but I think it'll probably go over better than digital art commissions? Or not. I'm not fully decided yet. If you want to weigh in, feel free to do so in the comments. But since that changes the scope of this site from personal to squarely commercial, I do want to cross my t's and dot my i's. Plus, it's nice to change things up sometimes!

#### Microblog Updates:
- Well, update, singular, I guess. This is a huge win for me because it was just extremely annoying to fix, but it is. It should now definitively load BEFORE the grid and prevent any overlapping. You have no idea how happy this makes me.
- But, just to stretch out this section: I've been thinking about updating my microblog CSS for awhile and posting my old CSS on the code page. I think it'd be fun to share skins for Hat's [super wonderful RSS microblog script](https://github.com/22ru/microblog) to psyop more people into using it. 

#### Behind the Scenes Updates:
- This probably isn't relevant to anyone but me, but I also finally fulfilled a long-term dream and played around with [Hugo Pipes](https://gohugo.io/hugo-pipes/) to transpile [SASS to CSS](https://gohugo.io/hugo-pipes/transpile-sass-to-css/). My CSS files were abominations. Crimes against humanity. I love bite sized file chunks and I've long admired the elegance of SASS nesting! And so I have taken it for myself. Whether this will work smoothly enough to actually deploy to Neocities without disaster remains to be seen, but I choose to believe everything will be fine--for my own sanity! 
- Someday, I'd like to revamp the SASS/CSS further to add color maps for theme switching (something like [this](https://www.sitepoint.com/sass-theming-neverending-story/)), but I got started, realized how much work it'd be, and decided to table it for another day when I'm feeling masochistic.
- Speaking of CSS stuff, I also have updated some of the font handling and card sizing CSS. I'm using [clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) now, which I'm admittedly still getting the hang of. If anything looks weird on your display, please let me know!

#### Misc Updates
- I've hidden a few blog posts, and will probably update the site to clean it up a bit over the next few weeks. I'm working on a Professional Portfolio Website for web/graphic design stuff, and I think it'd be a huge loss to not include this website after all the work I've put into it. It's also been an incredible learning experience for me. But it's also not super professional at the moment--to an extent, that's fine, but I do want to make it a little more presentable for display.
- And as a final note, I want to make a smaller, more private diary website to actually just be as unprofessional as I want to be. I want to get started on that site sometime this month. I'll probably host it on Neocities. If you want the URL...perhaps email me? I'm going to make it public facing most likely, I don't plan to say anything crazy, I just want to create a small separation here. And I'll try to keep the scope of that site limited, lest I invest so much into it I get tempted to put it on another portfolio.
- OH, also--thinking about adding new themes sometime. Are there any themes/color schemes you'd all be interested in? Let me know if you do!
- Final thing--you guys hatched my Tamanotchi!! Thank you so much. 

Okay, is that everything? Honestly, it felt like more. Going to go wrestle with Hugo and Neocities some more to make sure this actually gets posted the way I want it to. It's very likely this blog post will be buried underneath all the other pages getting updated, but if so, I'll just post a link on my feed.

I've missed you all! Talk to you soon. Hope everyone has been doing well. 