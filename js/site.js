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
      var styles = window.getComputedStyle(scroller);
      var gap = parseFloat(styles.columnGap || styles.gap) || 0;
      return card.getBoundingClientRect().width + gap;
    }

    function update() {
      var max = scroller.scrollWidth - scroller.clientWidth - 2;
      var overflow = max > 0;
      prev.hidden = !overflow;
      next.hidden = !overflow;
      prev.disabled = !overflow || scroller.scrollLeft <= 2;
      next.disabled = !overflow || scroller.scrollLeft >= max;
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
    document.querySelectorAll(".strip-scroller a.shot").forEach(function (link) {
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
    var prevBtn = root.querySelector("[data-prev]");
    var nextBtn = root.querySelector("[data-next]");
    if (prevBtn) prevBtn.addEventListener("click", function () { show(index - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { show(index + 1); });
  });

  var faqs = Array.prototype.slice.call(document.querySelectorAll("details.faq"));
  var duration = reduce ? 0 : 280;

  function answerOf(item) {
    return item.querySelector(".answer");
  }

  function visibleHeight(el) {
    return el.getBoundingClientRect().height;
  }

  function animateHeight(el, from, to, done) {
    if (el._faqAnim) {
      try { el._faqAnim.cancel(); } catch (err) {}
      el._faqAnim = null;
    }
    el._faqDone = done;
    el.style.overflow = "hidden";
    if (!duration || !el.animate) {
      el.style.height = to ? "auto" : "0px";
      el._faqDone = null;
      if (done) done();
      return;
    }
    var start = from;
    el.style.height = start + "px";
    var anim = el.animate(
      [{ height: start + "px" }, { height: to + "px" }],
      { duration: duration, easing: "ease" }
    );
    el._faqAnim = anim;
    anim.onfinish = function () {
      if (el._faqAnim !== anim) return;
      el._faqAnim = null;
      el.style.height = to ? "auto" : "0px";
      var cb = el._faqDone;
      el._faqDone = null;
      if (cb) cb();
    };
    anim.oncancel = function () {
      if (el._faqAnim === anim) el._faqAnim = null;
    };
  }

  function closeFaq(item, done) {
    var answer = answerOf(item);
    var from = visibleHeight(answer);
    if (!from && !item.open) {
      if (done) done();
      return;
    }
    animateHeight(answer, from, 0, function () {
      item.open = false;
      answer.style.height = "";
      if (done) done();
    });
  }

  function openFaq(item) {
    faqs.forEach(function (other) {
      if (other !== item && (other.open || other._wantOpen)) {
        other._wantOpen = false;
        closeFaq(other);
      }
    });
    var answer = answerOf(item);
    var from = item.open ? visibleHeight(answer) : 0;
    item.open = true;
    var to = answer.scrollHeight;
    animateHeight(answer, from, to, function () {
      answer.style.height = "auto";
    });
  }

  faqs.forEach(function (item) {
    var summary = item.querySelector("summary");
    if (!summary) return;
    item._wantOpen = item.open;
    summary.addEventListener("click", function (event) {
      event.preventDefault();
      if (item._wantOpen) {
        item._wantOpen = false;
        closeFaq(item);
      } else {
        item._wantOpen = true;
        openFaq(item);
      }
    });
  });
})();
