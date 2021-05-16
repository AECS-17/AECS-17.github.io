---
layout: page
title: 📰 Blog
order: 20
---

{% for post in site.posts %}
<ul>
<li class="style{{ forloop.index | plus:1 }}">
<a href="{{ post.url | prepend:site.baseurl | prepend:site.url }}">
<strong>{{ post.title }} ({{ post.date | date: "%d/%m/%Y"}})</strong><br/>
<em>{{ post.summary }}</em>
<br/>{{ post.excerpt }}
</a>
</li>
</ul>
{% endfor %}

