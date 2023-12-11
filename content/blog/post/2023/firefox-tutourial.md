---
title: "Firefox Tree Tabs Tu(tour)ial"
date: 2023-07-02T00:34:17-06:00
tags: tutorials
summary: Welcome to my crib, Mozilla Firefox edition. With instructions on how to recreate it!
thumbnail: /images/blog/070223/firefox.webp
draft: false
---

This is the first installment of my "FOSS recommendations" series (or something.) It started off as a single post, but I ended up having so much to say about each recommendation that I decided they'd be better off with their own dedicated posts.

First on the list, of course, is [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/), an internet browser you've probably heard of. It is widely beloved for its consideration of user privacy and customization, earning it a loyal fanbase. Although its privacy settings are very configurable out of the box, the more staunchly data-protective user might prefer [Librewolf](https://librewolf.net/), a privacy-oriented Firefox fork. 

As for customization, you can directly edit the browser CSS to make it look however you want. Firefox has also introduced tools like [Firefox Color](https://color.firefox.com/) to allow you to easily modify your color scheme. There are also a plethora of add-ons for Firefox, many of which allow for CSS tweaking. 

Here's a demo of my current Firefox setup:

{{< lightbox-image link="/images/blog/070223/firefox.webp" lightbox-id="ff" img-src="/images/blog/070223/firefox.webp" >}}

I've achieved this look with some CSS and a few add-ons. My setup features:
- A collapsible sidebar (expands on hover)
- An active/inactive tab counter that functions as a new tab button
- Italicized inactive/unread tabs 
- Clickable favicon to expand/collapse tab tree
- Hover to see what tab number you're on
- Tab titles and close button disappear when sidebar is collapsed 
- Top (horizontal) tabs are hidden in favor of tree tabs
- Window control buttons (minimize, maximize, close) are merged with the toolbar
- Active tab highlight color is selected from your Firefox theme
- Purple/pink color scheme

If you're a tab addict who cares deeply about screen real estate, continue reading for instructions on how to recreate my setup! This tutorial presumes you've already downloaded Firefox.

---

## Step 1: Customize Firefox Color
1. Get the Firefox Color [extension](https://addons.mozilla.org/en-US/firefox/addon/firefox-color/).
2. Head to the [website](https://color.firefox.com/).
3. Select whatever theme you want. Or make your own. You can also use [mine](https://color.firefox.com/?theme=XQAAAAI0AQAAAAAAAABBqYhm849SCia2CaaEGccwS-xNKlhhT7FcjMwJkEgE5uIU5XaaD-dDbJMXbYZiL9mB2eGL-22JKioNeP3kvNUGuFv85O6OCkMLhqTiAoy9NAf0li2BqE7IH_5i9zdkfuV24Q3C7VoAKA0TvFqaSMgczr6T5EO2b9XMA1WbCYMMRQEwU00jlqBbM35zYK5Hq7odbTonreJyxRSKaDyzFUdABtPZVnYYbjQmlZ1tNwHmYR-LPEU_frmNaxCV9Y3sRkWYzc3p-Y3GgElyLPb75YSX_z2cpQA), a slightly modified version of a pre-existing theme. 

{{< lightbox-image link="/images/blog/070223/ffcolor.webp" lightbox-id="ff" img-src="/images/blog/070223/ffcolor.webp" >}}

---

## Step 2: Get tree (vertical) tabs
1. Download Piro's [Tree Style Tab](https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/) add-on.
2. From your add-on list, you can right click and select "*Manage extension*".
3. Click the tab that says "*Preferences*".
4. Select the **Photon** theme. The Proton theme will also work.
5. Scroll down and reveal the "*Advanced*" options. Copy and paste the following Gist code into the code box. Note that your vertical tab text might vanish. Don't worry about it! We'll deal with the collapsing sidebar in step 3.
6. Note: Most of the changes I've made here are pulled from this [Github page](https://github.com/piroor/treestyletab/wiki/Code-snippets-for-custom-style-rules) full of tweaks. 

{{< gist js044 38d41c375b07075e1dbdae519d08bb8c >}}    

---

## Step 3: Access your Firefox CSS
1. In the taskbar, type `about:config`, press enter, and accept the risk.
2. Copy and paste `toolkit.legacyUserProfileCustomizations.stylesheets` in the searchbar. Make sure it's set to **true**. If not, click it twice.
3. Type `about:profiles` in the taskbar and press enter.
4. Under *"Profile: default-release"* (your default profile), locate the *"Root Directory"* tab and click *"Open Directory"*. 
5. Create a folder called *"chrome"*.
6. Create a file within that folder called `userChrome.css`
7. Copy and paste the following Gist into the code box. Restart Firefox to see changes. 
8. *Note that line 14 may require you to make alterations based on your viewport.

{{< gist js044 618a3ec1181a548dc88dd6bab0cd91f3 >}}    

---

## Step 4: Customizing Tabliss
1. For my new tab page, I use a FOSS add-on called [Tabliss](https://addons.mozilla.org/en-US/firefox/addon/tabliss/). Grab it for yourself!
2. Tabliss lets you fine-tune what backgrounds you want to display. They use the Unsplash API to allow you to select custom collections of photographs (along many other options). I made my own collection [here](https://unsplash.com/collections/_zqqJaaI4YQ/neon-purple), which you can reference in the Tabliss background settings by adding "_zqqJaaI4YQ" under "Collection."
3. You should add similar widgets, such as "Quick Links," "Search," and "Greeting". 
4. After you're done, select a new widget for "Custom CSS" and add this snippet. It adds Fira Sans, a translucent background box for the center, and modifies the search bar a bit.

```css
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');

.Slot.middleCentre {
background-color: rgba(90, 0, 90, 0.75); /* can change this */
border-radius: 5px;
border: 1px solid;
padding: 3em;
}

.Search input{
border: 0;
font-size:0.8em; 
outline:1px solid; 
border-radius: 5px;
padding:0.5em; 
}
```
---

Congrats, you are me! If all has gone well, your browser should look very cool and sexy like so:

{{< lightbox-image link="/images/blog/070223/newtab.webp" lightbox-id="ff" img-src="/images/blog/070223/newtab.webp" >}}
 