---
layout: page
title: News
permalink: /news/
---

<div class="row">
<div class="col-md-12">
  {% for post in site.posts %}
    <div class="post">
        <h2 class="post-title">
            <a href="{{ post.url }}">
            {{ post.title }}
            </a>
        </h2>
            <span class="post-date">{{ post.date | date_to_string }}</span>
        
        <p>{{ post.content | truncatewords:47 | strip_html }}</p>
    </div>

    {% endfor %}

    </div>
    </div>