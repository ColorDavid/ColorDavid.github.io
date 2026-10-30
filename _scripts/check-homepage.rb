# Run after a Jekyll build: bundle exec ruby _scripts/check-homepage.rb /path/to/site
require "nokogiri"
require "pathname"
require "uri"

build = Pathname.new(ARGV.fetch(0))
home = Nokogiri::HTML5(build.join("index.html").read)
archive = Nokogiri::HTML5(build.join("publications/index.html").read)
detail = Nokogiri::HTML5(build.join("publication/2026-09-29-engiworld.html").read)
haven_detail = Nokogiri::HTML5(build.join("publication/2025-03-25-haven.html").read)

def check(condition, message)
  raise message unless condition
  puts "PASS: #{message}"
end

check(home.css("h1").length == 1, "Homepage has one primary heading")
check(home.css(".publication-item").length == 7, "All seven publications remain on the homepage")
check(archive.css(".publication-item").length == 7, "Publications archive includes all seven entries")
check(home.at_css(".publication-heading h3").text.start_with?("Exploring Hallucination"), "HAVEN's formal TACL publication is listed first")
expected = {
  "Paper" => "https://arxiv.org/abs/2609.37686",
  "Project" => "https://engiworld.github.io/",
  "Code" => "https://github.com/Hongcheng-Gao/EngiWorld",
  "Data" => "https://huggingface.co/datasets/HongchengGao/EngiWorld-Tasks"
}
engiworld_card = home.css(".publication-item").find { |item| item.at_css("h3").text.start_with?("EngiWorld:") }
[home.at_css(".project-feature"), engiworld_card, detail].each do |container|
  actual = container.css(".publication-resource").to_h { |a| [a.text.strip, a["href"]] }
  check(actual == expected, "EngiWorld resources match the verified sources")
end

haven_paper = "https://direct.mit.edu/tacl/article/doi/10.1162/TACL.a.813/139317/Exploring-Hallucination-of-Large-Multimodal-Models"
[home, archive].each do |doc|
  haven = doc.css(".publication-item").find { |item| item.at_css("h3").text.start_with?("Exploring Hallucination") }
  check(haven.at_css(".publication-year").text == "2026", "HAVEN uses the formal publication year")
  check(haven.at_css(".publication-venue").text.strip == "TACL", "HAVEN is labeled TACL, not a preprint")
  check(haven.at_css(".publication-authors").text.include?("Liang Li") && !haven.text.include?("Li Liang"), "HAVEN uses the journal's author spelling")
  resources = haven.css(".publication-resource").to_h { |a| [a.text.strip, a["href"]] }
  check(resources == {"Paper" => haven_paper, "arXiv" => "https://arxiv.org/abs/2503.19622", "Code" => "https://github.com/Hongcheng-Gao/HAVEN"}, "HAVEN retains the preprint and code beside the official paper")
end
check(haven_detail.at_css(".publication-detail__citation").text.include?("Volume 14, pages 2500–2527 (2026)"), "HAVEN's unchanged detail route shows the verified journal citation")
check(home.at_css(".modern-news-list time")["datetime"] == "2026-10", "News includes the October TACL publication")
check(build.join(home.at_css(".modern-news-list a")["href"].delete_prefix("/")).file?, "The new HAVEN News link resolves to a generated detail page")

check(detail.at_css(".publication-authors").text.split(", ").length == 22, "All 22 EngiWorld authors are present")
check(detail.at_css(".publication-authors strong").text == "Jingyi Tang", "Jingyi is highlighted without changing author order")
check(home.css(".publication-author-details").length == 5, "Five long author lists have native disclosures")
home.css(".publication-author-details").each do |disclosure|
  check(disclosure.at_css("summary") && disclosure.at_css("p[itemprop=author]"), "Author disclosure preserves full metadata")
end

[home, archive, detail, haven_detail].each do |doc|
  check(!doc.at_css("meta[name=description]")["content"].empty?, "Page has a non-empty search description")
  check(doc.css("a[target='_blank']").all? { |a| a["rel"].to_s.include?("noopener") }, "New-tab links use noopener")
  check(doc.css("img").all? { |img| !img["alt"].to_s.empty? }, "Images have descriptive alternative text")
  doc.css("img[src], script[src], link[rel=stylesheet]").each do |asset|
    uri = URI.parse(asset["src"] || asset["href"])
    next if uri.host && !["127.0.0.1", "colordavid.github.io"].include?(uri.host)
    check(build.join(uri.path.delete_prefix("/")).file?, "Local asset exists: #{uri.path}")
  end
end
check(home.css(".home-hero__research a").length == 4, "Research statement retains links to concrete projects")
check(home.css("script[src*=mathjax]").empty?, "Homepage avoids loading unused MathJax")
check(home.at_css(".skip-link") && home.at_css("#main"), "Skip link has a valid main-content target")
puts "Homepage checks passed."
