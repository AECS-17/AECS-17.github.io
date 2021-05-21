---
layout: page
title: Blog
menu_icon: 📰
order: 20
---

{% for post in site.posts %}
<ul>
<li class="style{{ forloop.index | plus:1 }}">
<a href="{{ post.url | prepend:site.baseurl | prepend:site.url }}">
<strong>{{ post.title }} ({{ post.date | date: "%d/%m/%Y"}})</strong>
{% if post.summary %}
<br/><em>{{ post.summary }}</em>
{% endif %}
<br/>{{ post.excerpt }}
</a>
</li>
</ul>
{% endfor %}

