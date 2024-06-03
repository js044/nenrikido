---
title: "Making a Website (Part 1): The Planning Stage"
date: 2023-03-23T03:22:37-06:00
tags: tutorials
summary: The blog got a bit of a makeover! Anyways, this is the first post in a series I've planned about building websites. It's aimed towards the absolute beginner, but hopefully, it'll still be interesting or useful for people with more experience.
thumbnail: /images/blog/planning.jpg
draft: true
---

The blog got a bit of a makeover! Anyways, this is the first post in a series I've planned about building websites. It's aimed towards the absolute beginner, but hopefully, it'll still be interesting or useful for people with more experience.

I find coding to be similar to many other creative processes. Like cooking, drawing, or writing, it helps save a lot of time and effort to plan out your project beforehand. This is true even if you don't plan for your site to be elaborately designed. It is useful to establish (1) what kind of information you'll have on your site and (2) how you want this information displayed and organized. This will help you select (3) the tools you'll need for your project.

###### (1) Information

Some questions you might ask yourself: what is your site about? What sorts of pages do you want on your website? How many of them will there be? Are you interested in making a [static website or a dynamic website?](https://blog.hubspot.com/website/static-vs-dynamic-website) is your site professional or personal? Are there any special features you want your website to have (such as password-protected sections, contact forms, shops, etc.)? Do you want a community-oriented site or one that's more standalone? Is the site image-heavy and therefore in need of space considerations? All of this will be relevant when it's time to choose web hosting, come up with designs, etc. There's a huge difference in use-case between a 5-page static site on Neocities and a dynamic blog with hundreds of pages.

###### (2) Design

Once you have a general idea of what you want your site to be like, it's less daunting to start researching other sites/designs and sketching out preliminary ideas. [here's](https://pin.it/6lo2wph) the pinterest board I put together when I was working on this site. You can definitely tell where I pulled inspiration.

And here's an excerpt from some of the design brainstorming I did for this website. (there are currently 6 pages worth of drafting and notes in total...lol)

{{< lightbox-image link="/images/blog/planning.jpg" lightbox-id="planning" img-src="/images/blog/planning.jpg" >}}

Notice that I am still considering information and where I want it to go—these steps build off each other and aren't always going to happen in perfect sequential order. It's also possible things will end up being very different once you actually start coding (for example, I ended up ditching the different colored cards in favor of themes.)

When designing (and coding), it can help to think of sites in components: there's the header, the body, and the footer. You may or may not want sidebars. Also consider how you want people to interact with your site components. What do you want to happen when someone clicks on an image? Do you want [tooltips?](https://www.w3schools.com/css/css_tooltip.asp) what should happen to links when you hover? You don't necessarily have to have all these answers right away, as a lot of finer details get ironed out as you work on your site, but thinking about these things ahead of time can help you prepare.

**Notes on design:**

*   There are a variety of best practices for design that are outside the scope of this post. You can start [here](https://webflow.com/blog/web-design-for-beginners) for some pointers on things like thinking in grids and considering color theory. [this](https://www.feelingpeaky.com/9-principles-of-good-web-design/) article also outlines 9 specific design principles that can help guide you.
*   It's possible (likely, even) that there will be elements in your planned design that you do not know how to implement yet. That is okay! You are learning. Don't get discouraged. There are a multitude of tools out there to help you bring your idea to the life, and ultimately, even if you have to temper your design to match your current skill level, it's still a good learning experience to logic through some of these design issues.

###### (3) Tools

There are a ton of tools to get you started building websites. This is amazing for many reasons, but it can get overwhelming really quickly. Getting your ideas off paper and onto the screen isn't always as easy as you'd like, but hopefully these notes can give you a starting point.

**Notes on CSS libraries & frameworks:**

*   if responsonsive displays are important to you (your website looking good on mobile & tablets in addition to desktop), I'd highly recommend using a CSS library or framework. I have a few listed on my [links](links.html#web-dev-resources) page under the resources section. If you care about responsiveness but don't want to commit to a css library or framework, you can also tools like the [CSS grid generator](https://cssgrid-generator.netlify.app/) listed.
*   css libraries & frameworks all have their pros/cons. Bootstrap is robust and easy to use, but it can also be very opinionated when it comes to design. If you're also opinionated, you may find yourself butting heads with it and working to override styles. Tailwind, on the other hand, is more design-agnostic but requires a bit more set-up. You may prefer semantic or utility classes. You may want a lightweight library or a more comprehensive one. It's hard to know what you personally prefer until you try a few out, and different situations will be better suited to different libraries & frameworks.

**Notes on static site generators:**

* I do not have a section on my resources page (yet!) & it's a bit beyond the scope of this post, but if you're planning on a site with many, many pages, it might be useful for you to use a static site generator like Hugo, Jekyll, or Gatsby. You can find a comprehensive list [here](https://jamstack.org/generators/) or learn more about the function of ssgs [here.](https://www.cloudflare.com/learning/performance/static-site-generator/)
* Please note there isn't much documentation on using static site generators in conjunction with Neocities. If you are interested in using static site generators with Neocities, [here's](https://neonaut.neocities.org/neocities/) an example of someone using Hugo.

**Notes on web hosting & deployment:**

* There is a smorgasbord of options when it comes to hosting & deploying sites online. I'm using Neocities because I think the community element is interesting, but it's far from the only option.
*  If you're creating a static site, you might consider options like Github Pages, Netlify, or Neocities.
*  If you're working on a complex dynamic site, you might be more interested in something like Heroku, Firebase, or Azure.
*  Note: there is a difference between dynamic server-side rendered websites (which use tools like php & node.js) and dynamic client-side websites (which use tools like React & Vue). Some sites known for static site hosting may be able to host dynamic client-side websites—for example, Github Pages can host the latter, but not the former.
*  About Neocities specifically: Neocities is intentionally very simple. This can either be a strength or weakness depending on your use-case. You won't be able to use a lot of tools that exist to make things easier and faster, but this also means the barrier of entry is much lower. It couldn't be simpler to upload to Neocities, but this also means that complicated sites can get unwieldy very fast if you don't have much experience.

I think I'll wrap the post up here. Partly because it's 3 AM and partly because i think this is a good starting point for anyone interested in building a site. I have a few ideas of what part 2 should cover, but if you have any suggestions, please let me know.

As for personal life stuff: rewatched Serial Experiments Lain recently & started rewatching Utena, which is causing two very different aesthetic sensibilities to bleed together in my brain. Feeling vaguely inspired to smash rose & tech motifs together in an upcoming theme, but only time will tell if this is genius or terrible. (still need to make that code page, now that i think about it...)

edit: ok, awake now and edited this post a bit, added a few things, fixed some wording, and messed with mobile blog displays...yeah. Time to work on some cicada stuff now 🫡