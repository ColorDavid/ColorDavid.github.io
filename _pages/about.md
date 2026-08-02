---
layout: profile-home
permalink: /
title: "Jingyi Tang"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="profile-hero" aria-labelledby="profile-name">
  <img class="profile-hero__photo" src="{{ '/images/color.jpg' | relative_url }}" alt="Portrait of Jingyi Tang">
  <div>
    <p class="profile-hero__eyebrow">Researcher in multimodal AI</p>
    <h1 class="profile-hero__name" id="profile-name">Jingyi Tang</h1>
    <p class="profile-hero__degree">M.Eng., Institute of Computing Technology, Chinese Academy of Sciences</p>
    <p class="profile-hero__intro">I work on multimodal agents, reliable video understanding, and evaluation-driven test-time scaling. I received my M.Eng. from the Institute of Computing Technology, CAS, advised by <a href="https://scholar.google.com/citations?user=Q-4mZnQAAAAJ&amp;hl=zh-CN">Liang Li</a>, and my B.S. in Data Science from <a href="https://yuanpei.pku.edu.cn/">Yuanpei College, Peking University</a>.</p>
    <ul class="profile-hero__links" aria-label="Contact and profiles">
      <li><a href="mailto:tangjingyi23s@ict.ac.cn">Email</a></li>
      <li><a href="https://scholar.google.com/citations?user=V3bIsMIAAAAJ">Google Scholar</a></li>
      <li><a href="https://github.com/ColorDavid">GitHub</a></li>
      <li><a href="{{ '/cv/' | relative_url }}">CV</a></li>
    </ul>
  </div>
</section>

<section class="profile-section profile-section--first" aria-labelledby="research-heading">
  <div class="section-heading"><h2 id="research-heading">Research</h2></div>
  <div class="research-grid">
    <article class="research-card"><h3>Multimodal agents</h3><p>Interactive spatial reasoning and reliable decision-making under partial visual observations.</p></article>
    <article class="research-card"><h3>Reliable video understanding</h3><p>Evaluating and reducing hallucinations in long-video, multimodal language models.</p></article>
    <article class="research-card"><h3>Test-time scaling</h3><p>Using structured evaluation feedback to scale discovery and tool-using agents.</p></article>
  </div>
</section>

<section class="profile-section" aria-labelledby="news-heading">
  <div class="section-heading"><h2 id="news-heading">News</h2></div>
  <ul class="news-list">
    <li><time datetime="2026-06">2026.06</time><a href="https://arxiv.org/abs/2606.09669">SpatialWorld</a> is released as an arXiv preprint.</li>
    <li><time datetime="2026-06">2026.06</time><a href="https://arxiv.org/abs/2507.16863">Position: Reasoning After Perception Means Reasoning Without Vision</a> appears at ICML 2026's Position Paper Track.</li>
    <li><time datetime="2026-05">2026.05</time><a href="https://openreview.net/forum?id=59PrehaK6T">TreeReasoner</a> is accepted as an Oral at the 2nd ViSCALE workshop at CVPR 2026.</li>
  </ul>
</section>

<section class="profile-section" aria-labelledby="selected-publications-heading">
  <div class="section-heading">
    <h2 id="selected-publications-heading">Selected publications</h2>
    <a class="section-heading__link" href="{{ '/publications/' | relative_url }}">View all →</a>
  </div>
  <div class="publication-list">
    {% assign publications = site.publications | sort: "date" | reverse %}
    {% for post in publications limit: 6 %}
      {% include publication-card.html post=post %}
    {% endfor %}
  </div>
</section>
