---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======

* M.Eng. in Computer Technology, Institute of Computing Technology, Chinese Academy of Sciences, 2023–2026
  * Advisor: Prof. Liang Li
* B.S. in Data Science, Yuanpei College, Peking University, 2019–2023

Research Interests
======

* Large Language Models (LLMs)
* Multimodal Large Language Models (MLLMs)
* Test-Time Scaling (TTS)
* Reliable multimodal understanding and evaluation-driven scaling

Publications
======

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
