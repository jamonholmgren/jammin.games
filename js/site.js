(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var behavior = reduce ? "auto" : "smooth";

  document.querySelectorAll("[data-strip]").forEach(function (strip) {
    var scroller = strip.querySelector(".strip-scroller");
    var prev = strip.querySelector(".strip-prev");
    var next = strip.querySelector(".strip-next");
    if (!scroller || !prev || !next) return;

    function step() {
      var card = scroller.querySelector("a, .cover-card");
      if (!card) return 280;
      var gap = 12;
      return card.getBoundingClientRect().width + gap;
    }

    function update() {
      var max = scroller.scrollWidth - scroller.clientWidth - 2;
      prev.disabled = scroller.scrollLeft <= 2;
      next.disabled = scroller.scrollLeft >= max;
    }

    prev.addEventListener("click", function () {
      scroller.scrollBy({ left: -step(), behavior: behavior });
    });
    next.addEventListener("click", function () {
      scroller.scrollBy({ left: step(), behavior: behavior });
    });
    scroller.addEventListener("scroll", update, { passive: true });
    scroller.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") {
        next.click();
        event.preventDefault();
      } else if (event.key === "ArrowLeft") {
        prev.click();
        event.preventDefault();
      }
    });
    update();
    window.addEventListener("resize", update);
  });

  var dialog = document.querySelector(".lightbox");
  if (dialog) {
    var full = document.createElement("img");
    full.alt = "";
    dialog.appendChild(full);
    var close = dialog.querySelector(".lightbox-close");
    document.querySelectorAll(".strip-scroller a[href]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        var source = link.querySelector("img");
        if (!source) return;
        event.preventDefault();
        full.src = link.getAttribute("href");
        full.alt = source.alt || "";
        if (typeof dialog.showModal === "function") dialog.showModal();
      });
    });
    if (close) close.addEventListener("click", function () { dialog.close(); });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
  }

  document.querySelectorAll("[data-gunship]").forEach(function (root) {
    var panels = Array.prototype.slice.call(root.querySelectorAll(".panel"));
    var index = 0;
    function show(next) {
      index = (next + panels.length) % panels.length;
      panels.forEach(function (panel, panelIndex) {
        if (panelIndex === index) panel.removeAttribute("hidden");
        else panel.setAttribute("hidden", "");
      });
    }
    root.querySelector("[data-prev]").addEventListener("click", function () {
      show(index - 1);
    });
    root.querySelector("[data-next]").addEventListener("click", function () {
      show(index + 1);
    });
  });

  var faqs = Array.prototype.slice.call(document.querySelectorAll("details.faq"));
  var exclusive = window.HTMLDetailsElement && "name" in HTMLDetailsElement.prototype;
  if (!exclusive) {
    faqs.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (!item.open) return;
        faqs.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      });
    });
  }
})();
