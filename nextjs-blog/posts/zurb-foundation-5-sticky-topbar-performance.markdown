---
date: "2016-06-07"
layout: post
title: "Zurb 5 Sticky Topbar Performance"
permalink: /zurb-foundation-5-sticky-topbar-performance
meta: zurb performance
published: true
tags: Zurb
description: "Zurb Foundation 5 sticky topbar performance."
image: http://abe90238e3b628565257-c47b312812e6878374960f5d0b7661c9.r73.cf1.rackcdn.com/zurb-6.png
---
<div class="para">
While profiling our <a href="http://foundation.zurb.com/sites/docs/v/5.5.3/" target="_blank">Zurb 5</a> implementation, we noticed a slight bottle neck using the "sticky" <code>topbar</code> component.  The user would sometimes experience a "stutter" or "glitch" while scrolling.  And users with lower end devices would experience the issue more often.
</div>

<img src="http://abe90238e3b628565257-c47b312812e6878374960f5d0b7661c9.r73.cf1.rackcdn.com/zurb-6.png" alt="Zurb" />

<div class="para">
The problem: <code>update_sticky_positioning</code> is called a lot. Too much.  After a couple of good scrolls, hundreds of times.
</div>

<div class="para">
The solution: <code>throttle</code> the <code>scroll</code> handler when calling <code>update_sticky_positioning</code>.
</div>

<div class="para">
I introduced a new setting named <code>scroll_throttle</code> with a default value of 300 milliseconds. Throughout our test cycles the value works well.
</div>  

<div class="para">
Inside the <code>sticky</code> function this:
</div>

<pre><code class="language-js">this.S(window).on('scroll', 
    function () { self.update_sticky_positioning();
});</code></pre>

<div class="para">
Becomes:
</div>

<pre><code class="language-js">this.S(window).on('scroll', self.throttle( function () {
    self.update_sticky_positioning();
}, self.settings.scroll_throttle));</code></pre>

<div class="para">
View the <a href="https://github.com/zurb/foundation-sites/pull/8884/files" target="_new">pull request</a>.  Sure, it's a slight gain but the stutter is pretty much gone.
</div>

<div class="para">
Javascript profiler before:
</div>

<img src="https://cloud.githubusercontent.com/assets/156634/15751986/2d2c124c-28ba-11e6-8ecb-c781ea6fa410.PNG" alt="Zurb 5 Tobar Profiled Before" />

<div class="para">
Javascript profiler after:
</div>

<img src="https://cloud.githubusercontent.com/assets/156634/15751989/30daf980-28ba-11e6-9328-f189d395c489.PNG" alt="Zurb 5 Tobar Profiled After" />

<div class="para">
Disclaimer: I am a Foundation fan, user, and minor open-source contributor.  And yes, I work for a company that sells bras.
</div>