(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-popper'), require('react-dom'), require('react-transition-group/Transition')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-popper', 'react-dom', 'react-transition-group/Transition'], factory) :
	(global = global || self, factory(global.DesignReactKit = {}, global.React, global.ReactPopper, global.ReactDOM, global.ReactTransitionGroup.Transition));
}(this, function (exports, React, reactPopper, ReactDOM, Transition) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;
	ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
	Transition = Transition && Transition.hasOwnProperty('default') ? Transition['default'] : Transition;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var webfontloader = createCommonjsModule(function (module) {
	  /* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */
	  (function () {
	    function aa(a, b, c) {
	      return a.call.apply(a.bind, arguments);
	    }

	    function ba(a, b, c) {
	      if (!a) throw Error();

	      if (2 < arguments.length) {
	        var d = Array.prototype.slice.call(arguments, 2);
	        return function () {
	          var c = Array.prototype.slice.call(arguments);
	          Array.prototype.unshift.apply(c, d);
	          return a.apply(b, c);
	        };
	      }

	      return function () {
	        return a.apply(b, arguments);
	      };
	    }

	    function p(a, b, c) {
	      p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
	      return p.apply(null, arguments);
	    }

	    var q = Date.now || function () {
	      return +new Date();
	    };

	    function ca(a, b) {
	      this.a = a;
	      this.o = b || a;
	      this.c = this.o.document;
	    }

	    var da = !!window.FontFace;

	    function t(a, b, c, d) {
	      b = a.c.createElement(b);
	      if (c) for (var e in c) {
	        c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
	      }
	      d && b.appendChild(a.c.createTextNode(d));
	      return b;
	    }

	    function u(a, b, c) {
	      a = a.c.getElementsByTagName(b)[0];
	      a || (a = document.documentElement);
	      a.insertBefore(c, a.lastChild);
	    }

	    function v(a) {
	      a.parentNode && a.parentNode.removeChild(a);
	    }

	    function w(a, b, c) {
	      b = b || [];
	      c = c || [];

	      for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
	        for (var f = !1, g = 0; g < d.length; g += 1) {
	          if (b[e] === d[g]) {
	            f = !0;
	            break;
	          }
	        }

	        f || d.push(b[e]);
	      }

	      b = [];

	      for (e = 0; e < d.length; e += 1) {
	        f = !1;

	        for (g = 0; g < c.length; g += 1) {
	          if (d[e] === c[g]) {
	            f = !0;
	            break;
	          }
	        }

	        f || b.push(d[e]);
	      }

	      a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
	    }

	    function y(a, b) {
	      for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) {
	        if (c[d] == b) return !0;
	      }

	      return !1;
	    }

	    function ea(a) {
	      return a.o.location.hostname || a.a.location.hostname;
	    }

	    function z(a, b, c) {
	      function d() {
	        m && e && f && (m(g), m = null);
	      }

	      b = t(a, "link", {
	        rel: "stylesheet",
	        href: b,
	        media: "all"
	      });
	      var e = !1,
	          f = !0,
	          g = null,
	          m = c || null;
	      da ? (b.onload = function () {
	        e = !0;
	        d();
	      }, b.onerror = function () {
	        e = !0;
	        g = Error("Stylesheet failed to load");
	        d();
	      }) : setTimeout(function () {
	        e = !0;
	        d();
	      }, 0);
	      u(a, "head", b);
	    }

	    function A(a, b, c, d) {
	      var e = a.c.getElementsByTagName("head")[0];

	      if (e) {
	        var f = t(a, "script", {
	          src: b
	        }),
	            g = !1;

	        f.onload = f.onreadystatechange = function () {
	          g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
	        };

	        e.appendChild(f);
	        setTimeout(function () {
	          g || (g = !0, c && c(Error("Script load timeout")));
	        }, d || 5E3);
	        return f;
	      }

	      return null;
	    }

	    function B() {
	      this.a = 0;
	      this.c = null;
	    }

	    function C(a) {
	      a.a++;
	      return function () {
	        a.a--;
	        D(a);
	      };
	    }

	    function E(a, b) {
	      a.c = b;
	      D(a);
	    }

	    function D(a) {
	      0 == a.a && a.c && (a.c(), a.c = null);
	    }

	    function F(a) {
	      this.a = a || "-";
	    }

	    F.prototype.c = function (a) {
	      for (var b = [], c = 0; c < arguments.length; c++) {
	        b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
	      }

	      return b.join(this.a);
	    };

	    function G(a, b) {
	      this.c = a;
	      this.f = 4;
	      this.a = "n";
	      var c = (b || "n4").match(/^([nio])([1-9])$/i);
	      c && (this.a = c[1], this.f = parseInt(c[2], 10));
	    }

	    function fa(a) {
	      return H(a) + " " + (a.f + "00") + " 300px " + I(a.c);
	    }

	    function I(a) {
	      var b = [];
	      a = a.split(/,\s*/);

	      for (var c = 0; c < a.length; c++) {
	        var d = a[c].replace(/['"]/g, "");
	        -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
	      }

	      return b.join(",");
	    }

	    function J(a) {
	      return a.a + a.f;
	    }

	    function H(a) {
	      var b = "normal";
	      "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
	      return b;
	    }

	    function ga(a) {
	      var b = 4,
	          c = "n",
	          d = null;
	      a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
	      return c + b;
	    }

	    function ha(a, b) {
	      this.c = a;
	      this.f = a.o.document.documentElement;
	      this.h = b;
	      this.a = new F("-");
	      this.j = !1 !== b.events;
	      this.g = !1 !== b.classes;
	    }

	    function ia(a) {
	      a.g && w(a.f, [a.a.c("wf", "loading")]);
	      K(a, "loading");
	    }

	    function L(a) {
	      if (a.g) {
	        var b = y(a.f, a.a.c("wf", "active")),
	            c = [],
	            d = [a.a.c("wf", "loading")];
	        b || c.push(a.a.c("wf", "inactive"));
	        w(a.f, c, d);
	      }

	      K(a, "inactive");
	    }

	    function K(a, b, c) {
	      if (a.j && a.h[b]) if (c) a.h[b](c.c, J(c));else a.h[b]();
	    }

	    function ja() {
	      this.c = {};
	    }

	    function ka(a, b, c) {
	      var d = [],
	          e;

	      for (e in b) {
	        if (b.hasOwnProperty(e)) {
	          var f = a.c[e];
	          f && d.push(f(b[e], c));
	        }
	      }

	      return d;
	    }

	    function M(a, b) {
	      this.c = a;
	      this.f = b;
	      this.a = t(this.c, "span", {
	        "aria-hidden": "true"
	      }, this.f);
	    }

	    function N(a) {
	      u(a.c, "body", a.a);
	    }

	    function O(a) {
	      return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(a.c) + ";" + ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";");
	    }

	    function P(a, b, c, d, e, f) {
	      this.g = a;
	      this.j = b;
	      this.a = d;
	      this.c = c;
	      this.f = e || 3E3;
	      this.h = f || void 0;
	    }

	    P.prototype.start = function () {
	      var a = this.c.o.document,
	          b = this,
	          c = q(),
	          d = new Promise(function (d, e) {
	        function f() {
	          q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function (a) {
	            1 <= a.length ? d() : setTimeout(f, 25);
	          }, function () {
	            e();
	          });
	        }

	        f();
	      }),
	          e = null,
	          f = new Promise(function (a, d) {
	        e = setTimeout(d, b.f);
	      });
	      Promise.race([f, d]).then(function () {
	        e && (clearTimeout(e), e = null);
	        b.g(b.a);
	      }, function () {
	        b.j(b.a);
	      });
	    };

	    function Q(a, b, c, d, e, f, g) {
	      this.v = a;
	      this.B = b;
	      this.c = c;
	      this.a = d;
	      this.s = g || "BESbswy";
	      this.f = {};
	      this.w = e || 3E3;
	      this.u = f || null;
	      this.m = this.j = this.h = this.g = null;
	      this.g = new M(this.c, this.s);
	      this.h = new M(this.c, this.s);
	      this.j = new M(this.c, this.s);
	      this.m = new M(this.c, this.s);
	      a = new G(this.a.c + ",serif", J(this.a));
	      a = O(a);
	      this.g.a.style.cssText = a;
	      a = new G(this.a.c + ",sans-serif", J(this.a));
	      a = O(a);
	      this.h.a.style.cssText = a;
	      a = new G("serif", J(this.a));
	      a = O(a);
	      this.j.a.style.cssText = a;
	      a = new G("sans-serif", J(this.a));
	      a = O(a);
	      this.m.a.style.cssText = a;
	      N(this.g);
	      N(this.h);
	      N(this.j);
	      N(this.m);
	    }

	    var R = {
	      D: "serif",
	      C: "sans-serif"
	    },
	        S = null;

	    function T() {
	      if (null === S) {
	        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
	        S = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
	      }

	      return S;
	    }

	    Q.prototype.start = function () {
	      this.f.serif = this.j.a.offsetWidth;
	      this.f["sans-serif"] = this.m.a.offsetWidth;
	      this.A = q();
	      U(this);
	    };

	    function la(a, b, c) {
	      for (var d in R) {
	        if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]]) return !0;
	      }

	      return !1;
	    }

	    function U(a) {
	      var b = a.g.a.offsetWidth,
	          c = a.h.a.offsetWidth,
	          d;
	      (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = T() && la(a, b, c));
	      d ? q() - a.A >= a.w ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : ma(a) : V(a, a.v);
	    }

	    function ma(a) {
	      setTimeout(p(function () {
	        U(this);
	      }, a), 50);
	    }

	    function V(a, b) {
	      setTimeout(p(function () {
	        v(this.g.a);
	        v(this.h.a);
	        v(this.j.a);
	        v(this.m.a);
	        b(this.a);
	      }, a), 0);
	    }

	    function W(a, b, c) {
	      this.c = a;
	      this.a = b;
	      this.f = 0;
	      this.m = this.j = !1;
	      this.s = c;
	    }

	    var X = null;

	    W.prototype.g = function (a) {
	      var b = this.a;
	      b.g && w(b.f, [b.a.c("wf", a.c, J(a).toString(), "active")], [b.a.c("wf", a.c, J(a).toString(), "loading"), b.a.c("wf", a.c, J(a).toString(), "inactive")]);
	      K(b, "fontactive", a);
	      this.m = !0;
	      na(this);
	    };

	    W.prototype.h = function (a) {
	      var b = this.a;

	      if (b.g) {
	        var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")),
	            d = [],
	            e = [b.a.c("wf", a.c, J(a).toString(), "loading")];
	        c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));
	        w(b.f, d, e);
	      }

	      K(b, "fontinactive", a);
	      na(this);
	    };

	    function na(a) {
	      0 == --a.f && a.j && (a.m ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), K(a, "active")) : L(a.a));
	    }

	    function oa(a) {
	      this.j = a;
	      this.a = new ja();
	      this.h = 0;
	      this.f = this.g = !0;
	    }

	    oa.prototype.load = function (a) {
	      this.c = new ca(this.j, a.context || this.j);
	      this.g = !1 !== a.events;
	      this.f = !1 !== a.classes;
	      pa(this, new ha(this.c, a), a);
	    };

	    function qa(a, b, c, d, e) {
	      var f = 0 == --a.h;
	      (a.f || a.g) && setTimeout(function () {
	        var a = e || null,
	            m = d || null || {};
	        if (0 === c.length && f) L(b.a);else {
	          b.f += c.length;
	          f && (b.j = f);
	          var h,
	              l = [];

	          for (h = 0; h < c.length; h++) {
	            var k = c[h],
	                n = m[k.c],
	                r = b.a,
	                x = k;
	            r.g && w(r.f, [r.a.c("wf", x.c, J(x).toString(), "loading")]);
	            K(r, "fontloading", x);
	            r = null;
	            if (null === X) if (window.FontFace) {
	              var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),
	                  xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
	              X = x ? 42 < parseInt(x[1], 10) : xa ? !1 : !0;
	            } else X = !1;
	            X ? r = new P(p(b.g, b), p(b.h, b), b.c, k, b.s, n) : r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.s, a, n);
	            l.push(r);
	          }

	          for (h = 0; h < l.length; h++) {
	            l[h].start();
	          }
	        }
	      }, 0);
	    }

	    function pa(a, b, c) {
	      var d = [],
	          e = c.timeout;
	      ia(b);
	      var d = ka(a.a, c, a.c),
	          f = new W(a.c, b, e);
	      a.h = d.length;
	      b = 0;

	      for (c = d.length; b < c; b++) {
	        d[b].load(function (b, d, c) {
	          qa(a, f, b, d, c);
	        });
	      }
	    }

	    function ra(a, b) {
	      this.c = a;
	      this.a = b;
	    }

	    ra.prototype.load = function (a) {
	      function b() {
	        if (f["__mti_fntLst" + d]) {
	          var c = f["__mti_fntLst" + d](),
	              e = [],
	              h;
	          if (c) for (var l = 0; l < c.length; l++) {
	            var k = c[l].fontfamily;
	            void 0 != c[l].fontStyle && void 0 != c[l].fontWeight ? (h = c[l].fontStyle + c[l].fontWeight, e.push(new G(k, h))) : e.push(new G(k));
	          }
	          a(e);
	        } else setTimeout(function () {
	          b();
	        }, 50);
	      }

	      var c = this,
	          d = c.a.projectId,
	          e = c.a.version;

	      if (d) {
	        var f = c.c.o;
	        A(this.c, (c.a.api || "https://fast.fonts.net/jsapi") + "/" + d + ".js" + (e ? "?v=" + e : ""), function (e) {
	          e ? a([]) : (f["__MonotypeConfiguration__" + d] = function () {
	            return c.a;
	          }, b());
	        }).id = "__MonotypeAPIScript__" + d;
	      } else a([]);
	    };

	    function sa(a, b) {
	      this.c = a;
	      this.a = b;
	    }

	    sa.prototype.load = function (a) {
	      var b,
	          c,
	          d = this.a.urls || [],
	          e = this.a.families || [],
	          f = this.a.testStrings || {},
	          g = new B();
	      b = 0;

	      for (c = d.length; b < c; b++) {
	        z(this.c, d[b], C(g));
	      }

	      var m = [];
	      b = 0;

	      for (c = e.length; b < c; b++) {
	        if (d = e[b].split(":"), d[1]) for (var h = d[1].split(","), l = 0; l < h.length; l += 1) {
	          m.push(new G(d[0], h[l]));
	        } else m.push(new G(d[0]));
	      }

	      E(g, function () {
	        a(m, f);
	      });
	    };

	    function ta(a, b) {
	      a ? this.c = a : this.c = ua;
	      this.a = [];
	      this.f = [];
	      this.g = b || "";
	    }

	    var ua = "https://fonts.googleapis.com/css";

	    function va(a, b) {
	      for (var c = b.length, d = 0; d < c; d++) {
	        var e = b[d].split(":");
	        3 == e.length && a.f.push(e.pop());
	        var f = "";
	        2 == e.length && "" != e[1] && (f = ":");
	        a.a.push(e.join(f));
	      }
	    }

	    function wa(a) {
	      if (0 == a.a.length) throw Error("No fonts to load!");
	      if (-1 != a.c.indexOf("kit=")) return a.c;

	      for (var b = a.a.length, c = [], d = 0; d < b; d++) {
	        c.push(a.a[d].replace(/ /g, "+"));
	      }

	      b = a.c + "?family=" + c.join("%7C");
	      0 < a.f.length && (b += "&subset=" + a.f.join(","));
	      0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
	      return b;
	    }

	    function ya(a) {
	      this.f = a;
	      this.a = [];
	      this.c = {};
	    }

	    var za = {
	      latin: "BESbswy",
	      "latin-ext": "\xE7\xF6\xFC\u011F\u015F",
	      cyrillic: "\u0439\u044F\u0416",
	      greek: "\u03B1\u03B2\u03A3",
	      khmer: "\u1780\u1781\u1782",
	      Hanuman: "\u1780\u1781\u1782"
	    },
	        Aa = {
	      thin: "1",
	      extralight: "2",
	      "extra-light": "2",
	      ultralight: "2",
	      "ultra-light": "2",
	      light: "3",
	      regular: "4",
	      book: "4",
	      medium: "5",
	      "semi-bold": "6",
	      semibold: "6",
	      "demi-bold": "6",
	      demibold: "6",
	      bold: "7",
	      "extra-bold": "8",
	      extrabold: "8",
	      "ultra-bold": "8",
	      ultrabold: "8",
	      black: "9",
	      heavy: "9",
	      l: "3",
	      r: "4",
	      b: "7"
	    },
	        Ba = {
	      i: "i",
	      italic: "i",
	      n: "n",
	      normal: "n"
	    },
	        Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

	    function Da(a) {
	      for (var b = a.f.length, c = 0; c < b; c++) {
	        var d = a.f[c].split(":"),
	            e = d[0].replace(/\+/g, " "),
	            f = ["n4"];

	        if (2 <= d.length) {
	          var g;
	          var m = d[1];
	          g = [];
	          if (m) for (var m = m.split(","), h = m.length, l = 0; l < h; l++) {
	            var k;
	            k = m[l];

	            if (k.match(/^[\w-]+$/)) {
	              var n = Ca.exec(k.toLowerCase());
	              if (null == n) k = "";else {
	                k = n[2];
	                k = null == k || "" == k ? "n" : Ba[k];
	                n = n[1];
	                if (null == n || "" == n) n = "4";else var r = Aa[n],
	                    n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
	                k = [k, n].join("");
	              }
	            } else k = "";

	            k && g.push(k);
	          }
	          0 < g.length && (f = g);
	          3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = za[d[0]]) && (a.c[e] = d));
	        }

	        a.c[e] || (d = za[e]) && (a.c[e] = d);

	        for (d = 0; d < f.length; d += 1) {
	          a.a.push(new G(e, f[d]));
	        }
	      }
	    }

	    function Ea(a, b) {
	      this.c = a;
	      this.a = b;
	    }

	    var Fa = {
	      Arimo: !0,
	      Cousine: !0,
	      Tinos: !0
	    };

	    Ea.prototype.load = function (a) {
	      var b = new B(),
	          c = this.c,
	          d = new ta(this.a.api, this.a.text),
	          e = this.a.families;
	      va(d, e);
	      var f = new ya(e);
	      Da(f);
	      z(c, wa(d), C(b));
	      E(b, function () {
	        a(f.a, f.c, Fa);
	      });
	    };

	    function Ga(a, b) {
	      this.c = a;
	      this.a = b;
	    }

	    Ga.prototype.load = function (a) {
	      var b = this.a.id,
	          c = this.c.o;
	      b ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function (b) {
	        if (b) a([]);else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
	          b = c.Typekit.config.fn;

	          for (var e = [], f = 0; f < b.length; f += 2) {
	            for (var g = b[f], m = b[f + 1], h = 0; h < m.length; h++) {
	              e.push(new G(g, m[h]));
	            }
	          }

	          try {
	            c.Typekit.load({
	              events: !1,
	              classes: !1,
	              async: !0
	            });
	          } catch (l) {}

	          a(e);
	        }
	      }, 2E3) : a([]);
	    };

	    function Ha(a, b) {
	      this.c = a;
	      this.f = b;
	      this.a = [];
	    }

	    Ha.prototype.load = function (a) {
	      var b = this.f.id,
	          c = this.c.o,
	          d = this;
	      b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function (b, c) {
	        for (var g = 0, m = c.fonts.length; g < m; ++g) {
	          var h = c.fonts[g];
	          d.a.push(new G(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
	        }

	        a(d.a);
	      }, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function (b) {
	        b && a([]);
	      })) : a([]);
	    };

	    var Y = new oa(window);

	    Y.a.c.custom = function (a, b) {
	      return new sa(b, a);
	    };

	    Y.a.c.fontdeck = function (a, b) {
	      return new Ha(b, a);
	    };

	    Y.a.c.monotype = function (a, b) {
	      return new ra(b, a);
	    };

	    Y.a.c.typekit = function (a, b) {
	      return new Ga(b, a);
	    };

	    Y.a.c.google = function (a, b) {
	      return new Ea(b, a);
	    };

	    var Z = {
	      load: p(Y.load, Y)
	    };
	      module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
	  })();
	});

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	var reactIs_production_min = createCommonjsModule(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: !0
	  });
	  var b = "function" === typeof Symbol && Symbol["for"],
	      c = b ? Symbol["for"]("react.element") : 60103,
	      d = b ? Symbol["for"]("react.portal") : 60106,
	      e = b ? Symbol["for"]("react.fragment") : 60107,
	      f = b ? Symbol["for"]("react.strict_mode") : 60108,
	      g = b ? Symbol["for"]("react.profiler") : 60114,
	      h = b ? Symbol["for"]("react.provider") : 60109,
	      k = b ? Symbol["for"]("react.context") : 60110,
	      l = b ? Symbol["for"]("react.async_mode") : 60111,
	      m = b ? Symbol["for"]("react.concurrent_mode") : 60111,
	      n = b ? Symbol["for"]("react.forward_ref") : 60112,
	      p = b ? Symbol["for"]("react.suspense") : 60113,
	      q = b ? Symbol["for"]("react.memo") : 60115,
	      r = b ? Symbol["for"]("react.lazy") : 60116;

	  function t(a) {
	    if ("object" === typeof a && null !== a) {
	      var u = a.$$typeof;

	      switch (u) {
	        case c:
	          switch (a = a.type, a) {
	            case l:
	            case m:
	            case e:
	            case g:
	            case f:
	            case p:
	              return a;

	            default:
	              switch (a = a && a.$$typeof, a) {
	                case k:
	                case n:
	                case h:
	                  return a;

	                default:
	                  return u;
	              }

	          }

	        case r:
	        case q:
	        case d:
	          return u;
	      }
	    }
	  }

	  function v(a) {
	    return t(a) === m;
	  }

	  exports.typeOf = t;
	  exports.AsyncMode = l;
	  exports.ConcurrentMode = m;
	  exports.ContextConsumer = k;
	  exports.ContextProvider = h;
	  exports.Element = c;
	  exports.ForwardRef = n;
	  exports.Fragment = e;
	  exports.Lazy = r;
	  exports.Memo = q;
	  exports.Portal = d;
	  exports.Profiler = g;
	  exports.StrictMode = f;
	  exports.Suspense = p;

	  exports.isValidElementType = function (a) {
	    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || "object" === typeof a && null !== a && (a.$$typeof === r || a.$$typeof === q || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n);
	  };

	  exports.isAsyncMode = function (a) {
	    return v(a) || t(a) === l;
	  };

	  exports.isConcurrentMode = v;

	  exports.isContextConsumer = function (a) {
	    return t(a) === k;
	  };

	  exports.isContextProvider = function (a) {
	    return t(a) === h;
	  };

	  exports.isElement = function (a) {
	    return "object" === typeof a && null !== a && a.$$typeof === c;
	  };

	  exports.isForwardRef = function (a) {
	    return t(a) === n;
	  };

	  exports.isFragment = function (a) {
	    return t(a) === e;
	  };

	  exports.isLazy = function (a) {
	    return t(a) === r;
	  };

	  exports.isMemo = function (a) {
	    return t(a) === q;
	  };

	  exports.isPortal = function (a) {
	    return t(a) === d;
	  };

	  exports.isProfiler = function (a) {
	    return t(a) === g;
	  };

	  exports.isStrictMode = function (a) {
	    return t(a) === f;
	  };

	  exports.isSuspense = function (a) {
	    return t(a) === p;
	  };
	});
	unwrapExports(reactIs_production_min);
	var reactIs_production_min_1 = reactIs_production_min.typeOf;
	var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
	var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
	var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
	var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
	var reactIs_production_min_6 = reactIs_production_min.Element;
	var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
	var reactIs_production_min_8 = reactIs_production_min.Fragment;
	var reactIs_production_min_9 = reactIs_production_min.Lazy;
	var reactIs_production_min_10 = reactIs_production_min.Memo;
	var reactIs_production_min_11 = reactIs_production_min.Portal;
	var reactIs_production_min_12 = reactIs_production_min.Profiler;
	var reactIs_production_min_13 = reactIs_production_min.StrictMode;
	var reactIs_production_min_14 = reactIs_production_min.Suspense;
	var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
	var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
	var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
	var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
	var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
	var reactIs_production_min_20 = reactIs_production_min.isElement;
	var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
	var reactIs_production_min_22 = reactIs_production_min.isFragment;
	var reactIs_production_min_23 = reactIs_production_min.isLazy;
	var reactIs_production_min_24 = reactIs_production_min.isMemo;
	var reactIs_production_min_25 = reactIs_production_min.isPortal;
	var reactIs_production_min_26 = reactIs_production_min.isProfiler;
	var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
	var reactIs_production_min_28 = reactIs_production_min.isSuspense;

	var reactIs_development = createCommonjsModule(function (module, exports) {
	});
	unwrapExports(reactIs_development);
	var reactIs_development_1 = reactIs_development.typeOf;
	var reactIs_development_2 = reactIs_development.AsyncMode;
	var reactIs_development_3 = reactIs_development.ConcurrentMode;
	var reactIs_development_4 = reactIs_development.ContextConsumer;
	var reactIs_development_5 = reactIs_development.ContextProvider;
	var reactIs_development_6 = reactIs_development.Element;
	var reactIs_development_7 = reactIs_development.ForwardRef;
	var reactIs_development_8 = reactIs_development.Fragment;
	var reactIs_development_9 = reactIs_development.Lazy;
	var reactIs_development_10 = reactIs_development.Memo;
	var reactIs_development_11 = reactIs_development.Portal;
	var reactIs_development_12 = reactIs_development.Profiler;
	var reactIs_development_13 = reactIs_development.StrictMode;
	var reactIs_development_14 = reactIs_development.Suspense;
	var reactIs_development_15 = reactIs_development.isValidElementType;
	var reactIs_development_16 = reactIs_development.isAsyncMode;
	var reactIs_development_17 = reactIs_development.isConcurrentMode;
	var reactIs_development_18 = reactIs_development.isContextConsumer;
	var reactIs_development_19 = reactIs_development.isContextProvider;
	var reactIs_development_20 = reactIs_development.isElement;
	var reactIs_development_21 = reactIs_development.isForwardRef;
	var reactIs_development_22 = reactIs_development.isFragment;
	var reactIs_development_23 = reactIs_development.isLazy;
	var reactIs_development_24 = reactIs_development.isMemo;
	var reactIs_development_25 = reactIs_development.isPortal;
	var reactIs_development_26 = reactIs_development.isProfiler;
	var reactIs_development_27 = reactIs_development.isStrictMode;
	var reactIs_development_28 = reactIs_development.isSuspense;

	var reactIs = createCommonjsModule(function (module) {

	  {
	    module.exports = reactIs_production_min;
	  }
	});

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */

	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
	  if (val === null || val === undefined) {
	    throw new TypeError('Object.assign cannot be called with null or undefined');
	  }

	  return Object(val);
	}

	function shouldUseNative() {
	  try {
	    if (!Object.assign) {
	      return false;
	    } // Detect buggy property enumeration order in older V8 versions.
	    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


	    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

	    test1[5] = 'de';

	    if (Object.getOwnPropertyNames(test1)[0] === '5') {
	      return false;
	    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	    var test2 = {};

	    for (var i = 0; i < 10; i++) {
	      test2['_' + String.fromCharCode(i)] = i;
	    }

	    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	      return test2[n];
	    });

	    if (order2.join('') !== '0123456789') {
	      return false;
	    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	    var test3 = {};
	    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	      test3[letter] = letter;
	    });

	    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	      return false;
	    }

	    return true;
	  } catch (err) {
	    // We don't expect any of the above to throw, but better to be safe.
	    return false;
	  }
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	  var from;
	  var to = toObject(target);
	  var symbols;

	  for (var s = 1; s < arguments.length; s++) {
	    from = Object(arguments[s]);

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }

	    if (getOwnPropertySymbols) {
	      symbols = getOwnPropertySymbols(from);

	      for (var i = 0; i < symbols.length; i++) {
	        if (propIsEnumerable.call(from, symbols[i])) {
	          to[symbols[i]] = from[symbols[i]];
	        }
	      }
	    }
	  }

	  return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var has = Function.call.bind(Object.prototype.hasOwnProperty);

	function emptyFunction() {}

	function emptyFunctionWithReset() {}

	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function factoryWithThrowingShims() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }

	    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	    err.name = 'Invariant Violation';
	    throw err;
	  }
	  shim.isRequired = shim;

	  function getShim() {
	    return shim;
	  }
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,
	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };
	  ReactPropTypes.PropTypes = ReactPropTypes;
	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	  /**
	   * Copyright (c) 2013-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   */
	  {
	    // By explicitly using `prop-types` you are opting into new production behavior.
	    // http://fb.me/prop-types-in-prod
	    module.exports = factoryWithThrowingShims();
	  }
	});

	var classnames = createCommonjsModule(function (module) {
	  /*!
	    Copyright (c) 2017 Jed Watson.
	    Licensed under the MIT License (MIT), see
	    http://jedwatson.github.io/classnames
	  */

	  /* global define */
	  (function () {

	    var hasOwn = {}.hasOwnProperty;

	    function classNames() {
	      var classes = [];

	      for (var i = 0; i < arguments.length; i++) {
	        var arg = arguments[i];
	        if (!arg) continue;
	        var argType = typeof arg;

	        if (argType === 'string' || argType === 'number') {
	          classes.push(arg);
	        } else if (Array.isArray(arg) && arg.length) {
	          var inner = classNames.apply(null, arg);

	          if (inner) {
	            classes.push(inner);
	          }
	        } else if (argType === 'object') {
	          for (var key in arg) {
	            if (hasOwn.call(arg, key) && arg[key]) {
	              classes.push(key);
	            }
	          }
	        }
	      }

	      return classes.join(' ');
	    }

	    if ( module.exports) {
	      classNames["default"] = classNames;
	      module.exports = classNames;
	    } else {
	      window.classNames = classNames;
	    }
	  })();
	});

	/**
	 * Lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright JS Foundation and other contributors <https://js.foundation/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** `Object#toString` result references. */

	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    nullTag = '[object Null]',
	    proxyTag = '[object Proxy]',
	    undefinedTag = '[object Undefined]';
	/** Detect free variable `global` from Node.js. */

	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
	/** Detect free variable `self`. */

	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	/** Used as a reference to the global object. */

	var root = freeGlobal || freeSelf || Function('return this')();
	/** Used for built-in method references. */

	var objectProto = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$1 = objectProto.hasOwnProperty;
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */

	var nativeObjectToString = objectProto.toString;
	/** Built-in value references. */

	var Symbol$1 = root.Symbol,
	    symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */

	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }

	  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */


	function getRawTag(value) {
	  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);

	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }

	  return result;
	}
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */


	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */


	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  } // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.


	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */


	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var lodash_isfunction = isFunction;

	function getScrollbarWidth() {
	  var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

	  scrollDiv.style.position = 'absolute';
	  scrollDiv.style.top = '-9999px';
	  scrollDiv.style.width = '50px';
	  scrollDiv.style.height = '50px';
	  scrollDiv.style.overflow = 'scroll';
	  document.body.appendChild(scrollDiv);
	  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	  document.body.removeChild(scrollDiv);
	  return scrollbarWidth;
	}
	function setScrollbarWidth(padding) {
	  document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
	}
	function isBodyOverflowing() {
	  return document.body.clientWidth < window.innerWidth;
	}
	function getOriginalBodyPadding() {
	  var style = window.getComputedStyle(document.body, null);
	  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
	}
	function conditionallyUpdateScrollbar() {
	  var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

	  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
	  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

	  if (isBodyOverflowing()) {
	    setScrollbarWidth(bodyPadding + scrollbarWidth);
	  }
	}
	var globalCssModule;
	function setGlobalCssModule(cssModule) {
	  globalCssModule = cssModule;
	}
	function mapToCssModules(className, cssModule) {
	  if (className === void 0) {
	    className = '';
	  }

	  if (cssModule === void 0) {
	    cssModule = globalCssModule;
	  }

	  if (!cssModule) return className;
	  return className.split(' ').map(function (c) {
	    return cssModule[c] || c;
	  }).join(' ');
	}
	/**
	 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
	 */

	function omit(obj, omitKeys) {
	  var result = {};
	  Object.keys(obj).forEach(function (key) {
	    if (omitKeys.indexOf(key) === -1) {
	      result[key] = obj[key];
	    }
	  });
	  return result;
	}
	/**
	 * Returns a filtered copy of an object with only the specified keys.
	 */

	function pick(obj, keys) {
	  var pickKeys = Array.isArray(keys) ? keys : [keys];
	  var length = pickKeys.length;
	  var key;
	  var result = {};

	  while (length > 0) {
	    length -= 1;
	    key = pickKeys[length];
	    result[key] = obj[key];
	  }

	  return result;
	}
	var warned = {};
	function warnOnce(message) {
	  if (!warned[message]) {
	    /* istanbul ignore else */
	    if (typeof console !== 'undefined') {
	      console.error(message); // eslint-disable-line no-console
	    }

	    warned[message] = true;
	  }
	}
	function deprecated(propType, explanation) {
	  return function validate(props, propName, componentName) {
	    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
	      warnOnce("\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation);
	    }

	    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	      rest[_key - 3] = arguments[_key];
	    }

	    return propType.apply(void 0, [props, propName, componentName].concat(rest));
	  };
	} // Shim Element if needed (e.g. in Node environment)

	var Element = typeof window === 'object' && window.Element || function () {};

	function DOMElement(props, propName, componentName) {
	  if (!(props[propName] instanceof Element)) {
	    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
	  }
	}
	var targetPropType = propTypes.oneOfType([propTypes.string, propTypes.func, DOMElement, propTypes.shape({
	  current: propTypes.any
	})]);
	var tagPropType = propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.shape({
	  $$typeof: propTypes.symbol,
	  render: propTypes.func
	}), propTypes.arrayOf(propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.shape({
	  $$typeof: propTypes.symbol,
	  render: propTypes.func
	})]))]);
	/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
	// These are all setup to match what is in the bootstrap _variables.scss
	// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

	var TransitionTimeouts = {
	  Fade: 150,
	  // $transition-fade
	  Collapse: 350,
	  // $transition-collapse
	  Modal: 300,
	  // $modal-transition
	  Carousel: 600 // $carousel-transition

	}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
	// for distribution properly exclude these keys for nested child HTML attributes
	// since `react-transition-group` removes propTypes in production builds.

	var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
	var TransitionStatuses = {
	  ENTERING: 'entering',
	  ENTERED: 'entered',
	  EXITING: 'exiting',
	  EXITED: 'exited'
	};
	var keyCodes = {
	  esc: 27,
	  space: 32,
	  enter: 13,
	  tab: 9,
	  up: 38,
	  down: 40,
	  home: 36,
	  end: 35,
	  n: 78,
	  p: 80
	};
	var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	function isReactRefObj(target) {
	  if (target && typeof target === 'object') {
	    return 'current' in target;
	  }

	  return false;
	}
	function findDOMElements(target) {
	  if (isReactRefObj(target)) {
	    return target.current;
	  }

	  if (lodash_isfunction(target)) {
	    return target();
	  }

	  if (typeof target === 'string' && canUseDOM) {
	    var selection = document.querySelectorAll(target);

	    if (!selection.length) {
	      selection = document.querySelectorAll("#" + target);
	    }

	    if (!selection.length) {
	      throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
	    }

	    return selection;
	  }

	  return target;
	}
	function isArrayOrNodeList(els) {
	  if (els === null) {
	    return false;
	  }

	  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
	}
	function getTarget(target) {
	  var els = findDOMElements(target);

	  if (isArrayOrNodeList(els)) {
	    return els[0];
	  }

	  return els;
	}
	var defaultToggleEvents = ['touchstart', 'click'];
	function addMultipleEventListeners(_els, handler, _events, useCapture) {
	  var els = _els;

	  if (!isArrayOrNodeList(els)) {
	    els = [els];
	  }

	  var events = _events;

	  if (typeof events === 'string') {
	    events = events.split(/\s+/);
	  }

	  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
	    throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
	  }

	  Array.prototype.forEach.call(events, function (event) {
	    Array.prototype.forEach.call(els, function (el) {
	      el.addEventListener(event, handler, useCapture);
	    });
	  });
	  return function removeEvents() {
	    Array.prototype.forEach.call(events, function (event) {
	      Array.prototype.forEach.call(els, function (el) {
	        el.removeEventListener(event, handler, useCapture);
	      });
	    });
	  };
	}
	var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];

	var utils = /*#__PURE__*/Object.freeze({
		getScrollbarWidth: getScrollbarWidth,
		setScrollbarWidth: setScrollbarWidth,
		isBodyOverflowing: isBodyOverflowing,
		getOriginalBodyPadding: getOriginalBodyPadding,
		conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
		setGlobalCssModule: setGlobalCssModule,
		mapToCssModules: mapToCssModules,
		omit: omit,
		pick: pick,
		warnOnce: warnOnce,
		deprecated: deprecated,
		DOMElement: DOMElement,
		targetPropType: targetPropType,
		tagPropType: tagPropType,
		TransitionTimeouts: TransitionTimeouts,
		TransitionPropTypeKeys: TransitionPropTypeKeys,
		TransitionStatuses: TransitionStatuses,
		keyCodes: keyCodes,
		PopperPlacements: PopperPlacements,
		canUseDOM: canUseDOM,
		isReactRefObj: isReactRefObj,
		findDOMElements: findDOMElements,
		isArrayOrNodeList: isArrayOrNodeList,
		getTarget: getTarget,
		defaultToggleEvents: defaultToggleEvents,
		addMultipleEventListeners: addMultipleEventListeners,
		focusableElements: focusableElements
	});

	var propTypes$1 = {
	  tag: tagPropType,
	  fluid: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps = {
	  tag: 'div'
	};

	var Container = function Container(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      fluid = props.fluid,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "fluid", "tag"]);

	  var classes = mapToCssModules(classnames(className, fluid ? 'container-fluid' : 'container'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Container.propTypes = propTypes$1;
	Container.defaultProps = defaultProps;

	var propTypes$2 = {
	  tag: tagPropType,
	  noGutters: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  form: propTypes.bool
	};
	var defaultProps$1 = {
	  tag: 'div'
	};

	var Row = function Row(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      noGutters = props.noGutters,
	      Tag = props.tag,
	      form = props.form,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "noGutters", "tag", "form"]);

	  var classes = mapToCssModules(classnames(className, noGutters ? 'no-gutters' : null, form ? 'form-row' : 'row'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Row.propTypes = propTypes$2;
	Row.defaultProps = defaultProps$1;

	/**
	 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject$1(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	var lodash_isobject = isObject$1;

	var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
	var stringOrNumberProp = propTypes.oneOfType([propTypes.number, propTypes.string]);
	var columnProps = propTypes.oneOfType([propTypes.bool, propTypes.number, propTypes.string, propTypes.shape({
	  size: propTypes.oneOfType([propTypes.bool, propTypes.number, propTypes.string]),
	  order: stringOrNumberProp,
	  offset: stringOrNumberProp
	})]);
	var propTypes$3 = {
	  tag: tagPropType,
	  xs: columnProps,
	  sm: columnProps,
	  md: columnProps,
	  lg: columnProps,
	  xl: columnProps,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  widths: propTypes.array
	};
	var defaultProps$2 = {
	  tag: 'div',
	  widths: colWidths
	};

	var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
	  if (colSize === true || colSize === '') {
	    return isXs ? 'col' : "col-" + colWidth;
	  } else if (colSize === 'auto') {
	    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
	  }

	  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
	};

	var Col = function Col(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      widths = props.widths,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "widths", "tag"]);

	  var colClasses = [];
	  widths.forEach(function (colWidth, i) {
	    var columnProp = props[colWidth];
	    delete attributes[colWidth];

	    if (!columnProp && columnProp !== '') {
	      return;
	    }

	    var isXs = !i;

	    if (lodash_isobject(columnProp)) {
	      var _classNames;

	      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
	      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
	      colClasses.push(mapToCssModules(classnames((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames)), cssModule));
	    } else {
	      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);

	      colClasses.push(_colClass);
	    }
	  });

	  if (!colClasses.length) {
	    colClasses.push('col');
	  }

	  var classes = mapToCssModules(classnames(className, colClasses), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Col.propTypes = propTypes$3;
	Col.defaultProps = defaultProps$2;

	var propTypes$4 = {
	  light: propTypes.bool,
	  dark: propTypes.bool,
	  full: propTypes.bool,
	  fixed: propTypes.string,
	  sticky: propTypes.string,
	  color: propTypes.string,
	  role: propTypes.string,
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  expand: propTypes.oneOfType([propTypes.bool, propTypes.string])
	};
	var defaultProps$3 = {
	  tag: 'nav',
	  expand: false
	};

	var getExpandClass = function getExpandClass(expand) {
	  if (expand === false) {
	    return false;
	  } else if (expand === true || expand === 'xs') {
	    return 'navbar-expand';
	  }

	  return "navbar-expand-" + expand;
	};

	var Navbar = function Navbar(props) {
	  var _classNames;

	  var expand = props.expand,
	      className = props.className,
	      cssModule = props.cssModule,
	      light = props.light,
	      dark = props.dark,
	      fixed = props.fixed,
	      sticky = props.sticky,
	      color = props.color,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["expand", "className", "cssModule", "light", "dark", "fixed", "sticky", "color", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'navbar', getExpandClass(expand), (_classNames = {
	    'navbar-light': light,
	    'navbar-dark': dark
	  }, _classNames["bg-" + color] = color, _classNames["fixed-" + fixed] = fixed, _classNames["sticky-" + sticky] = sticky, _classNames)), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Navbar.propTypes = propTypes$4;
	Navbar.defaultProps = defaultProps$3;

	var propTypes$5 = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$4 = {
	  tag: 'a'
	};

	var NavbarBrand = function NavbarBrand(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'navbar-brand'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	NavbarBrand.propTypes = propTypes$5;
	NavbarBrand.defaultProps = defaultProps$4;

	var propTypes$6 = {
	  tag: tagPropType,
	  type: propTypes.string,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  children: propTypes.node
	};
	var defaultProps$5 = {
	  tag: 'button',
	  type: 'button'
	};

	var NavbarToggler = function NavbarToggler(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "children", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'navbar-toggler'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }), children || React__default.createElement("span", {
	    className: mapToCssModules('navbar-toggler-icon', cssModule)
	  }));
	};

	NavbarToggler.propTypes = propTypes$6;
	NavbarToggler.defaultProps = defaultProps$5;

	var propTypes$7 = {
	  tabs: propTypes.bool,
	  pills: propTypes.bool,
	  vertical: propTypes.oneOfType([propTypes.bool, propTypes.string]),
	  horizontal: propTypes.string,
	  justified: propTypes.bool,
	  fill: propTypes.bool,
	  navbar: propTypes.bool,
	  card: propTypes.bool,
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$6 = {
	  tag: 'ul',
	  vertical: false
	};

	var getVerticalClass = function getVerticalClass(vertical) {
	  if (vertical === false) {
	    return false;
	  } else if (vertical === true || vertical === 'xs') {
	    return 'flex-column';
	  }

	  return "flex-" + vertical + "-column";
	};

	var Nav = function Nav(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      tabs = props.tabs,
	      pills = props.pills,
	      vertical = props.vertical,
	      horizontal = props.horizontal,
	      justified = props.justified,
	      fill = props.fill,
	      navbar = props.navbar,
	      card = props.card,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"]);

	  var classes = mapToCssModules(classnames(className, navbar ? 'navbar-nav' : 'nav', horizontal ? "justify-content-" + horizontal : false, getVerticalClass(vertical), {
	    'nav-tabs': tabs,
	    'card-header-tabs': card && tabs,
	    'nav-pills': pills,
	    'card-header-pills': card && pills,
	    'nav-justified': justified,
	    'nav-fill': fill
	  }), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Nav.propTypes = propTypes$7;
	Nav.defaultProps = defaultProps$6;

	var propTypes$8 = {
	  tag: tagPropType,
	  active: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$7 = {
	  tag: 'li'
	};

	var NavItem = function NavItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      active = props.active,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "active", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'nav-item', active ? 'active' : false), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	NavItem.propTypes = propTypes$8;
	NavItem.defaultProps = defaultProps$7;

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var propTypes$9 = {
	  tag: tagPropType,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
	  disabled: propTypes.bool,
	  active: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  onClick: propTypes.func,
	  href: propTypes.any
	};
	var defaultProps$8 = {
	  tag: 'a'
	};

	var NavLink =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(NavLink, _React$Component);

	  function NavLink(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = NavLink.prototype;

	  _proto.onClick = function onClick(e) {
	    if (this.props.disabled) {
	      e.preventDefault();
	      return;
	    }

	    if (this.props.href === '#') {
	      e.preventDefault();
	    }

	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        cssModule = _this$props.cssModule,
	        active = _this$props.active,
	        Tag = _this$props.tag,
	        innerRef = _this$props.innerRef,
	        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "active", "tag", "innerRef"]);

	    var classes = mapToCssModules(classnames(className, 'nav-link', {
	      disabled: attributes.disabled,
	      active: active
	    }), cssModule);
	    return React__default.createElement(Tag, _extends({}, attributes, {
	      ref: innerRef,
	      onClick: this.onClick,
	      className: classes
	    }));
	  };

	  return NavLink;
	}(React__default.Component);

	NavLink.propTypes = propTypes$9;
	NavLink.defaultProps = defaultProps$8;

	var propTypes$a = {
	  tag: tagPropType,
	  listTag: tagPropType,
	  className: propTypes.string,
	  listClassName: propTypes.string,
	  cssModule: propTypes.object,
	  children: propTypes.node,
	  'aria-label': propTypes.string
	};
	var defaultProps$9 = {
	  tag: 'nav',
	  listTag: 'ol',
	  'aria-label': 'breadcrumb'
	};

	var Breadcrumb = function Breadcrumb(props) {
	  var className = props.className,
	      listClassName = props.listClassName,
	      cssModule = props.cssModule,
	      children = props.children,
	      Tag = props.tag,
	      ListTag = props.listTag,
	      label = props['aria-label'],
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"]);

	  var classes = mapToCssModules(classnames(className), cssModule);
	  var listClasses = mapToCssModules(classnames('breadcrumb', listClassName), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    "aria-label": label
	  }), React__default.createElement(ListTag, {
	    className: listClasses
	  }, children));
	};

	Breadcrumb.propTypes = propTypes$a;
	Breadcrumb.defaultProps = defaultProps$9;

	var propTypes$b = {
	  tag: tagPropType,
	  active: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$a = {
	  tag: 'li'
	};

	var BreadcrumbItem = function BreadcrumbItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      active = props.active,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "active", "tag"]);

	  var classes = mapToCssModules(classnames(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    "aria-current": active ? 'page' : undefined
	  }));
	};

	BreadcrumbItem.propTypes = propTypes$b;
	BreadcrumbItem.defaultProps = defaultProps$a;

	var propTypes$c = {
	  active: propTypes.bool,
	  'aria-label': propTypes.string,
	  block: propTypes.bool,
	  color: propTypes.string,
	  disabled: propTypes.bool,
	  outline: propTypes.bool,
	  tag: tagPropType,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
	  onClick: propTypes.func,
	  size: propTypes.string,
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  close: propTypes.bool
	};
	var defaultProps$b = {
	  color: 'secondary',
	  tag: 'button'
	};

	var Button =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Button, _React$Component);

	  function Button(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = Button.prototype;

	  _proto.onClick = function onClick(e) {
	    if (this.props.disabled) {
	      e.preventDefault();
	      return;
	    }

	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        active = _this$props.active,
	        ariaLabel = _this$props['aria-label'],
	        block = _this$props.block,
	        className = _this$props.className,
	        close = _this$props.close,
	        cssModule = _this$props.cssModule,
	        color = _this$props.color,
	        outline = _this$props.outline,
	        size = _this$props.size,
	        Tag = _this$props.tag,
	        innerRef = _this$props.innerRef,
	        attributes = _objectWithoutPropertiesLoose(_this$props, ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"]);

	    if (close && typeof attributes.children === 'undefined') {
	      attributes.children = React__default.createElement("span", {
	        "aria-hidden": true
	      }, "\xD7");
	    }

	    var btnOutlineColor = "btn" + (outline ? '-outline' : '') + "-" + color;
	    var classes = mapToCssModules(classnames(className, {
	      close: close
	    }, close || 'btn', close || btnOutlineColor, size ? "btn-" + size : false, block ? 'btn-block' : false, {
	      active: active,
	      disabled: this.props.disabled
	    }), cssModule);

	    if (attributes.href && Tag === 'button') {
	      Tag = 'a';
	    }

	    var defaultAriaLabel = close ? 'Close' : null;
	    return React__default.createElement(Tag, _extends({
	      type: Tag === 'button' && attributes.onClick ? 'button' : undefined
	    }, attributes, {
	      className: classes,
	      ref: innerRef,
	      onClick: this.onClick,
	      "aria-label": ariaLabel || defaultAriaLabel
	    }));
	  };

	  return Button;
	}(React__default.Component);

	Button.propTypes = propTypes$c;
	Button.defaultProps = defaultProps$b;

	/**
	 * DropdownContext
	 * {
	 *  toggle: PropTypes.func.isRequired,
	 *  isOpen: PropTypes.bool.isRequired,
	 *  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
	 *  inNavbar: PropTypes.bool.isRequired,
	 * }
	 */

	var DropdownContext = React__default.createContext({});

	var propTypes$d = {
	  disabled: propTypes.bool,
	  direction: propTypes.oneOf(['up', 'down', 'left', 'right']),
	  group: propTypes.bool,
	  isOpen: propTypes.bool,
	  nav: propTypes.bool,
	  active: propTypes.bool,
	  addonType: propTypes.oneOfType([propTypes.bool, propTypes.oneOf(['prepend', 'append'])]),
	  size: propTypes.string,
	  tag: tagPropType,
	  toggle: propTypes.func,
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  inNavbar: propTypes.bool,
	  setActiveFromChild: propTypes.bool
	};
	var defaultProps$c = {
	  isOpen: false,
	  direction: 'down',
	  nav: false,
	  active: false,
	  addonType: false,
	  inNavbar: false,
	  setActiveFromChild: false
	};

	var Dropdown =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Dropdown, _React$Component);

	  function Dropdown(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_this));
	    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
	    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
	    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
	    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
	    _this.containerRef = React__default.createRef();
	    return _this;
	  }

	  var _proto = Dropdown.prototype;

	  _proto.getContextValue = function getContextValue() {
	    return {
	      toggle: this.props.toggle,
	      isOpen: this.props.isOpen,
	      direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
	      inNavbar: this.props.inNavbar
	    };
	  };

	  _proto.componentDidMount = function componentDidMount() {
	    this.handleProps();
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (this.props.isOpen !== prevProps.isOpen) {
	      this.handleProps();
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.removeEvents();
	  };

	  _proto.getContainer = function getContainer() {
	    return this.containerRef.current;
	  };

	  _proto.getMenuCtrl = function getMenuCtrl() {
	    if (this._$menuCtrl) return this._$menuCtrl;
	    this._$menuCtrl = this.getContainer().querySelector('[aria-expanded]');
	    return this._$menuCtrl;
	  };

	  _proto.getMenuItems = function getMenuItems() {
	    return [].slice.call(this.getContainer().querySelectorAll('[role="menuitem"]'));
	  };

	  _proto.addEvents = function addEvents() {
	    var _this2 = this;

	    ['click', 'touchstart', 'keyup'].forEach(function (event) {
	      return document.addEventListener(event, _this2.handleDocumentClick, true);
	    });
	  };

	  _proto.removeEvents = function removeEvents() {
	    var _this3 = this;

	    ['click', 'touchstart', 'keyup'].forEach(function (event) {
	      return document.removeEventListener(event, _this3.handleDocumentClick, true);
	    });
	  };

	  _proto.handleDocumentClick = function handleDocumentClick(e) {
	    if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
	    var container = this.getContainer();

	    if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
	      return;
	    }

	    this.toggle(e);
	  };

	  _proto.handleKeyDown = function handleKeyDown(e) {
	    var _this4 = this;

	    if (/input|textarea/i.test(e.target.tagName) || keyCodes.tab === e.which && e.target.getAttribute('role') !== 'menuitem') {
	      return;
	    }

	    e.preventDefault();
	    if (this.props.disabled) return;

	    if (this.getMenuCtrl() === e.target) {
	      if (!this.props.isOpen && [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
	        this.toggle(e);
	        setTimeout(function () {
	          return _this4.getMenuItems()[0].focus();
	        });
	      }
	    }

	    if (this.props.isOpen && e.target.getAttribute('role') === 'menuitem') {
	      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
	        this.toggle(e);
	        this.getMenuCtrl().focus();
	      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
	        e.target.click();
	        this.getMenuCtrl().focus();
	      } else if ([keyCodes.down, keyCodes.up].indexOf(e.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
	        var $menuitems = this.getMenuItems();
	        var index = $menuitems.indexOf(e.target);

	        if (keyCodes.up === e.which || keyCodes.p === e.which && e.ctrlKey) {
	          index = index !== 0 ? index - 1 : $menuitems.length - 1;
	        } else if (keyCodes.down === e.which || keyCodes.n === e.which && e.ctrlKey) {
	          index = index === $menuitems.length - 1 ? 0 : index + 1;
	        }

	        $menuitems[index].focus();
	      } else if (keyCodes.end === e.which) {
	        var _$menuitems = this.getMenuItems();

	        _$menuitems[_$menuitems.length - 1].focus();
	      } else if (keyCodes.home === e.which) {
	        var _$menuitems2 = this.getMenuItems();

	        _$menuitems2[0].focus();
	      } else if (e.which >= 48 && e.which <= 90) {
	        var _$menuitems3 = this.getMenuItems();

	        var charPressed = String.fromCharCode(e.which).toLowerCase();

	        for (var i = 0; i < _$menuitems3.length; i += 1) {
	          var firstLetter = _$menuitems3[i].textContent && _$menuitems3[i].textContent[0].toLowerCase();

	          if (firstLetter === charPressed) {
	            _$menuitems3[i].focus();

	            break;
	          }
	        }
	      }
	    }
	  };

	  _proto.handleProps = function handleProps() {
	    if (this.props.isOpen) {
	      this.addEvents();
	    } else {
	      this.removeEvents();
	    }
	  };

	  _proto.toggle = function toggle(e) {
	    if (this.props.disabled) {
	      return e && e.preventDefault();
	    }

	    return this.props.toggle(e);
	  };

	  _proto.render = function render() {
	    var _classNames, _ref;

	    var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar']),
	        className = _omit.className,
	        cssModule = _omit.cssModule,
	        direction = _omit.direction,
	        isOpen = _omit.isOpen,
	        group = _omit.group,
	        size = _omit.size,
	        nav = _omit.nav,
	        setActiveFromChild = _omit.setActiveFromChild,
	        active = _omit.active,
	        addonType = _omit.addonType,
	        tag = _omit.tag,
	        attrs = _objectWithoutPropertiesLoose(_omit, ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "addonType", "tag"]);

	    var Tag = tag || (nav ? 'li' : 'div');
	    var subItemIsActive = false;

	    if (setActiveFromChild) {
	      React__default.Children.map(this.props.children[1].props.children, function (dropdownItem) {
	        if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
	      });
	    }

	    var classes = mapToCssModules(classnames(className, direction !== 'down' && "drop" + direction, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {}, _classNames["input-group-" + addonType] = addonType, _classNames['btn-group'] = group, _classNames["btn-group-" + size] = !!size, _classNames.dropdown = !group && !addonType, _classNames.show = isOpen, _classNames['nav-item'] = nav, _classNames)), cssModule);
	    return React__default.createElement(DropdownContext.Provider, {
	      value: this.getContextValue()
	    }, React__default.createElement(reactPopper.Manager, null, React__default.createElement(Tag, _extends({}, attrs, (_ref = {}, _ref[typeof Tag === 'string' ? 'ref' : 'innerRef'] = this.containerRef, _ref), {
	      onKeyDown: this.handleKeyDown,
	      className: classes
	    }))));
	  };

	  return Dropdown;
	}(React__default.Component);

	Dropdown.propTypes = propTypes$d;
	Dropdown.defaultProps = defaultProps$c;

	var propTypes$e = {
	  children: propTypes.node
	};

	var ButtonDropdown = function ButtonDropdown(props) {
	  return React__default.createElement(Dropdown, _extends({
	    group: true
	  }, props));
	};

	ButtonDropdown.propTypes = propTypes$e;

	var propTypes$f = {
	  tag: tagPropType,
	  'aria-label': propTypes.string,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  role: propTypes.string,
	  size: propTypes.string,
	  vertical: propTypes.bool
	};
	var defaultProps$d = {
	  tag: 'div',
	  role: 'group'
	};

	var ButtonGroup = function ButtonGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      size = props.size,
	      vertical = props.vertical,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "size", "vertical", "tag"]);

	  var classes = mapToCssModules(classnames(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ButtonGroup.propTypes = propTypes$f;
	ButtonGroup.defaultProps = defaultProps$d;

	var propTypes$g = {
	  tag: tagPropType,
	  'aria-label': propTypes.string,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  role: propTypes.string
	};
	var defaultProps$e = {
	  tag: 'div',
	  role: 'toolbar'
	};

	var ButtonToolbar = function ButtonToolbar(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'btn-toolbar'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ButtonToolbar.propTypes = propTypes$g;
	ButtonToolbar.defaultProps = defaultProps$e;

	var propTypes$h = {
	  children: propTypes.node,
	  active: propTypes.bool,
	  disabled: propTypes.bool,
	  divider: propTypes.bool,
	  tag: tagPropType,
	  header: propTypes.bool,
	  onClick: propTypes.func,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  toggle: propTypes.bool
	};
	var defaultProps$f = {
	  tag: 'button',
	  toggle: true
	};

	var DropdownItem =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(DropdownItem, _React$Component);

	  function DropdownItem(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
	    _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = DropdownItem.prototype;

	  _proto.onClick = function onClick(e) {
	    if (this.props.disabled || this.props.header || this.props.divider) {
	      e.preventDefault();
	      return;
	    }

	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }

	    if (this.props.toggle) {
	      this.context.toggle(e);
	    }
	  };

	  _proto.getTabIndex = function getTabIndex() {
	    if (this.props.disabled || this.props.header || this.props.divider) {
	      return '-1';
	    }

	    return '0';
	  };

	  _proto.render = function render() {
	    var tabIndex = this.getTabIndex();
	    var role = tabIndex > -1 ? 'menuitem' : undefined;

	    var _omit = omit(this.props, ['toggle']),
	        className = _omit.className,
	        cssModule = _omit.cssModule,
	        divider = _omit.divider,
	        Tag = _omit.tag,
	        header = _omit.header,
	        active = _omit.active,
	        props = _objectWithoutPropertiesLoose(_omit, ["className", "cssModule", "divider", "tag", "header", "active"]);

	    var classes = mapToCssModules(classnames(className, {
	      disabled: props.disabled,
	      'dropdown-item': !divider && !header,
	      active: active,
	      'dropdown-header': header,
	      'dropdown-divider': divider
	    }), cssModule);

	    if (Tag === 'button') {
	      if (header) {
	        Tag = 'h6';
	      } else if (divider) {
	        Tag = 'div';
	      } else if (props.href) {
	        Tag = 'a';
	      }
	    }

	    return React__default.createElement(Tag, _extends({
	      type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
	    }, props, {
	      tabIndex: tabIndex,
	      role: role,
	      className: classes,
	      onClick: this.onClick
	    }));
	  };

	  return DropdownItem;
	}(React__default.Component);

	DropdownItem.propTypes = propTypes$h;
	DropdownItem.defaultProps = defaultProps$f;
	DropdownItem.contextType = DropdownContext;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      _defineProperty(target, key, source[key]);
	    });
	  }

	  return target;
	}

	var propTypes$i = {
	  tag: tagPropType,
	  children: propTypes.node.isRequired,
	  right: propTypes.bool,
	  flip: propTypes.bool,
	  modifiers: propTypes.object,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  persist: propTypes.bool,
	  positionFixed: propTypes.bool
	};
	var defaultProps$g = {
	  tag: 'div',
	  flip: true
	};
	var noFlipModifier = {
	  flip: {
	    enabled: false
	  }
	};
	var directionPositionMap = {
	  up: 'top',
	  left: 'left',
	  right: 'right',
	  down: 'bottom'
	};

	var DropdownMenu =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(DropdownMenu, _React$Component);

	  function DropdownMenu() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = DropdownMenu.prototype;

	  _proto.render = function render() {
	    var _this = this;

	    var _this$props = this.props,
	        className = _this$props.className,
	        cssModule = _this$props.cssModule,
	        right = _this$props.right,
	        tag = _this$props.tag,
	        flip = _this$props.flip,
	        modifiers = _this$props.modifiers,
	        persist = _this$props.persist,
	        positionFixed = _this$props.positionFixed,
	        attrs = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "right", "tag", "flip", "modifiers", "persist", "positionFixed"]);

	    var classes = mapToCssModules(classnames(className, 'dropdown-menu', {
	      'dropdown-menu-right': right,
	      show: this.context.isOpen
	    }), cssModule);
	    var Tag = tag;

	    if (persist || this.context.isOpen && !this.context.inNavbar) {
	      var position1 = directionPositionMap[this.context.direction] || 'bottom';
	      var position2 = right ? 'end' : 'start';
	      var poperPlacement = position1 + "-" + position2;
	      var poperModifiers = !flip ? _objectSpread({}, modifiers, noFlipModifier) : modifiers;
	      var popperPositionFixed = !!positionFixed;
	      return React__default.createElement(reactPopper.Popper, {
	        placement: poperPlacement,
	        modifiers: poperModifiers,
	        positionFixed: popperPositionFixed
	      }, function (_ref) {
	        var ref = _ref.ref,
	            style = _ref.style,
	            placement = _ref.placement;
	        return React__default.createElement(Tag, _extends({
	          tabIndex: "-1",
	          role: "menu",
	          ref: ref,
	          style: style
	        }, attrs, {
	          "aria-hidden": !_this.context.isOpen,
	          className: classes,
	          "x-placement": placement
	        }));
	      });
	    }

	    return React__default.createElement(Tag, _extends({
	      tabIndex: "-1",
	      role: "menu"
	    }, attrs, {
	      "aria-hidden": !this.context.isOpen,
	      className: classes,
	      "x-placement": attrs.placement
	    }));
	  };

	  return DropdownMenu;
	}(React__default.Component);
	DropdownMenu.propTypes = propTypes$i;
	DropdownMenu.defaultProps = defaultProps$g;
	DropdownMenu.contextType = DropdownContext;

	var propTypes$j = {
	  caret: propTypes.bool,
	  color: propTypes.string,
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  disabled: propTypes.bool,
	  onClick: propTypes.func,
	  'aria-haspopup': propTypes.bool,
	  split: propTypes.bool,
	  tag: tagPropType,
	  nav: propTypes.bool
	};
	var defaultProps$h = {
	  'aria-haspopup': true,
	  color: 'secondary'
	};

	var DropdownToggle =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(DropdownToggle, _React$Component);

	  function DropdownToggle(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = DropdownToggle.prototype;

	  _proto.onClick = function onClick(e) {
	    if (this.props.disabled) {
	      e.preventDefault();
	      return;
	    }

	    if (this.props.nav && !this.props.tag) {
	      e.preventDefault();
	    }

	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }

	    this.context.toggle(e);
	  };

	  _proto.render = function render() {
	    var _this2 = this;

	    var _this$props = this.props,
	        className = _this$props.className,
	        color = _this$props.color,
	        cssModule = _this$props.cssModule,
	        caret = _this$props.caret,
	        split = _this$props.split,
	        nav = _this$props.nav,
	        tag = _this$props.tag,
	        props = _objectWithoutPropertiesLoose(_this$props, ["className", "color", "cssModule", "caret", "split", "nav", "tag"]);

	    var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
	    var classes = mapToCssModules(classnames(className, {
	      'dropdown-toggle': caret || split,
	      'dropdown-toggle-split': split,
	      'nav-link': nav
	    }), cssModule);
	    var children = props.children || React__default.createElement("span", {
	      className: "sr-only"
	    }, ariaLabel);
	    var Tag;

	    if (nav && !tag) {
	      Tag = 'a';
	      props.href = '#';
	    } else if (!tag) {
	      Tag = Button;
	      props.color = color;
	      props.cssModule = cssModule;
	    } else {
	      Tag = tag;
	    }

	    if (this.context.inNavbar) {
	      return React__default.createElement(Tag, _extends({}, props, {
	        className: classes,
	        onClick: this.onClick,
	        "aria-expanded": this.context.isOpen,
	        children: children
	      }));
	    }

	    return React__default.createElement(reactPopper.Reference, null, function (_ref) {
	      var _ref2;

	      var ref = _ref.ref;
	      return React__default.createElement(Tag, _extends({}, props, (_ref2 = {}, _ref2[typeof Tag === 'string' ? 'ref' : 'innerRef'] = ref, _ref2), {
	        className: classes,
	        onClick: _this2.onClick,
	        "aria-expanded": _this2.context.isOpen,
	        children: children
	      }));
	    });
	  };

	  return DropdownToggle;
	}(React__default.Component);

	DropdownToggle.propTypes = propTypes$j;
	DropdownToggle.defaultProps = defaultProps$h;
	DropdownToggle.contextType = DropdownContext;

	var interopRequireDefault = createCommonjsModule(function (module) {
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  }

	  module.exports = _interopRequireDefault;
	});
	unwrapExports(interopRequireDefault);

	var hasClass_1 = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;
	  exports["default"] = hasClass;

	  function hasClass(element, className) {
	    if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
	  }

	  module.exports = exports["default"];
	});
	unwrapExports(hasClass_1);

	var addClass_1 = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;
	  exports["default"] = addClass;

	  var _hasClass = interopRequireDefault(hasClass_1);

	  function addClass(element, className) {
	    if (element.classList) element.classList.add(className);else if (!(0, _hasClass["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
	  }

	  module.exports = exports["default"];
	});
	unwrapExports(addClass_1);

	function replaceClassName(origClass, classToRemove) {
	  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	}

	var removeClass = function removeClass(element, className) {
	  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	function componentWillMount() {
	  // Call this.constructor.gDSFP to support sub-classes.
	  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

	  if (state !== null && state !== undefined) {
	    this.setState(state);
	  }
	}

	function componentWillReceiveProps(nextProps) {
	  // Call this.constructor.gDSFP to support sub-classes.
	  // Use the setState() updater to ensure state isn't stale in certain edge cases.
	  function updater(prevState) {
	    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
	    return state !== null && state !== undefined ? state : null;
	  } // Binding "this" is important for shallow renderer support.


	  this.setState(updater.bind(this));
	}

	function componentWillUpdate(nextProps, nextState) {
	  try {
	    var prevProps = this.props;
	    var prevState = this.state;
	    this.props = nextProps;
	    this.state = nextState;
	    this.__reactInternalSnapshotFlag = true;
	    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
	  } finally {
	    this.props = prevProps;
	    this.state = prevState;
	  }
	} // React may warn about cWM/cWRP/cWU methods being deprecated.
	// Add a flag to suppress these warnings for this special case.


	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;
	componentWillUpdate.__suppressDeprecationWarning = true;

	function polyfill(Component) {
	  var prototype = Component.prototype;

	  if (!prototype || !prototype.isReactComponent) {
	    throw new Error('Can only polyfill class components');
	  }

	  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
	    return Component;
	  } // If new component APIs are defined, "unsafe" lifecycles won't be called.
	  // Error if any of these lifecycles are present,
	  // Because they would work differently between older and newer (16.3+) versions of React.


	  var foundWillMountName = null;
	  var foundWillReceivePropsName = null;
	  var foundWillUpdateName = null;

	  if (typeof prototype.componentWillMount === 'function') {
	    foundWillMountName = 'componentWillMount';
	  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
	    foundWillMountName = 'UNSAFE_componentWillMount';
	  }

	  if (typeof prototype.componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'componentWillReceiveProps';
	  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
	  }

	  if (typeof prototype.componentWillUpdate === 'function') {
	    foundWillUpdateName = 'componentWillUpdate';
	  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
	    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
	  }

	  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
	    var componentName = Component.displayName || Component.name;
	    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
	    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
	  } // React <= 16.2 does not support static getDerivedStateFromProps.
	  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
	  // Newer versions of React will ignore these lifecycles if gDSFP exists.


	  if (typeof Component.getDerivedStateFromProps === 'function') {
	    prototype.componentWillMount = componentWillMount;
	    prototype.componentWillReceiveProps = componentWillReceiveProps;
	  } // React <= 16.2 does not support getSnapshotBeforeUpdate.
	  // As a workaround, use cWU to invoke the new lifecycle.
	  // Newer versions of React will ignore that lifecycle if gSBU exists.


	  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
	    if (typeof prototype.componentDidUpdate !== 'function') {
	      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
	    }

	    prototype.componentWillUpdate = componentWillUpdate;
	    var componentDidUpdate = prototype.componentDidUpdate;

	    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
	      // 16.3+ will not execute our will-update method;
	      // It will pass a snapshot value to did-update though.
	      // Older versions will require our polyfilled will-update value.
	      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
	      // Because for <= 15.x versions this might be a "prevContext" object.
	      // We also can't just check "__reactInternalSnapshot",
	      // Because get-snapshot might return a falsy value.
	      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
	      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
	      componentDidUpdate.call(this, prevProps, prevState, snapshot);
	    };
	  }

	  return Component;
	}

	var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
		polyfill: polyfill
	});

	var Transition_1 = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;
	  exports["default"] = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

	  var PropTypes = _interopRequireWildcard(propTypes);

	  var _react = _interopRequireDefault(React__default);

	  var _reactDom = _interopRequireDefault(ReactDOM);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  }

	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};

	      if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) {
	            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

	            if (desc.get || desc.set) {
	              Object.defineProperty(newObj, key, desc);
	            } else {
	              newObj[key] = obj[key];
	            }
	          }
	        }
	      }

	      newObj["default"] = obj;
	      return newObj;
	    }
	  }

	  function _objectWithoutPropertiesLoose(source, excluded) {
	    if (source == null) return {};
	    var target = {};
	    var sourceKeys = Object.keys(source);
	    var key, i;

	    for (i = 0; i < sourceKeys.length; i++) {
	      key = sourceKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      target[key] = source[key];
	    }

	    return target;
	  }

	  function _inheritsLoose(subClass, superClass) {
	    subClass.prototype = Object.create(superClass.prototype);
	    subClass.prototype.constructor = subClass;
	    subClass.__proto__ = superClass;
	  }

	  var UNMOUNTED = 'unmounted';
	  exports.UNMOUNTED = UNMOUNTED;
	  var EXITED = 'exited';
	  exports.EXITED = EXITED;
	  var ENTERING = 'entering';
	  exports.ENTERING = ENTERING;
	  var ENTERED = 'entered';
	  exports.ENTERED = ENTERED;
	  var EXITING = 'exiting';
	  /**
	   * The Transition component lets you describe a transition from one component
	   * state to another _over time_ with a simple declarative API. Most commonly
	   * it's used to animate the mounting and unmounting of a component, but can also
	   * be used to describe in-place transition states as well.
	   *
	   * ---
	   *
	   * **Note**: `Transition` is a platform-agnostic base component. If you're using
	   * transitions in CSS, you'll probably want to use
	   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
	   * instead. It inherits all the features of `Transition`, but contains
	   * additional features necessary to play nice with CSS transitions (hence the
	   * name of the component).
	   *
	   * ---
	   *
	   * By default the `Transition` component does not alter the behavior of the
	   * component it renders, it only tracks "enter" and "exit" states for the
	   * components. It's up to you to give meaning and effect to those states. For
	   * example we can add styles to a component when it enters or exits:
	   *
	   * ```jsx
	   * import { Transition } from 'react-transition-group';
	   *
	   * const duration = 300;
	   *
	   * const defaultStyle = {
	   *   transition: `opacity ${duration}ms ease-in-out`,
	   *   opacity: 0,
	   * }
	   *
	   * const transitionStyles = {
	   *   entering: { opacity: 0 },
	   *   entered:  { opacity: 1 },
	   * };
	   *
	   * const Fade = ({ in: inProp }) => (
	   *   <Transition in={inProp} timeout={duration}>
	   *     {state => (
	   *       <div style={{
	   *         ...defaultStyle,
	   *         ...transitionStyles[state]
	   *       }}>
	   *         I'm a fade Transition!
	   *       </div>
	   *     )}
	   *   </Transition>
	   * );
	   * ```
	   *
	   * There are 4 main states a Transition can be in:
	   *  - `'entering'`
	   *  - `'entered'`
	   *  - `'exiting'`
	   *  - `'exited'`
	   *
	   * Transition state is toggled via the `in` prop. When `true` the component
	   * begins the "Enter" stage. During this stage, the component will shift from
	   * its current transition state, to `'entering'` for the duration of the
	   * transition and then to the `'entered'` stage once it's complete. Let's take
	   * the following example (we'll use the
	   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
	   *
	   * ```jsx
	   * function App() {
	   *   const [inProp, setInProp] = useState(false);
	   *   return (
	   *     <div>
	   *       <Transition in={inProp} timeout={500}>
	   *         {state => (
	   *           // ...
	   *         )}
	   *       </Transition>
	   *       <button onClick={() => setInProp(true)}>
	   *         Click to Enter
	   *       </button>
	   *     </div>
	   *   );
	   * }
	   * ```
	   *
	   * When the button is clicked the component will shift to the `'entering'` state
	   * and stay there for 500ms (the value of `timeout`) before it finally switches
	   * to `'entered'`.
	   *
	   * When `in` is `false` the same thing happens except the state moves from
	   * `'exiting'` to `'exited'`.
	   */

	  exports.EXITING = EXITING;

	  var Transition =
	  /*#__PURE__*/
	  function (_React$Component) {
	    _inheritsLoose(Transition, _React$Component);

	    function Transition(props, context) {
	      var _this;

	      _this = _React$Component.call(this, props, context) || this;
	      var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

	      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
	      var initialStatus;
	      _this.appearStatus = null;

	      if (props["in"]) {
	        if (appear) {
	          initialStatus = EXITED;
	          _this.appearStatus = ENTERING;
	        } else {
	          initialStatus = ENTERED;
	        }
	      } else {
	        if (props.unmountOnExit || props.mountOnEnter) {
	          initialStatus = UNMOUNTED;
	        } else {
	          initialStatus = EXITED;
	        }
	      }

	      _this.state = {
	        status: initialStatus
	      };
	      _this.nextCallback = null;
	      return _this;
	    }

	    var _proto = Transition.prototype;

	    _proto.getChildContext = function getChildContext() {
	      return {
	        transitionGroup: null // allows for nested Transitions

	      };
	    };

	    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
	      var nextIn = _ref["in"];

	      if (nextIn && prevState.status === UNMOUNTED) {
	        return {
	          status: EXITED
	        };
	      }

	      return null;
	    }; // getSnapshotBeforeUpdate(prevProps) {
	    //   let nextStatus = null
	    //   if (prevProps !== this.props) {
	    //     const { status } = this.state
	    //     if (this.props.in) {
	    //       if (status !== ENTERING && status !== ENTERED) {
	    //         nextStatus = ENTERING
	    //       }
	    //     } else {
	    //       if (status === ENTERING || status === ENTERED) {
	    //         nextStatus = EXITING
	    //       }
	    //     }
	    //   }
	    //   return { nextStatus }
	    // }


	    _proto.componentDidMount = function componentDidMount() {
	      this.updateStatus(true, this.appearStatus);
	    };

	    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	      var nextStatus = null;

	      if (prevProps !== this.props) {
	        var status = this.state.status;

	        if (this.props["in"]) {
	          if (status !== ENTERING && status !== ENTERED) {
	            nextStatus = ENTERING;
	          }
	        } else {
	          if (status === ENTERING || status === ENTERED) {
	            nextStatus = EXITING;
	          }
	        }
	      }

	      this.updateStatus(false, nextStatus);
	    };

	    _proto.componentWillUnmount = function componentWillUnmount() {
	      this.cancelNextCallback();
	    };

	    _proto.getTimeouts = function getTimeouts() {
	      var timeout = this.props.timeout;
	      var exit, enter, appear;
	      exit = enter = appear = timeout;

	      if (timeout != null && typeof timeout !== 'number') {
	        exit = timeout.exit;
	        enter = timeout.enter; // TODO: remove fallback for next major

	        appear = timeout.appear !== undefined ? timeout.appear : enter;
	      }

	      return {
	        exit: exit,
	        enter: enter,
	        appear: appear
	      };
	    };

	    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
	      if (mounting === void 0) {
	        mounting = false;
	      }

	      if (nextStatus !== null) {
	        // nextStatus will always be ENTERING or EXITING.
	        this.cancelNextCallback();

	        var node = _reactDom["default"].findDOMNode(this);

	        if (nextStatus === ENTERING) {
	          this.performEnter(node, mounting);
	        } else {
	          this.performExit(node);
	        }
	      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
	        this.setState({
	          status: UNMOUNTED
	        });
	      }
	    };

	    _proto.performEnter = function performEnter(node, mounting) {
	      var _this2 = this;

	      var enter = this.props.enter;
	      var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
	      var timeouts = this.getTimeouts();
	      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
	      // if we are mounting and running this it means appear _must_ be set

	      if (!mounting && !enter) {
	        this.safeSetState({
	          status: ENTERED
	        }, function () {
	          _this2.props.onEntered(node);
	        });
	        return;
	      }

	      this.props.onEnter(node, appearing);
	      this.safeSetState({
	        status: ENTERING
	      }, function () {
	        _this2.props.onEntering(node, appearing);

	        _this2.onTransitionEnd(node, enterTimeout, function () {
	          _this2.safeSetState({
	            status: ENTERED
	          }, function () {
	            _this2.props.onEntered(node, appearing);
	          });
	        });
	      });
	    };

	    _proto.performExit = function performExit(node) {
	      var _this3 = this;

	      var exit = this.props.exit;
	      var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

	      if (!exit) {
	        this.safeSetState({
	          status: EXITED
	        }, function () {
	          _this3.props.onExited(node);
	        });
	        return;
	      }

	      this.props.onExit(node);
	      this.safeSetState({
	        status: EXITING
	      }, function () {
	        _this3.props.onExiting(node);

	        _this3.onTransitionEnd(node, timeouts.exit, function () {
	          _this3.safeSetState({
	            status: EXITED
	          }, function () {
	            _this3.props.onExited(node);
	          });
	        });
	      });
	    };

	    _proto.cancelNextCallback = function cancelNextCallback() {
	      if (this.nextCallback !== null) {
	        this.nextCallback.cancel();
	        this.nextCallback = null;
	      }
	    };

	    _proto.safeSetState = function safeSetState(nextState, callback) {
	      // This shouldn't be necessary, but there are weird race conditions with
	      // setState callbacks and unmounting in testing, so always make sure that
	      // we can cancel any pending setState callbacks after we unmount.
	      callback = this.setNextCallback(callback);
	      this.setState(nextState, callback);
	    };

	    _proto.setNextCallback = function setNextCallback(callback) {
	      var _this4 = this;

	      var active = true;

	      this.nextCallback = function (event) {
	        if (active) {
	          active = false;
	          _this4.nextCallback = null;
	          callback(event);
	        }
	      };

	      this.nextCallback.cancel = function () {
	        active = false;
	      };

	      return this.nextCallback;
	    };

	    _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
	      this.setNextCallback(handler);
	      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

	      if (!node || doesNotHaveTimeoutOrListener) {
	        setTimeout(this.nextCallback, 0);
	        return;
	      }

	      if (this.props.addEndListener) {
	        this.props.addEndListener(node, this.nextCallback);
	      }

	      if (timeout != null) {
	        setTimeout(this.nextCallback, timeout);
	      }
	    };

	    _proto.render = function render() {
	      var status = this.state.status;

	      if (status === UNMOUNTED) {
	        return null;
	      }

	      var _this$props = this.props,
	          children = _this$props.children,
	          childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


	      delete childProps["in"];
	      delete childProps.mountOnEnter;
	      delete childProps.unmountOnExit;
	      delete childProps.appear;
	      delete childProps.enter;
	      delete childProps.exit;
	      delete childProps.timeout;
	      delete childProps.addEndListener;
	      delete childProps.onEnter;
	      delete childProps.onEntering;
	      delete childProps.onEntered;
	      delete childProps.onExit;
	      delete childProps.onExiting;
	      delete childProps.onExited;

	      if (typeof children === 'function') {
	        return children(status, childProps);
	      }

	      var child = _react["default"].Children.only(children);

	      return _react["default"].cloneElement(child, childProps);
	    };

	    return Transition;
	  }(_react["default"].Component);

	  Transition.contextTypes = {
	    transitionGroup: PropTypes.object
	  };
	  Transition.childContextTypes = {
	    transitionGroup: function transitionGroup() {}
	  };
	  Transition.propTypes =  {};

	  function noop() {}

	  Transition.defaultProps = {
	    "in": false,
	    mountOnEnter: false,
	    unmountOnExit: false,
	    appear: false,
	    enter: true,
	    exit: true,
	    onEnter: noop,
	    onEntering: noop,
	    onEntered: noop,
	    onExit: noop,
	    onExiting: noop,
	    onExited: noop
	  };
	  Transition.UNMOUNTED = 0;
	  Transition.EXITED = 1;
	  Transition.ENTERING = 2;
	  Transition.ENTERED = 3;
	  Transition.EXITING = 4;

	  var _default = (0, reactLifecyclesCompat_es.polyfill)(Transition);

	  exports["default"] = _default;
	});
	unwrapExports(Transition_1);
	var Transition_2 = Transition_1.EXITING;
	var Transition_3 = Transition_1.ENTERED;
	var Transition_4 = Transition_1.ENTERING;
	var Transition_5 = Transition_1.EXITED;
	var Transition_6 = Transition_1.UNMOUNTED;

	var CSSTransition_1 = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;
	  exports["default"] = void 0;

	  var PropTypes = _interopRequireWildcard(propTypes);

	  var _addClass = _interopRequireDefault(addClass_1);

	  var _removeClass = _interopRequireDefault(removeClass);

	  var _react = _interopRequireDefault(React__default);

	  var _Transition = _interopRequireDefault(Transition_1);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  }

	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};

	      if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) {
	            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

	            if (desc.get || desc.set) {
	              Object.defineProperty(newObj, key, desc);
	            } else {
	              newObj[key] = obj[key];
	            }
	          }
	        }
	      }

	      newObj["default"] = obj;
	      return newObj;
	    }
	  }

	  function _extends() {
	    _extends = Object.assign || function (target) {
	      for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }

	      return target;
	    };

	    return _extends.apply(this, arguments);
	  }

	  function _inheritsLoose(subClass, superClass) {
	    subClass.prototype = Object.create(superClass.prototype);
	    subClass.prototype.constructor = subClass;
	    subClass.__proto__ = superClass;
	  }

	  var addClass = function addClass(node, classes) {
	    return node && classes && classes.split(' ').forEach(function (c) {
	      return (0, _addClass["default"])(node, c);
	    });
	  };

	  var removeClass$1 = function removeClass(node, classes) {
	    return node && classes && classes.split(' ').forEach(function (c) {
	      return (0, _removeClass["default"])(node, c);
	    });
	  };
	  /**
	   * A transition component inspired by the excellent
	   * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
	   * using CSS transitions or animations. It's built upon the
	   * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
	   * component, so it inherits all of its props.
	   *
	   * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
	   * and `exit` states of the transition. The first class is applied and then a
	   * second `*-active` class in order to activate the CSSS transition. After the
	   * transition, matching `*-done` class names are applied to persist the
	   * transition state.
	   *
	   * ```jsx
	   * function App() {
	   *   const [inProp, setInProp] = useState(false);
	   *   return (
	   *     <div>
	   *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
	   *         <div>
	   *           {"I'll receive my-node-* classes"}
	   *         </div>
	   *       </CSSTransition>
	   *       <button type="button" onClick={() => setInProp(true)}>
	   *         Click to Enter
	   *       </button>
	   *     </div>
	   *   );
	   * }
	   * ```
	   *
	   * When the `in` prop is set to `true`, the child component will first receive
	   * the class `example-enter`, then the `example-enter-active` will be added in
	   * the next tick. `CSSTransition` [forces a
	   * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
	   * between before adding the `example-enter-active`. This is an important trick
	   * because it allows us to transition between `example-enter` and
	   * `example-enter-active` even though they were added immediately one after
	   * another. Most notably, this is what makes it possible for us to animate
	   * _appearance_.
	   *
	   * ```css
	   * .my-node-enter {
	   *   opacity: 0;
	   * }
	   * .my-node-enter-active {
	   *   opacity: 1;
	   *   transition: opacity 200ms;
	   * }
	   * .my-node-exit {
	   *   opacity: 1;
	   * }
	   * .my-node-exit-active {
	   *   opacity: 0;
	   *   transition: opacity: 200ms;
	   * }
	   * ```
	   *
	   * `*-active` classes represent which styles you want to animate **to**.
	   */


	  var CSSTransition =
	  /*#__PURE__*/
	  function (_React$Component) {
	    _inheritsLoose(CSSTransition, _React$Component);

	    function CSSTransition() {
	      var _this;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

	      _this.onEnter = function (node, appearing) {
	        var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
	            className = _this$getClassNames.className;

	        _this.removeClasses(node, 'exit');

	        addClass(node, className);

	        if (_this.props.onEnter) {
	          _this.props.onEnter(node, appearing);
	        }
	      };

	      _this.onEntering = function (node, appearing) {
	        var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
	            activeClassName = _this$getClassNames2.activeClassName;

	        _this.reflowAndAddClass(node, activeClassName);

	        if (_this.props.onEntering) {
	          _this.props.onEntering(node, appearing);
	        }
	      };

	      _this.onEntered = function (node, appearing) {
	        var appearClassName = _this.getClassNames('appear').doneClassName;

	        var enterClassName = _this.getClassNames('enter').doneClassName;

	        var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

	        _this.removeClasses(node, appearing ? 'appear' : 'enter');

	        addClass(node, doneClassName);

	        if (_this.props.onEntered) {
	          _this.props.onEntered(node, appearing);
	        }
	      };

	      _this.onExit = function (node) {
	        var _this$getClassNames3 = _this.getClassNames('exit'),
	            className = _this$getClassNames3.className;

	        _this.removeClasses(node, 'appear');

	        _this.removeClasses(node, 'enter');

	        addClass(node, className);

	        if (_this.props.onExit) {
	          _this.props.onExit(node);
	        }
	      };

	      _this.onExiting = function (node) {
	        var _this$getClassNames4 = _this.getClassNames('exit'),
	            activeClassName = _this$getClassNames4.activeClassName;

	        _this.reflowAndAddClass(node, activeClassName);

	        if (_this.props.onExiting) {
	          _this.props.onExiting(node);
	        }
	      };

	      _this.onExited = function (node) {
	        var _this$getClassNames5 = _this.getClassNames('exit'),
	            doneClassName = _this$getClassNames5.doneClassName;

	        _this.removeClasses(node, 'exit');

	        addClass(node, doneClassName);

	        if (_this.props.onExited) {
	          _this.props.onExited(node);
	        }
	      };

	      _this.getClassNames = function (type) {
	        var classNames = _this.props.classNames;
	        var isStringClassNames = typeof classNames === 'string';
	        var prefix = isStringClassNames && classNames ? classNames + '-' : '';
	        var className = isStringClassNames ? prefix + type : classNames[type];
	        var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
	        var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
	        return {
	          className: className,
	          activeClassName: activeClassName,
	          doneClassName: doneClassName
	        };
	      };

	      return _this;
	    }

	    var _proto = CSSTransition.prototype;

	    _proto.removeClasses = function removeClasses(node, type) {
	      var _this$getClassNames6 = this.getClassNames(type),
	          className = _this$getClassNames6.className,
	          activeClassName = _this$getClassNames6.activeClassName,
	          doneClassName = _this$getClassNames6.doneClassName;

	      className && removeClass$1(node, className);
	      activeClassName && removeClass$1(node, activeClassName);
	      doneClassName && removeClass$1(node, doneClassName);
	    };

	    _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
	      // This is for to force a repaint,
	      // which is necessary in order to transition styles when adding a class name.
	      if (className) {
	        /* eslint-disable no-unused-expressions */
	        node && node.scrollTop;
	        /* eslint-enable no-unused-expressions */

	        addClass(node, className);
	      }
	    };

	    _proto.render = function render() {
	      var props = _extends({}, this.props);

	      delete props.classNames;
	      return _react["default"].createElement(_Transition["default"], _extends({}, props, {
	        onEnter: this.onEnter,
	        onEntered: this.onEntered,
	        onEntering: this.onEntering,
	        onExit: this.onExit,
	        onExiting: this.onExiting,
	        onExited: this.onExited
	      }));
	    };

	    return CSSTransition;
	  }(_react["default"].Component);

	  CSSTransition.defaultProps = {
	    classNames: ''
	  };
	  CSSTransition.propTypes =  {};
	  var _default = CSSTransition;
	  exports["default"] = _default;
	  module.exports = exports["default"];
	});
	unwrapExports(CSSTransition_1);

	var ChildMapping = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;
	  exports.getChildMapping = getChildMapping;
	  exports.mergeChildMappings = mergeChildMappings;
	  exports.getInitialChildMapping = getInitialChildMapping;
	  exports.getNextChildMapping = getNextChildMapping;
	  /**
	   * Given `this.props.children`, return an object mapping key to child.
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */

	  function getChildMapping(children, mapFn) {
	    var mapper = function mapper(child) {
	      return mapFn && (0, React__default.isValidElement)(child) ? mapFn(child) : child;
	    };

	    var result = Object.create(null);
	    if (children) React__default.Children.map(children, function (c) {
	      return c;
	    }).forEach(function (child) {
	      // run the map function here instead so that the key is the computed one
	      result[child.key] = mapper(child);
	    });
	    return result;
	  }
	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */


	  function mergeChildMappings(prev, next) {
	    prev = prev || {};
	    next = next || {};

	    function getValueForKey(key) {
	      return key in next ? next[key] : prev[key];
	    } // For each key of `next`, the list of keys to insert before that key in
	    // the combined list


	    var nextKeysPending = Object.create(null);
	    var pendingKeys = [];

	    for (var prevKey in prev) {
	      if (prevKey in next) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }

	    var i;
	    var childMapping = {};

	    for (var nextKey in next) {
	      if (nextKeysPending[nextKey]) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }

	      childMapping[nextKey] = getValueForKey(nextKey);
	    } // Finally, add the keys which didn't appear before any key in `next`


	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }

	    return childMapping;
	  }

	  function getProp(child, prop, props) {
	    return props[prop] != null ? props[prop] : child.props[prop];
	  }

	  function getInitialChildMapping(props, onExited) {
	    return getChildMapping(props.children, function (child) {
	      return (0, React__default.cloneElement)(child, {
	        onExited: onExited.bind(null, child),
	        "in": true,
	        appear: getProp(child, 'appear', props),
	        enter: getProp(child, 'enter', props),
	        exit: getProp(child, 'exit', props)
	      });
	    });
	  }

	  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
	    var nextChildMapping = getChildMapping(nextProps.children);
	    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
	    Object.keys(children).forEach(function (key) {
	      var child = children[key];
	      if (!(0, React__default.isValidElement)(child)) return;
	      var hasPrev = key in prevChildMapping;
	      var hasNext = key in nextChildMapping;
	      var prevChild = prevChildMapping[key];
	      var isLeaving = (0, React__default.isValidElement)(prevChild) && !prevChild.props["in"]; // item is new (entering)

	      if (hasNext && (!hasPrev || isLeaving)) {
	        // console.log('entering', key)
	        children[key] = (0, React__default.cloneElement)(child, {
	          onExited: onExited.bind(null, child),
	          "in": true,
	          exit: getProp(child, 'exit', nextProps),
	          enter: getProp(child, 'enter', nextProps)
	        });
	      } else if (!hasNext && hasPrev && !isLeaving) {
	        // item is old (exiting)
	        // console.log('leaving', key)
	        children[key] = (0, React__default.cloneElement)(child, {
	          "in": false
	        });
	      } else if (hasNext && hasPrev && (0, React__default.isValidElement)(prevChild)) {
	        // item hasn't changed transition states
	        // copy over the last transition props;
	        // console.log('unchanged', key)
	        children[key] = (0, React__default.cloneElement)(child, {
	          onExited: onExited.bind(null, child),
	          "in": prevChild.props["in"],
	          exit: getProp(child, 'exit', nextProps),
	          enter: getProp(child, 'enter', nextProps)
	        });
	      }
	    });
	    return children;
	  }
	});
	unwrapExports(ChildMapping);
	var ChildMapping_1 = ChildMapping.getChildMapping;
	var ChildMapping_2 = ChildMapping.mergeChildMappings;
	var ChildMapping_3 = ChildMapping.getInitialChildMapping;
	var ChildMapping_4 = ChildMapping.getNextChildMapping;

	var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;
	  exports["default"] = void 0;

	  var _propTypes = _interopRequireDefault(propTypes);

	  var _react = _interopRequireDefault(React__default);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  }

	  function _objectWithoutPropertiesLoose(source, excluded) {
	    if (source == null) return {};
	    var target = {};
	    var sourceKeys = Object.keys(source);
	    var key, i;

	    for (i = 0; i < sourceKeys.length; i++) {
	      key = sourceKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      target[key] = source[key];
	    }

	    return target;
	  }

	  function _extends() {
	    _extends = Object.assign || function (target) {
	      for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }

	      return target;
	    };

	    return _extends.apply(this, arguments);
	  }

	  function _inheritsLoose(subClass, superClass) {
	    subClass.prototype = Object.create(superClass.prototype);
	    subClass.prototype.constructor = subClass;
	    subClass.__proto__ = superClass;
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  var values = Object.values || function (obj) {
	    return Object.keys(obj).map(function (k) {
	      return obj[k];
	    });
	  };

	  var defaultProps = {
	    component: 'div',
	    childFactory: function childFactory(child) {
	      return child;
	    }
	    /**
	     * The `<TransitionGroup>` component manages a set of transition components
	     * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
	     * components, `<TransitionGroup>` is a state machine for managing the mounting
	     * and unmounting of components over time.
	     *
	     * Consider the example below. As items are removed or added to the TodoList the
	     * `in` prop is toggled automatically by the `<TransitionGroup>`.
	     *
	     * Note that `<TransitionGroup>`  does not define any animation behavior!
	     * Exactly _how_ a list item animates is up to the individual transition
	     * component. This means you can mix and match animations across different list
	     * items.
	     */

	  };

	  var TransitionGroup =
	  /*#__PURE__*/
	  function (_React$Component) {
	    _inheritsLoose(TransitionGroup, _React$Component);

	    function TransitionGroup(props, context) {
	      var _this;

	      _this = _React$Component.call(this, props, context) || this;

	      var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


	      _this.state = {
	        handleExited: handleExited,
	        firstRender: true
	      };
	      return _this;
	    }

	    var _proto = TransitionGroup.prototype;

	    _proto.getChildContext = function getChildContext() {
	      return {
	        transitionGroup: {
	          isMounting: !this.appeared
	        }
	      };
	    };

	    _proto.componentDidMount = function componentDidMount() {
	      this.appeared = true;
	      this.mounted = true;
	    };

	    _proto.componentWillUnmount = function componentWillUnmount() {
	      this.mounted = false;
	    };

	    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
	      var prevChildMapping = _ref.children,
	          handleExited = _ref.handleExited,
	          firstRender = _ref.firstRender;
	      return {
	        children: firstRender ? (0, ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
	        firstRender: false
	      };
	    };

	    _proto.handleExited = function handleExited(child, node) {
	      var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);
	      if (child.key in currentChildMapping) return;

	      if (child.props.onExited) {
	        child.props.onExited(node);
	      }

	      if (this.mounted) {
	        this.setState(function (state) {
	          var children = _extends({}, state.children);

	          delete children[child.key];
	          return {
	            children: children
	          };
	        });
	      }
	    };

	    _proto.render = function render() {
	      var _this$props = this.props,
	          Component = _this$props.component,
	          childFactory = _this$props.childFactory,
	          props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

	      var children = values(this.state.children).map(childFactory);
	      delete props.appear;
	      delete props.enter;
	      delete props.exit;

	      if (Component === null) {
	        return children;
	      }

	      return _react["default"].createElement(Component, props, children);
	    };

	    return TransitionGroup;
	  }(_react["default"].Component);

	  TransitionGroup.childContextTypes = {
	    transitionGroup: _propTypes["default"].object.isRequired
	  };
	  TransitionGroup.propTypes =  {};
	  TransitionGroup.defaultProps = defaultProps;

	  var _default = (0, reactLifecyclesCompat_es.polyfill)(TransitionGroup);

	  exports["default"] = _default;
	  module.exports = exports["default"];
	});
	unwrapExports(TransitionGroup_1);

	var ReplaceTransition_1 = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;
	  exports["default"] = void 0;

	  var _propTypes = _interopRequireDefault(propTypes);

	  var _react = _interopRequireDefault(React__default);

	  var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  }

	  function _objectWithoutPropertiesLoose(source, excluded) {
	    if (source == null) return {};
	    var target = {};
	    var sourceKeys = Object.keys(source);
	    var key, i;

	    for (i = 0; i < sourceKeys.length; i++) {
	      key = sourceKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      target[key] = source[key];
	    }

	    return target;
	  }

	  function _inheritsLoose(subClass, superClass) {
	    subClass.prototype = Object.create(superClass.prototype);
	    subClass.prototype.constructor = subClass;
	    subClass.__proto__ = superClass;
	  }
	  /**
	   * The `<ReplaceTransition>` component is a specialized `Transition` component
	   * that animates between two children.
	   *
	   * ```jsx
	   * <ReplaceTransition in>
	   *   <Fade><div>I appear first</div></Fade>
	   *   <Fade><div>I replace the above</div></Fade>
	   * </ReplaceTransition>
	   * ```
	   */


	  var ReplaceTransition =
	  /*#__PURE__*/
	  function (_React$Component) {
	    _inheritsLoose(ReplaceTransition, _React$Component);

	    function ReplaceTransition() {
	      var _this;

	      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
	        _args[_key] = arguments[_key];
	      }

	      _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

	      _this.handleEnter = function () {
	        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          args[_key2] = arguments[_key2];
	        }

	        return _this.handleLifecycle('onEnter', 0, args);
	      };

	      _this.handleEntering = function () {
	        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	          args[_key3] = arguments[_key3];
	        }

	        return _this.handleLifecycle('onEntering', 0, args);
	      };

	      _this.handleEntered = function () {
	        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	          args[_key4] = arguments[_key4];
	        }

	        return _this.handleLifecycle('onEntered', 0, args);
	      };

	      _this.handleExit = function () {
	        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	          args[_key5] = arguments[_key5];
	        }

	        return _this.handleLifecycle('onExit', 1, args);
	      };

	      _this.handleExiting = function () {
	        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	          args[_key6] = arguments[_key6];
	        }

	        return _this.handleLifecycle('onExiting', 1, args);
	      };

	      _this.handleExited = function () {
	        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	          args[_key7] = arguments[_key7];
	        }

	        return _this.handleLifecycle('onExited', 1, args);
	      };

	      return _this;
	    }

	    var _proto = ReplaceTransition.prototype;

	    _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
	      var _child$props;

	      var children = this.props.children;

	      var child = _react["default"].Children.toArray(children)[idx];

	      if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
	      if (this.props[handler]) this.props[handler]((0, ReactDOM.findDOMNode)(this));
	    };

	    _proto.render = function render() {
	      var _this$props = this.props,
	          children = _this$props.children,
	          inProp = _this$props["in"],
	          props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

	      var _React$Children$toArr = _react["default"].Children.toArray(children),
	          first = _React$Children$toArr[0],
	          second = _React$Children$toArr[1];

	      delete props.onEnter;
	      delete props.onEntering;
	      delete props.onEntered;
	      delete props.onExit;
	      delete props.onExiting;
	      delete props.onExited;
	      return _react["default"].createElement(_TransitionGroup["default"], props, inProp ? _react["default"].cloneElement(first, {
	        key: 'first',
	        onEnter: this.handleEnter,
	        onEntering: this.handleEntering,
	        onEntered: this.handleEntered
	      }) : _react["default"].cloneElement(second, {
	        key: 'second',
	        onEnter: this.handleExit,
	        onEntering: this.handleExiting,
	        onEntered: this.handleExited
	      }));
	    };

	    return ReplaceTransition;
	  }(_react["default"].Component);

	  ReplaceTransition.propTypes =  {};
	  var _default = ReplaceTransition;
	  exports["default"] = _default;
	  module.exports = exports["default"];
	});
	unwrapExports(ReplaceTransition_1);

	var reactTransitionGroup = createCommonjsModule(function (module) {

	  var _CSSTransition = _interopRequireDefault(CSSTransition_1);

	  var _ReplaceTransition = _interopRequireDefault(ReplaceTransition_1);

	  var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

	  var _Transition = _interopRequireDefault(Transition_1);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  }

	  module.exports = {
	    Transition: _Transition["default"],
	    TransitionGroup: _TransitionGroup["default"],
	    ReplaceTransition: _ReplaceTransition["default"],
	    CSSTransition: _CSSTransition["default"]
	  };
	});
	unwrapExports(reactTransitionGroup);
	var reactTransitionGroup_1 = reactTransitionGroup.Transition;
	var reactTransitionGroup_2 = reactTransitionGroup.TransitionGroup;
	var reactTransitionGroup_3 = reactTransitionGroup.ReplaceTransition;
	var reactTransitionGroup_4 = reactTransitionGroup.CSSTransition;

	var propTypes$k = _objectSpread({}, reactTransitionGroup_1.propTypes, {
	  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
	  tag: tagPropType,
	  baseClass: propTypes.string,
	  baseClassActive: propTypes.string,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
	});

	var defaultProps$i = _objectSpread({}, reactTransitionGroup_1.defaultProps, {
	  tag: 'div',
	  baseClass: 'fade',
	  baseClassActive: 'show',
	  timeout: TransitionTimeouts.Fade,
	  appear: true,
	  enter: true,
	  exit: true,
	  "in": true
	});

	function Fade(props) {
	  var Tag = props.tag,
	      baseClass = props.baseClass,
	      baseClassActive = props.baseClassActive,
	      className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      innerRef = props.innerRef,
	      otherProps = _objectWithoutPropertiesLoose(props, ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"]);

	  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
	  var childProps = omit(otherProps, TransitionPropTypeKeys);
	  return React__default.createElement(reactTransitionGroup_1, transitionProps, function (status) {
	    var isActive = status === 'entered';
	    var classes = mapToCssModules(classnames(className, baseClass, isActive && baseClassActive), cssModule);
	    return React__default.createElement(Tag, _extends({
	      className: classes
	    }, childProps, {
	      ref: innerRef
	    }), children);
	  });
	}

	Fade.propTypes = propTypes$k;
	Fade.defaultProps = defaultProps$i;

	var propTypes$l = {
	  color: propTypes.string,
	  pill: propTypes.bool,
	  tag: tagPropType,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$j = {
	  color: 'secondary',
	  pill: false,
	  tag: 'span'
	};

	var Badge = function Badge(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      color = props.color,
	      innerRef = props.innerRef,
	      pill = props.pill,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "color", "innerRef", "pill", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);

	  if (attributes.href && Tag === 'span') {
	    Tag = 'a';
	  }

	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    ref: innerRef
	  }));
	};

	Badge.propTypes = propTypes$l;
	Badge.defaultProps = defaultProps$j;

	var propTypes$m = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$k = {
	  tag: 'div'
	};

	var CardGroup = function CardGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-group'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardGroup.propTypes = propTypes$m;
	CardGroup.defaultProps = defaultProps$k;

	var propTypes$n = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$l = {
	  tag: 'div'
	};

	var CardDeck = function CardDeck(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-deck'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardDeck.propTypes = propTypes$n;
	CardDeck.defaultProps = defaultProps$l;

	var propTypes$o = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$m = {
	  tag: 'div'
	};

	var CardColumns = function CardColumns(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-columns'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardColumns.propTypes = propTypes$o;
	CardColumns.defaultProps = defaultProps$m;

	var propTypes$p = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
	};
	var defaultProps$n = {
	  tag: 'div'
	};

	var CardBody = function CardBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      innerRef = props.innerRef,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "innerRef", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-body'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    ref: innerRef
	  }));
	};

	CardBody.propTypes = propTypes$p;
	CardBody.defaultProps = defaultProps$n;

	var propTypes$q = {
	  tag: tagPropType,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$o = {
	  tag: 'a'
	};

	var CardLink = function CardLink(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      innerRef = props.innerRef,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "innerRef"]);

	  var classes = mapToCssModules(classnames(className, 'card-link'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    ref: innerRef,
	    className: classes
	  }));
	};

	CardLink.propTypes = propTypes$q;
	CardLink.defaultProps = defaultProps$o;

	var propTypes$r = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$p = {
	  tag: 'div'
	};

	var CardFooter = function CardFooter(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-footer'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardFooter.propTypes = propTypes$r;
	CardFooter.defaultProps = defaultProps$p;

	var propTypes$s = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$q = {
	  tag: 'div'
	};

	var CardHeader = function CardHeader(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-header'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardHeader.propTypes = propTypes$s;
	CardHeader.defaultProps = defaultProps$q;

	var propTypes$t = {
	  tag: tagPropType,
	  top: propTypes.bool,
	  bottom: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$r = {
	  tag: 'img'
	};

	var CardImg = function CardImg(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      top = props.top,
	      bottom = props.bottom,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "top", "bottom", "tag"]);

	  var cardImgClassName = 'card-img';

	  if (top) {
	    cardImgClassName = 'card-img-top';
	  }

	  if (bottom) {
	    cardImgClassName = 'card-img-bottom';
	  }

	  var classes = mapToCssModules(classnames(className, cardImgClassName), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardImg.propTypes = propTypes$t;
	CardImg.defaultProps = defaultProps$r;

	var propTypes$u = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$s = {
	  tag: 'div'
	};

	var CardImgOverlay = function CardImgOverlay(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-img-overlay'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardImgOverlay.propTypes = propTypes$u;
	CardImgOverlay.defaultProps = defaultProps$s;

	var CarouselItem =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(CarouselItem, _React$Component);

	  function CarouselItem(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.state = {
	      startAnimation: false
	    };
	    _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
	    _this.onEntering = _this.onEntering.bind(_assertThisInitialized(_this));
	    _this.onExit = _this.onExit.bind(_assertThisInitialized(_this));
	    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
	    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = CarouselItem.prototype;

	  _proto.onEnter = function onEnter(node, isAppearing) {
	    this.setState({
	      startAnimation: false
	    });
	    this.props.onEnter(node, isAppearing);
	  };

	  _proto.onEntering = function onEntering(node, isAppearing) {
	    // getting this variable triggers a reflow
	    var offsetHeight = node.offsetHeight;
	    this.setState({
	      startAnimation: true
	    });
	    this.props.onEntering(node, isAppearing);
	    return offsetHeight;
	  };

	  _proto.onExit = function onExit(node) {
	    this.setState({
	      startAnimation: false
	    });
	    this.props.onExit(node);
	  };

	  _proto.onExiting = function onExiting(node) {
	    this.setState({
	      startAnimation: true
	    });
	    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
	    this.props.onExiting(node);
	  };

	  _proto.onExited = function onExited(node) {
	    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
	    this.props.onExited(node);
	  };

	  _proto.render = function render() {
	    var _this2 = this;

	    var _this$props = this.props,
	        isIn = _this$props["in"],
	        children = _this$props.children,
	        cssModule = _this$props.cssModule,
	        slide = _this$props.slide,
	        Tag = _this$props.tag,
	        className = _this$props.className,
	        transitionProps = _objectWithoutPropertiesLoose(_this$props, ["in", "children", "cssModule", "slide", "tag", "className"]);

	    return React__default.createElement(reactTransitionGroup_1, _extends({}, transitionProps, {
	      enter: slide,
	      exit: slide,
	      "in": isIn,
	      onEnter: this.onEnter,
	      onEntering: this.onEntering,
	      onExit: this.onExit,
	      onExiting: this.onExiting,
	      onExited: this.onExited
	    }), function (status) {
	      var direction = _this2.context.direction;
	      var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
	      var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
	      var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
	      var itemClasses = mapToCssModules(classnames(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
	      return React__default.createElement(Tag, {
	        className: itemClasses
	      }, children);
	    });
	  };

	  return CarouselItem;
	}(React__default.Component);

	CarouselItem.propTypes = _objectSpread({}, reactTransitionGroup_1.propTypes, {
	  tag: tagPropType,
	  "in": propTypes.bool,
	  cssModule: propTypes.object,
	  children: propTypes.node,
	  slide: propTypes.bool,
	  className: propTypes.string
	});
	CarouselItem.defaultProps = _objectSpread({}, reactTransitionGroup_1.defaultProps, {
	  tag: 'div',
	  timeout: TransitionTimeouts.Carousel,
	  slide: true
	});
	CarouselItem.contextTypes = {
	  direction: propTypes.string
	};

	var Carousel =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Carousel, _React$Component);

	  function Carousel(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
	    _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
	    _this.hoverStart = _this.hoverStart.bind(_assertThisInitialized(_this));
	    _this.hoverEnd = _this.hoverEnd.bind(_assertThisInitialized(_this));
	    _this.state = {
	      direction: 'right',
	      indicatorClicked: false
	    };
	    return _this;
	  }

	  var _proto = Carousel.prototype;

	  _proto.getChildContext = function getChildContext() {
	    return {
	      direction: this.state.direction
	    };
	  };

	  _proto.componentDidMount = function componentDidMount() {
	    // Set up the cycle
	    if (this.props.ride === 'carousel') {
	      this.setInterval();
	    } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


	    document.addEventListener('keyup', this.handleKeyPress);
	  };

	  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    this.setInterval(nextProps); // Calculate the direction to turn

	    if (this.props.activeIndex + 1 === nextProps.activeIndex) {
	      this.setState({
	        direction: 'right'
	      });
	    } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
	      this.setState({
	        direction: 'left'
	      });
	    } else if (this.props.activeIndex > nextProps.activeIndex) {
	      this.setState({
	        direction: this.state.indicatorClicked ? 'left' : 'right'
	      });
	    } else if (this.props.activeIndex !== nextProps.activeIndex) {
	      this.setState({
	        direction: this.state.indicatorClicked ? 'right' : 'left'
	      });
	    }

	    this.setState({
	      indicatorClicked: false
	    });
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.clearInterval();
	    document.removeEventListener('keyup', this.handleKeyPress);
	  };

	  _proto.setInterval = function (_setInterval) {
	    function setInterval() {
	      return _setInterval.apply(this, arguments);
	    }

	    setInterval.toString = function () {
	      return _setInterval.toString();
	    };

	    return setInterval;
	  }(function (props) {
	    if (props === void 0) {
	      props = this.props;
	    } // make sure not to have multiple intervals going...


	    this.clearInterval();

	    if (props.interval) {
	      this.cycleInterval = setInterval(function () {
	        props.next();
	      }, parseInt(props.interval, 10));
	    }
	  });

	  _proto.clearInterval = function (_clearInterval) {
	    function clearInterval() {
	      return _clearInterval.apply(this, arguments);
	    }

	    clearInterval.toString = function () {
	      return _clearInterval.toString();
	    };

	    return clearInterval;
	  }(function () {
	    clearInterval(this.cycleInterval);
	  });

	  _proto.hoverStart = function hoverStart() {
	    if (this.props.pause === 'hover') {
	      this.clearInterval();
	    }

	    if (this.props.mouseEnter) {
	      var _this$props;

	      (_this$props = this.props).mouseEnter.apply(_this$props, arguments);
	    }
	  };

	  _proto.hoverEnd = function hoverEnd() {
	    if (this.props.pause === 'hover') {
	      this.setInterval();
	    }

	    if (this.props.mouseLeave) {
	      var _this$props2;

	      (_this$props2 = this.props).mouseLeave.apply(_this$props2, arguments);
	    }
	  };

	  _proto.handleKeyPress = function handleKeyPress(evt) {
	    if (this.props.keyboard) {
	      if (evt.keyCode === 37) {
	        this.props.previous();
	      } else if (evt.keyCode === 39) {
	        this.props.next();
	      }
	    }
	  };

	  _proto.renderItems = function renderItems(carouselItems, className) {
	    var _this2 = this;

	    var slide = this.props.slide;
	    return React__default.createElement("div", {
	      className: className
	    }, carouselItems.map(function (item, index) {
	      var isIn = index === _this2.props.activeIndex;
	      return React__default.cloneElement(item, {
	        "in": isIn,
	        slide: slide
	      });
	    }));
	  };

	  _proto.render = function render() {
	    var _this3 = this;

	    var _this$props3 = this.props,
	        cssModule = _this$props3.cssModule,
	        slide = _this$props3.slide,
	        className = _this$props3.className;
	    var outerClasses = mapToCssModules(classnames(className, 'carousel', slide && 'slide'), cssModule);
	    var innerClasses = mapToCssModules(classnames('carousel-inner'), cssModule); // filter out booleans, null, or undefined

	    var children = this.props.children.filter(function (child) {
	      return child !== null && child !== undefined && typeof child !== 'boolean';
	    });
	    var slidesOnly = children.every(function (child) {
	      return child.type === CarouselItem;
	    }); // Rendering only slides

	    if (slidesOnly) {
	      return React__default.createElement("div", {
	        className: outerClasses,
	        onMouseEnter: this.hoverStart,
	        onMouseLeave: this.hoverEnd
	      }, this.renderItems(children, innerClasses));
	    } // Rendering slides and controls


	    if (children[0] instanceof Array) {
	      var _carouselItems = children[0];
	      var _controlLeft = children[1];
	      var _controlRight = children[2];
	      return React__default.createElement("div", {
	        className: outerClasses,
	        onMouseEnter: this.hoverStart,
	        onMouseLeave: this.hoverEnd
	      }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight);
	    } // Rendering indicators, slides and controls


	    var indicators = children[0];

	    var wrappedOnClick = function wrappedOnClick(e) {
	      if (typeof indicators.props.onClickHandler === 'function') {
	        _this3.setState({
	          indicatorClicked: true
	        }, function () {
	          return indicators.props.onClickHandler(e);
	        });
	      }
	    };

	    var wrappedIndicators = React__default.cloneElement(indicators, {
	      onClickHandler: wrappedOnClick
	    });
	    var carouselItems = children[1];
	    var controlLeft = children[2];
	    var controlRight = children[3];
	    return React__default.createElement("div", {
	      className: outerClasses,
	      onMouseEnter: this.hoverStart,
	      onMouseLeave: this.hoverEnd
	    }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight);
	  };

	  return Carousel;
	}(React__default.Component);

	Carousel.propTypes = {
	  // the current active slide of the carousel
	  activeIndex: propTypes.number,
	  // a function which should advance the carousel to the next slide (via activeIndex)
	  next: propTypes.func.isRequired,
	  // a function which should advance the carousel to the previous slide (via activeIndex)
	  previous: propTypes.func.isRequired,
	  // controls if the left and right arrow keys should control the carousel
	  keyboard: propTypes.bool,

	  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
	   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
	   */
	  pause: propTypes.oneOf(['hover', false]),
	  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
	  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
	  ride: propTypes.oneOf(['carousel']),
	  // the interval at which the carousel automatically cycles (default: 5000)
	  // eslint-disable-next-line react/no-unused-prop-types
	  interval: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.bool]),
	  children: propTypes.array,
	  // called when the mouse enters the Carousel
	  mouseEnter: propTypes.func,
	  // called when the mouse exits the Carousel
	  mouseLeave: propTypes.func,
	  // controls whether the slide animation on the Carousel works or not
	  slide: propTypes.bool,
	  cssModule: propTypes.object,
	  className: propTypes.string
	};
	Carousel.defaultProps = {
	  interval: 5000,
	  pause: 'hover',
	  keyboard: true,
	  slide: true
	};
	Carousel.childContextTypes = {
	  direction: propTypes.string
	};

	var CarouselControl = function CarouselControl(props) {
	  var direction = props.direction,
	      onClickHandler = props.onClickHandler,
	      cssModule = props.cssModule,
	      directionText = props.directionText,
	      className = props.className;
	  var anchorClasses = mapToCssModules(classnames(className, "carousel-control-" + direction), cssModule);
	  var iconClasses = mapToCssModules(classnames("carousel-control-" + direction + "-icon"), cssModule);
	  var screenReaderClasses = mapToCssModules(classnames('sr-only'), cssModule);
	  return React__default.createElement("a", {
	    className: anchorClasses,
	    role: "button",
	    tabIndex: "0",
	    onClick: function onClick(e) {
	      e.preventDefault();
	      onClickHandler();
	    }
	  }, React__default.createElement("span", {
	    className: iconClasses,
	    "aria-hidden": "true"
	  }), React__default.createElement("span", {
	    className: screenReaderClasses
	  }, directionText || direction));
	};

	CarouselControl.propTypes = {
	  direction: propTypes.oneOf(['prev', 'next']).isRequired,
	  onClickHandler: propTypes.func.isRequired,
	  cssModule: propTypes.object,
	  directionText: propTypes.string,
	  className: propTypes.string
	};

	var CarouselIndicators = function CarouselIndicators(props) {
	  var items = props.items,
	      activeIndex = props.activeIndex,
	      cssModule = props.cssModule,
	      onClickHandler = props.onClickHandler,
	      className = props.className;
	  var listClasses = mapToCssModules(classnames(className, 'carousel-indicators'), cssModule);
	  var indicators = items.map(function (item, idx) {
	    var indicatorClasses = mapToCssModules(classnames({
	      active: activeIndex === idx
	    }), cssModule);
	    return React__default.createElement("li", {
	      key: "" + (item.key || Object.values(item).join('')),
	      onClick: function onClick(e) {
	        e.preventDefault();
	        onClickHandler(idx);
	      },
	      className: indicatorClasses
	    });
	  });
	  return React__default.createElement("ol", {
	    className: listClasses
	  }, indicators);
	};

	CarouselIndicators.propTypes = {
	  items: propTypes.array.isRequired,
	  activeIndex: propTypes.number.isRequired,
	  cssModule: propTypes.object,
	  onClickHandler: propTypes.func.isRequired,
	  className: propTypes.string
	};

	var CarouselCaption = function CarouselCaption(props) {
	  var captionHeader = props.captionHeader,
	      captionText = props.captionText,
	      cssModule = props.cssModule,
	      className = props.className;
	  var classes = mapToCssModules(classnames(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
	  return React__default.createElement("div", {
	    className: classes
	  }, React__default.createElement("h3", null, captionHeader), React__default.createElement("p", null, captionText));
	};

	CarouselCaption.propTypes = {
	  captionHeader: propTypes.string,
	  captionText: propTypes.string.isRequired,
	  cssModule: propTypes.object,
	  className: propTypes.string
	};

	var propTypes$v = {
	  items: propTypes.array.isRequired,
	  indicators: propTypes.bool,
	  controls: propTypes.bool,
	  autoPlay: propTypes.bool,
	  defaultActiveIndex: propTypes.number,
	  activeIndex: propTypes.number,
	  next: propTypes.func,
	  previous: propTypes.func,
	  goToIndex: propTypes.func
	};

	var UncontrolledCarousel =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(UncontrolledCarousel, _Component);

	  function UncontrolledCarousel(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.animating = false;
	    _this.state = {
	      activeIndex: props.defaultActiveIndex || 0
	    };
	    _this.next = _this.next.bind(_assertThisInitialized(_this));
	    _this.previous = _this.previous.bind(_assertThisInitialized(_this));
	    _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_this));
	    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
	    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = UncontrolledCarousel.prototype;

	  _proto.onExiting = function onExiting() {
	    this.animating = true;
	  };

	  _proto.onExited = function onExited() {
	    this.animating = false;
	  };

	  _proto.next = function next() {
	    if (this.animating) return;
	    var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
	    this.setState({
	      activeIndex: nextIndex
	    });
	  };

	  _proto.previous = function previous() {
	    if (this.animating) return;
	    var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
	    this.setState({
	      activeIndex: nextIndex
	    });
	  };

	  _proto.goToIndex = function goToIndex(newIndex) {
	    if (this.animating) return;
	    this.setState({
	      activeIndex: newIndex
	    });
	  };

	  _proto.render = function render() {
	    var _this2 = this;

	    var _this$props = this.props,
	        defaultActiveIndex = _this$props.defaultActiveIndex,
	        autoPlay = _this$props.autoPlay,
	        indicators = _this$props.indicators,
	        controls = _this$props.controls,
	        items = _this$props.items,
	        goToIndex = _this$props.goToIndex,
	        props = _objectWithoutPropertiesLoose(_this$props, ["defaultActiveIndex", "autoPlay", "indicators", "controls", "items", "goToIndex"]);

	    var activeIndex = this.state.activeIndex;
	    var slides = items.map(function (item) {
	      return React__default.createElement(CarouselItem, {
	        onExiting: _this2.onExiting,
	        onExited: _this2.onExited,
	        key: item.src
	      }, React__default.createElement("img", {
	        className: "d-block w-100",
	        src: item.src,
	        alt: item.altText
	      }), React__default.createElement(CarouselCaption, {
	        captionText: item.caption,
	        captionHeader: item.header || item.caption
	      }));
	    });
	    return React__default.createElement(Carousel, _extends({
	      activeIndex: activeIndex,
	      next: this.next,
	      previous: this.previous,
	      ride: autoPlay ? 'carousel' : undefined
	    }, props), indicators && React__default.createElement(CarouselIndicators, {
	      items: items,
	      activeIndex: props.activeIndex || activeIndex,
	      onClickHandler: goToIndex || this.goToIndex
	    }), slides, controls && React__default.createElement(CarouselControl, {
	      direction: "prev",
	      directionText: "Previous",
	      onClickHandler: props.previous || this.previous
	    }), controls && React__default.createElement(CarouselControl, {
	      direction: "next",
	      directionText: "Next",
	      onClickHandler: props.next || this.next
	    }));
	  };

	  return UncontrolledCarousel;
	}(React.Component);

	UncontrolledCarousel.propTypes = propTypes$v;
	UncontrolledCarousel.defaultProps = {
	  controls: true,
	  indicators: true,
	  autoPlay: true
	};

	var propTypes$w = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$t = {
	  tag: 'div'
	};

	var CardSubtitle = function CardSubtitle(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-subtitle'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardSubtitle.propTypes = propTypes$w;
	CardSubtitle.defaultProps = defaultProps$t;

	var propTypes$x = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$u = {
	  tag: 'p'
	};

	var CardText = function CardText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-text'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardText.propTypes = propTypes$x;
	CardText.defaultProps = defaultProps$u;

	var propTypes$y = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$v = {
	  tag: 'div'
	};

	var CardTitle = function CardTitle(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-title'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardTitle.propTypes = propTypes$y;
	CardTitle.defaultProps = defaultProps$v;

	function noop() {}

	var propTypes$z = {
	  children: propTypes.node.isRequired,
	  popperClassName: propTypes.string,
	  placement: propTypes.string,
	  placementPrefix: propTypes.string,
	  arrowClassName: propTypes.string,
	  hideArrow: propTypes.bool,
	  tag: tagPropType,
	  isOpen: propTypes.bool.isRequired,
	  cssModule: propTypes.object,
	  offset: propTypes.oneOfType([propTypes.string, propTypes.number]),
	  fallbackPlacement: propTypes.oneOfType([propTypes.string, propTypes.array]),
	  flip: propTypes.bool,
	  container: targetPropType,
	  target: targetPropType.isRequired,
	  modifiers: propTypes.object,
	  boundariesElement: propTypes.oneOfType([propTypes.string, DOMElement]),
	  onClosed: propTypes.func,
	  fade: propTypes.bool,
	  transition: propTypes.shape(Fade.propTypes)
	};
	var defaultProps$w = {
	  boundariesElement: 'scrollParent',
	  placement: 'auto',
	  hideArrow: false,
	  isOpen: false,
	  offset: 0,
	  fallbackPlacement: 'flip',
	  flip: true,
	  container: 'body',
	  modifiers: {},
	  onClosed: noop,
	  fade: true,
	  transition: _objectSpread({}, Fade.defaultProps)
	};

	var PopperContent =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(PopperContent, _React$Component);

	  function PopperContent(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.handlePlacementChange = _this.handlePlacementChange.bind(_assertThisInitialized(_this));
	    _this.setTargetNode = _this.setTargetNode.bind(_assertThisInitialized(_this));
	    _this.getTargetNode = _this.getTargetNode.bind(_assertThisInitialized(_this));
	    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
	    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
	    _this.state = {
	      isOpen: props.isOpen
	    };
	    return _this;
	  }

	  PopperContent.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
	    if (props.isOpen && !state.isOpen) {
	      return {
	        isOpen: props.isOpen
	      };
	    } else return null;
	  };

	  var _proto = PopperContent.prototype;

	  _proto.componentDidUpdate = function componentDidUpdate() {
	    if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
	      this._element.childNodes[0].focus();
	    }
	  };

	  _proto.setTargetNode = function setTargetNode(node) {
	    this.targetNode = node;
	  };

	  _proto.getTargetNode = function getTargetNode() {
	    return this.targetNode;
	  };

	  _proto.getContainerNode = function getContainerNode() {
	    return getTarget(this.props.container);
	  };

	  _proto.getRef = function getRef(ref) {
	    this._element = ref;
	  };

	  _proto.handlePlacementChange = function handlePlacementChange(data) {
	    if (this.state.placement !== data.placement) {
	      this.setState({
	        placement: data.placement
	      });
	    }

	    return data;
	  };

	  _proto.onClosed = function onClosed() {
	    this.props.onClosed();
	    this.setState({
	      isOpen: false
	    });
	  };

	  _proto.renderChildren = function renderChildren() {
	    var _this$props = this.props,
	        cssModule = _this$props.cssModule,
	        children = _this$props.children,
	        isOpen = _this$props.isOpen,
	        flip = _this$props.flip,
	        target = _this$props.target,
	        offset = _this$props.offset,
	        fallbackPlacement = _this$props.fallbackPlacement,
	        placementPrefix = _this$props.placementPrefix,
	        _arrowClassName = _this$props.arrowClassName,
	        hideArrow = _this$props.hideArrow,
	        _popperClassName = _this$props.popperClassName,
	        tag = _this$props.tag,
	        container = _this$props.container,
	        modifiers = _this$props.modifiers,
	        boundariesElement = _this$props.boundariesElement,
	        onClosed = _this$props.onClosed,
	        fade = _this$props.fade,
	        transition = _this$props.transition,
	        attrs = _objectWithoutPropertiesLoose(_this$props, ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacement", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "boundariesElement", "onClosed", "fade", "transition"]);

	    var arrowClassName = mapToCssModules(classnames('arrow', _arrowClassName), cssModule);
	    var placement = this.state.placement || attrs.placement;
	    var placementFirstPart = placement.split('-')[0];
	    var popperClassName = mapToCssModules(classnames(_popperClassName, placementPrefix ? placementPrefix + "-" + placementFirstPart : placementFirstPart), this.props.cssModule);

	    var extendedModifiers = _objectSpread({
	      offset: {
	        offset: offset
	      },
	      flip: {
	        enabled: flip,
	        behavior: fallbackPlacement
	      },
	      preventOverflow: {
	        boundariesElement: boundariesElement
	      },
	      update: {
	        enabled: true,
	        order: 950,
	        fn: this.handlePlacementChange
	      }
	    }, modifiers);

	    var popperTransition = _objectSpread({}, Fade.defaultProps, transition, {
	      baseClass: fade ? transition.baseClass : '',
	      timeout: fade ? transition.timeout : 0
	    });

	    return React__default.createElement(Fade, _extends({}, popperTransition, attrs, {
	      "in": isOpen,
	      onExited: this.onClosed,
	      tag: tag
	    }), React__default.createElement(reactPopper.Popper, {
	      referenceElement: this.targetNode,
	      modifiers: extendedModifiers,
	      placement: placement
	    }, function (_ref) {
	      var ref = _ref.ref,
	          style = _ref.style,
	          placement = _ref.placement,
	          arrowProps = _ref.arrowProps;
	      return React__default.createElement("div", {
	        ref: ref,
	        style: style,
	        className: popperClassName,
	        "x-placement": placement
	      }, children, !hideArrow && React__default.createElement("span", {
	        ref: arrowProps.ref,
	        className: arrowClassName,
	        style: arrowProps.style
	      }));
	    }));
	  };

	  _proto.render = function render() {
	    this.setTargetNode(getTarget(this.props.target));

	    if (this.state.isOpen) {
	      return this.props.container === 'inline' ? this.renderChildren() : ReactDOM.createPortal(React__default.createElement("div", {
	        ref: this.getRef
	      }, this.renderChildren()), this.getContainerNode());
	    }

	    return null;
	  };

	  return PopperContent;
	}(React__default.Component);

	PopperContent.propTypes = propTypes$z;
	PopperContent.defaultProps = defaultProps$w;

	var PopperTargetHelper = function PopperTargetHelper(props, context) {
	  context.popperManager.setTargetNode(getTarget(props.target));
	  return null;
	};

	PopperTargetHelper.contextTypes = {
	  popperManager: propTypes.object.isRequired
	};
	PopperTargetHelper.propTypes = {
	  target: targetPropType.isRequired
	};

	var propTypes$A = {
	  placement: propTypes.oneOf(PopperPlacements),
	  target: targetPropType.isRequired,
	  container: targetPropType,
	  isOpen: propTypes.bool,
	  disabled: propTypes.bool,
	  hideArrow: propTypes.bool,
	  boundariesElement: propTypes.oneOfType([propTypes.string, DOMElement]),
	  className: propTypes.string,
	  innerClassName: propTypes.string,
	  arrowClassName: propTypes.string,
	  popperClassName: propTypes.string,
	  cssModule: propTypes.object,
	  toggle: propTypes.func,
	  autohide: propTypes.bool,
	  placementPrefix: propTypes.string,
	  delay: propTypes.oneOfType([propTypes.shape({
	    show: propTypes.number,
	    hide: propTypes.number
	  }), propTypes.number]),
	  modifiers: propTypes.object,
	  offset: propTypes.oneOfType([propTypes.string, propTypes.number]),
	  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.object]),
	  trigger: propTypes.string,
	  fade: propTypes.bool,
	  flip: propTypes.bool
	};
	var DEFAULT_DELAYS = {
	  show: 0,
	  hide: 0
	};
	var defaultProps$x = {
	  isOpen: false,
	  hideArrow: false,
	  autohide: false,
	  delay: DEFAULT_DELAYS,
	  toggle: function toggle() {},
	  trigger: 'click',
	  fade: true
	};

	function isInDOMSubtree(element, subtreeRoot) {
	  return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
	}

	var TooltipPopoverWrapper =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(TooltipPopoverWrapper, _React$Component);

	  function TooltipPopoverWrapper(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this._target = null;
	    _this.addTargetEvents = _this.addTargetEvents.bind(_assertThisInitialized(_this));
	    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
	    _this.removeTargetEvents = _this.removeTargetEvents.bind(_assertThisInitialized(_this));
	    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
	    _this.showWithDelay = _this.showWithDelay.bind(_assertThisInitialized(_this));
	    _this.hideWithDelay = _this.hideWithDelay.bind(_assertThisInitialized(_this));
	    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_assertThisInitialized(_this));
	    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_assertThisInitialized(_this));
	    _this.show = _this.show.bind(_assertThisInitialized(_this));
	    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
	    _this.onEscKeyDown = _this.onEscKeyDown.bind(_assertThisInitialized(_this));
	    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
	    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
	    _this.state = {
	      isOpen: props.isOpen
	    };
	    _this._isMounted = false;
	    return _this;
	  }

	  var _proto = TooltipPopoverWrapper.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this._isMounted = true;
	    this.updateTarget();
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this._isMounted = false;
	    this.removeTargetEvents();
	    this.clearShowTimeout();
	    this.clearHideTimeout();
	  };

	  TooltipPopoverWrapper.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
	    if (props.isOpen && !state.isOpen) {
	      return {
	        isOpen: props.isOpen
	      };
	    } else return null;
	  };

	  _proto.onMouseOverTooltipContent = function onMouseOverTooltipContent() {
	    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }

	      if (this.state.isOpen && !this.props.isOpen) {
	        this.toggle();
	      }
	    }
	  };

	  _proto.onMouseLeaveTooltipContent = function onMouseLeaveTooltipContent(e) {
	    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
	      if (this._showTimeout) {
	        this.clearShowTimeout();
	      }

	      e.persist();
	      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
	    }
	  };

	  _proto.onEscKeyDown = function onEscKeyDown(e) {
	    if (e.key === 'Escape') {
	      this.hide(e);
	    }
	  };

	  _proto.getRef = function getRef(ref) {
	    var innerRef = this.props.innerRef;

	    if (innerRef) {
	      if (typeof innerRef === 'function') {
	        innerRef(ref);
	      } else if (typeof innerRef === 'object') {
	        innerRef.current = ref;
	      }
	    }

	    this._popover = ref;
	  };

	  _proto.getDelay = function getDelay(key) {
	    var delay = this.props.delay;

	    if (typeof delay === 'object') {
	      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
	    }

	    return delay;
	  };

	  _proto.show = function show(e) {
	    if (!this.props.isOpen) {
	      this.clearShowTimeout();
	      this.toggle(e);
	    }
	  };

	  _proto.showWithDelay = function showWithDelay(e) {
	    if (this._hideTimeout) {
	      this.clearHideTimeout();
	    }

	    this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
	  };

	  _proto.hide = function hide(e) {
	    if (this.props.isOpen) {
	      this.clearHideTimeout();
	      this.toggle(e);
	    }
	  };

	  _proto.hideWithDelay = function hideWithDelay(e) {
	    if (this._showTimeout) {
	      this.clearShowTimeout();
	    }

	    this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
	  };

	  _proto.clearShowTimeout = function clearShowTimeout() {
	    clearTimeout(this._showTimeout);
	    this._showTimeout = undefined;
	  };

	  _proto.clearHideTimeout = function clearHideTimeout() {
	    clearTimeout(this._hideTimeout);
	    this._hideTimeout = undefined;
	  };

	  _proto.handleDocumentClick = function handleDocumentClick(e) {
	    var triggers = this.props.trigger.split(' ');

	    if (triggers.indexOf('legacy') > -1 && (this.props.isOpen || isInDOMSubtree(e.target, this._target))) {
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }

	      if (this.props.isOpen && !isInDOMSubtree(e.target, this._popover)) {
	        this.hideWithDelay(e);
	      } else if (!this.props.isOpen) {
	        this.showWithDelay(e);
	      }
	    } else if (triggers.indexOf('click') > -1 && isInDOMSubtree(e.target, this._target)) {
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }

	      if (!this.props.isOpen) {
	        this.showWithDelay(e);
	      } else {
	        this.hideWithDelay(e);
	      }
	    }
	  };

	  _proto.addTargetEvents = function addTargetEvents() {
	    if (this.props.trigger) {
	      var triggers = this.props.trigger.split(' ');

	      if (triggers.indexOf('manual') === -1) {
	        if (triggers.indexOf('click') > -1 || triggers.indexOf('legacy') > -1) {
	          document.addEventListener('click', this.handleDocumentClick, true);
	        }

	        if (this._target) {
	          if (triggers.indexOf('hover') > -1) {
	            this._target.addEventListener('mouseover', this.showWithDelay, true);

	            this._target.addEventListener('mouseout', this.hideWithDelay, true);
	          }

	          if (triggers.indexOf('focus') > -1) {
	            this._target.addEventListener('focusin', this.show, true);

	            this._target.addEventListener('focusout', this.hide, true);
	          }

	          this._target.addEventListener('keydown', this.onEscKeyDown, true);
	        }
	      }
	    }
	  };

	  _proto.removeTargetEvents = function removeTargetEvents() {
	    if (this._target) {
	      this._target.removeEventListener('mouseover', this.showWithDelay, true);

	      this._target.removeEventListener('mouseout', this.hideWithDelay, true);

	      this._target.removeEventListener('keydown', this.onEscKeyDown, true);

	      this._target.removeEventListener('focusin', this.show, true);

	      this._target.removeEventListener('focusout', this.hide, true);
	    }

	    document.removeEventListener('click', this.handleDocumentClick, true);
	  };

	  _proto.updateTarget = function updateTarget() {
	    var newTarget = getTarget(this.props.target);

	    if (newTarget !== this._target) {
	      this.removeTargetEvents();
	      this._target = newTarget;
	      this.addTargetEvents();
	    }
	  };

	  _proto.toggle = function toggle(e) {
	    if (this.props.disabled || !this._isMounted) {
	      return e && e.preventDefault();
	    }

	    return this.props.toggle(e);
	  };

	  _proto.onClosed = function onClosed() {
	    this.setState({
	      isOpen: false
	    });
	  };

	  _proto.render = function render() {
	    if (!this.state.isOpen) {
	      return null;
	    }

	    this.updateTarget();
	    var _this$props = this.props,
	        className = _this$props.className,
	        cssModule = _this$props.cssModule,
	        innerClassName = _this$props.innerClassName,
	        target = _this$props.target,
	        isOpen = _this$props.isOpen,
	        hideArrow = _this$props.hideArrow,
	        boundariesElement = _this$props.boundariesElement,
	        placement = _this$props.placement,
	        placementPrefix = _this$props.placementPrefix,
	        arrowClassName = _this$props.arrowClassName,
	        popperClassName = _this$props.popperClassName,
	        container = _this$props.container,
	        modifiers = _this$props.modifiers,
	        offset = _this$props.offset,
	        fade = _this$props.fade,
	        flip = _this$props.flip;
	    var attributes = omit(this.props, Object.keys(propTypes$A));
	    var popperClasses = mapToCssModules(popperClassName, cssModule);
	    var classes = mapToCssModules(innerClassName, cssModule);
	    return React__default.createElement(PopperContent, {
	      className: className,
	      target: target,
	      isOpen: isOpen,
	      hideArrow: hideArrow,
	      boundariesElement: boundariesElement,
	      placement: placement,
	      placementPrefix: placementPrefix,
	      arrowClassName: arrowClassName,
	      popperClassName: popperClasses,
	      container: container,
	      modifiers: modifiers,
	      offset: offset,
	      cssModule: cssModule,
	      onClosed: this.onClosed,
	      fade: fade,
	      flip: flip
	    }, React__default.createElement("div", _extends({}, attributes, {
	      ref: this.getRef,
	      className: classes,
	      role: "tooltip",
	      "aria-hidden": isOpen,
	      onMouseOver: this.onMouseOverTooltipContent,
	      onMouseLeave: this.onMouseLeaveTooltipContent,
	      onKeyDown: this.onEscKeyDown
	    })));
	  };

	  return TooltipPopoverWrapper;
	}(React__default.Component);

	TooltipPopoverWrapper.propTypes = propTypes$A;
	TooltipPopoverWrapper.defaultProps = defaultProps$x;

	var defaultProps$y = {
	  placement: 'right',
	  placementPrefix: 'bs-popover',
	  trigger: 'click'
	};

	var Popover = function Popover(props) {
	  var popperClasses = classnames('popover', 'show');
	  var classes = classnames('popover-inner', props.innerClassName);
	  return React__default.createElement(TooltipPopoverWrapper, _extends({}, props, {
	    popperClassName: popperClasses,
	    innerClassName: classes
	  }));
	};

	Popover.propTypes = propTypes$A;
	Popover.defaultProps = defaultProps$y;

	var propTypes$B = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$z = {
	  tag: 'h3'
	};

	var PopoverHeader = function PopoverHeader(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'popover-header'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	PopoverHeader.propTypes = propTypes$B;
	PopoverHeader.defaultProps = defaultProps$z;

	var propTypes$C = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$A = {
	  tag: 'div'
	};

	var PopoverBody = function PopoverBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'popover-body'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	PopoverBody.propTypes = propTypes$C;
	PopoverBody.defaultProps = defaultProps$A;

	var propTypes$D = {
	  children: propTypes.node.isRequired,
	  node: propTypes.any
	};

	var Portal =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Portal, _React$Component);

	  function Portal() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Portal.prototype;

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.defaultNode) {
	      document.body.removeChild(this.defaultNode);
	    }

	    this.defaultNode = null;
	  };

	  _proto.render = function render() {
	    if (!canUseDOM) {
	      return null;
	    }

	    if (!this.props.node && !this.defaultNode) {
	      this.defaultNode = document.createElement('div');
	      document.body.appendChild(this.defaultNode);
	    }

	    return ReactDOM.createPortal(this.props.children, this.props.node || this.defaultNode);
	  };

	  return Portal;
	}(React__default.Component);

	Portal.propTypes = propTypes$D;

	function noop$1() {}

	var FadePropTypes = propTypes.shape(Fade.propTypes);
	var propTypes$E = {
	  isOpen: propTypes.bool,
	  autoFocus: propTypes.bool,
	  centered: propTypes.bool,
	  scrollable: propTypes.bool,
	  size: propTypes.string,
	  toggle: propTypes.func,
	  keyboard: propTypes.bool,
	  role: propTypes.string,
	  labelledBy: propTypes.string,
	  backdrop: propTypes.oneOfType([propTypes.bool, propTypes.oneOf(['static'])]),
	  onEnter: propTypes.func,
	  onExit: propTypes.func,
	  onOpened: propTypes.func,
	  onClosed: propTypes.func,
	  children: propTypes.node,
	  className: propTypes.string,
	  wrapClassName: propTypes.string,
	  modalClassName: propTypes.string,
	  backdropClassName: propTypes.string,
	  contentClassName: propTypes.string,
	  external: propTypes.node,
	  fade: propTypes.bool,
	  cssModule: propTypes.object,
	  zIndex: propTypes.oneOfType([propTypes.number, propTypes.string]),
	  backdropTransition: FadePropTypes,
	  modalTransition: FadePropTypes,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func]),
	  unmountOnClose: propTypes.bool,
	  returnFocusAfterClose: propTypes.bool
	};
	var propsToOmit = Object.keys(propTypes$E);
	var defaultProps$B = {
	  isOpen: false,
	  autoFocus: true,
	  centered: false,
	  scrollable: false,
	  role: 'dialog',
	  backdrop: true,
	  keyboard: true,
	  zIndex: 1050,
	  fade: true,
	  onOpened: noop$1,
	  onClosed: noop$1,
	  modalTransition: {
	    timeout: TransitionTimeouts.Modal
	  },
	  backdropTransition: {
	    mountOnEnter: true,
	    timeout: TransitionTimeouts.Fade // uses standard fade transition

	  },
	  unmountOnClose: true,
	  returnFocusAfterClose: true
	};

	var Modal =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Modal, _React$Component);

	  function Modal(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this._element = null;
	    _this._originalBodyPadding = null;
	    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
	    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
	    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
	    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
	    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
	    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
	    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
	    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
	    _this.state = {
	      isOpen: false
	    };
	    return _this;
	  }

	  var _proto = Modal.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    var _this$props = this.props,
	        isOpen = _this$props.isOpen,
	        autoFocus = _this$props.autoFocus,
	        onEnter = _this$props.onEnter;

	    if (isOpen) {
	      this.init();
	      this.setState({
	        isOpen: true
	      });

	      if (autoFocus) {
	        this.setFocus();
	      }
	    }

	    if (onEnter) {
	      onEnter();
	    }

	    this._isMounted = true;
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
	    if (this.props.isOpen && !prevProps.isOpen) {
	      this.init();
	      this.setState({
	        isOpen: true
	      }); // let render() renders Modal Dialog first

	      return;
	    } // now Modal Dialog is rendered and we can refer this._element and this._dialog


	    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
	      this.setFocus();
	    }

	    if (this._element && prevProps.zIndex !== this.props.zIndex) {
	      this._element.style.zIndex = this.props.zIndex;
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.props.onExit) {
	      this.props.onExit();
	    }

	    if (this._element) {
	      this.destroy();

	      if (this.state.isOpen) {
	        this.close();
	      }
	    }

	    this._isMounted = false;
	  };

	  _proto.onOpened = function onOpened(node, isAppearing) {
	    this.props.onOpened();
	    (this.props.modalTransition.onEntered || noop$1)(node, isAppearing);
	  };

	  _proto.onClosed = function onClosed(node) {
	    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

	    this.props.onClosed();
	    (this.props.modalTransition.onExited || noop$1)(node);

	    if (unmountOnClose) {
	      this.destroy();
	    }

	    this.close();

	    if (this._isMounted) {
	      this.setState({
	        isOpen: false
	      });
	    }
	  };

	  _proto.setFocus = function setFocus() {
	    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
	      this._dialog.parentNode.focus();
	    }
	  };

	  _proto.getFocusableChildren = function getFocusableChildren() {
	    return this._element.querySelectorAll(focusableElements.join(', '));
	  };

	  _proto.getFocusedChild = function getFocusedChild() {
	    var currentFocus;
	    var focusableChildren = this.getFocusableChildren();

	    try {
	      currentFocus = document.activeElement;
	    } catch (err) {
	      currentFocus = focusableChildren[0];
	    }

	    return currentFocus;
	  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
	  ;

	  _proto.handleBackdropClick = function handleBackdropClick(e) {
	    if (e.target === this._mouseDownElement) {
	      e.stopPropagation();
	      if (!this.props.isOpen || this.props.backdrop !== true) return;
	      var backdrop = this._dialog ? this._dialog.parentNode : null;

	      if (backdrop && e.target === backdrop && this.props.toggle) {
	        this.props.toggle(e);
	      }
	    }
	  };

	  _proto.handleTab = function handleTab(e) {
	    if (e.which !== 9) return;
	    var focusableChildren = this.getFocusableChildren();
	    var totalFocusable = focusableChildren.length;
	    if (totalFocusable === 0) return;
	    var currentFocus = this.getFocusedChild();
	    var focusedIndex = 0;

	    for (var i = 0; i < totalFocusable; i += 1) {
	      if (focusableChildren[i] === currentFocus) {
	        focusedIndex = i;
	        break;
	      }
	    }

	    if (e.shiftKey && focusedIndex === 0) {
	      e.preventDefault();
	      focusableChildren[totalFocusable - 1].focus();
	    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
	      e.preventDefault();
	      focusableChildren[0].focus();
	    }
	  };

	  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
	    this._mouseDownElement = e.target;
	  };

	  _proto.handleEscape = function handleEscape(e) {
	    if (this.props.isOpen && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
	      e.preventDefault();
	      e.stopPropagation();
	      this.props.toggle(e);
	    }
	  };

	  _proto.init = function init() {
	    try {
	      this._triggeringElement = document.activeElement;
	    } catch (err) {
	      this._triggeringElement = null;
	    }

	    if (!this._element) {
	      this._element = document.createElement('div');

	      this._element.setAttribute('tabindex', '-1');

	      this._element.style.position = 'relative';
	      this._element.style.zIndex = this.props.zIndex;
	      document.body.appendChild(this._element);
	    }

	    this._originalBodyPadding = getOriginalBodyPadding();
	    conditionallyUpdateScrollbar();

	    if (Modal.openCount === 0) {
	      document.body.className = classnames(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
	    }

	    Modal.openCount += 1;
	  };

	  _proto.destroy = function destroy() {
	    if (this._element) {
	      document.body.removeChild(this._element);
	      this._element = null;
	    }

	    this.manageFocusAfterClose();
	  };

	  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
	    if (this._triggeringElement) {
	      var returnFocusAfterClose = this.props.returnFocusAfterClose;
	      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
	      this._triggeringElement = null;
	    }
	  };

	  _proto.close = function close() {
	    if (Modal.openCount <= 1) {
	      var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

	      var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
	      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
	    }

	    this.manageFocusAfterClose();
	    Modal.openCount = Math.max(0, Modal.openCount - 1);
	    setScrollbarWidth(this._originalBodyPadding);
	  };

	  _proto.renderModalDialog = function renderModalDialog() {
	    var _classNames,
	        _this2 = this;

	    var attributes = omit(this.props, propsToOmit);
	    var dialogBaseClass = 'modal-dialog';
	    return React__default.createElement("div", _extends({}, attributes, {
	      className: mapToCssModules(classnames(dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames)), this.props.cssModule),
	      role: "document",
	      ref: function ref(c) {
	        _this2._dialog = c;
	      }
	    }), React__default.createElement("div", {
	      className: mapToCssModules(classnames('modal-content', this.props.contentClassName), this.props.cssModule)
	    }, this.props.children));
	  };

	  _proto.render = function render() {
	    var unmountOnClose = this.props.unmountOnClose;

	    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
	      var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
	      this._element.style.display = isModalHidden ? 'none' : 'block';
	      var _this$props2 = this.props,
	          wrapClassName = _this$props2.wrapClassName,
	          modalClassName = _this$props2.modalClassName,
	          backdropClassName = _this$props2.backdropClassName,
	          cssModule = _this$props2.cssModule,
	          isOpen = _this$props2.isOpen,
	          backdrop = _this$props2.backdrop,
	          role = _this$props2.role,
	          labelledBy = _this$props2.labelledBy,
	          external = _this$props2.external,
	          innerRef = _this$props2.innerRef;
	      var modalAttributes = {
	        onClick: this.handleBackdropClick,
	        onMouseDown: this.handleBackdropMouseDown,
	        onKeyUp: this.handleEscape,
	        onKeyDown: this.handleTab,
	        style: {
	          display: 'block'
	        },
	        'aria-labelledby': labelledBy,
	        role: role,
	        tabIndex: '-1'
	      };
	      var hasTransition = this.props.fade;

	      var modalTransition = _objectSpread({}, Fade.defaultProps, this.props.modalTransition, {
	        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
	        timeout: hasTransition ? this.props.modalTransition.timeout : 0
	      });

	      var backdropTransition = _objectSpread({}, Fade.defaultProps, this.props.backdropTransition, {
	        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
	        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
	      });

	      var Backdrop = backdrop && (hasTransition ? React__default.createElement(Fade, _extends({}, backdropTransition, {
	        "in": isOpen && !!backdrop,
	        cssModule: cssModule,
	        className: mapToCssModules(classnames('modal-backdrop', backdropClassName), cssModule)
	      })) : React__default.createElement("div", {
	        className: mapToCssModules(classnames('modal-backdrop', 'show', backdropClassName), cssModule)
	      }));
	      return React__default.createElement(Portal, {
	        node: this._element
	      }, React__default.createElement("div", {
	        className: mapToCssModules(wrapClassName)
	      }, React__default.createElement(Fade, _extends({}, modalAttributes, modalTransition, {
	        "in": isOpen,
	        onEntered: this.onOpened,
	        onExited: this.onClosed,
	        cssModule: cssModule,
	        className: mapToCssModules(classnames('modal', modalClassName), cssModule),
	        innerRef: innerRef
	      }), external, this.renderModalDialog()), Backdrop));
	    }

	    return null;
	  };

	  return Modal;
	}(React__default.Component);

	Modal.propTypes = propTypes$E;
	Modal.defaultProps = defaultProps$B;
	Modal.openCount = 0;

	var propTypes$F = {
	  tag: tagPropType,
	  wrapTag: tagPropType,
	  toggle: propTypes.func,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  children: propTypes.node,
	  closeAriaLabel: propTypes.string,
	  charCode: propTypes.oneOfType([propTypes.string, propTypes.number]),
	  close: propTypes.object
	};
	var defaultProps$C = {
	  tag: 'h5',
	  wrapTag: 'div',
	  closeAriaLabel: 'Close',
	  charCode: 215
	};

	var ModalHeader = function ModalHeader(props) {
	  var closeButton;

	  var className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      toggle = props.toggle,
	      Tag = props.tag,
	      WrapTag = props.wrapTag,
	      closeAriaLabel = props.closeAriaLabel,
	      charCode = props.charCode,
	      close = props.close,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "charCode", "close"]);

	  var classes = mapToCssModules(classnames(className, 'modal-header'), cssModule);

	  if (!close && toggle) {
	    var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
	    closeButton = React__default.createElement("button", {
	      type: "button",
	      onClick: toggle,
	      className: mapToCssModules('close', cssModule),
	      "aria-label": closeAriaLabel
	    }, React__default.createElement("span", {
	      "aria-hidden": "true"
	    }, closeIcon));
	  }

	  return React__default.createElement(WrapTag, _extends({}, attributes, {
	    className: classes
	  }), React__default.createElement(Tag, {
	    className: mapToCssModules('modal-title', cssModule)
	  }, children), close || closeButton);
	};

	ModalHeader.propTypes = propTypes$F;
	ModalHeader.defaultProps = defaultProps$C;

	var propTypes$G = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$D = {
	  tag: 'div'
	};

	var ModalBody = function ModalBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'modal-body'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ModalBody.propTypes = propTypes$G;
	ModalBody.defaultProps = defaultProps$D;

	var propTypes$H = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$E = {
	  tag: 'div'
	};

	var ModalFooter = function ModalFooter(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'modal-footer'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ModalFooter.propTypes = propTypes$H;
	ModalFooter.defaultProps = defaultProps$E;

	var defaultProps$F = {
	  placement: 'top',
	  autohide: true,
	  placementPrefix: 'bs-tooltip',
	  trigger: 'click hover focus'
	};

	var Tooltip = function Tooltip(props) {
	  var popperClasses = classnames('tooltip', 'show');
	  var classes = classnames('tooltip-inner', props.innerClassName);
	  return React__default.createElement(TooltipPopoverWrapper, _extends({}, props, {
	    popperClassName: popperClasses,
	    innerClassName: classes
	  }));
	};

	Tooltip.propTypes = propTypes$A;
	Tooltip.defaultProps = defaultProps$F;

	var propTypes$I = {
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  size: propTypes.string,
	  bordered: propTypes.bool,
	  borderless: propTypes.bool,
	  striped: propTypes.bool,
	  dark: propTypes.bool,
	  hover: propTypes.bool,
	  responsive: propTypes.oneOfType([propTypes.bool, propTypes.string]),
	  tag: tagPropType,
	  responsiveTag: tagPropType,
	  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.object])
	};
	var defaultProps$G = {
	  tag: 'table',
	  responsiveTag: 'div'
	};

	var Table = function Table(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      size = props.size,
	      bordered = props.bordered,
	      borderless = props.borderless,
	      striped = props.striped,
	      dark = props.dark,
	      hover = props.hover,
	      responsive = props.responsive,
	      Tag = props.tag,
	      ResponsiveTag = props.responsiveTag,
	      innerRef = props.innerRef,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "size", "bordered", "borderless", "striped", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"]);

	  var classes = mapToCssModules(classnames(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
	  var table = React__default.createElement(Tag, _extends({}, attributes, {
	    ref: innerRef,
	    className: classes
	  }));

	  if (responsive) {
	    var responsiveClassName = mapToCssModules(responsive === true ? 'table-responsive' : "table-responsive-" + responsive, cssModule);
	    return React__default.createElement(ResponsiveTag, {
	      className: responsiveClassName
	    }, table);
	  }

	  return table;
	};

	Table.propTypes = propTypes$I;
	Table.defaultProps = defaultProps$G;

	var propTypes$J = {
	  tag: tagPropType,
	  flush: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$H = {
	  tag: 'ul'
	};

	var ListGroup = function ListGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      flush = props.flush,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "flush"]);

	  var classes = mapToCssModules(classnames(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ListGroup.propTypes = propTypes$J;
	ListGroup.defaultProps = defaultProps$H;

	var propTypes$K = {
	  children: propTypes.node,
	  inline: propTypes.bool,
	  tag: tagPropType,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$I = {
	  tag: 'form'
	};

	var Form =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(Form, _Component);

	  function Form(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
	    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = Form.prototype;

	  _proto.getRef = function getRef(ref) {
	    if (this.props.innerRef) {
	      this.props.innerRef(ref);
	    }

	    this.ref = ref;
	  };

	  _proto.submit = function submit() {
	    if (this.ref) {
	      this.ref.submit();
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        cssModule = _this$props.cssModule,
	        inline = _this$props.inline,
	        Tag = _this$props.tag,
	        innerRef = _this$props.innerRef,
	        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "inline", "tag", "innerRef"]);

	    var classes = mapToCssModules(classnames(className, inline ? 'form-inline' : false), cssModule);
	    return React__default.createElement(Tag, _extends({}, attributes, {
	      ref: innerRef,
	      className: classes
	    }));
	  };

	  return Form;
	}(React.Component);

	Form.propTypes = propTypes$K;
	Form.defaultProps = defaultProps$I;

	var propTypes$L = {
	  children: propTypes.node,
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  valid: propTypes.bool,
	  tooltip: propTypes.bool
	};
	var defaultProps$J = {
	  tag: 'div',
	  valid: undefined
	};

	var FormFeedback = function FormFeedback(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      valid = props.valid,
	      tooltip = props.tooltip,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "valid", "tooltip", "tag"]);

	  var validMode = tooltip ? 'tooltip' : 'feedback';
	  var classes = mapToCssModules(classnames(className, valid ? "valid-" + validMode : "invalid-" + validMode), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	FormFeedback.propTypes = propTypes$L;
	FormFeedback.defaultProps = defaultProps$J;

	var propTypes$M = {
	  children: propTypes.node,
	  row: propTypes.bool,
	  check: propTypes.bool,
	  inline: propTypes.bool,
	  disabled: propTypes.bool,
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$K = {
	  tag: 'div'
	};

	var FormGroup = function FormGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      row = props.row,
	      disabled = props.disabled,
	      check = props.check,
	      inline = props.inline,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "row", "disabled", "check", "inline", "tag"]);

	  var classes = mapToCssModules(classnames(className, row ? 'row' : false, check ? 'form-check' : 'form-group', check && inline ? 'form-check-inline' : false, check && disabled ? 'disabled' : false), cssModule);

	  if (Tag === 'fieldset') {
	    attributes.disabled = disabled;
	  }

	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	FormGroup.propTypes = propTypes$M;
	FormGroup.defaultProps = defaultProps$K;

	var propTypes$N = {
	  children: propTypes.node,
	  inline: propTypes.bool,
	  tag: tagPropType,
	  color: propTypes.string,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$L = {
	  tag: 'small',
	  color: 'muted'
	};

	var FormText = function FormText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      inline = props.inline,
	      color = props.color,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "inline", "color", "tag"]);

	  var classes = mapToCssModules(classnames(className, !inline ? 'form-text' : false, color ? "text-" + color : false), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	FormText.propTypes = propTypes$N;
	FormText.defaultProps = defaultProps$L;

	var propTypes$O = {
	  children: propTypes.node,
	  type: propTypes.string,
	  size: propTypes.string,
	  bsSize: propTypes.string,
	  valid: propTypes.bool,
	  invalid: propTypes.bool,
	  tag: tagPropType,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
	  plaintext: propTypes.bool,
	  addon: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$M = {
	  type: 'text'
	};

	var Input =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Input, _React$Component);

	  function Input(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
	    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = Input.prototype;

	  _proto.getRef = function getRef(ref) {
	    if (this.props.innerRef) {
	      this.props.innerRef(ref);
	    }

	    this.ref = ref;
	  };

	  _proto.focus = function focus() {
	    if (this.ref) {
	      this.ref.focus();
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        cssModule = _this$props.cssModule,
	        type = _this$props.type,
	        bsSize = _this$props.bsSize,
	        valid = _this$props.valid,
	        invalid = _this$props.invalid,
	        tag = _this$props.tag,
	        addon = _this$props.addon,
	        plaintext = _this$props.plaintext,
	        innerRef = _this$props.innerRef,
	        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"]);

	    var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
	    var isNotaNumber = new RegExp('\\D', 'g');
	    var fileInput = type === 'file';
	    var textareaInput = type === 'textarea';
	    var selectInput = type === 'select';
	    var Tag = tag || (selectInput || textareaInput ? type : 'input');
	    var formControlClass = 'form-control';

	    if (plaintext) {
	      formControlClass = formControlClass + "-plaintext";
	      Tag = tag || 'input';
	    } else if (fileInput) {
	      formControlClass = formControlClass + "-file";
	    } else if (checkInput) {
	      if (addon) {
	        formControlClass = null;
	      } else {
	        formControlClass = 'form-check-input';
	      }
	    }

	    if (attributes.size && isNotaNumber.test(attributes.size)) {
	      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
	      bsSize = attributes.size;
	      delete attributes.size;
	    }

	    var classes = mapToCssModules(classnames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);

	    if (Tag === 'input' || tag && typeof tag === 'function') {
	      attributes.type = type;
	    }

	    if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
	      warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
	      delete attributes.children;
	    }

	    return React__default.createElement(Tag, _extends({}, attributes, {
	      ref: innerRef,
	      className: classes
	    }));
	  };

	  return Input;
	}(React__default.Component);

	Input.propTypes = propTypes$O;
	Input.defaultProps = defaultProps$M;

	var propTypes$P = {
	  tag: tagPropType,
	  size: propTypes.string,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$N = {
	  tag: 'div'
	};

	var InputGroup = function InputGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      size = props.size,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "size"]);

	  var classes = mapToCssModules(classnames(className, 'input-group', size ? "input-group-" + size : null), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	InputGroup.propTypes = propTypes$P;
	InputGroup.defaultProps = defaultProps$N;

	var propTypes$Q = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$O = {
	  tag: 'span'
	};

	var InputGroupText = function InputGroupText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'input-group-text'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	InputGroupText.propTypes = propTypes$Q;
	InputGroupText.defaultProps = defaultProps$O;

	var propTypes$R = {
	  tag: tagPropType,
	  addonType: propTypes.oneOf(['prepend', 'append']).isRequired,
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$P = {
	  tag: 'div'
	};

	var InputGroupAddon = function InputGroupAddon(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      addonType = props.addonType,
	      children = props.children,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "addonType", "children"]);

	  var classes = mapToCssModules(classnames(className, 'input-group-' + addonType), cssModule); // Convenience to assist with transition

	  if (typeof children === 'string') {
	    return React__default.createElement(Tag, _extends({}, attributes, {
	      className: classes
	    }), React__default.createElement(InputGroupText, {
	      children: children
	    }));
	  }

	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    children: children
	  }));
	};

	InputGroupAddon.propTypes = propTypes$R;
	InputGroupAddon.defaultProps = defaultProps$P;

	var propTypes$S = {
	  addonType: propTypes.oneOf(['prepend', 'append']).isRequired,
	  children: propTypes.node
	};

	var InputGroupButtonDropdown = function InputGroupButtonDropdown(props) {
	  return React__default.createElement(Dropdown, props);
	};

	InputGroupButtonDropdown.propTypes = propTypes$S;

	var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl'];
	var stringOrNumberProp$1 = propTypes.oneOfType([propTypes.number, propTypes.string]);
	var columnProps$1 = propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.shape({
	  size: stringOrNumberProp$1,
	  order: stringOrNumberProp$1,
	  offset: stringOrNumberProp$1
	})]);
	var propTypes$T = {
	  children: propTypes.node,
	  hidden: propTypes.bool,
	  check: propTypes.bool,
	  size: propTypes.string,
	  "for": propTypes.string,
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  xs: columnProps$1,
	  sm: columnProps$1,
	  md: columnProps$1,
	  lg: columnProps$1,
	  xl: columnProps$1,
	  widths: propTypes.array
	};
	var defaultProps$Q = {
	  tag: 'label',
	  widths: colWidths$1
	};

	var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
	  if (colSize === true || colSize === '') {
	    return isXs ? 'col' : "col-" + colWidth;
	  } else if (colSize === 'auto') {
	    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
	  }

	  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
	};

	var Label = function Label(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      hidden = props.hidden,
	      widths = props.widths,
	      Tag = props.tag,
	      check = props.check,
	      size = props.size,
	      htmlFor = props["for"],
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"]);

	  var colClasses = [];
	  widths.forEach(function (colWidth, i) {
	    var columnProp = props[colWidth];
	    delete attributes[colWidth];

	    if (!columnProp && columnProp !== '') {
	      return;
	    }

	    var isXs = !i;
	    var colClass;

	    if (lodash_isobject(columnProp)) {
	      var _classNames;

	      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
	      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
	      colClasses.push(mapToCssModules(classnames((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames))), cssModule);
	    } else {
	      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);
	      colClasses.push(colClass);
	    }
	  });
	  var classes = mapToCssModules(classnames(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : false, size ? "col-form-label-" + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
	  return React__default.createElement(Tag, _extends({
	    htmlFor: htmlFor
	  }, attributes, {
	    className: classes
	  }));
	};

	Label.propTypes = propTypes$T;
	Label.defaultProps = defaultProps$Q;

	var propTypes$U = {
	  body: propTypes.bool,
	  bottom: propTypes.bool,
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  heading: propTypes.bool,
	  left: propTypes.bool,
	  list: propTypes.bool,
	  middle: propTypes.bool,
	  object: propTypes.bool,
	  right: propTypes.bool,
	  tag: tagPropType,
	  top: propTypes.bool
	};

	var Media = function Media(props) {
	  var body = props.body,
	      bottom = props.bottom,
	      className = props.className,
	      cssModule = props.cssModule,
	      heading = props.heading,
	      left = props.left,
	      list = props.list,
	      middle = props.middle,
	      object = props.object,
	      right = props.right,
	      tag = props.tag,
	      top = props.top,
	      attributes = _objectWithoutPropertiesLoose(props, ["body", "bottom", "className", "cssModule", "heading", "left", "list", "middle", "object", "right", "tag", "top"]);

	  var defaultTag;

	  if (heading) {
	    defaultTag = 'h4';
	  } else if (attributes.href) {
	    defaultTag = 'a';
	  } else if (attributes.src || object) {
	    defaultTag = 'img';
	  } else if (list) {
	    defaultTag = 'ul';
	  } else {
	    defaultTag = 'div';
	  }

	  var Tag = tag || defaultTag;
	  var classes = mapToCssModules(classnames(className, {
	    'media-body': body,
	    'media-heading': heading,
	    'media-left': left,
	    'media-right': right,
	    'media-top': top,
	    'media-bottom': bottom,
	    'media-middle': middle,
	    'media-object': object,
	    'media-list': list,
	    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
	  }), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Media.propTypes = propTypes$U;

	var propTypes$V = {
	  active: propTypes.bool,
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  disabled: propTypes.bool,
	  tag: tagPropType
	};
	var defaultProps$R = {
	  tag: 'li'
	};

	var PaginationItem = function PaginationItem(props) {
	  var active = props.active,
	      className = props.className,
	      cssModule = props.cssModule,
	      disabled = props.disabled,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["active", "className", "cssModule", "disabled", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'page-item', {
	    active: active,
	    disabled: disabled
	  }), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	PaginationItem.propTypes = propTypes$V;
	PaginationItem.defaultProps = defaultProps$R;

	var propTypes$W = {
	  'aria-label': propTypes.string,
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  next: propTypes.bool,
	  previous: propTypes.bool,
	  first: propTypes.bool,
	  last: propTypes.bool,
	  tag: tagPropType
	};
	var defaultProps$S = {
	  tag: 'a'
	};

	var PaginationLink = function PaginationLink(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      next = props.next,
	      previous = props.previous,
	      first = props.first,
	      last = props.last,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "next", "previous", "first", "last", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'page-link'), cssModule);
	  var defaultAriaLabel;

	  if (previous) {
	    defaultAriaLabel = 'Previous';
	  } else if (next) {
	    defaultAriaLabel = 'Next';
	  } else if (first) {
	    defaultAriaLabel = 'First';
	  } else if (last) {
	    defaultAriaLabel = 'Last';
	  }

	  var ariaLabel = props['aria-label'] || defaultAriaLabel;
	  var defaultCaret;

	  if (previous) {
	    defaultCaret = "\u2039";
	  } else if (next) {
	    defaultCaret = "\u203A";
	  } else if (first) {
	    defaultCaret = "\xAB";
	  } else if (last) {
	    defaultCaret = "\xBB";
	  }

	  var children = props.children;

	  if (children && Array.isArray(children) && children.length === 0) {
	    children = null;
	  }

	  if (!attributes.href && Tag === 'a') {
	    Tag = 'button';
	  }

	  if (previous || next || first || last) {
	    children = [React__default.createElement("span", {
	      "aria-hidden": "true",
	      key: "caret"
	    }, children || defaultCaret), React__default.createElement("span", {
	      className: "sr-only",
	      key: "sr"
	    }, ariaLabel)];
	  }

	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    "aria-label": ariaLabel
	  }), children);
	};

	PaginationLink.propTypes = propTypes$W;
	PaginationLink.defaultProps = defaultProps$S;

	/**
	 * TabContext
	 * {
	 *  activeTabId: PropTypes.any
	 * }
	 */

	var TabContext = React__default.createContext({});

	var propTypes$X = {
	  tag: tagPropType,
	  activeTab: propTypes.any,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$T = {
	  tag: 'div'
	};

	var TabContent =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(TabContent, _Component);

	  TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
	    if (prevState.activeTab !== nextProps.activeTab) {
	      return {
	        activeTab: nextProps.activeTab
	      };
	    }

	    return null;
	  };

	  function TabContent(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.state = {
	      activeTab: _this.props.activeTab
	    };
	    return _this;
	  }

	  var _proto = TabContent.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        cssModule = _this$props.cssModule,
	        Tag = _this$props.tag;
	    var attributes = omit(this.props, Object.keys(propTypes$X));
	    var classes = mapToCssModules(classnames('tab-content', className), cssModule);
	    return React__default.createElement(TabContext.Provider, {
	      value: {
	        activeTabId: this.state.activeTab
	      }
	    }, React__default.createElement(Tag, _extends({}, attributes, {
	      className: classes
	    })));
	  };

	  return TabContent;
	}(React.Component);

	polyfill(TabContent);
	TabContent.propTypes = propTypes$X;
	TabContent.defaultProps = defaultProps$T;

	var propTypes$Y = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  tabId: propTypes.any
	};
	var defaultProps$U = {
	  tag: 'div'
	};
	function TabPane(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      tabId = props.tabId,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tabId", "tag"]);

	  var getClasses = function getClasses(activeTabId) {
	    return mapToCssModules(classnames('tab-pane', className, {
	      active: tabId === activeTabId
	    }), cssModule);
	  };

	  return React__default.createElement(TabContext.Consumer, null, function (_ref) {
	    var activeTabId = _ref.activeTabId;
	    return React__default.createElement(Tag, _extends({}, attributes, {
	      className: getClasses(activeTabId)
	    }));
	  });
	}
	TabPane.propTypes = propTypes$Y;
	TabPane.defaultProps = defaultProps$U;

	var propTypes$Z = {
	  tag: tagPropType,
	  fluid: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$V = {
	  tag: 'div'
	};

	var Jumbotron = function Jumbotron(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      fluid = props.fluid,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "fluid"]);

	  var classes = mapToCssModules(classnames(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Jumbotron.propTypes = propTypes$Z;
	Jumbotron.defaultProps = defaultProps$V;

	var propTypes$_ = {
	  children: propTypes.node,
	  className: propTypes.string,
	  closeClassName: propTypes.string,
	  closeAriaLabel: propTypes.string,
	  cssModule: propTypes.object,
	  color: propTypes.string,
	  fade: propTypes.bool,
	  isOpen: propTypes.bool,
	  toggle: propTypes.func,
	  tag: tagPropType,
	  transition: propTypes.shape(Fade.propTypes),
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
	};
	var defaultProps$W = {
	  color: 'success',
	  isOpen: true,
	  tag: 'div',
	  closeAriaLabel: 'Close',
	  fade: true,
	  transition: _objectSpread({}, Fade.defaultProps, {
	    unmountOnExit: true
	  })
	};

	function Alert(props) {
	  var className = props.className,
	      closeClassName = props.closeClassName,
	      closeAriaLabel = props.closeAriaLabel,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      color = props.color,
	      isOpen = props.isOpen,
	      toggle = props.toggle,
	      children = props.children,
	      transition = props.transition,
	      fade = props.fade,
	      innerRef = props.innerRef,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"]);

	  var classes = mapToCssModules(classnames(className, 'alert', "alert-" + color, {
	    'alert-dismissible': toggle
	  }), cssModule);
	  var closeClasses = mapToCssModules(classnames('close', closeClassName), cssModule);

	  var alertTransition = _objectSpread({}, Fade.defaultProps, transition, {
	    baseClass: fade ? transition.baseClass : '',
	    timeout: fade ? transition.timeout : 0
	  });

	  return React__default.createElement(Fade, _extends({}, attributes, alertTransition, {
	    tag: Tag,
	    className: classes,
	    "in": isOpen,
	    role: "alert",
	    innerRef: innerRef
	  }), toggle ? React__default.createElement("button", {
	    type: "button",
	    className: closeClasses,
	    "aria-label": closeAriaLabel,
	    onClick: toggle
	  }, React__default.createElement("span", {
	    "aria-hidden": "true"
	  }, "\xD7")) : null, children);
	}

	Alert.propTypes = propTypes$_;
	Alert.defaultProps = defaultProps$W;

	var propTypes$$ = {
	  tag: tagPropType,
	  active: propTypes.bool,
	  disabled: propTypes.bool,
	  color: propTypes.string,
	  action: propTypes.bool,
	  className: propTypes.any,
	  cssModule: propTypes.object
	};
	var defaultProps$X = {
	  tag: 'li'
	};

	var handleDisabledOnClick = function handleDisabledOnClick(e) {
	  e.preventDefault();
	};

	var ListGroupItem = function ListGroupItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      active = props.active,
	      disabled = props.disabled,
	      action = props.action,
	      color = props.color,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "active", "disabled", "action", "color"]);

	  var classes = mapToCssModules(classnames(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? "list-group-item-" + color : false, 'list-group-item'), cssModule); // Prevent click event when disabled.

	  if (disabled) {
	    attributes.onClick = handleDisabledOnClick;
	  }

	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ListGroupItem.propTypes = propTypes$$;
	ListGroupItem.defaultProps = defaultProps$X;

	var propTypes$10 = {
	  tag: tagPropType,
	  className: propTypes.any,
	  cssModule: propTypes.object
	};
	var defaultProps$Y = {
	  tag: 'h5'
	};

	var ListGroupItemHeading = function ListGroupItemHeading(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'list-group-item-heading'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ListGroupItemHeading.propTypes = propTypes$10;
	ListGroupItemHeading.defaultProps = defaultProps$Y;

	var propTypes$11 = {
	  tag: tagPropType,
	  className: propTypes.any,
	  cssModule: propTypes.object
	};
	var defaultProps$Z = {
	  tag: 'p'
	};

	var ListGroupItemText = function ListGroupItemText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'list-group-item-text'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ListGroupItemText.propTypes = propTypes$11;
	ListGroupItemText.defaultProps = defaultProps$Z;

	var UncontrolledAlert =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(UncontrolledAlert, _Component);

	  function UncontrolledAlert(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.state = {
	      isOpen: true
	    };
	    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = UncontrolledAlert.prototype;

	  _proto.toggle = function toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  };

	  _proto.render = function render() {
	    return React__default.createElement(Alert, _extends({
	      isOpen: this.state.isOpen,
	      toggle: this.toggle
	    }, this.props));
	  };

	  return UncontrolledAlert;
	}(React.Component);

	var omitKeys = ['defaultOpen'];

	var UncontrolledButtonDropdown =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(UncontrolledButtonDropdown, _Component);

	  function UncontrolledButtonDropdown(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.state = {
	      isOpen: props.defaultOpen || false
	    };
	    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = UncontrolledButtonDropdown.prototype;

	  _proto.toggle = function toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  };

	  _proto.render = function render() {
	    return React__default.createElement(ButtonDropdown, _extends({
	      isOpen: this.state.isOpen,
	      toggle: this.toggle
	    }, omit(this.props, omitKeys)));
	  };

	  return UncontrolledButtonDropdown;
	}(React.Component);
	UncontrolledButtonDropdown.propTypes = _objectSpread({
	  defaultOpen: propTypes.bool
	}, ButtonDropdown.propTypes);

	var omitKeys$1 = ['defaultOpen'];

	var UncontrolledDropdown =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(UncontrolledDropdown, _Component);

	  function UncontrolledDropdown(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.state = {
	      isOpen: props.defaultOpen || false
	    };
	    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = UncontrolledDropdown.prototype;

	  _proto.toggle = function toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  };

	  _proto.render = function render() {
	    return React__default.createElement(Dropdown, _extends({
	      isOpen: this.state.isOpen,
	      toggle: this.toggle
	    }, omit(this.props, omitKeys$1)));
	  };

	  return UncontrolledDropdown;
	}(React.Component);
	UncontrolledDropdown.propTypes = _objectSpread({
	  defaultOpen: propTypes.bool
	}, Dropdown.propTypes);

	var omitKeys$2 = ['defaultOpen'];

	var UncontrolledTooltip =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(UncontrolledTooltip, _Component);

	  function UncontrolledTooltip(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.state = {
	      isOpen: props.defaultOpen || false
	    };
	    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = UncontrolledTooltip.prototype;

	  _proto.toggle = function toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  };

	  _proto.render = function render() {
	    return React__default.createElement(Tooltip, _extends({
	      isOpen: this.state.isOpen,
	      toggle: this.toggle
	    }, omit(this.props, omitKeys$2)));
	  };

	  return UncontrolledTooltip;
	}(React.Component);
	UncontrolledTooltip.propTypes = _objectSpread({
	  defaultOpen: propTypes.bool
	}, Tooltip.propTypes);

	var _extends_1 = createCommonjsModule(function (module) {
	  function _extends() {
	    module.exports = _extends = Object.assign || function (target) {
	      for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }

	      return target;
	    };

	    return _extends.apply(this, arguments);
	  }

	  module.exports = _extends;
	});

	function _defineProperty$1(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defineProperty = _defineProperty$1;

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  }
	}

	var arrayWithoutHoles = _arrayWithoutHoles;

	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}

	var iterableToArray = _iterableToArray;

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	var nonIterableSpread = _nonIterableSpread;

	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
	}

	var toConsumableArray = _toConsumableArray;

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var classCallCheck = _classCallCheck;

	var _typeof_1 = createCommonjsModule(function (module) {
	  function _typeof2(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof2 = function _typeof2(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof2 = function _typeof2(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof2(obj);
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	      module.exports = _typeof = function _typeof(obj) {
	        return _typeof2(obj);
	      };
	    } else {
	      module.exports = _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
	      };
	    }

	    return _typeof(obj);
	  }

	  module.exports = _typeof;
	});

	function _assertThisInitialized$1(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized$1;

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized(self);
	}

	var possibleConstructorReturn = _possibleConstructorReturn;

	var getPrototypeOf = createCommonjsModule(function (module) {
	  function _getPrototypeOf(o) {
	    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  module.exports = _getPrototypeOf;
	});

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var createClass = _createClass;

	var setPrototypeOf = createCommonjsModule(function (module) {
	  function _setPrototypeOf(o, p) {
	    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  module.exports = _setPrototypeOf;
	});

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) setPrototypeOf(subClass, superClass);
	}

	var inherits = _inherits;

	var throttle_1 = createCommonjsModule(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports["default"] = void 0;

	  var throttle = function throttle(fn) {
	    var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
	    var last;
	    var timer;
	    return function () {
	      var now = +new Date();
	      var timePassed = !!last && now < last + threshold;

	      if (timePassed) {
	        clearTimeout(timer);
	        timer = setTimeout(function () {
	          last = now;
	          fn();
	        }, threshold);
	      } else {
	        last = now;
	        fn();
	      }
	    };
	  };

	  var _default = throttle;
	  exports["default"] = _default;
	});
	unwrapExports(throttle_1);

	var Scrollspy_1 = createCommonjsModule(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports["default"] = void 0;

	  var _extends2 = interopRequireDefault(_extends_1);

	  var _defineProperty2 = interopRequireDefault(defineProperty);

	  var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

	  var _classCallCheck2 = interopRequireDefault(classCallCheck);

	  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

	  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf);

	  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

	  var _createClass2 = interopRequireDefault(createClass);

	  var _inherits2 = interopRequireDefault(inherits);

	  var _propTypes = interopRequireDefault(propTypes);

	  var _react = interopRequireDefault(React__default);

	  var _classnames = interopRequireDefault(classnames);

	  var _throttle = interopRequireDefault(throttle_1);

	  function isEqualArray(a, b) {
	    return a.length === b.length && a.every(function (item, index) {
	      return item === b[index];
	    });
	  }

	  var Scrollspy =
	  /*#__PURE__*/
	  function (_React$Component) {
	    (0, _inherits2["default"])(Scrollspy, _React$Component);
	    (0, _createClass2["default"])(Scrollspy, null, [{
	      key: "propTypes",
	      get: function get() {
	        return {
	          items: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
	          currentClassName: _propTypes["default"].string.isRequired,
	          scrolledPastClassName: _propTypes["default"].string,
	          style: _propTypes["default"].object,
	          componentTag: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
	          offset: _propTypes["default"].number,
	          rootEl: _propTypes["default"].string,
	          onUpdate: _propTypes["default"].func
	        };
	      }
	    }, {
	      key: "defaultProps",
	      get: function get() {
	        return {
	          items: [],
	          currentClassName: '',
	          style: {},
	          componentTag: 'ul',
	          offset: 0,
	          onUpdate: function onUpdate() {}
	        };
	      }
	    }]);

	    function Scrollspy(props) {
	      var _this;

	      (0, _classCallCheck2["default"])(this, Scrollspy);
	      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Scrollspy).call(this, props));
	      _this.state = {
	        targetItems: [],
	        inViewState: [],
	        isScrolledPast: [] // manually bind as ES6 does not apply this
	        // auto binding as React.createClass does

	      };
	      _this._handleSpy = _this._handleSpy.bind((0, _assertThisInitialized2["default"])(_this));
	      return _this;
	    }

	    (0, _createClass2["default"])(Scrollspy, [{
	      key: "_initSpyTarget",
	      value: function _initSpyTarget(items) {
	        var targetItems = items.map(function (item) {
	          return document.getElementById(item);
	        });
	        return targetItems;
	      } // https://github.com/makotot/react-scrollspy/pull/45

	    }, {
	      key: "_fillArray",
	      value: function _fillArray(array, val) {
	        var newArray = [];

	        for (var i = 0, max = array.length; i < max; i++) {
	          newArray[i] = val;
	        }

	        return newArray;
	      }
	    }, {
	      key: "_isScrolled",
	      value: function _isScrolled() {
	        return this._getScrollDimension().scrollTop > 0;
	      }
	    }, {
	      key: "_getScrollDimension",
	      value: function _getScrollDimension() {
	        var doc = document;
	        var rootEl = this.props.rootEl;
	        var scrollTop = rootEl ? doc.querySelector(rootEl).scrollTop : doc.documentElement.scrollTop || doc.body.parentNode.scrollTop || doc.body.scrollTop;
	        var scrollHeight = rootEl ? doc.querySelector(rootEl).scrollHeight : doc.documentElement.scrollHeight || doc.body.parentNode.scrollHeight || doc.body.scrollHeight;
	        return {
	          scrollTop: scrollTop,
	          scrollHeight: scrollHeight
	        };
	      }
	    }, {
	      key: "_getElemsViewState",
	      value: function _getElemsViewState(targets) {
	        var elemsInView = [];
	        var elemsOutView = [];
	        var viewStatusList = [];
	        var targetItems = targets ? targets : this.state.targetItems;
	        var hasInViewAlready = false;

	        for (var i = 0, max = targetItems.length; i < max; i++) {
	          var currentContent = targetItems[i];
	          var isInView = hasInViewAlready ? false : this._isInView(currentContent);

	          if (isInView) {
	            hasInViewAlready = true;
	            elemsInView.push(currentContent);
	          } else {
	            elemsOutView.push(currentContent);
	          }

	          var isLastItem = i === max - 1;

	          var isScrolled = this._isScrolled(); // https://github.com/makotot/react-scrollspy/pull/26#issue-167413769


	          var isLastShortItemAtBottom = this._isAtBottom() && this._isInView(currentContent) && !isInView && isLastItem && isScrolled;

	          if (isLastShortItemAtBottom) {
	            elemsOutView.pop();
	            elemsOutView.push.apply(elemsOutView, (0, _toConsumableArray2["default"])(elemsInView));
	            elemsInView = [currentContent];
	            viewStatusList = this._fillArray(viewStatusList, false);
	            isInView = true;
	          }

	          viewStatusList.push(isInView);
	        }

	        return {
	          inView: elemsInView,
	          outView: elemsOutView,
	          viewStatusList: viewStatusList,
	          scrolledPast: this.props.scrolledPastClassName && this._getScrolledPast(viewStatusList)
	        };
	      }
	    }, {
	      key: "_isInView",
	      value: function _isInView(el) {
	        if (!el) {
	          return false;
	        }

	        var _this$props = this.props,
	            rootEl = _this$props.rootEl,
	            offset = _this$props.offset;
	        var rootRect;

	        if (rootEl) {
	          rootRect = document.querySelector(rootEl).getBoundingClientRect();
	        }

	        var rect = el.getBoundingClientRect();
	        var winH = rootEl ? rootRect.height : window.innerHeight;

	        var _this$_getScrollDimen = this._getScrollDimension(),
	            scrollTop = _this$_getScrollDimen.scrollTop;

	        var scrollBottom = scrollTop + winH;
	        var elTop = rootEl ? rect.top + scrollTop - rootRect.top + offset : rect.top + scrollTop + offset;
	        var elBottom = elTop + el.offsetHeight;
	        return elTop < scrollBottom && elBottom > scrollTop;
	      }
	    }, {
	      key: "_isAtBottom",
	      value: function _isAtBottom() {
	        var rootEl = this.props.rootEl;

	        var _this$_getScrollDimen2 = this._getScrollDimension(),
	            scrollTop = _this$_getScrollDimen2.scrollTop,
	            scrollHeight = _this$_getScrollDimen2.scrollHeight;

	        var winH = rootEl ? document.querySelector(rootEl).getBoundingClientRect().height : window.innerHeight;
	        var scrolledToBottom = scrollTop + winH >= scrollHeight;
	        return scrolledToBottom;
	      }
	    }, {
	      key: "_getScrolledPast",
	      value: function _getScrolledPast(viewStatusList) {
	        if (!viewStatusList.some(function (item) {
	          return item;
	        })) {
	          return viewStatusList;
	        }

	        var hasFoundInView = false;
	        var scrolledPastItems = viewStatusList.map(function (item) {
	          if (item && !hasFoundInView) {
	            hasFoundInView = true;
	            return false;
	          }

	          return !hasFoundInView;
	        });
	        return scrolledPastItems;
	      }
	    }, {
	      key: "_spy",
	      value: function _spy(targets) {
	        var _this2 = this;

	        var elemensViewState = this._getElemsViewState(targets);

	        var currentStatuses = this.state.inViewState;
	        this.setState({
	          inViewState: elemensViewState.viewStatusList,
	          isScrolledPast: elemensViewState.scrolledPast
	        }, function () {
	          _this2._update(currentStatuses);
	        });
	      }
	    }, {
	      key: "_update",
	      value: function _update(prevStatuses) {
	        if (isEqualArray(this.state.inViewState, prevStatuses)) {
	          return;
	        }

	        this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(true)]);
	      }
	    }, {
	      key: "_handleSpy",
	      value: function _handleSpy() {
	        (0, _throttle["default"])(this._spy(), 100);
	      }
	    }, {
	      key: "_initFromProps",
	      value: function _initFromProps() {
	        var targetItems = this._initSpyTarget(this.props.items);

	        this.setState({
	          targetItems: targetItems
	        });

	        this._spy(targetItems);
	      }
	    }, {
	      key: "offEvent",
	      value: function offEvent() {
	        var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
	        el.removeEventListener('scroll', this._handleSpy);
	      }
	    }, {
	      key: "onEvent",
	      value: function onEvent() {
	        var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
	        el.addEventListener('scroll', this._handleSpy);
	      }
	    }, {
	      key: "componentDidMount",
	      value: function componentDidMount() {
	        this._initFromProps();

	        this.onEvent();
	      }
	    }, {
	      key: "componentWillUnmount",
	      value: function componentWillUnmount() {
	        this.offEvent();
	      }
	    }, {
	      key: "componentWillReceiveProps",
	      value: function componentWillReceiveProps() {
	        this._initFromProps();
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var _this3 = this;

	        var Tag = this.props.componentTag;
	        var _this$props2 = this.props,
	            children = _this$props2.children,
	            className = _this$props2.className,
	            scrolledPastClassName = _this$props2.scrolledPastClassName,
	            style = _this$props2.style;
	        var counter = 0;

	        var items = _react["default"].Children.map(children, function (child, idx) {
	          var _classNames;

	          if (!child) {
	            return null;
	          }

	          var ChildTag = child.type;
	          var isScrolledPast = scrolledPastClassName && _this3.state.isScrolledPast[idx];
	          var childClass = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(child.props.className), child.props.className), (0, _defineProperty2["default"])(_classNames, "".concat(_this3.props.currentClassName), _this3.state.inViewState[idx]), (0, _defineProperty2["default"])(_classNames, "".concat(_this3.props.scrolledPastClassName), isScrolledPast), _classNames));
	          return _react["default"].createElement(ChildTag, (0, _extends2["default"])({}, child.props, {
	            className: childClass,
	            key: counter++
	          }), child.props.children);
	        });

	        var itemClass = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(className), className));
	        return _react["default"].createElement(Tag, {
	          className: itemClass,
	          style: style
	        }, items);
	      }
	    }]);
	    return Scrollspy;
	  }(_react["default"].Component);

	  exports["default"] = Scrollspy;
	});
	var Scrollspy = unwrapExports(Scrollspy_1);

	function _defineProperty$2(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _extends$1() {
	  _extends$1 = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends$1.apply(this, arguments);
	}

	function _inheritsLoose$1(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	function _objectWithoutPropertiesLoose$1(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _assertThisInitialized$2(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var propTypes$12 = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string
	};
	var defaultProps$_ = {
	  tag: 'div'
	};
	function Accordion(props) {
	  var className = props.className,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag"]);

	  var classes = classnames('collapse-div', className);
	  return React__default.createElement(Tag, _extends$1({}, attributes, {
	    className: classes
	  }));
	}
	Accordion.propTypes = propTypes$12;
	Accordion.defaultProps = defaultProps$_;

	var propTypes$13 = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  active: propTypes.bool,
	  onToggle: propTypes.func
	};
	var defaultProps$$ = {
	  tag: 'button'
	};
	function AccordionHeader(props) {
	  var className = props.className,
	      Tag = props.tag,
	      active = props.active,
	      onToggle = props.onToggle,
	      attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag", "active", "onToggle"]);

	  var classes = classnames('collapse-header');
	  var toggleClasses = classnames(className, {
	    collapsed: active
	  });
	  return React__default.createElement("div", {
	    className: classes
	  }, React__default.createElement(Tag, _extends$1({
	    "data-toggle": "collapse",
	    "aria-expanded": active ? 'true' : 'false',
	    className: toggleClasses,
	    onClick: onToggle
	  }, attributes)));
	}
	AccordionHeader.propTypes = propTypes$13;
	AccordionHeader.defaultProps = defaultProps$$;

	var _transitionStatusToCl;
	var TransitionTimeouts$1 = TransitionTimeouts,
	    TransitionPropTypeKeys$1 = TransitionPropTypeKeys,
	    TransitionStatuses$1 = TransitionStatuses,
	    pick$1 = pick,
	    omit$1 = omit;

	var propTypes$14 = _extends$1({}, Transition.propTypes, {
	  // eslint-disable-line react/forbid-foreign-prop-types
	  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  active: propTypes.bool,
	  onToggle: propTypes.func
	});

	var defaultProps$10 = _extends$1({}, Transition.defaultProps, {
	  timeout: TransitionTimeouts$1.Collapse,
	  tag: 'div'
	});

	var transitionStatusToClassHash = (_transitionStatusToCl = {}, _transitionStatusToCl[TransitionStatuses$1.ENTERING] = 'collapsing', _transitionStatusToCl[TransitionStatuses$1.ENTERED] = 'collapse show', _transitionStatusToCl[TransitionStatuses$1.EXITING] = 'collapsing', _transitionStatusToCl[TransitionStatuses$1.EXITED] = 'collapse', _transitionStatusToCl);

	function getTransitionClass(status) {
	  return transitionStatusToClassHash[status] || 'collapse';
	}

	function getHeight(node) {
	  return node.scrollHeight;
	}

	var AccordionBody =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose$1(AccordionBody, _Component);

	  function AccordionBody() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

	    _defineProperty$2(_assertThisInitialized$2(_this), "state", {
	      height: null
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onEntering", function (node, isAppearing) {
	      _this.setState({
	        height: getHeight(node)
	      });

	      _this.props.onEntering(node, isAppearing);
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onEntered", function (node, isAppearing) {
	      _this.setState({
	        height: null
	      });

	      _this.props.onEntered(node, isAppearing);
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onExit", function (node) {
	      _this.setState({
	        height: getHeight(node)
	      });

	      _this.props.onExit(node);
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onExiting", function (node) {
	      // getting this variable triggers a reflow
	      _this.setState({
	        height: 0
	      });

	      _this.props.onExiting(node);
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onExited", function (node) {
	      _this.setState({
	        height: null
	      });

	      _this.props.onExited(node);
	    });

	    return _this;
	  }

	  var _proto = AccordionBody.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        Tag = _this$props.tag,
	        active = _this$props.active,
	        children = _this$props.children,
	        attributes = _objectWithoutPropertiesLoose$1(_this$props, ["className", "tag", "active", "children"]);

	    var height = this.state.height;
	    var transitionProps = pick$1(attributes, TransitionPropTypeKeys$1);
	    var childProps = omit$1(attributes, TransitionPropTypeKeys$1);
	    return React__default.createElement(Transition, _extends$1({}, transitionProps, {
	      "in": active,
	      onEntering: this.onEntering,
	      onEntered: this.onEntered,
	      onExit: this.onExit,
	      onExiting: this.onExiting,
	      onExited: this.onExited
	    }), function (status) {
	      var transitionClass = getTransitionClass(status);
	      var classes = classnames(className, transitionClass);
	      var style = height === null ? null : {
	        height: height
	      };
	      return React__default.createElement(Tag, _extends$1({
	        className: classes,
	        style: _extends$1({}, childProps.style, {}, style)
	      }, childProps), React__default.createElement("div", {
	        className: "collapse-body"
	      }, children));
	    });
	  };

	  return AccordionBody;
	}(React.Component);
	AccordionBody.propTypes = propTypes$14;
	AccordionBody.defaultProps = defaultProps$10;

	var propTypes$15 = {
	  color: propTypes.string,
	  pill: propTypes.bool,
	  tag: propTypes.string,
	  children: propTypes.node,
	  cssModule: propTypes.object,
	  className: propTypes.string
	};
	var defaultProps$11 = {
	  color: 'secondary',
	  pill: false,
	  tag: 'span'
	};

	var Badge$1 = function Badge$1(props) {
	  var children = props.children;
	  return React__default.createElement(Badge, props, children);
	};

	Badge$1.propTypes = propTypes$15;
	Badge$1.defaultProps = defaultProps$11;

	var _transitionStatusToCl$1;
	var mapToCssModules$1 = mapToCssModules,
	    omit$2 = omit,
	    pick$2 = pick,
	    TransitionTimeouts$2 = TransitionTimeouts,
	    TransitionPropTypeKeys$2 = TransitionPropTypeKeys,
	    TransitionStatuses$2 = TransitionStatuses;

	var propTypes$16 = _extends$1({}, Transition.propTypes, {
	  // eslint-disable-line react/forbid-foreign-prop-types
	  isOpen: propTypes.bool,
	  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.node,
	  navbar: propTypes.bool,
	  cssModule: propTypes.object
	});

	var defaultProps$12 = _extends$1({}, Transition.defaultProps, {
	  isOpen: false,
	  appear: false,
	  enter: true,
	  exit: true,
	  tag: 'div',
	  timeout: TransitionTimeouts$2.Collapse
	});

	var transitionStatusToClassHash$1 = (_transitionStatusToCl$1 = {}, _transitionStatusToCl$1[TransitionStatuses$2.ENTERING] = 'collapsing', _transitionStatusToCl$1[TransitionStatuses$2.ENTERED] = 'collapse show', _transitionStatusToCl$1[TransitionStatuses$2.EXITING] = 'collapsing', _transitionStatusToCl$1[TransitionStatuses$2.EXITED] = 'collapse', _transitionStatusToCl$1);

	function getTransitionClass$1(status) {
	  return transitionStatusToClassHash$1[status] || 'collapse';
	}

	function getHeight$1(node) {
	  return node.scrollHeight;
	}

	var Collapse =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose$1(Collapse, _Component);

	  function Collapse(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.state = {
	      height: null
	    };
	    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
	      _this[name] = _this[name].bind(_assertThisInitialized$2(_this));
	    });
	    return _this;
	  }

	  var _proto = Collapse.prototype;

	  _proto.onEntering = function onEntering(node, isAppearing) {
	    this.setState({
	      height: getHeight$1(node)
	    });
	    this.props.onEntering(node, isAppearing);
	  };

	  _proto.onEntered = function onEntered(node, isAppearing) {
	    this.setState({
	      height: null
	    });
	    this.props.onEntered(node, isAppearing);
	  };

	  _proto.onExit = function onExit(node) {
	    this.setState({
	      height: getHeight$1(node)
	    });
	    this.props.onExit(node);
	  };

	  _proto.onExiting = function onExiting(node) {
	    // getting this variable triggers a reflow
	    this.setState({
	      height: 0
	    });
	    this.props.onExiting(node);
	  };

	  _proto.onExited = function onExited(node) {
	    this.setState({
	      height: null
	    });
	    this.props.onExited(node);
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        Tag = _this$props.tag,
	        isOpen = _this$props.isOpen,
	        className = _this$props.className,
	        navbar = _this$props.navbar,
	        cssModule = _this$props.cssModule,
	        children = _this$props.children,
	        otherProps = _objectWithoutPropertiesLoose$1(_this$props, ["tag", "isOpen", "className", "navbar", "cssModule", "children"]);

	    var height = this.state.height; // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
	    // empty object "{}". This is the result of the `react-transition-group` babel
	    // configuration settings. Therefore, to ensure that production builds work without
	    // error, we can either explicitly define keys or use the Transition.defaultProps.
	    // Using the Transition.defaultProps excludes any required props. Thus, the best
	    // solution is to explicitly define required props in our utilities and reference these.
	    // This also gives us more flexibility in the future to remove the prop-types
	    // dependency in distribution builds (Similar to how `react-transition-group` does).
	    // Note: Without omitting the `react-transition-group` props, the resulting child
	    // Tag component would inherit the Transition properties as attributes for the HTML
	    // element which results in errors/warnings for non-valid attributes.

	    var transitionProps = pick$2(otherProps, TransitionPropTypeKeys$2);
	    var childProps = omit$2(otherProps, TransitionPropTypeKeys$2);
	    return React__default.createElement(Transition, _extends$1({}, transitionProps, {
	      "in": isOpen,
	      onEntering: this.onEntering,
	      onEntered: this.onEntered,
	      onExit: this.onExit,
	      onExiting: this.onExiting,
	      onExited: this.onExited
	    }), function (status) {
	      var collapseClass = getTransitionClass$1(status);
	      var classes = mapToCssModules$1(classnames(className, collapseClass, navbar && 'navbar-collapse', navbar && 'navbar-collapsable'), cssModule);
	      var style = height === null ? null : {
	        height: height // Needed for `bootstrap-italia`

	      };
	      var customStyles = isOpen ? {
	        position: 'relative',
	        display: 'block'
	      } : {};
	      return React__default.createElement(Tag, _extends$1({}, childProps, {
	        style: _extends$1({}, childProps.style, {}, style, {}, customStyles),
	        className: classes
	      }), children);
	    });
	  };

	  return Collapse;
	}(React.Component);

	Collapse.propTypes = propTypes$16;
	Collapse.defaultProps = defaultProps$12;

	var FormGroup$1 =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose$1(FormGroup$1, _Component);

	  function FormGroup$1() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

	    _defineProperty$2(_assertThisInitialized$2(_this), "state", {
	      active: _this.props.active || false,
	      value: null
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onFocus", function (callback, active) {
	      if (active === void 0) {
	        active = true;
	      }

	      _this.setState({
	        active: active
	      }, function () {
	        if (callback) {
	          callback();
	        }
	      });
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onBlur", function (callback, active) {
	      if (active === void 0) {
	        active = false;
	      }

	      _this.setState({
	        active: active
	      }, function () {
	        if (callback) {
	          callback();
	        }
	      });
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onChange", function (callback, event) {
	      var value;
	      var target;

	      if (event && event.persist) {
	        // SyntheticEvent
	        event.persist();
	        target = {
	          event: event
	        };
	        value = {
	          target: target
	        };
	      } else if (event.label) {
	        // Autocomplete
	        value = event.label;
	      }

	      _this.setState({
	        value: value
	      }, function () {
	        if (callback) {
	          callback(event);
	        }
	      });
	    });

	    return _this;
	  }

	  var _proto = FormGroup$1.prototype;

	  _proto.render = function render() {
	    var _this2 = this;

	    var _this$state = this.state,
	        active = _this$state.active,
	        value = _this$state.value;

	    var _this$props = this.props,
	        children = _this$props.children,
	        className = _this$props.className,
	        col = _this$props.col,
	        rest = _objectWithoutPropertiesLoose$1(_this$props, ["children", "className", "col"]);

	    var hasValue = !!value;
	    var classNames = [className, active ? 'active' : '', col ? 'col' : ''].join(' ');
	    return React__default.createElement(FormGroup, _extends$1({}, rest, {
	      className: classNames
	    }), function () {
	      return React__default.Children.map(children, function (child) {
	        if (child === null) return;
	        var _child$props = child.props,
	            _onFocus = _child$props.onFocus,
	            _onBlur = _child$props.onBlur,
	            _onChange = _child$props.onChange,
	            className = _child$props.className;

	        switch (child.type) {
	          case Input:
	            var isLabelActive = null;
	            return React__default.cloneElement(child, _extends$1({}, child.props, {
	              onFocus: function onFocus() {
	                _this2.onFocus(_onFocus);
	              },
	              onBlur: function onBlur() {
	                _this2.onBlur(_onBlur);
	              },
	              onChange: function onChange(e) {
	                _this2.onChange(_onChange, e);
	              }
	            }, isLabelActive));

	          case Label:
	            var hasChildValue = false;
	            React__default.Children.toArray(children).filter(function (child) {
	              switch (child.type) {
	                case Input:
	                  return true;

	                default:
	                  return false;
	              }
	            }).map(function (child) {
	              if (child.props.value) {
	                hasChildValue = true;
	              }

	              return false;
	            });
	            classNames = hasValue || hasChildValue ? [className, 'active'].join(' ') : className;
	            return React__default.cloneElement(child, _extends$1({}, child.props, {
	              className: classNames
	            }));

	          default:
	            return child;
	        }
	      });
	    }());
	  };

	  return FormGroup$1;
	}(React.Component);

	FormGroup$1.defaultProps = FormGroup.defaultProps;
	FormGroup$1.propTypes = FormGroup.propTypes;

	function Hero(props) {
	  return React__default.createElement(Jumbotron, props);
	}
	Hero.defaultProps = Jumbotron.defaultProps;
	Hero.propTypes = Jumbotron.propTypes;

	var iconSprite = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctZG93biIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuOSAxMy4ybC01LjQgNS4zVjNoLTF2MTUuNWwtNS40LTUuMy0uNy43IDYuNiA2LjUgNi42LTYuNXpNMTIgMTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctZG93bi1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjYgMTMuMmwuNy43LTQuMyA0LjMtNC4zLTQuMy43LS43IDMuMSAzLjFWN2gxdjkuMnpNMjIgMTJBMTAgMTAgMCAxIDEgMTIgMmExMCAxMCAwIDAgMSAxMCAxMHptLTEgMGE5IDkgMCAxIDAtOSA5IDkgOSAwIDAgMCA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctZG93bi10cmlhbmdsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS4yIDEyaDUuNmExIDEgMCAwIDEgLjcgMS43TDEyIDE3LjNsLTMuNS0zLjZhMSAxIDAgMCAxIC43LTEuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy1sZWZ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMSAxMS41SDUuNWw1LjMtNS40LS43LS43TDMuNiAxMmw2LjUgNi42LjctLjctNS4zLTUuNEgyMXpNNSAxMnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy1sZWZ0LWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy43IDExLjVIMTd2MUg3LjhsMyAzLjEtLjcuN0w1LjggMTJsNC4zLTQuMy43Ljd6TTIyIDEyQTEwIDEwIDAgMSAxIDEyIDJhMTAgMTAgMCAwIDEgMTAgMTB6bS0xIDBhOSA5IDAgMSAwLTkgOSA5IDkgMCAwIDAgOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWFycm93LWxlZnQtdHJpYW5nbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDkuMnY1LjZhMSAxIDAgMCAxLTEuNy43TDYuOCAxMmwzLjUtMy41YTEgMSAwIDAgMSAxLjcuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy1yaWdodCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuOSA1LjRsLS43LjcgNS4zIDUuNEgzdjFoMTUuNWwtNS4zIDUuNC43LjcgNi42LTYuNnpNMTkgMTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctcmlnaHQtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMy45IDcuN2w0LjMgNC4zLTQuMyA0LjMtLjctLjcgMy4xLTMuMUg3di0xaDkuMmwtMy0zLjF6TTIyIDEyQTEwIDEwIDAgMSAxIDEyIDJhMTAgMTAgMCAwIDEgMTAgMTB6bS0xIDBhOSA5IDAgMSAwLTkgOSA5IDkgMCAwIDAgOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWFycm93LXJpZ2h0LXRyaWFuZ2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAxNC44VjkuMmExIDEgMCAwIDEgMS43LS43bDMuNSAzLjUtMy41IDMuNWExIDEgMCAwIDEtMS43LS43eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWFycm93LXVwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOC42IDEwLjFMMTIgMy41bC02LjYgNi42LjcuNyA1LjQtNS4zVjIxaDFWNS41bDUuNCA1LjN6TTEyIDV6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctdXAtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiA1LjhsNC4zIDQuMy0uNy43LTMuMS0zLjFWMTdoLTFWNy44bC0zLjEgMy0uNy0uN3pNMjIgMTJBMTAgMTAgMCAxIDEgMTIgMmExMCAxMCAwIDAgMSAxMCAxMHptLTEgMGE5IDkgMCAxIDAtOSA5IDkgOSAwIDAgMCA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctdXAtdHJpYW5nbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjggMTJIOS4yYTEgMSAwIDAgMS0uNy0xLjdMMTIgNi44bDMuNSAzLjVhMSAxIDAgMCAxLS43IDEuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1iZWhhbmNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNNy44MyA1Ljc1YTggOCAwIDAgMSAxLjYuMTUgMy4zOCAzLjM4IDAgMCAxIDEuMjQuNTFjLjM0NS4yMzMuNjIuNTU0LjguOTMuMjAyLjQ1Ni4yOTguOTUyLjI4IDEuNDVhMi42OCAyLjY4IDAgMCAxLS40MiAxLjU0IDMuMDUgMy4wNSAwIDAgMS0xLjI1IDEgMi45MiAyLjkyIDAgMCAxIDEuNjggMS4xNWMuMzkzLjU5LjU5IDEuMjkuNTYgMmEzLjM5IDMuMzkgMCAwIDEtLjMyIDEuNTkgMy4wOCAzLjA4IDAgMCAxLTEgMS4xMSA0LjI3IDQuMjcgMCAwIDEtMS40LjY0QTYgNiAwIDAgMSA4IDE4SDJWNS43NWg1Ljgzem0tLjM1IDVhMiAyIDAgMCAwIDEuMTktLjM1Yy4zMjgtLjI3LjUtLjY4Ny40Ni0xLjExQTEuNDcgMS40NyAwIDAgMCA5IDguNTRhMS4xNiAxLjE2IDAgMCAwLS40Mi0uNDNBMS44IDEuOCAwIDAgMCA4IDcuOWEzLjI2IDMuMjYgMCAwIDAtLjctLjA2SDQuNzR2Mi44N2wyLjc0LjA0em0uMTUgNS4yMmMuMjUyLjAwMy41MDMtLjAyLjc1LS4wN2EyIDIgMCAwIDAgLjYyLS4zIDEuMzkgMS4zOSAwIDAgMCAuNDQtLjQ5IDEuNzMgMS43MyAwIDAgMCAuMTYtLjhBMS42NCAxLjY0IDAgMCAwIDkuMDkgMTNhMi4zMyAyLjMzIDAgMCAwLTEuNDEtLjRINC43NHYzLjM4bDIuODktLjAxem04LjU0LS4wOGEyLjE4IDIuMTggMCAwIDAgMS41OC41NCAyLjI0IDIuMjQgMCAwIDAgMS4yNS0uMzcgMS42IDEuNiAwIDAgMCAuNjUtLjc5aDIuMTVhNC4wNiA0LjA2IDAgMCAxLTEuNTggMi4yOSA0LjY0IDQuNjQgMCAwIDEtMi41OC42OSA1LjIzIDUuMjMgMCAwIDEtMS45LS4zMyA0IDQgMCAwIDEtMi4zMy0yLjQ0IDUuMjUgNS4yNSAwIDAgMS0uMzItMS44OSA1LjEyIDUuMTIgMCAwIDEgLjMzLTEuODYgNC4xNCA0LjE0IDAgMCAxIC45My0xLjQ5IDQuNDggNC40OCAwIDAgMSAxLjQ0LTEgNC41OSA0LjU5IDAgMCAxIDEuODUtLjM2IDQuMzEgNC4zMSAwIDAgMSAyIC40NEE0IDQgMCAwIDEgMjEgMTAuNWMuMzcuNTA1LjYzNiAxLjA4Ljc4IDEuNjlhNi4xOCA2LjE4IDAgMCAxIC4xNyAyaC02LjM4YTIuNSAyLjUgMCAwIDAgLjYgMS43ek0xOSAxMS4yMmExLjgzIDEuODMgMCAwIDAtMS4zOC0uNDkgMiAyIDAgMCAwLTEgLjIgMS44IDEuOCAwIDAgMC0uNjIuNDkgMS42MiAxLjYyIDAgMCAwLS4zMy42MiAyLjg3IDIuODcgMCAwIDAtLjExLjU5aDRhMi40IDIuNCAwIDAgMC0uNTYtMS40MXptLTMuOTMtNC42NWg0Ljk4djEuMjFoLTQuOThWNi41N3oiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWJ1cmdlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjIgNXYxSDJWNXpNMiAxMi41aDIwdi0xSDJ6TTIgMTloMjB2LTFIMnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jYWxlbmRhciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSA0SDE3VjNoLTF2MUg4VjNIN3YxSDMuNUExLjUgMS41IDAgMCAwIDIgNS41djEzQTEuNSAxLjUgMCAwIDAgMy41IDIwaDE3YTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtMTNBMS41IDEuNSAwIDAgMCAyMC41IDR6bS41IDE0LjVhLjUuNSAwIDAgMS0uNS41aC0xN2EuNS41IDAgMCAxLS41LS41di0xM2EuNS41IDAgMCAxIC41LS41SDd2MWgxVjVoOHYxaDFWNWgzLjVhLjUuNSAwIDAgMSAuNS41ek00IDhoMTZ2MUg0eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNhbWVyYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSAyMGgtMTdBMS41IDEuNSAwIDAgMSAyIDE4LjV2LTEwQTEuNSAxLjUgMCAwIDEgMy41IDdoNC4zbDEuNS0yLjNhMS41IDEuNSAwIDAgMSAxLjItLjdoM2ExLjUgMS41IDAgMCAxIDEuMi43TDE2LjIgN2g0LjNBMS41IDEuNSAwIDAgMSAyMiA4LjV2MTBhMS41IDEuNSAwIDAgMS0xLjUgMS41ek0zLjUgOGEuNS41IDAgMCAwLS41LjV2MTBhLjUuNSAwIDAgMCAuNS41aDE3YS41LjUgMCAwIDAgLjUtLjV2LTEwYS41LjUgMCAwIDAtLjUtLjVoLTQuOGwtMS44LTIuOC0uNC0uMmgtM2wtLjQuMkw4LjMgOHpNMTIgMThhNSA1IDAgMSAxIDUtNSA1IDUgMCAwIDEtNSA1em0wLTlhNCA0IDAgMSAwIDQgNCA0IDQgMCAwIDAtNC00ek03IDVINHYxaDN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2FyZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSA1aC0xN0ExLjUgMS41IDAgMCAwIDIgNi41djExQTEuNSAxLjUgMCAwIDAgMy41IDE5aDE3YTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtMTFBMS41IDEuNSAwIDAgMCAyMC41IDV6TTMgOWgxOHYzSDN6bTE4IDguNWEuNS41IDAgMCAxLS41LjVoLTE3YS41LjUgMCAwIDEtLjUtLjVWMTNoMTh6TTMgOFY2LjVhLjUuNSAwIDAgMSAuNS0uNWgxN2EuNS41IDAgMCAxIC41LjVWOHptNSA3SDR2LTFoNHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jaGVjayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS42IDE2LjlMNCAxMS40bC44LS43IDQuOCA0LjggOC41LTguNC43Ljd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2hlY2stY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNy4xIDcuOWwuNy43LTcuOCA3LjYtNC43LTQuNi43LS43IDQgMy45ek0yMiAxMkExMCAxMCAwIDEgMSAxMiAyYTEwIDEwIDAgMCAxIDEwIDEwem0tMSAwYTkgOSAwIDEgMC05IDkgOSA5IDAgMCAwIDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jaGV2cm9uLWxlZnQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjYgMTcuMkw5IDExLjYgMTQuNiA2bC44LjctNC45IDQuOSA0LjkgNC45eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2hldnJvbi1yaWdodCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS44IDE3LjJsLS44LS43IDQuOS00LjlMOSA2LjdsLjgtLjcgNS42IDUuNnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNsaXAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDIyYTIuOSAyLjkgMCAwIDEtMy0zVjZhNCA0IDAgMCAxIDggMHYxMGgtMVY2YTMgMyAwIDAgMC02IDB2MTNhMiAyIDAgMCAwIDQgMFY4YTEgMSAwIDAgMC0yIDB2OGgtMVY4YTIgMiAwIDAgMSA0IDB2MTFhMi45IDIuOSAwIDAgMS0zIDN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xvY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjUgNWgxdjcuNUg3di0xaDQuNXpNMjIgMTJBMTAgMTAgMCAxIDEgMTIgMmExMCAxMCAwIDAgMSAxMCAxMHptLTEgMGE5IDkgMCAxIDAtOSA5IDkgOSAwIDAgMCA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xvc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjcgMTJsMy43IDMuNi0uOC44LTMuNi0zLjctMy42IDMuNy0uOC0uOCAzLjctMy42LTMuNy0zLjYuOC0uOCAzLjYgMy43IDMuNi0zLjcuOC44eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNsb3NlLWJpZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNyAxMmw2LjcgNi42LS44LjgtNi42LTYuNy02LjYgNi43LS44LS44IDYuNy02LjYtNi43LTYuNi44LS44IDYuNiA2LjcgNi42LTYuNy44Ljh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xvc2UtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNi4zIDguM0wxMi42IDEybDMuNyAzLjYtLjcuNy0zLjctMy42LTMuNiAzLjYtLjctLjcgMy42LTMuNi0zLjYtMy43LjctLjcgMy42IDMuNyAzLjctMy43ek0yMiAxMkExMCAxMCAwIDEgMSAxMiAyYTEwIDEwIDAgMCAxIDEwIDEwem0tMSAwYTkgOSAwIDEgMC05IDkgOSA5IDAgMCAwIDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jb2RlLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkgMTJsLTIuOSAyLjktLjctLjggMi4xLTIuMS0yLjEtMi4xLjctLjh6TTcuOSA5LjFMNSAxMmwyLjkgMi45LjctLjhMNi41IDEybDIuMS0yLjF6TTIyIDEyQTEwIDEwIDAgMSAxIDEyIDJhMTAgMTAgMCAwIDEgMTAgMTB6bS0xIDBhOSA5IDAgMSAwLTkgOSA5IDkgMCAwIDAgOS05ek05LjYgMTYuNWwxIC4zIDMuNy05LjMtLjktLjN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29sbGFwc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjUgMTUuNGwtNC45LTQuOS00LjkgNC45LS43LS44TDExLjYgOWw1LjYgNS42eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29tbWVudCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkgM0g1YTIgMiAwIDAgMC0yIDJ2MTBhMiAyIDAgMCAwIDIgMmgydjUuNGwxLjctMS43IDMuNy0zLjdIMTlhMiAyIDAgMCAwIDItMlY1YTIgMiAwIDAgMC0yLTJ6bTEgMTJhLjkuOSAwIDAgMS0xIDFoLTdsLTQgNHYtNEg1YS45LjkgMCAwIDEtMS0xVjVhLjkuOSAwIDAgMSAxLTFoMTRhLjkuOSAwIDAgMSAxIDF6TTkgMTBhLjkuOSAwIDAgMS0xIDEgLjkuOSAwIDAgMS0xLTEgLjkuOSAwIDAgMSAxLTEgLjkuOSAwIDAgMSAxIDF6bTQgMGExIDEgMCAwIDEtMiAwIDEgMSAwIDAgMSAyIDB6bTQgMGExIDEgMCAwIDEtMiAwIDEgMSAwIDAgMSAyIDB6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29weSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkuNSA0SDE4di0uNkExLjUgMS41IDAgMCAwIDE2LjUgMmgtMTFBMS41IDEuNSAwIDAgMCA0IDMuNHYxNS4yQTEuNSAxLjUgMCAwIDAgNS41IDIwSDd2LjZBMS41IDEuNSAwIDAgMCA4LjUgMjJoMTFhMS41IDEuNSAwIDAgMCAxLjUtMS40VjUuNEExLjUgMS41IDAgMCAwIDE5LjUgNHpNNSAxOC42VjMuNGEuNS41IDAgMCAxIC41LS40aDExYS41LjUgMCAwIDEgLjUuNHYxNS4yYS41LjUgMCAwIDEtLjUuNGgtMTFhLjUuNSAwIDAgMS0uNS0uNHptMTUgMmEuNS41IDAgMCAxLS41LjRoLTExYS41LjUgMCAwIDEtLjUtLjRWMjBoOC41YTEuNSAxLjUgMCAwIDAgMS41LTEuNFY1aDEuNWEuNS41IDAgMCAxIC41LjR6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZGVzaWduZXJzLWl0YWxpYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC42NjMgMjAuNjc1VjcuNjQxSDEyLjN2MTMuMDU3SDguNjYzdi0uMDIzek0yMi45NTIgMTAuNjFoLTMuMzI1djUuMzU3YzAgLjUzNC4wMjQuODgyLjA0OCAxLjExMy4wMjQuMjEuMTIuMzk1LjI4OS41NTcuMTY5LjE2Mi40MzQuMjMyLjc5NS4yMzJsMi4wNzItLjA0Ni4xNjkgMi43ODNjLTEuMjA1LjI1NS0yLjE0NS4zOTQtMi43NzEuMzk0LTEuNjM5IDAtMi43NDctLjM0OC0zLjMyNS0xLjA2Ny0uNjAzLS42OTYtLjg5Mi0xLjk5NC0uODkyLTMuODk2VjRoMy42Mzl2My42MThoMy4zMjV2Mi45OTJoLS4wMjR6bS0xOS43Ni45OTdjLS42MjYgMC0xLjE1Ni0uMjA5LTEuNTY1LS42MjZBMi4xMTMgMi4xMTMgMCAwIDEgMSA5LjQ1YzAtLjYwNC4yMTctMS4xMTQuNjAyLTEuNTMxLjQxLS40MTguOTQtLjYwMyAxLjU2Ny0uNjAzLjYyNiAwIDEuMTU2LjIwOCAxLjU2Ni42MjYuNDEuNDE3LjYwMi45MjcuNjAyIDEuNTU0IDAgLjYyNi0uMTkyIDEuMTEzLS42MDIgMS41My0uMzg2LjM3MS0uODkyLjU4LTEuNTQyLjU4eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZG93bmxvYWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDE0LjJMNy43IDkuOWwuNy0uNyAzLjEgMy4xVjNoMXY5LjJsMy4xLTMgLjcuN3ptNy0yLjJ2Ny41YS41LjUgMCAwIDEtLjUuNWgtMTNhLjUuNSAwIDAgMS0uNS0uNVYxMkg0djcuNUExLjUgMS41IDAgMCAwIDUuNSAyMWgxM2ExLjUgMS41IDAgMCAwIDEuNS0xLjVWMTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZXJyb3IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjUgMTQuMlY1LjdoMS4ydjguNXptLS4xIDQuMWgxLjJ2LTEuOGgtMS4yek0yMiA3Ljl2OC4zTDE2LjEgMjJINy45TDIgMTYuMlY3LjlMNy45IDJoOC4yem0tMSAuNEwxNS43IDNIOC4zTDMgOC4zdjcuNUw4LjMgMjFoNy40bDUuMy01LjJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZXhjaGFuZ2UtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyYTEwIDEwIDAgMSAwIDEwIDEwQTEwIDEwIDAgMCAwIDEyIDJ6bTAgMTlhOSA5IDAgMSAxIDktOSA5IDkgMCAwIDEtOSA5em01LjEtOC45bC44LjgtNC4zIDQuM2ExLjUgMS41IDAgMCAxLTEuMS40IDEuNSAxLjUgMCAwIDEtMS4xLS40TDkgMTQuN1YxN0g4di00aDR2MUg5LjdsMi40IDIuNWguOHptLTYtNC42bC00LjIgNC40LS44LS44IDQuMy00LjNhMS41IDEuNSAwIDAgMSAxLjEtLjQgMS41IDEuNSAwIDAgMSAxLjEuNEwxNSA5LjNWN2gxdjRoLTR2LTFoMi4zbC0yLjQtMi41aC0uOHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1leHBhbmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjYgMTUuNEw2IDkuOGwuNy0uOCA0LjkgNC45TDE2LjUgOWwuNy44eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZXh0ZXJuYWwtbGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEgM3Y2aC0xVjQuN2wtNy42IDcuNy0uOC0uOEwxOS4zIDRIMTVWM3ptLTQgMTYuNWEuNS41IDAgMCAxLS41LjVoLTEyYS41LjUgMCAwIDEtLjUtLjV2LTEyYS41LjUgMCAwIDEgLjUtLjVIMTJWNkg0LjVBMS41IDEuNSAwIDAgMCAzIDcuNXYxMkExLjUgMS41IDAgMCAwIDQuNSAyMWgxMmExLjUgMS41IDAgMCAwIDEuNS0xLjVWMTJoLTF6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZmFjZWJvb2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xMy41NSAyMnYtOS4xMWgzLjA3bC40Ni0zLjU2aC0zLjUzVjcuMDVjMC0xIC4yOS0xLjczIDEuNzctMS43M2gxLjg3VjIuMTRBMjUuMTQgMjUuMTQgMCAwIDAgMTQuNDUgMmMtMi43MiAwLTQuNTggMS42Ni00LjU4IDQuN3YyLjYySDYuODF2My41N2gzLjA2VjIyaDMuNjh6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mYWNlYm9vay1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0yMCAzSDRhMSAxIDAgMCAwLTEgMXYxNmExIDEgMCAwIDAgMSAxaDguNjN2LTYuOTVoLTIuMzd2LTIuNzRoMi4zNHYtMmEzLjI4IDMuMjggMCAwIDEgMy41LTMuNmMuNzA1IDAgMS40MS4wNCAyLjExLjEydjIuNDRoLTEuNDRjLTEuMTMgMC0xLjM0LjUzLTEuMzQgMS4zMnYxLjc0aDIuN2wtLjM1IDIuNzJoLTIuMzV2N0gyMGExIDEgMCAwIDAgMS0xVjRhMSAxIDAgMCAwLTEtMXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWZpbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjcgMkg2LjVBMS41IDEuNSAwIDAgMCA1IDMuNXYxN0ExLjUgMS41IDAgMCAwIDYuNSAyMmgxMWExLjUgMS41IDAgMCAwIDEuNS0xLjVWNi4zem0uMyAxLjdMMTcuMyA2aC0xLjhhLjUuNSAwIDAgMS0uNS0uNXpNMTcuNSAyMWgtMTFhLjUuNSAwIDAgMS0uNS0uNXYtMTdhLjUuNSAwIDAgMSAuNS0uNUgxNHYyLjVBMS41IDEuNSAwIDAgMCAxNS41IDdIMTh2MTMuNWEuNS41IDAgMCAxLS41LjV6TTggOWg4djFIOHptMCAyaDh2MUg4em0wIDJoNHYxSDh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZmlsZXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjcgMkg3LjVBMS41IDEuNSAwIDAgMCA2IDMuNVY0aC0uNUExLjUgMS41IDAgMCAwIDQgNS41djE1QTEuNSAxLjUgMCAwIDAgNS41IDIyaDExYTEuNSAxLjUgMCAwIDAgMS41LTEuNVYyMGguNWExLjUgMS41IDAgMCAwIDEuNS0xLjVWNi4zem0uMyAxLjdMMTguMyA2aC0xLjhhLjUuNSAwIDAgMS0uNS0uNXptMSAxNi44YS41LjUgMCAwIDEtLjUuNWgtMTFhLjUuNSAwIDAgMS0uNS0uNXYtMTVhLjUuNSAwIDAgMSAuNS0uNUg2djEzLjVBMS41IDEuNSAwIDAgMCA3LjUgMjBIMTd6bTEuNS0xLjVoLTExYS41LjUgMCAwIDEtLjUtLjV2LTE1YS41LjUgMCAwIDEgLjUtLjVIMTV2Mi41QTEuNSAxLjUgMCAwIDAgMTYuNSA3SDE5djExLjVhLjUuNSAwIDAgMS0uNS41ek05IDloOHYxSDl6bTAgMmg4djFIOXptMCAyaDR2MUg5eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWZsaWNrciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PGNpcmNsZSBjeD0iNi43MyIgY3k9IjEyIiByPSI0LjczIi8+PGNpcmNsZSBjeD0iMTcuMjciIGN5PSIxMiIgcj0iNC43MyIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZmxpY2tyLXNxdWFyZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTIwIDRhMy4yNiAzLjI2IDAgMCAwLTIuMzgtMUg2LjM4QTMuMjYgMy4yNiAwIDAgMCA0IDRhMy4yNiAzLjI2IDAgMCAwLTEgMi4zN3YxMS4yNUEzLjI2IDMuMjYgMCAwIDAgNCAyMGEzLjI2IDMuMjYgMCAwIDAgMi4zOSAxaDExLjI0QTMuMzggMy4zOCAwIDAgMCAyMSAxNy42MlY2LjM3QTMuMjYgMy4yNiAwIDAgMCAyMCA0em0tOS41NiA5Ljc3YTIuNSAyLjUgMCAwIDEtMy41MSAwIDIuNDkgMi40OSAwIDAgMSAwLTMuNTIgMi41IDIuNSAwIDAgMSAzLjUxIDAgMi40OSAyLjQ5IDAgMCAxIDAgMy41MnptNi42MSAwQTIuNDkgMi40OSAwIDAgMSAxMi44MiAxMmEyLjQ5IDIuNDkgMCAwIDEgNC4yNC0xLjc2IDIuNDkgMi40OSAwIDAgMSAwIDMuNTJsLS4wMS4wMXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWZvbGRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgNmgtOGwtMi0ySDRhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJWOGEyIDIgMCAwIDAtMi0yem0xIDEyYS45LjkgMCAwIDEtMSAxSDRhLjkuOSAwIDAgMS0xLTFWNmEuOS45IDAgMCAxIDEtMWg1LjZsMS43IDEuNy4zLjNIMjBhLjkuOSAwIDAgMSAxIDF6TTQgOGgxNnYxSDR6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZ2l0aHViIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDAgMC0zLjE2IDE5LjQ5Yy41LjA5LjY4LS4yMi42OC0uNDh2LTEuN0M2LjczIDE5LjkxIDYuMTQgMTggNi4xNCAxOEEyLjY5IDIuNjkgMCAwIDAgNSAxNi41Yy0uOTEtLjYyLjA3LS42MS4wNy0uNjFhMi4xMyAyLjEzIDAgMCAxIDEuNTMgMSAyLjE0IDIuMTQgMCAwIDAgMi45MS44MyAyLjE2IDIuMTYgMCAwIDEgLjYzLTEuMzRjLTIuMTQtLjIxLTQuNTItMS4wNy00LjUyLTQuOWEzLjg5IDMuODkgMCAwIDEgMS0yLjY5IDMuNTcgMy41NyAwIDAgMSAuMS0yLjY0cy44NC0uMjcgMi43NSAxYTkuNjMgOS42MyAwIDAgMSA1IDBjMS45MS0xLjI5IDIuNzUtMSAyLjc1LTEgLjM3LjgzNS40MDUgMS43OC4xIDIuNjRhMy44OSAzLjg5IDAgMCAxIDEgMi42OWMwIDMuODQtMi4zNCA0LjY4LTQuNTcgNC45My40ODIuNDkuNzMgMS4xNjQuNjggMS44NXYyLjc1YzAgLjMzLjE4LjU4LjY5LjQ4QTEwIDEwIDAgMCAwIDEyIDJ6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1oZWFyaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMCA5YTYuOCA2LjggMCAwIDEtMy41IDZsLTIgMS4xYTMuMyAzLjMgMCAwIDAtMS41IDIuN0EzLjIgMy4yIDAgMCAxIDkuOCAyMmgtLjZhMy40IDMuNCAwIDAgMS0zLTIuMWwuOS0uNUEyLjMgMi4zIDAgMCAwIDkuMiAyMWguNmEyLjEgMi4xIDAgMCAwIDEuNi0uNyAyIDIgMCAwIDAgLjYtMS41IDQgNCAwIDAgMSAyLTMuNWwyLTEuMkE1LjkgNS45IDAgMCAwIDE5IDlhNiA2IDAgMCAwLTYtNiA2IDYgMCAwIDAtNC44IDIuNGwtLjgtLjZBNyA3IDAgMCAxIDEzIDJhNyA3IDAgMCAxIDcgN3pNNy41IDEyQTUuNSA1LjUgMCAwIDAgMiA2LjV2MWE0LjUgNC41IDAgMCAxIDAgOXYxQTUuNSA1LjUgMCAwIDAgNy41IDEyek01IDEyYTIuOSAyLjkgMCAwIDAtMy0zdjFhMiAyIDAgMCAxIDAgNHYxYTIuOSAyLjkgMCAwIDAgMy0zem01IDBhOCA4IDAgMCAwLTgtOHYxYTcgNyAwIDAgMSAwIDE0djFhOCA4IDAgMCAwIDgtOHptNS45LjNhNC41IDQuNSAwIDAgMCAxLjItMy4yIDQuNSA0LjUgMCAwIDAtMS4yLTMuMiA0LjUgNC41IDAgMCAwLTMuMi0xLjRBNC44IDQuOCAwIDAgMCA5LjUgNmwtLjMuMy4yLjNhOC44IDguOCAwIDAgMSAxLjMgM3YuNGguNGExLjUgMS41IDAgMCAxIDAgM3YxYTIuNSAyLjUgMCAwIDAgMi41LTIuNSAyLjYgMi42IDAgMCAwLTItMi41IDguNSA4LjUgMCAwIDAtMS4xLTIuNiAzLjkgMy45IDAgMCAxIDIuMi0uOSAzLjUgMy41IDAgMCAxIDIuNCAxIDMuNSAzLjUgMCAwIDEgMSAyLjYgMy41IDMuNSAwIDAgMS0xIDIuNnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1oZWxwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMi44IDIyaC0xLjR2LTIuMWgxLjR6bS0uMS00LjloLTEuMmE5LjcgOS43IDAgMCAxLS4xLTEuNyAyLjcgMi43IDAgMCAxIC4zLTEuMiA1LjYgNS42IDAgMCAxIC43LTEuM2wyLjMtMi4xYTkuNiA5LjYgMCAwIDAgMS44LTIuMSA0LjUgNC41IDAgMCAwIC41LTIuMyAzIDMgMCAwIDAtMS4xLTIuNiA2LjIgNi4yIDAgMCAwLTMuNC0uNyAyMi45IDIyLjkgMCAwIDAtMy42LjVsLTEgLjMtLjItMS4yaC4xYTE4LjEgMTguMSAwIDAgMSA0LjctLjggNy40IDcuNCAwIDAgMSA0LjMgMSA0LjIgNC4yIDAgMCAxIDEuNCAzLjUgNSA1IDAgMCAxLS41IDIuNyA4LjYgOC42IDAgMCAxLTEuOSAyLjIgMTkuNyAxOS43IDAgMCAwLTEuOCAxLjYgNi4yIDYuMiAwIDAgMC0uOSAxLjIgMi4zIDIuMyAwIDAgMC0uNCAxLjR6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtaGVscC1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJhMTAgMTAgMCAxIDAgMTAgMTBBMTAgMTAgMCAwIDAgMTIgMnptMCAxOWE5IDkgMCAxIDEgOS05IDkgOSAwIDAgMS05IDl6bS0xLjItNC41SDEydjEuOGgtMS4yem00LjUtOGE0LjIgNC4yIDAgMCAxLS4zIDEuOCA1LjQgNS40IDAgMCAxLTEuMyAxLjRMMTIuMyAxM2EyLjggMi44IDAgMCAwLS40IDEuMnYuNkgxMWEzIDMgMCAwIDEtLjItMSAyLjEgMi4xIDAgMCAxIC41LTEuMiA5IDkgMCAwIDEgMS40LTEuNCA2LjQgNi40IDAgMCAwIDEuMi0xLjMgMi42IDIuNiAwIDAgMCAuMy0xLjQgMS43IDEuNyAwIDAgMC0uNi0xLjQgMy41IDMuNSAwIDAgMC0yLS40TDkuMyA3aC0uNXYtLjhhMTAuMiAxMC4yIDAgMCAxIDMtLjUgNC45IDQuOSAwIDAgMSAyLjcuNiAyLjcgMi43IDAgMCAxIC44IDIuMnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1ob3JuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01IDlhMyAzIDAgMCAwIDAgNmguNUw3IDE5LjNBMi41IDIuNSAwIDAgMCA5LjMgMjFoLjJhMS40IDEuNCAwIDAgMCAxLjItLjYgMS40IDEuNCAwIDAgMCAuMi0xLjRsLTEuMy00aDEuOGw4LjYgMy44VjQuN0wxMS40IDl6bTUgMTAuM2EuNy43IDAgMCAxLS4xLjVsLS40LjJoLS4yYTEuNSAxLjUgMCAwIDEtMS40LTFsLTEuMy00aDEuOXpNNSAxNGEyIDIgMCAwIDEgMC00aDZ2NHptMTQgMy4ybC03LTNWOS44bDctMy41ek0yMiA5djZoLTFWOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1pbmZvLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDEgMCAxMCAxMEExMCAxMCAwIDAgMCAxMiAyem0wIDE5YTkgOSAwIDEgMSA5LTkgOSA5IDAgMCAxLTkgOXptLS43LTE1aDEuNXYyaC0xLjV6bTAgM2gxLjV2OWgtMS41eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWluc3RhZ3JhbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTEyIDQuNjJsLS4wMS4wOEg4LjM1YTUuMTIgNS4xMiAwIDAgMC0xLjY3LjMxYy0uMzguMTUtLjcyLjM4Mi0xIC42OC0uMjk4LjI4LS41My42Mi0uNjggMWE1LjEyIDUuMTIgMCAwIDAtLjMgMS42OHY3LjI4Yy4wMS41Ny4xMTQgMS4xMzQuMzEgMS42Ny4xNS4zOC4zODIuNzIuNjggMSAuMjguMjk4LjYyLjUzIDEgLjY4LjUzNi4xOTYgMS4xLjMgMS42Ny4zMS45NS4wNSAxLjI0LjA1IDMuNjQuMDUgMi40IDAgMi42NC0uMDUgMy42NC0uMDVhNS4xMiA1LjEyIDAgMCAwIDEuNjctLjMxQTMuMDggMy4wOCAwIDAgMCAxOSAxNy4zMWE1LjEyIDUuMTIgMCAwIDAgLjMtMS42OGMuMDUtLjk1LjA1LTEuMjQuMDUtMy42NCAwLTIuNC0uMDUtMi42NC0uMDUtMy42NGE1LjEyIDUuMTIgMCAwIDAtLjMxLTEuNjcgMi43NyAyLjc3IDAgMCAwLS42OC0xIDIuNzcgMi43NyAwIDAgMC0xLS42OCA1LjEyIDUuMTIgMCAwIDAtMS42Ny0uMzhIMTJ6TTEyIDN2LjA1aDMuNzFhNi45IDYuOSAwIDAgMSAyLjE5LjQyIDQuNjQgNC42NCAwIDAgMSAyLjY4IDIuNjNBNi45IDYuOSAwIDAgMSAyMSA4LjI5YzAgLjk2LjA1IDEuMjcuMDUgMy43MVMyMSAxNC43MSAyMSAxNS43MWE2LjkgNi45IDAgMCAxLS40NyAyLjI0IDQuNjQgNC42NCAwIDAgMS0yLjYzIDIuNjMgNi45IDYuOSAwIDAgMS0yLjE5LjQyYy0uOTYuMDUtMS4yNy4wNS0zLjcxLjA1UzkuMjkgMjEgOC4yOSAyMWE2LjkgNi45IDAgMCAxLTIuMTktLjQ3IDQuNjQgNC42NCAwIDAgMS0yLjYzLTIuNjMgNi45IDYuOSAwIDAgMS0uNDItMi4xOVYxMiA4LjI5YTYuOSA2LjkgMCAwIDEgLjQyLTIuMTlBNC42NCA0LjY0IDAgMCAxIDYuMSAzLjQyIDYuOSA2LjkgMCAwIDEgOC4yOSAzSDEyem0wIDQuMzhhNC42MiA0LjYyIDAgMSAxIDAgOS4yNCA0LjYyIDQuNjIgMCAwIDEgMC05LjI0ek0xMiAxNWEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTQuOC02LjcyYTEuMDggMS4wOCAwIDEgMSAwLTIuMTYgMS4wOCAxLjA4IDAgMCAxIDAgMi4xNnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWtleSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTggMTBhMiAyIDAgMSAwIDIgMiAyIDIgMCAwIDAtMi0yem0wIDNhMSAxIDAgMSAxIDEtMSAuOS45IDAgMCAxLTEgMXptLTEtNmE1LjEgNS4xIDAgMCAwLTQuNiAzSDMuM2wtMiAyIDMgM0g3di0xaC4zbDEgMUgxMXYtMWgxLjRhNS4xIDUuMSAwIDAgMCA0LjYgMyA1IDUgMCAwIDAgMC0xMHptMCA5YTQuMSA0LjEgMCAwIDEtMy44LTIuN1YxM0gxMHYxSDguN2wtMS0xSDZ2MUg0LjdsLTItMiAxLTFoOS40di0uM0E0LjEgNC4xIDAgMCAxIDE3IDhhNCA0IDAgMCAxIDAgOHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1sZXNzLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgM2E5IDkgMCAwIDEgNi4zNiAxNS4zNkE5IDkgMCAwIDEgNS42NCA1LjYyIDguOTMgOC45MyAwIDAgMSAxMiAzbTAtMWExMCAxMCAwIDEgMCA3LjA3IDIuOTNBOS45MyA5LjkzIDAgMCAwIDEyIDJ6Ii8+PHJlY3QgeD0iNyIgeT0iMTEuMjUiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxLjUiIHJ4PSIuNzUiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjQgMTMuNGwtLjctLjdhMi45IDIuOSAwIDAgMCAuOS0yLjEgMi43IDIuNyAwIDAgMC0uOS0yLjFMOS4yIDQuOWEzLjIgMy4yIDAgMCAwLTQuMyAwIDMuMiAzLjIgMCAwIDAgMCA0LjNMNy44IDEybC0uNy43LTIuOS0yLjhhNC4yIDQuMiAwIDAgMSAwLTUuNyA0LjIgNC4yIDAgMCAxIDUuNyAwbDMuNSAzLjZhMy42IDMuNiAwIDAgMSAxLjIgMi44IDMuNiAzLjYgMCAwIDEtMS4yIDIuOHptNi40IDYuNGE0LjIgNC4yIDAgMCAwIDAtNS43bC0yLjktMi44LS43LjcgMi45IDIuOGEzLjIgMy4yIDAgMCAxIDAgNC4zIDMuMiAzLjIgMCAwIDEtNC4zIDBsLTMuNS0zLjZhMi43IDIuNyAwIDAgMS0uOS0yLjEgMi45IDIuOSAwIDAgMSAuOS0yLjFsLS43LS43YTMuNiAzLjYgMCAwIDAtMS4yIDIuOCAzLjYgMy42IDAgMCAwIDEuMiAyLjhsMy41IDMuNmEzLjggMy44IDAgMCAwIDIuOCAxLjEgMy45IDMuOSAwIDAgMCAyLjktMS4xem0tNi43LTYuNyIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxpbmtlZGluIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTYuNTMgOC42OEEzLjk0IDMuOTQgMCAwIDAgMTMgMTAuNjJWOUg5LjM3djEyaDMuNzN2LTUuOTVjMC0xLjU3LjI5LTMuMDkgMi4yNC0zLjA5IDEuOTUgMCAxLjkzIDEuOCAxLjkzIDMuMTlWMjFIMjF2LTYuNmMwLTMuMjMtLjY5LTUuNzItNC40Ny01Ljcyek01LjE2IDNhMi4xNyAyLjE3IDAgMSAwIDIuMTYgMi4xOEEyLjE2IDIuMTYgMCAwIDAgNS4xNiAzek0zLjI5IDl2MTJIN1Y5SDMuMjl6bTEzLjI0LS4zQTMuOTQgMy45NCAwIDAgMCAxMyAxMC42MlY5SDkuMzd2MTJoMy43M3YtNS45NWMwLTEuNTcuMjktMy4wOSAyLjI0LTMuMDkgMS45NSAwIDEuOTMgMS44IDEuOTMgMy4xOVYyMUgyMXYtNi42YzAtMy4yMy0uNjktNS43Mi00LjQ3LTUuNzJ2LjAyek0zLjI5IDIxSDdWOUgzLjI5djEyek01LjE2IDNhMi4xNyAyLjE3IDAgMSAwIDIuMTYgMi4xOEEyLjE2IDIuMTYgMCAwIDAgNS4xNiAzeiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbGlua2VkaW4tc3F1YXJlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTkuNjcgM0g0LjMzQTEuMzIgMS4zMiAwIDAgMCAzIDQuM3YxNS40QTEuMzIgMS4zMiAwIDAgMCA0LjMzIDIxaDE1LjM0QTEuMzIgMS4zMiAwIDAgMCAyMSAxOS43VjQuM0ExLjMyIDEuMzIgMCAwIDAgMTkuNjcgM3pNOC4zNCAxOC4zNEg1LjY3VjkuNzVoMi42N3Y4LjU5ek03IDguNTdBMS41NSAxLjU1IDAgMSAxIDguNTUgNyAxLjU0IDEuNTQgMCAwIDEgNyA4LjU3em0xMS4zNCA5Ljc3aC0yLjY3di00LjE4YzAtMSAwLTIuMjgtMS4zOS0yLjI4cy0xLjYgMS4wOS0xLjYgMi4yMXY0LjI1SDEwVjkuNzVoMi41NnYxLjE3YTIuODMgMi44MyAwIDAgMSAyLjUzLTEuMzljMi43IDAgMy4yIDEuNzggMy4yIDQuMWwuMDUgNC43MXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxpc3QiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgMTJhLjkuOSAwIDAgMS0xIDEgMSAxIDAgMCAxIDAtMiAuOS45IDAgMCAxIDEgMXpNMyA0LjVhLjkuOSAwIDAgMC0xIDEgLjkuOSAwIDAgMCAxIDEgLjkuOSAwIDAgMCAxLTEgLjkuOSAwIDAgMC0xLTF6bTAgMTNhMSAxIDAgMCAwIDAgMiAxIDEgMCAwIDAgMC0yek02IDV2MWgxNlY1em0wIDcuNWgxNnYtMUg2ek02IDE5aDE2di0xSDZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbG9jayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTguNSA4LjVIMTdWOEE1IDUgMCAwIDAgNyA4di41SDUuNUExLjUgMS41IDAgMCAwIDQgMTB2OC41QTEuNSAxLjUgMCAwIDAgNS41IDIwaDEzYTEuNSAxLjUgMCAwIDAgMS41LTEuNVYxMGExLjUgMS41IDAgMCAwLTEuNS0xLjV6TTggOGE0IDQgMCAwIDEgOCAwdi41SDh6bTExIDEwLjVhLjUuNSAwIDAgMS0uNS41aC0xM2EuNS41IDAgMCAxLS41LS41VjEwYS41LjUgMCAwIDEgLjUtLjVoMTNhLjUuNSAwIDAgMSAuNS41eiIvPjxwYXRoIGQ9Ik0xMiAxMy4yNWExIDEgMCAxIDEtMSAxIDEgMSAwIDAgMSAxLTFtMC0xYTIgMiAwIDEgMCAyIDIgMiAyIDAgMCAwLTItMnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxvY2tlZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYuNSAxMkgxNlY3YTQgNCAwIDAgMC04IDB2NWgtLjVhMS4xIDEuMSAwIDAgMC0xLjEgMS4xdjYuOEExLjEgMS4xIDAgMCAwIDcuNSAyMWg5YTEuMSAxLjEgMCAwIDAgMS4xLTEuMXYtNi44YTEuMSAxLjEgMCAwIDAtMS4xLTEuMXpNOSA3YTMgMyAwIDAgMSA2IDB2NUg5em03LjYgMTIuOWEuMS4xIDAgMCAxLS4xLjFoLTlhLjEuMSAwIDAgMS0uMS0uMXYtNi44aDkuMnpNMTMgMTUuNWEuOC44IDAgMCAxLS41Ljh2MS41aC0xdi0xLjVhLjguOCAwIDAgMS0uNS0uOCAxIDEgMCAwIDEgMiAweiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1haWwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjUgNWgtMTdBMS41IDEuNSAwIDAgMCAyIDYuNXYxMUExLjUgMS41IDAgMCAwIDMuNSAxOWgxN2ExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTExQTEuNSAxLjUgMCAwIDAgMjAuNSA1em0tLjMgMWwtNy4xIDcuMmExLjYgMS42IDAgMCAxLTIuMiAwTDMuOCA2ek0zIDE3LjNWNi42TDguMyAxMnptLjcuN0w5IDEyLjdsMS4yIDEuMmEyLjcgMi43IDAgMCAwIDMuNiAwbDEuMi0xLjIgNS4zIDUuM3ptMTItNkwyMSA2LjZ2MTAuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1tZWRpdW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik01IDcuNjNBLjcyLjcyIDAgMCAwIDQuODIgN0wzLjEzIDV2LS4zaDUuMjJsNCA4Ljg0IDMuNTQtOC44NGg1VjVsLTEuNDIgMS40YS40My40MyAwIDAgMC0uMTYuNHYxMC4xMmEuNDUuNDUgMCAwIDAgLjE2LjQxbDEuNCAxLjM3di4zaC03di0uM2wxLjQ1LTEuNDFjLjE0LS4xNC4xNC0uMTguMTQtLjRWOC43MUwxMS4zNyAxOWgtLjU1TDYuMTIgOC43MXY2Ljg4YS45My45MyAwIDAgMCAuMjYuNzlsMS44OSAyLjI5VjE5SDIuOTF2LS4zbDEuODktMi4zMmEuOTIuOTIgMCAwIDAgLjItLjc5VjcuNjN6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1tZWRpdW0tc3F1YXJlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMyAzaDE4djE4SDNWM3ptNC4zIDExLjM2YS42NC42NCAwIDAgMS0uMTcuNTRsLTEuMjcgMS41NHYuMmgzLjZ2LS4yTDguMTkgMTQuOWEuNjcuNjcgMCAwIDEtLjE5LS41NFY5Ljc0bDMuMTYgNi45aC4zN2wyLjcxLTYuOXY1LjVjMCAuMTUgMCAuMTctLjA5LjI3bC0xIDF2LjJoNC43NHYtLjJsLS44OS0uOThhLjI3LjI3IDAgMCAxLS4xMS0uMjd2LTYuOGEuMjguMjggMCAwIDEgLjExLS4yN2wxLS45M3YtLjJoLTMuMzlMMTIuMjMgMTMgOS41MiA3LjA2SDZ2LjJsMS4xNCAxLjM2QS41LjUgMCAwIDEgNy4zIDl2NS4zNnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1pbnVzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMCAxMi41SDR2LTFoMTZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWludXMtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02LjkgMTEuNWgxMHYxaC0xMHpNMjIgMTJBMTAgMTAgMCAxIDEgMTIgMmExMCAxMCAwIDAgMSAxMCAxMHptLTEgMGE5IDkgMCAxIDAtOSA5IDkgOSAwIDAgMCA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbW9yZS1hY3Rpb25zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02IDEwYTIgMiAwIDEgMCAyIDIgMiAyIDAgMCAwLTItMnptMCAzYTEgMSAwIDAgMSAwLTIgMSAxIDAgMCAxIDAgMnptNi0zYTIgMiAwIDEgMCAyIDIgMiAyIDAgMCAwLTItMnptMCAzYTEgMSAwIDEgMSAxLTEgLjkuOSAwIDAgMS0xIDF6bTYtM2EyIDIgMCAxIDAgMiAyIDIgMiAwIDAgMC0yLTJ6bTAgM2ExIDEgMCAxIDEgMS0xIC45LjkgMCAwIDEtMSAxeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1vcmUtaXRlbXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDE4YTEgMSAwIDEgMS0xIDEgLjkuOSAwIDAgMSAxLTFtMC0xYTIgMiAwIDEgMCAyIDIgMiAyIDAgMCAwLTItMnptMC02YTEgMSAwIDEgMS0xIDEgLjkuOSAwIDAgMSAxLTFtMC0xYTIgMiAwIDEgMCAyIDIgMiAyIDAgMCAwLTItMnptMC02YS45LjkgMCAwIDEgMSAxIDEgMSAwIDAgMS0yIDAgLjkuOSAwIDAgMSAxLTFtMC0xYTIgMiAwIDEgMCAyIDIgMiAyIDAgMCAwLTItMnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1ub3RlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOC41IDRoLTEzQTEuNSAxLjUgMCAwIDAgNCA1LjV2MTNBMS41IDEuNSAwIDAgMCA1LjUgMjBoMTAuMmw0LjMtNC4zVjUuNUExLjUgMS41IDAgMCAwIDE4LjUgNHpNNSAxOC41di0xM2EuNS41IDAgMCAxIC41LS41aDEzYS41LjUgMCAwIDEgLjUuNVYxNWgtMi41YTEuNSAxLjUgMCAwIDAtMS41IDEuNVYxOUg1LjVhLjUuNSAwIDAgMS0uNS0uNXpNMTguMyAxNkwxNiAxOC4zdi0xLjhhLjUuNSAwIDAgMSAuNS0uNXpNMTYgOUg4VjhoOHptMCAySDh2LTFoOHptLTIgMXYxSDh2LTF6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMgMjFoMTh2MUgzem0wLTFoMTh2LTFIM3pNMjIgOUgybDEwLTd6TTUuMiA4aDEzLjZMMTIgMy4yek02IDE4di04SDV2OHptNCAwdi04SDl2OHptNSAwdi04aC0xdjh6bTQgMHYtOGgtMXY4eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBhc3N3b3JkLWludmlzaWJsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMTJhMy4yIDMuMiAwIDAgMC0uNy0xLjlsLjQtMS4xYTQuMiA0LjIgMCAwIDEgMS4zIDMgNCA0IDAgMCAxLTMuOSA0bC40LTEuMUEyLjkgMi45IDAgMCAwIDE1IDEyek0zLjEgMTJBOS44IDkuOCAwIDAgMSAxMiA2LjVoLjRsLjQtLjlIMTJhMTAuOSAxMC45IDAgMCAwLTkuOCA2TDIgMTJsLjIuNWExMSAxMSAwIDAgMCA2LjEgNS4zbC4zLS45QTkuOCA5LjggMCAwIDEgMy4xIDEyem0xOC43LS41YTExIDExIDAgMCAwLTYuMS01LjNsLS4zLjlhOS44IDkuOCAwIDAgMSA1LjUgNC45IDkuOCA5LjggMCAwIDEtOC45IDUuNWgtLjRsLS40LjloLjhhMTAuOSAxMC45IDAgMCAwIDkuOC02bC4yLS40ek0xMS41IDkuMWwuNC0xLjFBNCA0IDAgMCAwIDggMTJhNC4yIDQuMiAwIDAgMCAxLjMgM2wuNC0xLjFBMy4yIDMuMiAwIDAgMSA5IDEyYTIuOSAyLjkgMCAwIDEgMi41LTIuOXptMy4xLTUuN0w4LjUgMjAuM2wuOS4zIDYuMS0xNi45eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBhc3N3b3JkLXZpc2libGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxLjggMTEuNWExMSAxMSAwIDAgMC0xOS42IDBMMiAxMmwuMi41YTExIDExIDAgMCAwIDE5LjYgMGwuMi0uNXptLTkuOCA2QTkuOCA5LjggMCAwIDEgMy4xIDEyIDkuOCA5LjggMCAwIDEgMTIgNi41YTkuOCA5LjggMCAwIDEgOC45IDUuNSA5LjggOS44IDAgMCAxLTguOSA1LjV6TTEyIDhhNCA0IDAgMSAwIDQgNCA0IDQgMCAwIDAtNC00em0wIDdhMyAzIDAgMSAxIDMtMyAyLjkgMi45IDAgMCAxLTMgM3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1wZW5jaWwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjUgMy41YTIuOSAyLjkgMCAwIDAtMi4xLS45IDMuMSAzLjEgMCAwIDAtMi4yLjlMNC42IDE1LjJsLTEgNS4yIDUuMi0xTDIwLjUgNy44YTMgMyAwIDAgMCAwLTQuM3ptLTUuNyAyLjhsLjctLjcgMi45IDIuOS0uNy43em0tLjcuOGwxLjEgMS04LjQgOC40LTEuMS0xLjF6TTUuNyAxOC4zYS43LjcgMCAwIDAtLjYtLjNsLjMtMS41IDIuMSAyLjEtMS41LjNhLjcuNyAwIDAgMC0uMy0uNnptMi45IDBsLTEuMS0xLjEgOC40LTguNCAxIDEuMXpNMTkuOCA3LjFsLS43LjctMi45LTIuOS43LS43YTIuMiAyLjIgMCAwIDEgMS41LS42IDIgMiAwIDAgMSAxLjQuNiAyLjEgMi4xIDAgMCAxIDAgMi45eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBpbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTguMSAxNEwxNSAxMC4zVjQuNkwxNi4zIDJINy43TDkgNC42djUuN0w1LjkgMTRoNS42djhoMXYtOHpNMTAgNWg0djVoLTR6bTQuNy0ybC0uNSAxSDkuOGwtLjUtMXptLTUgOGg0LjZsMS42IDJIOC4xeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBsdXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDEyLjVoLTcuNVYyMGgtMXYtNy41SDR2LTFoNy41VjRoMXY3LjVIMjB6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGx1cy1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjQgMTEuNWg0LjV2MWgtNC41VjE3aC0xdi00LjVINi45di0xaDQuNVY3aDF6bTkuNi41QTEwIDEwIDAgMSAxIDEyIDJhMTAgMTAgMCAwIDEgMTAgMTB6bS0xIDBhOSA5IDAgMSAwLTkgOSA5IDkgMCAwIDAgOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXByZXNlbnRhdGlvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA1djEwLjZBMi40IDIuNCAwIDAgMCA2LjQgMThoMy4xbC0xLjEgNGgxbDEuMS00aDIuN2wxLjIgNGgxbC0xLjItNGgzLjVhMi4zIDIuMyAwIDAgMCAyLjMtMi4zVjV6bTE1IDEwLjdhMS4zIDEuMyAwIDAgMS0xLjMgMS4zSDYuNEExLjQgMS40IDAgMCAxIDUgMTUuNlY2aDE0ek0yMSAzdjFIM1Yzem0tOSAxM2E0LjUgNC41IDAgMSAwLTQuNS00LjVBNC41IDQuNSAwIDAgMCAxMiAxNnptLS41LTcuOVYxMUg4LjZhMy40IDMuNCAwIDAgMSAyLjktMi45em0xIDMuOVY4YTMuNSAzLjUgMCAwIDEtLjUgNyAzLjQgMy40IDAgMCAxLTMuNC0zeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXByaW50IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMSA5LjVBMS41IDEuNSAwIDAgMCAxOS41IDhIMTdWM0g3djVINC41QTEuNSAxLjUgMCAwIDAgMyA5LjVWMTZoMnYzaDJ2MmgxMHYtMmgydi0zaDJ6TTggNGg4djRIOHpNNiAxOHYtNGgxdjR6bTEwIDJIOHYtNmg4djZ6bTItMmgtMXYtNGgxdjR6bTItM2gtMXYtMkg1djJINFY5LjVhLjUuNSAwIDAgMSAuNS0uNWgxNWEuNS41IDAgMCAxIC41LjV6TTYgMTFoNHYxSDZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtc2VhcmNoIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMS45IDIxLjFMMTYgMTUuM2E4LjMgOC4zIDAgMCAwIDItNS4zIDggOCAwIDEgMC04IDggOC4zIDguMyAwIDAgMCA1LjMtMmw1LjggNS45ek0xMCAxN2E3IDcgMCAxIDEgNy03IDcgNyAwIDAgMS03IDd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtc2V0dGluZ3MiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDcuNWE0LjUgNC41IDAgMSAwIDQuNSA0LjVBNC41IDQuNSAwIDAgMCAxMiA3LjV6bTAgOGEzLjUgMy41IDAgMSAxIDMuNS0zLjUgMy41IDMuNSAwIDAgMS0zLjUgMy41em05LjgtMS42QTEyLjMgMTIuMyAwIDAgMCAyMiAxMmExMi4zIDEyLjMgMCAwIDAtLjItMS45bC0yLjEtLjNhOC43IDguNyAwIDAgMC0uNy0xLjdsMS4zLTEuN2E4LjcgOC43IDAgMCAwLTIuNy0yLjdMMTUuOSA1bC0xLjctLjctLjMtMi4xTDEyIDJsLTEuOS4yLS4zIDIuMS0xLjcuNy0xLjctMS4zYTguNyA4LjcgMCAwIDAtMi43IDIuN0w1IDguMWE4LjcgOC43IDAgMCAwLS43IDEuN2wtMi4xLjNBMTIuMyAxMi4zIDAgMCAwIDIgMTJhMTIuMyAxMi4zIDAgMCAwIC4yIDEuOWwyLjEuM2E4LjcgOC43IDAgMCAwIC43IDEuN2wtMS4zIDEuN2E4LjcgOC43IDAgMCAwIDIuNyAyLjdMOC4xIDE5bDEuNy43LjMgMi4xIDEuOS4yIDEuOS0uMi4zLTIuMSAxLjctLjcgMS43IDEuM2E4LjcgOC43IDAgMCAwIDIuNy0yLjdMMTkgMTUuOWE4LjcgOC43IDAgMCAwIC43LTEuN3ptLTIuOS0uN2wtLjIuN2EzLjkgMy45IDAgMCAxLS42IDEuNWwtLjMuNi40LjUuOCAxLjFhOS4zIDkuMyAwIDAgMS0xLjQgMS40bC0xLjEtLjgtLjUtLjQtLjYuM2EzLjkgMy45IDAgMCAxLTEuNS42bC0uNy4ydi43bC0uMiAxLjNoLTJsLS4yLTEuM3YtLjdsLS43LS4yYTMuOSAzLjkgMCAwIDEtMS41LS42bC0uNi0uMy0uNS40LTEuMS44QTkuMyA5LjMgMCAwIDEgNSAxNy42bC44LTEuMS40LS41LS4zLS42YTMuOSAzLjkgMCAwIDEtLjYtMS41bC0uMi0uN2gtLjdMMy4xIDEzYTMuNCAzLjQgMCAwIDEtLjEtMSAzLjQgMy40IDAgMCAxIC4xLTFsMS4zLS4yaC43bC4yLS43YTMuOSAzLjkgMCAwIDEgLjYtMS41bC4zLS42LS40LS41TDUgNi40IDYuNCA1bDEuMS44LjUuNC42LS4zYTMuOSAzLjkgMCAwIDEgMS41LS42bC43LS4ydi0uN2wuMi0xLjNoMmwuMiAxLjN2LjdsLjcuMmEzLjkgMy45IDAgMCAxIDEuNS42bC42LjMuNS0uNCAxLjEtLjhBOS4zIDkuMyAwIDAgMSAxOSA2LjRsLS44IDEuMS0uNC41LjMuNmEzLjkgMy45IDAgMCAxIC42IDEuNWwuMi43aC43bDEuMy4yYTMuNCAzLjQgMCAwIDEgLjEgMSAzLjQgMy40IDAgMCAxLS4xIDFsLTEuMy4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXNoYXJlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNy41IDE1YTIuNSAyLjUgMCAwIDAtMiAxbC03LjYtMy40QTEuMyAxLjMgMCAwIDAgOCAxMmExLjMgMS4zIDAgMCAwLS4xLS42TDE1LjUgOGEyLjUgMi41IDAgMSAwLS41LTEuNSAxLjMgMS4zIDAgMCAwIC4xLjZsLTcuNiAzLjRhMi41IDIuNSAwIDEgMCAwIDNsNy42IDMuNGExLjMgMS4zIDAgMCAwLS4xLjYgMi41IDIuNSAwIDEgMCAyLjUtMi41em0wLTEwQTEuNSAxLjUgMCAwIDEgMTkgNi41YTEuNSAxLjUgMCAwIDEtMyAwQTEuNSAxLjUgMCAwIDEgMTcuNSA1em0tMTIgOC41YTEuNSAxLjUgMCAwIDEgMC0zIDEuNSAxLjUgMCAwIDEgMCAzem0xMiA1LjVhMS41IDEuNSAwIDEgMSAxLjUtMS41IDEuNSAxLjUgMCAwIDEtMS41IDEuNXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1zdGFyLWZ1bGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDEuN0w5LjUgOS4ySDEuNkw4IDEzLjlsLTIuNCA3LjYgNi40LTQuNyA2LjQgNC43LTIuNC03LjYgNi40LTQuN2gtNy45TDEyIDEuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1zdGFyLW91dGxpbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDQuOWwxLjUgNC42LjIuN2g1LjdsLTQgMi45LS42LjQuMi43IDEuNSA0LjctMy45LTIuOS0uNi0uNC0uNi40LTMuOSAyLjlMOSAxNC4ybC4yLS43LS42LS40LTQtMi45aDUuN2wuMi0uN0wxMiA0LjltMC0zLjJMOS41IDkuMkgxLjZMOCAxMy45bC0yLjQgNy42IDYuNC00LjcgNi40IDQuNy0yLjQtNy42IDYuNC00LjdoLTcuOUwxMiAxLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdGVhbS1kaWdpdGFsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjMuNjQ4IDI0SC4zNTJBLjM1My4zNTMgMCAwIDEgMCAyMy42NDhWLjM1MkMwIC4xNTguMTU4IDAgLjM1MiAwaDIzLjI5NmMuMTk0IDAgLjM1Mi4xNTguMzUyLjM1MnYyMy4yOTZhLjM1My4zNTMgMCAwIDEtLjM1Mi4zNTJ6TTUuODE0IDExLjc5MmExLjU5NiAxLjU5NiAwIDEgMCAwLTMuMTkyIDEuNTk2IDEuNTk2IDAgMCAwIDAgMy4xOTJ6TTEwIDE4Ljk5NFYxOWg0LjQxOEMxOS4xMyAxOSAyMCAxNi42ODUgMjAgMTIuMjUzIDIwIDcuOTMgMTguOTk1IDYgMTQuNDE4IDZIMTB2MTIuOTk0em00LjQxOC0xMC43MDJjMi41ODYgMCAyLjgzOCAxLjExIDIuODM4IDMuOTU1IDAgMi44OS0uMjUyIDQuNDU1LTIuODM4IDQuNDU1aC0xLjc1NnYtOC40MWgxLjc1NnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXRlbGVwaG9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSAzaC4xOE0yMCAxMS41NkE3LjU5IDcuNTkgMCAwIDAgMTIuNDggNGgtLjA2YS40OS40OSAwIDAgMC0uNDkuNDguNS41IDAgMCAwIC40OS41MUE2LjYxIDYuNjEgMCAwIDEgMTkgMTEuNjJhLjUxLjUxIDAgMCAwIC41NC40Ni40OS40OSAwIDAgMCAuNDUtLjQ2cy4wMS0uMDQuMDEtLjA2eiIvPjxwYXRoIGQ9Ik0xNi45MyAxMS42OGE0LjUgNC41IDAgMCAwLTQuNDgtNC40OC41MS41MSAwIDAgMCAwIDEgMy41IDMuNSAwIDAgMSAzLjQ5IDMuNDkuNS41IDAgMCAwIC41LjUuNTEuNTEgMCAwIDAgLjUtLjUxek0xNS42OCAyMS4xOWExMy4zMiAxMy4zMiAwIDAgMS0xMi44LTEzLjEuOTIuOTIgMCAwIDEgLjYyLS44OGMxLjc0LS41NiA0LTEgNC43LjA2YTcuMzkgNy4zOSAwIDAgMSAuODUgMi45MXYuMjFhMS40OCAxLjQ4IDAgMCAxLS43IDEuNjguODEuODEgMCAwIDAtLjQ5LjcxIDEyLjU1IDEyLjU1IDAgMCAwIDMuMzggMy41MS44OC44OCAwIDAgMCAuNDgtLjU2Yy4wOS0uNTMuNTgtMSAxLjctLjg1aC4yMWE3IDcgMCAwIDEgMi44NS44N2MxIC43Mi42MiAzIC4wOSA0LjcyYTEgMSAwIDAgMS0uODkuNzJ6TTYuNTUgNy41MmE5LjUgOS41IDAgMCAwLTIuNzguNTUgMTIuNDEgMTIuNDEgMCAwIDAgMTEuOTEgMTIuMjJjLjczLTIuMjYuNjYtMy41NC4zMS0zLjc4YTYuNjYgNi42NiAwIDAgMC0yLjQ2LS43MmgtLjIyYy0uMzIgMC0uNjUgMC0uNjguMTJhMS45IDEuOSAwIDAgMS0xLjI3IDEuMzRsLS4yMS4wNy0uMTUtLjE1YTEzLjQ0IDEzLjQ0IDAgMCAxLTMuOS00TDcgMTNhMS42OCAxLjY4IDAgMCAxIDEtMS43Yy4xMi0uMDcuMzMtLjE4LjI1LS43NXYtLjIyYTYuODQgNi44NCAwIDAgMC0uNy0yLjU0Yy0uMi0uMTgtLjU1LS4yNy0xLS4yN3oiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXRvb2wiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNyA1YTMuMSAzLjEgMCAwIDEgMS43LjUgMy4xIDMuMSAwIDAgMSAxLjYgMyAzIDMgMCAwIDAgLjggMi40bDYuMyA2LjNhMSAxIDAgMCAxIC4yIDEuMyAxIDEgMCAwIDEtLjguNS45LjkgMCAwIDEtLjctLjNsLTYuNC02LjRhMyAzIDAgMCAwLTIuMS0uOGgtLjZhMi44IDIuOCAwIDAgMS0yLjItMWgyLjdWNi40SDUuMWEyLjcgMi43IDAgMCAxIDEuMS0xQTIuOCAyLjggMCAwIDEgNy43IDVtMC0xYTQuNiA0LjYgMCAwIDAtMiAuNSA0LjEgNC4xIDAgMCAwLTIuMSAyLjloMy42djIuMUgzLjdhNS40IDUuNCAwIDAgMCAxIDEuOCA0LjQgNC40IDAgMCAwIDMgMS4yaC42YTIuNCAyLjQgMCAwIDEgMS40LjVsNi40IDYuNGEyIDIgMCAwIDAgMS40LjYgMS45IDEuOSAwIDAgMCAxLjYtLjkgMiAyIDAgMCAwLS4zLTIuNmwtNi4zLTYuM2ExLjggMS44IDAgMCAxLS41LTEuNiA0LjQgNC40IDAgMCAwLTItNEE0LjYgNC42IDAgMCAwIDcuNyA0eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXR3aXR0ZXIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik04LjA4IDIwYTEwLjkzIDEwLjkzIDAgMCAwIDExLTExdi0uNWE4IDggMCAwIDAgMS45Mi0yIDcuODUgNy44NSAwIDAgMS0yLjIyLjYxQTMuODkgMy44OSAwIDAgMCAyMC40OCA1YTggOCAwIDAgMS0yLjQ4LjkxIDMuODcgMy44NyAwIDAgMC02LjU5IDMuNTIgMTEgMTEgMCAwIDEtOC00IDMuODUgMy44NSAwIDAgMCAxLjE5IDUuMTYgMy43NiAzLjc2IDAgMCAxLTEuNzUtLjQ4QTMuODcgMy44NyAwIDAgMCA2IDEzLjkxYTMuNzMgMy43MyAwIDAgMS0xIC4xNCA0LjMgNC4zIDAgMCAxLS43My0uMDUgMy44NyAzLjg3IDAgMCAwIDMuNjEgMi42OCA3LjczIDcuNzMgMCAwIDEtNC44IDEuNjYgNyA3IDAgMCAxLS45Mi0uMDZBMTAuOSAxMC45IDAgMCAwIDguMDggMjAiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXR3aXR0ZXItc3F1YXJlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTkuNSAyMmgtMTVBMi41IDIuNSAwIDAgMSAyIDE5LjV2LTE1QTIuNSAyLjUgMCAwIDEgNC41IDJoMTVBMi41IDIuNSAwIDAgMSAyMiA0LjV2MTVhMi41IDIuNSAwIDAgMS0yLjUgMi41em0tOS44Mi00LjkyQTcuMjQgNy4yNCAwIDAgMCAxNyA5Ljc5di0uMzNhNS4yMiA1LjIyIDAgMCAwIDEuMjgtMS4zMyA1LjIyIDUuMjIgMCAwIDEtMS40OC40IDIuNTYgMi41NiAwIDAgMCAxLjE0LTEuNDIgNC45MyA0LjkzIDAgMCAxLTEuNjQuNjIgMi41MyAyLjUzIDAgMCAwLTEuODYtLjgxIDIuNTcgMi41NyAwIDAgMC0yLjU3IDIuNTdjLjAwMy4xOTUuMDI2LjM5LjA3LjU4YTcuMjYgNy4yNiAwIDAgMS01LjMyLTIuNjggMi41OSAyLjU5IDAgMCAwIC44IDMuNDMgMi43OCAyLjc4IDAgMCAxLTEuMTYtLjMyIDIuNTcgMi41NyAwIDAgMCAyLjA1IDIuNTIgMi40NiAyLjQ2IDAgMCAxLTEuMTUuMDQgMi41NSAyLjU1IDAgMCAwIDIuMzkgMS43OEE1LjEzIDUuMTMgMCAwIDEgNi4zNyAxNmE2LjA4IDYuMDggMCAwIDEtLjYxIDAgNy4yMyA3LjIzIDAgMCAwIDMuOTIgMS4xNHYtLjA2eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdW5sb2NrZWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjUgMTJIMTZWNmE0IDQgMCAwIDAtOCAwdjNoMVY2YTMgMyAwIDAgMSA2IDB2Nkg3LjVhMS4xIDEuMSAwIDAgMC0xLjEgMS4xdjYuOEExLjEgMS4xIDAgMCAwIDcuNSAyMWg5YTEuMSAxLjEgMCAwIDAgMS4xLTEuMXYtNi44YTEuMSAxLjEgMCAwIDAtMS4xLTEuMXptLjEgNy45YS4xLjEgMCAwIDEtLjEuMWgtOWEuMS4xIDAgMCAxLS4xLS4xdi02LjhoOS4yek0xMyAxNS41YS44LjggMCAwIDEtLjUuOHYxLjVoLTF2LTEuNWEuOC44IDAgMCAxLS41LS44IDEgMSAwIDAgMSAyIDB6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdXBsb2FkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04LjQgNy4zbC0uNy0uN0wxMiAyLjNsNC4zIDQuMy0uNy43LTMuMS0zLjF2OS4zaC0xVjQuMnpNMTkgMTJ2Ny41YS41LjUgMCAwIDEtLjUuNWgtMTNhLjUuNSAwIDAgMS0uNS0uNVYxMkg0djcuNUExLjUgMS41IDAgMCAwIDUuNSAyMWgxM2ExLjUgMS41IDAgMCAwIDEuNS0xLjVWMTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdXNlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMTNhNCA0IDAgMCAwIDQtNFY2YTQgNCAwIDAgMC04IDB2M2E0IDQgMCAwIDAgNCA0ek05IDZhMyAzIDAgMCAxIDYgMHYzYTMgMyAwIDAgMS02IDB6bTExIDE2aC0xYTcgNyAwIDAgMC0xNCAwSDRhOCA4IDAgMCAxIDE2IDB6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdmlkZW8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjUgNy4zVjZBMS41IDEuNSAwIDAgMCAxNiA0LjVINS41QTEuNSAxLjUgMCAwIDAgNCA2djhhMS41IDEuNSAwIDAgMCAxLjUgMS41aDMuNEw3LjQgMjFoMWwxLjYtNS41aDEuOGwxLjYgNS41aDFsLTEuNi01LjVIMTZhMS41IDEuNSAwIDAgMCAxLjUtMS41di0xLjNsNCAxLjVWNS44em0zIDUuNWwtNC0xLjVWMTRhLjUuNSAwIDAgMS0uNS41SDUuNUEuNS41IDAgMCAxIDUgMTRWNmEuNS41IDAgMCAxIC41LS41SDE2YS41LjUgMCAwIDEgLjUuNXYyLjdsNC0xLjV6TTIgOGgxdjRIMnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC13YXJuaW5nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMi41IDE3aC0xVjJoMXptMCAzaC0xdjJoMXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC13YXJuaW5nLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDEgMCAxMCAxMEExMCAxMCAwIDAgMCAxMiAyem0wIDE5YTkgOSAwIDEgMSA5LTkgOSA5IDAgMCAxLTkgOXptLS41LTYuOFY1LjdoMS4ydjguNXptLS4xIDIuM2gxLjJ2MS44aC0xLjJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtd2hhdHNhcHAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xOS4wOSA0LjYzYTEwIDEwIDAgMCAwLTE1LjY4IDEyTDIgMjEuOGw1LjI4LTEuMzhBMTAgMTAgMCAwIDAgMTIgMjEuNjNhMTAgMTAgMCAwIDAgNy4wNS0xN2guMDR6TTEyIDIwYTguMTggOC4xOCAwIDAgMS00LjIxLTEuMTZsLS4zMS0uMTgtMy4xMy44My44NC0zLjA2LS4xOS0uMzZBOC4yOCA4LjI4IDAgMSAxIDEyIDIwem00LjU0LTYuMmMtLjI1LS4xMy0xLjQ3LS43My0xLjctLjgxLS4yMy0uMDgtLjM5LS4xMy0uNTYuMTItLjI0Ni4zNDctLjUxLjY4LS43OSAxLS4xNC4xNi0uMjkuMTgtLjU0LjA2YTYuOTIgNi45MiAwIDAgMS0yLTEuMjMgNy4yNyA3LjI3IDAgMCAxLTEuMzgtMS43M2MtLjE1LS4yNSAwLS4zOC4xMS0uNTFzLjI1LS4yOS4zNy0uNDNhMS41MSAxLjUxIDAgMCAwIC4yNS0uNDIuNDYuNDYgMCAwIDAgMC0uNDNjLS4wNC0uMi0uNTQtMS40Mi0uNzUtMS45Mi0uMjEtLjUtLjQtLjQyLS41Ni0uNDNoLS40N2ExIDEgMCAwIDAtLjY3LjMxQTIuODEgMi44MSAwIDAgMCA3IDkuNDUgNC43MyA0LjczIDAgMCAwIDggMTJhMTEgMTEgMCAwIDAgNC4yNSAzLjc2Yy40NjQuMi45MzguMzc4IDEuNDIuNTNhMy4yOCAzLjI4IDAgMCAwIDEuNTYuMDkgMi41NCAyLjU0IDAgMCAwIDEuNjgtMS4xOCAyLjA5IDIuMDkgMCAwIDAgLjE1LTEuMmMtLjA2LS4wNy0uMjMtLjEzLS40OC0uMjVsLS4wNC4wNXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXdoYXRzYXBwLXNxdWFyZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTE2IDguMDdhNS4zNCA1LjM0IDAgMCAwLTkuMTEgMy43NyA1LjI4IDUuMjggMCAwIDAgLjgyIDIuODRsLjEyLjItLjUzIDIgMi0uNTMuMi4xMWMuODIuNDkgMS43NTYuNzUgMi43MS43NUE1LjM0IDUuMzQgMCAwIDAgMTYgOC4wN3ptLS44MyA1LjgzYTEuNjYgMS42NiAwIDAgMS0xLjA4Ljc2IDIuMjMgMi4yMyAwIDAgMS0xLS4wNmMtLjIzLS4wOC0uNTMtLjE4LS45MS0uMzRhNy4xNiA3LjE2IDAgMCAxLTIuNzgtMi40MiAzLjEzIDMuMTMgMCAwIDEtLjY2LTEuNjYgMS44MyAxLjgzIDAgMCAxIC41Ni0xLjM0LjU5LjU5IDAgMCAxIC40My0uMkgxMGMuMSAwIC4yMyAwIC4zNi4yNy4xMy4yNy40NSAxLjExLjQ5IDEuMTlhLjMuMyAwIDAgMSAwIC4yOCAxLjIgMS4yIDAgMCAxLS4xNi4yN2MtLjA4LjEtLjE3LjIxLS4yNC4yOC0uMDcuMDctLjE3LjE3LS4wNy4zMy4yMzkuNDEzLjU0Ljc4Ny44OSAxLjExLjM4LjM0LjgxNi42MTIgMS4yOS44LjE2LjA4LjI1LjA2LjM0IDAgLjA5LS4wNi40LS40Ny41MS0uNjMuMTEtLjE2LjIxLS4xNC4zNi0uMDguMTUuMDYuOTQuNDQgMS4xLjUyLjE2LjA4LjI2LjEyLjMuMTlhMS4zNiAxLjM2IDAgMCAxLS4wMy43M2guMDN6Ii8+PHBhdGggZD0iTTIxIDcuMDlhOC4yNiA4LjI2IDAgMCAwLS4wOS0xLjE1IDMuNDkgMy40OSAwIDAgMC0xLjg1LTIuNTEgMy44OSAzLjg5IDAgMCAwLTEtLjMyQTguMzYgOC4zNiAwIDAgMCAxNi45MSAzSDcuMDlhOC4yNiA4LjI2IDAgMCAwLTEuMTUuMDlBMy40OSAzLjQ5IDAgMCAwIDMuNDMgNWEzLjg5IDMuODkgMCAwIDAtLjMyIDFBOC4zNiA4LjM2IDAgMCAwIDMgNy4wOXY5LjgyYy4wMDMuMzg1LjAzMy43Ny4wOSAxLjE1QTMuNDkgMy40OSAwIDAgMCA1IDIwLjU3YTMuODkgMy44OSAwIDAgMCAxIC4zMmMuMzg0LjA2Ljc3MS4wOTQgMS4xNi4xaDkuODJhOC4yNiA4LjI2IDAgMCAwIDEuMTUtLjA5IDMuNDkgMy40OSAwIDAgMCAyLjUxLTEuODUgMy44OSAzLjg5IDAgMCAwIC4zMi0xIDguMzYgOC4zNiAwIDAgMCAuMS0xLjE2VjcuNTdjLS4wNi0uMS0uMDYtLjMxLS4wNi0uNDh6bS04LjggMTEuMTdhNi4zOSA2LjM5IDAgMCAxLTMuMDYtLjc4bC0zLjQxLjg5LjkyLTMuMzJhNi4zMyA2LjMzIDAgMCAxLS44Ni0zLjIxIDYuNDEgNi40MSAwIDAgMSAxMS00LjUzIDYuMzMgNi4zMyAwIDAgMSAxLjg4IDQuNTQgNi40MiA2LjQyIDAgMCAxLTYuNDcgNi40MXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXlvdXR1YmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0yMS41NiA3LjJhMi41IDIuNSAwIDAgMC0xLjc2LTEuNzdDMTguMjQgNSAxMiA1IDEyIDVzLTYuMjQgMC03LjguNDJBMi41IDIuNSAwIDAgMCAyLjQ0IDcuMiAyNS43MiAyNS43MiAwIDAgMCAyIDEyYy0uMDEgMS42MS4xMyAzLjIxNy40MiA0LjhhMi41IDIuNSAwIDAgMCAxLjc4IDEuNzdDNS43NiAxOSAxMiAxOSAxMiAxOXM2LjI0IDAgNy44LS40MmEyLjUgMi41IDAgMCAwIDEuNzYtMS43N0EyNS43MiAyNS43MiAwIDAgMCAyMiAxMmEyNS43MiAyNS43MiAwIDAgMC0uNDQtNC44ek0xMCAxNVY5bDUuMTkgM0wxMCAxNXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXpvb20taW4iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjQgOS41aDMuM3YxaC0zLjN2My4yaC0xdi0zLjJINi4ydi0xaDMuMlY2LjJoMXptMTAuNyAxMi40TDE1LjMgMTZhOC4zIDguMyAwIDAgMS01LjMgMiA4IDggMCAxIDEgOC04IDguMyA4LjMgMCAwIDEtMiA1LjNsNS45IDUuOHpNMTcgMTBhNyA3IDAgMSAwLTcgNyA3IDcgMCAwIDAgNy03eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXpvb20tb3V0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02LjIgOS41aDcuNXYxSDYuMnptMTQuOSAxMi40TDE1LjMgMTZhOC4zIDguMyAwIDAgMS01LjMgMiA4IDggMCAxIDEgOC04IDguMyA4LjMgMCAwIDEtMiA1LjNsNS45IDUuOHpNMTcgMTBhNyA3IDAgMSAwLTcgNyA3IDcgMCAwIDAgNy03eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48L2RlZnM+PC9zdmc+';

	var propTypes$17 = {
	  color: propTypes.string,
	  size: propTypes.string,
	  icon: propTypes.string
	};
	var defaultProps$13 = {
	  color: '',
	  size: '',
	  icon: 'it-tool'
	};

	var Icon =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose$1(Icon, _React$Component);

	  function Icon() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Icon.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        color = _this$props.color,
	        size = _this$props.size;
	    var classes = classnames('icon', color, size);
	    var iconName = this.props.icon;
	    return React__default.createElement("svg", {
	      className: classes
	    }, React__default.createElement("use", {
	      xlinkHref: iconSprite + "#" + iconName
	    }));
	  };

	  return Icon;
	}(React__default.Component);

	Icon.propTypes = propTypes$17;
	Icon.defaultProps = defaultProps$13;

	var mapToCssModules$2 = mapToCssModules,
	    deprecated$1 = deprecated,
	    warnOnce$1 = warnOnce;
	var propTypes$18 = {
	  children: propTypes.node,
	  type: propTypes.string,
	  size: propTypes.string,
	  label: propTypes.string,
	  placeholder: propTypes.string,
	  value: propTypes.string,
	  id: propTypes.string,
	  infoText: propTypes.string,
	  normalized: propTypes.bool,
	  bsSize: propTypes.string,
	  state: deprecated$1(propTypes.string, 'Please use the props "valid" and "invalid" to indicate the state.'),
	  valid: propTypes.bool,
	  invalid: propTypes.bool,
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
	  "static": deprecated$1(propTypes.bool, 'Please use the prop "plaintext"'),
	  plaintext: propTypes.bool,
	  addon: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$14 = {
	  type: "text"
	};

	var Input$1 =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose$1(Input, _React$Component);

	  function Input() {
	    var _this;

	    _this = _React$Component.call(this) || this;

	    _defineProperty$2(_assertThisInitialized$2(_this), "toggleFocusLabel", function () {
	      _this.setState({
	        isFocused: true
	      });
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "toggleBlurLabel", function (e) {
	      if (e.target.value === "") {
	        _this.setState({
	          isFocused: !_this.state.isFocused
	        });
	      }
	    });

	    _this.state = {
	      isFocused: false,
	      hidden: true,
	      icon: true
	    };
	    _this.toggleShow = _this.toggleShow.bind(_assertThisInitialized$2(_this));
	    return _this;
	  }

	  var _proto = Input.prototype;

	  _proto.toggleShow = function toggleShow() {
	    this.setState({
	      hidden: !this.state.hidden,
	      icon: !this.state.icon
	    });
	  };

	  _proto.render = function render() {
	    var _this2 = this;

	    var _this$props = this.props,
	        className = _this$props.className,
	        cssModule = _this$props.cssModule,
	        type = _this$props.type,
	        state = _this$props.state,
	        tag = _this$props.tag,
	        addon = _this$props.addon,
	        staticInput = _this$props["static"],
	        plaintext = _this$props.plaintext,
	        innerRef = _this$props.innerRef,
	        label = _this$props.label,
	        infoText = _this$props.infoText,
	        placeholder = _this$props.placeholder,
	        normalized = _this$props.normalized,
	        value = _this$props.value,
	        attributes = _objectWithoutPropertiesLoose$1(_this$props, ["className", "cssModule", "type", "state", "tag", "addon", "static", "plaintext", "innerRef", "label", "infoText", "placeholder", "normalized", "value"]);

	    var _this$props2 = this.props,
	        bsSize = _this$props2.bsSize,
	        valid = _this$props2.valid,
	        invalid = _this$props2.invalid;
	    var checkInput = ["radio", "checkbox"].indexOf(type) > -1;
	    var isNotaNumber = new RegExp("\\D", "g");
	    var fileInput = type === "file";
	    var textareaInput = type === "textarea";
	    var selectInput = type === "select";
	    var Tag = tag || (selectInput || textareaInput ? type : "input");
	    var formControlClass = "form-control";
	    var infoTextControlClass = "form-text text-muted";

	    if (plaintext || staticInput) {
	      formControlClass = formControlClass + "-plaintext";
	      Tag = tag || "p";
	    } else if (fileInput) {
	      formControlClass = formControlClass + "-file";
	    } else if (checkInput) {
	      if (addon) {
	        formControlClass = null;
	      }
	      /* Causes a regression with `bootstrap-italia`
	      else {
	          formControlClass = 'form-check-input';
	      }
	      */

	    }

	    if (valid || invalid) {
	      infoTextControlClass = null;
	    }

	    if (state && typeof valid === "undefined" && typeof invalid === "undefined") {
	      if (state === "danger") {
	        invalid = true;
	      } else if (state === "success") {
	        valid = true;
	      }
	    }

	    if (attributes.size && isNotaNumber.test(attributes.size)) {
	      warnOnce$1('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
	      bsSize = attributes.size;
	      delete attributes.size;
	    }

	    var classes = mapToCssModules$2(classnames(className, invalid && "is-invalid", valid && "is-valid", bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);
	    var wrapperClass = mapToCssModules$2(classnames(className, "form-group"), cssModule);
	    var infoTextClass = mapToCssModules$2(classnames(className, valid ? 'valid-feedback' : false, invalid ? 'invalid-feedback' : false, infoTextControlClass));

	    if (Tag === "input" || typeof tag !== "string") {
	      attributes.type = type;
	    }

	    if (attributes.children && !(plaintext || staticInput || type === "select" || typeof Tag !== "string" || Tag === "select")) {
	      warnOnce$1("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
	      delete attributes.children;
	    }

	    if (placeholder || value) {
	      return React__default.createElement("div", {
	        className: wrapperClass
	      }, React__default.createElement(Tag, _extends$1({}, attributes, {
	        ref: innerRef,
	        className: classes,
	        id: this.props.id,
	        onFocus: this.toggleFocusLabel,
	        onBlur: function onBlur(e) {
	          return _this2.toggleBlurLabel(e);
	        },
	        placeholder: this.props.placeholder,
	        value: this.props.value
	      })), React__default.createElement("label", {
	        htmlFor: this.props.id,
	        className: "active"
	      }, this.props.label), React__default.createElement("small", {
	        className: infoTextClass
	      }, this.props.infoText));
	    }

	    if (attributes.type === "password") {
	      return React__default.createElement("div", {
	        className: wrapperClass
	      }, React__default.createElement(Tag, _extends$1({}, attributes, {
	        ref: innerRef,
	        type: this.state.hidden ? "password" : "text",
	        className: this.state.isFocused ? "form-control input-password focus--mouse" : "form-control input-password",
	        onFocus: this.toggleFocusLabel,
	        onBlur: function onBlur(e) {
	          return _this2.toggleBlurLabel(e);
	        },
	        id: this.props.id,
	        placeholder: this.props.placeholder,
	        value: this.props.value
	      })), React__default.createElement("span", {
	        className: "password-icon",
	        "aria-hidden": "true"
	      }, React__default.createElement("svg", {
	        className: "password-icon-visible icon icon-sm",
	        onClick: this.toggleShow
	      }, React__default.createElement("use", {
	        xlinkHref: "/svg/sprite.svg#it-password-" + (this.state.icon ? "visible" : "invisible")
	      }))), React__default.createElement("label", {
	        htmlFor: this.props.id,
	        className: this.state.isFocused ? "active" : ""
	      }, this.props.label), React__default.createElement("small", {
	        className: infoTextClass
	      }, this.props.infoText));
	    }

	    if (normalized) {
	      return React__default.createElement("div", {
	        className: wrapperClass
	      }, React__default.createElement(Tag, _extends$1({}, attributes, {
	        className: this.state.isFocused ? "form-control-plaintext focus--mouse" : "form-control-plaintext",
	        onFocus: this.toggleFocusLabel,
	        onBlur: function onBlur(e) {
	          return _this2.toggleBlurLabel(e);
	        },
	        id: this.props.id,
	        value: this.props.value,
	        readOnly: true
	      })), React__default.createElement("label", {
	        htmlFor: this.props.id,
	        className: this.state.isFocused ? "active" : ""
	      }, this.props.label), React__default.createElement("small", {
	        className: infoTextClass
	      }, this.props.infoText));
	    }

	    if (label || infoText) {
	      return React__default.createElement("div", {
	        className: wrapperClass
	      }, React__default.createElement(Tag, _extends$1({}, attributes, {
	        ref: innerRef,
	        className: classes,
	        id: this.props.id,
	        onFocus: this.toggleFocusLabel,
	        onBlur: function onBlur(e) {
	          return _this2.toggleBlurLabel(e);
	        },
	        value: this.props.value
	      })), React__default.createElement("label", {
	        htmlFor: this.props.id,
	        className: this.state.isFocused ? "active" : ""
	      }, this.props.label), React__default.createElement("small", {
	        className: infoTextClass
	      }, this.props.infoText));
	    }

	    return React__default.createElement(Tag, _extends$1({}, attributes, {
	      ref: innerRef,
	      className: classes
	    }));
	  };

	  return Input;
	}(React__default.Component);

	Input$1.propTypes = propTypes$18;
	Input$1.defaultProps = defaultProps$14;

	var propTypes$19 = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  multiline: propTypes.bool,
	  sublist: propTypes.bool
	};
	var defaultProps$15 = {
	  tag: 'div'
	};

	var LinkList = function LinkList(props) {
	  var className = props.className,
	      Tag = props.tag,
	      multiline = props.multiline,
	      sublist = props.sublist,
	      attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag", "multiline", "sublist"]);

	  var wrapperClasses = classnames(multiline ? 'multiline' : false, 'link-list-wrapper');
	  var classes = classnames(className, sublist ? 'link-sublist' : 'link-list');

	  if (sublist) {
	    return React__default.createElement("ul", _extends$1({}, attributes, {
	      className: classes
	    }));
	  }

	  return React__default.createElement(Tag, {
	    className: wrapperClasses
	  }, React__default.createElement("ul", _extends$1({}, attributes, {
	    className: classes
	  })));
	};

	LinkList.propTypes = propTypes$19;
	LinkList.defaultProps = defaultProps$15;

	var propTypes$1a = {
	  active: propTypes.bool,
	  disabled: propTypes.bool,
	  header: propTypes.bool,
	  divider: propTypes.bool,
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.any,
	  href: propTypes.string,
	  size: propTypes.string
	};
	var defaultProps$16 = {
	  tag: 'a'
	};

	var handleDisabledOnClick$1 = function handleDisabledOnClick(e) {
	  e.preventDefault();
	};

	var LinkListItem = function LinkListItem(props) {
	  var className = props.className,
	      active = props.active,
	      disabled = props.disabled,
	      header = props.header,
	      divider = props.divider,
	      href = props.href,
	      size = props.size,
	      attributes = _objectWithoutPropertiesLoose$1(props, ["className", "active", "disabled", "header", "divider", "href", "size"]);

	  var Tag = props.tag;
	  var classes = classnames(className, active ? 'active' : false, disabled ? 'disabled' : false, header ? 'header' : false, divider ? 'divider' : false, size || false, 'list-item'); // Prevent click event when disabled.

	  if (disabled) {
	    attributes.onClick = handleDisabledOnClick$1;
	  }

	  if (header) {
	    Tag = 'h3';
	  } else if (divider) {
	    Tag = 'span';
	  }

	  return React__default.createElement("li", null, function () {
	    if (header && href) {
	      return React__default.createElement(Tag, null, React__default.createElement("a", _extends$1({
	        // eslint-disable-line jsx-a11y/anchor-has-content
	        href: href || '#'
	      }, attributes, {
	        className: classes
	      })));
	    }

	    return React__default.createElement(Tag, _extends$1({
	      href: href || '#'
	    }, attributes, {
	      className: classes
	    }));
	  }());
	};

	LinkListItem.propTypes = propTypes$1a;
	LinkListItem.defaultProps = defaultProps$16;

	var _transitionStatusToCl$2;
	var TransitionTimeouts$3 = TransitionTimeouts,
	    TransitionPropTypeKeys$3 = TransitionPropTypeKeys,
	    TransitionStatuses$3 = TransitionStatuses,
	    pick$3 = pick,
	    omit$3 = omit;

	var propTypes$1b = _extends$1({}, Transition.propTypes, {
	  // eslint-disable-line react/forbid-foreign-prop-types
	  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  onClose: propTypes.func,
	  isOpen: propTypes.bool
	});

	var defaultProps$17 = _extends$1({}, Transition.defaultProps, {
	  timeout: TransitionTimeouts$3.Collapse,
	  tag: 'div'
	});

	var transitionStatusToClassHash$2 = (_transitionStatusToCl$2 = {}, _transitionStatusToCl$2[TransitionStatuses$3.ENTERING] = 'navbar-collapsable d-block', _transitionStatusToCl$2[TransitionStatuses$3.ENTERED] = 'navbar-collapsable d-block expanded', _transitionStatusToCl$2[TransitionStatuses$3.EXITING] = 'navbar-collapsable d-block', _transitionStatusToCl$2[TransitionStatuses$3.EXITED] = 'navbar-collapsable', _transitionStatusToCl$2);
	var defaultStyle = {
	  transition: '400ms ease-in-out',
	  transitionProperty: 'opacity'
	};
	var transitionStyles = {
	  entering: {
	    opacity: 0
	  },
	  entered: {
	    opacity: 1
	  },
	  exiting: {
	    opacity: 0
	  }
	};

	function getTransitionClass$2(status) {
	  return transitionStatusToClassHash$2[status] || '';
	}

	var Offcanvas =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose$1(Offcanvas, _Component);

	  function Offcanvas() {
	    return _Component.apply(this, arguments) || this;
	  }

	  var _proto = Offcanvas.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        Tag = _this$props.tag,
	        children = _this$props.children,
	        isOpen = _this$props.isOpen,
	        onClose = _this$props.onClose,
	        attributes = _objectWithoutPropertiesLoose$1(_this$props, ["tag", "children", "isOpen", "onClose"]);

	    var transitionProps = pick$3(attributes, TransitionPropTypeKeys$3);
	    var childProps = omit$3(attributes, TransitionPropTypeKeys$3);
	    return React__default.createElement(Transition, _extends$1({}, transitionProps, {
	      "in": isOpen
	    }), function (status) {
	      var transitionClass = getTransitionClass$2(status);
	      var currentStyles = transitionStyles[status];
	      return React__default.createElement("div", _extends$1({
	        className: transitionClass,
	        style: _extends$1({}, defaultStyle, {}, childProps.style, {}, currentStyles)
	      }, childProps), React__default.createElement("div", {
	        className: "close-div",
	        onClick: onClose
	      }, React__default.createElement(Button, {
	        className: "close-menu",
	        color: ""
	      }, React__default.createElement("span", {
	        className: "it-close"
	      }), "close")), React__default.createElement("div", {
	        className: "menu-wrapper"
	      }, React__default.createElement(Tag, null, children)));
	    });
	  };

	  return Offcanvas;
	}(React.Component);
	Offcanvas.propTypes = propTypes$1b;
	Offcanvas.defaultProps = defaultProps$17;

	var propTypes$1c = {
	  children: propTypes.node,
	  className: propTypes.string,
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  'aria-label': propTypes.string
	};
	var defaultProps$18 = {
	  tag: 'nav',
	  'aria-label': 'pagination'
	};

	var Pager = function Pager(props) {
	  var children = props.children,
	      className = props.className,
	      Tag = props.tag,
	      label = props['aria-label'];
	  var classes = classnames(className, 'pagination-wrapper');
	  return React__default.createElement(Tag, {
	    className: classes,
	    "aria-label": label
	  }, children);
	};

	Pager.propTypes = propTypes$1c;
	Pager.defaultProps = defaultProps$18;

	var propTypes$1d = {
	  className: propTypes.string,
	  size: propTypes.string,
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
	};
	var defaultProps$19 = {
	  tag: 'ul'
	};

	var PagerList = function PagerList(props) {
	  var _classNames;

	  var className = props.className,
	      size = props.size,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose$1(props, ["className", "size", "tag"]);

	  var listClasses = classnames(className, 'pagination', (_classNames = {}, _classNames["pagination-" + size] = !!size, _classNames));
	  return React__default.createElement(Tag, _extends$1({}, attributes, {
	    className: listClasses
	  }));
	};

	PagerList.propTypes = propTypes$1d;
	PagerList.defaultProps = defaultProps$19;

	var PasswordInput =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose$1(PasswordInput, _Component);

	  function PasswordInput() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

	    _defineProperty$2(_assertThisInitialized$2(_this), "state", {
	      showPassword: false
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onPasswordToggle", function () {
	      _this.setState(function (prevState) {
	        return {
	          showPassword: !prevState.showPassword
	        };
	      });
	    });

	    return _this;
	  }

	  var _proto = PasswordInput.prototype;

	  _proto.render = function render() {
	    var showPassword = this.state.showPassword;

	    var _this$props = this.props,
	        type = _this$props.type,
	        rest = _objectWithoutPropertiesLoose$1(_this$props, ["type"]);

	    var classNames = ['btn-eye', showPassword ? 'eye-off' : 'eye-on'].join(' ');
	    return React__default.createElement(React.Fragment, null, React__default.createElement("span", {
	      className: classNames,
	      onClick: this.onPasswordToggle
	    }), React__default.createElement(Input$1, _extends$1({}, rest, {
	      type: showPassword ? 'text' : type
	    })));
	  };

	  return PasswordInput;
	}(React.Component);

	_defineProperty$2(PasswordInput, "defaultProps", {
	  type: 'password'
	});

	PasswordInput.propTypes = _extends$1({}, Input$1.propTypes);

	var defaultSteps = [{
	  score: 0,
	  label: 'inserisci almeno 8 caratteri e una lettera maiuscola',
	  className: 'danger'
	}, {
	  score: 1,
	  label: 'password troppo debole',
	  className: 'danger'
	}, {
	  score: 25,
	  label: 'password debole',
	  className: 'danger'
	}, {
	  score: 50,
	  label: 'password sicura',
	  className: 'warning'
	}, {
	  score: 75,
	  label: 'password molto sicura',
	  className: 'success'
	}];

	var PasswordMeter =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose$1(PasswordMeter, _Component);

	  function PasswordMeter() {
	    return _Component.apply(this, arguments) || this;
	  }

	  var _proto = PasswordMeter.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        steps = _this$props.steps,
	        score = _this$props.score;
	    var currentStep = steps.filter(function (step) {
	      return step.score <= score;
	    }).reduce(function (acc, current) {
	      return acc.score > current.score ? acc : current;
	    });
	    var label = currentStep.label,
	        className = currentStep.className;
	    return React__default.createElement("div", {
	      className: "psw-wrapper"
	    }, React__default.createElement("span", {
	      className: "psw-text text-" + className + " " + className
	    }, label), React__default.createElement("div", {
	      className: "progress rounded-0 position-relative psw-meter"
	    }, React__default.createElement("div", {
	      className: "row position-absolute w-100 m-0"
	    }, React__default.createElement("div", {
	      className: "col-3 border-left border-right border-white"
	    }), React__default.createElement("div", {
	      className: "col-3 border-left border-right border-white"
	    }), React__default.createElement("div", {
	      className: "col-3 border-left border-right border-white"
	    }), React__default.createElement("div", {
	      className: "col-3 border-left border-right border-white"
	    })), React__default.createElement("div", {
	      className: "progress-bar bg-" + className + " " + className,
	      style: {
	        width: score + "%"
	      }
	    })));
	  };

	  return PasswordMeter;
	}(React.Component);

	_defineProperty$2(PasswordMeter, "defaultProps", {
	  score: 0,
	  steps: defaultSteps
	});

	PasswordMeter.propTypes = {
	  score: propTypes.number,
	  steps: propTypes.arrayOf(propTypes.shape({
	    score: propTypes.number,
	    label: propTypes.string,
	    className: propTypes.string
	  }))
	};

	var propTypes$1e = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string
	};
	var defaultProps$1a = {
	  tag: 'div'
	};

	var Skiplink = function Skiplink(props) {
	  var className = props.className,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag"]);

	  var classes = classnames(className, 'skiplinks');
	  return React__default.createElement(Tag, _extends$1({
	    className: classes
	  }, attributes));
	};

	Skiplink.propTypes = propTypes$1e;
	Skiplink.defaultProps = defaultProps$1a;

	var propTypes$1f = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string
	};
	var defaultProps$1b = {
	  tag: 'a'
	};

	var SkiplinkItem = function SkiplinkItem(props) {
	  var className = props.className,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag"]);

	  var classes = classnames(className, 'sr-only', 'sr-only-focusable');
	  return React__default.createElement(Tag, _extends$1({
	    className: classes
	  }, attributes));
	};

	SkiplinkItem.propTypes = propTypes$1f;
	SkiplinkItem.defaultProps = defaultProps$1b;

	var Toggle =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose$1(Toggle, _Component);

	  function Toggle() {
	    return _Component.apply(this, arguments) || this;
	  }

	  var _proto = Toggle.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        label = _this$props.label,
	        rest = _objectWithoutPropertiesLoose$1(_this$props, ["label"]);

	    return React__default.createElement("div", {
	      className: "toggles"
	    }, React__default.createElement(Label, {
	      check: true
	    }, label, React__default.createElement(Input, _extends$1({
	      type: "checkbox"
	    }, rest)), React__default.createElement("span", {
	      className: "lever"
	    })));
	  };

	  return Toggle;
	}(React.Component);

	Toggle.propTypes = _extends$1({
	  label: propTypes.oneOfType([propTypes.string, propTypes.element])
	}, Input.propTypes);

	var propTypes$1g = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  secondary: propTypes.bool,
	  left: propTypes.bool,
	  right: propTypes.bool,
	  dark: propTypes.bool
	};
	var defaultProps$1c = {
	  tag: 'div'
	};

	var Sidebar = function Sidebar(props) {
	  var className = props.className,
	      Tag = props.tag,
	      secondary = props.secondary,
	      left = props.left,
	      right = props.right,
	      dark = props.dark,
	      attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag", "secondary", "left", "right", "dark"]);

	  var wrapperClasses = classnames(className, left ? 'it-line-left-side' : false, right ? 'it-line-right-side' : false, dark ? 'theme-dark' : false, 'sidebar-wrapper');
	  var wrapperClassesLinkList = classnames(secondary ? 'linklist-secondary' : false, 'sidebar-linklist-wrapper');

	  if (secondary) {
	    return React__default.createElement(Tag, _extends$1({}, attributes, {
	      className: wrapperClassesLinkList
	    }));
	  }

	  return React__default.createElement(Tag, {
	    className: wrapperClasses
	  }, React__default.createElement(Tag, _extends$1({}, attributes, {
	    className: wrapperClassesLinkList
	  })));
	};

	Sidebar.propTypes = propTypes$1g;
	Sidebar.defaultProps = defaultProps$1c;

	var propTypes$1h = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  value: propTypes.number,
	  label: propTypes.string,
	  indeterminate: propTypes.bool,
	  color: propTypes.string
	};
	var defaultProps$1d = {
	  tag: 'div',
	  role: 'progressbar',
	  indeterminate: false
	};

	var Progress =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose$1(Progress, _React$Component);

	  function Progress() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Progress.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        Tag = _this$props.tag,
	        value = _this$props.value,
	        label = _this$props.label,
	        indeterminate = _this$props.indeterminate,
	        color = _this$props.color,
	        attributes = _objectWithoutPropertiesLoose$1(_this$props, ["className", "tag", "value", "label", "indeterminate", "color"]);

	    var wrapperClasses = classnames('progress-bar-wrapper');
	    var secondaryWrapperClasses = classnames(className, indeterminate ? 'progress-indeterminate' : false, color ? 'progress-color' : false, 'progress');
	    var classes = classnames(className, 'progress-bar', color ? "bg-" + this.props.color : false);

	    if (label && value) {
	      return React__default.createElement(Tag, {
	        className: wrapperClasses
	      }, React__default.createElement("div", {
	        className: "progress-bar-label"
	      }, React__default.createElement("span", {
	        className: "sr-only"
	      }, this.props.label), this.props.value + '%'), React__default.createElement(Tag, {
	        className: secondaryWrapperClasses
	      }, React__default.createElement("div", _extends$1({}, attributes, {
	        className: classes,
	        role: "progressbar",
	        style: {
	          width: this.props.value + '%'
	        },
	        "aria-valuenow": this.props.value,
	        "aria-valuemin": "0",
	        "aria-valuemax": "100"
	      }))));
	    }

	    return React__default.createElement(Tag, {
	      className: secondaryWrapperClasses
	    }, React__default.createElement("div", {
	      className: "progress-bar-label"
	    }, React__default.createElement("span", {
	      className: "sr-only"
	    }, this.props.label)), React__default.createElement("div", _extends$1({}, attributes, {
	      className: classes,
	      role: "progressbar",
	      style: {
	        width: this.props.value + '%'
	      },
	      "aria-valuenow": this.props.value,
	      "aria-valuemin": "0",
	      "aria-valuemax": "100"
	    })));
	  };

	  return Progress;
	}(React__default.Component);

	Progress.propTypes = propTypes$1h;
	Progress.defaultProps = defaultProps$1d;

	var propTypes$1i = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  active: propTypes.bool,
	  small: propTypes.bool,
	  "double": propTypes.bool
	};
	var defaultProps$1e = {
	  tag: 'span',
	  indeterminate: false,
	  active: false,
	  small: false,
	  "double": false
	};

	var Spinner =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose$1(Spinner, _React$Component);

	  function Spinner() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Spinner.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        Tag = _this$props.tag,
	        active = _this$props.active,
	        small = _this$props.small,
	        _double = _this$props["double"],
	        attributes = _objectWithoutPropertiesLoose$1(_this$props, ["className", "tag", "active", "small", "double"]);

	    var wrapperClasses = classnames(active ? 'progress-spinner-active' : false, small ? 'size-sm' : false, _double ? 'progress-spinner-double' : false, 'progress-spinner');
	    var innerClasses = classnames('progress-spinner-inner');
	    var classes = classnames(className, 'sr-only');

	    if (_double) {
	      return React__default.createElement(Tag, {
	        className: wrapperClasses
	      }, React__default.createElement("div", {
	        className: innerClasses
	      }), React__default.createElement("div", {
	        className: innerClasses
	      }), React__default.createElement(Tag, _extends$1({}, attributes, {
	        className: classes
	      }), "Caricamento..."));
	    }

	    return React__default.createElement(Tag, {
	      className: wrapperClasses
	    }, React__default.createElement(Tag, _extends$1({}, attributes, {
	      className: classes
	    }), "Caricamento..."));
	  };

	  return Spinner;
	}(React__default.Component);

	Spinner.propTypes = propTypes$1i;
	Spinner.defaultProps = defaultProps$1e;

	var propTypes$1j = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.node,
	  isBig: propTypes.bool,
	  hasShade: propTypes.bool,
	  hasSpace: propTypes.bool,
	  hasCTA: propTypes.bool,
	  hasLinkOnTitle: propTypes.bool,
	  isIconCard: propTypes.bool,
	  isSpecialCard: propTypes.bool,
	  isArticleCard: propTypes.bool,
	  title: propTypes.string,
	  text: propTypes.string,
	  after: propTypes.string,
	  articleCategoryName: propTypes.string,
	  articleCategoryLink: propTypes.string,
	  articleDate: propTypes.string,
	  signature: propTypes.string,
	  link: propTypes.string,
	  iconName: propTypes.string,
	  tags: propTypes.array,
	  imageSrc: propTypes.string,
	  imageTitle: propTypes.string,
	  imageAlt: propTypes.string
	};
	var defaultProps$1f = {
	  tag: 'div',
	  link: false
	};

	var Card =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose$1(Card, _React$Component);

	  function Card() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Card.prototype;

	  _proto.render = function render() {
	    var Tag = this.props.tag;
	    var cardWrapperClasses = classnames(this.props.hasSpace ? 'card-space' : false, 'card-wrapper');
	    var innerCardWrapperClasses = classnames(this.props.hasShade ? 'card-bg' : false, this.props.isBig ? 'card-big' : false, this.props.imageSrc ? 'card-img' : false, this.props.isSpecialCard ? 'special-card' : false, this.props.after ? 'no-after' : false, 'card');
	    var iconTag = this.props.isIconCard ? React__default.createElement("div", {
	      className: "categoryicon-top"
	    }, React__default.createElement(Icon, {
	      icon: this.props.iconName
	    }), React__default.createElement("span", {
	      className: "text"
	    }, this.props.articleCategoryName)) : false;
	    var titleTag = React__default.createElement("h5", {
	      className: "card-title"
	    }, this.props.title);
	    var imageTag = this.props.imageSrc ? React__default.createElement("div", {
	      className: "img-responsive-wrapper"
	    }, React__default.createElement("div", {
	      className: "img-responsive"
	    }, React__default.createElement("figure", {
	      className: "img-wrapper"
	    }, React__default.createElement("img", {
	      src: this.props.imageSrc,
	      title: this.props.imageTitle,
	      alt: this.props.imageAlt
	    })))) : false;
	    var dateTag = this.props.articleDate ? React__default.createElement("span", {
	      className: "data"
	    }, this.props.articleDate) : false;
	    var signatureTag = this.props.signature ? React__default.createElement("span", {
	      className: "card-signature"
	    }, this.props.signature) : false;
	    var callToActionTag = this.props.hasCTA ? React__default.createElement(Button, {
	      outline: true,
	      color: "primary",
	      size: "sm"
	    }, "Action") : false;
	    var cardFooterTag = signatureTag || callToActionTag ? React__default.createElement("div", {
	      className: "it-card-footer"
	    }, signatureTag, callToActionTag) : false;
	    var cardHeaderTag;
	    var readMoreTag;

	    if (this.props.link) {
	      if (this.props.hasLinkOnTitle) {
	        titleTag = React__default.createElement("a", {
	          href: this.props.link
	        }, React__default.createElement("h5", {
	          className: "card-title"
	        }, this.props.title));
	      } else {
	        readMoreTag = React__default.createElement("a", {
	          className: "read-more",
	          href: this.props.link
	        }, React__default.createElement("span", {
	          className: "text"
	        }, "Leggi di pi\xF9"), React__default.createElement(Icon, {
	          icon: 'it-arrow-right'
	        }));
	      }
	    }

	    if (this.props.isArticleCard) {
	      cardHeaderTag = React__default.createElement("div", {
	        className: "category-top"
	      }, React__default.createElement("a", {
	        className: "category",
	        href: "{this.props.articleCategoryLink}"
	      }, this.props.articleCategoryName), dateTag);
	    } else if (this.props.tags && this.props.tags.split(',').length) {
	      cardHeaderTag = React__default.createElement("div", {
	        className: "head-tags"
	      }, this.props.tags.split(',').map(function (item, index) {
	        return React__default.createElement("span", {
	          className: "card-tag",
	          key: index
	        }, item);
	      }), dateTag);
	    }

	    return React__default.createElement(Tag, {
	      className: cardWrapperClasses
	    }, React__default.createElement("div", {
	      className: innerCardWrapperClasses
	    }, imageTag, React__default.createElement("div", {
	      className: "card-body"
	    }, cardHeaderTag, iconTag, titleTag, React__default.createElement("p", {
	      className: "card-text"
	    }, this.props.text), cardFooterTag, readMoreTag)));
	  };

	  return Card;
	}(React__default.Component);

	Card.propTypes = propTypes$1j;
	Card.defaultProps = defaultProps$1f;

	var propTypes$1k = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string
	};
	var defaultProps$1g = {
	  tag: 'nav'
	};

	var BottomNav = function BottomNav(props) {
	  var Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose$1(props, ["tag"]);

	  var wrapperClasses = classnames('bottom-nav');
	  return React__default.createElement(Tag, {
	    className: wrapperClasses
	  }, React__default.createElement("ul", attributes));
	};

	BottomNav.propTypes = propTypes$1k;
	BottomNav.defaultProps = defaultProps$1g;

	var propTypes$1l = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  active: propTypes.bool,
	  link: propTypes.string,
	  label: propTypes.string,
	  iconName: propTypes.string,
	  srText: propTypes.string,
	  alert: propTypes.bool,
	  badge: propTypes.bool
	};
	var defaultProps$1h = {
	  tag: 'a',
	  link: '#',
	  iconName: 'it-comment',
	  srText: false
	};

	var BottomNavItem =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose$1(BottomNavItem, _React$Component);

	  function BottomNavItem() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = BottomNavItem.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        Tag = _this$props.tag,
	        attributes = _objectWithoutPropertiesLoose$1(_this$props, ["tag"]);

	    var activeClass = classnames(this.props.active ? 'active' : false);
	    var badgeWrapper = this.props.badge ? React__default.createElement("div", {
	      className: "badge-wrapper"
	    }, React__default.createElement("span", {
	      className: "bottom-nav-badge"
	    }, this.props.badge)) : false;
	    var alertWrapper = this.props.alert ? React__default.createElement("div", {
	      className: "badge-wrapper"
	    }, React__default.createElement("span", {
	      className: "bottom-nav-alert"
	    })) : false;
	    return React__default.createElement("li", attributes, React__default.createElement(Tag, {
	      href: this.props.link,
	      className: activeClass
	    }, badgeWrapper, alertWrapper, React__default.createElement(Icon, {
	      icon: this.props.iconName
	    }), React__default.createElement("span", {
	      className: "bottom-nav-label"
	    }, this.props.label, React__default.createElement("span", {
	      className: "sr-only"
	    }, this.props.srText))));
	  };

	  return BottomNavItem;
	}(React__default.Component);

	BottomNavItem.propTypes = propTypes$1l;
	BottomNavItem.defaultProps = defaultProps$1h;

	webfontloader.load({
	  custom: {
	    families: ['Titillium Web:300,400,600,700:latin-ext', 'Lora:400,700:latin-ext', 'Roboto Mono:400,700:latin-ext']
	  }
	});

	exports.Accordion = Accordion;
	exports.AccordionBody = AccordionBody;
	exports.AccordionHeader = AccordionHeader;
	exports.Alert = Alert;
	exports.Badge = Badge$1;
	exports.BottomNav = BottomNav;
	exports.BottomNavItem = BottomNavItem;
	exports.Breadcrumb = Breadcrumb;
	exports.BreadcrumbItem = BreadcrumbItem;
	exports.Button = Button;
	exports.ButtonDropdown = ButtonDropdown;
	exports.ButtonGroup = ButtonGroup;
	exports.ButtonToolbar = ButtonToolbar;
	exports.Card = Card;
	exports.CardBody = CardBody;
	exports.CardColumns = CardColumns;
	exports.CardDeck = CardDeck;
	exports.CardFooter = CardFooter;
	exports.CardGroup = CardGroup;
	exports.CardHeader = CardHeader;
	exports.CardImg = CardImg;
	exports.CardImgOverlay = CardImgOverlay;
	exports.CardLink = CardLink;
	exports.CardSubtitle = CardSubtitle;
	exports.CardText = CardText;
	exports.CardTitle = CardTitle;
	exports.Carousel = Carousel;
	exports.CarouselCaption = CarouselCaption;
	exports.CarouselControl = CarouselControl;
	exports.CarouselIndicators = CarouselIndicators;
	exports.CarouselItem = CarouselItem;
	exports.Col = Col;
	exports.Collapse = Collapse;
	exports.Container = Container;
	exports.Dropdown = Dropdown;
	exports.DropdownItem = DropdownItem;
	exports.DropdownMenu = DropdownMenu;
	exports.DropdownToggle = DropdownToggle;
	exports.Fade = Fade;
	exports.Form = Form;
	exports.FormFeedback = FormFeedback;
	exports.FormGroup = FormGroup$1;
	exports.FormText = FormText;
	exports.Hero = Hero;
	exports.Icon = Icon;
	exports.Input = Input$1;
	exports.InputGroup = InputGroup;
	exports.InputGroupAddon = InputGroupAddon;
	exports.InputGroupButtonDropdown = InputGroupButtonDropdown;
	exports.InputGroupText = InputGroupText;
	exports.Jumbotron = Jumbotron;
	exports.Label = Label;
	exports.LinkList = LinkList;
	exports.LinkListItem = LinkListItem;
	exports.ListGroup = ListGroup;
	exports.ListGroupItem = ListGroupItem;
	exports.ListGroupItemHeading = ListGroupItemHeading;
	exports.ListGroupItemText = ListGroupItemText;
	exports.Media = Media;
	exports.Modal = Modal;
	exports.ModalBody = ModalBody;
	exports.ModalFooter = ModalFooter;
	exports.ModalHeader = ModalHeader;
	exports.Nav = Nav;
	exports.NavItem = NavItem;
	exports.NavLink = NavLink;
	exports.Navbar = Navbar;
	exports.NavbarBrand = NavbarBrand;
	exports.NavbarToggler = NavbarToggler;
	exports.Offcanvas = Offcanvas;
	exports.Pager = Pager;
	exports.PagerItem = PaginationItem;
	exports.PagerLink = PaginationLink;
	exports.PagerList = PagerList;
	exports.PasswordInput = PasswordInput;
	exports.PasswordMeter = PasswordMeter;
	exports.Popover = Popover;
	exports.PopoverBody = PopoverBody;
	exports.PopoverHeader = PopoverHeader;
	exports.PopperContent = PopperContent;
	exports.PopperTargetHelper = PopperTargetHelper;
	exports.Progress = Progress;
	exports.Row = Row;
	exports.Scrollspy = Scrollspy;
	exports.Sidebar = Sidebar;
	exports.Skiplink = Skiplink;
	exports.SkiplinkItem = SkiplinkItem;
	exports.Spinner = Spinner;
	exports.TabContent = TabContent;
	exports.TabPane = TabPane;
	exports.Table = Table;
	exports.Toggle = Toggle;
	exports.Tooltip = Tooltip;
	exports.UncontrolledAlert = UncontrolledAlert;
	exports.UncontrolledButtonDropdown = UncontrolledButtonDropdown;
	exports.UncontrolledCarousel = UncontrolledCarousel;
	exports.UncontrolledDropdown = UncontrolledDropdown;
	exports.UncontrolledTooltip = UncontrolledTooltip;
	exports.Util = utils;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=design-react-kit.js.map
