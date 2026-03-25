// Theme picker - cookie-based persistence for broad browser support (IE6+)
(function () {
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var d = new Date();
      d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + d.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/; SameSite=Lax";
  }

  var picker = document.getElementById("theme-select");
  if (!picker) return;

  var current =
    document.documentElement.getAttribute("data-theme") || "98-light";
  picker.value = current;

  function onChange() {
    var theme = picker.value;
    document.documentElement.setAttribute("data-theme", theme);
    setCookie("theme", theme, 365);
  }

  if (picker.addEventListener) {
    picker.addEventListener("change", onChange);
  } else if (picker.attachEvent) {
    picker.attachEvent("onchange", onChange);
  }
})();
