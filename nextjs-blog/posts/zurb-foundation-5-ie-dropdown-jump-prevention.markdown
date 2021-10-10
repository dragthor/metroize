---
date: "2016-05-25"
layout: post
title: "Zurb 5 IE Dropdown Jump Prevention"
permalink: /zurb-foundation-5-ie-dropdown-jump-prevention
meta: zurb
published: true
tags: Zurb
description: "Zurb Foundation 5 IE (internet explorer) dropdown jump prevention."
image: http://abe90238e3b628565257-c47b312812e6878374960f5d0b7661c9.r73.cf1.rackcdn.com/zurb-6.png
---
<div class="para">
Internet Explorer likes to "jump" the user into position when jQuery's <code>.focus()</code> is called within a <a href="https://get.foundation/sites/docs-v5/" target="_blank">Zurb 5</a> dropdown.  I don't like this.  Notice in the video below that when the dropdown is positioned at the bottom of the screen, and the user selects a dropdown, their positioning "jumps" up.  And then the dropdown disappears (this is a separate unrelated <code>scroll</code> handler issue).
</div>

<div class="js-video [vimeo, widescreen]">
<iframe width="100%" src="https://www.youtube.com/embed/OmuSAKOMjcQ?list=PLx-BRAFWgvyNCPrXLTvfmE4cNSPLhOKgp" frameborder="0" allowfullscreen></iframe>
</div>

<div class="para">
The jumping behavior seems to only be an issue with IE.  Firefox, Safari, and Chrome do not have the weird <code>.focus()</code> issue.  It's not hard to see that Microsoft is trying to center the user within the <code>window</code>.  Pretty reasonable for some situations, yet it's not what I want.  I desire consistency among IE, Firefox, Safari, and Chrome.
</div>

<div class="para">
The fix?  Simply do not call <code>.focus()</code>. View the <a href="https://github.com/zurb/foundation-sites/pull/8885/files" target="_blank">pull request</a>.  I added an additional setting named <code>no_focus</code> defaulting to the current behavior.  A developer can optionally override it when declaring the Zurb dropdown in HTML markup: <code>data-options="no_focus:true"</code>.
</div>

<div class="para">
We can grab a reference to the dropdown's instance settings inside the <code>open</code> function like this:
</div>

<pre><code class="language-js">var settings = target.data(this.attr_name(true) + '-init') || this.settings;</code></pre>

<div class="para">
And then decide to avoid the focus:
</div>

<pre><code class="language-js">if (settings.no_focus === false) {
    dropdown.focus(); 
}
</code></pre>

<div class="para">
Hurray!  No more jumping.  The video below demonstrates the desired behavior:
</div>

<div class="para">
<div class="js-video [vimeo, widescreen]">
<iframe width="100%" src="https://www.youtube.com/embed/D5BbHLIG4cE?list=PLx-BRAFWgvyNCPrXLTvfmE4cNSPLhOKgp" frameborder="0" allowfullscreen></iframe>
</div>
</div>

<h2>Final Thoughts</h2>

<div class="para">
Browser quirks are still prevalent.  Fortunately, <a href="https://get.foundation/sites/docs-v5/" target="_blank">Zurb Foundation 5</a> is still alive, heavily used, and supported by the open-source community.  
</div>

<div class="para">
Disclaimer: I am a Foundation fan, user, and minor open-source contributor.   And yes, I work for a company that sells bras.
</div>
