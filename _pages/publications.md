---
layout: profile-home
title: "Publications"
permalink: /publications/
author_profile: false
---

<div class="section-heading">
  <h1>Publications</h1>
  <a class="section-heading__link" href="https://scholar.google.com/citations?user=V3bIsMIAAAAJ">Google Scholar ↗</a>
</div>
<p class="publication-page__lede">Selected research on multimodal agents, visual perception and video understanding, and evaluation-driven scaling. Resource links point to the paper and any publicly released project materials.</p>

<div class="publication-list">
  {% assign publications = site.publications | sort: "date" | reverse %}
  {% for post in publications %}
    {% include publication-card.html post=post %}
  {% endfor %}
</div>
