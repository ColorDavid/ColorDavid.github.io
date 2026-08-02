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

  if (savedTheme) {
    root.dataset.theme = savedTheme;
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
      try {
        window.localStorage.setItem("site-theme", root.dataset.theme);
      } catch (error) {
        // The preference remains active for this visit when storage is unavailable.
      }
      updateThemeIcon();
    });
  }

  if (backToTop) {
    function updateBackToTop() {
      backToTop.classList.toggle("is-visible", window.scrollY > 640);
    }

    updateBackToTop();
    window.addEventListener("scroll", updateBackToTop, { passive: true });
  }

  var menuToggle = document.querySelector("#site-nav > button");
  var hiddenLinks = document.getElementById("site-nav-links");

  if (menuToggle && hiddenLinks) {
    function updateMenuState() {
      menuToggle.setAttribute("aria-expanded", String(!hiddenLinks.classList.contains("hidden")));
    }

    updateMenuState();
    menuToggle.addEventListener("click", function () {
      window.setTimeout(updateMenuState, 0);
    });
  }
})();
