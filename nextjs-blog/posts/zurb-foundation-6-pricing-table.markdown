---
date: "2016-05-10"
layout: post
title: "Zurb Foundation 6 Pricing Table"
permalink: /zurb-foundation-6-pricing-table
tags: zurb
published: true
description: "How to make a Zurb Foundation 6 pricing table.  They were removed from Zurb Foundation 6."
image: http://abe90238e3b628565257-c47b312812e6878374960f5d0b7661c9.r73.cf1.rackcdn.com/zurb6-pricing-table.PNG
---
<div class="para">
Zurb's <a href="http://foundation.zurb.com/sites/docs/" target="_blank">Foundation for Sites 6</a> no longer includes a Pricing table component.  No problem.  Let's put a Pricing table in the Zurb 6 pipeline.  They are great for marketing landing pages, product signups, and subscription or product comparisons.  Unfortunately, I saw a few people on the interwebs indicate Zurb 6's lack of Pricing tables a show stopper; preventing their move from Zurb 5 to Zurb 6.  At the end of the day, regardless of version, Zurb Foundation is still CSS, HTML, and Javascript.  And both Zurb 5 and Zurb 6 utilize <a href="http://sass-lang.com/" target="_blank">Sass</a>; although some Scss variables have either changed, were made obsolete, or flat-out no longer make sense.  After utilizing the code and instructions below, you will end up with a Zurb 6 responsive Pricing table.
</div>

<h2>The End Result</h2>

<div class="para">
I made it look exactly like a Zurb 5 Pricing table.  But you can modify the colors, border, and style if you like.
</div>

<img src="http://abe90238e3b628565257-c47b312812e6878374960f5d0b7661c9.r73.cf1.rackcdn.com/zurb6-pricing-table.PNG" alt="Zurb 6 Pricing Table" />

<h2>Markup</h2>

<div class="para">
The HTML stays exactly the same.  Notice we are <b>not</b> using a <code>table</code> tag.
</div>

<pre><code class="language-html">&lt;ul class="pricing-table"&gt;
  &lt;li class="title"&gt;Standard&lt;/li&gt;
  &lt;li class="price"&gt;$99.99&lt;/li&gt;
  &lt;li class="description"&gt;An awesome description&lt;/li&gt;
  &lt;li class="bullet-item"&gt;1 Database&lt;/li&gt;
  &lt;li class="bullet-item"&gt;5GB Storage&lt;/li&gt;
  &lt;li class="bullet-item"&gt;20 Users&lt;/li&gt;
  &lt;li class="cta-button"&gt;&lt;a class="button" href="#"&gt;Buy Now&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
</code></pre>

<h2>CSS</h2>

<div class="para">
If you haven't already done so, pull down and install <a href="https://github.com/zurb/foundation-sites" target="_blank">Zurb Foundation</a>.  If you are unsure, review the <a href="https://github.com/zurb/foundation-sites#getting-started" target="_blank">Getting Started</a> instructions.  If you are coming from Zurb 5, check out a previous post: <a href="/zurb-foundation-6-whats-new" target="_blank">What's new in Zurb Foundation 6?</a>.
</div>

<div class="para">
Using your favorite text editor or IDE, create and/or modify the following files.  I've been using Microsoft's free, open source, multi-platform [Visual Studio Code](https://code.visualstudio.com/).  It might be better than [Sublime Text](http://www.sublimetext.com/).
</div>

<code>scss/foundation.scss</code>

Append <code>@import 'components/pricingtable';</code> to the list of import statements.

<code>scss/components/_pricingtable.scss</code>

<div class="para">
Use the modified Scss below.
</div>

<pre><code class="language-css">/* http://metroize.com/zurb/ */

$gainsboro: #DDD;
$oil: #333;
$smoke:#F6F6F6;
$monsoon: #777;

// We use this to control the border color
$price-table-border: solid 1px $gainsboro;

// We use this to control the bottom margin of the pricing table
$price-table-margin-bottom: rem-calc(20);

// We use these to control the title styles
$price-title-bg: $oil;
$price-title-padding: rem-calc(15 20);
$price-title-align: center;
$price-title-color: $smoke;
$price-title-weight: $global-weight-normal;
$price-title-size: rem-calc(16);
$price-title-font-family: $body-font-family;

// We use these to control the price styles
$price-money-bg: $smoke;
$price-money-padding: rem-calc(15 20);
$price-money-align: center;
$price-money-color: $oil;
$price-money-weight: $global-weight-normal;
$price-money-size: rem-calc(32);
$price-money-font-family: $body-font-family;

// We use these to control the description styles
$price-bg: $white;
$price-desc-color: $monsoon;
$price-desc-padding: rem-calc(15);
$price-desc-align: center;
$price-desc-font-size: rem-calc(12);
$price-desc-weight: $global-weight-normal;
$price-desc-line-height: 1.4;
$price-desc-bottom-border: dotted 1px $gainsboro;

// We use these to control the list item styles
$price-item-color: $oil;
$price-item-padding: rem-calc(15);
$price-item-align: center;
$price-item-font-size: rem-calc(14);
$price-item-weight: $global-weight-normal;
$price-item-bottom-border: dotted 1px $gainsboro;

// We use these to control the CTA area styles
$price-cta-bg: $white;
$price-cta-align: center;
$price-cta-padding: rem-calc(20 20 0);

// @mixins
//
// We use this to create the container element for the pricing tables
@mixin pricing-table-container {
  border: $price-table-border;
  margin-left: 0;
  margin-bottom: $price-table-margin-bottom;

  & * {
    list-style: none;
    line-height: 1;
  }
}
// @mixins
//
// We use this mixin to create the pricing table title styles
@mixin pricing-table-title {
  background-color: $price-title-bg;
  color: $price-title-color;
  font-family: $price-title-font-family;
  font-size: $price-title-size;
  font-weight: $price-title-weight;
  padding: $price-title-padding;
  text-align: $price-title-align;
}

// @mixins
//
// We use this mixin to control the pricing table price styles
@mixin pricing-table-price {
  background-color: $price-money-bg;
  color: $price-money-color;
  font-family: $price-money-font-family;
  font-size: $price-money-size;
  font-weight: $price-money-weight;
  padding: $price-money-padding;
  text-align: $price-money-align;
}

// @mixins
//
// We use this mixin to create the description styles for the pricing table
@mixin pricing-table-description {
  background-color: $price-bg;
  border-bottom: $price-desc-bottom-border;
  color: $price-desc-color;
  font-size: $price-desc-font-size;
  font-weight: $price-desc-weight;
  line-height: $price-desc-line-height;
  padding: $price-desc-padding;
  text-align: $price-desc-align;
}

// @mixins
//
// We use this mixin to style the bullet items in the pricing table
@mixin pricing-table-bullet {
  background-color: $price-bg;
  border-bottom: $price-item-bottom-border;
  color: $price-item-color;
  font-size: $price-item-font-size;
  font-weight: $price-item-weight;
  padding: $price-item-padding;
  text-align: $price-item-align;
}

// @mixins
//
// We use this mixin to style the CTA area of the pricing tables
@mixin pricing-table-cta {
  background-color: $price-cta-bg;
  padding: $price-cta-padding;
  text-align: $price-cta-align;
}

/* Pricing Tables */
.pricing-table {
    @include pricing-table-container;

    .title { @include pricing-table-title; }
    .price { @include pricing-table-price; }
    .description { @include pricing-table-description; }
    .bullet-item { @include pricing-table-bullet; }
    .cta-button { @include pricing-table-cta; }
}
</code></pre>

<h2>Final Thoughts</h2>

<div class="para">
Pricing tables were missed.  And I agree with Zurb's decision to not make them part of the core framework.  They are too specific and niche.  But I showed you how to bring Pricing tables back.  One less excuse to not transition from Zurb 5 to Zurb 6.  Now get back out there and design something responsively awesome!
</div>

<div class="para">
Disclaimer: I am a Foundation fan, user, and minor open-source contributor.
</div>
