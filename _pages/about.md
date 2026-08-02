---
layout: single
permalink: /
title:
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="academic-home">
  <section class="home-intro" id="about">
    <p class="home-lead">Hi, I’m <strong>Jingyi Tang</strong>.</p>
    <p>I am a 2026 M.Eng. graduate from the Institute of Computing Technology, Chinese Academy of Sciences, advised by <a href="https://scholar.google.com/citations?user=Q-4mZnQAAAAJ&amp;hl=zh-CN">Liang Li</a>. Before that, I received my B.S. in Data Science from <a href="https://yuanpei.pku.edu.cn/">Yuanpei College, Peking University</a> in 2023.</p>
    <p class="research-statement">My research focuses on multimodal agents, reliable video understanding, and evaluation-driven test-time scaling. I am particularly interested in interactive spatial reasoning and how evaluation feedback can make long-horizon model behavior more reliable.</p>
  </section>

  <section class="home-section" id="news">
    <div class="section-heading"><h2>News</h2></div>
    <ol class="news-list">
      <li><time class="news-date" datetime="2026-06">Jun 2026</time><div class="news-copy"><a href="https://arxiv.org/abs/2606.09669">SpatialWorld</a> is released as an arXiv preprint.</div></li>
      <li><time class="news-date" datetime="2026-06">Jun 2026</time><div class="news-copy"><a href="https://arxiv.org/abs/2507.16863">Position: Reasoning After Perception Means Reasoning Without Vision</a> appears at ICML 2026's Position Paper Track.</div></li>
      <li><time class="news-date" datetime="2026-05">May 2026</time><div class="news-copy"><a href="https://openreview.net/forum?id=59PrehaK6T">TreeReasoner</a> is accepted as an Oral at the 2nd ViSCALE workshop at CVPR 2026.</div></li>
    </ol>
  </section>

  <section class="home-section" id="publications">
    <div class="section-heading"><h2>Publications</h2><a href="{{ '/publications/' | relative_url }}">All publications</a></div>
    <div class="publication-list">
    {% assign publications = site.publications | sort: "date" | reverse %}
    {% for post in publications limit: 6 %}
      {% include publication-card.html post=post %}
    {% endfor %}
    </div>
  </section>
</div>
