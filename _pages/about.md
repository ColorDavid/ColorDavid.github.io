---
layout: splash
permalink: /
title:
redirect_from:
  - /about/
  - /about.html
---

<div class="modern-home">
  <section class="home-hero" id="about" aria-labelledby="home-title">
    <div class="home-hero__copy">
      <h1 id="home-title">Jingyi Tang</h1>
      <p class="home-hero__bio">I recently completed my M.Eng. in 2026 under the supervision of <a href="https://scholar.google.com/citations?user=Q-4mZnQAAAAJ&amp;hl=zh-CN">Liang Li</a>. Before that, I received my B.S. in Data Science from <a href="https://yuanpei.pku.edu.cn/">Yuanpei College, Peking University</a> in 2023.</p>
      <p class="home-hero__research">My research centers on building multimodal agents that can perceive, reason, and act reliably in long-horizon environments. I study video understanding and interactive spatial reasoning, while developing benchmarks and evaluation-driven scaling methods that use feedback to improve grounded decision-making.</p>
      <div class="home-hero__links" aria-label="Contact links">
        <a href="mailto:tangjingyi23s@ict.ac.cn"><i class="fas fa-envelope" aria-hidden="true"></i><span>Email</span></a>
        <a href="https://scholar.google.com/citations?user=V3bIsMIAAAAJ"><i class="ai ai-google-scholar" aria-hidden="true"></i><span>Google Scholar</span></a>
        <a href="https://github.com/ColorDavid"><i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span></a>
      </div>
    </div>
    <figure class="home-hero__portrait">
      <img src="{{ '/images/master.jpg' | relative_url }}" alt="Jingyi Tang in graduation regalia">
    </figure>
  </section>

  <section class="home-section home-research" id="research" aria-labelledby="research-heading">
    <div class="modern-section-heading">
      <p>Research</p>
      <h2 id="research-heading">Selected projects</h2>
    </div>
    <div class="project-gallery">
      <a class="project-gallery__item" href="https://spatial-world.github.io/" target="_blank" rel="noopener noreferrer">
        <span class="project-gallery__image"><img src="https://raw.githubusercontent.com/Hongcheng-Gao/SpatialWorld/main/assets/spatialworld_main.png" alt="SpatialWorld benchmark overview" loading="lazy"></span>
        <span class="project-gallery__label">SpatialWorld <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></span>
      </a>
      <a class="project-gallery__item" href="https://www.wq-will.com/simpletes" target="_blank" rel="noopener noreferrer">
        <span class="project-gallery__image"><img src="https://raw.githubusercontent.com/wq-will/SimpleTES/main/assets/simpletes-overview.png" alt="SimpleTES evaluation-driven scaling overview" loading="lazy"></span>
        <span class="project-gallery__label">SimpleTES <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></span>
      </a>
      <a class="project-gallery__item" href="https://github.com/Hongcheng-Gao/HAVEN" target="_blank" rel="noopener noreferrer">
        <span class="project-gallery__image"><img src="https://raw.githubusercontent.com/Hongcheng-Gao/HAVEN/main/Fig/Main.png" alt="HAVEN video hallucination evaluation overview" loading="lazy"></span>
        <span class="project-gallery__label">HAVEN <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></span>
      </a>
    </div>
  </section>

  <section class="home-section home-news" id="news" aria-labelledby="news-heading">
    <div class="modern-section-heading">
      <p>Updates</p>
      <h2 id="news-heading">News</h2>
    </div>
    <ol class="modern-news-list">
      <li><time datetime="2026-06">Jun 2026</time><p><span class="news-icon" aria-hidden="true">🧭</span><a href="https://arxiv.org/abs/2606.09669">SpatialWorld</a> is released as an arXiv preprint.</p></li>
      <li><time datetime="2026-06">Jun 2026</time><p><span class="news-icon" aria-hidden="true">📄</span><a href="https://arxiv.org/abs/2507.16863">Position: Reasoning After Perception Means Reasoning Without Vision</a> appears at ICML 2026's Position Paper Track.</p></li>
      <li><time datetime="2026-05">May 2026</time><p><span class="news-icon" aria-hidden="true">🎙️</span><a href="https://openreview.net/forum?id=59PrehaK6T">TreeReasoner</a> is accepted as an Oral at the 2nd ViSCALE workshop at CVPR 2026.</p></li>
    </ol>
  </section>

  <section class="home-section home-publications" id="publications" aria-labelledby="publications-heading">
    <div class="modern-section-heading modern-section-heading--with-link">
      <div><p>Writing</p><h2 id="publications-heading">Selected publications</h2></div>
      <a class="section-link" href="{{ '/publications/' | relative_url }}">View all <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
    </div>
    <div class="publication-list">
      {% assign publications = site.publications | sort: "date" | reverse %}
      {% for post in publications limit: 6 %}
        {% include publication-card.html post=post %}
      {% endfor %}
    </div>
  </section>

  <section class="home-section home-education" id="education" aria-labelledby="education-heading">
    <div class="modern-section-heading">
      <p>Background</p>
      <h2 id="education-heading">Education</h2>
    </div>
    <ol class="education-list">
      <li>
        <span class="education-logo"><img src="{{ '/images/education/ict.png' | relative_url }}" alt="Institute of Computing Technology logo"></span>
        <div class="education-details">
          <h3>M.Eng. in Computer Technology</h3>
          <p><a href="http://www.ict.ac.cn/">Institute of Computing Technology, Chinese Academy of Sciences</a></p>
        </div>
        <span class="education-date"><time datetime="2023">2023</time> – <time datetime="2026">2026</time></span>
      </li>
      <li>
        <span class="education-logo"><img src="{{ '/images/education/pku.png' | relative_url }}" alt="Peking University logo"></span>
        <div class="education-details">
          <h3>B.S. in Data Science</h3>
          <p><a href="https://yuanpei.pku.edu.cn/">Yuanpei College, Peking University</a></p>
        </div>
        <span class="education-date"><time datetime="2019">2019</time> – <time datetime="2023">2023</time></span>
      </li>
    </ol>
  </section>
</div>
