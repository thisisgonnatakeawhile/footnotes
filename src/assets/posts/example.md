---
title: title here
subtitle: subtitle here
author: author here
date: 2022-04-25
datestring: April 25th, 2022
tags: ["post"]
category: category here
order: 1
image: path/image.jpg
imageAlt: image alt
---

{%- set eleventy_footnote = "[Eleventy](https://11ty.dev/) is pretty neat. Try it out today!" | markdown -%}
{%- set zachleat_footnote = "[Zach on Twitter](https://twitter.com/zachleat)" | markdown -%}

## {{ title }}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<p>Something about {% footnoteref "Eleventy", eleventy_footnote %}Eleventy{% endfootnoteref %} that deserves a footnote explaining what they are.</p>
<p>And it was created by {% footnoteref "@zachleat", zachleat_footnote %}Zach Leatherman{% endfootnoteref %}.</p>

<aside data-testid="footnotes">
  {% footnotes %}
</aside>
