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
    toggle.innerHTML = root.dataset.theme === "dark"
      ? '<i class="fas fa-sun" aria-hidden="true"></i>'
      : '<i class="fas fa-moon" aria-hidden="true"></i>';
  }

  updateThemeIcon();

  if (toggle) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
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
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("is-visible", window.scrollY > 640);
    }, { passive: true });
  }
})();
