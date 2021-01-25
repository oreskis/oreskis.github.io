// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());


/*
	one Page Nav
---------------------------*/

/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */
! function(t, i, n, s) {
  var e = function(s, e) {
    this.elem = s, this.$elem = t(s), this.options = e, this.metadata = this.$elem.data("plugin-options"), this.$win = t(i), this.sections = {}, this.didScroll = !1, this.$doc = t(n), this.docHeight = this.$doc.height()
  };
  e.prototype = {
    defaults: {
      navItems: "a",
      currentClass: "current",
      changeHash: !1,
      easing: "swing",
      filter: "",
      scrollSpeed: 750,
      scrollThreshold: .5,
      begin: !1,
      end: !1,
      scrollChange: !1
    },
    init: function() {
      return this.config = t.extend({}, this.defaults, this.options, this.metadata), this.$nav = this.$elem.find(this.config.navItems), "" !== this.config.filter && (this.$nav = this.$nav.filter(this.config.filter)), this.$nav.on("click.onePageNav", t.proxy(this.handleClick, this)), this.getPositions(), this.bindInterval(), this.$win.on("resize.onePageNav", t.proxy(this.getPositions, this)), this
    },
    adjustNav: function(t, i) {
      t.$elem.find("." + t.config.currentClass).removeClass(t.config.currentClass), i.addClass(t.config.currentClass)
    },
    bindInterval: function() {
      var t, i = this;
      i.$win.on("scroll.onePageNav", function() {
        i.didScroll = !0
      }), i.t = setInterval(function() {
        t = i.$doc.height(), i.didScroll && (i.didScroll = !1, i.scrollChange()), t !== i.docHeight && (i.docHeight = t, i.getPositions())
      }, 250)
    },
    getHash: function(t) {
      return t.attr("href").split("#")[1]
    },
    getPositions: function() {
      var i, n, s, e = this;
      e.$nav.each(function() {
        i = e.getHash(t(this)), s = t("#" + i), s.length && (n = s.offset().top, e.sections[i] = Math.round(n))
      })
    },
    getSection: function(t) {
      var i = null,
        n = Math.round(this.$win.height() * this.config.scrollThreshold);
      for (var s in this.sections) this.sections[s] - n < t && (i = s);
      return i
    },
    handleClick: function(n) {
      var s = this,
        e = t(n.currentTarget),
        o = e.parent(),
        a = "#" + s.getHash(e);
      o.hasClass(s.config.currentClass) || (s.config.begin && s.config.begin(), s.adjustNav(s, o), s.unbindInterval(), s.scrollTo(a, function() {
        s.config.changeHash && (i.location.hash = a), s.bindInterval(), s.config.end && s.config.end()
      })), n.preventDefault()
    },
    scrollChange: function() {
      var t, i = this.$win.scrollTop(),
        n = this.getSection(i);
      null !== n && (t = this.$elem.find('a[href$="#' + n + '"]').parent(), t.hasClass(this.config.currentClass) || (this.adjustNav(this, t), this.config.scrollChange && this.config.scrollChange(t)))
    },
    scrollTo: function(i, n) {
      var s = t(i).offset().top;
      t("html, body").animate({
        scrollTop: s - this.config.scrollOffset
      }, this.config.scrollSpeed, this.config.easing, n)
    },
    unbindInterval: function() {
      clearInterval(this.t), this.$win.unbind("scroll.onePageNav")
    }
  }, e.defaults = e.prototype.defaults, t.fn.onePageNav = function(t) {
    return this.each(function() {
      new e(this, t).init()
    })
  }
}(jQuery, window, document);


/*
	VenoBox - jQuery
---------------------------*/


/* -------------------------------------------------------------------------------
 4. VenoBox - jQuery
 * version: 1.6.0
 * @requires jQuery
 *
 * Examples at http://lab.veno.it/venobox/
 * License: MIT License
 * License URI: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
 * Copyright 2013-2015 Nicola Franchini - @nicolafranchini
 *
------------------------------------------------------------------------------------ */
! function(t) {
  function a() {
    t.ajax({
      url: g,
      cache: !1
    }).done(function(t) {
      u.html('<div class="vbox-inline">' + t + "</div>"), l(!0)
    }).fail(function() {
      u.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'), l(!0)
    })
  }

  function e() {
    u.html('<iframe class="venoframe" src="' + g + '"></iframe>'), l()
  }

  function o(t) {
    var a = g.split("/"),
      e = a[a.length - 1],
      o = t ? "?autoplay=1" : "";
    u.html('<iframe class="venoframe" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" src="//player.vimeo.com/video/' + e + o + '"></iframe>'), l()
  }

  function i(t) {
    var a = g.split("/"),
      e = a[a.length - 1],
      o = t ? "?autoplay=1" : "";
    u.html('<iframe class="venoframe" webkitallowfullscreen mozallowfullscreen allowfullscreen src="//www.youtube.com/embed/' + e + o + '"></iframe>'), l()
  }

  function n() {
    u.html('<div class="vbox-inline">' + t(g).html() + "</div>"), l()
  }

  function r() {
    Q = t(".vbox-content").find("img"), Q.one("load", function() {
      l()
    }).each(function() {
      this.complete && t(this).load()
    })
  }

  function l() {
    f.html(X), u.find(">:first-child").addClass("figlio"), t(".figlio").css("width", C).css("height", j).css("padding", m).css("background", s), I = u.outerHeight(), G = t(window).height(), G > I + 80 ? (D = (G - I) / 2, u.css("margin-top", D), u.css("margin-bottom", D)) : (u.css("margin-top", "40px"), u.css("margin-bottom", "40px")), u.animate({
      opacity: "1"
    }, "slow")
  }

  function d() {
    t(".vbox-content").length && (I = u.height(), G = t(window).height(), G > I + 80 ? (D = (G - I) / 2, u.css("margin-top", D), u.css("margin-bottom", D)) : (u.css("margin-top", "40px"), u.css("margin-bottom", "40px")))
  }
  var c, s, v, f, m, b, h, u, g, p, x, y, w, k, C, j, q, z, H, D, E, L, P, Q, X, A, B, F, G, I, J, K;
  t.fn.extend({
    venobox: function(l) {
      var d = {
          framewidth: "",
          frameheight: "",
          border: "0",
          bgcolor: "#fff",
          titleattr: "title",
          numeratio: !1,
          infinigall: !1,
          overlayclose: !0
        },
        D = t.extend(d, l);
      return this.each(function() {
        var l = t(this);
        return l.data("venobox") ? !0 : (l.addClass("vbox-item"), l.data("framewidth", D.framewidth), l.data("frameheight", D.frameheight), l.data("border", D.border), l.data("bgcolor", D.bgcolor), l.data("numeratio", D.numeratio), l.data("infinigall", D.infinigall), l.data("overlayclose", D.overlayclose), l.data("venobox", !0), void l.click(function(d) {
          function Q() {
            A = l.data("gall"), E = l.data("numeratio"), q = l.data("infinigall"), z = t('.vbox-item[data-gall="' + A + '"]'), z.length > 1 && E === !0 ? (v.html(z.index(l) + 1 + " / " + z.length), v.show()) : v.hide(), B = z.eq(z.index(l) + 1), F = z.eq(z.index(l) - 1), l.attr(D.titleattr) ? (X = l.attr(D.titleattr), f.show()) : (X = "", f.hide()), z.length > 1 && q === !0 ? (J = !0, K = !0, B.length < 1 && (B = z.eq(0)), z.index(l) < 1 && (F = z.eq(z.index(z.length)))) : (B.length > 0 ? (t(".vbox-next").css("display", "block"), J = !0) : (t(".vbox-next").css("display", "none"), J = !1), z.index(l) > 0 ? (t(".vbox-prev").css("display", "block"), K = !0) : (t(".vbox-prev").css("display", "none"), K = !1))
          }

          function G(t) {
            27 === t.keyCode && I()
          }

          function I() {
            t("body").removeClass("vbox-open"), t("body").unbind("keydown", G), P.animate({
              opacity: 0
            }, 500, function() {
              P.remove(), H = !1, l.focus()
            })
          }
          d.stopPropagation(), d.preventDefault(), l = t(this), L = l.data("overlay"), C = l.data("framewidth"), j = l.data("frameheight"), c = l.data("autoplay") || !1, m = l.data("border"), s = l.data("bgcolor"), J = !1, K = !1, H = !1, g = l.data("href") || l.attr("href"), w = l.data("css") || "", t("body").addClass("vbox-open"), b = '<div class="vbox-overlay ' + w + '" style="background:' + L + '"><div class="vbox-preloader">Loading...</div><div class="vbox-container"><div class="vbox-content"></div></div><div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">X</div><div class="vbox-next">next</div><div class="vbox-prev">prev</div></div>', t("body").append(b), P = t(".vbox-overlay"), h = t(".vbox-container"), u = t(".vbox-content"), v = t(".vbox-num"), f = t(".vbox-title"), u.html(""), u.css("opacity", "0"), Q(), P.css("min-height", t(window).outerHeight()), P.animate({
            opacity: 1
          }, 250, function() {
            "iframe" == l.data("type") ? e() : "inline" == l.data("type") ? n() : "ajax" == l.data("type") ? a() : "vimeo" == l.data("type") ? o(c) : "youtube" == l.data("type") ? i(c) : (u.html('<img src="' + g + '">'), r())
          });
          var M = {
            prev: function() {
              H || (H = !0, L = F.data("overlay"), C = F.data("framewidth"), j = F.data("frameheight"), m = F.data("border"), s = F.data("bgcolor"), g = F.data("href") || F.attr("href"), c = F.data("autoplay"), X = F.attr(D.titleattr) ? F.attr(D.titleattr) : "", void 0 === L && (L = ""), u.animate({
                opacity: 0
              }, 500, function() {
                P.css("background", L), "iframe" == F.data("type") ? e() : "inline" == F.data("type") ? n() : "ajax" == F.data("type") ? a() : "youtube" == F.data("type") ? i(c) : "vimeo" == F.data("type") ? o(c) : (u.html('<img src="' + g + '">'), r()), l = F, Q(), H = !1
              }))
            },
            next: function() {
              H || (H = !0, L = B.data("overlay"), C = B.data("framewidth"), j = B.data("frameheight"), m = B.data("border"), s = B.data("bgcolor"), g = B.data("href") || B.attr("href"), c = B.data("autoplay"), X = B.attr(D.titleattr) ? B.attr(D.titleattr) : "", void 0 === L && (L = ""), u.animate({
                opacity: 0
              }, 500, function() {
                P.css("background", L), "iframe" == B.data("type") ? e() : "inline" == B.data("type") ? n() : "ajax" == B.data("type") ? a() : "youtube" == B.data("type") ? i(c) : "vimeo" == B.data("type") ? o(c) : (u.html('<img src="' + g + '">'), r()), l = B, Q(), H = !1
              }))
            }
          };
          t("body").keydown(function(t) {
            37 == t.keyCode && 1 == K && M.prev(), 39 == t.keyCode && 1 == J && M.next()
          }), t(".vbox-prev").click(function() {
            M.prev()
          }), t(".vbox-next").click(function() {
            M.next()
          });
          var N = ".vbox-close, .vbox-overlay";
          return l.data("overlayclose") || (N = ".vbox-close"), t(N).click(function(a) {
            p = ".figlio", y = ".vbox-prev", x = ".vbox-next", k = ".figlio *", t(a.target).is(p) || t(a.target).is(x) || t(a.target).is(y) || t(a.target).is(k) || I()
          }), t("body").keydown(G), !1
        }))
      })
    }
  }), t(window).resize(function() {
    d()
  })
}(jQuery);


/*
	Ripple - jQuery
---------------------------*/
$(".ripple-btn").click(function(a) {
  var i = $(this);
  0 == i.find(".material-ink").length && i.prepend("<div class='material-ink'></div>");
  var t = i.find(".material-ink");
  if (t.removeClass("animate"), !t.height() && !t.width()) {
    var e = Math.max(i.outerWidth(), i.outerHeight());
    t.css({
      height: e,
      width: e
    })
  }
  var r = a.pageX - i.offset().left - t.width() / 2,
    h = a.pageY - i.offset().top - t.height() / 2,
    l = i.data("ripple-color");
  t.css({
    top: h + "px",
    left: r + "px",
    background: l
  }).addClass("animate")
});

/*
	WOW JS - jQuery
---------------------------*/

/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function() {
  var a, b, c, d, e, f = function(a, b) {
      return function() {
        return a.apply(b, arguments)
      }
    },
    g = [].indexOf || function(a) {
      for (var b = 0, c = this.length; c > b; b++)
        if (b in this && this[b] === a) return b;
      return -1
    };
  b = function() {
    function a() {}
    return a.prototype.extend = function(a, b) {
      var c, d;
      for (c in b) d = b[c], null == a[c] && (a[c] = d);
      return a
    }, a.prototype.isMobile = function(a) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }, a.prototype.createEvent = function(a, b, c, d) {
      var e;
      return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
    }, a.prototype.emitEvent = function(a, b) {
      return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
    }, a.prototype.addEvent = function(a, b, c) {
      return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }, a.prototype.removeEvent = function(a, b, c) {
      return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }, a.prototype.innerHeight = function() {
      return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    }, a
  }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
    function a() {
      this.keys = [], this.values = []
    }
    return a.prototype.get = function(a) {
      var b, c, d, e, f;
      for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
        if (c = f[b], c === a) return this.values[b]
    }, a.prototype.set = function(a, b) {
      var c, d, e, f, g;
      for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
        if (d = g[c], d === a) return void(this.values[c] = b);
      return this.keys.push(a), this.values.push(b)
    }, a
  }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
    function a() {
      "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
    }
    return a.notSupported = !0, a.prototype.observe = function() {}, a
  }()), d = this.getComputedStyle || function(a, b) {
    return this.getPropertyValue = function(b) {
      var c;
      return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
        return b.toUpperCase()
      }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
    }, this
  }, e = /(\-([a-z]){1})/g, this.WOW = function() {
    function e(a) {
      null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
    }
    return e.prototype.defaults = {
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      callback: null,
      scrollContainer: null
    }, e.prototype.init = function() {
      var a;
      return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
    }, e.prototype.start = function() {
      var b, c, d, e;
      if (this.stopped = !1, this.boxes = function() {
          var a, c, d, e;
          for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
          return e
        }.call(this), this.all = function() {
          var a, c, d, e;
          for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
          return e
        }.call(this), this.boxes.length)
        if (this.disabled()) this.resetStyle();
        else
          for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
      return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
        return function(b) {
          var c, d, e, f, g;
          for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() {
            var a, b, c, d;
            for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
            return d
          }.call(a));
          return g
        }
      }(this)).observe(document.body, {
        childList: !0,
        subtree: !0
      }) : void 0
    }, e.prototype.stop = function() {
      return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
    }, e.prototype.sync = function(b) {
      return a.notSupported ? this.doSync(this.element) : void 0
    }, e.prototype.doSync = function(a) {
      var b, c, d, e, f;
      if (null == a && (a = this.element), 1 === a.nodeType) {
        for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
        return f
      }
    }, e.prototype.show = function(a) {
      return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
    }, e.prototype.applyStyle = function(a, b) {
      var c, d, e;
      return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
        return function() {
          return f.customStyle(a, b, d, c, e)
        }
      }(this))
    }, e.prototype.animate = function() {
      return "requestAnimationFrame" in window ? function(a) {
        return window.requestAnimationFrame(a)
      } : function(a) {
        return a()
      }
    }(), e.prototype.resetStyle = function() {
      var a, b, c, d, e;
      for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
      return e
    }, e.prototype.resetAnimation = function(a) {
      var b;
      return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
    }, e.prototype.customStyle = function(a, b, c, d, e) {
      return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
        animationDuration: c
      }), d && this.vendorSet(a.style, {
        animationDelay: d
      }), e && this.vendorSet(a.style, {
        animationIterationCount: e
      }), this.vendorSet(a.style, {
        animationName: b ? "none" : this.cachedAnimationName(a)
      }), a
    }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
      var c, d, e, f;
      d = [];
      for (c in b) e = b[c], a["" + c] = e, d.push(function() {
        var b, d, g, h;
        for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
        return h
      }.call(this));
      return d
    }, e.prototype.vendorCSS = function(a, b) {
      var c, e, f, g, h, i;
      for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
      return g
    }, e.prototype.animationName = function(a) {
      var b;
      try {
        b = this.vendorCSS(a, "animation-name").cssText
      } catch (c) {
        b = d(a).getPropertyValue("animation-name")
      }
      return "none" === b ? "" : b
    }, e.prototype.cacheAnimationName = function(a) {
      return this.animationNameCache.set(a, this.animationName(a))
    }, e.prototype.cachedAnimationName = function(a) {
      return this.animationNameCache.get(a)
    }, e.prototype.scrollHandler = function() {
      return this.scrolled = !0
    }, e.prototype.scrollCallback = function() {
      var a;
      return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
        var b, c, d, e;
        for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
        return e
      }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
    }, e.prototype.offsetTop = function(a) {
      for (var b; void 0 === a.offsetTop;) a = a.parentNode;
      for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
      return b
    }, e.prototype.isVisible = function(a) {
      var b, c, d, e, f;
      return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
    }, e.prototype.util = function() {
      return null != this._util ? this._util : this._util = new b
    }, e.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent)
    }, e
  }()
}).call(this);

/*!
	Mailchimp Ajax Submit
	jQuery Plugin
	Author: Siddharth Doshi
	Copyright (c) 2013 Siddharth Doshi
--------------------------------------*/
(function($) {
  "use strict";
  $.ajaxChimp = {
    responses: {
      "We have sent you a confirmation email": 0,
      "Please enter a value": 1,
      "An email address must contain a single @": 2,
      "The domain portion of the email address is invalid (the portion after the @: )": 3,
      "The username portion of the email address is invalid (the portion before the @: )": 4,
      "This email address looks fake or invalid. Please enter a real email address": 5
    },
    translations: {
      en: null
    },
    init: function(selector, options) {
      $(selector).ajaxChimp(options)
    }
  };
  $.fn.ajaxChimp = function(options) {
    $(this).each(function(i, elem) {
      var form = $(elem);
      var email = form.find("input[type=email]");
      var label = form.find("label[for=" + email.attr("id") + "]");
      var settings = $.extend({
        url: form.attr("action"),
        language: "en"
      }, options);
      var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
      form.attr("novalidate", "true");
      email.attr("name", "EMAIL");
      form.submit(function() {
        var msg;

        function successCallback(resp) {
          if (resp.result === "success") {
            msg = "We have sent you a confirmation email";
            label.removeClass("error").addClass("valid");
            email.removeClass("error").addClass("valid")
          } else {
            email.removeClass("valid").addClass("error");
            label.removeClass("valid").addClass("error");
            var index = -1;
            try {
              var parts = resp.msg.split(" - ", 2);
              if (parts[1] === undefined) {
                msg = resp.msg
              } else {
                var i = parseInt(parts[0], 10);
                if (i.toString() === parts[0]) {
                  index = parts[0];
                  msg = parts[1]
                } else {
                  index = -1;
                  msg = resp.msg
                }
              }
            } catch (e) {
              index = -1;
              msg = resp.msg
            }
          }
          if (settings.language !== "en" && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
            msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
          }
          label.html(msg);
          label.show(2e3);
          if (settings.callback) {
            settings.callback(resp)
          }
        }
        var data = {};
        var dataArray = form.serializeArray();
        $.each(dataArray, function(index, item) {
          data[item.name] = item.value
        });
        $.ajax({
          url: url,
          data: data,
          success: successCallback,
          dataType: "jsonp",
          error: function(resp, text) {
            console.log("mailchimp ajax submit error: " + text)
          }
        });
        var submitMsg = "Submitting...";
        if (settings.language !== "en" && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]["submit"]) {
          submitMsg = $.ajaxChimp.translations[settings.language]["submit"]
        }
        label.html(submitMsg).show(2e3);
        return false
      })
    });
    return this
  }
})(jQuery);


/*
	scrollup - jQuery
---------------------------*/
/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
! function(l, o, e) {
  "use strict";
  l.fn.scrollUp = function(o) {
    l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o))
  }, l.fn.scrollUp.init = function(r) {
    var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r),
      f = !1;
    switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
      id: p.scrollName,
      href: "#top"
    }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
      display: "none",
      position: "fixed",
      zIndex: p.zIndex
    }), p.activeOverlay && l("<div/>", {
      id: p.scrollName + "-active"
    }).css({
      position: "absolute",
      top: p.scrollDistance + "px",
      width: "100%",
      borderTop: "1px dotted" + p.activeOverlay,
      zIndex: p.zIndex
    }).appendTo("body"), p.animation) {
      case "fade":
        s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
        break;
      case "slide":
        s = "slideDown", t = "slideUp", c = p.animationSpeed;
        break;
      default:
        s = "show", t = "hide", c = 0
    }
    i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function() {
      l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1)
    }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function(o) {
      o.preventDefault(), l("html, body").animate({
        scrollTop: a
      }, p.scrollSpeed, p.easingType)
    })
  }, l.fn.scrollUp.defaults = {
    scrollName: "scrollUp",
    scrollDistance: 300,
    scrollFrom: "top",
    scrollSpeed: 300,
    easingType: "linear",
    animation: "fade",
    animationSpeed: 200,
    scrollTrigger: !1,
    scrollTarget: !1,
    scrollText: "Scroll to top",
    scrollTitle: !1,
    scrollImg: !1,
    activeOverlay: !1,
    zIndex: 2147483647
  }, l.fn.scrollUp.destroy = function(r) {
    l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r)
  }, l.scrollUp = l.fn.scrollUp
}(jQuery, window, document);
