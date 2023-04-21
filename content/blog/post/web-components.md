---
title: "Reusable HTML Snippets: Web Components"
date: 2023-03-28T02:32:33-06:00
tags: tutorials
summary: A small tutorial on using Javascript to reuse HTML snippets. 
draft: false
---

first off, here's the demo:

<p><p class="codepen" data-height="413" data-default-tab="html,result" data-slug-hash="OJoopqa" data-user="kujara1" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"> <span>See the Pen <a href="https://codepen.io/kujara1/pen/OJoopqa"> web components card demo</a> by jay (<a href="https://codepen.io/kujara1">@kujara1</a>) on <a href="https://codepen.io">CodePen</a>.</span> </p></p><script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

#### my coding backstory (sad violin)

the first time i made a Real Website (cicada), i had never heard of [DRY code](https://docs.getdbt.com/terms/dry). DRY stands for "don't repeat yourself," and it's often cited as one of the most important guiding principles for both backend and frontend coding. it [isn't a hard rule](https://dev.to/wuz/stop-trying-to-be-so-dry-instead-write-everything-twice-wet-5g33), but the consensus tends to be that if you repeat the same code more than three times, you may want to consider making it repeatable.

but i didn't know this back then. my experience was limited to single pages and tumblr themes, so i'd never thought about page management before. at first, it wasn't so bad. copying and pasting the stylesheets, scripts, header, footer—it's manageable for your core pages. but we were running a litmag, and this meant publishing issues that were usually at least 30 pages, and sometimes hit over 50.

i dreaded the task every semester. it was a time consuming and tedious nightmare that no one wanted to help me with (for obvious reasons.) invariably, i'd mess up the copy and pasting at some point, and then multiple pages would have mistakes. i had to explain to our managing editor that it'd take days to change any navigation links because i'd have to manually update every single page. he just stared at me.

i knew this was Wrong, but i kept telling myself that this wasn't my real job, so i had no reason to learn a better way—i was a graphic design major, not a computer scientist! this was just my flimsy bandaid solution until a proper web developer finally applied and saved the day!

that never happened. CCM has existed since 2018, and we have never had one single person apply to be web developer. it has always just been me, tearfully wondering if that numb feeling in my wrist was of concern as i tried to copy and paste dozens of pages worth of identical content. things came to a head when i discovered that i'd been paying money for a dynamic site host when i could have been hosting it for free. embarrassing! harrowing! exhausting!

i felt defeated. there was so much i didn't know and i was at a loss of where to even begin. i knew so little that i didn't even know the right search terms to input. there is so much information floating out there that it's overwhelming. i considered giving up.

instead, i took the site down for 6 months and learned.

#### static site generators

what i ultimately did was use a static site generator, which i highly recommend for anyone with a project that has as many pages as we did. i used hugo, and although i haven't tried out other static site generators, i am deeply in love with it to the point it now feels weird making stuff without it. the learning curve is intimidating, and it takes a lot of time to get comfortable with it, but you'll get there. i struggled a lot because i had to create a theme from scratch and the theme had a lot of interactive components that i didn't have enough skill to execute effectively, but the hugo community was super helpful and active. and if you're using pre-made themes, it's not hard to get started.

hugo elegantly resolves the issue of repeatable code snippets through things like [partials](https://gohugo.io/templates/partials/) and [shortcodes](https://gohugo.io/content-management/shortcodes/). static site generators in general were formulated with goals like this in mind. jekyll lets you use [includes](https://jekyllrb.com/docs/includes/) and gatsby has [layout components](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/).

static site generators aim to make things very, very simple for you. they tend to prioritize markdown over HTML and encourage modularity in all design components. this is excellent for information, text-dense websites in particular.

but maybe it's not so great for people who have small websites, for people who don't want to be bound by templates (even of their own creation), or maybe it's just more support than you need. and it certainly presents an additional challenge when deploying somewhere like neocities. so are there other solutions?

#### web components

i recognized a familiar feeling as i was working on this site. i was copying and pasting the card header, which is a bit dense due to how it's constructed (bootstrap columns + fontawesome icons). by the 20th card header across pages, i was officially twitchy. then, as i was copying and pasting my start menu, my brain started melting. i cannot go through this again, i decided. i'd told myself it'd be fine since it's only a few pages, but it's too late. i know the truth now. there's no good reason to repeat components that often.

it made me realize i still fundamentally hadn't found a solution for repeatable HTML components. sure, static site generators can solve that issue for me, but how was i going to do with a service like neocities that was intentionally whittled down to the bare essentials?

a lot of people on neocities seem to like iframes, but i don't think they're well-suited to this particular use-case. they're not simple code snippet injections, they're entire html files being injected into another html file. you have to style each individual iframe because it won't inherit the parent page's styling—which ends up undermining the goal of keeping your code DRY.

cue...[web components](https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/)!! mdn docs cover web components [here](https://developer.mozilla.org/en-US/docs/Web/Web_Components) as well. long story short, web components are a suite of tools you can utilize with vanilla javascript to create all sorts of repeatable code. i've been told they funtion a lot like react.js components. here's a crash course video on web components and the accompanying [codepen](https://codepen.io/bradtraversy/pen/wvaXKoK).

 <div class="col-8  mx-auto"> <iframe class="yt" src="https://www.youtube.com/embed/PCWaFLy3VUo" title="Web Components Crash Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div>

as of writing this, i've only needed to use custom elements, which are fairly simple to use:

*   first, you create your reusable HTML snippet.
*   then, you create a javascript file, decide on the name of your component, and build it. the syntax generally looks like this:
<pre> <code>
class TITLE extends HTMLElement {
    constructor() {
    super();
    this.innerHTML = `insert your HTML here`;
     }
       }
  window.customElements.define('TITLE-ID', TITLE)
</code></pre>  
*   from there, you can link the component and invoke the code in your HTML like `<TITLE-ID></TITLE-ID>`
*   note: your title-id must be two words combined with a hyphen. your title can be whatever you like though.
*   note: remember to include the `` ` `` tags when you insert your HTML.

i currently use six components and they alone have saved me well over 1k lines of code. hopefully you find some utility in this post and can get started with repeatable snippets too. love & peace on planet earth!