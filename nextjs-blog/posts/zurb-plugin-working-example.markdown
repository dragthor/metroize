---
date: "2016-04-03"
layout: post
title: "Zurb Plugin Working Example"
permalink: /zurb-plugin-working-example
meta: zurb
published: true
image: http://abe90238e3b628565257-c47b312812e6878374960f5d0b7661c9.r73.cf1.rackcdn.com/foundation-dude-blue.png
---
You've read the [Zurb 6 plugin introduction](/zurb-foundation-6-plugins/).  You've read the [documentation](http://foundation.zurb.com/sites/docs/).  You want to develop your own plugin, but you still have questions or want to see a working plugin example.  This article demonstrates a working Zurb `blink` tag plugin.  Remember these from the old Netscape days?  It's nothing elaborate, but hopefully it will help get you started.  You can jump right to the [working example](/zurb-6/plugin-blink.html) or follow along below.

![alt text](http://abe90238e3b628565257-c47b312812e6878374960f5d0b7661c9.r73.cf1.rackcdn.com/foundation-dude-blue.png "Zurb Plugin Working Example")

## Compatibility Warning
This example is using the generated version of Foundation.  Which means that it's not using Sass nor transpiled ES5 via [Babel](https://babeljs.io/).  Thus, it won't work with IE or older Android browsers until you incorporate the plugin into your Foundation build pipeline (check [ES6 classes compatibility](http://caniuse.com/#feat=es6-class)).  I've personally tested the `Blink` plugin with the latest and greatest versions of Firefox, Chrome, and Edge.  Zero issues found.  However, if you find any, please let me know by leaving a comment below.

## Markup
Below is the vanilla HTML markup.  `data-blink` signals to the registered javascript that it's a `Blink` plugin.  The `data-interval` attribute overrides the default option value of 500.  It's used for the blink visible/invisible rate.  This data attribute usage is consistent throughout the framework; the `Blink` plugin follows along with the pattern.  No need to implement `data-options` differently, which could lead to confusion.

    <div class="blink" data-blink data-interval="400">
        <h2>Under Construction!</h2>
    </div>

And yes, you can place multiple `Blink` components on the same page (see [working example](/zurb-6/plugin-blink.html)) similar to having multiple `Reveals`, `Tooltips`, `DropDowns`, etc.

## Blink Plugin JavaScript

<script src="https://gist.github.com/dragthor/3b47221fabbca0e04f1a4df8802e91a5.js"></script>

## Declarative Usage
Using your browser's F12 Dev tools, you can see that you now have access to the `Blink` plugin's `interval` option.  When "connecting the object dots", it flows and feels like the other plugins and components built into the framework.

    Foundation.Blink.defaults.interval = 100;

And, similarly you can call the `Blink` plugin methods too.

    $(".blink").foundation("stop");
    $(".blink").foundation("start");

In the [working example](/zurb-6/plugin-blink.html), I added two buttons to handle `click` events and call the appropriate method.

    $("button.alert").on("click", function(e) {
        e.preventDefault();
        $(".blink").foundation("stop");
    });

    $("button.success").on("click", function(e) {
        e.preventDefault();
        $(".blink").foundation("start");
    });

## Programmatic Usage
If you are creating the `Blink` plugin programmatically, you can invoke the methods directly too.

    var blink = new Foundation.Blink($('h1'), { interval:100 });
    blink.stop();
    blink.start();

## Conclusion
Hopefully this article helped you get to a starting point to begin creating Zurb plugins.  Please leave a comment or question below.  Or maybe you would like to see another example with additional features like `events`, `reflow`, `Keyboard`, or responsiveness?  Let [me](/about/) know.  Go Zurb!
