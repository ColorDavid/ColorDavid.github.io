---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
---

<div class="modern-publications publication-page">
<p class="publication-page__lede">Selected research on multimodal agents, visual perception and video understanding, and evaluation-driven scaling. See also <a href="https://scholar.google.com/citations?user=V3bIsMIAAAAJ">Google Scholar</a>.</p>

<div class="publication-list">
  {% assign publications = site.publications | sort: "date" | reverse %}
  {% for post in publications %}
    {% include publication-card.html post=post %}
  {% endfor %}
</div>
</div>
