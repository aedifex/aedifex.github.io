---
layout: page
title: Latin
subtitle: Translations, essays and notes
permalink: /latin/
css: ["/assets/css/latin.css"]
---

Before software, I trained as a classicist. This corner of the site is where that side lives: translations, essays and working notes on Latin and the Roman world.

<a class="latin-feed" href="{{ '/latin/feed.xml' | relative_url }}"><i class="fas fa-rss"></i> Subscribe to Latin only</a>

{% assign sections = "translation:Translations,essay:Essays & notes,reference:Reference" | split: "," %}
{% for section in sections %}
  {% assign parts = section | split: ":" %}
  {% assign entries = site.latin | where: "type", parts[0] | sort: "date" | reverse %}
  {% if entries.size > 0 %}
<div class="latin-section">
  <h2>{{ parts[1] }}</h2>
  <ul class="latin-list">
    {% for entry in entries %}
    <li>
      <a href="{{ entry.url | relative_url }}">{{ entry.title }}</a>
      {% unless parts[0] == "reference" %}<span class="latin-year">{{ entry.date | date: "%Y" }}</span>{% endunless %}
    </li>
    {% endfor %}
  </ul>
</div>
  {% endif %}
{% endfor %}
