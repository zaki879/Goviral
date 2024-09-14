/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /gh/ilja-van-eck/Bouchebtoul@2.0.0/src/script.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */

const isMobile = window.innerWidth < 480,
  isMobileLandscape = window.innerWidth < 768,
  isDesktop = window.innerWidth > 991,
  loadWrap = document.querySelector(".load-w"),
  pageOverlay = document.querySelector(".page-overlay"),
  loadBg = loadWrap.querySelector(".load-bg"),
  navW = document.querySelector(".nav-w");
let titleLines,
  closeMenu,
  ranHomeLoader = !1,
  generalFlag = !1,
  mobileMenuOpen = !1,
  dropdownOpen = !1,
  dropdownClick = !1,
  globalMuteState = !1,
  globalPlayState = !0;
const lottieAnimations = [
    "",
    "",
    "",
  ],
  cardWrapTimelines = new Map();
let splitLetters,
  splitLines,
  splitWords,
  resizeTimer,
  previousWindowWidth = window.innerWidth;
function handleResize() {
  window.innerWidth !== previousWindowWidth &&
    (clearTimeout(resizeTimer),
    (resizeTimer = setTimeout(function () {
      window.location.reload(), (previousWindowWidth = window.innerWidth);
    }, 250)));
}
function supportsTouch() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function transitionOut(e) {
  gsap.set(loadWrap, { display: "flex" }),
    gsap.set(loadBg, { transformOrigin: "100% 100%" }),
    gsap.to(e, { y: "-10vh", duration: 1.2, ease: "expo.inOut" }),
    gsap.fromTo(
      pageOverlay,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "expo.inOut" }
    );
}
function transitionIn(e, t) {
  e || (e = document.querySelector('[data-barba="container"]')),
    t || (t = e.getAttribute("data-barba-namespace"));
  const o = "home" === t ? "light" : "dark";
  navW.removeAttribute("theme"),
    setTimeout(() => {
      navW.setAttribute("theme", o);
    }, 500),
    mobileMenuOpen && closeMenu();
  let r = e.querySelector("[data-header-title]"),
    a = e.querySelectorAll("[data-header-fade]");
  new SplitType("[data-header-title]", { types: "lines" });
  setTimeout(() => {
  }, 400),
    gsap.set(loadBg, { transformOrigin: "100% 100%" }),
    gsap.fromTo(
      pageOverlay,
      { opacity: 1 },
      { opacity: 0, duration: 1.2, ease: "expo.inOut" }
    ),
    gsap.from(e, {
      y: prefersReducedMotion() ? 0 : "10vh",
      duration: 1.2,
      ease: "expo.inOut",
      clearProps: "all",
    }),
    gsap.fromTo(
      loadBg,
      { scaleY: 0, borderRadius: "0px 0px 0vw 0vw" },
      {
        scaleY: 0,
        borderRadius: "0px 0px 100vw 100vw",
        duration: 1.2,
        ease: "expo.inOut",
        onComplete: () => {
          gsap.set(loadWrap, { display: "none" });
        },
      }
    ),
    prefersReducedMotion() ||
      (gsap.from(a, {
        yPercent: 40,
        opacity: 0,
        stagger: { each: 0.1, from: "start" },
        ease: "back.out(4)",
        clearProps: "all",
        duration: 0.5,
        delay: 0.6,
      }),
      gsap.delayedCall(0.5, () => {
        gsap.from(titleLines, {
          yPercent: 40,
          opacity: 0,
          stagger: { each: 0.1, from: "start" },
          ease: "back.out(4)",
          duration: 0.5,
        }),
          "guidance" === t && controlTimeline("[data-cards-wrap]", "play");
      }));
}
function initHomeLoader() {
  if (!0 === ranHomeLoader) return;
  let e = document.body,
    t = document.querySelector(".main-w"),
    o = loadWrap.querySelector(".load-progress"),
    r = loadWrap.querySelector(".load-logo"),
    a = loadWrap.querySelector(".load-bar"),
    n = document.querySelector("header"),
    i = n.querySelector("[data-header-title]"),
    l = n.querySelectorAll("[data-header-fade]");
  new SplitType("[data-header-title]", { types: "lines" });
  setTimeout(() => {
    titleLines = i.querySelectorAll(".line");
  }, 1e3);
  let s = lottie.loadAnimation({
    container: r,
    renderer: "svg",
    loop: !1,
    autoplay: !1,
    path: r.getAttribute("data-animation-path"),
  });
  t.classList.add("is--transitioning"),
    navW.setAttribute("theme", "light"),
    gsap.set(e, { cursor: "wait" }),
    gsap.set(a, { display: "flex" }),
    gsap.set(loadBg, { transformOrigin: "100% 100%" });
  let c = gsap.timeline();
  c
    .to(o, {
      width: "100%",
      duration: 4,
      delay: 0.3,
      ease: "power3.inOut",
      onStart: () => {
        s.play();
      },
    })
    .to(a, { scaleX: 0, duration: 0.4, delay: 0.1, ease: "power3.in" })
    .to(r, { opacity: 0, duration: 0.4, delay: 0.2, ease: "power3.in" }, "<")
    .to(
      loadBg,
      {
        scaleY: 0,
        borderRadius: "0px 0px 100vw 100vw",
        ease: "expo.inOut",
        duration: 1.4,
        onComplete: () => {
          gsap.set(e, { cursor: "default" }),
            gsap.set(loadWrap, { display: "none" }),
            lenis.start(),
            t.classList.remove("is--transitioning"),
            ScrollTrigger.refresh(),
            (ranHomeLoader = !0),
            localStorage.setItem("loaderShown", "true");
        },
        onStart: () => {
          initHomeVideo();
        },
      },
      4.3
    )
    .from(
      t,
      {
        yPercent: prefersReducedMotion() ? 0 : 10,
        duration: 1.6,
        ease: "expo.inOut",
        clearProps: "all",
      },
      "<"
    )
    .from(
      l,
      {
        yPercent: prefersReducedMotion() ? 0 : 40,
        opacity: 0,
        stagger: 0.15,
        ease: "back.out(4)",
        clearProps: "all",
        duration: 0.6,
      },
      "<+=1"
    ),
    gsap.delayedCall(3, () => {
      c.from(
        titleLines,
        {
          yPercent: prefersReducedMotion() ? 0 : 40,
          opacity: 0,
          stagger: 0.15,
          ease: "back.out(4)",
          duration: 0.6,
          clearProps: "all",
        },
        ">-=1"
      );
    });
}
function resetWebflow(e) {
  let t = new DOMParser()
    .parseFromString(e.next.html, "text/html")
    .querySelector("html")
    .getAttribute("data-wf-page");
  document.documentElement.setAttribute("data-wf-page", t),
    window.Webflow.destroy(),
    window.Webflow.ready(),
    window.Webflow.require("ix2").init();
}
function playLottieAnimationsStaggered(e, t) {
  e.forEach((e, o) => {
    gsap.delayedCall(t * o, () => e.play());
  });
}
function resetLottieAnimations(e) {
  e.forEach((e) => {
    e.goToAndStop(0, !0);
  });
}
function initBurgerMenu() {
 
}


function initCursorAndButtons(e) {
  !1 === generalFlag && (e = document.querySelector("body"));
  let t = document.querySelector(".cursor-item");
  if (!t) return;
  let o = 0,
    r = 0,
    a = 0,
    n = 0,
    i = 0,
    l = 0,
    s = 0,
    c = 0;
  function d(e, t) {
    switch (t) {
      case "top-left":
        (e.style.left = "0px"),
          (e.style.top = "0px"),
          (e.style.transform = "translate(-50%, -50%)");
        break;
      case "top-right":
        (e.style.right = "0px"),
          (e.style.top = "0px"),
          (e.style.transform = "translate(50%, -50%)");
        break;
      case "bottom-left":
        (e.style.left = "0px"),
          (e.style.bottom = "0px"),
          (e.style.transform = "translate(-50%, 50%)");
        break;
      case "bottom-right":
        (e.style.right = "0px"),
          (e.style.bottom = "0px"),
          (e.style.transform = "translate(50%, 50%)");
    }
  }
  !(function e() {
    (i += 0.1 * (o - a)),
      (l += 0.1 * (r - n)),
      (i *= 0.55),
      (l *= 0.55),
      (a += i),
      (n += l);
    let d = r - s;
    var u;
    (c =
      Math.abs(d) > 0.2
        ? Math.max(Math.min(c + -0.1 * d, 90), -90)
        : (1 - (u = 0.06)) * c + u * 0),
      (t.style.transform = `translate(${a}px, ${n}px) rotate(${c}deg)`),
      (s = r),
      requestAnimationFrame(e);
  })(),
  
    document.querySelectorAll("[data-cursor]").forEach((e) => {
      e.addEventListener("mouseenter", function () {
        const e = document.querySelector(".cursor-item");
        e && (e.style.display = "flex");
        const t = this.getAttribute("data-cursor");
        if (t) {
          const e = document.querySelector("[data-cursor-text]");
          e && (e.textContent = t);
        }
      }),
        e.addEventListener("mouseleave", function () {
          const e = document.querySelector(".cursor-item");
          e && (e.style.display = "");
        });
    }),
    e.querySelectorAll(".button").forEach((e) => {
      prefersReducedMotion() ||
        e.addEventListener("mouseenter", function () {
          const t = e.parentElement,
            o = (e.getBoundingClientRect(), Math.floor(2 * Math.random()) + 1);
          for (let r = 0; r < o; r++) {
            const o = document.createElement("div");
            (o.style.position = "absolute"),
              (o.style.width = "120px"),
              (o.style.height = "120px"),
              (o.style.pointerEvents = "none");
            const r = Math.floor(Math.random() * lottieAnimations.length),
              a = lottieAnimations[r],
              n = ["top-left", "top-right", "bottom-left", "bottom-right"],
              i = n[Math.floor(Math.random() * n.length)];
            d(o, i), t.appendChild(o);
            const l = lottie.loadAnimation({
              container: o,
              renderer: "svg",
              loop: !1,
              autoplay: !0,
              path: a,
            });
            gsap
              .timeline({})
              .to(e, { scale: 0.95, duration: 0.25 })
              .to(e, { scale: 1, duration: 0.45, ease: "back.out(5)" }),
              l.addEventListener("complete", () => {
                o.remove();
              });
          }
        });
    });
}
function initToolTips() {
  const e = document.querySelectorAll(".tooltip-w");
  e &&
    e.forEach((e) => {
      e.addEventListener("mouseenter", () => {
        const t = e.querySelector(".tooltip");
        t && t.classList.add("active");
      }),
        e.addEventListener("mouseleave", () => {
          const t = e.querySelector(".tooltip");
          t && t.classList.remove("active");
        });
    });
}
function initHomeVideo() {
  let e;
  (e = isMobile
    ? document.querySelector("#hero-vid-mobile")
    : document.querySelector("#hero-vid-desktop")),
    e && setupTextTransitions(e, timestamps);
}
function setupTextTransitions(e, t) {
  const o = e,
    r = document.querySelectorAll("[data-home-sub] p");
  let a = 0,
    n = 0;
  function i(e, t) {
    gsap.fromTo(
      r[e].querySelectorAll(".word"),
      { autoAlpha: 1, y: "0em" },
      {
        autoAlpha: 0,
        y: "-1em",
        stagger: prefersReducedMotion() ? 0 : 0.025,
        duration: 0.4,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(r[e].querySelectorAll(".word"), { autoAlpha: 0, y: "1em" });
        },
      }
    ),
      gsap.fromTo(
        r[t].querySelectorAll(".word"),
        { y: "1em", autoAlpha: 0 },
        {
          y: "0em",
          autoAlpha: 1,
          stagger: prefersReducedMotion() ? 0 : 0.025,
          delay: 0.1,
          duration: 0.4,
          ease: "back.out(1.5)",
          onStart: () => gsap.set(r[t], { autoAlpha: 1 }),
        }
      );
  }
  gsap.set(r, { autoAlpha: 0 }),
    gsap.to(r[0].querySelectorAll(".word"), {
      autoAlpha: 1,
      y: "0em",
      stagger: 0.01,
      duration: 0.4,
      ease: "back.out(1)",
      onComplete: () => gsap.set(r[0], { autoAlpha: 1 }),
    }),
    o.addEventListener("timeupdate", () => {
      const e = o.currentTime;
      if (e < a) i(n, 0), (n = 0);
      else {
        const o = t.findIndex((t, o) => e >= t && o > n);
        -1 !== o && o !== n && (i(n, o), (n = o));
      }
      a = e;
    });
}
function initSaveCalculator() {
  const e = 1e3,
    t = 5,
    o = [
      { comparison: "Bouchebtoul", apy: t, highlight: !0 },
      { comparison: "Apple<sup>3</sup>", apy: 4.25 },
      { comparison: "Natl Avg<sup>*</sup>", apy: 0.46 },
      { comparison: "Chase<sup>3</sup>", apy: 0.01 },
    ],
    r = new Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    a = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    n = document.getElementById("apyTable");
  o.forEach((e) => {
    const t = document.createElement("tr");
    e.highlight && t.setAttribute("class", "yellow"),
      t.insertAdjacentHTML(
        "beforeend",
        `<td>${e.comparison}</td><td>${r.format(
          e.apy / 100
        )} APY</td><td data-apy="${e.apy}">$${a.format(
          (2e4 * e.apy) / 100
        )}</td>`
      ),
      n.appendChild(t);
  });
  const i = document.getElementById("cashEntryInput");
  function l(e) {
    return e.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function s(o, r) {
    var n = o.value;
    if ("" === n) return;
    var i = n.length,
      s = o.selectionStart;
    if (n.indexOf(".") >= 0) {
      var u = n.indexOf("."),
        p = n.substring(0, u),
        g = n.substring(u);
      (p = l(p)),
        (g = l(g)),
        "blur" === r && (g += "00"),
        (n = "$" + p + "." + (g = g.substring(0, 2)));
    } else (n = "$" + (n = l(n))), "blur" === r && (n += ".00");
    (o.value = n), (s = n.length - i + s), o.setSelectionRange(s, s);
    const m = parseFloat(n.replaceAll("$", "").replaceAll(",", ""));
    !(function (e) {
      e || (e = 0);
      for (let t = 0; t < c.length; t++) {
        const o = c[t],
          r = parseFloat(o.getAttribute("data-apy")) / 100;
        o.innerHTML = "$" + a.format(e * r);
      }
    })(m),
      (function (o) {
        const r = (t / 100) * o;
        d.style.visibility = r >= e ? "visible" : "hidden";
      })(m);
  }
  (i.onclick = function () {
    "" === i.value && (i.value = "$");
  }),
    (i.onkeyup = function () {
      s(i);
    }),
    (i.blur = function () {
      s(i, "blur");
    });
  const c = n.querySelectorAll("[data-apy]");
  const d = document.getElementById("interestCoversMembership");
}
function initInvestCalculator() {
  const e = new Intl.NumberFormat("en-US", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    t = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }),
    o = document.getElementById("feeTable");
  [
    { comparison: "Bouchebtoul", fee: 0, highlight: !0 },
    { comparison: "Robo-Advisors*", fee: 0.25 },
    { comparison: "Traditional Advisors*", fee: 1 },
  ].forEach((r) => {
    const a = document.createElement("tr");
    r.highlight && a.setAttribute("class", "yellow"),
      a.insertAdjacentHTML(
        "beforeend",
        `<td>${r.comparison}</td><td>${e.format(
          r.fee / 100
        )}</td><td data-fee="${r.fee}">$${t.format(l(75e3, r.fee / 100))}</td>`
      ),
      o.appendChild(a);
  });
  const r = document.getElementById("investmentInput");
  function a(e) {
    return e.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function n(e, o) {
    var r = e.value;
    if ("" === r) return;
    var n = r.length,
      s = e.selectionStart;
    if (r.indexOf(".") >= 0) {
      var c = r.indexOf("."),
        d = r.substring(0, c),
        u = r.substring(c);
      (d = a(d)),
        (u = a(u)),
        "blur" === o && (u += "00"),
        (r = "$" + d + "." + (u = u.substring(0, 2)));
    } else (r = "$" + (r = a(r))), "blur" === o && (r += ".00");
    (e.value = r), (s = r.length - n + s), e.setSelectionRange(s, s);
    !(function (e) {
      e || (e = 0);
      for (let o = 0; o < i.length; o++) {
        const r = i[o],
          a = parseFloat(r.getAttribute("data-fee")) / 100;
        r.innerHTML = "$" + t.format(l(e, a));
      }
    })(parseFloat(r.replaceAll("$", "").replaceAll(",", "")));
  }
  (r.onclick = function () {
    "" === r.value && (r.value = "$");
  }),
    (r.onkeyup = function () {
      n(r);
    }),
    (r.blur = function () {
      n(r, "blur");
    });
  const i = o.querySelectorAll("[data-fee]");
  function l(e, t) {
    const o = 5e3,
      r = 0.08;
    return (
      (e + 62500) * Math.pow(1.08, 10) -
      62500 -
      ((e + o / (r - t)) * Math.pow(r - t + 1, 10) - o / (r - t))
    );
  }
}
function controlTimeline(e, t) {
  const o = document.querySelector(e),
    r = o ? cardWrapTimelines.get(o) : null;
  r && ("play" === t ? r.play() : "reverse" === t && r.reverse());
}
function initSplitText(e) {
  function t() {
    (splitLetters = new SplitType("[data-split-letters]", {
      types: "words, chars",
    })),
      (splitLines = new SplitType("[data-split-lines]", { types: "lines" })),
      (splitWords = new SplitType("[data-split-words]", {
        types: "lines words",
      }));
  }
  e || (e = document.querySelector('[data-barba="container"]')), t();
  let o = $(window).innerWidth();
  window.addEventListener("resize", function () {
    o !== $(window).innerWidth() &&
      ((o = $(window).innerWidth()),
      splitLetters.revert(),
      splitLines.revert(),
      splitWords.revert(),
      t());
  });
}
function initHeadlines(e) {
  function t(e, t) {
    ScrollTrigger.create({
      trigger: e,
      start: "top bottom",
      onLeaveBack: () => {
        t.progress(0), t.pause();
      },
    }),
      ScrollTrigger.create({
        trigger: e,
        start: "top 80%",
        onEnter: () => {
          t.play();
        },
      });
  }
  e || (e = document.querySelector('[data-barba="container"]')),
    document.querySelectorAll("[lines-slide-up]").forEach(function (e, o) {
      let r = gsap.timeline({ paused: !0 });
      r.fromTo(
        e.querySelectorAll(".line"),
        { opacity: 0, yPercent: 50, rotate: 3 },
        {
          opacity: 1,
          rotate: 0,
          yPercent: 0,
          duration: 0.5,
          ease: "back.out(3)",
          stagger: { amount: 0.25 },
        }
      ),
        t(e, r);
    });
  let o = e.querySelectorAll(".faq-item");
  o &&
    o.forEach(function (e, o) {
      let r = gsap.timeline({ paused: !0 });
      r.fromTo(
        e,
        { opacity: 0, yPercent: 50, rotate: 3 },
        {
          opacity: 1,
          rotate: 0,
          yPercent: 0,
          duration: 0.5,
          ease: "back.out(3)",
        }
      ),
        t(e, r);
    });
}
function initVideoControls(e) {
  e || (e = document.querySelector('[data-barba="container"]'));
  const t = e.querySelectorAll("[data-video-controls]"),
    o = e.querySelectorAll(".play-button-icon"),
    r = e.querySelectorAll(".sound-button-icon");
  globalPlayState ||
    o.forEach((e) => {
      e.classList.add("active");
    }),
    globalMuteState ||
      r.forEach((e) => {
        e.classList.add("muted");
      }),
    t.forEach((e) => {
      const t = e.querySelector("video");
      e.getAttribute("data-video-controls") ||
        t.addEventListener("click", () => {
          t.paused
            ? (t.play(),
              o.forEach((e) => {
                e.classList.remove("active");
              }),
              (globalPlayState = !0))
            : (t.pause(),
              o.forEach((e) => {
                e.classList.add("active");
              }),
              (globalPlayState = !1));
        }),
        r.forEach((e) => {
          e.addEventListener("click", () => {
            (t.muted = !t.muted),
              (globalMuteState = t.muted),
              r.forEach((e) => {
                e.classList.toggle("muted");
              });
          });
        });
    });
}
function initMobileSliders() {
  const e = new Swiper(".g-card__wrap.swiper", {
      slidesPerView: "auto",
      spaceBetween: 0,
      centeredSlides: !0,
      speed: 800,
      init: !0,
      initialSlide: 2,
      breakpoints: { 768: { init: !1 } },
    }),
    t = document.querySelectorAll(".g-nav__item");
  function o(e, t) {
    gsap.to(e, { opacity: 0, duration: 0.3, ease: "power1.inOut" }),
      gsap.to(t, {
        opacity: 1,
        duration: 0.3,
        ease: "power1.inOut",
        onComplete: () => {
          t.play();
        },
      });
  }
  function r(e, t) {
    gsap.to(e, { opacity: 1, duration: 0.3, ease: "power1.inOut" }),
      gsap.to(t, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.inOut",
        onComplete: () => {
          t.pause();
        },
      });
  }
  t[2].classList.add("active"),
    t.forEach((o, r) => {
      o.addEventListener("click", function () {
        t.forEach((e) => e.classList.remove("active")),
          this.classList.add("active"),
          e.slideTo(r);
      });
    });
  var a = document.querySelector(".g-card.swiper-slide-active");
  o(a.querySelector("img"), a.querySelector("video")),
    e.on("beforeSlideChangeStart", function () {
      var e = document.querySelector(".g-card.swiper-slide-active");
      r(e.querySelector("img"), e.querySelector("video"));
    }),
    e.on("slideChangeTransitionEnd", function () {
      t.forEach((e) => e.classList.remove("active"));
      const r = e.activeIndex;
      t[r].classList.add("active");
      var a = document.querySelector(".g-card.swiper-slide-active");
      o(a.querySelector("img"), a.querySelector("video"));
    });
  const n = new Swiper(".t-card__wrap", {
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: !0,
    speed: 800,
    init: !0,
    initialSlide: 2,
    breakpoints: { 768: { init: !1 } },
  });
  var i = document.querySelector(".t-card.swiper-slide-active");
  o(i.querySelector("img"), i.querySelector("video")),
    n.on("beforeSlideChangeStart", function () {
      var e = document.querySelector(".t-card.swiper-slide-active");
      r(e.querySelector("img"), e.querySelector("video"));
    }),
    n.on("slideChangeTransitionEnd", function () {
      var e = document.querySelector(".t-card.swiper-slide-active");
      o(e.querySelector("img"), e.querySelector("video"));
    });
}
function initNavToggle() {
  const e = document.querySelector("[data-nav-toggle]");
  ScrollTrigger.create({
    trigger: e,
    start: "top top",
    onEnter: () => {
      navW.setAttribute("theme", "dark");
    },
    onLeaveBack: () => {
      navW.setAttribute("theme", "light");
    },
  });
}

function initGuidesOverlay(e) {
  e || (e = document.querySelector('[data-barba="container"]'));
  const t = e.querySelectorAll("[data-overlay-open]"),
    o = e.querySelector(".overlay-w"),
    r = e.querySelectorAll(".overlay-item"),
    a = e.querySelectorAll("[data-overlay-close]"),
    n =
      (e.querySelector("[data-overlay-cta]"),
      e.querySelector("[data-overlay-next]")),
    i = e.querySelector("[data-overlay-prev]"),
    l = e.querySelectorAll("[data-overlay-fade]"),
    s = e.querySelectorAll("[data-overlay-tag]");
  function c(e, t) {
    const o = Array.from(r).findIndex((e) =>
        e.classList.contains("is--active")
      ),
      a = r[e],
      n = r[o],
      i = "next" === t ? -1 : 1;
    let l = n.querySelector("video"),
      s = a.querySelector("video");
    l.pause();
    const c = gsap.timeline({
      onComplete: () => {
        n && n.classList.remove("is--active"),
          a.classList.add("is--active"),
          (function () {
            globalPlayState && ((s.muted = globalMuteState), s.play());
            const o = "next" === t ? "1rem" : "-1rem";
            gsap
              .timeline({
                onStart: () => {
                  a.getAttribute("data-overlay-name");
                  !(function (e) {
                    const t = 0 === e ? r.length - 1 : e - 1,
                      o = e === r.length - 1 ? 0 : e + 1,
                      a = r[t].getAttribute("data-overlay-name"),
                      n = r[o].getAttribute("data-overlay-name");
                    (document.querySelector(
                      "[data-overlay-prev-name]"
                    ).textContent = a),
                      (document.querySelector(
                        "[data-overlay-next-name]"
                      ).textContent = n);
                  })(e);
                },
              })
              .fromTo(
                a.querySelectorAll("[data-overlay-fade]"),
                { opacity: 0, y: o },
                { opacity: 1, y: "0rem", stagger: 0.05, duration: 0.45 }
              )
              .fromTo(
                a.querySelectorAll("[data-overlay-tag]"),
                { opacity: 0, y: o },
                {
                  opacity: 1,
                  y: "0rem",
                  stagger: 0.05,
                  duration: 0.45,
                  ease: "back.out(2)",
                },
                "<"
              );
          })();
      },
    });
    n &&
      (c.to(
        n.querySelectorAll("[data-overlay-fade]"),
        {
          opacity: 0,
          y: `${i}rem`,
          stagger: 0.05,
          duration: 0.3,
          ease: "power3",
        },
        "<"
      ),
      c.to(
        n.querySelectorAll("[data-overlay-tag]"),
        {
          opacity: 0,
          y: `${i}rem`,
          stagger: 0.1,
          duration: 0.3,
          ease: "power3",
        },
        "<"
      ));
  }
  gsap.set(".overlay-inner", { yPercent: 20, opacity: 0 }),
    t.forEach((t, a) => {
      t.addEventListener("click", () => {
        gsap
          .timeline()
          .set(o, { display: "flex" })
          .fromTo(".overlay-bg", { opacity: 0 }, { opacity: 1, duration: 0.4 })
          .fromTo(
            ".overlay-inner",
            { yPercent: 20, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.6, ease: "back.out(2)" },
            "<"
          )
          .fromTo(
            l,
            { opacity: 0, y: "1rem" },
            { opacity: 1, y: "0rem", stagger: 0.05, duration: 0.45 },
            "<+=0.1"
          )
          .fromTo(
            s,
            { opacity: 0, y: "1rem" },
            {
              opacity: 1,
              y: "0rem",
              stagger: 0.05,
              duration: 0.45,
              ease: "back.out(2)",
            },
            "<"
          ),
          a > 5 && (a -= 6);
        const t = 0 === a ? r.length - 1 : a - 1,
          n = a === r.length - 1 ? 0 : a + 1,
          i = r[a],
          c = r[t].getAttribute("data-overlay-name"),
          d = r[n].getAttribute("data-overlay-name"),
          u = e.querySelector("[data-overlay-prev-name]"),
          p = e.querySelector("[data-overlay-next-name]"),
          g = i.querySelector("video");
        globalPlayState && ((g.muted = globalMuteState), g.play()),
          r.forEach((e) => e.classList.remove("is--active")),
          i.classList.add("is--active");
        i.getAttribute("data-overlay-name");
        u && (u.textContent = c), p && (p.textContent = d);
      });
    }),
    a.forEach((e) => {
      e.addEventListener("click", () => {
        r.forEach((e) => {
          e.querySelector("video").pause();
        }),
          gsap
            .timeline()
            .fromTo(
              ".overlay-bg",
              { opacity: 1 },
              { opacity: 0, duration: 0.3, ease: "power3" }
            )
            .fromTo(
              ".overlay-inner",
              { yPercent: 0, opacity: 1 },
              { yPercent: 10, opacity: 0, duration: 0.3, ease: "power3" },
              0
            )
            .set(o, { display: "none" })
            .then(() => {
              r.forEach((e) => {
                e.classList.remove("is--active"),
                  gsap.set(e, { opacity: 0, xPercent: 0, clearProps: "all" });
              });
            });
      });
    }),
    n.addEventListener("click", () => {
      let e = Array.from(r).findIndex((e) =>
        e.classList.contains("is--active")
      );
      c(e === r.length - 1 ? 0 : e + 1, "next");
    }),
    i.addEventListener("click", () => {
      let e = Array.from(r).findIndex((e) =>
        e.classList.contains("is--active")
      );
      c(0 === e ? r.length - 1 : e - 1, "prev");
    });
}
function initMemberStories() {
  document.querySelectorAll("[data-modal-open]").forEach((e) => {
    e.addEventListener("click", function () {
      !(function (e) {
        gsap
          .timeline()
          .set(".modal-w", { display: "flex" })
          .fromTo(
            ".modal-bg",
            { filter: "blur(0px)", opacity: 0 },
            {
              filter: "blur(4px)",
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            }
          )
          .fromTo(
            ".modal-inner",
            { opacity: 0, yPercent: 5 },
            { opacity: 1, yPercent: 0, duration: 0.6, ease: "power3.out" },
            0
          );
        const t = document.querySelector(".modal-w video");
        t.getAttribute("src") !== e
          ? ((t.src = e),
            t.load(),
            globalPlayState ||
              (t.oncanplay = () => {
                t.pause();
              }))
          : globalPlayState && ((t.muted = globalMuteState), t.play());
        globalPlayState &&
          (t.oncanplay = () => {
            (t.muted = globalMuteState), t.play();
          });
        document.querySelectorAll("[data-modal-close]").forEach((e) => {
          e.addEventListener("click", function () {
            t.pause(),
              gsap.to(".modal-bg", {
                filter: "blur(0px)",
                duration: 0.5,
                opacity: 0,
                onComplete: () => {
                  gsap.set(".modal-w", { display: "none" });
                },
              }),
              gsap.to(".modal-inner", {
                opacity: 0,
                yPercent: 5,
                duration: 0.5,
                ease: "power3.out",
              });
          });
        });
      })(this.getAttribute("data-video-src"));
    });
  });
}
function initGoalsScroll(e) {
  if (prefersReducedMotion()) return;
  let t = (e = e || document).querySelector(".goals-wrap"),
    o = t.querySelectorAll(".goals-card");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: t,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })
    .from(o, {
      bottom: "40%",
      left: "42%",
      ease: "back.out(2.5)",
      duration: 1,
      stagger: { each: 0.05, from: "end" },
      rotate: () => 24 * Math.random() - 12,
    });
}
function initGuidesCollage(e) {
  if (prefersReducedMotion()) return;
  let t = (e = e || document).querySelector(".guides-collage");
  if (!t) return;
  let o = t.querySelectorAll(".g-card");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: t,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    })
    .from(o, {
      top: "30%",
      left: "42%",
      ease: "back.out(2)",
      duration: 0.8,
      stagger: { each: 0.05, from: "end" },
      rotate: () => 24 * Math.random() - 12,
    });
}
function initHomeIntro() {
  let e = document.querySelector("[data-intro-text]");
  if (!e) return;
  let t = e.querySelector(".intro-spacer.is--top"),
    o = e.querySelector(".intro-spacer.is--bottom"),
    r = document.querySelector(".intro-image__top"),
    a = document.querySelector(".intro-image__bottom"),
    n = r.querySelector("[data-lottie]"),
    i = a.querySelector("[data-lottie]"),
    l = lottie.loadAnimation({
      container: n,
      renderer: "svg",
      loop: !1,
      autoplay: !1,
      path: n.getAttribute("data-lottie-path"),
    }),
    s = lottie.loadAnimation({
      container: i,
      renderer: "svg",
      loop: !1,
      autoplay: !1,
      path: i.getAttribute("data-lottie-path"),
    });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: e,
        start: "bottom bottom",
        toggleActions: "play none none reverse",
      },
      onReverseComplete: () => {
        l.goToAndStop(0, !0), s.goToAndStop(0, !0);
      },
      defaults: { ease: "expo.inOut", duration: 1 },
    })
    .fromTo(
      o,
      { width: isDesktop ? "0.5em" : "0em" },
      { width: isDesktop ? "2.8em" : "0em", duration: 1 },
      0
    )
    .fromTo(
      t,
      { width: isDesktop ? "0.5em" : "0em" },
      { width: isDesktop ? "2em" : "0em", duration: 1 },
      0
    )
    .from(
      r,
      {
        rotate: 15,
        scale: 0,
        onStart: () => {
          gsap.delayedCall(0.5, () => {
            l.play();
          });
        },
      },
      0
    )
    .from(
      a,
      {
        rotate: -10,
        scale: 0,
        onStart: () => {
          gsap.delayedCall(0.5, () => {
            s.play();
          });
        },
      },
      0.1
    );
}
function initBushCTA(e) {
  if (((e = e || document), isMobile)) return;
  let t = e.querySelector(".bush-cta");
  if (!t) return;
  let o = t.querySelector(".bush-cta__card.is--left"),
    r = t.querySelector(".bush-cta__card.is--right"),
    a = t.querySelector(".bush-cta__butterfly.is--left"),
    n = t.querySelector(".bush-cta__butterfly.is--right"),
    i = t.querySelector("[data-lottie]"),
    l = lottie.loadAnimation({
      container: i,
      renderer: "svg",
      loop: !1,
      autoplay: !1,
      path: i.getAttribute("data-lottie-path"),
    });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: t,
        start: "top bottom",
        end: "bottom top",
        scrub: !0,
      },
      defaults: { ease: "linear", duration: 1 },
    })
    .fromTo(a, { y: "5em", xPercent: -100 }, { y: "-1em", xPercent: 25 })
    .fromTo(
      n,
      { y: "10em", xPercent: 100 },
      { y: "-4em", xPercent: -100 },
      "<"
    );
  gsap
    .timeline({
      scrollTrigger: {
        trigger: t,
        start: "center bottom",
        toggleActions: "play none none reverse",
      },
      defaults: { ease: "back.out(1.8)", duration: 0.6 },
      onStart: () => {
        gsap.delayedCall(0.5, () => {
          l.play();
        });
      },
      onReverseComplete: () => {
        l.goToAndStop(0, !0);
      },
    })
    .from(o, { scale: 0.85, rotate: 2, xPercent: 10 })
    .from(r, { scale: 0.85, rotate: -2, xPercent: -10 }, "<");
}
function initHomeSliders(e) {
  let t = (e = e || document).querySelector(".swiper.is--intro__cards"),
    o = e.querySelector(".swiper.is--steps__cards");
  if (t) {
    const e = new Swiper(t, {
      spaceBetween: 16,
      slidesPerView: "auto",
      centeredSlides: !0,
      slideToClickedSlide: !0,
      speed: 800,
      pagination: { el: ".pagination.is--intro__cards", type: "bullets" },
    });
    isMobileLandscape ||
      (e.destroy(!0, !0), lenis.resize(), ScrollTrigger.refresh());
  }
  if (o) {
    const e = new Swiper(o, {
      spaceBetween: 16,
      slidesPerView: "auto",
      centeredSlides: !0,
      slideToClickedSlide: !0,
      speed: 800,
      pagination: { el: ".pagination.is--steps__cards", type: "bullets" },
    });
    isMobileLandscape ||
      (e.destroy(!0, !0), lenis.resize(), ScrollTrigger.refresh());
  }
}
function initVideoOnHover() {
  if (supportsTouch()) return;
  let e = document.querySelectorAll("[data-video-hover]");
  e &&
    e.forEach((e) => {
      let t = e.querySelector("img"),
        o = e.querySelector("video");
      e.addEventListener("mouseenter", () => {
        gsap.to(t, { opacity: 0, duration: 0.2, ease: "power2" }),
          gsap.to(o, {
            opacity: 1,
            duration: 0.2,
            ease: "power2",
            onComplete: () => {
              o.play();
            },
          });
      }),
        e.addEventListener("mouseleave", () => {
          gsap.to(t, { opacity: 1, duration: 0.2, ease: "power2" }),
            gsap.to(o, {
              opacity: 0,
              duration: 0.2,
              ease: "power2",
              onComplete: () => {
                o.pause();
              },
            });
        });
    });
}
function createCardWrapTimeline(e, t) {
  const o = gsap.timeline({
    paused: !0,
    defaults: {
      ease: CustomEase.create(
        "guides-bounce",
        "M0,0 C0.084,0.61 0.202,0.898 0.327,0.977 0.555,1.121 0.661,0.92 1,1 "
      ),
      duration: 1,
    },
  });
  return (
    o.fromTo(
      e.querySelectorAll("[data-card]"),
      { yPercent: (e) => 50 + 10 * e, rotate: (e) => 2 * (e + 2) },
      {
        yPercent: 0,
        rotate: t ? (e) => 6 * Math.random() - 3 : 0,
        stagger: 0.075,
        overwrite: "true",
        onStart: () =>
          gsap.set(e.querySelectorAll("[data-card]"), {
            pointerEvents: "none",
          }),
        onComplete: () =>
          gsap.set(e.querySelectorAll("[data-card]"), {
            pointerEvents: "auto",
          }),
      }
    ),
    o
  );
}
function initCardsIntro(e) {
  if (prefersReducedMotion()) return;
  (e = e || document).querySelectorAll("[data-cards-wrap]").forEach((e, t) => {
    const o = "static" === e.getAttribute("data-cards-wrap"),
      r = createCardWrapTimeline(e, !o);
    cardWrapTimelines.set(e, r),
      ScrollTrigger.create({
        trigger: e,
        start: "top bottom-=15%",
        toggleActions: "play none none reverse",
        onEnter: () => r.play(),
        onLeaveBack: () => r.reverse(),
      });
  });
}
function initCardsHover() {
  document.querySelectorAll("[data-card]").forEach((e) => {
    const t = e.style.zIndex || 0;
    if (!0 === ("static" === e.getAttribute("data-card"))) return;
    const o = e.querySelector("video"),
      r = e.querySelector("img");
    e.addEventListener("mouseenter", () => {
      (e.style.zIndex = 2),
        gsap.to(e, {
          scale: prefersReducedMotion() ? 1 : 1.15,
          rotate: prefersReducedMotion() ? 0 : 16 * Math.random() - 8,
          duration: 0.6,
          ease: CustomEase.create(
            "guides-bounce",
            "M0,0 C0.084,0.61 0.202,0.898 0.327,0.977 0.555,1.121 0.661,0.92 1,1 "
          ),
        }),
        supportsTouch() ||
          (gsap.to(r, { opacity: 0, duration: 0.2, ease: "power2" }),
          gsap.to(o, {
            opacity: 1,
            duration: 0.2,
            ease: "power2",
            onComplete: () => {
              o.play();
            },
          }));
    }),
      e.addEventListener("mouseleave", () => {
        (e.style.zIndex = t),
          gsap.to(e, {
            scale: 1,
            rotate: prefersReducedMotion() ? 0 : 6 * Math.random() - 3,
            duration: 0.6,
            ease: CustomEase.create(
              "guides-bounce",
              "M0,0 C0.084,0.61 0.202,0.898 0.327,0.977 0.555,1.121 0.661,0.92 1,1 "
            ),
          }),
          supportsTouch() ||
            (gsap.to(r, { opacity: 1, duration: 0.2, ease: "power2" }),
            gsap.to(o, {
              opacity: 0,
              duration: 0.2,
              ease: "power2",
              onComplete: () => {
                o.pause();
              },
            }));
      });
  });
}
function initHomeParallax() {
  const e = document.querySelector('[data-parallax="trigger"]'),
    t = e.querySelector('[data-parallax="tree-left"]'),
    o = e.querySelector('[data-parallax="tree-right"]'),
    r =
      (e.querySelector('[data-parallax="people"]'),
      e.querySelector('[data-parallax="b-left"]')),
    a = document.querySelector('[data-parallax="b-right"]'),
    n =
      (e.querySelector('[data-parallax="bg"]'),
      document.querySelector('[data-parallax="text"]')),
    i = n.querySelector(".h-med"),
    l = n.querySelector(".p-med");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: e,
        start: "top 85%",
        end: "bottom center",
        scrub: !0,
      },
      defaults: { ease: "linear", duration: 1 },
    })
    .to(o, { yPercent: 24, duration: 1 })
    .to(t, { yPercent: 18, duration: 1 }, 0)
    .to(r, { yPercent: -250, xPercent: -60, rotate: -3, duration: 1 }, 0)
    .to(a, { yPercent: -250, xPercent: 160, rotate: 4, duration: 1 }, 0)
    .from(n, { y: isMobileLandscape ? "-180vw" : "-120vw", duration: 0.7 }, 0.3)
    .fromTo(
      i,
      { fontSize: isMobile ? "4em" : "10em" },
      { fontSize: isMobile ? "2em" : "3.25em", duration: 0.7 },
      "<"
    )
    .from(n, { color: "#fff", duration: 0.2 }, 0.8)
    .fromTo(i, { lineHeight: "0.9" }, { lineHeight: "1.1", duration: 0.2 }, 0.8)
    .from(l, { opacity: 0, yPercent: 100, duration: 0.2 }, 0.8);
}

function initStackGuidanceAnimations(e) {
  e || (e = document.querySelector('[data-barba="container"]'));
  let t = e.querySelector("[data-stack-guidance]");
  if (!t) return;
  let o = t.querySelectorAll("[data-lottie]"),
    r = [];
  o.forEach((e) => {
    let t = lottie.loadAnimation({
      container: e,
      renderer: "svg",
      loop: !1,
      autoplay: !1,
      path: e.getAttribute("data-lottie-path"),
    });
    r.push(t);
  }),
    gsap.timeline({
      scrollTrigger: {
        trigger: t,
        start: "top center",
        end: "top bottom",
        onEnter: () => playLottieAnimationsStaggered(r, 1),
      },
    });
}
function initStackSaveAnimations(e) {
  e || (e = document.querySelector('[data-barba="container"]'));
  let t = e.querySelector("[data-stack-save]");
  if (!t) return;
  let o = t.querySelectorAll("[data-lottie]"),
    r = [];
  o.forEach((e) => {
    let t = lottie.loadAnimation({
      container: e,
      renderer: "svg",
      loop: !1,
      autoplay: !1,
      path: e.getAttribute("data-lottie-path"),
    });
    r.push(t);
  }),
    gsap.timeline({
      scrollTrigger: {
        trigger: t,
        start: "top center",
        end: "top bottom",
        onEnter: () => playLottieAnimationsStaggered(r, 0.15),
      },
    });
}
function initStackInvestAnimations(e) {
  e || (e = document.querySelector('[data-barba="container"]'));
  let t = e.querySelector("[data-stack-invest]");
  if (!t) return;
  let o = t.querySelectorAll("[data-lottie]"),
    r = [];
  o.forEach((e) => {
    let t = lottie.loadAnimation({
      container: e,
      renderer: "svg",
      loop: !1,
      autoplay: !1,
      path: e.getAttribute("data-lottie-path"),
    });
    r.push(t);
  }),
    gsap.timeline({
      scrollTrigger: {
        trigger: t,
        start: "top center",
        end: "top bottom",
        onEnter: () => playLottieAnimationsStaggered(r, 0.2),
      },
    });
}
function initPricingScroll() {
  if (prefersReducedMotion() || window.innerWidth < 768) return;
  ScrollTrigger.refresh();
  const e = document.querySelector("[data-pricing-section]");
  if (!e) return;
  const t = e.querySelector("[data-pricing-heading]"),
    o = t.querySelector("h3"),
    r = e.querySelector(".eyebrow");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: e,
        start: "top 75%",
        end: "top top",
        scrub: !0,
      },
    })
    .from(t, { y: "-20em", ease: "none" }, 0)
    .fromTo(o, { fontSize: "7.25em" }, { fontSize: "2.5em", ease: "none" }, 0)
    .fromTo(
      r,
      { fontSize: "1.25rem" },
      { fontSize: "0.75rem", ease: "none" },
      0
    );
}
function initPriceCards(e) {
  ScrollTrigger.refresh(),
    e || (e = document.querySelector('[data-barba="container"]'));
  let t = e.querySelector(".p-cards__container"),
    o = t.querySelector(".p-card.is--left"),
    r = t.querySelector(".p-card.is--right"),
    a = t.querySelector(".p-card.is--center"),
    n = t.querySelector("[data-lottie]"),
    i = t.querySelectorAll(".p-card"),
    l = t.querySelectorAll(".p-card__sub"),
    s = lottie.loadAnimation({
      container: n,
      renderer: "svg",
      loop: !1,
      autoplay: !1,
      path: n.getAttribute("data-lottie-path"),
    });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: t,
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
      onReverseComplete: () => {
        s.goToAndStop(0, !0);
      },
    })
    .from(o, {
      xPercent: 80,
      yPercent: 30,
      rotate: 6,
      duration: 0.8,
      ease: "back.out(1.8)",
    })
    .from(
      r,
      {
        xPercent: -80,
        yPercent: 30,
        rotate: -6,
        duration: 0.8,
        ease: "back.out(1.8)",
      },
      0
    )
    .from(
      a,
      {
        yPercent: 10,
        scale: 0.85,
        duration: 0.8,
        ease: "back.out(1.5)",
        onStart: () => {
          gsap.delayedCall(0.5, () => {
            s.play();
          });
        },
      },
      0
    ),
    i.forEach((e) => {
      e.addEventListener("mouseenter", () => {
        i.forEach((e) => e.classList.remove("is--active")),
          e.classList.add("is--active"),
          gsap.to(e, {
            scale: prefersReducedMotion() ? 1 : 1.1,
            duration: 0.3,
            ease: "back.out(1.8)",
            overwrite: "auto",
          });
      }),
        e.addEventListener("mouseleave", () => {
          e.classList.remove("is--active"),
            a.classList.add("is--active"),
            gsap.to(e, {
              scale: 1,
              duration: 0.3,
              ease: "back.out(1.5)",
              overwrite: "auto",
            });
        });
    });
  const c = e.querySelector("[data-price-solo]"),
    d = e.querySelector("[data-price-joint]"),
    u = gsap.timeline({ paused: !0 });
  u
    .to(".p-card__heading", {
      y: "-0.9em",
      duration: 0.5,
      ease: "back.inOut(2)",
    })
    .to(
      ".p-card__eyebrow .eyebrow",
      { yPercent: -100, duration: 0.5, ease: "back.inOut(2)" },
      0
    )
    .to(
      ".p-card__sign.offset",
      { left: "0em", duration: 0.5, ease: "back.inOut(2)" },
      0
    )
    .to(l, { x: "0em", duration: 0.5, ease: "back.inOut(2)" }, 0),
    c.addEventListener("click", () => {
      c.classList.contains("is--active") ||
        (d.classList.remove("is--active"),
        c.classList.add("is--active"),
        u.reverse());
    }),
    d.addEventListener("click", () => {
      d.classList.contains("is--active") ||
        (c.classList.remove("is--active"),
        d.classList.add("is--active"),
        u.play());
    }),
    (t = null);
}
function initImgScroll() {
  if (prefersReducedMotion()) return;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".img-scroll",
        start: "top 80%",
        end: "bottom 20%",
        scrub: !0,
      },
    })
    .to(".img-scroll", { width: "100%", ease: "none" })
    .to(".img-scroll", { width: "80%", ease: "none" });
}
function initGuidesSlider() {
  new Swiper(".swiper.is--guides", {
    grabCursor: !0,
    slidesPerView: "auto",
    spaceBetween: 0,
    speed: 600,
    effect: "creative",
    keyboard: { enabled: !0, onlyInViewport: !1 },
    mousewheel: { invert: !1 },
    creativeEffect: {
      prev: { shadow: !1, translate: [0, 0, -80], rotate: [0, 0, -3] },
      next: { translate: ["105%", 0, 1] },
      limitProgress: 6,
      shadowPerProgress: !1,
    },
  });
}
function toggleTextBlocks(e) {
  e || (e = document.querySelector('[data-barba="container"]'));
  const t = e.querySelectorAll(".track-text__item"),
    o = e.querySelectorAll(".track-dot"),
    r = e.querySelector("[data-track-wrap]");
  ScrollTrigger.create({
    trigger: r,
    start: "top top",
    end: "bottom bottom",
    scrub: !0,
    onUpdate: (e) => {
      const r = e.progress,
        a = Math.min(Math.floor(r * t.length), t.length - 1);
      t.forEach((e) => e.classList.remove("active")),
        o.forEach((e) => e.classList.remove("active")),
        a < t.length &&
          (t[a].classList.add("active"), o[a].classList.add("active"));
    },
  }),
    gsap.to("[data-track-image]", {
      yPercent: 44,
      scrollTrigger: {
        trigger: r,
        start: "top top",
        end: "bottom bottom",
        scrub: !0,
      },
    });
}
function initBlueSections() {
  document.querySelectorAll("[data-section-blue]").forEach((e) => {
    ScrollTrigger.create({
      trigger: e,
      start: "top 25%",
      end: "bottom 75%",
      onEnter: () =>
        gsap.to(".section", { backgroundColor: "#eff7ff", duration: 0.5 }),
      onLeave: () =>
        gsap.to(".section", { backgroundColor: "#fff", duration: 0.5 }),
      onEnterBack: () =>
        gsap.to(".section", { backgroundColor: "#eff7ff", duration: 0.5 }),
      onLeaveBack: () =>
        gsap.to(".section", { backgroundColor: "#fff", duration: 0.5 }),
    });
  });
}
function initGuideCardsHover() {
  document.querySelectorAll("[data-card]").forEach((e) => {
    const t = e.style.zIndex || 0,
      o = e.querySelector(".card-inner");
    e.addEventListener("mouseenter", () => {
      (e.style.zIndex = 2),
        gsap.to(o, {
          scale: prefersReducedMotion() ? 1 : 1.1,
          rotate: prefersReducedMotion() ? 0 : 16 * Math.random() - 8,
          duration: 0.6,
          ease: CustomEase.create(
            "guides-bounce",
            "M0,0 C0.084,0.61 0.202,0.898 0.327,0.977 0.555,1.121 0.661,0.92 1,1 "
          ),
        });
    }),
      e.addEventListener("mouseleave", () => {
        (e.style.zIndex = t),
          gsap.to(o, {
            scale: 1,
            rotate: prefersReducedMotion() ? 0 : 6 * Math.random() - 3,
            duration: 0.6,
            ease: CustomEase.create(
              "guides-bounce",
              "M0,0 C0.084,0.61 0.202,0.898 0.327,0.977 0.555,1.121 0.661,0.92 1,1 "
            ),
          });
      });
  });
}
function initColorChanges() {
  let e = document.querySelectorAll("[data-section-blue]");
  e.length > 0 &&
    e.forEach((e) => {
      ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () =>
          gsap.to(".section", { backgroundColor: "#eff7ff", duration: 0.5 }),
        onLeave: () =>
          gsap.to(".section", { backgroundColor: "#fff", duration: 0.5 }),
        onEnterBack: () =>
          gsap.to(".section", { backgroundColor: "#eff7ff", duration: 0.5 }),
        onLeaveBack: () =>
          gsap.to(".section", { backgroundColor: "#fff", duration: 0.5 }),
      });
    });
  let t = document.querySelectorAll("[data-section-green]");
  t.length > 0 &&
    t.forEach((e) => {
      ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 60%",
        onEnter: () =>
          gsap.to(".section", { backgroundColor: "#f2f7ee", duration: 0.5 }),
        onLeave: () =>
          gsap.to(".section", { backgroundColor: "#fff", duration: 0.5 }),
        onEnterBack: () =>
          gsap.to(".section", { backgroundColor: "#f2f7ee", duration: 0.5 }),
        onLeaveBack: () =>
          gsap.to(".section", { backgroundColor: "#fff", duration: 0.5 }),
      });
    });
  let o = document.querySelectorAll("[data-section-orange]");
  o.length > 0 &&
    o.forEach((e) => {
      ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 60%",
        onEnter: () =>
          gsap.to(".section", { backgroundColor: "#f9e1d3", duration: 0.5 }),
        onLeave: () =>
          gsap.to(".section", { backgroundColor: "#fff", duration: 0.5 }),
        onEnterBack: () =>
          gsap.to(".section", { backgroundColor: "#f9e1d3", duration: 0.5 }),
        onLeaveBack: () =>
          gsap.to(".section", { backgroundColor: "#fff", duration: 0.5 }),
      });
    });
}
function initVideoScroll(e) {
  e || (e = document.querySelector('[data-barba="container"]'));
  let t = e.querySelector(".video-scroll"),
    o = t.querySelector("img");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: t,
        start: "top bottom",
        end: "top 20%",
        scrub: 1,
      },
    })
    .from(t, { scale: 0.8 })
    .from(o, { scale: 1.1 }, 0);
}
function initInvestCards() {
  let e = document.querySelector(".card-c");
  if (!e) return;
  let t = e.querySelector(".card-w.is--left"),
    o = e.querySelector(".card-w.is--right"),
    r = e.querySelector(".card-w.is--center");
  gsap.delayedCall(2, () => {
    ScrollTrigger.refresh();
  }),
    gsap
      .timeline({
        scrollTrigger: {
          trigger: e,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      })
      .from(t, {
        xPercent: 80,
        yPercent: 20,
        rotate: 6,
        duration: 0.8,
        ease: "back.out(1.8)",
      })
      .from(
        o,
        {
          xPercent: -80,
          yPercent: 20,
          rotate: -6,
          duration: 0.8,
          ease: "back.out(1.8)",
        },
        0
      )
      .from(
        r,
        { yPercent: 10, scale: 0.85, duration: 0.8, ease: "back.out(1.5)" },
        0
      );
}
function initScrollingTitles(e) {
  e || (e = document.querySelector('[data-barba="container"]'));
  const t = e.querySelector("[data-track-wrap]"),
    o = t.querySelectorAll(".h-display");
  ScrollTrigger.create({
    trigger: t,
    start: "top top",
    end: "bottom bottom",
    scrub: !0,
    onUpdate: (e) => {
      const t = Math.max(0, e.progress - 0.1),
        r = Math.min(Math.floor((t / 0.9) * o.length), o.length - 1);
      o.forEach((e) => e.classList.remove("is--active")),
        r < o.length && o[r].classList.add("is--active");
    },
  });
}
function initGeneral(e) {
  initSplitText(e),
   


    initToolTips(),
    initVideoControls(e),
    prefersReducedMotion() 
     
}
function initHome(e) {

    initNavToggle(),
    initHomeSliders(e),
    isMobile && initMobileSliders(),
    initHomeIntro(),
    initBushCTA(e),
    initVideoOnHover(),
    initCardsIntro(),
    initCardsHover(),
    initGuidesOverlay(e),
    initGuidesCollage(e),
    initHomeParallax(),
    initStackGuidanceAnimations(e),
    initStackSaveAnimations(e),
    initStackInvestAnimations(e),
    initPriceCards(e),
    initPricingScroll(),
    initGoalsScroll(e),
    initMemberStories();
}
function initGuidesPage(e) {
  initGuidesSlider(),
    initGuideCardsHover(),
    initCardsIntro(),
    initGuidesOverlay(e),
    initImgScroll(),
    toggleTextBlocks(e),
    initStackGuidanceAnimations(e),
    initGoalsScroll(),
    initBlueSections();
}
function initSaveInvest(e) {
  initColorChanges(),
    initVideoScroll(e),
    initInvestCards(),
 
    initStackSaveAnimations(e),
    setTimeout(() => {
      initStackInvestAnimations(e);
    }, 800);
}
window.addEventListener("resize", handleResize),
  barba.hooks.after((e) => {
    $(e.next.container).removeClass("fixed"),
      $(".is--transitioning").removeClass("is--transitioning"),
      resetWebflow(e),
      ScrollTrigger.refresh(),
      lenis.scrollTo(0, {
        immediate: !0,
        force: !0,
        lock: !0,
        onComplete: () => {
          lenis.start();
        },
      }),
      initGeneral();
  }),
  barba.hooks.leave((e) => {
    lenis.stop();
  }),
  barba.hooks.enter((e) => {
    $(e.next.container).addClass("fixed");
  }),
  barba.init({
    preventRunning: !0,
    prevent: function ({ el: e }) {
      return e.hasAttribute("data-barba-prevent");
    },
    transitions: [
      {
        name: "default",
        sync: !0,
        leave: (e) => (
          transitionOut(e.current.container),
          gsap.fromTo(
            loadBg,
            { scaleY: 0, borderRadius: "100vw 100vw 0px 0px" },
            {
              scaleY: 1,
              borderRadius: "0vw 0vw 0px 0px",
              duration: 1.2,
              ease: "expo.inOut",
            }
          )
        ),
      },
    ],
    views: [
      {
        namespace: "home",
        afterEnter(e) {
          let t = e.next.container,
            o = e.next.namespace;
          !0 === ranHomeLoader ||
          localStorage.getItem("loaderShown") ||
          t.hasAttribute("data-no-loader")
            ? transitionIn(t, o)
            : initHomeLoader(),
            initGeneral(t),
            initHomeVideo(),
            initHome(t);
        },
      },
      {
        namespace: "save",
        afterEnter(e) {
          let t = e.next.container;
          transitionIn(t),
            initGeneral(t),
            initSaveCalculator(),
            initSaveInvest(t);
        },
      },
      {
        namespace: "invest",
        afterEnter(e) {
          let t = e.next.container;
          transitionIn(t),
            initGeneral(t),
            initInvestCalculator(),
            initSaveInvest(t);
        },
      },
      {
        namespace: "pricing",
        afterEnter(e) {
          let t = e.next.container;
          transitionIn(t), initGeneral(t), initPriceCards(t);
        },
      },
      {
        namespace: "guidance",
        afterEnter(e) {
          let t = e.next.container;
          transitionIn(t), initGeneral(t), initGuidesPage(t);
        },
      },
    ],
  });
