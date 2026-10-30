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
      <p class="home-hero__research">I study how multimodal agents can turn visual understanding into reliable action. My work connects <a href="https://github.com/Hongcheng-Gao/HAVEN">video understanding</a> and <a href="https://spatial-world.github.io/">interactive spatial reasoning</a> with <a href="https://engiworld.github.io/">professional engineering tasks</a>, and explores how <a href="https://www.wq-will.com/simpletes">evaluation feedback and test-time scaling</a> can improve complex problem solving.</p>
      <div class="home-hero__links" aria-label="Contact links">
        <a href="mailto:tangjingyi23s@ict.ac.cn"><i class="fas fa-envelope" aria-hidden="true"></i><span>Email</span></a>
        <a href="https://scholar.google.com/citations?user=V3bIsMIAAAAJ"><i class="ai ai-google-scholar" aria-hidden="true"></i><span>Google Scholar</span></a>
        <a href="https://github.com/ColorDavid"><i class="fab fa-github" aria-hidden="true"></i><span>GitHub</span></a>
      </div>
    </div>
    <figure class="home-hero__portrait">
      <img src="{{ '/images/master.jpg' | relative_url }}" alt="Jingyi Tang in graduation regalia" width="3793" height="5690" fetchpriority="high">
    </figure>
  </section>

  <section class="home-section home-research" id="research" aria-labelledby="research-heading">
    <div class="modern-section-heading">
      <h2 id="research-heading">Selected projects</h2>
    </div>
    {% assign engiworld = site.publications | where: "project_key", "engiworld" | first %}
    <article class="project-feature">
      <a class="project-feature__image" href="https://engiworld.github.io/" target="_blank" rel="noopener noreferrer" aria-label="Explore the EngiWorld project">
        <img src="{{ '/images/projects/engiworld-showcase.jpg' | relative_url }}" alt="EngiWorld engineering tasks in FreeCAD, SolidWorks, Abaqus, Archicad, KiCad, and Blender" width="1920" height="1080" loading="lazy">
      </a>
      <div class="project-feature__copy">
        <p class="project-category">Engineering agents · 2026</p>
        <h3><a href="https://engiworld.github.io/" target="_blank" rel="noopener noreferrer">EngiWorld <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a></h3>
        <p class="project-feature__title">What Can Frontier Agents Deliver in Professional Engineering Environments?</p>
        {% include publication-resources.html publication=engiworld %}
      </div>
    </article>
    {% assign spatialworld = site.publications | where: "permalink", "/publication/2026-06-08-spatialworld" | first %}
    <article class="project-feature">
      <a class="project-feature__image" href="https://spatial-world.github.io/" target="_blank" rel="noopener noreferrer" aria-label="Explore the SpatialWorld project">
        <img src="{{ '/images/projects/spatialworld.png' | relative_url }}" alt="SpatialWorld benchmark overview" width="1977" height="1534" loading="lazy">
      </a>
      <div class="project-feature__copy">
        <p class="project-category">Spatial reasoning · 2026</p>
        <h3><a href="https://spatial-world.github.io/" target="_blank" rel="noopener noreferrer">SpatialWorld <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a></h3>
        <p class="project-feature__title">Benchmarking Interactive Spatial Reasoning of Multimodal Agents in Real-World Tasks</p>
        {% include publication-resources.html publication=spatialworld %}
      </div>
    </article>
    <div class="project-gallery">
      <a class="project-gallery__item" href="https://www.wq-will.com/simpletes" target="_blank" rel="noopener noreferrer">
        <span class="project-gallery__image"><img src="{{ '/images/projects/simpletes.png' | relative_url }}" alt="SimpleTES evaluation-driven scaling overview" width="3561" height="1242" loading="lazy"></span>
        <span class="project-gallery__label">SimpleTES <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></span><span class="project-category">Evaluation-driven scaling</span>
      </a>
      <a class="project-gallery__item" href="https://github.com/Hongcheng-Gao/HAVEN" target="_blank" rel="noopener noreferrer">
        <span class="project-gallery__image"><img src="{{ '/images/projects/haven.png' | relative_url }}" alt="HAVEN video hallucination evaluation overview" width="4488" height="1730" loading="lazy"></span>
        <span class="project-gallery__label">HAVEN <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></span><span class="project-category">Reliable video understanding</span>
      </a>
    </div>
  </section>

  <section class="home-section home-news" id="news" aria-labelledby="news-heading">
    <div class="modern-section-heading">
      <h2 id="news-heading">News</h2>
    </div>
    <ol class="modern-news-list">
      <li><time datetime="2026-09">Sep 2026</time><p><a href="https://engiworld.github.io/">EngiWorld</a> is out, with <a href="https://arxiv.org/abs/2609.37686">paper</a>, <a href="https://github.com/Hongcheng-Gao/EngiWorld">code</a>, and <a href="https://huggingface.co/datasets/HongchengGao/EngiWorld-Tasks">tasks</a>.</p></li>
      <li><time datetime="2026-06">Jun 2026</time><p><a href="https://arxiv.org/abs/2606.09669">SpatialWorld</a> is released as an arXiv preprint.</p></li>
      <li><time datetime="2026-06">Jun 2026</time><p><a href="https://arxiv.org/abs/2507.16863">Position: Reasoning After Perception Means Reasoning Without Vision</a> appears at ICML 2026's Position Paper Track.</p></li>
      <li><time datetime="2026-05">May 2026</time><p><a href="https://openreview.net/forum?id=59PrehaK6T">TreeReasoner</a> is accepted as an Oral at the 2nd ViSCALE workshop at CVPR 2026.</p></li>
    </ol>
  </section>

  <section class="home-section home-publications" id="publications" aria-labelledby="publications-heading">
    <div class="modern-section-heading modern-section-heading--with-link">
      <h2 id="publications-heading">Publications</h2>
      <a class="section-link" href="{{ '/publications/' | relative_url }}">View all <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
    </div>
    <div class="publication-list">
      {% assign publications = site.publications | sort: "date" | reverse %}
      {% for post in publications %}
        {% include publication-card.html post=post %}
      {% endfor %}
    </div>
  </section>

  <section class="home-section home-education" id="education" aria-labelledby="education-heading">
    <div class="modern-section-heading">
      <h2 id="education-heading">Education</h2>
    </div>
    <ol class="education-list">
      <li>
        <span class="education-logo education-logo--ict"><img src="{{ '/images/education/ict.png' | relative_url }}" alt="Institute of Computing Technology logo"></span>
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
