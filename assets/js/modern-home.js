(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var backToTop = document.getElementById("back-to-top");
  var savedTheme;

  try {
    savedTheme = window.localStorage.getItem("site-theme");
  } catch (error) {
    savedTheme = null;
  }

  var systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (savedTheme === "light" || savedTheme === "dark") {
    root.dataset.theme = savedTheme;
  } else {
    savedTheme = null;
    root.dataset.theme = systemTheme.matches ? "dark" : "light";
  }

  function updateThemeIcon() {
    if (!toggle) return;
    var isDark = root.dataset.theme === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    toggle.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
    toggle.innerHTML = isDark
      ? '<i class="fas fa-sun" aria-hidden="true"></i>'
      : '<i class="fas fa-moon" aria-hidden="true"></i>';
  }

  updateThemeIcon();

  if (toggle) {
    toggle.addEventListener("click", function () {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      savedTheme = root.dataset.theme;
      try {
        window.localStorage.setItem("site-theme", root.dataset.theme);
      } catch (error) {
        // The preference remains active for this visit when storage is unavailable.
      }
      updateThemeIcon();
    });
  }

  if (systemTheme.addEventListener) {
    systemTheme.addEventListener("change", function (event) {
      if (savedTheme) return;
      root.dataset.theme = event.matches ? "dark" : "light";
      updateThemeIcon();
    });
  }

  var topSentinel = document.getElementById("top-sentinel");
  if (backToTop && topSentinel && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      backToTop.classList.toggle("is-visible", !entries[0].isIntersecting);
    }, { rootMargin: "640px 0px 0px 0px" }).observe(topSentinel);
  }

  var menuToggle = document.querySelector("#site-nav > button");
  var hiddenLinks = document.getElementById("site-nav-links");

  if (menuToggle && hiddenLinks) {
    function updateMenuState() {
      var expanded = !hiddenLinks.classList.contains("hidden");
      menuToggle.setAttribute("aria-expanded", String(expanded));
      menuToggle.setAttribute("aria-label", expanded ? "Close navigation" : "Open navigation");
      menuToggle.classList.toggle("close", expanded);
    }

    function closeMenu() {
      hiddenLinks.classList.add("hidden");
      updateMenuState();
    }

    updateMenuState();
    new MutationObserver(updateMenuState).observe(hiddenLinks, { attributes: true, attributeFilter: ["class"] });
    hiddenLinks.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !hiddenLinks.classList.contains("hidden")) {
        closeMenu();
        menuToggle.focus();
      }
    });
    document.addEventListener("click", function (event) {
      if (!event.target.closest("#site-nav")) closeMenu();
    });
  }
})();
