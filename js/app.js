(() => {
  var e = {
      1807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
      1296: (e, t, n) => {
        var i = /^\s+|\s+$/g,
          r = /^[-+]0x[0-9a-f]+$/i,
          s = /^0b[01]+$/i,
          o = /^0o[0-7]+$/i,
          a = parseInt,
          l = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          c = "object" == typeof self && self && self.Object === Object && self,
          u = l || c || Function("return this")(),
          d = Object.prototype.toString,
          p = Math.max,
          f = Math.min,
          h = function () {
            return u.Date.now();
          };
        function v(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function m(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == d.call(e))
              );
            })(e)
          )
            return NaN;
          if (v(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = v(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(i, "");
          var n = s.test(e);
          return n || o.test(e)
            ? a(e.slice(2), n ? 2 : 8)
            : r.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, n) {
          var i,
            r,
            s,
            o,
            a,
            l,
            c = 0,
            u = !1,
            d = !1,
            g = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function b(t) {
            var n = i,
              s = r;
            return (i = r = void 0), (c = t), (o = e.apply(s, n));
          }
          function y(e) {
            return (c = e), (a = setTimeout(w, t)), u ? b(e) : o;
          }
          function x(e) {
            var n = e - l;
            return void 0 === l || n >= t || n < 0 || (d && e - c >= s);
          }
          function w() {
            var e = h();
            if (x(e)) return E(e);
            a = setTimeout(
              w,
              (function (e) {
                var n = t - (e - l);
                return d ? f(n, s - (e - c)) : n;
              })(e)
            );
          }
          function E(e) {
            return (a = void 0), g && i ? b(e) : ((i = r = void 0), o);
          }
          function S() {
            var e = h(),
              n = x(e);
            if (((i = arguments), (r = this), (l = e), n)) {
              if (void 0 === a) return y(l);
              if (d) return (a = setTimeout(w, t)), b(l);
            }
            return void 0 === a && (a = setTimeout(w, t)), o;
          }
          return (
            (t = m(t) || 0),
            v(n) &&
              ((u = !!n.leading),
              (s = (d = "maxWait" in n) ? p(m(n.maxWait) || 0, t) : s),
              (g = "trailing" in n ? !!n.trailing : g)),
            (S.cancel = function () {
              void 0 !== a && clearTimeout(a),
                (c = 0),
                (i = l = r = a = void 0);
            }),
            (S.flush = function () {
              return void 0 === a ? o : E(h());
            }),
            S
          );
        };
      },
      773: (e, t, n) => {
        var i = "__lodash_hash_undefined__",
          r = "[object Function]",
          s = "[object GeneratorFunction]",
          o = /^\[object .+?Constructor\]$/,
          a = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          l = "object" == typeof self && self && self.Object === Object && self,
          c = a || l || Function("return this")();
        var u,
          d = Array.prototype,
          p = Function.prototype,
          f = Object.prototype,
          h = c["__core-js_shared__"],
          v = (u = /[^.]+$/.exec((h && h.keys && h.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + u
            : "",
          m = p.toString,
          g = f.hasOwnProperty,
          b = f.toString,
          y = RegExp(
            "^" +
              m
                .call(g)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          x = d.splice,
          w = L(c, "Map"),
          E = L(Object, "create");
        function S(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function T(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function O(e) {
          var t = -1,
            n = e ? e.length : 0;
          for (this.clear(); ++t < n; ) {
            var i = e[t];
            this.set(i[0], i[1]);
          }
        }
        function C(e, t) {
          for (var n, i, r = e.length; r--; )
            if ((n = e[r][0]) === (i = t) || (n != n && i != i)) return r;
          return -1;
        }
        function A(e) {
          if (!P(e) || ((t = e), v && v in t)) return !1;
          var t,
            n =
              (function (e) {
                var t = P(e) ? b.call(e) : "";
                return t == r || t == s;
              })(e) ||
              (function (e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString)
                  try {
                    t = !!(e + "");
                  } catch (e) {}
                return t;
              })(e)
                ? y
                : o;
          return n.test(
            (function (e) {
              if (null != e) {
                try {
                  return m.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            })(e)
          );
        }
        function k(e, t) {
          var n,
            i,
            r = e.__data__;
          return (
            "string" == (i = typeof (n = t)) ||
            "number" == i ||
            "symbol" == i ||
            "boolean" == i
              ? "__proto__" !== n
              : null === n
          )
            ? r["string" == typeof t ? "string" : "hash"]
            : r.map;
        }
        function L(e, t) {
          var n = (function (e, t) {
            return null == e ? void 0 : e[t];
          })(e, t);
          return A(n) ? n : void 0;
        }
        function M(e, t) {
          if ("function" != typeof e || (t && "function" != typeof t))
            throw new TypeError("Expected a function");
          var n = function () {
            var i = arguments,
              r = t ? t.apply(this, i) : i[0],
              s = n.cache;
            if (s.has(r)) return s.get(r);
            var o = e.apply(this, i);
            return (n.cache = s.set(r, o)), o;
          };
          return (n.cache = new (M.Cache || O)()), n;
        }
        function P(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        (S.prototype.clear = function () {
          this.__data__ = E ? E(null) : {};
        }),
          (S.prototype.delete = function (e) {
            return this.has(e) && delete this.__data__[e];
          }),
          (S.prototype.get = function (e) {
            var t = this.__data__;
            if (E) {
              var n = t[e];
              return n === i ? void 0 : n;
            }
            return g.call(t, e) ? t[e] : void 0;
          }),
          (S.prototype.has = function (e) {
            var t = this.__data__;
            return E ? void 0 !== t[e] : g.call(t, e);
          }),
          (S.prototype.set = function (e, t) {
            return (this.__data__[e] = E && void 0 === t ? i : t), this;
          }),
          (T.prototype.clear = function () {
            this.__data__ = [];
          }),
          (T.prototype.delete = function (e) {
            var t = this.__data__,
              n = C(t, e);
            return (
              !(n < 0) && (n == t.length - 1 ? t.pop() : x.call(t, n, 1), !0)
            );
          }),
          (T.prototype.get = function (e) {
            var t = this.__data__,
              n = C(t, e);
            return n < 0 ? void 0 : t[n][1];
          }),
          (T.prototype.has = function (e) {
            return C(this.__data__, e) > -1;
          }),
          (T.prototype.set = function (e, t) {
            var n = this.__data__,
              i = C(n, e);
            return i < 0 ? n.push([e, t]) : (n[i][1] = t), this;
          }),
          (O.prototype.clear = function () {
            this.__data__ = {
              hash: new S(),
              map: new (w || T)(),
              string: new S(),
            };
          }),
          (O.prototype.delete = function (e) {
            return k(this, e).delete(e);
          }),
          (O.prototype.get = function (e) {
            return k(this, e).get(e);
          }),
          (O.prototype.has = function (e) {
            return k(this, e).has(e);
          }),
          (O.prototype.set = function (e, t) {
            return k(this, e).set(e, t), this;
          }),
          (M.Cache = O),
          (e.exports = M);
      },
      3096: (e, t, n) => {
        var i = "Expected a function",
          r = /^\s+|\s+$/g,
          s = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          a = /^0o[0-7]+$/i,
          l = parseInt,
          c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          u = "object" == typeof self && self && self.Object === Object && self,
          d = c || u || Function("return this")(),
          p = Object.prototype.toString,
          f = Math.max,
          h = Math.min,
          v = function () {
            return d.Date.now();
          };
        function m(e, t, n) {
          var r,
            s,
            o,
            a,
            l,
            c,
            u = 0,
            d = !1,
            p = !1,
            m = !0;
          if ("function" != typeof e) throw new TypeError(i);
          function y(t) {
            var n = r,
              i = s;
            return (r = s = void 0), (u = t), (a = e.apply(i, n));
          }
          function x(e) {
            return (u = e), (l = setTimeout(E, t)), d ? y(e) : a;
          }
          function w(e) {
            var n = e - c;
            return void 0 === c || n >= t || n < 0 || (p && e - u >= o);
          }
          function E() {
            var e = v();
            if (w(e)) return S(e);
            l = setTimeout(
              E,
              (function (e) {
                var n = t - (e - c);
                return p ? h(n, o - (e - u)) : n;
              })(e)
            );
          }
          function S(e) {
            return (l = void 0), m && r ? y(e) : ((r = s = void 0), a);
          }
          function T() {
            var e = v(),
              n = w(e);
            if (((r = arguments), (s = this), (c = e), n)) {
              if (void 0 === l) return x(c);
              if (p) return (l = setTimeout(E, t)), y(c);
            }
            return void 0 === l && (l = setTimeout(E, t)), a;
          }
          return (
            (t = b(t) || 0),
            g(n) &&
              ((d = !!n.leading),
              (o = (p = "maxWait" in n) ? f(b(n.maxWait) || 0, t) : o),
              (m = "trailing" in n ? !!n.trailing : m)),
            (T.cancel = function () {
              void 0 !== l && clearTimeout(l),
                (u = 0),
                (r = c = s = l = void 0);
            }),
            (T.flush = function () {
              return void 0 === l ? a : S(v());
            }),
            T
          );
        }
        function g(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function b(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == p.call(e))
              );
            })(e)
          )
            return NaN;
          if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(r, "");
          var n = o.test(e);
          return n || a.test(e)
            ? l(e.slice(2), n ? 2 : 8)
            : s.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, n) {
          var r = !0,
            s = !0;
          if ("function" != typeof e) throw new TypeError(i);
          return (
            g(n) &&
              ((r = "leading" in n ? !!n.leading : r),
              (s = "trailing" in n ? !!n.trailing : s)),
            m(e, t, { leading: r, maxWait: t, trailing: s })
          );
        };
      },
      5055: (e, t, n) => {
        var i = n(8454),
          r = n(6282),
          s = n(180),
          o = i.TypeError;
        e.exports = function (e) {
          if (r(e)) return e;
          throw o(s(e) + " is not a function");
        };
      },
      2004: (e, t, n) => {
        var i = n(8454),
          r = n(6282),
          s = i.String,
          o = i.TypeError;
        e.exports = function (e) {
          if ("object" == typeof e || r(e)) return e;
          throw o("Can't set " + s(e) + " as a prototype");
        };
      },
      9256: (e, t, n) => {
        var i = n(8149),
          r = n(1525),
          s = n(9168),
          o = i("unscopables"),
          a = Array.prototype;
        null == a[o] && s.f(a, o, { configurable: !0, value: r(null) }),
          (e.exports = function (e) {
            a[o][e] = !0;
          });
      },
      3615: (e, t, n) => {
        "use strict";
        var i = n(7321).charAt;
        e.exports = function (e, t, n) {
          return t + (n ? i(e, t).length : 1);
        };
      },
      3046: (e, t, n) => {
        var i = n(8454),
          r = n(1786),
          s = i.TypeError;
        e.exports = function (e, t) {
          if (r(t, e)) return e;
          throw s("Incorrect invocation");
        };
      },
      1474: (e, t, n) => {
        var i = n(8454),
          r = n(5896),
          s = i.String,
          o = i.TypeError;
        e.exports = function (e) {
          if (r(e)) return e;
          throw o(s(e) + " is not an object");
        };
      },
      8774: (e, t, n) => {
        var i = n(6183);
        e.exports = i(function () {
          if ("function" == typeof ArrayBuffer) {
            var e = new ArrayBuffer(8);
            Object.isExtensible(e) &&
              Object.defineProperty(e, "a", { value: 8 });
          }
        });
      },
      1269: (e, t, n) => {
        "use strict";
        var i = n(528).forEach,
          r = n(1923)("forEach");
        e.exports = r
          ? [].forEach
          : function (e) {
              return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            };
      },
      5675: (e, t, n) => {
        var i = n(3206),
          r = n(9623),
          s = n(1829),
          o = function (e) {
            return function (t, n, o) {
              var a,
                l = i(t),
                c = s(l),
                u = r(o, c);
              if (e && n != n) {
                for (; c > u; ) if ((a = l[u++]) != a) return !0;
              } else
                for (; c > u; u++)
                  if ((e || u in l) && l[u] === n) return e || u || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: o(!0), indexOf: o(!1) };
      },
      528: (e, t, n) => {
        var i = n(1098),
          r = n(1768),
          s = n(7530),
          o = n(9473),
          a = n(1829),
          l = n(2768),
          c = r([].push),
          u = function (e) {
            var t = 1 == e,
              n = 2 == e,
              r = 3 == e,
              u = 4 == e,
              d = 6 == e,
              p = 7 == e,
              f = 5 == e || d;
            return function (h, v, m, g) {
              for (
                var b,
                  y,
                  x = o(h),
                  w = s(x),
                  E = i(v, m),
                  S = a(w),
                  T = 0,
                  O = g || l,
                  C = t ? O(h, S) : n || p ? O(h, 0) : void 0;
                S > T;
                T++
              )
                if ((f || T in w) && ((y = E((b = w[T]), T, x)), e))
                  if (t) C[T] = y;
                  else if (y)
                    switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return b;
                      case 6:
                        return T;
                      case 2:
                        c(C, b);
                    }
                  else
                    switch (e) {
                      case 4:
                        return !1;
                      case 7:
                        c(C, b);
                    }
              return d ? -1 : r || u ? u : C;
            };
          };
        e.exports = {
          forEach: u(0),
          map: u(1),
          filter: u(2),
          some: u(3),
          every: u(4),
          find: u(5),
          findIndex: u(6),
          filterReject: u(7),
        };
      },
      4820: (e, t, n) => {
        var i = n(6183),
          r = n(8149),
          s = n(4324),
          o = r("species");
        e.exports = function (e) {
          return (
            s >= 51 ||
            !i(function () {
              var t = [];
              return (
                ((t.constructor = {})[o] = function () {
                  return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
              );
            })
          );
        };
      },
      1923: (e, t, n) => {
        "use strict";
        var i = n(6183);
        e.exports = function (e, t) {
          var n = [][e];
          return (
            !!n &&
            i(function () {
              n.call(
                null,
                t ||
                  function () {
                    return 1;
                  },
                1
              );
            })
          );
        };
      },
      6589: (e, t, n) => {
        var i = n(8454),
          r = n(5055),
          s = n(9473),
          o = n(7530),
          a = n(1829),
          l = i.TypeError,
          c = function (e) {
            return function (t, n, i, c) {
              r(n);
              var u = s(t),
                d = o(u),
                p = a(u),
                f = e ? p - 1 : 0,
                h = e ? -1 : 1;
              if (i < 2)
                for (;;) {
                  if (f in d) {
                    (c = d[f]), (f += h);
                    break;
                  }
                  if (((f += h), e ? f < 0 : p <= f))
                    throw l("Reduce of empty array with no initial value");
                }
              for (; e ? f >= 0 : p > f; f += h)
                f in d && (c = n(c, d[f], f, u));
              return c;
            };
          };
        e.exports = { left: c(!1), right: c(!0) };
      },
      4072: (e, t, n) => {
        var i = n(8454),
          r = n(9623),
          s = n(1829),
          o = n(2759),
          a = i.Array,
          l = Math.max;
        e.exports = function (e, t, n) {
          for (
            var i = s(e),
              c = r(t, i),
              u = r(void 0 === n ? i : n, i),
              d = a(l(u - c, 0)),
              p = 0;
            c < u;
            c++, p++
          )
            o(d, p, e[c]);
          return (d.length = p), d;
        };
      },
      9882: (e, t, n) => {
        var i = n(8454),
          r = n(7931),
          s = n(2240),
          o = n(5896),
          a = n(8149)("species"),
          l = i.Array;
        e.exports = function (e) {
          var t;
          return (
            r(e) &&
              ((t = e.constructor),
              ((s(t) && (t === l || r(t.prototype))) ||
                (o(t) && null === (t = t[a]))) &&
                (t = void 0)),
            void 0 === t ? l : t
          );
        };
      },
      2768: (e, t, n) => {
        var i = n(9882);
        e.exports = function (e, t) {
          return new (i(e))(0 === t ? 0 : t);
        };
      },
      1751: (e, t, n) => {
        var i = n(8149)("iterator"),
          r = !1;
        try {
          var s = 0,
            o = {
              next: function () {
                return { done: !!s++ };
              },
              return: function () {
                r = !0;
              },
            };
          (o[i] = function () {
            return this;
          }),
            Array.from(o, function () {
              throw 2;
            });
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !r) return !1;
          var n = !1;
          try {
            var s = {};
            (s[i] = function () {
              return {
                next: function () {
                  return { done: (n = !0) };
                },
              };
            }),
              e(s);
          } catch (e) {}
          return n;
        };
      },
      1510: (e, t, n) => {
        var i = n(1768),
          r = i({}.toString),
          s = i("".slice);
        e.exports = function (e) {
          return s(r(e), 8, -1);
        };
      },
      9225: (e, t, n) => {
        var i = n(8454),
          r = n(4823),
          s = n(6282),
          o = n(1510),
          a = n(8149)("toStringTag"),
          l = i.Object,
          c =
            "Arguments" ==
            o(
              (function () {
                return arguments;
              })()
            );
        e.exports = r
          ? o
          : function (e) {
              var t, n, i;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (n = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = l(e)), a))
                ? n
                : c
                ? o(t)
                : "Object" == (i = o(t)) && s(t.callee)
                ? "Arguments"
                : i;
            };
      },
      7790: (e, t, n) => {
        "use strict";
        var i = n(1768),
          r = n(9573),
          s = n(6582).getWeakData,
          o = n(1474),
          a = n(5896),
          l = n(3046),
          c = n(1518),
          u = n(528),
          d = n(8281),
          p = n(1030),
          f = p.set,
          h = p.getterFor,
          v = u.find,
          m = u.findIndex,
          g = i([].splice),
          b = 0,
          y = function (e) {
            return e.frozen || (e.frozen = new x());
          },
          x = function () {
            this.entries = [];
          },
          w = function (e, t) {
            return v(e.entries, function (e) {
              return e[0] === t;
            });
          };
        (x.prototype = {
          get: function (e) {
            var t = w(this, e);
            if (t) return t[1];
          },
          has: function (e) {
            return !!w(this, e);
          },
          set: function (e, t) {
            var n = w(this, e);
            n ? (n[1] = t) : this.entries.push([e, t]);
          },
          delete: function (e) {
            var t = m(this.entries, function (t) {
              return t[0] === e;
            });
            return ~t && g(this.entries, t, 1), !!~t;
          },
        }),
          (e.exports = {
            getConstructor: function (e, t, n, i) {
              var u = e(function (e, r) {
                  l(e, p),
                    f(e, { type: t, id: b++, frozen: void 0 }),
                    null != r && c(r, e[i], { that: e, AS_ENTRIES: n });
                }),
                p = u.prototype,
                v = h(t),
                m = function (e, t, n) {
                  var i = v(e),
                    r = s(o(t), !0);
                  return !0 === r ? y(i).set(t, n) : (r[i.id] = n), e;
                };
              return (
                r(p, {
                  delete: function (e) {
                    var t = v(this);
                    if (!a(e)) return !1;
                    var n = s(e);
                    return !0 === n
                      ? y(t).delete(e)
                      : n && d(n, t.id) && delete n[t.id];
                  },
                  has: function (e) {
                    var t = v(this);
                    if (!a(e)) return !1;
                    var n = s(e);
                    return !0 === n ? y(t).has(e) : n && d(n, t.id);
                  },
                }),
                r(
                  p,
                  n
                    ? {
                        get: function (e) {
                          var t = v(this);
                          if (a(e)) {
                            var n = s(e);
                            return !0 === n
                              ? y(t).get(e)
                              : n
                              ? n[t.id]
                              : void 0;
                          }
                        },
                        set: function (e, t) {
                          return m(this, e, t);
                        },
                      }
                    : {
                        add: function (e) {
                          return m(this, e, !0);
                        },
                      }
                ),
                u
              );
            },
          });
      },
      6645: (e, t, n) => {
        "use strict";
        var i = n(4761),
          r = n(8454),
          s = n(1768),
          o = n(1949),
          a = n(3971),
          l = n(6582),
          c = n(1518),
          u = n(3046),
          d = n(6282),
          p = n(5896),
          f = n(6183),
          h = n(1751),
          v = n(820),
          m = n(7770);
        e.exports = function (e, t, n) {
          var g = -1 !== e.indexOf("Map"),
            b = -1 !== e.indexOf("Weak"),
            y = g ? "set" : "add",
            x = r[e],
            w = x && x.prototype,
            E = x,
            S = {},
            T = function (e) {
              var t = s(w[e]);
              a(
                w,
                e,
                "add" == e
                  ? function (e) {
                      return t(this, 0 === e ? 0 : e), this;
                    }
                  : "delete" == e
                  ? function (e) {
                      return !(b && !p(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : "get" == e
                  ? function (e) {
                      return b && !p(e) ? void 0 : t(this, 0 === e ? 0 : e);
                    }
                  : "has" == e
                  ? function (e) {
                      return !(b && !p(e)) && t(this, 0 === e ? 0 : e);
                    }
                  : function (e, n) {
                      return t(this, 0 === e ? 0 : e, n), this;
                    }
              );
            };
          if (
            o(
              e,
              !d(x) ||
                !(
                  b ||
                  (w.forEach &&
                    !f(function () {
                      new x().entries().next();
                    }))
                )
            )
          )
            (E = n.getConstructor(t, e, g, y)), l.enable();
          else if (o(e, !0)) {
            var O = new E(),
              C = O[y](b ? {} : -0, 1) != O,
              A = f(function () {
                O.has(1);
              }),
              k = h(function (e) {
                new x(e);
              }),
              L =
                !b &&
                f(function () {
                  for (var e = new x(), t = 5; t--; ) e[y](t, t);
                  return !e.has(-0);
                });
            k ||
              (((E = t(function (e, t) {
                u(e, w);
                var n = m(new x(), e, E);
                return null != t && c(t, n[y], { that: n, AS_ENTRIES: g }), n;
              })).prototype = w),
              (w.constructor = E)),
              (A || L) && (T("delete"), T("has"), g && T("get")),
              (L || C) && T(y),
              b && w.clear && delete w.clear;
          }
          return (
            (S[e] = E),
            i({ global: !0, forced: E != x }, S),
            v(E, e),
            b || n.setStrong(E, e, g),
            E
          );
        };
      },
      882: (e, t, n) => {
        var i = n(8281),
          r = n(1441),
          s = n(5663),
          o = n(9168);
        e.exports = function (e, t, n) {
          for (var a = r(t), l = o.f, c = s.f, u = 0; u < a.length; u++) {
            var d = a[u];
            i(e, d) || (n && i(n, d)) || l(e, d, c(t, d));
          }
        };
      },
      7401: (e, t, n) => {
        var i = n(6183);
        e.exports = !i(function () {
          function e() {}
          return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
          );
        });
      },
      2538: (e, t, n) => {
        "use strict";
        var i = n(6524).IteratorPrototype,
          r = n(1525),
          s = n(9273),
          o = n(820),
          a = n(6126),
          l = function () {
            return this;
          };
        e.exports = function (e, t, n, c) {
          var u = t + " Iterator";
          return (
            (e.prototype = r(i, { next: s(+!c, n) })),
            o(e, u, !1, !0),
            (a[u] = l),
            e
          );
        };
      },
      1501: (e, t, n) => {
        var i = n(723),
          r = n(9168),
          s = n(9273);
        e.exports = i
          ? function (e, t, n) {
              return r.f(e, t, s(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      9273: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      2759: (e, t, n) => {
        "use strict";
        var i = n(2988),
          r = n(9168),
          s = n(9273);
        e.exports = function (e, t, n) {
          var o = i(t);
          o in e ? r.f(e, o, s(0, n)) : (e[o] = n);
        };
      },
      7583: (e, t, n) => {
        "use strict";
        var i = n(4761),
          r = n(4552),
          s = n(8977),
          o = n(4530),
          a = n(6282),
          l = n(2538),
          c = n(4204),
          u = n(5900),
          d = n(820),
          p = n(1501),
          f = n(3971),
          h = n(8149),
          v = n(6126),
          m = n(6524),
          g = o.PROPER,
          b = o.CONFIGURABLE,
          y = m.IteratorPrototype,
          x = m.BUGGY_SAFARI_ITERATORS,
          w = h("iterator"),
          E = "keys",
          S = "values",
          T = "entries",
          O = function () {
            return this;
          };
        e.exports = function (e, t, n, o, h, m, C) {
          l(n, t, o);
          var A,
            k,
            L,
            M = function (e) {
              if (e === h && I) return I;
              if (!x && e in _) return _[e];
              switch (e) {
                case E:
                case S:
                case T:
                  return function () {
                    return new n(this, e);
                  };
              }
              return function () {
                return new n(this);
              };
            },
            P = t + " Iterator",
            $ = !1,
            _ = e.prototype,
            z = _[w] || _["@@iterator"] || (h && _[h]),
            I = (!x && z) || M(h),
            j = ("Array" == t && _.entries) || z;
          if (
            (j &&
              (A = c(j.call(new e()))) !== Object.prototype &&
              A.next &&
              (s || c(A) === y || (u ? u(A, y) : a(A[w]) || f(A, w, O)),
              d(A, P, !0, !0),
              s && (v[P] = O)),
            g &&
              h == S &&
              z &&
              z.name !== S &&
              (!s && b
                ? p(_, "name", S)
                : (($ = !0),
                  (I = function () {
                    return r(z, this);
                  }))),
            h)
          )
            if (((k = { values: M(S), keys: m ? I : M(E), entries: M(T) }), C))
              for (L in k) (x || $ || !(L in _)) && f(_, L, k[L]);
            else i({ target: t, proto: !0, forced: x || $ }, k);
          return (
            (s && !C) || _[w] === I || f(_, w, I, { name: h }), (v[t] = I), k
          );
        };
      },
      723: (e, t, n) => {
        var i = n(6183);
        e.exports = !i(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      7282: (e, t, n) => {
        var i = n(8454),
          r = n(5896),
          s = i.document,
          o = r(s) && r(s.createElement);
        e.exports = function (e) {
          return o ? s.createElement(e) : {};
        };
      },
      6181: (e) => {
        e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      2387: (e, t, n) => {
        var i = n(7282)("span").classList,
          r = i && i.constructor && i.constructor.prototype;
        e.exports = r === Object.prototype ? void 0 : r;
      },
      7594: (e, t, n) => {
        var i = n(1510),
          r = n(8454);
        e.exports = "process" == i(r.process);
      },
      2543: (e, t, n) => {
        var i = n(4991);
        e.exports = i("navigator", "userAgent") || "";
      },
      4324: (e, t, n) => {
        var i,
          r,
          s = n(8454),
          o = n(2543),
          a = s.process,
          l = s.Deno,
          c = (a && a.versions) || (l && l.version),
          u = c && c.v8;
        u && (r = (i = u.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
          !r &&
            o &&
            (!(i = o.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
            (i = o.match(/Chrome\/(\d+)/)) &&
            (r = +i[1]),
          (e.exports = r);
      },
      8409: (e) => {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      4761: (e, t, n) => {
        var i = n(8454),
          r = n(5663).f,
          s = n(1501),
          o = n(3971),
          a = n(7852),
          l = n(882),
          c = n(1949);
        e.exports = function (e, t) {
          var n,
            u,
            d,
            p,
            f,
            h = e.target,
            v = e.global,
            m = e.stat;
          if ((n = v ? i : m ? i[h] || a(h, {}) : (i[h] || {}).prototype))
            for (u in t) {
              if (
                ((p = t[u]),
                (d = e.noTargetGet ? (f = r(n, u)) && f.value : n[u]),
                !c(v ? u : h + (m ? "." : "#") + u, e.forced) && void 0 !== d)
              ) {
                if (typeof p == typeof d) continue;
                l(p, d);
              }
              (e.sham || (d && d.sham)) && s(p, "sham", !0), o(n, u, p, e);
            }
        };
      },
      6183: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      9696: (e, t, n) => {
        "use strict";
        n(9989);
        var i = n(1768),
          r = n(3971),
          s = n(5510),
          o = n(6183),
          a = n(8149),
          l = n(1501),
          c = a("species"),
          u = RegExp.prototype;
        e.exports = function (e, t, n, d) {
          var p = a(e),
            f = !o(function () {
              var t = {};
              return (
                (t[p] = function () {
                  return 7;
                }),
                7 != ""[e](t)
              );
            }),
            h =
              f &&
              !o(function () {
                var t = !1,
                  n = /a/;
                return (
                  "split" === e &&
                    (((n = {}).constructor = {}),
                    (n.constructor[c] = function () {
                      return n;
                    }),
                    (n.flags = ""),
                    (n[p] = /./[p])),
                  (n.exec = function () {
                    return (t = !0), null;
                  }),
                  n[p](""),
                  !t
                );
              });
          if (!f || !h || n) {
            var v = i(/./[p]),
              m = t(p, ""[e], function (e, t, n, r, o) {
                var a = i(e),
                  l = t.exec;
                return l === s || l === u.exec
                  ? f && !o
                    ? { done: !0, value: v(t, n, r) }
                    : { done: !0, value: a(n, t, r) }
                  : { done: !1 };
              });
            r(String.prototype, e, m[0]), r(u, p, m[1]);
          }
          d && l(u[p], "sham", !0);
        };
      },
      3116: (e, t, n) => {
        var i = n(6183);
        e.exports = !i(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      6218: (e, t, n) => {
        var i = n(160),
          r = Function.prototype,
          s = r.apply,
          o = r.call;
        e.exports =
          ("object" == typeof Reflect && Reflect.apply) ||
          (i
            ? o.bind(s)
            : function () {
                return o.apply(s, arguments);
              });
      },
      1098: (e, t, n) => {
        var i = n(1768),
          r = n(5055),
          s = n(160),
          o = i(i.bind);
        e.exports = function (e, t) {
          return (
            r(e),
            void 0 === t
              ? e
              : s
              ? o(e, t)
              : function () {
                  return e.apply(t, arguments);
                }
          );
        };
      },
      160: (e, t, n) => {
        var i = n(6183);
        e.exports = !i(function () {
          var e = function () {}.bind();
          return "function" != typeof e || e.hasOwnProperty("prototype");
        });
      },
      4552: (e, t, n) => {
        var i = n(160),
          r = Function.prototype.call;
        e.exports = i
          ? r.bind(r)
          : function () {
              return r.apply(r, arguments);
            };
      },
      4530: (e, t, n) => {
        var i = n(723),
          r = n(8281),
          s = Function.prototype,
          o = i && Object.getOwnPropertyDescriptor,
          a = r(s, "name"),
          l = a && "something" === function () {}.name,
          c = a && (!i || (i && o(s, "name").configurable));
        e.exports = { EXISTS: a, PROPER: l, CONFIGURABLE: c };
      },
      1768: (e, t, n) => {
        var i = n(160),
          r = Function.prototype,
          s = r.bind,
          o = r.call,
          a = i && s.bind(o, o);
        e.exports = i
          ? function (e) {
              return e && a(e);
            }
          : function (e) {
              return (
                e &&
                function () {
                  return o.apply(e, arguments);
                }
              );
            };
      },
      4991: (e, t, n) => {
        var i = n(8454),
          r = n(6282),
          s = function (e) {
            return r(e) ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2 ? s(i[e]) : i[e] && i[e][t];
        };
      },
      650: (e, t, n) => {
        var i = n(9225),
          r = n(9827),
          s = n(6126),
          o = n(8149)("iterator");
        e.exports = function (e) {
          if (null != e) return r(e, o) || r(e, "@@iterator") || s[i(e)];
        };
      },
      7755: (e, t, n) => {
        var i = n(8454),
          r = n(4552),
          s = n(5055),
          o = n(1474),
          a = n(180),
          l = n(650),
          c = i.TypeError;
        e.exports = function (e, t) {
          var n = arguments.length < 2 ? l(e) : t;
          if (s(n)) return o(r(n, e));
          throw c(a(e) + " is not iterable");
        };
      },
      9827: (e, t, n) => {
        var i = n(5055);
        e.exports = function (e, t) {
          var n = e[t];
          return null == n ? void 0 : i(n);
        };
      },
      4742: (e, t, n) => {
        var i = n(1768),
          r = n(9473),
          s = Math.floor,
          o = i("".charAt),
          a = i("".replace),
          l = i("".slice),
          c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
          u = /\$([$&'`]|\d{1,2})/g;
        e.exports = function (e, t, n, i, d, p) {
          var f = n + e.length,
            h = i.length,
            v = u;
          return (
            void 0 !== d && ((d = r(d)), (v = c)),
            a(p, v, function (r, a) {
              var c;
              switch (o(a, 0)) {
                case "$":
                  return "$";
                case "&":
                  return e;
                case "`":
                  return l(t, 0, n);
                case "'":
                  return l(t, f);
                case "<":
                  c = d[l(a, 1, -1)];
                  break;
                default:
                  var u = +a;
                  if (0 === u) return r;
                  if (u > h) {
                    var p = s(u / 10);
                    return 0 === p
                      ? r
                      : p <= h
                      ? void 0 === i[p - 1]
                        ? o(a, 1)
                        : i[p - 1] + o(a, 1)
                      : r;
                  }
                  c = i[u - 1];
              }
              return void 0 === c ? "" : c;
            })
          );
        };
      },
      8454: (e, t, n) => {
        var i = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          i("object" == typeof globalThis && globalThis) ||
          i("object" == typeof window && window) ||
          i("object" == typeof self && self) ||
          i("object" == typeof n.g && n.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      8281: (e, t, n) => {
        var i = n(1768),
          r = n(9473),
          s = i({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return s(r(e), t);
          };
      },
      4377: (e) => {
        e.exports = {};
      },
      7461: (e, t, n) => {
        var i = n(4991);
        e.exports = i("document", "documentElement");
      },
      4985: (e, t, n) => {
        var i = n(723),
          r = n(6183),
          s = n(7282);
        e.exports =
          !i &&
          !r(function () {
            return (
              7 !=
              Object.defineProperty(s("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      7530: (e, t, n) => {
        var i = n(8454),
          r = n(1768),
          s = n(6183),
          o = n(1510),
          a = i.Object,
          l = r("".split);
        e.exports = s(function () {
          return !a("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == o(e) ? l(e, "") : a(e);
            }
          : a;
      },
      7770: (e, t, n) => {
        var i = n(6282),
          r = n(5896),
          s = n(5900);
        e.exports = function (e, t, n) {
          var o, a;
          return (
            s &&
              i((o = t.constructor)) &&
              o !== n &&
              r((a = o.prototype)) &&
              a !== n.prototype &&
              s(e, a),
            e
          );
        };
      },
      6901: (e, t, n) => {
        var i = n(1768),
          r = n(6282),
          s = n(2047),
          o = i(Function.toString);
        r(s.inspectSource) ||
          (s.inspectSource = function (e) {
            return o(e);
          }),
          (e.exports = s.inspectSource);
      },
      6582: (e, t, n) => {
        var i = n(4761),
          r = n(1768),
          s = n(4377),
          o = n(5896),
          a = n(8281),
          l = n(9168).f,
          c = n(6785),
          u = n(6675),
          d = n(6662),
          p = n(9059),
          f = n(3116),
          h = !1,
          v = p("meta"),
          m = 0,
          g = function (e) {
            l(e, v, { value: { objectID: "O" + m++, weakData: {} } });
          },
          b = (e.exports = {
            enable: function () {
              (b.enable = function () {}), (h = !0);
              var e = c.f,
                t = r([].splice),
                n = {};
              (n[v] = 1),
                e(n).length &&
                  ((c.f = function (n) {
                    for (var i = e(n), r = 0, s = i.length; r < s; r++)
                      if (i[r] === v) {
                        t(i, r, 1);
                        break;
                      }
                    return i;
                  }),
                  i(
                    { target: "Object", stat: !0, forced: !0 },
                    { getOwnPropertyNames: u.f }
                  ));
            },
            fastKey: function (e, t) {
              if (!o(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!a(e, v)) {
                if (!d(e)) return "F";
                if (!t) return "E";
                g(e);
              }
              return e[v].objectID;
            },
            getWeakData: function (e, t) {
              if (!a(e, v)) {
                if (!d(e)) return !0;
                if (!t) return !1;
                g(e);
              }
              return e[v].weakData;
            },
            onFreeze: function (e) {
              return f && h && d(e) && !a(e, v) && g(e), e;
            },
          });
        s[v] = !0;
      },
      1030: (e, t, n) => {
        var i,
          r,
          s,
          o = n(4404),
          a = n(8454),
          l = n(1768),
          c = n(5896),
          u = n(1501),
          d = n(8281),
          p = n(2047),
          f = n(8873),
          h = n(4377),
          v = "Object already initialized",
          m = a.TypeError,
          g = a.WeakMap;
        if (o || p.state) {
          var b = p.state || (p.state = new g()),
            y = l(b.get),
            x = l(b.has),
            w = l(b.set);
          (i = function (e, t) {
            if (x(b, e)) throw new m(v);
            return (t.facade = e), w(b, e, t), t;
          }),
            (r = function (e) {
              return y(b, e) || {};
            }),
            (s = function (e) {
              return x(b, e);
            });
        } else {
          var E = f("state");
          (h[E] = !0),
            (i = function (e, t) {
              if (d(e, E)) throw new m(v);
              return (t.facade = e), u(e, E, t), t;
            }),
            (r = function (e) {
              return d(e, E) ? e[E] : {};
            }),
            (s = function (e) {
              return d(e, E);
            });
        }
        e.exports = {
          set: i,
          get: r,
          has: s,
          enforce: function (e) {
            return s(e) ? r(e) : i(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var n;
              if (!c(t) || (n = r(t)).type !== e)
                throw m("Incompatible receiver, " + e + " required");
              return n;
            };
          },
        };
      },
      5859: (e, t, n) => {
        var i = n(8149),
          r = n(6126),
          s = i("iterator"),
          o = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (r.Array === e || o[s] === e);
        };
      },
      7931: (e, t, n) => {
        var i = n(1510);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == i(e);
          };
      },
      6282: (e) => {
        e.exports = function (e) {
          return "function" == typeof e;
        };
      },
      2240: (e, t, n) => {
        var i = n(1768),
          r = n(6183),
          s = n(6282),
          o = n(9225),
          a = n(4991),
          l = n(6901),
          c = function () {},
          u = [],
          d = a("Reflect", "construct"),
          p = /^\s*(?:class|function)\b/,
          f = i(p.exec),
          h = !p.exec(c),
          v = function (e) {
            if (!s(e)) return !1;
            try {
              return d(c, u, e), !0;
            } catch (e) {
              return !1;
            }
          },
          m = function (e) {
            if (!s(e)) return !1;
            switch (o(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return h || !!f(p, l(e));
            } catch (e) {
              return !0;
            }
          };
        (m.sham = !0),
          (e.exports =
            !d ||
            r(function () {
              var e;
              return (
                v(v.call) ||
                !v(Object) ||
                !v(function () {
                  e = !0;
                }) ||
                e
              );
            })
              ? m
              : v);
      },
      1949: (e, t, n) => {
        var i = n(6183),
          r = n(6282),
          s = /#|\.prototype\./,
          o = function (e, t) {
            var n = l[a(e)];
            return n == u || (n != c && (r(t) ? i(t) : !!t));
          },
          a = (o.normalize = function (e) {
            return String(e).replace(s, ".").toLowerCase();
          }),
          l = (o.data = {}),
          c = (o.NATIVE = "N"),
          u = (o.POLYFILL = "P");
        e.exports = o;
      },
      5896: (e, t, n) => {
        var i = n(6282);
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : i(e);
        };
      },
      8977: (e) => {
        e.exports = !1;
      },
      1527: (e, t, n) => {
        var i = n(8454),
          r = n(4991),
          s = n(6282),
          o = n(1786),
          a = n(4746),
          l = i.Object;
        e.exports = a
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = r("Symbol");
              return s(t) && o(t.prototype, l(e));
            };
      },
      1518: (e, t, n) => {
        var i = n(8454),
          r = n(1098),
          s = n(4552),
          o = n(1474),
          a = n(180),
          l = n(5859),
          c = n(1829),
          u = n(1786),
          d = n(7755),
          p = n(650),
          f = n(9193),
          h = i.TypeError,
          v = function (e, t) {
            (this.stopped = e), (this.result = t);
          },
          m = v.prototype;
        e.exports = function (e, t, n) {
          var i,
            g,
            b,
            y,
            x,
            w,
            E,
            S = n && n.that,
            T = !(!n || !n.AS_ENTRIES),
            O = !(!n || !n.IS_ITERATOR),
            C = !(!n || !n.INTERRUPTED),
            A = r(t, S),
            k = function (e) {
              return i && f(i, "normal", e), new v(!0, e);
            },
            L = function (e) {
              return T
                ? (o(e), C ? A(e[0], e[1], k) : A(e[0], e[1]))
                : C
                ? A(e, k)
                : A(e);
            };
          if (O) i = e;
          else {
            if (!(g = p(e))) throw h(a(e) + " is not iterable");
            if (l(g)) {
              for (b = 0, y = c(e); y > b; b++)
                if ((x = L(e[b])) && u(m, x)) return x;
              return new v(!1);
            }
            i = d(e, g);
          }
          for (w = i.next; !(E = s(w, i)).done; ) {
            try {
              x = L(E.value);
            } catch (e) {
              f(i, "throw", e);
            }
            if ("object" == typeof x && x && u(m, x)) return x;
          }
          return new v(!1);
        };
      },
      9193: (e, t, n) => {
        var i = n(4552),
          r = n(1474),
          s = n(9827);
        e.exports = function (e, t, n) {
          var o, a;
          r(e);
          try {
            if (!(o = s(e, "return"))) {
              if ("throw" === t) throw n;
              return n;
            }
            o = i(o, e);
          } catch (e) {
            (a = !0), (o = e);
          }
          if ("throw" === t) throw n;
          if (a) throw o;
          return r(o), n;
        };
      },
      6524: (e, t, n) => {
        "use strict";
        var i,
          r,
          s,
          o = n(6183),
          a = n(6282),
          l = n(1525),
          c = n(4204),
          u = n(3971),
          d = n(8149),
          p = n(8977),
          f = d("iterator"),
          h = !1;
        [].keys &&
          ("next" in (s = [].keys())
            ? (r = c(c(s))) !== Object.prototype && (i = r)
            : (h = !0)),
          null == i ||
          o(function () {
            var e = {};
            return i[f].call(e) !== e;
          })
            ? (i = {})
            : p && (i = l(i)),
          a(i[f]) ||
            u(i, f, function () {
              return this;
            }),
          (e.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: h });
      },
      6126: (e) => {
        e.exports = {};
      },
      1829: (e, t, n) => {
        var i = n(3917);
        e.exports = function (e) {
          return i(e.length);
        };
      },
      323: (e, t, n) => {
        var i = n(4324),
          r = n(6183);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !r(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && i && i < 41)
            );
          });
      },
      4404: (e, t, n) => {
        var i = n(8454),
          r = n(6282),
          s = n(6901),
          o = i.WeakMap;
        e.exports = r(o) && /native code/.test(s(o));
      },
      8513: (e, t, n) => {
        var i = n(8454),
          r = n(6183),
          s = n(1768),
          o = n(7655),
          a = n(9749).trim,
          l = n(8342),
          c = i.parseInt,
          u = i.Symbol,
          d = u && u.iterator,
          p = /^[+-]?0x/i,
          f = s(p.exec),
          h =
            8 !== c(l + "08") ||
            22 !== c(l + "0x16") ||
            (d &&
              !r(function () {
                c(Object(d));
              }));
        e.exports = h
          ? function (e, t) {
              var n = a(o(e));
              return c(n, t >>> 0 || (f(p, n) ? 16 : 10));
            }
          : c;
      },
      4727: (e, t, n) => {
        "use strict";
        var i = n(723),
          r = n(1768),
          s = n(4552),
          o = n(6183),
          a = n(1340),
          l = n(8074),
          c = n(4043),
          u = n(9473),
          d = n(7530),
          p = Object.assign,
          f = Object.defineProperty,
          h = r([].concat);
        e.exports =
          !p ||
          o(function () {
            if (
              i &&
              1 !==
                p(
                  { b: 1 },
                  p(
                    f({}, "a", {
                      enumerable: !0,
                      get: function () {
                        f(this, "b", { value: 3, enumerable: !1 });
                      },
                    }),
                    { b: 2 }
                  )
                ).b
            )
              return !0;
            var e = {},
              t = {},
              n = Symbol(),
              r = "abcdefghijklmnopqrst";
            return (
              (e[n] = 7),
              r.split("").forEach(function (e) {
                t[e] = e;
              }),
              7 != p({}, e)[n] || a(p({}, t)).join("") != r
            );
          })
            ? function (e, t) {
                for (
                  var n = u(e), r = arguments.length, o = 1, p = l.f, f = c.f;
                  r > o;

                )
                  for (
                    var v,
                      m = d(arguments[o++]),
                      g = p ? h(a(m), p(m)) : a(m),
                      b = g.length,
                      y = 0;
                    b > y;

                  )
                    (v = g[y++]), (i && !s(f, m, v)) || (n[v] = m[v]);
                return n;
              }
            : p;
      },
      1525: (e, t, n) => {
        var i,
          r = n(1474),
          s = n(262),
          o = n(8409),
          a = n(4377),
          l = n(7461),
          c = n(7282),
          u = n(8873),
          d = u("IE_PROTO"),
          p = function () {},
          f = function (e) {
            return "<script>" + e + "</" + "script>";
          },
          h = function (e) {
            e.write(f("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          },
          v = function () {
            try {
              i = new ActiveXObject("htmlfile");
            } catch (e) {}
            var e, t;
            v =
              "undefined" != typeof document
                ? document.domain && i
                  ? h(i)
                  : (((t = c("iframe")).style.display = "none"),
                    l.appendChild(t),
                    (t.src = String("javascript:")),
                    (e = t.contentWindow.document).open(),
                    e.write(f("document.F=Object")),
                    e.close(),
                    e.F)
                : h(i);
            for (var n = o.length; n--; ) delete v.prototype[o[n]];
            return v();
          };
        (a[d] = !0),
          (e.exports =
            Object.create ||
            function (e, t) {
              var n;
              return (
                null !== e
                  ? ((p.prototype = r(e)),
                    (n = new p()),
                    (p.prototype = null),
                    (n[d] = e))
                  : (n = v()),
                void 0 === t ? n : s.f(n, t)
              );
            });
      },
      262: (e, t, n) => {
        var i = n(723),
          r = n(8654),
          s = n(9168),
          o = n(1474),
          a = n(3206),
          l = n(1340);
        t.f =
          i && !r
            ? Object.defineProperties
            : function (e, t) {
                o(e);
                for (var n, i = a(t), r = l(t), c = r.length, u = 0; c > u; )
                  s.f(e, (n = r[u++]), i[n]);
                return e;
              };
      },
      9168: (e, t, n) => {
        var i = n(8454),
          r = n(723),
          s = n(4985),
          o = n(8654),
          a = n(1474),
          l = n(2988),
          c = i.TypeError,
          u = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          p = "enumerable",
          f = "configurable",
          h = "writable";
        t.f = r
          ? o
            ? function (e, t, n) {
                if (
                  (a(e),
                  (t = l(t)),
                  a(n),
                  "function" == typeof e &&
                    "prototype" === t &&
                    "value" in n &&
                    h in n &&
                    !n.writable)
                ) {
                  var i = d(e, t);
                  i &&
                    i.writable &&
                    ((e[t] = n.value),
                    (n = {
                      configurable: f in n ? n.configurable : i.configurable,
                      enumerable: p in n ? n.enumerable : i.enumerable,
                      writable: !1,
                    }));
                }
                return u(e, t, n);
              }
            : u
          : function (e, t, n) {
              if ((a(e), (t = l(t)), a(n), s))
                try {
                  return u(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n) throw c("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      5663: (e, t, n) => {
        var i = n(723),
          r = n(4552),
          s = n(4043),
          o = n(9273),
          a = n(3206),
          l = n(2988),
          c = n(8281),
          u = n(4985),
          d = Object.getOwnPropertyDescriptor;
        t.f = i
          ? d
          : function (e, t) {
              if (((e = a(e)), (t = l(t)), u))
                try {
                  return d(e, t);
                } catch (e) {}
              if (c(e, t)) return o(!r(s.f, e, t), e[t]);
            };
      },
      6675: (e, t, n) => {
        var i = n(1510),
          r = n(3206),
          s = n(6785).f,
          o = n(4072),
          a =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];
        e.exports.f = function (e) {
          return a && "Window" == i(e)
            ? (function (e) {
                try {
                  return s(e);
                } catch (e) {
                  return o(a);
                }
              })(e)
            : s(r(e));
        };
      },
      6785: (e, t, n) => {
        var i = n(5113),
          r = n(8409).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return i(e, r);
          };
      },
      8074: (e, t) => {
        t.f = Object.getOwnPropertySymbols;
      },
      4204: (e, t, n) => {
        var i = n(8454),
          r = n(8281),
          s = n(6282),
          o = n(9473),
          a = n(8873),
          l = n(7401),
          c = a("IE_PROTO"),
          u = i.Object,
          d = u.prototype;
        e.exports = l
          ? u.getPrototypeOf
          : function (e) {
              var t = o(e);
              if (r(t, c)) return t[c];
              var n = t.constructor;
              return s(n) && t instanceof n
                ? n.prototype
                : t instanceof u
                ? d
                : null;
            };
      },
      6662: (e, t, n) => {
        var i = n(6183),
          r = n(5896),
          s = n(1510),
          o = n(8774),
          a = Object.isExtensible,
          l = i(function () {
            a(1);
          });
        e.exports =
          l || o
            ? function (e) {
                return !!r(e) && (!o || "ArrayBuffer" != s(e)) && (!a || a(e));
              }
            : a;
      },
      1786: (e, t, n) => {
        var i = n(1768);
        e.exports = i({}.isPrototypeOf);
      },
      5113: (e, t, n) => {
        var i = n(1768),
          r = n(8281),
          s = n(3206),
          o = n(5675).indexOf,
          a = n(4377),
          l = i([].push);
        e.exports = function (e, t) {
          var n,
            i = s(e),
            c = 0,
            u = [];
          for (n in i) !r(a, n) && r(i, n) && l(u, n);
          for (; t.length > c; ) r(i, (n = t[c++])) && (~o(u, n) || l(u, n));
          return u;
        };
      },
      1340: (e, t, n) => {
        var i = n(5113),
          r = n(8409);
        e.exports =
          Object.keys ||
          function (e) {
            return i(e, r);
          };
      },
      4043: (e, t) => {
        "use strict";
        var n = {}.propertyIsEnumerable,
          i = Object.getOwnPropertyDescriptor,
          r = i && !n.call({ 1: 2 }, 1);
        t.f = r
          ? function (e) {
              var t = i(this, e);
              return !!t && t.enumerable;
            }
          : n;
      },
      5900: (e, t, n) => {
        var i = n(1768),
          r = n(1474),
          s = n(2004);
        e.exports =
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function () {
                var e,
                  t = !1,
                  n = {};
                try {
                  (e = i(
                    Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set
                  ))(n, []),
                    (t = n instanceof Array);
                } catch (e) {}
                return function (n, i) {
                  return r(n), s(i), t ? e(n, i) : (n.__proto__ = i), n;
                };
              })()
            : void 0);
      },
      4117: (e, t, n) => {
        "use strict";
        var i = n(4823),
          r = n(9225);
        e.exports = i
          ? {}.toString
          : function () {
              return "[object " + r(this) + "]";
            };
      },
      6891: (e, t, n) => {
        var i = n(8454),
          r = n(4552),
          s = n(6282),
          o = n(5896),
          a = i.TypeError;
        e.exports = function (e, t) {
          var n, i;
          if ("string" === t && s((n = e.toString)) && !o((i = r(n, e))))
            return i;
          if (s((n = e.valueOf)) && !o((i = r(n, e)))) return i;
          if ("string" !== t && s((n = e.toString)) && !o((i = r(n, e))))
            return i;
          throw a("Can't convert object to primitive value");
        };
      },
      1441: (e, t, n) => {
        var i = n(4991),
          r = n(1768),
          s = n(6785),
          o = n(8074),
          a = n(1474),
          l = r([].concat);
        e.exports =
          i("Reflect", "ownKeys") ||
          function (e) {
            var t = s.f(a(e)),
              n = o.f;
            return n ? l(t, n(e)) : t;
          };
      },
      9573: (e, t, n) => {
        var i = n(3971);
        e.exports = function (e, t, n) {
          for (var r in t) i(e, r, t[r], n);
          return e;
        };
      },
      3971: (e, t, n) => {
        var i = n(8454),
          r = n(6282),
          s = n(8281),
          o = n(1501),
          a = n(7852),
          l = n(6901),
          c = n(1030),
          u = n(4530).CONFIGURABLE,
          d = c.get,
          p = c.enforce,
          f = String(String).split("String");
        (e.exports = function (e, t, n, l) {
          var c,
            d = !!l && !!l.unsafe,
            h = !!l && !!l.enumerable,
            v = !!l && !!l.noTargetGet,
            m = l && void 0 !== l.name ? l.name : t;
          r(n) &&
            ("Symbol(" === String(m).slice(0, 7) &&
              (m = "[" + String(m).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!s(n, "name") || (u && n.name !== m)) && o(n, "name", m),
            (c = p(n)).source ||
              (c.source = f.join("string" == typeof m ? m : ""))),
            e !== i
              ? (d ? !v && e[t] && (h = !0) : delete e[t],
                h ? (e[t] = n) : o(e, t, n))
              : h
              ? (e[t] = n)
              : a(t, n);
        })(Function.prototype, "toString", function () {
          return (r(this) && d(this).source) || l(this);
        });
      },
      8734: (e, t, n) => {
        var i = n(8454),
          r = n(4552),
          s = n(1474),
          o = n(6282),
          a = n(1510),
          l = n(5510),
          c = i.TypeError;
        e.exports = function (e, t) {
          var n = e.exec;
          if (o(n)) {
            var i = r(n, e, t);
            return null !== i && s(i), i;
          }
          if ("RegExp" === a(e)) return r(l, e, t);
          throw c("RegExp#exec called on incompatible receiver");
        };
      },
      5510: (e, t, n) => {
        "use strict";
        var i,
          r,
          s = n(4552),
          o = n(1768),
          a = n(7655),
          l = n(8383),
          c = n(6558),
          u = n(1748),
          d = n(1525),
          p = n(1030).get,
          f = n(7672),
          h = n(9729),
          v = u("native-string-replace", String.prototype.replace),
          m = RegExp.prototype.exec,
          g = m,
          b = o("".charAt),
          y = o("".indexOf),
          x = o("".replace),
          w = o("".slice),
          E =
            ((r = /b*/g),
            s(m, (i = /a/), "a"),
            s(m, r, "a"),
            0 !== i.lastIndex || 0 !== r.lastIndex),
          S = c.BROKEN_CARET,
          T = void 0 !== /()??/.exec("")[1];
        (E || T || S || f || h) &&
          (g = function (e) {
            var t,
              n,
              i,
              r,
              o,
              c,
              u,
              f = this,
              h = p(f),
              O = a(e),
              C = h.raw;
            if (C)
              return (
                (C.lastIndex = f.lastIndex),
                (t = s(g, C, O)),
                (f.lastIndex = C.lastIndex),
                t
              );
            var A = h.groups,
              k = S && f.sticky,
              L = s(l, f),
              M = f.source,
              P = 0,
              $ = O;
            if (
              (k &&
                ((L = x(L, "y", "")),
                -1 === y(L, "g") && (L += "g"),
                ($ = w(O, f.lastIndex)),
                f.lastIndex > 0 &&
                  (!f.multiline ||
                    (f.multiline && "\n" !== b(O, f.lastIndex - 1))) &&
                  ((M = "(?: " + M + ")"), ($ = " " + $), P++),
                (n = new RegExp("^(?:" + M + ")", L))),
              T && (n = new RegExp("^" + M + "$(?!\\s)", L)),
              E && (i = f.lastIndex),
              (r = s(m, k ? n : f, $)),
              k
                ? r
                  ? ((r.input = w(r.input, P)),
                    (r[0] = w(r[0], P)),
                    (r.index = f.lastIndex),
                    (f.lastIndex += r[0].length))
                  : (f.lastIndex = 0)
                : E &&
                  r &&
                  (f.lastIndex = f.global ? r.index + r[0].length : i),
              T &&
                r &&
                r.length > 1 &&
                s(v, r[0], n, function () {
                  for (o = 1; o < arguments.length - 2; o++)
                    void 0 === arguments[o] && (r[o] = void 0);
                }),
              r && A)
            )
              for (r.groups = c = d(null), o = 0; o < A.length; o++)
                c[(u = A[o])[0]] = r[u[1]];
            return r;
          }),
          (e.exports = g);
      },
      8383: (e, t, n) => {
        "use strict";
        var i = n(1474);
        e.exports = function () {
          var e = i(this),
            t = "";
          return (
            e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.sticky && (t += "y"),
            t
          );
        };
      },
      6558: (e, t, n) => {
        var i = n(6183),
          r = n(8454).RegExp,
          s = i(function () {
            var e = r("a", "y");
            return (e.lastIndex = 2), null != e.exec("abcd");
          }),
          o =
            s ||
            i(function () {
              return !r("a", "y").sticky;
            }),
          a =
            s ||
            i(function () {
              var e = r("^r", "gy");
              return (e.lastIndex = 2), null != e.exec("str");
            });
        e.exports = { BROKEN_CARET: a, MISSED_STICKY: o, UNSUPPORTED_Y: s };
      },
      7672: (e, t, n) => {
        var i = n(6183),
          r = n(8454).RegExp;
        e.exports = i(function () {
          var e = r(".", "s");
          return !(e.dotAll && e.exec("\n") && "s" === e.flags);
        });
      },
      9729: (e, t, n) => {
        var i = n(6183),
          r = n(8454).RegExp;
        e.exports = i(function () {
          var e = r("(?<a>b)", "g");
          return (
            "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
          );
        });
      },
      7431: (e, t, n) => {
        var i = n(8454).TypeError;
        e.exports = function (e) {
          if (null == e) throw i("Can't call method on " + e);
          return e;
        };
      },
      7852: (e, t, n) => {
        var i = n(8454),
          r = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            r(i, e, { value: t, configurable: !0, writable: !0 });
          } catch (n) {
            i[e] = t;
          }
          return t;
        };
      },
      820: (e, t, n) => {
        var i = n(9168).f,
          r = n(8281),
          s = n(8149)("toStringTag");
        e.exports = function (e, t, n) {
          e && !n && (e = e.prototype),
            e && !r(e, s) && i(e, s, { configurable: !0, value: t });
        };
      },
      8873: (e, t, n) => {
        var i = n(1748),
          r = n(9059),
          s = i("keys");
        e.exports = function (e) {
          return s[e] || (s[e] = r(e));
        };
      },
      2047: (e, t, n) => {
        var i = n(8454),
          r = n(7852),
          s = "__core-js_shared__",
          o = i[s] || r(s, {});
        e.exports = o;
      },
      1748: (e, t, n) => {
        var i = n(8977),
          r = n(2047);
        (e.exports = function (e, t) {
          return r[e] || (r[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.21.1",
          mode: i ? "pure" : "global",
          copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      7321: (e, t, n) => {
        var i = n(1768),
          r = n(8037),
          s = n(7655),
          o = n(7431),
          a = i("".charAt),
          l = i("".charCodeAt),
          c = i("".slice),
          u = function (e) {
            return function (t, n) {
              var i,
                u,
                d = s(o(t)),
                p = r(n),
                f = d.length;
              return p < 0 || p >= f
                ? e
                  ? ""
                  : void 0
                : (i = l(d, p)) < 55296 ||
                  i > 56319 ||
                  p + 1 === f ||
                  (u = l(d, p + 1)) < 56320 ||
                  u > 57343
                ? e
                  ? a(d, p)
                  : i
                : e
                ? c(d, p, p + 2)
                : u - 56320 + ((i - 55296) << 10) + 65536;
            };
          };
        e.exports = { codeAt: u(!1), charAt: u(!0) };
      },
      9749: (e, t, n) => {
        var i = n(1768),
          r = n(7431),
          s = n(7655),
          o = n(8342),
          a = i("".replace),
          l = "[" + o + "]",
          c = RegExp("^" + l + l + "*"),
          u = RegExp(l + l + "*$"),
          d = function (e) {
            return function (t) {
              var n = s(r(t));
              return 1 & e && (n = a(n, c, "")), 2 & e && (n = a(n, u, "")), n;
            };
          };
        e.exports = { start: d(1), end: d(2), trim: d(3) };
      },
      9623: (e, t, n) => {
        var i = n(8037),
          r = Math.max,
          s = Math.min;
        e.exports = function (e, t) {
          var n = i(e);
          return n < 0 ? r(n + t, 0) : s(n, t);
        };
      },
      3206: (e, t, n) => {
        var i = n(7530),
          r = n(7431);
        e.exports = function (e) {
          return i(r(e));
        };
      },
      8037: (e) => {
        var t = Math.ceil,
          n = Math.floor;
        e.exports = function (e) {
          var i = +e;
          return i != i || 0 === i ? 0 : (i > 0 ? n : t)(i);
        };
      },
      3917: (e, t, n) => {
        var i = n(8037),
          r = Math.min;
        e.exports = function (e) {
          return e > 0 ? r(i(e), 9007199254740991) : 0;
        };
      },
      9473: (e, t, n) => {
        var i = n(8454),
          r = n(7431),
          s = i.Object;
        e.exports = function (e) {
          return s(r(e));
        };
      },
      3948: (e, t, n) => {
        var i = n(8454),
          r = n(4552),
          s = n(5896),
          o = n(1527),
          a = n(9827),
          l = n(6891),
          c = n(8149),
          u = i.TypeError,
          d = c("toPrimitive");
        e.exports = function (e, t) {
          if (!s(e) || o(e)) return e;
          var n,
            i = a(e, d);
          if (i) {
            if (
              (void 0 === t && (t = "default"), (n = r(i, e, t)), !s(n) || o(n))
            )
              return n;
            throw u("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), l(e, t);
        };
      },
      2988: (e, t, n) => {
        var i = n(3948),
          r = n(1527);
        e.exports = function (e) {
          var t = i(e, "string");
          return r(t) ? t : t + "";
        };
      },
      4823: (e, t, n) => {
        var i = {};
        (i[n(8149)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(i));
      },
      7655: (e, t, n) => {
        var i = n(8454),
          r = n(9225),
          s = i.String;
        e.exports = function (e) {
          if ("Symbol" === r(e))
            throw TypeError("Cannot convert a Symbol value to a string");
          return s(e);
        };
      },
      180: (e, t, n) => {
        var i = n(8454).String;
        e.exports = function (e) {
          try {
            return i(e);
          } catch (e) {
            return "Object";
          }
        };
      },
      9059: (e, t, n) => {
        var i = n(1768),
          r = 0,
          s = Math.random(),
          o = i((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++r + s, 36);
        };
      },
      4746: (e, t, n) => {
        var i = n(323);
        e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      8654: (e, t, n) => {
        var i = n(723),
          r = n(6183);
        e.exports =
          i &&
          r(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      8149: (e, t, n) => {
        var i = n(8454),
          r = n(1748),
          s = n(8281),
          o = n(9059),
          a = n(323),
          l = n(4746),
          c = r("wks"),
          u = i.Symbol,
          d = u && u.for,
          p = l ? u : (u && u.withoutSetter) || o;
        e.exports = function (e) {
          if (!s(c, e) || (!a && "string" != typeof c[e])) {
            var t = "Symbol." + e;
            a && s(u, e) ? (c[e] = u[e]) : (c[e] = l && d ? d(t) : p(t));
          }
          return c[e];
        };
      },
      8342: (e) => {
        e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
      },
      8165: (e, t, n) => {
        "use strict";
        var i = n(4761),
          r = n(528).filter;
        i(
          { target: "Array", proto: !0, forced: !n(4820)("filter") },
          {
            filter: function (e) {
              return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      9399: (e, t, n) => {
        "use strict";
        var i = n(4761),
          r = n(1269);
        i(
          { target: "Array", proto: !0, forced: [].forEach != r },
          { forEach: r }
        );
      },
      7543: (e, t, n) => {
        "use strict";
        var i = n(3206),
          r = n(9256),
          s = n(6126),
          o = n(1030),
          a = n(9168).f,
          l = n(7583),
          c = n(8977),
          u = n(723),
          d = "Array Iterator",
          p = o.set,
          f = o.getterFor(d);
        e.exports = l(
          Array,
          "Array",
          function (e, t) {
            p(this, { type: d, target: i(e), index: 0, kind: t });
          },
          function () {
            var e = f(this),
              t = e.target,
              n = e.kind,
              i = e.index++;
            return !t || i >= t.length
              ? ((e.target = void 0), { value: void 0, done: !0 })
              : "keys" == n
              ? { value: i, done: !1 }
              : "values" == n
              ? { value: t[i], done: !1 }
              : { value: [i, t[i]], done: !1 };
          },
          "values"
        );
        var h = (s.Arguments = s.Array);
        if (
          (r("keys"), r("values"), r("entries"), !c && u && "values" !== h.name)
        )
          try {
            a(h, "name", { value: "values" });
          } catch (e) {}
      },
      7985: (e, t, n) => {
        "use strict";
        var i = n(4761),
          r = n(6589).left,
          s = n(1923),
          o = n(4324),
          a = n(7594);
        i(
          {
            target: "Array",
            proto: !0,
            forced: !s("reduce") || (!a && o > 79 && o < 83),
          },
          {
            reduce: function (e) {
              var t = arguments.length;
              return r(this, e, t, t > 1 ? arguments[1] : void 0);
            },
          }
        );
      },
      6618: (e, t, n) => {
        var i = n(723),
          r = n(4530).EXISTS,
          s = n(1768),
          o = n(9168).f,
          a = Function.prototype,
          l = s(a.toString),
          c =
            /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
          u = s(c.exec);
        i &&
          !r &&
          o(a, "name", {
            configurable: !0,
            get: function () {
              try {
                return u(c, l(this))[1];
              } catch (e) {
                return "";
              }
            },
          });
      },
      7692: (e, t, n) => {
        var i = n(4761),
          r = n(4727);
        i(
          { target: "Object", stat: !0, forced: Object.assign !== r },
          { assign: r }
        );
      },
      2352: (e, t, n) => {
        var i = n(4823),
          r = n(3971),
          s = n(4117);
        i || r(Object.prototype, "toString", s, { unsafe: !0 });
      },
      4249: (e, t, n) => {
        var i = n(4761),
          r = n(8513);
        i({ global: !0, forced: parseInt != r }, { parseInt: r });
      },
      9989: (e, t, n) => {
        "use strict";
        var i = n(4761),
          r = n(5510);
        i({ target: "RegExp", proto: !0, forced: /./.exec !== r }, { exec: r });
      },
      3344: (e, t, n) => {
        "use strict";
        var i = n(7321).charAt,
          r = n(7655),
          s = n(1030),
          o = n(7583),
          a = "String Iterator",
          l = s.set,
          c = s.getterFor(a);
        o(
          String,
          "String",
          function (e) {
            l(this, { type: a, string: r(e), index: 0 });
          },
          function () {
            var e,
              t = c(this),
              n = t.string,
              r = t.index;
            return r >= n.length
              ? { value: void 0, done: !0 }
              : ((e = i(n, r)), (t.index += e.length), { value: e, done: !1 });
          }
        );
      },
      8307: (e, t, n) => {
        "use strict";
        var i = n(4552),
          r = n(9696),
          s = n(1474),
          o = n(3917),
          a = n(7655),
          l = n(7431),
          c = n(9827),
          u = n(3615),
          d = n(8734);
        r("match", function (e, t, n) {
          return [
            function (t) {
              var n = l(this),
                r = null == t ? void 0 : c(t, e);
              return r ? i(r, t, n) : new RegExp(t)[e](a(n));
            },
            function (e) {
              var i = s(this),
                r = a(e),
                l = n(t, i, r);
              if (l.done) return l.value;
              if (!i.global) return d(i, r);
              var c = i.unicode;
              i.lastIndex = 0;
              for (var p, f = [], h = 0; null !== (p = d(i, r)); ) {
                var v = a(p[0]);
                (f[h] = v),
                  "" === v && (i.lastIndex = u(r, o(i.lastIndex), c)),
                  h++;
              }
              return 0 === h ? null : f;
            },
          ];
        });
      },
      4390: (e, t, n) => {
        "use strict";
        var i = n(6218),
          r = n(4552),
          s = n(1768),
          o = n(9696),
          a = n(6183),
          l = n(1474),
          c = n(6282),
          u = n(8037),
          d = n(3917),
          p = n(7655),
          f = n(7431),
          h = n(3615),
          v = n(9827),
          m = n(4742),
          g = n(8734),
          b = n(8149)("replace"),
          y = Math.max,
          x = Math.min,
          w = s([].concat),
          E = s([].push),
          S = s("".indexOf),
          T = s("".slice),
          O = "$0" === "a".replace(/./, "$0"),
          C = !!/./[b] && "" === /./[b]("a", "$0");
        o(
          "replace",
          function (e, t, n) {
            var s = C ? "$" : "$0";
            return [
              function (e, n) {
                var i = f(this),
                  s = null == e ? void 0 : v(e, b);
                return s ? r(s, e, i, n) : r(t, p(i), e, n);
              },
              function (e, r) {
                var o = l(this),
                  a = p(e);
                if (
                  "string" == typeof r &&
                  -1 === S(r, s) &&
                  -1 === S(r, "$<")
                ) {
                  var f = n(t, o, a, r);
                  if (f.done) return f.value;
                }
                var v = c(r);
                v || (r = p(r));
                var b = o.global;
                if (b) {
                  var O = o.unicode;
                  o.lastIndex = 0;
                }
                for (var C = []; ; ) {
                  var A = g(o, a);
                  if (null === A) break;
                  if ((E(C, A), !b)) break;
                  "" === p(A[0]) && (o.lastIndex = h(a, d(o.lastIndex), O));
                }
                for (var k, L = "", M = 0, P = 0; P < C.length; P++) {
                  for (
                    var $ = p((A = C[P])[0]),
                      _ = y(x(u(A.index), a.length), 0),
                      z = [],
                      I = 1;
                    I < A.length;
                    I++
                  )
                    E(z, void 0 === (k = A[I]) ? k : String(k));
                  var j = A.groups;
                  if (v) {
                    var D = w([$], z, _, a);
                    void 0 !== j && E(D, j);
                    var N = p(i(r, void 0, D));
                  } else N = m($, a, _, z, j, r);
                  _ >= M && ((L += T(a, M, _) + N), (M = _ + $.length));
                }
                return L + T(a, M);
              },
            ];
          },
          !!a(function () {
            var e = /./;
            return (
              (e.exec = function () {
                var e = [];
                return (e.groups = { a: "7" }), e;
              }),
              "7" !== "".replace(e, "$<a>")
            );
          }) ||
            !O ||
            C
        );
      },
      7323: (e, t, n) => {
        "use strict";
        var i,
          r = n(8454),
          s = n(1768),
          o = n(9573),
          a = n(6582),
          l = n(6645),
          c = n(7790),
          u = n(5896),
          d = n(6662),
          p = n(1030).enforce,
          f = n(4404),
          h = !r.ActiveXObject && "ActiveXObject" in r,
          v = function (e) {
            return function () {
              return e(this, arguments.length ? arguments[0] : void 0);
            };
          },
          m = l("WeakMap", v, c);
        if (f && h) {
          (i = c.getConstructor(v, "WeakMap", !0)), a.enable();
          var g = m.prototype,
            b = s(g.delete),
            y = s(g.has),
            x = s(g.get),
            w = s(g.set);
          o(g, {
            delete: function (e) {
              if (u(e) && !d(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  b(this, e) || t.frozen.delete(e)
                );
              }
              return b(this, e);
            },
            has: function (e) {
              if (u(e) && !d(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  y(this, e) || t.frozen.has(e)
                );
              }
              return y(this, e);
            },
            get: function (e) {
              if (u(e) && !d(e)) {
                var t = p(this);
                return (
                  t.frozen || (t.frozen = new i()),
                  y(this, e) ? x(this, e) : t.frozen.get(e)
                );
              }
              return x(this, e);
            },
            set: function (e, t) {
              if (u(e) && !d(e)) {
                var n = p(this);
                n.frozen || (n.frozen = new i()),
                  y(this, e) ? w(this, e, t) : n.frozen.set(e, t);
              } else w(this, e, t);
              return this;
            },
          });
        }
      },
      3542: (e, t, n) => {
        var i = n(8454),
          r = n(6181),
          s = n(2387),
          o = n(1269),
          a = n(1501),
          l = function (e) {
            if (e && e.forEach !== o)
              try {
                a(e, "forEach", o);
              } catch (t) {
                e.forEach = o;
              }
          };
        for (var c in r) r[c] && l(i[c] && i[c].prototype);
        l(s);
      },
      4079: (e, t, n) => {
        var i = n(8454),
          r = n(6181),
          s = n(2387),
          o = n(7543),
          a = n(1501),
          l = n(8149),
          c = l("iterator"),
          u = l("toStringTag"),
          d = o.values,
          p = function (e, t) {
            if (e) {
              if (e[c] !== d)
                try {
                  a(e, c, d);
                } catch (t) {
                  e[c] = d;
                }
              if ((e[u] || a(e, u, t), r[t]))
                for (var n in o)
                  if (e[n] !== o[n])
                    try {
                      a(e, n, o[n]);
                    } catch (t) {
                      e[n] = o[n];
                    }
            }
          };
        for (var f in r) p(i[f] && i[f].prototype, f);
        p(s, "DOMTokenList");
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var s = (t[i] = { exports: {} });
    return e[i](s, s.exports, n), s.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      class e {
        constructor(e) {
          let t = {
            logging: !0,
            init: !0,
            attributeOpenButton: "data-popup",
            attributeCloseButton: "data-close",
            fixElementSelector: "[data-lp]",
            youtubeAttribute: "data-youtube",
            youtubePlaceAttribute: "data-youtube-place",
            setAutoplayYoutube: !0,
            classes: {
              popup: "popup",
              popupContent: "popup__content",
              popupActive: "popup_show",
              bodyActive: "popup-show",
            },
            focusCatch: !0,
            closeEsc: !0,
            bodyLock: !0,
            bodyLockDelay: 500,
            hashSettings: { location: !0, goHash: !0 },
            on: {
              beforeOpen: function () {},
              afterOpen: function () {},
              beforeClose: function () {},
              afterClose: function () {},
            },
          };
          (this.isOpen = !1),
            (this.targetOpen = { selector: !1, element: !1 }),
            (this.previousOpen = { selector: !1, element: !1 }),
            (this.lastClosed = { selector: !1, element: !1 }),
            (this._dataValue = !1),
            (this.hash = !1),
            (this._reopen = !1),
            (this._selectorOpen = !1),
            (this.lastFocusEl = !1),
            (this._focusEl = [
              "a[href]",
              'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
              "button:not([disabled]):not([aria-hidden])",
              "select:not([disabled]):not([aria-hidden])",
              "textarea:not([disabled]):not([aria-hidden])",
              "area[href]",
              "iframe",
              "object",
              "embed",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ]),
            (this.options = {
              ...t,
              ...e,
              classes: { ...t.classes, ...e?.classes },
              hashSettings: { ...t.hashSettings, ...e?.hashSettings },
              on: { ...t.on, ...e?.on },
            }),
            this.options.init && this.initPopups();
        }
        initPopups() {
          this.popupLogging("Проснулся"), this.eventsPopup();
        }
        eventsPopup() {
          document.addEventListener(
            "click",
            function (e) {
              const t = e.target.closest(
                `[${this.options.attributeOpenButton}]`
              );
              if (t)
                return (
                  e.preventDefault(),
                  (this._dataValue = t.getAttribute(
                    this.options.attributeOpenButton
                  )
                    ? t.getAttribute(this.options.attributeOpenButton)
                    : "error"),
                  "error" !== this._dataValue
                    ? (this.isOpen || (this.lastFocusEl = t),
                      (this.targetOpen.selector = `${this._dataValue}`),
                      (this._selectorOpen = !0),
                      void this.open())
                    : void this.popupLogging(
                        `Ой ой, не заполнен атрибут у ${t.classList}`
                      )
                );
              return e.target.closest(
                `[${this.options.attributeCloseButton}]`
              ) ||
                (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                  this.isOpen)
                ? (e.preventDefault(), void this.close())
                : void 0;
            }.bind(this)
          ),
            document.addEventListener(
              "keydown",
              function (e) {
                if (
                  this.options.closeEsc &&
                  27 == e.which &&
                  "Escape" === e.code &&
                  this.isOpen
                )
                  return e.preventDefault(), void this.close();
                this.options.focusCatch &&
                  9 == e.which &&
                  this.isOpen &&
                  this._focusCatch(e);
              }.bind(this)
            ),
            document.querySelector("form[data-ajax],form[data-dev]") &&
              document.addEventListener(
                "formSent",
                function (e) {
                  const t = e.detail.form.dataset.popupMessage;
                  t && this.open(t);
                }.bind(this)
              ),
            this.options.hashSettings.goHash &&
              (window.addEventListener(
                "hashchange",
                function () {
                  window.location.hash
                    ? this._openToHash()
                    : this.close(this.targetOpen.selector);
                }.bind(this)
              ),
              window.addEventListener(
                "load",
                function () {
                  window.location.hash && this._openToHash();
                }.bind(this)
              ));
        }
        open(e) {
          if (
            (e &&
              "string" == typeof e &&
              "" !== e.trim() &&
              ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
            this.isOpen && ((this._reopen = !0), this.close()),
            this._selectorOpen ||
              (this.targetOpen.selector = this.lastClosed.selector),
            this._reopen ||
              (this.previousActiveElement = document.activeElement),
            (this.targetOpen.element = document.querySelector(
              this.targetOpen.selector
            )),
            this.targetOpen.element)
          ) {
            if (
              this.targetOpen.element.hasAttribute(
                this.options.youtubeAttribute
              )
            ) {
              const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                  this.options.youtubeAttribute
                )}?rel=0&showinfo=0&autoplay=1`,
                t = document.createElement("iframe");
              t.setAttribute("allowfullscreen", "");
              const n = this.options.setAutoplayYoutube ? "autoplay;" : "";
              t.setAttribute("allow", `${n}; encrypted-media`),
                t.setAttribute("src", e),
                this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ) &&
                  this.targetOpen.element
                    .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                    .appendChild(t);
            }
            this.options.hashSettings.location &&
              (this._getHash(), this._setHash()),
              this.options.on.beforeOpen(this),
              this.targetOpen.element.classList.add(
                this.options.classes.popupActive
              ),
              document.body.classList.add(this.options.classes.bodyActive),
              this._reopen ? (this._reopen = !1) : r(),
              this.targetOpen.element.setAttribute("aria-hidden", "false"),
              (this.previousOpen.selector = this.targetOpen.selector),
              (this.previousOpen.element = this.targetOpen.element),
              (this._selectorOpen = !1),
              (this.isOpen = !0),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              document.dispatchEvent(
                new CustomEvent("afterPopupOpen", { detail: { popup: this } })
              ),
              this.popupLogging("Открыл попап");
          } else
            this.popupLogging(
              "Ой ой, такого попапа нет. Проверьте корректность ввода. "
            );
        }
        close(e) {
          e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            (this.previousOpen.selector = e),
            this.isOpen &&
              i &&
              (this.options.on.beforeClose(this),
              this.targetOpen.element.hasAttribute(
                this.options.youtubeAttribute
              ) &&
                this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ) &&
                (this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ).innerHTML = ""),
              this.previousOpen.element.classList.remove(
                this.options.classes.popupActive
              ),
              this.previousOpen.element.setAttribute("aria-hidden", "true"),
              this._reopen ||
                (document.body.classList.remove(
                  this.options.classes.bodyActive
                ),
                r(),
                (this.isOpen = !1)),
              this._removeHash(),
              this._selectorOpen &&
                ((this.lastClosed.selector = this.previousOpen.selector),
                (this.lastClosed.element = this.previousOpen.element)),
              this.options.on.afterClose(this),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              this.popupLogging("Закрыл попап"));
        }
        _getHash() {
          this.options.hashSettings.location &&
            (this.hash = this.targetOpen.selector.includes("#")
              ? this.targetOpen.selector
              : this.targetOpen.selector.replace(".", "#"));
        }
        _openToHash() {
          let e = document.querySelector(
            `.${window.location.hash.replace("#", "")}`
          )
            ? `.${window.location.hash.replace("#", "")}`
            : document.querySelector(`${window.location.hash}`)
            ? `${window.location.hash}`
            : null;
          document.querySelector(
            `[${this.options.attributeOpenButton}="${e}"]`
          ) &&
            e &&
            this.open(e);
        }
        _setHash() {
          history.pushState("", "", this.hash);
        }
        _removeHash() {
          history.pushState("", "", window.location.href.split("#")[0]);
        }
        _focusCatch(e) {
          const t = this.targetOpen.element.querySelectorAll(this._focusEl),
            n = Array.prototype.slice.call(t),
            i = n.indexOf(document.activeElement);
          e.shiftKey &&
            0 === i &&
            (n[n.length - 1].focus(), e.preventDefault()),
            e.shiftKey ||
              i !== n.length - 1 ||
              (n[0].focus(), e.preventDefault());
        }
        _focusTrap() {
          const e = this.previousOpen.element.querySelectorAll(this._focusEl);
          !this.isOpen && this.lastFocusEl
            ? this.lastFocusEl.focus()
            : e[0].focus();
        }
        popupLogging(e) {
          this.options.logging && a(`[Попапос]: ${e}`);
        }
      }
      class t {
        constructor(e, t = null) {
          if (
            ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
            this.config.init)
          ) {
            const e = document.querySelectorAll("[data-prlx-mouse]");
            e.length
              ? (this.paralaxMouseInit(e),
                this.setLogging(`Проснулся, слежу за объектами: (${e.length})`))
              : this.setLogging("Нет ни одного объекта. Сплю...zzZZZzZZz...");
          }
        }
        paralaxMouseInit(e) {
          e.forEach((e) => {
            const t = e.closest("[data-prlx-mouse-wrapper]"),
              n = e.dataset.prlxCx ? +e.dataset.prlxCx : 100,
              i = e.dataset.prlxCy ? +e.dataset.prlxCy : 100,
              r = e.hasAttribute("data-prlx-dxr") ? -1 : 1,
              s = e.hasAttribute("data-prlx-dyr") ? -1 : 1,
              o = e.dataset.prlxA ? +e.dataset.prlxA : 50;
            let a = 0,
              l = 0,
              c = 0,
              u = 0;
            function d(t = window) {
              t.addEventListener("mousemove", function (t) {
                const n = e.getBoundingClientRect().top + window.scrollY;
                if (
                  n >= window.scrollY ||
                  n + e.offsetHeight >= window.scrollY
                ) {
                  const e = window.innerWidth,
                    n = window.innerHeight,
                    i = t.clientX - e / 2,
                    r = t.clientY - n / 2;
                  (c = (i / e) * 100), (u = (r / n) * 100);
                }
              });
            }
            !(function t() {
              (a += ((c - a) * o) / 1e3),
                (l += ((u - l) * o) / 1e3),
                (e.style.cssText = `transform: translate3D(${
                  (r * a) / (n / 10)
                }%,${(s * l) / (i / 10)}%,0);`),
                requestAnimationFrame(t);
            })(),
              t ? d(t) : d();
          });
        }
        setLogging(e) {
          this.config.logging && a(`[PRLX Mouse]: ${e}`);
        }
      }
      let i = !0,
        r = (e = 500) => {
          document.documentElement.classList.contains("lock") ? s(e) : o(e);
        },
        s = (e = 500) => {
          let t = document.querySelector("body");
          if (i) {
            let n = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
              for (let e = 0; e < n.length; e++) {
                n[e].style.paddingRight = "0px";
              }
              (t.style.paddingRight = "0px"),
                document.documentElement.classList.remove("lock");
            }, e),
              (i = !1),
              setTimeout(function () {
                i = !0;
              }, e);
          }
        },
        o = (e = 500) => {
          let t = document.querySelector("body");
          if (i) {
            let n = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < n.length; e++) {
              n[e].style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            }
            (t.style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px"),
              document.documentElement.classList.add("lock"),
              (i = !1),
              setTimeout(function () {
                i = !0;
              }, e);
          }
        };
      function a(e) {
        setTimeout(() => {
          window.FLS && console.log(e);
        }, 0);
      }
      let l = (e, t = !1, n = 500, i = 0) => {
        const r = document.querySelector(e);
        if (r) {
          let o = "",
            l = 0;
          t &&
            ((o = "header.header"),
            (l = document.querySelector(o).offsetHeight));
          let c = {
            speedAsDuration: !0,
            speed: n,
            header: o,
            offset: i,
            easing: "easeOutQuad",
          };
          if (
            (document.documentElement.classList.contains("menu-open") &&
              (s(), document.documentElement.classList.remove("menu-open")),
            "undefined" != typeof SmoothScroll)
          )
            new SmoothScroll().animateScroll(r, "", c);
          else {
            let e = r.getBoundingClientRect().top + scrollY;
            window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
          }
          a(`[gotoBlock]: Юхуу...едем к ${e}`);
        } else a(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
      };
      function c(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function u(e) {
        return e instanceof c(e).Element || e instanceof Element;
      }
      function d(e) {
        return e instanceof c(e).HTMLElement || e instanceof HTMLElement;
      }
      function p(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof c(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var f = Math.max,
        h = Math.min,
        v = Math.round;
      function m(e, t) {
        void 0 === t && (t = !1);
        var n = e.getBoundingClientRect(),
          i = 1,
          r = 1;
        if (d(e) && t) {
          var s = e.offsetHeight,
            o = e.offsetWidth;
          o > 0 && (i = v(n.width) / o || 1),
            s > 0 && (r = v(n.height) / s || 1);
        }
        return {
          width: n.width / i,
          height: n.height / r,
          top: n.top / r,
          right: n.right / i,
          bottom: n.bottom / r,
          left: n.left / i,
          x: n.left / i,
          y: n.top / r,
        };
      }
      function g(e) {
        var t = c(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function b(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function y(e) {
        return ((u(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function x(e) {
        return m(y(e)).left + g(e).scrollLeft;
      }
      function w(e) {
        return c(e).getComputedStyle(e);
      }
      function E(e) {
        var t = w(e),
          n = t.overflow,
          i = t.overflowX,
          r = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + r + i);
      }
      function S(e, t, n) {
        void 0 === n && (n = !1);
        var i,
          r,
          s = d(t),
          o =
            d(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = v(t.width) / e.offsetWidth || 1,
                i = v(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== i;
            })(t),
          a = y(t),
          l = m(e, o),
          u = { scrollLeft: 0, scrollTop: 0 },
          p = { x: 0, y: 0 };
        return (
          (s || (!s && !n)) &&
            (("body" !== b(t) || E(a)) &&
              (u =
                (i = t) !== c(i) && d(i)
                  ? { scrollLeft: (r = i).scrollLeft, scrollTop: r.scrollTop }
                  : g(i)),
            d(t)
              ? (((p = m(t, !0)).x += t.clientLeft), (p.y += t.clientTop))
              : a && (p.x = x(a))),
          {
            x: l.left + u.scrollLeft - p.x,
            y: l.top + u.scrollTop - p.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function T(e) {
        var t = m(e),
          n = e.offsetWidth,
          i = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - i) <= 1 && (i = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
        );
      }
      function O(e) {
        return "html" === b(e)
          ? e
          : e.assignedSlot || e.parentNode || (p(e) ? e.host : null) || y(e);
      }
      function C(e) {
        return ["html", "body", "#document"].indexOf(b(e)) >= 0
          ? e.ownerDocument.body
          : d(e) && E(e)
          ? e
          : C(O(e));
      }
      function A(e, t) {
        var n;
        void 0 === t && (t = []);
        var i = C(e),
          r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
          s = c(i),
          o = r ? [s].concat(s.visualViewport || [], E(i) ? i : []) : i,
          a = t.concat(o);
        return r ? a : a.concat(A(O(o)));
      }
      function k(e) {
        return ["table", "td", "th"].indexOf(b(e)) >= 0;
      }
      function L(e) {
        return d(e) && "fixed" !== w(e).position ? e.offsetParent : null;
      }
      function M(e) {
        for (var t = c(e), n = L(e); n && k(n) && "static" === w(n).position; )
          n = L(n);
        return n &&
          ("html" === b(n) || ("body" === b(n) && "static" === w(n).position))
          ? t
          : n ||
              (function (e) {
                var t =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  d(e) &&
                  "fixed" === w(e).position
                )
                  return null;
                for (
                  var n = O(e);
                  d(n) && ["html", "body"].indexOf(b(n)) < 0;

                ) {
                  var i = w(n);
                  if (
                    "none" !== i.transform ||
                    "none" !== i.perspective ||
                    "paint" === i.contain ||
                    -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                    (t && "filter" === i.willChange) ||
                    (t && i.filter && "none" !== i.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var P = "top",
        $ = "bottom",
        _ = "right",
        z = "left",
        I = "auto",
        j = [P, $, _, z],
        D = "start",
        N = "end",
        R = "viewport",
        B = "popper",
        W = j.reduce(function (e, t) {
          return e.concat([t + "-" + D, t + "-" + N]);
        }, []),
        H = [].concat(j, [I]).reduce(function (e, t) {
          return e.concat([t, t + "-" + D, t + "-" + N]);
        }, []),
        V = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function F(e) {
        var t = new Map(),
          n = new Set(),
          i = [];
        function r(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var i = t.get(e);
                  i && r(i);
                }
              }),
            i.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || r(e);
          }),
          i
        );
      }
      var G = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function q() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function X(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          i = void 0 === n ? [] : n,
          r = t.defaultOptions,
          s = void 0 === r ? G : r;
        return function (e, t, n) {
          void 0 === n && (n = s);
          var r,
            o,
            a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, G, s),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            d = {
              state: a,
              setOptions: function (n) {
                var r = "function" == typeof n ? n(a.options) : n;
                p(),
                  (a.options = Object.assign({}, s, a.options, r)),
                  (a.scrollParents = {
                    reference: u(e)
                      ? A(e)
                      : e.contextElement
                      ? A(e.contextElement)
                      : [],
                    popper: A(t),
                  });
                var o = (function (e) {
                  var t = F(e);
                  return V.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(i, a.options.modifiers))
                );
                return (
                  (a.orderedModifiers = o.filter(function (e) {
                    return e.enabled;
                  })),
                  a.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      i = void 0 === n ? {} : n,
                      r = e.effect;
                    if ("function" == typeof r) {
                      var s = r({ state: a, name: t, instance: d, options: i }),
                        o = function () {};
                      l.push(s || o);
                    }
                  }),
                  d.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = a.elements,
                    t = e.reference,
                    n = e.popper;
                  if (q(t, n)) {
                    (a.rects = {
                      reference: S(t, M(n), "fixed" === a.options.strategy),
                      popper: T(n),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (e) {
                        return (a.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var i = 0; i < a.orderedModifiers.length; i++)
                      if (!0 !== a.reset) {
                        var r = a.orderedModifiers[i],
                          s = r.fn,
                          o = r.options,
                          l = void 0 === o ? {} : o,
                          u = r.name;
                        "function" == typeof s &&
                          (a =
                            s({ state: a, options: l, name: u, instance: d }) ||
                            a);
                      } else (a.reset = !1), (i = -1);
                  }
                }
              },
              update:
                ((r = function () {
                  return new Promise(function (e) {
                    d.forceUpdate(), e(a);
                  });
                }),
                function () {
                  return (
                    o ||
                      (o = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (o = void 0), e(r());
                        });
                      })),
                    o
                  );
                }),
              destroy: function () {
                p(), (c = !0);
              },
            };
          if (!q(e, t)) return d;
          function p() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            d.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            d
          );
        };
      }
      var Y = { passive: !0 };
      const U = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            i = e.options,
            r = i.scroll,
            s = void 0 === r || r,
            o = i.resize,
            a = void 0 === o || o,
            l = c(t.elements.popper),
            u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            s &&
              u.forEach(function (e) {
                e.addEventListener("scroll", n.update, Y);
              }),
            a && l.addEventListener("resize", n.update, Y),
            function () {
              s &&
                u.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, Y);
                }),
                a && l.removeEventListener("resize", n.update, Y);
            }
          );
        },
        data: {},
      };
      function K(e) {
        return e.split("-")[0];
      }
      function Z(e) {
        return e.split("-")[1];
      }
      function J(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function Q(e) {
        var t,
          n = e.reference,
          i = e.element,
          r = e.placement,
          s = r ? K(r) : null,
          o = r ? Z(r) : null,
          a = n.x + n.width / 2 - i.width / 2,
          l = n.y + n.height / 2 - i.height / 2;
        switch (s) {
          case P:
            t = { x: a, y: n.y - i.height };
            break;
          case $:
            t = { x: a, y: n.y + n.height };
            break;
          case _:
            t = { x: n.x + n.width, y: l };
            break;
          case z:
            t = { x: n.x - i.width, y: l };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var c = s ? J(s) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (o) {
            case D:
              t[c] = t[c] - (n[u] / 2 - i[u] / 2);
              break;
            case N:
              t[c] = t[c] + (n[u] / 2 - i[u] / 2);
          }
        }
        return t;
      }
      var ee = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function te(e) {
        var t,
          n = e.popper,
          i = e.popperRect,
          r = e.placement,
          s = e.variation,
          o = e.offsets,
          a = e.position,
          l = e.gpuAcceleration,
          u = e.adaptive,
          d = e.roundOffsets,
          p = e.isFixed,
          f = o.x,
          h = void 0 === f ? 0 : f,
          m = o.y,
          g = void 0 === m ? 0 : m,
          b = "function" == typeof d ? d({ x: h, y: g }) : { x: h, y: g };
        (h = b.x), (g = b.y);
        var x = o.hasOwnProperty("x"),
          E = o.hasOwnProperty("y"),
          S = z,
          T = P,
          O = window;
        if (u) {
          var C = M(n),
            A = "clientHeight",
            k = "clientWidth";
          if (
            (C === c(n) &&
              "static" !== w((C = y(n))).position &&
              "absolute" === a &&
              ((A = "scrollHeight"), (k = "scrollWidth")),
            (C = C),
            r === P || ((r === z || r === _) && s === N))
          )
            (T = $),
              (g -=
                (p && O.visualViewport ? O.visualViewport.height : C[A]) -
                i.height),
              (g *= l ? 1 : -1);
          if (r === z || ((r === P || r === $) && s === N))
            (S = _),
              (h -=
                (p && O.visualViewport ? O.visualViewport.width : C[k]) -
                i.width),
              (h *= l ? 1 : -1);
        }
        var L,
          I = Object.assign({ position: a }, u && ee),
          j =
            !0 === d
              ? (function (e) {
                  var t = e.x,
                    n = e.y,
                    i = window.devicePixelRatio || 1;
                  return { x: v(t * i) / i || 0, y: v(n * i) / i || 0 };
                })({ x: h, y: g })
              : { x: h, y: g };
        return (
          (h = j.x),
          (g = j.y),
          l
            ? Object.assign(
                {},
                I,
                (((L = {})[T] = E ? "0" : ""),
                (L[S] = x ? "0" : ""),
                (L.transform =
                  (O.devicePixelRatio || 1) <= 1
                    ? "translate(" + h + "px, " + g + "px)"
                    : "translate3d(" + h + "px, " + g + "px, 0)"),
                L)
              )
            : Object.assign(
                {},
                I,
                (((t = {})[T] = E ? g + "px" : ""),
                (t[S] = x ? h + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      const ne = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              i = t.attributes[e] || {},
              r = t.elements[e];
            d(r) &&
              b(r) &&
              (Object.assign(r.style, n),
              Object.keys(i).forEach(function (e) {
                var t = i[e];
                !1 === t
                  ? r.removeAttribute(e)
                  : r.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var i = t.elements[e],
                  r = t.attributes[e] || {},
                  s = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                d(i) &&
                  b(i) &&
                  (Object.assign(i.style, s),
                  Object.keys(r).forEach(function (e) {
                    i.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      const ie = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            n = e.options,
            i = e.name,
            r = n.offset,
            s = void 0 === r ? [0, 0] : r,
            o = H.reduce(function (e, n) {
              return (
                (e[n] = (function (e, t, n) {
                  var i = K(e),
                    r = [z, P].indexOf(i) >= 0 ? -1 : 1,
                    s =
                      "function" == typeof n
                        ? n(Object.assign({}, t, { placement: e }))
                        : n,
                    o = s[0],
                    a = s[1];
                  return (
                    (o = o || 0),
                    (a = (a || 0) * r),
                    [z, _].indexOf(i) >= 0 ? { x: a, y: o } : { x: o, y: a }
                  );
                })(n, t.rects, s)),
                e
              );
            }, {}),
            a = o[t.placement],
            l = a.x,
            c = a.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[i] = o);
        },
      };
      var re = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function se(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return re[e];
        });
      }
      var oe = { start: "end", end: "start" };
      function ae(e) {
        return e.replace(/start|end/g, function (e) {
          return oe[e];
        });
      }
      function le(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && p(n)) {
          var i = t;
          do {
            if (i && e.isSameNode(i)) return !0;
            i = i.parentNode || i.host;
          } while (i);
        }
        return !1;
      }
      function ce(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function ue(e, t) {
        return t === R
          ? ce(
              (function (e) {
                var t = c(e),
                  n = y(e),
                  i = t.visualViewport,
                  r = n.clientWidth,
                  s = n.clientHeight,
                  o = 0,
                  a = 0;
                return (
                  i &&
                    ((r = i.width),
                    (s = i.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((o = i.offsetLeft), (a = i.offsetTop))),
                  { width: r, height: s, x: o + x(e), y: a }
                );
              })(e)
            )
          : u(t)
          ? (function (e) {
              var t = m(e);
              return (
                (t.top = t.top + e.clientTop),
                (t.left = t.left + e.clientLeft),
                (t.bottom = t.top + e.clientHeight),
                (t.right = t.left + e.clientWidth),
                (t.width = e.clientWidth),
                (t.height = e.clientHeight),
                (t.x = t.left),
                (t.y = t.top),
                t
              );
            })(t)
          : ce(
              (function (e) {
                var t,
                  n = y(e),
                  i = g(e),
                  r = null == (t = e.ownerDocument) ? void 0 : t.body,
                  s = f(
                    n.scrollWidth,
                    n.clientWidth,
                    r ? r.scrollWidth : 0,
                    r ? r.clientWidth : 0
                  ),
                  o = f(
                    n.scrollHeight,
                    n.clientHeight,
                    r ? r.scrollHeight : 0,
                    r ? r.clientHeight : 0
                  ),
                  a = -i.scrollLeft + x(e),
                  l = -i.scrollTop;
                return (
                  "rtl" === w(r || n).direction &&
                    (a += f(n.clientWidth, r ? r.clientWidth : 0) - s),
                  { width: s, height: o, x: a, y: l }
                );
              })(y(e))
            );
      }
      function de(e, t, n) {
        var i =
            "clippingParents" === t
              ? (function (e) {
                  var t = A(O(e)),
                    n =
                      ["absolute", "fixed"].indexOf(w(e).position) >= 0 && d(e)
                        ? M(e)
                        : e;
                  return u(n)
                    ? t.filter(function (e) {
                        return u(e) && le(e, n) && "body" !== b(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          r = [].concat(i, [n]),
          s = r[0],
          o = r.reduce(function (t, n) {
            var i = ue(e, n);
            return (
              (t.top = f(i.top, t.top)),
              (t.right = h(i.right, t.right)),
              (t.bottom = h(i.bottom, t.bottom)),
              (t.left = f(i.left, t.left)),
              t
            );
          }, ue(e, s));
        return (
          (o.width = o.right - o.left),
          (o.height = o.bottom - o.top),
          (o.x = o.left),
          (o.y = o.top),
          o
        );
      }
      function pe(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function fe(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function he(e, t) {
        void 0 === t && (t = {});
        var n = t,
          i = n.placement,
          r = void 0 === i ? e.placement : i,
          s = n.boundary,
          o = void 0 === s ? "clippingParents" : s,
          a = n.rootBoundary,
          l = void 0 === a ? R : a,
          c = n.elementContext,
          d = void 0 === c ? B : c,
          p = n.altBoundary,
          f = void 0 !== p && p,
          h = n.padding,
          v = void 0 === h ? 0 : h,
          g = pe("number" != typeof v ? v : fe(v, j)),
          b = d === B ? "reference" : B,
          x = e.rects.popper,
          w = e.elements[f ? b : d],
          E = de(u(w) ? w : w.contextElement || y(e.elements.popper), o, l),
          S = m(e.elements.reference),
          T = Q({
            reference: S,
            element: x,
            strategy: "absolute",
            placement: r,
          }),
          O = ce(Object.assign({}, x, T)),
          C = d === B ? O : S,
          A = {
            top: E.top - C.top + g.top,
            bottom: C.bottom - E.bottom + g.bottom,
            left: E.left - C.left + g.left,
            right: C.right - E.right + g.right,
          },
          k = e.modifiersData.offset;
        if (d === B && k) {
          var L = k[r];
          Object.keys(A).forEach(function (e) {
            var t = [_, $].indexOf(e) >= 0 ? 1 : -1,
              n = [P, $].indexOf(e) >= 0 ? "y" : "x";
            A[e] += L[n] * t;
          });
        }
        return A;
      }
      function ve(e, t, n) {
        return f(e, h(t, n));
      }
      const me = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            i = e.name,
            r = n.mainAxis,
            s = void 0 === r || r,
            o = n.altAxis,
            a = void 0 !== o && o,
            l = n.boundary,
            c = n.rootBoundary,
            u = n.altBoundary,
            d = n.padding,
            p = n.tether,
            v = void 0 === p || p,
            m = n.tetherOffset,
            g = void 0 === m ? 0 : m,
            b = he(t, {
              boundary: l,
              rootBoundary: c,
              padding: d,
              altBoundary: u,
            }),
            y = K(t.placement),
            x = Z(t.placement),
            w = !x,
            E = J(y),
            S = "x" === E ? "y" : "x",
            O = t.modifiersData.popperOffsets,
            C = t.rects.reference,
            A = t.rects.popper,
            k =
              "function" == typeof g
                ? g(Object.assign({}, t.rects, { placement: t.placement }))
                : g,
            L =
              "number" == typeof k
                ? { mainAxis: k, altAxis: k }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
            I = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            j = { x: 0, y: 0 };
          if (O) {
            if (s) {
              var N,
                R = "y" === E ? P : z,
                B = "y" === E ? $ : _,
                W = "y" === E ? "height" : "width",
                H = O[E],
                V = H + b[R],
                F = H - b[B],
                G = v ? -A[W] / 2 : 0,
                q = x === D ? C[W] : A[W],
                X = x === D ? -A[W] : -C[W],
                Y = t.elements.arrow,
                U = v && Y ? T(Y) : { width: 0, height: 0 },
                Q = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                ee = Q[R],
                te = Q[B],
                ne = ve(0, C[W], U[W]),
                ie = w
                  ? C[W] / 2 - G - ne - ee - L.mainAxis
                  : q - ne - ee - L.mainAxis,
                re = w
                  ? -C[W] / 2 + G + ne + te + L.mainAxis
                  : X + ne + te + L.mainAxis,
                se = t.elements.arrow && M(t.elements.arrow),
                oe = se
                  ? "y" === E
                    ? se.clientTop || 0
                    : se.clientLeft || 0
                  : 0,
                ae = null != (N = null == I ? void 0 : I[E]) ? N : 0,
                le = H + re - ae,
                ce = ve(v ? h(V, H + ie - ae - oe) : V, H, v ? f(F, le) : F);
              (O[E] = ce), (j[E] = ce - H);
            }
            if (a) {
              var ue,
                de = "x" === E ? P : z,
                pe = "x" === E ? $ : _,
                fe = O[S],
                me = "y" === S ? "height" : "width",
                ge = fe + b[de],
                be = fe - b[pe],
                ye = -1 !== [P, z].indexOf(y),
                xe = null != (ue = null == I ? void 0 : I[S]) ? ue : 0,
                we = ye ? ge : fe - C[me] - A[me] - xe + L.altAxis,
                Ee = ye ? fe + C[me] + A[me] - xe - L.altAxis : be,
                Se =
                  v && ye
                    ? (function (e, t, n) {
                        var i = ve(e, t, n);
                        return i > n ? n : i;
                      })(we, fe, Ee)
                    : ve(v ? we : ge, fe, v ? Ee : be);
              (O[S] = Se), (j[S] = Se - fe);
            }
            t.modifiersData[i] = j;
          }
        },
        requiresIfExists: ["offset"],
      };
      const ge = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            i = e.name,
            r = e.options,
            s = n.elements.arrow,
            o = n.modifiersData.popperOffsets,
            a = K(n.placement),
            l = J(a),
            c = [z, _].indexOf(a) >= 0 ? "height" : "width";
          if (s && o) {
            var u = (function (e, t) {
                return pe(
                  "number" !=
                    typeof (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : fe(e, j)
                );
              })(r.padding, n),
              d = T(s),
              p = "y" === l ? P : z,
              f = "y" === l ? $ : _,
              h =
                n.rects.reference[c] +
                n.rects.reference[l] -
                o[l] -
                n.rects.popper[c],
              v = o[l] - n.rects.reference[l],
              m = M(s),
              g = m
                ? "y" === l
                  ? m.clientHeight || 0
                  : m.clientWidth || 0
                : 0,
              b = h / 2 - v / 2,
              y = u[p],
              x = g - d[c] - u[f],
              w = g / 2 - d[c] / 2 + b,
              E = ve(y, w, x),
              S = l;
            n.modifiersData[i] =
              (((t = {})[S] = E), (t.centerOffset = E - w), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            i = void 0 === n ? "[data-popper-arrow]" : n;
          null != i &&
            ("string" != typeof i ||
              (i = t.elements.popper.querySelector(i))) &&
            le(t.elements.popper, i) &&
            (t.elements.arrow = i);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function be(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function ye(e) {
        return [P, _, $, z].some(function (t) {
          return e[t] >= 0;
        });
      }
      var xe = X({
          defaultModifiers: [
            U,
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = Q({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  i = n.gpuAcceleration,
                  r = void 0 === i || i,
                  s = n.adaptive,
                  o = void 0 === s || s,
                  a = n.roundOffsets,
                  l = void 0 === a || a,
                  c = {
                    placement: K(t.placement),
                    variation: Z(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: r,
                    isFixed: "fixed" === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    te(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: o,
                        roundOffsets: l,
                      })
                    )
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      te(
                        Object.assign({}, c, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: l,
                        })
                      )
                    )),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    { "data-popper-placement": t.placement }
                  ));
              },
              data: {},
            },
            ne,
            ie,
            {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  i = e.name;
                if (!t.modifiersData[i]._skip) {
                  for (
                    var r = n.mainAxis,
                      s = void 0 === r || r,
                      o = n.altAxis,
                      a = void 0 === o || o,
                      l = n.fallbackPlacements,
                      c = n.padding,
                      u = n.boundary,
                      d = n.rootBoundary,
                      p = n.altBoundary,
                      f = n.flipVariations,
                      h = void 0 === f || f,
                      v = n.allowedAutoPlacements,
                      m = t.options.placement,
                      g = K(m),
                      b =
                        l ||
                        (g === m || !h
                          ? [se(m)]
                          : (function (e) {
                              if (K(e) === I) return [];
                              var t = se(e);
                              return [ae(e), t, ae(t)];
                            })(m)),
                      y = [m].concat(b).reduce(function (e, n) {
                        return e.concat(
                          K(n) === I
                            ? (function (e, t) {
                                void 0 === t && (t = {});
                                var n = t,
                                  i = n.placement,
                                  r = n.boundary,
                                  s = n.rootBoundary,
                                  o = n.padding,
                                  a = n.flipVariations,
                                  l = n.allowedAutoPlacements,
                                  c = void 0 === l ? H : l,
                                  u = Z(i),
                                  d = u
                                    ? a
                                      ? W
                                      : W.filter(function (e) {
                                          return Z(e) === u;
                                        })
                                    : j,
                                  p = d.filter(function (e) {
                                    return c.indexOf(e) >= 0;
                                  });
                                0 === p.length && (p = d);
                                var f = p.reduce(function (t, n) {
                                  return (
                                    (t[n] = he(e, {
                                      placement: n,
                                      boundary: r,
                                      rootBoundary: s,
                                      padding: o,
                                    })[K(n)]),
                                    t
                                  );
                                }, {});
                                return Object.keys(f).sort(function (e, t) {
                                  return f[e] - f[t];
                                });
                              })(t, {
                                placement: n,
                                boundary: u,
                                rootBoundary: d,
                                padding: c,
                                flipVariations: h,
                                allowedAutoPlacements: v,
                              })
                            : n
                        );
                      }, []),
                      x = t.rects.reference,
                      w = t.rects.popper,
                      E = new Map(),
                      S = !0,
                      T = y[0],
                      O = 0;
                    O < y.length;
                    O++
                  ) {
                    var C = y[O],
                      A = K(C),
                      k = Z(C) === D,
                      L = [P, $].indexOf(A) >= 0,
                      M = L ? "width" : "height",
                      N = he(t, {
                        placement: C,
                        boundary: u,
                        rootBoundary: d,
                        altBoundary: p,
                        padding: c,
                      }),
                      R = L ? (k ? _ : z) : k ? $ : P;
                    x[M] > w[M] && (R = se(R));
                    var B = se(R),
                      V = [];
                    if (
                      (s && V.push(N[A] <= 0),
                      a && V.push(N[R] <= 0, N[B] <= 0),
                      V.every(function (e) {
                        return e;
                      }))
                    ) {
                      (T = C), (S = !1);
                      break;
                    }
                    E.set(C, V);
                  }
                  if (S)
                    for (
                      var F = function (e) {
                          var t = y.find(function (t) {
                            var n = E.get(t);
                            if (n)
                              return n.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (T = t), "break";
                        },
                        G = h ? 3 : 1;
                      G > 0;
                      G--
                    ) {
                      if ("break" === F(G)) break;
                    }
                  t.placement !== T &&
                    ((t.modifiersData[i]._skip = !0),
                    (t.placement = T),
                    (t.reset = !0));
                }
              },
              requiresIfExists: ["offset"],
              data: { _skip: !1 },
            },
            me,
            ge,
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  i = t.rects.reference,
                  r = t.rects.popper,
                  s = t.modifiersData.preventOverflow,
                  o = he(t, { elementContext: "reference" }),
                  a = he(t, { altBoundary: !0 }),
                  l = be(o, i),
                  c = be(a, r, s),
                  u = ye(l),
                  d = ye(c);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: l,
                  popperEscapeOffsets: c,
                  isReferenceHidden: u,
                  hasPopperEscaped: d,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
                      "data-popper-escaped": d,
                    }
                  ));
              },
            },
          ],
        }),
        we = "tippy-content",
        Ee = "tippy-backdrop",
        Se = "tippy-arrow",
        Te = "tippy-svg-arrow",
        Oe = { passive: !0, capture: !0 },
        Ce = function () {
          return document.body;
        };
      function Ae(e, t, n) {
        if (Array.isArray(e)) {
          var i = e[t];
          return null == i ? (Array.isArray(n) ? n[t] : n) : i;
        }
        return e;
      }
      function ke(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
      }
      function Le(e, t) {
        return "function" == typeof e ? e.apply(void 0, t) : e;
      }
      function Me(e, t) {
        return 0 === t
          ? e
          : function (i) {
              clearTimeout(n),
                (n = setTimeout(function () {
                  e(i);
                }, t));
            };
        var n;
      }
      function Pe(e) {
        return [].concat(e);
      }
      function $e(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function _e(e) {
        return e.split("-")[0];
      }
      function ze(e) {
        return [].slice.call(e);
      }
      function Ie(e) {
        return Object.keys(e).reduce(function (t, n) {
          return void 0 !== e[n] && (t[n] = e[n]), t;
        }, {});
      }
      function je() {
        return document.createElement("div");
      }
      function De(e) {
        return ["Element", "Fragment"].some(function (t) {
          return ke(e, t);
        });
      }
      function Ne(e) {
        return ke(e, "MouseEvent");
      }
      function Re(e) {
        return !(!e || !e._tippy || e._tippy.reference !== e);
      }
      function Be(e) {
        return De(e)
          ? [e]
          : (function (e) {
              return ke(e, "NodeList");
            })(e)
          ? ze(e)
          : Array.isArray(e)
          ? e
          : ze(document.querySelectorAll(e));
      }
      function We(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + "ms");
        });
      }
      function He(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", t);
        });
      }
      function Ve(e) {
        var t,
          n = Pe(e)[0];
        return null != n && null != (t = n.ownerDocument) && t.body
          ? n.ownerDocument
          : document;
      }
      function Fe(e, t, n) {
        var i = t + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
          e[i](t, n);
        });
      }
      function Ge(e, t) {
        for (var n = t; n; ) {
          var i;
          if (e.contains(n)) return !0;
          n =
            null == n.getRootNode || null == (i = n.getRootNode())
              ? void 0
              : i.host;
        }
        return !1;
      }
      var qe = { isTouch: !1 },
        Xe = 0;
      function Ye() {
        qe.isTouch ||
          ((qe.isTouch = !0),
          window.performance && document.addEventListener("mousemove", Ue));
      }
      function Ue() {
        var e = performance.now();
        e - Xe < 20 &&
          ((qe.isTouch = !1), document.removeEventListener("mousemove", Ue)),
          (Xe = e);
      }
      function Ke() {
        var e = document.activeElement;
        if (Re(e)) {
          var t = e._tippy;
          e.blur && !t.state.isVisible && e.blur();
        }
      }
      var Ze =
        !!("undefined" != typeof window && "undefined" != typeof document) &&
        !!window.msCrypto;
      var Je = {
          animateFill: !1,
          followCursor: !1,
          inlinePositioning: !1,
          sticky: !1,
        },
        Qe = Object.assign(
          {
            appendTo: Ce,
            aria: { content: "auto", expanded: "auto" },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
          },
          Je,
          {
            allowHTML: !1,
            animation: "fade",
            arrow: !0,
            content: "",
            inertia: !1,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999,
          }
        ),
        et = Object.keys(Qe);
      function tt(e) {
        var t = (e.plugins || []).reduce(function (t, n) {
          var i,
            r = n.name,
            s = n.defaultValue;
          r && (t[r] = void 0 !== e[r] ? e[r] : null != (i = Qe[r]) ? i : s);
          return t;
        }, {});
        return Object.assign({}, e, t);
      }
      function nt(e, t) {
        var n = Object.assign(
          {},
          t,
          { content: Le(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e, t) {
                return (
                  t
                    ? Object.keys(tt(Object.assign({}, Qe, { plugins: t })))
                    : et
                ).reduce(function (t, n) {
                  var i = (e.getAttribute("data-tippy-" + n) || "").trim();
                  if (!i) return t;
                  if ("content" === n) t[n] = i;
                  else
                    try {
                      t[n] = JSON.parse(i);
                    } catch (e) {
                      t[n] = i;
                    }
                  return t;
                }, {});
              })(e, t.plugins)
        );
        return (
          (n.aria = Object.assign({}, Qe.aria, n.aria)),
          (n.aria = {
            expanded:
              "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
            content:
              "auto" === n.aria.content
                ? t.interactive
                  ? null
                  : "describedby"
                : n.aria.content,
          }),
          n
        );
      }
      function it(e, t) {
        e.innerHTML = t;
      }
      function rt(e) {
        var t = je();
        return (
          !0 === e
            ? (t.className = Se)
            : ((t.className = Te), De(e) ? t.appendChild(e) : it(t, e)),
          t
        );
      }
      function st(e, t) {
        De(t.content)
          ? (it(e, ""), e.appendChild(t.content))
          : "function" != typeof t.content &&
            (t.allowHTML ? it(e, t.content) : (e.textContent = t.content));
      }
      function ot(e) {
        var t = e.firstElementChild,
          n = ze(t.children);
        return {
          box: t,
          content: n.find(function (e) {
            return e.classList.contains(we);
          }),
          arrow: n.find(function (e) {
            return e.classList.contains(Se) || e.classList.contains(Te);
          }),
          backdrop: n.find(function (e) {
            return e.classList.contains(Ee);
          }),
        };
      }
      function at(e) {
        var t = je(),
          n = je();
        (n.className = "tippy-box"),
          n.setAttribute("data-state", "hidden"),
          n.setAttribute("tabindex", "-1");
        var i = je();
        function r(n, i) {
          var r = ot(t),
            s = r.box,
            o = r.content,
            a = r.arrow;
          i.theme
            ? s.setAttribute("data-theme", i.theme)
            : s.removeAttribute("data-theme"),
            "string" == typeof i.animation
              ? s.setAttribute("data-animation", i.animation)
              : s.removeAttribute("data-animation"),
            i.inertia
              ? s.setAttribute("data-inertia", "")
              : s.removeAttribute("data-inertia"),
            (s.style.maxWidth =
              "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth),
            i.role ? s.setAttribute("role", i.role) : s.removeAttribute("role"),
            (n.content === i.content && n.allowHTML === i.allowHTML) ||
              st(o, e.props),
            i.arrow
              ? a
                ? n.arrow !== i.arrow &&
                  (s.removeChild(a), s.appendChild(rt(i.arrow)))
                : s.appendChild(rt(i.arrow))
              : a && s.removeChild(a);
        }
        return (
          (i.className = we),
          i.setAttribute("data-state", "hidden"),
          st(i, e.props),
          t.appendChild(n),
          n.appendChild(i),
          r(e.props, e.props),
          { popper: t, onUpdate: r }
        );
      }
      at.$$tippy = !0;
      var lt = 1,
        ct = [],
        ut = [];
      function dt(e, t) {
        var n,
          i,
          r,
          s,
          o,
          a,
          l,
          c,
          u = nt(e, Object.assign({}, Qe, tt(Ie(t)))),
          d = !1,
          p = !1,
          f = !1,
          h = !1,
          v = [],
          m = Me(X, u.interactiveDebounce),
          g = lt++,
          b = (c = u.plugins).filter(function (e, t) {
            return c.indexOf(e) === t;
          }),
          y = {
            id: g,
            reference: e,
            popper: je(),
            popperInstance: null,
            props: u,
            state: {
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: b,
            clearDelayTimeouts: function () {
              clearTimeout(n), clearTimeout(i), cancelAnimationFrame(r);
            },
            setProps: function (t) {
              0;
              if (y.state.isDestroyed) return;
              _("onBeforeUpdate", [y, t]), G();
              var n = y.props,
                i = nt(
                  e,
                  Object.assign({}, n, Ie(t), { ignoreAttributes: !0 })
                );
              (y.props = i),
                F(),
                n.interactiveDebounce !== i.interactiveDebounce &&
                  (j(), (m = Me(X, i.interactiveDebounce)));
              n.triggerTarget && !i.triggerTarget
                ? Pe(n.triggerTarget).forEach(function (e) {
                    e.removeAttribute("aria-expanded");
                  })
                : i.triggerTarget && e.removeAttribute("aria-expanded");
              I(), $(), E && E(n, i);
              y.popperInstance &&
                (Z(),
                Q().forEach(function (e) {
                  requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
                }));
              _("onAfterUpdate", [y, t]);
            },
            setContent: function (e) {
              y.setProps({ content: e });
            },
            show: function () {
              0;
              var e = y.state.isVisible,
                t = y.state.isDestroyed,
                n = !y.state.isEnabled,
                i = qe.isTouch && !y.props.touch,
                r = Ae(y.props.duration, 0, Qe.duration);
              if (e || t || n || i) return;
              if (k().hasAttribute("disabled")) return;
              if ((_("onShow", [y], !1), !1 === y.props.onShow(y))) return;
              (y.state.isVisible = !0), A() && (w.style.visibility = "visible");
              $(), B(), y.state.isMounted || (w.style.transition = "none");
              if (A()) {
                var s = M(),
                  o = s.box,
                  l = s.content;
                We([o, l], 0);
              }
              (a = function () {
                var e;
                if (y.state.isVisible && !h) {
                  if (
                    ((h = !0),
                    w.offsetHeight,
                    (w.style.transition = y.props.moveTransition),
                    A() && y.props.animation)
                  ) {
                    var t = M(),
                      n = t.box,
                      i = t.content;
                    We([n, i], r), He([n, i], "visible");
                  }
                  z(),
                    I(),
                    $e(ut, y),
                    null == (e = y.popperInstance) || e.forceUpdate(),
                    _("onMount", [y]),
                    y.props.animation &&
                      A() &&
                      (function (e, t) {
                        H(e, t);
                      })(r, function () {
                        (y.state.isShown = !0), _("onShown", [y]);
                      });
                }
              }),
                (function () {
                  var e,
                    t = y.props.appendTo,
                    n = k();
                  e =
                    (y.props.interactive && t === Ce) || "parent" === t
                      ? n.parentNode
                      : Le(t, [n]);
                  e.contains(w) || e.appendChild(w);
                  (y.state.isMounted = !0), Z(), !1;
                })();
            },
            hide: function () {
              0;
              var e = !y.state.isVisible,
                t = y.state.isDestroyed,
                n = !y.state.isEnabled,
                i = Ae(y.props.duration, 1, Qe.duration);
              if (e || t || n) return;
              if ((_("onHide", [y], !1), !1 === y.props.onHide(y))) return;
              (y.state.isVisible = !1),
                (y.state.isShown = !1),
                (h = !1),
                (d = !1),
                A() && (w.style.visibility = "hidden");
              if ((j(), W(), $(!0), A())) {
                var r = M(),
                  s = r.box,
                  o = r.content;
                y.props.animation && (We([s, o], i), He([s, o], "hidden"));
              }
              z(),
                I(),
                y.props.animation
                  ? A() &&
                    (function (e, t) {
                      H(e, function () {
                        !y.state.isVisible &&
                          w.parentNode &&
                          w.parentNode.contains(w) &&
                          t();
                      });
                    })(i, y.unmount)
                  : y.unmount();
            },
            hideWithInteractivity: function (e) {
              0;
              L().addEventListener("mousemove", m), $e(ct, m), m(e);
            },
            enable: function () {
              y.state.isEnabled = !0;
            },
            disable: function () {
              y.hide(), (y.state.isEnabled = !1);
            },
            unmount: function () {
              0;
              y.state.isVisible && y.hide();
              if (!y.state.isMounted) return;
              J(),
                Q().forEach(function (e) {
                  e._tippy.unmount();
                }),
                w.parentNode && w.parentNode.removeChild(w);
              (ut = ut.filter(function (e) {
                return e !== y;
              })),
                (y.state.isMounted = !1),
                _("onHidden", [y]);
            },
            destroy: function () {
              0;
              if (y.state.isDestroyed) return;
              y.clearDelayTimeouts(),
                y.unmount(),
                G(),
                delete e._tippy,
                (y.state.isDestroyed = !0),
                _("onDestroy", [y]);
            },
          };
        if (!u.render) return y;
        var x = u.render(y),
          w = x.popper,
          E = x.onUpdate;
        w.setAttribute("data-tippy-root", ""),
          (w.id = "tippy-" + y.id),
          (y.popper = w),
          (e._tippy = y),
          (w._tippy = y);
        var S = b.map(function (e) {
            return e.fn(y);
          }),
          T = e.hasAttribute("aria-expanded");
        return (
          F(),
          I(),
          $(),
          _("onCreate", [y]),
          u.showOnCreate && ee(),
          w.addEventListener("mouseenter", function () {
            y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
          }),
          w.addEventListener("mouseleave", function () {
            y.props.interactive &&
              y.props.trigger.indexOf("mouseenter") >= 0 &&
              L().addEventListener("mousemove", m);
          }),
          y
        );
        function O() {
          var e = y.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function C() {
          return "hold" === O()[0];
        }
        function A() {
          var e;
          return !(null == (e = y.props.render) || !e.$$tippy);
        }
        function k() {
          return l || e;
        }
        function L() {
          var e = k().parentNode;
          return e ? Ve(e) : document;
        }
        function M() {
          return ot(w);
        }
        function P(e) {
          return (y.state.isMounted && !y.state.isVisible) ||
            qe.isTouch ||
            (s && "focus" === s.type)
            ? 0
            : Ae(y.props.delay, e ? 0 : 1, Qe.delay);
        }
        function $(e) {
          void 0 === e && (e = !1),
            (w.style.pointerEvents = y.props.interactive && !e ? "" : "none"),
            (w.style.zIndex = "" + y.props.zIndex);
        }
        function _(e, t, n) {
          var i;
          (void 0 === n && (n = !0),
          S.forEach(function (n) {
            n[e] && n[e].apply(n, t);
          }),
          n) && (i = y.props)[e].apply(i, t);
        }
        function z() {
          var t = y.props.aria;
          if (t.content) {
            var n = "aria-" + t.content,
              i = w.id;
            Pe(y.props.triggerTarget || e).forEach(function (e) {
              var t = e.getAttribute(n);
              if (y.state.isVisible) e.setAttribute(n, t ? t + " " + i : i);
              else {
                var r = t && t.replace(i, "").trim();
                r ? e.setAttribute(n, r) : e.removeAttribute(n);
              }
            });
          }
        }
        function I() {
          !T &&
            y.props.aria.expanded &&
            Pe(y.props.triggerTarget || e).forEach(function (e) {
              y.props.interactive
                ? e.setAttribute(
                    "aria-expanded",
                    y.state.isVisible && e === k() ? "true" : "false"
                  )
                : e.removeAttribute("aria-expanded");
            });
        }
        function j() {
          L().removeEventListener("mousemove", m),
            (ct = ct.filter(function (e) {
              return e !== m;
            }));
        }
        function D(t) {
          if (!qe.isTouch || (!f && "mousedown" !== t.type)) {
            var n = (t.composedPath && t.composedPath()[0]) || t.target;
            if (!y.props.interactive || !Ge(w, n)) {
              if (
                Pe(y.props.triggerTarget || e).some(function (e) {
                  return Ge(e, n);
                })
              ) {
                if (qe.isTouch) return;
                if (y.state.isVisible && y.props.trigger.indexOf("click") >= 0)
                  return;
              } else _("onClickOutside", [y, t]);
              !0 === y.props.hideOnClick &&
                (y.clearDelayTimeouts(),
                y.hide(),
                (p = !0),
                setTimeout(function () {
                  p = !1;
                }),
                y.state.isMounted || W());
            }
          }
        }
        function N() {
          f = !0;
        }
        function R() {
          f = !1;
        }
        function B() {
          var e = L();
          e.addEventListener("mousedown", D, !0),
            e.addEventListener("touchend", D, Oe),
            e.addEventListener("touchstart", R, Oe),
            e.addEventListener("touchmove", N, Oe);
        }
        function W() {
          var e = L();
          e.removeEventListener("mousedown", D, !0),
            e.removeEventListener("touchend", D, Oe),
            e.removeEventListener("touchstart", R, Oe),
            e.removeEventListener("touchmove", N, Oe);
        }
        function H(e, t) {
          var n = M().box;
          function i(e) {
            e.target === n && (Fe(n, "remove", i), t());
          }
          if (0 === e) return t();
          Fe(n, "remove", o), Fe(n, "add", i), (o = i);
        }
        function V(t, n, i) {
          void 0 === i && (i = !1),
            Pe(y.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, n, i),
                v.push({ node: e, eventType: t, handler: n, options: i });
            });
        }
        function F() {
          C() &&
            (V("touchstart", q, { passive: !0 }),
            V("touchend", Y, { passive: !0 })),
            (function (e) {
              return e.split(/\s+/).filter(Boolean);
            })(y.props.trigger).forEach(function (e) {
              if ("manual" !== e)
                switch ((V(e, q), e)) {
                  case "mouseenter":
                    V("mouseleave", Y);
                    break;
                  case "focus":
                    V(Ze ? "focusout" : "blur", U);
                    break;
                  case "focusin":
                    V("focusout", U);
                }
            });
        }
        function G() {
          v.forEach(function (e) {
            var t = e.node,
              n = e.eventType,
              i = e.handler,
              r = e.options;
            t.removeEventListener(n, i, r);
          }),
            (v = []);
        }
        function q(e) {
          var t,
            n = !1;
          if (y.state.isEnabled && !K(e) && !p) {
            var i = "focus" === (null == (t = s) ? void 0 : t.type);
            (s = e),
              (l = e.currentTarget),
              I(),
              !y.state.isVisible &&
                Ne(e) &&
                ct.forEach(function (t) {
                  return t(e);
                }),
              "click" === e.type &&
              (y.props.trigger.indexOf("mouseenter") < 0 || d) &&
              !1 !== y.props.hideOnClick &&
              y.state.isVisible
                ? (n = !0)
                : ee(e),
              "click" === e.type && (d = !n),
              n && !i && te(e);
          }
        }
        function X(e) {
          var t = e.target,
            n = k().contains(t) || w.contains(t);
          if ("mousemove" !== e.type || !n) {
            var i = Q()
              .concat(w)
              .map(function (e) {
                var t,
                  n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                return n
                  ? {
                      popperRect: e.getBoundingClientRect(),
                      popperState: n,
                      props: u,
                    }
                  : null;
              })
              .filter(Boolean);
            (function (e, t) {
              var n = t.clientX,
                i = t.clientY;
              return e.every(function (e) {
                var t = e.popperRect,
                  r = e.popperState,
                  s = e.props.interactiveBorder,
                  o = _e(r.placement),
                  a = r.modifiersData.offset;
                if (!a) return !0;
                var l = "bottom" === o ? a.top.y : 0,
                  c = "top" === o ? a.bottom.y : 0,
                  u = "right" === o ? a.left.x : 0,
                  d = "left" === o ? a.right.x : 0,
                  p = t.top - i + l > s,
                  f = i - t.bottom - c > s,
                  h = t.left - n + u > s,
                  v = n - t.right - d > s;
                return p || f || h || v;
              });
            })(i, e) && (j(), te(e));
          }
        }
        function Y(e) {
          K(e) ||
            (y.props.trigger.indexOf("click") >= 0 && d) ||
            (y.props.interactive ? y.hideWithInteractivity(e) : te(e));
        }
        function U(e) {
          (y.props.trigger.indexOf("focusin") < 0 && e.target !== k()) ||
            (y.props.interactive &&
              e.relatedTarget &&
              w.contains(e.relatedTarget)) ||
            te(e);
        }
        function K(e) {
          return !!qe.isTouch && C() !== e.type.indexOf("touch") >= 0;
        }
        function Z() {
          J();
          var t = y.props,
            n = t.popperOptions,
            i = t.placement,
            r = t.offset,
            s = t.getReferenceClientRect,
            o = t.moveTransition,
            l = A() ? ot(w).arrow : null,
            c = s
              ? {
                  getBoundingClientRect: s,
                  contextElement: s.contextElement || k(),
                }
              : e,
            u = {
              name: "$$tippy",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function (e) {
                var t = e.state;
                if (A()) {
                  var n = M().box;
                  ["placement", "reference-hidden", "escaped"].forEach(
                    function (e) {
                      "placement" === e
                        ? n.setAttribute("data-placement", t.placement)
                        : t.attributes.popper["data-popper-" + e]
                        ? n.setAttribute("data-" + e, "")
                        : n.removeAttribute("data-" + e);
                    }
                  ),
                    (t.attributes.popper = {});
                }
              },
            },
            d = [
              { name: "offset", options: { offset: r } },
              {
                name: "preventOverflow",
                options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
              },
              { name: "flip", options: { padding: 5 } },
              { name: "computeStyles", options: { adaptive: !o } },
              u,
            ];
          A() &&
            l &&
            d.push({ name: "arrow", options: { element: l, padding: 3 } }),
            d.push.apply(d, (null == n ? void 0 : n.modifiers) || []),
            (y.popperInstance = xe(
              c,
              w,
              Object.assign({}, n, {
                placement: i,
                onFirstUpdate: a,
                modifiers: d,
              })
            ));
        }
        function J() {
          y.popperInstance &&
            (y.popperInstance.destroy(), (y.popperInstance = null));
        }
        function Q() {
          return ze(w.querySelectorAll("[data-tippy-root]"));
        }
        function ee(e) {
          y.clearDelayTimeouts(), e && _("onTrigger", [y, e]), B();
          var t = P(!0),
            i = O(),
            r = i[0],
            s = i[1];
          qe.isTouch && "hold" === r && s && (t = s),
            t
              ? (n = setTimeout(function () {
                  y.show();
                }, t))
              : y.show();
        }
        function te(e) {
          if (
            (y.clearDelayTimeouts(),
            _("onUntrigger", [y, e]),
            y.state.isVisible)
          ) {
            if (
              !(
                y.props.trigger.indexOf("mouseenter") >= 0 &&
                y.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
                d
              )
            ) {
              var t = P(!1);
              t
                ? (i = setTimeout(function () {
                    y.state.isVisible && y.hide();
                  }, t))
                : (r = requestAnimationFrame(function () {
                    y.hide();
                  }));
            }
          } else W();
        }
      }
      function pt(e, t) {
        void 0 === t && (t = {});
        var n = Qe.plugins.concat(t.plugins || []);
        document.addEventListener("touchstart", Ye, Oe),
          window.addEventListener("blur", Ke);
        var i = Object.assign({}, t, { plugins: n }),
          r = Be(e).reduce(function (e, t) {
            var n = t && dt(t, i);
            return n && e.push(n), e;
          }, []);
        return De(e) ? r[0] : r;
      }
      (pt.defaultProps = Qe),
        (pt.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (t) {
            Qe[t] = e[t];
          });
        }),
        (pt.currentInput = qe);
      Object.assign({}, ne, {
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow);
        },
      });
      pt.setDefaultProps({ render: at });
      function ft(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function ht(e = {}, t = {}) {
        Object.keys(t).forEach((n) => {
          void 0 === e[n]
            ? (e[n] = t[n])
            : ft(t[n]) &&
              ft(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              ht(e[n], t[n]);
        });
      }
      pt("[data-tippy-content]", {});
      const vt = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function mt() {
        const e = "undefined" != typeof document ? document : {};
        return ht(e, vt), e;
      }
      const gt = {
        document: vt,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function bt() {
        const e = "undefined" != typeof window ? window : {};
        return ht(e, gt), e;
      }
      class yt extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function xt(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...xt(e)) : t.push(e);
          }),
          t
        );
      }
      function wt(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function Et(e, t) {
        const n = bt(),
          i = mt();
        let r = [];
        if (!t && e instanceof yt) return e;
        if (!e) return new yt(r);
        if ("string" == typeof e) {
          const n = e.trim();
          if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
            let e = "div";
            0 === n.indexOf("<li") && (e = "ul"),
              0 === n.indexOf("<tr") && (e = "tbody"),
              (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
              0 === n.indexOf("<tbody") && (e = "table"),
              0 === n.indexOf("<option") && (e = "select");
            const t = i.createElement(e);
            t.innerHTML = n;
            for (let e = 0; e < t.childNodes.length; e += 1)
              r.push(t.childNodes[e]);
          } else
            r = (function (e, t) {
              if ("string" != typeof e) return [e];
              const n = [],
                i = t.querySelectorAll(e);
              for (let e = 0; e < i.length; e += 1) n.push(i[e]);
              return n;
            })(e.trim(), t || i);
        } else if (e.nodeType || e === n || e === i) r.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof yt) return e;
          r = e;
        }
        return new yt(
          (function (e) {
            const t = [];
            for (let n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(r)
        );
      }
      Et.fn = yt.prototype;
      const St = "resize scroll".split(" ");
      function Tt(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              St.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : Et(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      Tt("click"),
        Tt("blur"),
        Tt("focus"),
        Tt("focusin"),
        Tt("focusout"),
        Tt("keyup"),
        Tt("keydown"),
        Tt("keypress"),
        Tt("submit"),
        Tt("change"),
        Tt("mousedown"),
        Tt("mousemove"),
        Tt("mouseup"),
        Tt("mouseenter"),
        Tt("mouseleave"),
        Tt("mouseout"),
        Tt("mouseover"),
        Tt("touchstart"),
        Tt("touchend"),
        Tt("touchmove"),
        Tt("resize"),
        Tt("scroll");
      const Ot = {
        addClass: function (...e) {
          const t = xt(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = xt(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = xt(e.map((e) => e.split(" ")));
          return (
            wt(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = xt(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (const t in e)
                (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, n, i, r] = e;
          function s(e) {
            const t = e.target;
            if (!t) return;
            const r = e.target.dom7EventData || [];
            if ((r.indexOf(e) < 0 && r.unshift(e), Et(t).is(n))) i.apply(t, r);
            else {
              const e = Et(t).parents();
              for (let t = 0; t < e.length; t += 1)
                Et(e[t]).is(n) && i.apply(e[t], r);
            }
          }
          function o(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
            r || (r = !1);
          const a = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (n)
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: i,
                    proxyListener: s,
                  }),
                  t.addEventListener(e, s, r);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                  t.addEventListener(e, o, r);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, n, i, r] = e;
          "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
            r || (r = !1);
          const s = t.split(" ");
          for (let e = 0; e < s.length; e += 1) {
            const t = s[e];
            for (let e = 0; e < this.length; e += 1) {
              const s = this[e];
              let o;
              if (
                (!n && s.dom7Listeners
                  ? (o = s.dom7Listeners[t])
                  : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]),
                o && o.length)
              )
                for (let e = o.length - 1; e >= 0; e -= 1) {
                  const n = o[e];
                  (i && n.listener === i) ||
                  (i &&
                    n.listener &&
                    n.listener.dom7proxy &&
                    n.listener.dom7proxy === i)
                    ? (s.removeEventListener(t, n.proxyListener, r),
                      o.splice(e, 1))
                    : i ||
                      (s.removeEventListener(t, n.proxyListener, r),
                      o.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = bt(),
            n = e[0].split(" "),
            i = e[1];
          for (let r = 0; r < n.length; r += 1) {
            const s = n[r];
            for (let n = 0; n < this.length; n += 1) {
              const r = this[n];
              if (t.CustomEvent) {
                const n = new t.CustomEvent(s, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (r.dom7EventData = e.filter((e, t) => t > 0)),
                  r.dispatchEvent(n),
                  (r.dom7EventData = []),
                  delete r.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function n(i) {
                i.target === this &&
                  (e.call(this, i), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = bt();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = bt(),
              t = mt(),
              n = this[0],
              i = n.getBoundingClientRect(),
              r = t.body,
              s = n.clientTop || r.clientTop || 0,
              o = n.clientLeft || r.clientLeft || 0,
              a = n === e ? e.scrollY : n.scrollTop,
              l = n === e ? e.scrollX : n.scrollLeft;
            return { top: i.top + a - s, left: i.left + l - o };
          }
          return null;
        },
        css: function (e, t) {
          const n = bt();
          let i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t];
              return this;
            }
            if (this[0])
              return n.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, n) => {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = bt(),
            n = mt(),
            i = this[0];
          let r, s;
          if (!i || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (r = Et(e), s = 0; s < r.length; s += 1)
              if (r[s] === i) return !0;
            return !1;
          }
          if (e === n) return i === n;
          if (e === t) return i === t;
          if (e.nodeType || e instanceof yt) {
            for (r = e.nodeType ? [e] : e, s = 0; s < r.length; s += 1)
              if (r[s] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return Et([]);
          if (e < 0) {
            const n = t + e;
            return Et(n < 0 ? [] : [this[n]]);
          }
          return Et([this[e]]);
        },
        append: function (...e) {
          let t;
          const n = mt();
          for (let i = 0; i < e.length; i += 1) {
            t = e[i];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const i = n.createElement("div");
                for (i.innerHTML = t; i.firstChild; )
                  this[e].appendChild(i.firstChild);
              } else if (t instanceof yt)
                for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = mt();
          let n, i;
          for (n = 0; n < this.length; n += 1)
            if ("string" == typeof e) {
              const r = t.createElement("div");
              for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1)
                this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]);
            } else if (e instanceof yt)
              for (i = 0; i < e.length; i += 1)
                this[n].insertBefore(e[i], this[n].childNodes[0]);
            else this[n].insertBefore(e, this[n].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                Et(this[0].nextElementSibling).is(e)
                ? Et([this[0].nextElementSibling])
                : Et([])
              : this[0].nextElementSibling
              ? Et([this[0].nextElementSibling])
              : Et([])
            : Et([]);
        },
        nextAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return Et([]);
          for (; n.nextElementSibling; ) {
            const i = n.nextElementSibling;
            e ? Et(i).is(e) && t.push(i) : t.push(i), (n = i);
          }
          return Et(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && Et(t.previousElementSibling).is(e)
                ? Et([t.previousElementSibling])
                : Et([])
              : t.previousElementSibling
              ? Et([t.previousElementSibling])
              : Et([]);
          }
          return Et([]);
        },
        prevAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return Et([]);
          for (; n.previousElementSibling; ) {
            const i = n.previousElementSibling;
            e ? Et(i).is(e) && t.push(i) : t.push(i), (n = i);
          }
          return Et(t);
        },
        parent: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? Et(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return Et(t);
        },
        parents: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            let i = this[n].parentNode;
            for (; i; )
              e ? Et(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          }
          return Et(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? Et([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e]);
          }
          return Et(t);
        },
        children: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].children;
            for (let n = 0; n < i.length; n += 1)
              (e && !Et(i[n]).is(e)) || t.push(i[n]);
          }
          return Et(t);
        },
        filter: function (e) {
          return Et(wt(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(Ot).forEach((e) => {
        Object.defineProperty(Et.fn, e, { value: Ot[e], writable: !0 });
      });
      const Ct = Et;
      function At(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function kt() {
        return Date.now();
      }
      function Lt(e, t) {
        void 0 === t && (t = "x");
        const n = bt();
        let i, r, s;
        const o = (function (e) {
          const t = bt();
          let n;
          return (
            t.getComputedStyle && (n = t.getComputedStyle(e, null)),
            !n && e.currentStyle && (n = e.currentStyle),
            n || (n = e.style),
            n
          );
        })(e);
        return (
          n.WebKitCSSMatrix
            ? ((r = o.transform || o.webkitTransform),
              r.split(",").length > 6 &&
                (r = r
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (s = new n.WebKitCSSMatrix("none" === r ? "" : r)))
            : ((s =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (i = s.toString().split(","))),
          "x" === t &&
            (r = n.WebKitCSSMatrix
              ? s.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (r = n.WebKitCSSMatrix
              ? s.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          r || 0
        );
      }
      function Mt(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function Pt(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function $t() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
          const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (null != i && !Pt(i)) {
            const n = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, r = n.length; t < r; t += 1) {
              const r = n[t],
                s = Object.getOwnPropertyDescriptor(i, r);
              void 0 !== s &&
                s.enumerable &&
                (Mt(e[r]) && Mt(i[r])
                  ? i[r].__swiper__
                    ? (e[r] = i[r])
                    : $t(e[r], i[r])
                  : !Mt(e[r]) && Mt(i[r])
                  ? ((e[r] = {}),
                    i[r].__swiper__ ? (e[r] = i[r]) : $t(e[r], i[r]))
                  : (e[r] = i[r]));
            }
          }
        }
        return e;
      }
      function _t(e, t, n) {
        e.style.setProperty(t, n);
      }
      function zt(e) {
        let { swiper: t, targetPosition: n, side: i } = e;
        const r = bt(),
          s = -t.translate;
        let o,
          a = null;
        const l = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          r.cancelAnimationFrame(t.cssModeFrameID);
        const c = n > s ? "next" : "prev",
          u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          d = () => {
            (o = new Date().getTime()), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / l, 1), 0),
              c = 0.5 - Math.cos(e * Math.PI) / 2;
            let p = s + c * (n - s);
            if ((u(p, n) && (p = n), t.wrapperEl.scrollTo({ [i]: p }), u(p, n)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [i]: p });
                }),
                void r.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = r.requestAnimationFrame(d);
          };
        d();
      }
      let It, jt, Dt;
      function Nt() {
        return (
          It ||
            (It = (function () {
              const e = bt(),
                t = mt();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const n = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          It
        );
      }
      function Rt(e) {
        return (
          void 0 === e && (e = {}),
          jt ||
            (jt = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const n = Nt(),
                i = bt(),
                r = i.navigator.platform,
                s = t || i.navigator.userAgent,
                o = { ios: !1, android: !1 },
                a = i.screen.width,
                l = i.screen.height,
                c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
              let u = s.match(/(iPad).*OS\s([\d_]+)/);
              const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "Win32" === r;
              let h = "MacIntel" === r;
              return (
                !u &&
                  h &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${a}x${l}`) >= 0 &&
                  ((u = s.match(/(Version)\/([\d.]+)/)),
                  u || (u = [0, 1, "13_0_0"]),
                  (h = !1)),
                c && !f && ((o.os = "android"), (o.android = !0)),
                (u || p || d) && ((o.os = "ios"), (o.ios = !0)),
                o
              );
            })(e)),
          jt
        );
      }
      function Bt() {
        return (
          Dt ||
            (Dt = (function () {
              const e = bt();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          Dt
        );
      }
      const Wt = {
        on(e, t, n) {
          const i = this;
          if ("function" != typeof t) return i;
          const r = n ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][r](t);
            }),
            i
          );
        },
        once(e, t, n) {
          const i = this;
          if ("function" != typeof t) return i;
          function r() {
            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
              s[o] = arguments[o];
            t.apply(i, s);
          }
          return (r.__emitterProxy = t), i.on(e, r, n);
        },
        onAny(e, t) {
          const n = this;
          if ("function" != typeof e) return n;
          const i = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsAnyListeners) return t;
          const n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off(e, t) {
          const n = this;
          return n.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach((i, r) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(r, 1);
                    });
              }),
              n)
            : n;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners) return e;
          let t, n, i;
          for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
            s[o] = arguments[o];
          "string" == typeof s[0] || Array.isArray(s[0])
            ? ((t = s[0]), (n = s.slice(1, s.length)), (i = e))
            : ((t = s[0].events), (n = s[0].data), (i = s[0].context || e)),
            n.unshift(i);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(i, [t, ...n]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(i, n);
                  });
            }),
            e
          );
        },
      };
      const Ht = {
        updateSize: function () {
          const e = this;
          let t, n;
          const i = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : i[0].clientWidth),
            (n =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : i[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (n =
                n -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          const i = e.params,
            { $wrapperEl: r, size: s, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && i.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            u = r.children(`.${e.params.slideClass}`),
            d = l ? e.virtual.slides.length : u.length;
          let p = [];
          const f = [],
            h = [];
          let v = i.slidesOffsetBefore;
          "function" == typeof v && (v = i.slidesOffsetBefore.call(e));
          let m = i.slidesOffsetAfter;
          "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
          const g = e.snapGrid.length,
            b = e.slidesGrid.length;
          let y = i.spaceBetween,
            x = -v,
            w = 0,
            E = 0;
          if (void 0 === s) return;
          "string" == typeof y &&
            y.indexOf("%") >= 0 &&
            (y = (parseFloat(y.replace("%", "")) / 100) * s),
            (e.virtualSize = -y),
            o
              ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            i.centeredSlides &&
              i.cssMode &&
              (_t(e.wrapperEl, "--swiper-centered-offset-before", ""),
              _t(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const S = i.grid && i.grid.rows > 1 && e.grid;
          let T;
          S && e.grid.initSlides(d);
          const O =
            "auto" === i.slidesPerView &&
            i.breakpoints &&
            Object.keys(i.breakpoints).filter(
              (e) => void 0 !== i.breakpoints[e].slidesPerView
            ).length > 0;
          for (let r = 0; r < d; r += 1) {
            T = 0;
            const o = u.eq(r);
            if (
              (S && e.grid.updateSlide(r, o, d, t), "none" !== o.css("display"))
            ) {
              if ("auto" === i.slidesPerView) {
                O && (u[r].style[t("width")] = "");
                const s = getComputedStyle(o[0]),
                  a = o[0].style.transform,
                  l = o[0].style.webkitTransform;
                if (
                  (a && (o[0].style.transform = "none"),
                  l && (o[0].style.webkitTransform = "none"),
                  i.roundLengths)
                )
                  T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                else {
                  const e = n(s, "width"),
                    t = n(s, "padding-left"),
                    i = n(s, "padding-right"),
                    r = n(s, "margin-left"),
                    a = n(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) T = e + r + a;
                  else {
                    const { clientWidth: n, offsetWidth: s } = o[0];
                    T = e + t + i + r + a + (s - n);
                  }
                }
                a && (o[0].style.transform = a),
                  l && (o[0].style.webkitTransform = l),
                  i.roundLengths && (T = Math.floor(T));
              } else
                (T = (s - (i.slidesPerView - 1) * y) / i.slidesPerView),
                  i.roundLengths && (T = Math.floor(T)),
                  u[r] && (u[r].style[t("width")] = `${T}px`);
              u[r] && (u[r].swiperSlideSize = T),
                h.push(T),
                i.centeredSlides
                  ? ((x = x + T / 2 + w / 2 + y),
                    0 === w && 0 !== r && (x = x - s / 2 - y),
                    0 === r && (x = x - s / 2 - y),
                    Math.abs(x) < 0.001 && (x = 0),
                    i.roundLengths && (x = Math.floor(x)),
                    E % i.slidesPerGroup == 0 && p.push(x),
                    f.push(x))
                  : (i.roundLengths && (x = Math.floor(x)),
                    (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                      e.params.slidesPerGroup ==
                      0 && p.push(x),
                    f.push(x),
                    (x = x + T + y)),
                (e.virtualSize += T + y),
                (w = T),
                (E += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, s) + m),
            o &&
              a &&
              ("slide" === i.effect || "coverflow" === i.effect) &&
              r.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
            i.setWrapperSize &&
              r.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
            S && e.grid.updateWrapperSize(T, p, t),
            !i.centeredSlides)
          ) {
            const t = [];
            for (let n = 0; n < p.length; n += 1) {
              let r = p[n];
              i.roundLengths && (r = Math.floor(r)),
                p[n] <= e.virtualSize - s && t.push(r);
            }
            (p = t),
              Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - s);
          }
          if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
            const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            u.filter((e, t) => !i.cssMode || t !== u.length - 1).css({
              [n]: `${y}px`,
            });
          }
          if (i.centeredSlides && i.centeredSlidesBounds) {
            let e = 0;
            h.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
              (e -= i.spaceBetween);
            const t = e - s;
            p = p.map((e) => (e < 0 ? -v : e > t ? t + m : e));
          }
          if (i.centerInsufficientSlides) {
            let e = 0;
            if (
              (h.forEach((t) => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0);
              }),
              (e -= i.spaceBetween),
              e < s)
            ) {
              const t = (s - e) / 2;
              p.forEach((e, n) => {
                p[n] = e - t;
              }),
                f.forEach((e, n) => {
                  f[n] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: u,
              snapGrid: p,
              slidesGrid: f,
              slidesSizesGrid: h,
            }),
            i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
          ) {
            _t(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
              _t(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - h[h.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              n = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + n));
          }
          if (
            (d !== c && e.emit("slidesLengthChange"),
            p.length !== g &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            f.length !== b && e.emit("slidesGridLengthChange"),
            i.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
          ) {
            const t = `${i.containerModifierClass}backface-hidden`,
              n = e.$el.hasClass(t);
            d <= i.maxBackfaceHiddenSlides
              ? n || e.$el.addClass(t)
              : n && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [],
            i = t.virtual && t.params.virtual.enabled;
          let r,
            s = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            i
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              t.visibleSlides.each((e) => {
                n.push(e);
              });
            else
              for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const e = t.activeIndex + r;
                if (e > t.slides.length && !i) break;
                n.push(o(e));
              }
          else n.push(o(t.activeIndex));
          for (r = 0; r < n.length; r += 1)
            if (void 0 !== n[r]) {
              const e = n[r].offsetHeight;
              s = e > s ? e : s;
            }
          (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let n = 0; n < t.length; n += 1)
            t[n].swiperSlideOffset = e.isHorizontal()
              ? t[n].offsetLeft
              : t[n].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            n = t.params,
            { slides: i, rtlTranslate: r, snapGrid: s } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let o = -e;
          r && (o = e),
            i.removeClass(n.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < i.length; e += 1) {
            const a = i[e];
            let l = a.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
            const c =
                (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + n.spaceBetween),
              u =
                (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + n.spaceBetween),
              d = -(o - l),
              p = d + t.slidesSizesGrid[e];
            ((d >= 0 && d < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (d <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              i.eq(e).addClass(n.slideVisibleClass)),
              (a.progress = r ? -c : c),
              (a.originalProgress = r ? -u : u);
          }
          t.visibleSlides = Ct(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let { progress: r, isBeginning: s, isEnd: o } = t;
          const a = s,
            l = o;
          0 === i
            ? ((r = 0), (s = !0), (o = !0))
            : ((r = (e - t.minTranslate()) / i), (s = r <= 0), (o = r >= 1)),
            Object.assign(t, { progress: r, isBeginning: s, isEnd: o }),
            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            s && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !s) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", r);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: n,
              $wrapperEl: i,
              activeIndex: r,
              realIndex: s,
            } = e,
            o = e.virtual && n.virtual.enabled;
          let a;
          t.removeClass(
            `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${n.slideClass}[data-swiper-slide-index="${r}"]`
                )
              : t.eq(r)),
            a.addClass(n.slideActiveClass),
            n.loop &&
              (a.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass)
                : i
                    .children(
                      `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slideNextClass);
          n.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(n.slideNextClass));
          let c = a
            .prevAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slidePrevClass);
          n.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
            n.loop &&
              (l.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass)
                : i
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass),
              c.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)
                : i
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: i,
              snapGrid: r,
              params: s,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            u = e;
          if (void 0 === u) {
            for (let e = 0; e < i.length; e += 1)
              void 0 !== i[e + 1]
                ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                  ? (u = e)
                  : n >= i[e] && n < i[e + 1] && (u = e + 1)
                : n >= i[e] && (u = e);
            s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
          }
          if (r.indexOf(n) >= 0) c = r.indexOf(n);
          else {
            const e = Math.min(s.slidesPerGroupSkip, u);
            c = e + Math.floor((u - e) / s.slidesPerGroup);
          }
          if ((c >= r.length && (c = r.length - 1), u === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const d = parseInt(
            t.slides.eq(u).attr("data-swiper-slide-index") || u,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: d,
            previousIndex: o,
            activeIndex: u,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== d && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            n = t.params,
            i = Ct(e).closest(`.${n.slideClass}`)[0];
          let r,
            s = !1;
          if (i)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === i) {
                (s = !0), (r = e);
                break;
              }
          if (!i || !s)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  Ct(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = r),
            n.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      const Vt = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: n,
            translate: i,
            $wrapperEl: r,
          } = this;
          if (t.virtualTranslate) return n ? -i : i;
          if (t.cssMode) return i;
          let s = Lt(r[0], e);
          return n && (s = -s), s || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            {
              rtlTranslate: i,
              params: r,
              $wrapperEl: s,
              wrapperEl: o,
              progress: a,
            } = n;
          let l,
            c = 0,
            u = 0;
          n.isHorizontal() ? (c = i ? -e : e) : (u = e),
            r.roundLengths && ((c = Math.floor(c)), (u = Math.floor(u))),
            r.cssMode
              ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -c : -u)
              : r.virtualTranslate ||
                s.transform(`translate3d(${c}px, ${u}px, 0px)`),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? c : u);
          const d = n.maxTranslate() - n.minTranslate();
          (l = 0 === d ? 0 : (e - n.minTranslate()) / d),
            l !== a && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, i, r) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === i && (i = !0);
          const s = this,
            { params: o, wrapperEl: a } = s;
          if (s.animating && o.preventInteractionOnTransition) return !1;
          const l = s.minTranslate(),
            c = s.maxTranslate();
          let u;
          if (
            ((u = i && e > l ? l : i && e < c ? c : e),
            s.updateProgress(u),
            o.cssMode)
          ) {
            const e = s.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -u;
            else {
              if (!s.support.smoothScroll)
                return (
                  zt({
                    swiper: s,
                    targetPosition: -u,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -u, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (s.setTransition(0),
                s.setTranslate(u),
                n &&
                  (s.emit("beforeTransitionStart", t, r),
                  s.emit("transitionEnd")))
              : (s.setTransition(t),
                s.setTranslate(u),
                n &&
                  (s.emit("beforeTransitionStart", t, r),
                  s.emit("transitionStart")),
                s.animating ||
                  ((s.animating = !0),
                  s.onTranslateToWrapperTransitionEnd ||
                    (s.onTranslateToWrapperTransitionEnd = function (e) {
                      s &&
                        !s.destroyed &&
                        e.target === this &&
                        (s.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        s.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        (s.onTranslateToWrapperTransitionEnd = null),
                        delete s.onTranslateToWrapperTransitionEnd,
                        n && s.emit("transitionEnd"));
                    }),
                  s.$wrapperEl[0].addEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    s.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function Ft(e) {
        let { swiper: t, runCallbacks: n, direction: i, step: r } = e;
        const { activeIndex: s, previousIndex: o } = t;
        let a = i;
        if (
          (a || (a = s > o ? "next" : s < o ? "prev" : "reset"),
          t.emit(`transition${r}`),
          n && s !== o)
        ) {
          if ("reset" === a) return void t.emit(`slideResetTransition${r}`);
          t.emit(`slideChangeTransition${r}`),
            "next" === a
              ? t.emit(`slideNextTransition${r}`)
              : t.emit(`slidePrevTransition${r}`);
        }
      }
      const Gt = {
        slideTo: function (e, t, n, i, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const s = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: u,
            activeIndex: d,
            rtlTranslate: p,
            wrapperEl: f,
            enabled: h,
          } = s;
          if (
            (s.animating && a.preventInteractionOnTransition) ||
            (!h && !i && !r)
          )
            return !1;
          const v = Math.min(s.params.slidesPerGroupSkip, o);
          let m = v + Math.floor((o - v) / s.params.slidesPerGroup);
          m >= l.length && (m = l.length - 1),
            (d || a.initialSlide || 0) === (u || 0) &&
              n &&
              s.emit("beforeSlideChangeStart");
          const g = -l[m];
          if ((s.updateProgress(g), a.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * g),
                n = Math.floor(100 * c[e]),
                i = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= n && t < i - (i - n) / 2
                  ? (o = e)
                  : t >= n && t < i && (o = e + 1)
                : t >= n && (o = e);
            }
          if (s.initialized && o !== d) {
            if (!s.allowSlideNext && g < s.translate && g < s.minTranslate())
              return !1;
            if (
              !s.allowSlidePrev &&
              g > s.translate &&
              g > s.maxTranslate() &&
              (d || 0) !== o
            )
              return !1;
          }
          let b;
          if (
            ((b = o > d ? "next" : o < d ? "prev" : "reset"),
            (p && -g === s.translate) || (!p && g === s.translate))
          )
            return (
              s.updateActiveIndex(o),
              a.autoHeight && s.updateAutoHeight(),
              s.updateSlidesClasses(),
              "slide" !== a.effect && s.setTranslate(g),
              "reset" !== b && (s.transitionStart(n, b), s.transitionEnd(n, b)),
              !1
            );
          if (a.cssMode) {
            const e = s.isHorizontal(),
              n = p ? g : -g;
            if (0 === t) {
              const t = s.virtual && s.params.virtual.enabled;
              t &&
                ((s.wrapperEl.style.scrollSnapType = "none"),
                (s._immediateVirtual = !0)),
                (f[e ? "scrollLeft" : "scrollTop"] = n),
                t &&
                  requestAnimationFrame(() => {
                    (s.wrapperEl.style.scrollSnapType = ""),
                      (s._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!s.support.smoothScroll)
                return (
                  zt({
                    swiper: s,
                    targetPosition: n,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
            }
            return !0;
          }
          return (
            s.setTransition(t),
            s.setTranslate(g),
            s.updateActiveIndex(o),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, i),
            s.transitionStart(n, b),
            0 === t
              ? s.transitionEnd(n, b)
              : s.animating ||
                ((s.animating = !0),
                s.onSlideToWrapperTransitionEnd ||
                  (s.onSlideToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      (s.onSlideToWrapperTransitionEnd = null),
                      delete s.onSlideToWrapperTransitionEnd,
                      s.transitionEnd(n, b));
                  }),
                s.$wrapperEl[0].addEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  s.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0);
          const r = this;
          let s = e;
          return r.params.loop && (s += r.loopedSlides), r.slideTo(s, t, n, i);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            { animating: r, enabled: s, params: o } = i;
          if (!s) return i;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (r && o.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return o.rewind && i.isEnd
            ? i.slideTo(0, e, t, n)
            : i.slideTo(i.activeIndex + l, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            {
              params: r,
              animating: s,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = i;
          if (!c) return i;
          if (r.loop) {
            if (s && r.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const d = u(l ? i.translate : -i.translate),
            p = o.map((e) => u(e));
          let f = o[p.indexOf(d) - 1];
          if (void 0 === f && r.cssMode) {
            let e;
            o.forEach((t, n) => {
              d >= t && (e = n);
            }),
              void 0 !== e && (f = o[e > 0 ? e - 1 : e]);
          }
          let h = 0;
          if (
            (void 0 !== f &&
              ((h = a.indexOf(f)),
              h < 0 && (h = i.activeIndex - 1),
              "auto" === r.slidesPerView &&
                1 === r.slidesPerGroup &&
                r.slidesPerGroupAuto &&
                ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0)))),
            r.rewind && i.isBeginning)
          ) {
            const r =
              i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1;
            return i.slideTo(r, e, t, n);
          }
          return i.slideTo(h, e, t, n);
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          const r = this;
          let s = r.activeIndex;
          const o = Math.min(r.params.slidesPerGroupSkip, s),
            a = o + Math.floor((s - o) / r.params.slidesPerGroup),
            l = r.rtlTranslate ? r.translate : -r.translate;
          if (l >= r.snapGrid[a]) {
            const e = r.snapGrid[a];
            l - e > (r.snapGrid[a + 1] - e) * i &&
              (s += r.params.slidesPerGroup);
          } else {
            const e = r.snapGrid[a - 1];
            l - e <= (r.snapGrid[a] - e) * i && (s -= r.params.slidesPerGroup);
          }
          return (
            (s = Math.max(s, 0)),
            (s = Math.min(s, r.slidesGrid.length - 1)),
            r.slideTo(s, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: n } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let r,
            s = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (r = parseInt(
              Ct(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? s < e.loopedSlides - i / 2 ||
                  s > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (s = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    At(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s)
                : s > e.slides.length - i
                ? (e.loopFix(),
                  (s = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  At(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s);
          } else e.slideTo(s);
        },
      };
      const qt = {
        loopCreate: function () {
          const e = this,
            t = mt(),
            { params: n, $wrapperEl: i } = e,
            r = i.children().length > 0 ? Ct(i.children()[0].parentNode) : i;
          r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
          let s = r.children(`.${n.slideClass}`);
          if (n.loopFillGroupWithBlank) {
            const e = n.slidesPerGroup - (s.length % n.slidesPerGroup);
            if (e !== n.slidesPerGroup) {
              for (let i = 0; i < e; i += 1) {
                const e = Ct(t.createElement("div")).addClass(
                  `${n.slideClass} ${n.slideBlankClass}`
                );
                r.append(e);
              }
              s = r.children(`.${n.slideClass}`);
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = s.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > s.length && (e.loopedSlides = s.length);
          const o = [],
            a = [];
          s.each((t, n) => {
            const i = Ct(t);
            n < e.loopedSlides && a.push(t),
              n < s.length && n >= s.length - e.loopedSlides && o.push(t),
              i.attr("data-swiper-slide-index", n);
          });
          for (let e = 0; e < a.length; e += 1)
            r.append(Ct(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (let e = o.length - 1; e >= 0; e -= 1)
            r.prepend(Ct(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: n,
            loopedSlides: i,
            allowSlidePrev: r,
            allowSlideNext: s,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          if (t < i) {
            (l = n.length - 3 * i + t), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= n.length - i) {
            (l = -n.length + t + i), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = r), (e.allowSlideNext = s), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: n } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            n.removeAttr("data-swiper-slide-index");
        },
      };
      function Xt(e) {
        const t = this,
          n = mt(),
          i = bt(),
          r = t.touchEventsData,
          { params: s, touches: o, enabled: a } = t;
        if (!a) return;
        if (t.animating && s.preventInteractionOnTransition) return;
        !t.animating && s.cssMode && s.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = Ct(l.target);
        if ("wrapper" === s.touchEventsTarget && !c.closest(t.wrapperEl).length)
          return;
        if (
          ((r.isTouchEvent = "touchstart" === l.type),
          !r.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!r.isTouchEvent && "button" in l && l.button > 0) return;
        if (r.isTouched && r.isMoved) return;
        !!s.noSwipingClass &&
          "" !== s.noSwipingClass &&
          l.target &&
          l.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (c = Ct(e.path[0]));
        const u = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
          d = !(!l.target || !l.target.shadowRoot);
        if (
          s.noSwiping &&
          (d
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(n) {
                    return n && n !== mt() && n !== bt()
                      ? (n.assignedSlot && (n = n.assignedSlot),
                        n.closest(e) || t(n.getRootNode().host))
                      : null;
                  })(t)
                );
              })(u, l.target)
            : c.closest(u)[0])
        )
          return void (t.allowClick = !0);
        if (s.swipeHandler && !c.closest(s.swipeHandler)[0]) return;
        (o.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (o.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const p = o.currentX,
          f = o.currentY,
          h = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
          v = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (h && (p <= v || p >= i.innerWidth - v)) {
          if ("prevent" !== h) return;
          e.preventDefault();
        }
        if (
          (Object.assign(r, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (o.startX = p),
          (o.startY = f),
          (r.touchStartTime = kt()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          s.threshold > 0 && (r.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          c.is(r.focusableElements) &&
            ((e = !1), "SELECT" === c[0].nodeName && (r.isTouched = !1)),
            n.activeElement &&
              Ct(n.activeElement).is(r.focusableElements) &&
              n.activeElement !== c[0] &&
              n.activeElement.blur();
          const i = e && t.allowTouchMove && s.touchStartPreventDefault;
          (!s.touchStartForcePreventDefault && !i) ||
            c[0].isContentEditable ||
            l.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !s.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", l);
      }
      function Yt(e) {
        const t = mt(),
          n = this,
          i = n.touchEventsData,
          { params: r, touches: s, rtlTranslate: o, enabled: a } = n;
        if (!a) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
          return void (
            i.startMoving &&
            i.isScrolling &&
            n.emit("touchMoveOpposite", l)
          );
        if (i.isTouchEvent && "touchmove" !== l.type) return;
        const c =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          u = "touchmove" === l.type ? c.pageX : l.pageX,
          d = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (s.startX = u), void (s.startY = d);
        if (!n.allowTouchMove)
          return (
            Ct(l.target).is(i.focusableElements) || (n.allowClick = !1),
            void (
              i.isTouched &&
              (Object.assign(s, {
                startX: u,
                startY: d,
                currentX: u,
                currentY: d,
              }),
              (i.touchStartTime = kt()))
            )
          );
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
          if (n.isVertical()) {
            if (
              (d < s.startY && n.translate <= n.maxTranslate()) ||
              (d > s.startY && n.translate >= n.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (u < s.startX && n.translate <= n.maxTranslate()) ||
            (u > s.startX && n.translate >= n.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          Ct(l.target).is(i.focusableElements)
        )
          return (i.isMoved = !0), void (n.allowClick = !1);
        if (
          (i.allowTouchCallbacks && n.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (s.currentX = u), (s.currentY = d);
        const p = s.currentX - s.startX,
          f = s.currentY - s.startY;
        if (
          n.params.threshold &&
          Math.sqrt(p ** 2 + f ** 2) < n.params.threshold
        )
          return;
        if (void 0 === i.isScrolling) {
          let e;
          (n.isHorizontal() && s.currentY === s.startY) ||
          (n.isVertical() && s.currentX === s.startX)
            ? (i.isScrolling = !1)
            : p * p + f * f >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
              (i.isScrolling = n.isHorizontal()
                ? e > r.touchAngle
                : 90 - e > r.touchAngle));
        }
        if (
          (i.isScrolling && n.emit("touchMoveOpposite", l),
          void 0 === i.startMoving &&
            ((s.currentX === s.startX && s.currentY === s.startY) ||
              (i.startMoving = !0)),
          i.isScrolling)
        )
          return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (n.allowClick = !1),
          !r.cssMode && l.cancelable && l.preventDefault(),
          r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
          i.isMoved ||
            (r.loop && !r.cssMode && n.loopFix(),
            (i.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating &&
              n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (i.allowMomentumBounce = !1),
            !r.grabCursor ||
              (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
              n.setGrabCursor(!0),
            n.emit("sliderFirstMove", l)),
          n.emit("sliderMove", l),
          (i.isMoved = !0);
        let h = n.isHorizontal() ? p : f;
        (s.diff = h),
          (h *= r.touchRatio),
          o && (h = -h),
          (n.swipeDirection = h > 0 ? "prev" : "next"),
          (i.currentTranslate = h + i.startTranslate);
        let v = !0,
          m = r.resistanceRatio;
        if (
          (r.touchReleaseOnEdges && (m = 0),
          h > 0 && i.currentTranslate > n.minTranslate()
            ? ((v = !1),
              r.resistance &&
                (i.currentTranslate =
                  n.minTranslate() -
                  1 +
                  (-n.minTranslate() + i.startTranslate + h) ** m))
            : h < 0 &&
              i.currentTranslate < n.maxTranslate() &&
              ((v = !1),
              r.resistance &&
                (i.currentTranslate =
                  n.maxTranslate() +
                  1 -
                  (n.maxTranslate() - i.startTranslate - h) ** m)),
          v && (l.preventedByNestedSwiper = !0),
          !n.allowSlideNext &&
            "next" === n.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !n.allowSlidePrev &&
            "prev" === n.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          n.allowSlidePrev ||
            n.allowSlideNext ||
            (i.currentTranslate = i.startTranslate),
          r.threshold > 0)
        ) {
          if (!(Math.abs(h) > r.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (s.startX = s.currentX),
              (s.startY = s.currentY),
              (i.currentTranslate = i.startTranslate),
              void (s.diff = n.isHorizontal()
                ? s.currentX - s.startX
                : s.currentY - s.startY)
            );
        }
        r.followFinger &&
          !r.cssMode &&
          (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
            r.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
          n.params.freeMode &&
            r.freeMode.enabled &&
            n.freeMode &&
            n.freeMode.onTouchMove(),
          n.updateProgress(i.currentTranslate),
          n.setTranslate(i.currentTranslate));
      }
      function Ut(e) {
        const t = this,
          n = t.touchEventsData,
          {
            params: i,
            touches: r,
            rtlTranslate: s,
            slidesGrid: o,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          n.allowTouchCallbacks && t.emit("touchEnd", l),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        i.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = kt(),
          u = c - n.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            u < 300 &&
              c - n.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((n.lastClickTime = kt()),
          At(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            0 === r.diff ||
            n.currentTranslate === n.startTranslate)
        )
          return (
            (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
          );
        let d;
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (d = i.followFinger
            ? s
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          i.cssMode)
        )
          return;
        if (t.params.freeMode && i.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: d });
        let p = 0,
          f = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < o.length;
          e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== o[e + t]
            ? d >= o[e] && d < o[e + t] && ((p = e), (f = o[e + t] - o[e]))
            : d >= o[e] && ((p = e), (f = o[o.length - 1] - o[o.length - 2]));
        }
        let h = null,
          v = null;
        i.rewind &&
          (t.isBeginning
            ? (v =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (h = 0));
        const m = (d - o[p]) / f,
          g = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (u > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (m >= i.longSwipesRatio
              ? t.slideTo(i.rewind && t.isEnd ? h : p + g)
              : t.slideTo(p)),
            "prev" === t.swipeDirection &&
              (m > 1 - i.longSwipesRatio
                ? t.slideTo(p + g)
                : null !== v && m < 0 && Math.abs(m) > i.longSwipesRatio
                ? t.slideTo(v)
                : t.slideTo(p));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(p + g)
              : t.slideTo(p)
            : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + g),
              "prev" === t.swipeDirection && t.slideTo(null !== v ? v : p));
        }
      }
      function Kt() {
        const e = this,
          { params: t, el: n } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = r),
          (e.allowSlideNext = i),
          e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
      }
      function Zt(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function Jt() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
        if (!i) return;
        let r;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const s = e.maxTranslate() - e.minTranslate();
        (r = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
          r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let Qt = !1;
      function en() {}
      const tn = (e, t) => {
        const n = mt(),
          {
            params: i,
            touchEvents: r,
            el: s,
            wrapperEl: o,
            device: a,
            support: l,
          } = e,
          c = !!i.nested,
          u = "on" === t ? "addEventListener" : "removeEventListener",
          d = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== r.start ||
            !l.passiveListener ||
            !i.passiveListeners
          ) && { passive: !0, capture: !1 };
          s[u](r.start, e.onTouchStart, t),
            s[u](
              r.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: c } : c
            ),
            s[u](r.end, e.onTouchEnd, t),
            r.cancel && s[u](r.cancel, e.onTouchEnd, t);
        } else
          s[u](r.start, e.onTouchStart, !1),
            n[u](r.move, e.onTouchMove, c),
            n[u](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) &&
          s[u]("click", e.onClick, !0),
          i.cssMode && o[u]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[d](
                a.ios || a.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                Kt,
                !0
              )
            : e[d]("observerUpdate", Kt, !0);
      };
      const nn = {
          attachEvents: function () {
            const e = this,
              t = mt(),
              { params: n, support: i } = e;
            (e.onTouchStart = Xt.bind(e)),
              (e.onTouchMove = Yt.bind(e)),
              (e.onTouchEnd = Ut.bind(e)),
              n.cssMode && (e.onScroll = Jt.bind(e)),
              (e.onClick = Zt.bind(e)),
              i.touch &&
                !Qt &&
                (t.addEventListener("touchstart", en), (Qt = !0)),
              tn(e, "on");
          },
          detachEvents: function () {
            tn(this, "off");
          },
        },
        rn = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      const sn = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: n,
              loopedSlides: i = 0,
              params: r,
              $el: s,
            } = e,
            o = r.breakpoints;
          if (!o || (o && 0 === Object.keys(o).length)) return;
          const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in o ? o[a] : void 0) || e.originalParams,
            c = rn(e, r),
            u = rn(e, l),
            d = r.enabled;
          c && !u
            ? (s.removeClass(
                `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              u &&
              (s.addClass(`${r.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === r.grid.fill)) &&
                s.addClass(`${r.containerModifierClass}grid-column`),
              e.emitContainerClasses());
          const p = l.direction && l.direction !== r.direction,
            f = r.loop && (l.slidesPerView !== r.slidesPerView || p);
          p && n && e.changeDirection(), $t(e.params, l);
          const h = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            d && !h ? e.disable() : !d && h && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            f &&
              n &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - i + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
            return;
          let i = !1;
          const r = bt(),
            s = "window" === t ? r.innerHeight : n.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: s * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < o.length; e += 1) {
            const { point: s, value: a } = o[e];
            "window" === t
              ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = s)
              : a <= n.clientWidth && (i = s);
          }
          return i || "max";
        },
      };
      const on = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: n,
              rtl: i,
              $el: r,
              device: s,
              support: o,
            } = e,
            a = (function (e, t) {
              const n = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && n.push(t + i);
                      })
                    : "string" == typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: i },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: s.android },
                { ios: s.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
              ],
              n.containerModifierClass
            );
          t.push(...a), r.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      const an = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function ln(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          const i = Object.keys(n)[0],
            r = n[i];
          "object" == typeof r && null !== r
            ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                !0 === e[i] &&
                (e[i] = { auto: !0 }),
              i in e && "enabled" in r
                ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                  "object" != typeof e[i] ||
                    "enabled" in e[i] ||
                    (e[i].enabled = !0),
                  e[i] || (e[i] = { enabled: !1 }),
                  $t(t, n))
                : $t(t, n))
            : $t(t, n);
        };
      }
      const cn = {
          eventsEmitter: Wt,
          update: Ht,
          translate: Vt,
          transition: {
            setTransition: function (e, t) {
              const n = this;
              n.params.cssMode || n.$wrapperEl.transition(e),
                n.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const n = this,
                { params: i } = n;
              i.cssMode ||
                (i.autoHeight && n.updateAutoHeight(),
                Ft({
                  swiper: n,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const n = this,
                { params: i } = n;
              (n.animating = !1),
                i.cssMode ||
                  (n.setTransition(0),
                  Ft({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: Gt,
          loop: qt,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const n =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (n.style.cursor = "move"),
                (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (n.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: nn,
          breakpoints: sn,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: n } = e,
                { slidesOffsetBefore: i } = n;
              if (i) {
                const t = e.slides.length - 1,
                  n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > n;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: on,
          images: {
            loadImage: function (e, t, n, i, r, s) {
              const o = bt();
              let a;
              function l() {
                s && s();
              }
              Ct(e).parent("picture")[0] || (e.complete && r)
                ? l()
                : t
                ? ((a = new o.Image()),
                  (a.onload = l),
                  (a.onerror = l),
                  i && (a.sizes = i),
                  n && (a.srcset = n),
                  t && (a.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                const i = e.imagesToLoad[n];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        un = {};
      class dn {
        constructor() {
          let e, t;
          for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
            i[r] = arguments[r];
          if (
            (1 === i.length &&
            i[0].constructor &&
            "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
              ? (t = i[0])
              : ([e, t] = i),
            t || (t = {}),
            (t = $t({}, t)),
            e && !t.el && (t.el = e),
            t.el && Ct(t.el).length > 1)
          ) {
            const e = [];
            return (
              Ct(t.el).each((n) => {
                const i = $t({}, t, { el: n });
                e.push(new dn(i));
              }),
              e
            );
          }
          const s = this;
          (s.__swiper__ = !0),
            (s.support = Nt()),
            (s.device = Rt({ userAgent: t.userAgent })),
            (s.browser = Bt()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = [...s.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              s.modules.push(...t.modules);
          const o = {};
          s.modules.forEach((e) => {
            e({
              swiper: s,
              extendParams: ln(t, o),
              on: s.on.bind(s),
              once: s.once.bind(s),
              off: s.off.bind(s),
              emit: s.emit.bind(s),
            });
          });
          const a = $t({}, an, o);
          return (
            (s.params = $t({}, a, un, t)),
            (s.originalParams = $t({}, s.params)),
            (s.passedParams = $t({}, t)),
            s.params &&
              s.params.on &&
              Object.keys(s.params.on).forEach((e) => {
                s.on(e, s.params.on[e]);
              }),
            s.params && s.params.onAny && s.onAny(s.params.onAny),
            (s.$ = Ct),
            Object.assign(s, {
              enabled: s.params.enabled,
              el: e,
              classNames: [],
              slides: Ct(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === s.params.direction,
              isVertical: () => "vertical" === s.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: s.params.allowSlideNext,
              allowSlidePrev: s.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (s.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (s.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  s.support.touch || !s.params.simulateTouch
                    ? s.touchEventsTouch
                    : s.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: s.params.focusableElements,
                lastClickTime: kt(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: s.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            s.emit("_swiper"),
            s.params.init && s.init(),
            s
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = n.minTranslate(),
            r = (n.maxTranslate() - i) * e + i;
          n.translateTo(r, void 0 === t ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((n) => {
            const i = e.getSlideClasses(n);
            t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: n,
            slides: i,
            slidesGrid: r,
            slidesSizesGrid: s,
            size: o,
            activeIndex: a,
          } = this;
          let l = 1;
          if (n.centeredSlides) {
            let e,
              t = i[a].swiperSlideSize;
            for (let n = a + 1; n < i.length; n += 1)
              i[n] &&
                !e &&
                ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
            for (let n = a - 1; n >= 0; n -= 1)
              i[n] &&
                !e &&
                ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < i.length; e += 1) {
              (t ? r[e] + s[e] - r[a] < o : r[e] - r[a] < o) && (l += 1);
            }
          else
            for (let e = a - 1; e >= 0; e -= 1) {
              r[a] - r[e] < o && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: n } = e;
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let r;
          n.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (i(), e.params.autoHeight && e.updateAutoHeight())
              : ((r =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                r || i()),
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const n = this,
            i = n.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (n.$el
                .removeClass(`${n.params.containerModifierClass}${i}`)
                .addClass(`${n.params.containerModifierClass}${e}`),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              n.emit("changeDirection"),
              t && n.update()),
            n
          );
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const n = Ct(e || t.params.el);
          if (!(e = n[0])) return !1;
          e.swiper = t;
          const i = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let r = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = Ct(e.shadowRoot.querySelector(i()));
              return (t.children = (e) => n.children(e)), t;
            }
            return n.children(i());
          })();
          if (0 === r.length && t.params.createElements) {
            const e = mt().createElement("div");
            (r = Ct(e)),
              (e.className = t.params.wrapperClass),
              n.append(e),
              n.children(`.${t.params.slideClass}`).each((e) => {
                r.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: n,
              el: e,
              $wrapperEl: r,
              wrapperEl: r[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
              wrongRTL: "-webkit-box" === r.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const n = this,
            { params: i, $el: r, $wrapperEl: s, slides: o } = n;
          return (
            void 0 === n.params ||
              n.destroyed ||
              (n.emit("beforeDestroy"),
              (n.initialized = !1),
              n.detachEvents(),
              i.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                r.removeAttr("style"),
                s.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              n.emit("destroy"),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e);
              }),
              !1 !== e &&
                ((n.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(n)),
              (n.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          $t(un, e);
        }
        static get extendedDefaults() {
          return un;
        }
        static get defaults() {
          return an;
        }
        static installModule(e) {
          dn.prototype.__modules__ || (dn.prototype.__modules__ = []);
          const t = dn.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => dn.installModule(e)), dn)
            : (dn.installModule(e), dn);
        }
      }
      Object.keys(cn).forEach((e) => {
        Object.keys(cn[e]).forEach((t) => {
          dn.prototype[t] = cn[e][t];
        });
      }),
        dn.use([
          function (e) {
            let { swiper: t, on: n, emit: i } = e;
            const r = bt();
            let s = null,
              o = null;
            const a = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              l = () => {
                t && !t.destroyed && t.initialized && i("orientationchange");
              };
            n("init", () => {
              t.params.resizeObserver && void 0 !== r.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((s = new ResizeObserver((e) => {
                    o = r.requestAnimationFrame(() => {
                      const { width: n, height: i } = t;
                      let r = n,
                        s = i;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: n,
                          contentRect: i,
                          target: o,
                        } = e;
                        (o && o !== t.el) ||
                          ((r = i ? i.width : (n[0] || n).inlineSize),
                          (s = i ? i.height : (n[0] || n).blockSize));
                      }),
                        (r === n && s === i) || a();
                    });
                  })),
                  s.observe(t.el))
                : (r.addEventListener("resize", a),
                  r.addEventListener("orientationchange", l));
            }),
              n("destroy", () => {
                o && r.cancelAnimationFrame(o),
                  s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)),
                  r.removeEventListener("resize", a),
                  r.removeEventListener("orientationchange", l);
              });
          },
          function (e) {
            let { swiper: t, extendParams: n, on: i, emit: r } = e;
            const s = [],
              o = bt(),
              a = function (e, t) {
                void 0 === t && (t = {});
                const n = new (o.MutationObserver || o.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void r("observerUpdate", e[0]);
                    const t = function () {
                      r("observerUpdate", e[0]);
                    };
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0);
                  }
                );
                n.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  s.push(n);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) a(e[t]);
                  }
                  a(t.$el[0], { childList: t.params.observeSlideChildren }),
                    a(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              i("destroy", () => {
                s.forEach((e) => {
                  e.disconnect();
                }),
                  s.splice(0, s.length);
              });
          },
        ]);
      const pn = dn;
      function fn(e, t, n, i) {
        const r = mt();
        return (
          e.params.createElements &&
            Object.keys(i).forEach((s) => {
              if (!n[s] && !0 === n.auto) {
                let o = e.$el.children(`.${i[s]}`)[0];
                o ||
                  ((o = r.createElement("div")),
                  (o.className = i[s]),
                  e.$el.append(o)),
                  (n[s] = o),
                  (t[s] = o);
              }
            }),
          n
        );
      }
      function hn(e) {
        let { swiper: t, extendParams: n, on: i, emit: r } = e;
        function s(e) {
          let n;
          return (
            e &&
              ((n = Ct(e)),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                n.length > 1 &&
                1 === t.$el.find(e).length &&
                (n = t.$el.find(e))),
            n
          );
        }
        function o(e, n) {
          const i = t.params.navigation;
          e &&
            e.length > 0 &&
            (e[n ? "addClass" : "removeClass"](i.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
            t.params.watchOverflow &&
              t.enabled &&
              e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
        }
        function a() {
          if (t.params.loop) return;
          const { $nextEl: e, $prevEl: n } = t.navigation;
          o(n, t.isBeginning && !t.params.rewind),
            o(e, t.isEnd && !t.params.rewind);
        }
        function l(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              t.slidePrev();
        }
        function c(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
        }
        function u() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = fn(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          const n = s(e.nextEl),
            i = s(e.prevEl);
          n && n.length > 0 && n.on("click", c),
            i && i.length > 0 && i.on("click", l),
            Object.assign(t.navigation, {
              $nextEl: n,
              nextEl: n && n[0],
              $prevEl: i,
              prevEl: i && i[0],
            }),
            t.enabled ||
              (n && n.addClass(e.lockClass), i && i.addClass(e.lockClass));
        }
        function d() {
          const { $nextEl: e, $prevEl: n } = t.navigation;
          e &&
            e.length &&
            (e.off("click", c),
            e.removeClass(t.params.navigation.disabledClass)),
            n &&
              n.length &&
              (n.off("click", l),
              n.removeClass(t.params.navigation.disabledClass));
        }
        n({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        }),
          (t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          i("init", () => {
            u(), a();
          }),
          i("toEdge fromEdge lock unlock", () => {
            a();
          }),
          i("destroy", () => {
            d();
          }),
          i("enable disable", () => {
            const { $nextEl: e, $prevEl: n } = t.navigation;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              ),
              n &&
                n[t.enabled ? "removeClass" : "addClass"](
                  t.params.navigation.lockClass
                );
          }),
          i("click", (e, n) => {
            const { $nextEl: i, $prevEl: s } = t.navigation,
              o = n.target;
            if (
              t.params.navigation.hideOnClick &&
              !Ct(o).is(s) &&
              !Ct(o).is(i)
            ) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === o || t.pagination.el.contains(o))
              )
                return;
              let e;
              i
                ? (e = i.hasClass(t.params.navigation.hiddenClass))
                : s && (e = s.hasClass(t.params.navigation.hiddenClass)),
                r(!0 === e ? "navigationShow" : "navigationHide"),
                i && i.toggleClass(t.params.navigation.hiddenClass),
                s && s.toggleClass(t.params.navigation.hiddenClass);
            }
          }),
          Object.assign(t.navigation, { update: a, init: u, destroy: d });
      }
      function vn(e) {
        return (
          void 0 === e && (e = ""),
          `.${e
            .trim()
            .replace(/([\.:!\/])/g, "\\$1")
            .replace(/ /g, ".")}`
        );
      }
      function mn(e) {
        let { swiper: t, extendParams: n, on: i, emit: r } = e;
        const s = "swiper-pagination";
        let o;
        n({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${s}-bullet`,
            bulletActiveClass: `${s}-bullet-active`,
            modifierClass: `${s}-`,
            currentClass: `${s}-current`,
            totalClass: `${s}-total`,
            hiddenClass: `${s}-hidden`,
            progressbarFillClass: `${s}-progressbar-fill`,
            progressbarOppositeClass: `${s}-progressbar-opposite`,
            clickableClass: `${s}-clickable`,
            lockClass: `${s}-lock`,
            horizontalClass: `${s}-horizontal`,
            verticalClass: `${s}-vertical`,
          },
        }),
          (t.pagination = { el: null, $el: null, bullets: [] });
        let a = 0;
        function l() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            !t.pagination.$el ||
            0 === t.pagination.$el.length
          );
        }
        function c(e, n) {
          const { bulletActiveClass: i } = t.params.pagination;
          e[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`);
        }
        function u() {
          const e = t.rtl,
            n = t.params.pagination;
          if (l()) return;
          const i =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            s = t.pagination.$el;
          let u;
          const d = t.params.loop
            ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((u = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )),
                u > i - 1 - 2 * t.loopedSlides && (u -= i - 2 * t.loopedSlides),
                u > d - 1 && (u -= d),
                u < 0 && "bullets" !== t.params.paginationType && (u = d + u))
              : (u = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            "bullets" === n.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const i = t.pagination.bullets;
            let r, l, d;
            if (
              (n.dynamicBullets &&
                ((o = i
                  .eq(0)
                  [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                s.css(
                  t.isHorizontal() ? "width" : "height",
                  o * (n.dynamicMainBullets + 4) + "px"
                ),
                n.dynamicMainBullets > 1 &&
                  void 0 !== t.previousIndex &&
                  ((a += u - (t.previousIndex - t.loopedSlides || 0)),
                  a > n.dynamicMainBullets - 1
                    ? (a = n.dynamicMainBullets - 1)
                    : a < 0 && (a = 0)),
                (r = Math.max(u - a, 0)),
                (l = r + (Math.min(i.length, n.dynamicMainBullets) - 1)),
                (d = (l + r) / 2)),
              i.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${n.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              s.length > 1)
            )
              i.each((e) => {
                const t = Ct(e),
                  i = t.index();
                i === u && t.addClass(n.bulletActiveClass),
                  n.dynamicBullets &&
                    (i >= r &&
                      i <= l &&
                      t.addClass(`${n.bulletActiveClass}-main`),
                    i === r && c(t, "prev"),
                    i === l && c(t, "next"));
              });
            else {
              const e = i.eq(u),
                s = e.index();
              if ((e.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                const e = i.eq(r),
                  o = i.eq(l);
                for (let e = r; e <= l; e += 1)
                  i.eq(e).addClass(`${n.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (s >= i.length) {
                    for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                      i.eq(i.length - e).addClass(
                        `${n.bulletActiveClass}-main`
                      );
                    i.eq(i.length - n.dynamicMainBullets - 1).addClass(
                      `${n.bulletActiveClass}-prev`
                    );
                  } else c(e, "prev"), c(o, "next");
                else c(e, "prev"), c(o, "next");
              }
            }
            if (n.dynamicBullets) {
              const r = Math.min(i.length, n.dynamicMainBullets + 4),
                s = (o * r - o) / 2 - d * o,
                a = e ? "right" : "left";
              i.css(t.isHorizontal() ? a : "top", `${s}px`);
            }
          }
          if (
            ("fraction" === n.type &&
              (s.find(vn(n.currentClass)).text(n.formatFractionCurrent(u + 1)),
              s.find(vn(n.totalClass)).text(n.formatFractionTotal(d))),
            "progressbar" === n.type)
          ) {
            let e;
            e = n.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const i = (u + 1) / d;
            let r = 1,
              o = 1;
            "horizontal" === e ? (r = i) : (o = i),
              s
                .find(vn(n.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${o})`)
                .transition(t.params.speed);
          }
          "custom" === n.type && n.renderCustom
            ? (s.html(n.renderCustom(t, u + 1, d)), r("paginationRender", s[0]))
            : r("paginationUpdate", s[0]),
            t.params.watchOverflow &&
              t.enabled &&
              s[t.isLocked ? "addClass" : "removeClass"](n.lockClass);
        }
        function d() {
          const e = t.params.pagination;
          if (l()) return;
          const n =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            i = t.pagination.$el;
          let s = "";
          if ("bullets" === e.type) {
            let r = t.params.loop
              ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.loop &&
              r > n &&
              (r = n);
            for (let n = 0; n < r; n += 1)
              e.renderBullet
                ? (s += e.renderBullet.call(t, n, e.bulletClass))
                : (s += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
            i.html(s), (t.pagination.bullets = i.find(vn(e.bulletClass)));
          }
          "fraction" === e.type &&
            ((s = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            i.html(s)),
            "progressbar" === e.type &&
              ((s = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
              i.html(s)),
            "custom" !== e.type && r("paginationRender", t.pagination.$el[0]);
        }
        function p() {
          t.params.pagination = fn(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: "swiper-pagination" }
          );
          const e = t.params.pagination;
          if (!e.el) return;
          let n = Ct(e.el);
          0 !== n.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              n.length > 1 &&
              ((n = t.$el.find(e.el)),
              n.length > 1 &&
                (n = n.filter((e) => Ct(e).parents(".swiper")[0] === t.el))),
            "bullets" === e.type && e.clickable && n.addClass(e.clickableClass),
            n.addClass(e.modifierClass + e.type),
            n.addClass(e.modifierClass + t.params.direction),
            "bullets" === e.type &&
              e.dynamicBullets &&
              (n.addClass(`${e.modifierClass}${e.type}-dynamic`),
              (a = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type &&
              e.progressbarOpposite &&
              n.addClass(e.progressbarOppositeClass),
            e.clickable &&
              n.on("click", vn(e.bulletClass), function (e) {
                e.preventDefault();
                let n = Ct(this).index() * t.params.slidesPerGroup;
                t.params.loop && (n += t.loopedSlides), t.slideTo(n);
              }),
            Object.assign(t.pagination, { $el: n, el: n[0] }),
            t.enabled || n.addClass(e.lockClass));
        }
        function f() {
          const e = t.params.pagination;
          if (l()) return;
          const n = t.pagination.$el;
          n.removeClass(e.hiddenClass),
            n.removeClass(e.modifierClass + e.type),
            n.removeClass(e.modifierClass + t.params.direction),
            t.pagination.bullets &&
              t.pagination.bullets.removeClass &&
              t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && n.off("click", vn(e.bulletClass));
        }
        i("init", () => {
          p(), d(), u();
        }),
          i("activeIndexChange", () => {
            (t.params.loop || void 0 === t.snapIndex) && u();
          }),
          i("snapIndexChange", () => {
            t.params.loop || u();
          }),
          i("slidesLengthChange", () => {
            t.params.loop && (d(), u());
          }),
          i("snapGridLengthChange", () => {
            t.params.loop || (d(), u());
          }),
          i("destroy", () => {
            f();
          }),
          i("enable disable", () => {
            const { $el: e } = t.pagination;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.pagination.lockClass
              );
          }),
          i("lock unlock", () => {
            u();
          }),
          i("click", (e, n) => {
            const i = n.target,
              { $el: s } = t.pagination;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              s.length > 0 &&
              !Ct(i).hasClass(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                  (t.navigation.prevEl && i === t.navigation.prevEl))
              )
                return;
              const e = s.hasClass(t.params.pagination.hiddenClass);
              r(!0 === e ? "paginationShow" : "paginationHide"),
                s.toggleClass(t.params.pagination.hiddenClass);
            }
          }),
          Object.assign(t.pagination, {
            render: d,
            update: u,
            init: p,
            destroy: f,
          });
      }
      function gn(e) {
        let { swiper: t, extendParams: n, on: i, emit: r } = e;
        n({
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        }),
          (t.lazy = {});
        let s = !1,
          o = !1;
        function a(e, n) {
          void 0 === n && (n = !0);
          const i = t.params.lazy;
          if (void 0 === e) return;
          if (0 === t.slides.length) return;
          const s =
              t.virtual && t.params.virtual.enabled
                ? t.$wrapperEl.children(
                    `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                : t.slides.eq(e),
            o = s.find(
              `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
            );
          !s.hasClass(i.elementClass) ||
            s.hasClass(i.loadedClass) ||
            s.hasClass(i.loadingClass) ||
            o.push(s[0]),
            0 !== o.length &&
              o.each((e) => {
                const o = Ct(e);
                o.addClass(i.loadingClass);
                const l = o.attr("data-background"),
                  c = o.attr("data-src"),
                  u = o.attr("data-srcset"),
                  d = o.attr("data-sizes"),
                  p = o.parent("picture");
                t.loadImage(o[0], c || l, u, d, !1, () => {
                  if (null != t && t && (!t || t.params) && !t.destroyed) {
                    if (
                      (l
                        ? (o.css("background-image", `url("${l}")`),
                          o.removeAttr("data-background"))
                        : (u &&
                            (o.attr("srcset", u), o.removeAttr("data-srcset")),
                          d && (o.attr("sizes", d), o.removeAttr("data-sizes")),
                          p.length &&
                            p.children("source").each((e) => {
                              const t = Ct(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          c && (o.attr("src", c), o.removeAttr("data-src"))),
                      o.addClass(i.loadedClass).removeClass(i.loadingClass),
                      s.find(`.${i.preloaderClass}`).remove(),
                      t.params.loop && n)
                    ) {
                      const e = s.attr("data-swiper-slide-index");
                      if (s.hasClass(t.params.slideDuplicateClass)) {
                        a(
                          t.$wrapperEl
                            .children(
                              `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                            )
                            .index(),
                          !1
                        );
                      } else {
                        a(
                          t.$wrapperEl
                            .children(
                              `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                            )
                            .index(),
                          !1
                        );
                      }
                    }
                    r("lazyImageReady", s[0], o[0]),
                      t.params.autoHeight && t.updateAutoHeight();
                  }
                }),
                  r("lazyImageLoad", s[0], o[0]);
              });
        }
        function l() {
          const { $wrapperEl: e, params: n, slides: i, activeIndex: r } = t,
            s = t.virtual && n.virtual.enabled,
            l = n.lazy;
          let c = n.slidesPerView;
          function u(t) {
            if (s) {
              if (
                e.children(`.${n.slideClass}[data-swiper-slide-index="${t}"]`)
                  .length
              )
                return !0;
            } else if (i[t]) return !0;
            return !1;
          }
          function d(e) {
            return s ? Ct(e).attr("data-swiper-slide-index") : Ct(e).index();
          }
          if (
            ("auto" === c && (c = 0),
            o || (o = !0),
            t.params.watchSlidesProgress)
          )
            e.children(`.${n.slideVisibleClass}`).each((e) => {
              a(s ? Ct(e).attr("data-swiper-slide-index") : Ct(e).index());
            });
          else if (c > 1) for (let e = r; e < r + c; e += 1) u(e) && a(e);
          else a(r);
          if (l.loadPrevNext)
            if (c > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
              const e = l.loadPrevNextAmount,
                t = c,
                n = Math.min(r + t + Math.max(e, t), i.length),
                s = Math.max(r - Math.max(t, e), 0);
              for (let e = r + c; e < n; e += 1) u(e) && a(e);
              for (let e = s; e < r; e += 1) u(e) && a(e);
            } else {
              const t = e.children(`.${n.slideNextClass}`);
              t.length > 0 && a(d(t));
              const i = e.children(`.${n.slidePrevClass}`);
              i.length > 0 && a(d(i));
            }
        }
        function c() {
          const e = bt();
          if (!t || t.destroyed) return;
          const n = t.params.lazy.scrollingElement
              ? Ct(t.params.lazy.scrollingElement)
              : Ct(e),
            i = n[0] === e,
            r = i ? e.innerWidth : n[0].offsetWidth,
            o = i ? e.innerHeight : n[0].offsetHeight,
            a = t.$el.offset(),
            { rtlTranslate: u } = t;
          let d = !1;
          u && (a.left -= t.$el[0].scrollLeft);
          const p = [
            [a.left, a.top],
            [a.left + t.width, a.top],
            [a.left, a.top + t.height],
            [a.left + t.width, a.top + t.height],
          ];
          for (let e = 0; e < p.length; e += 1) {
            const t = p[e];
            if (t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= o) {
              if (0 === t[0] && 0 === t[1]) continue;
              d = !0;
            }
          }
          const f = !(
            "touchstart" !== t.touchEvents.start ||
            !t.support.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          d
            ? (l(), n.off("scroll", c, f))
            : s || ((s = !0), n.on("scroll", c, f));
        }
        i("beforeInit", () => {
          t.params.lazy.enabled &&
            t.params.preloadImages &&
            (t.params.preloadImages = !1);
        }),
          i("init", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
          }),
          i("scroll", () => {
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.freeMode.sticky &&
              l();
          }),
          i("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
          }),
          i("transitionStart", () => {
            t.params.lazy.enabled &&
              (t.params.lazy.loadOnTransitionStart ||
                (!t.params.lazy.loadOnTransitionStart && !o)) &&
              (t.params.lazy.checkInView ? c() : l());
          }),
          i("transitionEnd", () => {
            t.params.lazy.enabled &&
              !t.params.lazy.loadOnTransitionStart &&
              (t.params.lazy.checkInView ? c() : l());
          }),
          i("slideChange", () => {
            const {
              lazy: e,
              cssMode: n,
              watchSlidesProgress: i,
              touchReleaseOnEdges: r,
              resistanceRatio: s,
            } = t.params;
            e.enabled && (n || (i && (r || 0 === s))) && l();
          }),
          Object.assign(t.lazy, { load: l, loadInSlide: a });
      }
      function bn(e) {
        let t,
          { swiper: n, extendParams: i, on: r, emit: s } = e;
        function o() {
          const e = n.slides.eq(n.activeIndex);
          let i = n.params.autoplay.delay;
          e.attr("data-swiper-autoplay") &&
            (i = e.attr("data-swiper-autoplay") || n.params.autoplay.delay),
            clearTimeout(t),
            (t = At(() => {
              let e;
              n.params.autoplay.reverseDirection
                ? n.params.loop
                  ? (n.loopFix(),
                    (e = n.slidePrev(n.params.speed, !0, !0)),
                    s("autoplay"))
                  : n.isBeginning
                  ? n.params.autoplay.stopOnLastSlide
                    ? l()
                    : ((e = n.slideTo(
                        n.slides.length - 1,
                        n.params.speed,
                        !0,
                        !0
                      )),
                      s("autoplay"))
                  : ((e = n.slidePrev(n.params.speed, !0, !0)), s("autoplay"))
                : n.params.loop
                ? (n.loopFix(),
                  (e = n.slideNext(n.params.speed, !0, !0)),
                  s("autoplay"))
                : n.isEnd
                ? n.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((e = n.slideTo(0, n.params.speed, !0, !0)), s("autoplay"))
                : ((e = n.slideNext(n.params.speed, !0, !0)), s("autoplay")),
                ((n.params.cssMode && n.autoplay.running) || !1 === e) && o();
            }, i));
        }
        function a() {
          return (
            void 0 === t &&
            !n.autoplay.running &&
            ((n.autoplay.running = !0), s("autoplayStart"), o(), !0)
          );
        }
        function l() {
          return (
            !!n.autoplay.running &&
            void 0 !== t &&
            (t && (clearTimeout(t), (t = void 0)),
            (n.autoplay.running = !1),
            s("autoplayStop"),
            !0)
          );
        }
        function c(e) {
          n.autoplay.running &&
            (n.autoplay.paused ||
              (t && clearTimeout(t),
              (n.autoplay.paused = !0),
              0 !== e && n.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                    n.$wrapperEl[0].addEventListener(e, d);
                  })
                : ((n.autoplay.paused = !1), o())));
        }
        function u() {
          const e = mt();
          "hidden" === e.visibilityState && n.autoplay.running && c(),
            "visible" === e.visibilityState &&
              n.autoplay.paused &&
              (o(), (n.autoplay.paused = !1));
        }
        function d(e) {
          n &&
            !n.destroyed &&
            n.$wrapperEl &&
            e.target === n.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((e) => {
              n.$wrapperEl[0].removeEventListener(e, d);
            }),
            (n.autoplay.paused = !1),
            n.autoplay.running ? o() : l());
        }
        function p() {
          n.params.autoplay.disableOnInteraction
            ? l()
            : (s("autoplayPause"), c()),
            ["transitionend", "webkitTransitionEnd"].forEach((e) => {
              n.$wrapperEl[0].removeEventListener(e, d);
            });
        }
        function f() {
          n.params.autoplay.disableOnInteraction ||
            ((n.autoplay.paused = !1), s("autoplayResume"), o());
        }
        (n.autoplay = { running: !1, paused: !1 }),
          i({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          r("init", () => {
            if (n.params.autoplay.enabled) {
              a();
              mt().addEventListener("visibilitychange", u),
                n.params.autoplay.pauseOnMouseEnter &&
                  (n.$el.on("mouseenter", p), n.$el.on("mouseleave", f));
            }
          }),
          r("beforeTransitionStart", (e, t, i) => {
            n.autoplay.running &&
              (i || !n.params.autoplay.disableOnInteraction
                ? n.autoplay.pause(t)
                : l());
          }),
          r("sliderFirstMove", () => {
            n.autoplay.running &&
              (n.params.autoplay.disableOnInteraction ? l() : c());
          }),
          r("touchEnd", () => {
            n.params.cssMode &&
              n.autoplay.paused &&
              !n.params.autoplay.disableOnInteraction &&
              o();
          }),
          r("destroy", () => {
            n.$el.off("mouseenter", p),
              n.$el.off("mouseleave", f),
              n.autoplay.running && l();
            mt().removeEventListener("visibilitychange", u);
          }),
          Object.assign(n.autoplay, { pause: c, run: o, start: a, stop: l });
      }
      function yn() {
        let e = document.querySelectorAll(
          '[class*="__swiper"]:not(.swiper-wrapper)'
        );
        e &&
          e.forEach((e) => {
            e.parentElement.classList.add("swiper"),
              e.classList.add("swiper-wrapper");
            for (const t of e.children) t.classList.add("swiper-slide");
          });
      }
      window.addEventListener("load", function (e) {
        yn(),
          document.querySelector(".slider-about-body__slider") &&
            new pn(".slider-about-body__slider", {
              modules: [hn, gn, mn, bn],
              autoplay: { delay: 4e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              slidesPerView: 2,
              spaceBetween: 34,
              speed: 800,
              loop: !0,
              lazy: !0,
              pagination: {
                el: ".slider-about-body__controll",
                type: "fraction",
              },
              navigation: {
                nextEl: ".slider-about-body__item_next",
                prevEl: ".slider-about-body__item_prev",
              },
              breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
                768: { slidesPerView: 2, spaceBetween: 20 },
              },
              on: {},
            });
      });
      n(9399), n(3542);
      var xn,
        wn = n(1807),
        En = n.n(wn),
        Sn =
          (n(8165),
          n(7543),
          n(7692),
          n(2352),
          n(4249),
          n(3344),
          n(7323),
          n(4079),
          n(3096)),
        Tn = n.n(Sn),
        On = n(1296),
        Cn = n.n(On),
        An = n(773),
        kn = n.n(An),
        Ln = [],
        Mn = "ResizeObserver loop completed with undelivered notifications.";
      !(function (e) {
        (e.BORDER_BOX = "border-box"),
          (e.CONTENT_BOX = "content-box"),
          (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
      })(xn || (xn = {}));
      var Pn,
        $n = function (e) {
          return Object.freeze(e);
        },
        _n = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), $n(this);
        },
        zn = (function () {
          function e(e, t, n, i) {
            return (
              (this.x = e),
              (this.y = t),
              (this.width = n),
              (this.height = i),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              $n(this)
            );
          }
          return (
            (e.prototype.toJSON = function () {
              var e = this;
              return {
                x: e.x,
                y: e.y,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width,
                height: e.height,
              };
            }),
            (e.fromRect = function (t) {
              return new e(t.x, t.y, t.width, t.height);
            }),
            e
          );
        })(),
        In = function (e) {
          return e instanceof SVGElement && "getBBox" in e;
        },
        jn = function (e) {
          if (In(e)) {
            var t = e.getBBox(),
              n = t.width,
              i = t.height;
            return !n && !i;
          }
          var r = e,
            s = r.offsetWidth,
            o = r.offsetHeight;
          return !(s || o || e.getClientRects().length);
        },
        Dn = function (e) {
          var t, n;
          if (e instanceof Element) return !0;
          var i =
            null ===
              (n =
                null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) ||
            void 0 === n
              ? void 0
              : n.defaultView;
          return !!(i && e instanceof i.Element);
        },
        Nn = "undefined" != typeof window ? window : {},
        Rn = new WeakMap(),
        Bn = /auto|scroll/,
        Wn = /^tb|vertical/,
        Hn = /msie|trident/i.test(Nn.navigator && Nn.navigator.userAgent),
        Vn = function (e) {
          return parseFloat(e || "0");
        },
        Fn = function (e, t, n) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            new _n((n ? t : e) || 0, (n ? e : t) || 0)
          );
        },
        Gn = $n({
          devicePixelContentBoxSize: Fn(),
          borderBoxSize: Fn(),
          contentBoxSize: Fn(),
          contentRect: new zn(0, 0, 0, 0),
        }),
        qn = function (e, t) {
          if ((void 0 === t && (t = !1), Rn.has(e) && !t)) return Rn.get(e);
          if (jn(e)) return Rn.set(e, Gn), Gn;
          var n = getComputedStyle(e),
            i = In(e) && e.ownerSVGElement && e.getBBox(),
            r = !Hn && "border-box" === n.boxSizing,
            s = Wn.test(n.writingMode || ""),
            o = !i && Bn.test(n.overflowY || ""),
            a = !i && Bn.test(n.overflowX || ""),
            l = i ? 0 : Vn(n.paddingTop),
            c = i ? 0 : Vn(n.paddingRight),
            u = i ? 0 : Vn(n.paddingBottom),
            d = i ? 0 : Vn(n.paddingLeft),
            p = i ? 0 : Vn(n.borderTopWidth),
            f = i ? 0 : Vn(n.borderRightWidth),
            h = i ? 0 : Vn(n.borderBottomWidth),
            v = d + c,
            m = l + u,
            g = (i ? 0 : Vn(n.borderLeftWidth)) + f,
            b = p + h,
            y = a ? e.offsetHeight - b - e.clientHeight : 0,
            x = o ? e.offsetWidth - g - e.clientWidth : 0,
            w = r ? v + g : 0,
            E = r ? m + b : 0,
            S = i ? i.width : Vn(n.width) - w - x,
            T = i ? i.height : Vn(n.height) - E - y,
            O = S + v + x + g,
            C = T + m + y + b,
            A = $n({
              devicePixelContentBoxSize: Fn(
                Math.round(S * devicePixelRatio),
                Math.round(T * devicePixelRatio),
                s
              ),
              borderBoxSize: Fn(O, C, s),
              contentBoxSize: Fn(S, T, s),
              contentRect: new zn(d, l, S, T),
            });
          return Rn.set(e, A), A;
        },
        Xn = function (e, t, n) {
          var i = qn(e, n),
            r = i.borderBoxSize,
            s = i.contentBoxSize,
            o = i.devicePixelContentBoxSize;
          switch (t) {
            case xn.DEVICE_PIXEL_CONTENT_BOX:
              return o;
            case xn.BORDER_BOX:
              return r;
            default:
              return s;
          }
        },
        Yn = function (e) {
          var t = qn(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = $n([t.borderBoxSize])),
            (this.contentBoxSize = $n([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = $n([
              t.devicePixelContentBoxSize,
            ]));
        },
        Un = function (e) {
          if (jn(e)) return 1 / 0;
          for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
          return t;
        },
        Kn = function () {
          var e = 1 / 0,
            t = [];
          Ln.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
              var i = [];
              n.activeTargets.forEach(function (t) {
                var n = new Yn(t.target),
                  r = Un(t.target);
                i.push(n),
                  (t.lastReportedSize = Xn(t.target, t.observedBox)),
                  r < e && (e = r);
              }),
                t.push(function () {
                  n.callback.call(n.observer, i, n.observer);
                }),
                n.activeTargets.splice(0, n.activeTargets.length);
            }
          });
          for (var n = 0, i = t; n < i.length; n++) {
            (0, i[n])();
          }
          return e;
        },
        Zn = function (e) {
          Ln.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (n) {
                n.isActive() &&
                  (Un(n.target) > e
                    ? t.activeTargets.push(n)
                    : t.skippedTargets.push(n));
              });
          });
        },
        Jn = function () {
          var e = 0;
          for (
            Zn(e);
            Ln.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            (e = Kn()), Zn(e);
          return (
            Ln.some(function (e) {
              return e.skippedTargets.length > 0;
            }) &&
              (function () {
                var e;
                "function" == typeof ErrorEvent
                  ? (e = new ErrorEvent("error", { message: Mn }))
                  : ((e = document.createEvent("Event")).initEvent(
                      "error",
                      !1,
                      !1
                    ),
                    (e.message = Mn)),
                  window.dispatchEvent(e);
              })(),
            e > 0
          );
        },
        Qn = [],
        ei = function (e) {
          if (!Pn) {
            var t = 0,
              n = document.createTextNode("");
            new MutationObserver(function () {
              return Qn.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(n, { characterData: !0 }),
              (Pn = function () {
                n.textContent = "" + (t ? t-- : t++);
              });
          }
          Qn.push(e), Pn();
        },
        ti = 0,
        ni = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        ii = [
          "resize",
          "load",
          "transitionend",
          "animationend",
          "animationstart",
          "animationiteration",
          "keyup",
          "keydown",
          "mouseup",
          "mousedown",
          "mouseover",
          "mouseout",
          "blur",
          "focus",
        ],
        ri = function (e) {
          return void 0 === e && (e = 0), Date.now() + e;
        },
        si = !1,
        oi = new ((function () {
          function e() {
            var e = this;
            (this.stopped = !0),
              (this.listener = function () {
                return e.schedule();
              });
          }
          return (
            (e.prototype.run = function (e) {
              var t = this;
              if ((void 0 === e && (e = 250), !si)) {
                si = !0;
                var n,
                  i = ri(e);
                (n = function () {
                  var n = !1;
                  try {
                    n = Jn();
                  } finally {
                    if (((si = !1), (e = i - ri()), !ti)) return;
                    n ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                  }
                }),
                  ei(function () {
                    requestAnimationFrame(n);
                  });
              }
            }),
            (e.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
              var e = this,
                t = function () {
                  return e.observer && e.observer.observe(document.body, ni);
                };
              document.body ? t() : Nn.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                ii.forEach(function (t) {
                  return Nn.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                ii.forEach(function (t) {
                  return Nn.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        ai = function (e) {
          !ti && e > 0 && oi.start(), !(ti += e) && oi.stop();
        },
        li = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || xn.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = Xn(this.target, this.observedBox, !0);
              return (
                (e = this.target),
                In(e) ||
                  (function (e) {
                    switch (e.tagName) {
                      case "INPUT":
                        if ("image" !== e.type) break;
                      case "VIDEO":
                      case "AUDIO":
                      case "EMBED":
                      case "OBJECT":
                      case "CANVAS":
                      case "IFRAME":
                      case "IMG":
                        return !0;
                    }
                    return !1;
                  })(e) ||
                  "inline" !== getComputedStyle(e).display ||
                  (this.lastReportedSize = t),
                this.lastReportedSize.inlineSize !== t.inlineSize ||
                  this.lastReportedSize.blockSize !== t.blockSize
              );
            }),
            e
          );
        })(),
        ci = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        ui = new WeakMap(),
        di = function (e, t) {
          for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
          return -1;
        },
        pi = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var n = new ci(e, t);
              ui.set(e, n);
            }),
            (e.observe = function (e, t, n) {
              var i = ui.get(e),
                r = 0 === i.observationTargets.length;
              di(i.observationTargets, t) < 0 &&
                (r && Ln.push(i),
                i.observationTargets.push(new li(t, n && n.box)),
                ai(1),
                oi.schedule());
            }),
            (e.unobserve = function (e, t) {
              var n = ui.get(e),
                i = di(n.observationTargets, t),
                r = 1 === n.observationTargets.length;
              i >= 0 &&
                (r && Ln.splice(Ln.indexOf(n), 1),
                n.observationTargets.splice(i, 1),
                ai(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                n = ui.get(e);
              n.observationTargets.slice().forEach(function (n) {
                return t.unobserve(e, n.target);
              }),
                n.activeTargets.splice(0, n.activeTargets.length);
            }),
            e
          );
        })(),
        fi = (function () {
          function e(e) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
              );
            if ("function" != typeof e)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
              );
            pi.connect(this, e);
          }
          return (
            (e.prototype.observe = function (e, t) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!Dn(e))
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              pi.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!Dn(e))
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              pi.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
              pi.disconnect(this);
            }),
            (e.toString = function () {
              return "function ResizeObserver () { [polyfill code] }";
            }),
            e
          );
        })(),
        hi =
          (n(7985),
          n(6618),
          n(9989),
          n(8307),
          n(4390),
          function (e) {
            return Array.prototype.reduce.call(
              e,
              function (e, t) {
                var n = t.name.match(/data-simplebar-(.+)/);
                if (n) {
                  var i = n[1].replace(/\W+(.)/g, function (e, t) {
                    return t.toUpperCase();
                  });
                  switch (t.value) {
                    case "true":
                      e[i] = !0;
                      break;
                    case "false":
                      e[i] = !1;
                      break;
                    case void 0:
                      e[i] = !0;
                      break;
                    default:
                      e[i] = t.value;
                  }
                }
                return e;
              },
              {}
            );
          });
      function vi(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      }
      function mi(e) {
        return e && e.ownerDocument ? e.ownerDocument : document;
      }
      var gi = null,
        bi = null;
      function yi(e) {
        if (null === gi) {
          var t = mi(e);
          if (void 0 === t) return (gi = 0);
          var n = t.body,
            i = t.createElement("div");
          i.classList.add("simplebar-hide-scrollbar"), n.appendChild(i);
          var r = i.getBoundingClientRect().right;
          n.removeChild(i), (gi = r);
        }
        return gi;
      }
      En() &&
        window.addEventListener("resize", function () {
          bi !== window.devicePixelRatio &&
            ((bi = window.devicePixelRatio), (gi = null));
        });
      var xi = (function () {
        function e(t, n) {
          var i = this;
          (this.onScroll = function () {
            var e = vi(i.el);
            i.scrollXTicking ||
              (e.requestAnimationFrame(i.scrollX), (i.scrollXTicking = !0)),
              i.scrollYTicking ||
                (e.requestAnimationFrame(i.scrollY), (i.scrollYTicking = !0));
          }),
            (this.scrollX = function () {
              i.axis.x.isOverflowing &&
                (i.showScrollbar("x"), i.positionScrollbar("x")),
                (i.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              i.axis.y.isOverflowing &&
                (i.showScrollbar("y"), i.positionScrollbar("y")),
                (i.scrollYTicking = !1);
            }),
            (this.onMouseEnter = function () {
              i.showScrollbar("x"), i.showScrollbar("y");
            }),
            (this.onMouseMove = function (e) {
              (i.mouseX = e.clientX),
                (i.mouseY = e.clientY),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseMoveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              i.onMouseMove.cancel(),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseLeaveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseLeaveForAxis("y"),
                (i.mouseX = -1),
                (i.mouseY = -1);
            }),
            (this.onWindowResize = function () {
              (i.scrollbarWidth = i.getScrollbarWidth()),
                i.hideNativeScrollbar();
            }),
            (this.hideScrollbars = function () {
              (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
                (i.axis.y.track.rect =
                  i.axis.y.track.el.getBoundingClientRect()),
                i.isWithinBounds(i.axis.y.track.rect) ||
                  (i.axis.y.scrollbar.el.classList.remove(i.classNames.visible),
                  (i.axis.y.isVisible = !1)),
                i.isWithinBounds(i.axis.x.track.rect) ||
                  (i.axis.x.scrollbar.el.classList.remove(i.classNames.visible),
                  (i.axis.x.isVisible = !1));
            }),
            (this.onPointerEvent = function (e) {
              var t, n;
              (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
                (i.axis.y.track.rect =
                  i.axis.y.track.el.getBoundingClientRect()),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  (t = i.isWithinBounds(i.axis.x.track.rect)),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  (n = i.isWithinBounds(i.axis.y.track.rect)),
                (t || n) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  "mousedown" === e.type &&
                    (t &&
                      ((i.axis.x.scrollbar.rect =
                        i.axis.x.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.x.scrollbar.rect)
                        ? i.onDragStart(e, "x")
                        : i.onTrackClick(e, "x")),
                    n &&
                      ((i.axis.y.scrollbar.rect =
                        i.axis.y.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.y.scrollbar.rect)
                        ? i.onDragStart(e, "y")
                        : i.onTrackClick(e, "y"))));
            }),
            (this.drag = function (t) {
              var n = i.axis[i.draggedAxis].track,
                r = n.rect[i.axis[i.draggedAxis].sizeAttr],
                s = i.axis[i.draggedAxis].scrollbar,
                o = i.contentWrapperEl[i.axis[i.draggedAxis].scrollSizeAttr],
                a = parseInt(i.elStyles[i.axis[i.draggedAxis].sizeAttr], 10);
              t.preventDefault(), t.stopPropagation();
              var l =
                ((("y" === i.draggedAxis ? t.pageY : t.pageX) -
                  n.rect[i.axis[i.draggedAxis].offsetAttr] -
                  i.axis[i.draggedAxis].dragOffset) /
                  (r - s.size)) *
                (o - a);
              "x" === i.draggedAxis &&
                ((l =
                  i.isRtl && e.getRtlHelpers().isRtlScrollbarInverted
                    ? l - (r + s.size)
                    : l),
                (l =
                  i.isRtl && e.getRtlHelpers().isRtlScrollingInverted
                    ? -l
                    : l)),
                (i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] =
                  l);
            }),
            (this.onEndDrag = function (e) {
              var t = mi(i.el),
                n = vi(i.el);
              e.preventDefault(),
                e.stopPropagation(),
                i.el.classList.remove(i.classNames.dragging),
                t.removeEventListener("mousemove", i.drag, !0),
                t.removeEventListener("mouseup", i.onEndDrag, !0),
                (i.removePreventClickId = n.setTimeout(function () {
                  t.removeEventListener("click", i.preventClick, !0),
                    t.removeEventListener("dblclick", i.preventClick, !0),
                    (i.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.minScrollbarWidth = 20),
            (this.options = Object.assign({}, e.defaultOptions, {}, n)),
            (this.classNames = Object.assign(
              {},
              e.defaultOptions.classNames,
              {},
              this.options.classNames
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                isVisible: !1,
                forceVisible: !1,
                track: {},
                scrollbar: {},
              },
            }),
            (this.removePreventClickId = null),
            e.instances.has(this.el) ||
              ((this.recalculate = Tn()(this.recalculate.bind(this), 64)),
              (this.onMouseMove = Tn()(this.onMouseMove.bind(this), 64)),
              (this.hideScrollbars = Cn()(
                this.hideScrollbars.bind(this),
                this.options.timeout
              )),
              (this.onWindowResize = Cn()(this.onWindowResize.bind(this), 64, {
                leading: !0,
              })),
              (e.getRtlHelpers = kn()(e.getRtlHelpers)),
              this.init());
        }
        (e.getRtlHelpers = function () {
          var t = document.createElement("div");
          t.innerHTML =
            '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
          var n = t.firstElementChild;
          document.body.appendChild(n);
          var i = n.firstElementChild;
          n.scrollLeft = 0;
          var r = e.getOffset(n),
            s = e.getOffset(i);
          n.scrollLeft = 999;
          var o = e.getOffset(i);
          return {
            isRtlScrollingInverted: r.left !== s.left && s.left - o.left != 0,
            isRtlScrollbarInverted: r.left !== s.left,
          };
        }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              n = mi(e),
              i = vi(e);
            return {
              top: t.top + (i.pageYOffset || n.documentElement.scrollTop),
              left: t.left + (i.pageXOffset || n.documentElement.scrollLeft),
            };
          });
        var t = e.prototype;
        return (
          (t.init = function () {
            e.instances.set(this.el, this),
              En() &&
                (this.initDOM(),
                this.setAccessibilityAttributes(),
                (this.scrollbarWidth = this.getScrollbarWidth()),
                this.recalculate(),
                this.initListeners());
          }),
          (t.initDOM = function () {
            var e = this;
            if (
              Array.prototype.filter.call(this.el.children, function (t) {
                return t.classList.contains(e.classNames.wrapper);
              }).length
            )
              (this.wrapperEl = this.el.querySelector(
                "." + this.classNames.wrapper
              )),
                (this.contentWrapperEl =
                  this.options.scrollableNode ||
                  this.el.querySelector("." + this.classNames.contentWrapper)),
                (this.contentEl =
                  this.options.contentNode ||
                  this.el.querySelector("." + this.classNames.contentEl)),
                (this.offsetEl = this.el.querySelector(
                  "." + this.classNames.offset
                )),
                (this.maskEl = this.el.querySelector(
                  "." + this.classNames.mask
                )),
                (this.placeholderEl = this.findChild(
                  this.wrapperEl,
                  "." + this.classNames.placeholder
                )),
                (this.heightAutoObserverWrapperEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverWrapperEl
                )),
                (this.heightAutoObserverEl = this.el.querySelector(
                  "." + this.classNames.heightAutoObserverEl
                )),
                (this.axis.x.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.horizontal
                )),
                (this.axis.y.track.el = this.findChild(
                  this.el,
                  "." + this.classNames.track + "." + this.classNames.vertical
                ));
            else {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  this.wrapperEl.classList.add(this.classNames.wrapper),
                  this.contentWrapperEl.classList.add(
                    this.classNames.contentWrapper
                  ),
                  this.offsetEl.classList.add(this.classNames.offset),
                  this.maskEl.classList.add(this.classNames.mask),
                  this.contentEl.classList.add(this.classNames.contentEl),
                  this.placeholderEl.classList.add(this.classNames.placeholder),
                  this.heightAutoObserverWrapperEl.classList.add(
                    this.classNames.heightAutoObserverWrapperEl
                  ),
                  this.heightAutoObserverEl.classList.add(
                    this.classNames.heightAutoObserverEl
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var t = document.createElement("div"),
                n = document.createElement("div");
              t.classList.add(this.classNames.track),
                n.classList.add(this.classNames.scrollbar),
                t.appendChild(n),
                (this.axis.x.track.el = t.cloneNode(!0)),
                this.axis.x.track.el.classList.add(this.classNames.horizontal),
                (this.axis.y.track.el = t.cloneNode(!0)),
                this.axis.y.track.el.classList.add(this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(
              "." + this.classNames.scrollbar
            )),
              (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(
                "." + this.classNames.scrollbar
              )),
              this.options.autoHide ||
                (this.axis.x.scrollbar.el.classList.add(
                  this.classNames.visible
                ),
                this.axis.y.scrollbar.el.classList.add(
                  this.classNames.visible
                )),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.setAccessibilityAttributes = function () {
            var e = this.options.ariaLabel || "scrollable content";
            this.contentWrapperEl.setAttribute("tabindex", "0"),
              this.contentWrapperEl.setAttribute("role", "region"),
              this.contentWrapperEl.setAttribute("aria-label", e);
          }),
          (t.initListeners = function () {
            var e = this,
              t = vi(this.el);
            this.options.autoHide &&
              this.el.addEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.addEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl.addEventListener("scroll", this.onScroll),
              t.addEventListener("resize", this.onWindowResize);
            var n = !1,
              i = t.ResizeObserver || fi;
            (this.resizeObserver = new i(function () {
              n && e.recalculate();
            })),
              this.resizeObserver.observe(this.el),
              this.resizeObserver.observe(this.contentEl),
              t.requestAnimationFrame(function () {
                n = !0;
              }),
              (this.mutationObserver = new t.MutationObserver(
                this.recalculate
              )),
              this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0,
              });
          }),
          (t.recalculate = function () {
            var e = vi(this.el);
            (this.elStyles = e.getComputedStyle(this.el)),
              (this.isRtl = "rtl" === this.elStyles.direction);
            var t = this.heightAutoObserverEl.offsetHeight <= 1,
              n = this.heightAutoObserverEl.offsetWidth <= 1,
              i = this.contentEl.offsetWidth,
              r = this.contentWrapperEl.offsetWidth,
              s = this.elStyles.overflowX,
              o = this.elStyles.overflowY;
            (this.contentEl.style.padding =
              this.elStyles.paddingTop +
              " " +
              this.elStyles.paddingRight +
              " " +
              this.elStyles.paddingBottom +
              " " +
              this.elStyles.paddingLeft),
              (this.wrapperEl.style.margin =
                "-" +
                this.elStyles.paddingTop +
                " -" +
                this.elStyles.paddingRight +
                " -" +
                this.elStyles.paddingBottom +
                " -" +
                this.elStyles.paddingLeft);
            var a = this.contentEl.scrollHeight,
              l = this.contentEl.scrollWidth;
            (this.contentWrapperEl.style.height = t ? "auto" : "100%"),
              (this.placeholderEl.style.width = n ? i + "px" : "auto"),
              (this.placeholderEl.style.height = a + "px");
            var c = this.contentWrapperEl.offsetHeight;
            (this.axis.x.isOverflowing = l > i),
              (this.axis.y.isOverflowing = a > c),
              (this.axis.x.isOverflowing =
                "hidden" !== s && this.axis.x.isOverflowing),
              (this.axis.y.isOverflowing =
                "hidden" !== o && this.axis.y.isOverflowing),
              (this.axis.x.forceVisible =
                "x" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              (this.axis.y.forceVisible =
                "y" === this.options.forceVisible ||
                !0 === this.options.forceVisible),
              this.hideNativeScrollbar();
            var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
              d = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            (this.axis.x.isOverflowing =
              this.axis.x.isOverflowing && l > r - d),
              (this.axis.y.isOverflowing =
                this.axis.y.isOverflowing && a > c - u),
              (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
              (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
              (this.axis.x.scrollbar.el.style.width =
                this.axis.x.scrollbar.size + "px"),
              (this.axis.y.scrollbar.el.style.height =
                this.axis.y.scrollbar.size + "px"),
              this.positionScrollbar("x"),
              this.positionScrollbar("y"),
              this.toggleTrackVisibility("x"),
              this.toggleTrackVisibility("y");
          }),
          (t.getScrollbarSize = function (e) {
            if ((void 0 === e && (e = "y"), !this.axis[e].isOverflowing))
              return 0;
            var t,
              n = this.contentEl[this.axis[e].scrollSizeAttr],
              i = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
              r = i / n;
            return (
              (t = Math.max(~~(r * i), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (t = Math.min(t, this.options.scrollbarMaxSize)),
              t
            );
          }),
          (t.positionScrollbar = function (t) {
            if ((void 0 === t && (t = "y"), this.axis[t].isOverflowing)) {
              var n = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                i = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                r = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                s = this.axis[t].scrollbar,
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  (o =
                    "x" === t &&
                    this.isRtl &&
                    e.getRtlHelpers().isRtlScrollingInverted
                      ? -o
                      : o) /
                  (n - r),
                l = ~~((i - s.size) * a);
              (l =
                "x" === t &&
                this.isRtl &&
                e.getRtlHelpers().isRtlScrollbarInverted
                  ? l + (i - s.size)
                  : l),
                (s.el.style.transform =
                  "x" === t
                    ? "translate3d(" + l + "px, 0, 0)"
                    : "translate3d(0, " + l + "px, 0)");
            }
          }),
          (t.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              n = this.axis[e].scrollbar.el;
            this.axis[e].isOverflowing || this.axis[e].forceVisible
              ? ((t.style.visibility = "visible"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "scroll"))
              : ((t.style.visibility = "hidden"),
                (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                  "hidden")),
              this.axis[e].isOverflowing
                ? (n.style.display = "block")
                : (n.style.display = "none");
          }),
          (t.hideNativeScrollbar = function () {
            (this.offsetEl.style[this.isRtl ? "left" : "right"] =
              this.axis.y.isOverflowing || this.axis.y.forceVisible
                ? "-" + this.scrollbarWidth + "px"
                : 0),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-" + this.scrollbarWidth + "px"
                  : 0);
          }),
          (t.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y"),
              (this.axis[e].track.rect =
                this.axis[e].track.el.getBoundingClientRect()),
              (this.axis[e].scrollbar.rect =
                this.axis[e].scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(this.axis[e].scrollbar.rect)
                ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover)
                : this.axis[e].scrollbar.el.classList.remove(
                    this.classNames.hover
                  ),
              this.isWithinBounds(this.axis[e].track.rect)
                ? (this.showScrollbar(e),
                  this.axis[e].track.el.classList.add(this.classNames.hover))
                : this.axis[e].track.el.classList.remove(this.classNames.hover);
          }),
          (t.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].track.el.classList.remove(this.classNames.hover),
              this.axis[e].scrollbar.el.classList.remove(this.classNames.hover);
          }),
          (t.showScrollbar = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].scrollbar.el;
            this.axis[e].isVisible ||
              (t.classList.add(this.classNames.visible),
              (this.axis[e].isVisible = !0)),
              this.options.autoHide && this.hideScrollbars();
          }),
          (t.onDragStart = function (e, t) {
            void 0 === t && (t = "y");
            var n = mi(this.el),
              i = vi(this.el),
              r = this.axis[t].scrollbar,
              s = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset = s - r.rect[this.axis[t].offsetAttr]),
              (this.draggedAxis = t),
              this.el.classList.add(this.classNames.dragging),
              n.addEventListener("mousemove", this.drag, !0),
              n.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (n.addEventListener("click", this.preventClick, !0),
                  n.addEventListener("dblclick", this.preventClick, !0))
                : (i.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (t.onTrackClick = function (e, t) {
            var n = this;
            if ((void 0 === t && (t = "y"), this.options.clickOnTrack)) {
              var i = vi(this.el);
              this.axis[t].scrollbar.rect =
                this.axis[t].scrollbar.el.getBoundingClientRect();
              var r = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],
                s = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                o = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                a =
                  ("y" === t ? this.mouseY - r : this.mouseX - r) < 0 ? -1 : 1,
                l = -1 === a ? o - s : o + s;
              !(function e() {
                var r, s;
                -1 === a
                  ? o > l &&
                    ((o -= n.options.clickOnTrackSpeed),
                    n.contentWrapperEl.scrollTo(
                      (((r = {})[n.axis[t].offsetAttr] = o), r)
                    ),
                    i.requestAnimationFrame(e))
                  : o < l &&
                    ((o += n.options.clickOnTrackSpeed),
                    n.contentWrapperEl.scrollTo(
                      (((s = {})[n.axis[t].offsetAttr] = o), s)
                    ),
                    i.requestAnimationFrame(e));
              })();
            }
          }),
          (t.getContentElement = function () {
            return this.contentEl;
          }),
          (t.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (t.getScrollbarWidth = function () {
            try {
              return "none" ===
                getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                  .display ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : yi(this.el);
            } catch (e) {
              return yi(this.el);
            }
          }),
          (t.removeListeners = function () {
            var e = this,
              t = vi(this.el);
            this.options.autoHide &&
              this.el.removeEventListener("mouseenter", this.onMouseEnter),
              ["mousedown", "click", "dblclick"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, !0);
              }),
              ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                e.el.removeEventListener(t, e.onPointerEvent, {
                  capture: !0,
                  passive: !0,
                });
              }),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll
                ),
              t.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.recalculate.cancel(),
              this.onMouseMove.cancel(),
              this.hideScrollbars.cancel(),
              this.onWindowResize.cancel();
          }),
          (t.unMount = function () {
            this.removeListeners(), e.instances.delete(this.el);
          }),
          (t.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (t.findChild = function (e, t) {
            var n =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return n.call(e, t);
            })[0];
          }),
          e
        );
      })();
      (xi.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
          contentEl: "simplebar-content",
          contentWrapper: "simplebar-content-wrapper",
          offset: "simplebar-offset",
          mask: "simplebar-mask",
          wrapper: "simplebar-wrapper",
          placeholder: "simplebar-placeholder",
          scrollbar: "simplebar-scrollbar",
          track: "simplebar-track",
          heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
          heightAutoObserverEl: "simplebar-height-auto-observer",
          visible: "simplebar-visible",
          horizontal: "simplebar-horizontal",
          vertical: "simplebar-vertical",
          hover: "simplebar-hover",
          dragging: "simplebar-dragging",
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3,
      }),
        (xi.instances = new WeakMap()),
        (xi.initDOMLoadedElements = function () {
          document.removeEventListener(
            "DOMContentLoaded",
            this.initDOMLoadedElements
          ),
            window.removeEventListener("load", this.initDOMLoadedElements),
            Array.prototype.forEach.call(
              document.querySelectorAll("[data-simplebar]"),
              function (e) {
                "init" === e.getAttribute("data-simplebar") ||
                  xi.instances.has(e) ||
                  new xi(e, hi(e.attributes));
              }
            );
        }),
        (xi.removeObserver = function () {
          this.globalObserver.disconnect();
        }),
        (xi.initHtmlApi = function () {
          (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
            "undefined" != typeof MutationObserver &&
              ((this.globalObserver = new MutationObserver(xi.handleMutations)),
              this.globalObserver.observe(document, {
                childList: !0,
                subtree: !0,
              })),
            "complete" === document.readyState ||
            ("loading" !== document.readyState &&
              !document.documentElement.doScroll)
              ? window.setTimeout(this.initDOMLoadedElements)
              : (document.addEventListener(
                  "DOMContentLoaded",
                  this.initDOMLoadedElements
                ),
                window.addEventListener("load", this.initDOMLoadedElements));
        }),
        (xi.handleMutations = function (e) {
          e.forEach(function (e) {
            Array.prototype.forEach.call(e.addedNodes, function (e) {
              1 === e.nodeType &&
                (e.hasAttribute("data-simplebar")
                  ? !xi.instances.has(e) &&
                    document.documentElement.contains(e) &&
                    new xi(e, hi(e.attributes))
                  : Array.prototype.forEach.call(
                      e.querySelectorAll("[data-simplebar]"),
                      function (e) {
                        "init" !== e.getAttribute("data-simplebar") &&
                          !xi.instances.has(e) &&
                          document.documentElement.contains(e) &&
                          new xi(e, hi(e.attributes));
                      }
                    ));
            }),
              Array.prototype.forEach.call(e.removedNodes, function (e) {
                1 === e.nodeType &&
                  ("init" === e.getAttribute("data-simplebar")
                    ? xi.instances.has(e) &&
                      !document.documentElement.contains(e) &&
                      xi.instances.get(e).unMount()
                    : Array.prototype.forEach.call(
                        e.querySelectorAll('[data-simplebar="init"]'),
                        function (e) {
                          xi.instances.has(e) &&
                            !document.documentElement.contains(e) &&
                            xi.instances.get(e).unMount();
                        }
                      ));
              });
          });
        }),
        (xi.getOptions = hi),
        En() && xi.initHtmlApi();
      let wi = !1;
      setTimeout(() => {
        if (wi) {
          let e = new Event("windowScroll");
          window.addEventListener("scroll", function (t) {
            document.dispatchEvent(e);
          });
        }
      }, 0),
        (window.FLS = !0),
        (function (e) {
          let t = new Image();
          (t.onload = t.onerror =
            function () {
              e(2 == t.height);
            }),
            (t.src =
              "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(function (e) {
          let t = !0 === e ? "webp" : "no-webp";
          document.documentElement.classList.add(t);
        }),
        (function () {
          let e = document.querySelector(".icon-menu");
          e &&
            e.addEventListener("click", function (e) {
              i &&
                (r(), document.documentElement.classList.toggle("menu-open"));
            });
        })(),
        new e({}),
        new t({}),
        (function () {
          const e = document.querySelectorAll(".rating");
          e.length > 0 &&
            (function () {
              let t, n;
              for (let t = 0; t < e.length; t++) {
                i(e[t]);
              }
              function i(e) {
                r(e), s(), e.classList.contains("rating_set") && o(e);
              }
              function r(e) {
                (t = e.querySelector(".rating__active")),
                  (n = e.querySelector(".rating__value"));
              }
              function s(e = n.innerHTML) {
                const i = e / 0.05;
                t.style.width = `${i}%`;
              }
              function o(e) {
                const t = e.querySelectorAll(".rating__item");
                for (let i = 0; i < t.length; i++) {
                  const o = t[i];
                  o.addEventListener("mouseenter", function (t) {
                    r(e), s(o.value);
                  }),
                    o.addEventListener("mouseleave", function (e) {
                      s();
                    }),
                    o.addEventListener("click", function (t) {
                      r(e),
                        e.dataset.ajax
                          ? a(o.value, e)
                          : ((n.innerHTML = i + 1), s());
                    });
                }
              }
              async function a(e, t) {
                if (!t.classList.contains("rating_sending")) {
                  t.classList.add("rating_sending");
                  let e = await fetch("rating.json", { method: "GET" });
                  if (e.ok) {
                    const i = (await e.json()).newRating;
                    (n.innerHTML = i),
                      s(),
                      t.classList.remove("rating_sending");
                  } else alert("Ошибка"), t.classList.remove("rating_sending");
                }
              }
            })();
        })(),
        (function () {
          function e(e) {
            if ("click" === e.type) {
              const t = e.target;
              if (t.closest("[data-goto]")) {
                const n = t.closest("[data-goto]"),
                  i = n.dataset.goto ? n.dataset.goto : "",
                  r = !!n.hasAttribute("data-goto-header"),
                  s = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
                l(i, r, s), e.preventDefault();
              }
            } else if ("watcherCallback" === e.type && e.detail) {
              const t = e.detail.entry,
                n = t.target;
              if ("navigator" === n.dataset.watch) {
                const e = n.id,
                  i =
                    (document.querySelector("[data-goto]._navigator-active"),
                    document.querySelector(`[data-goto="${e}"]`));
                t.isIntersecting
                  ? i && i.classList.add("_navigator-active")
                  : i && i.classList.remove("_navigator-active");
              }
            }
          }
          document.addEventListener("click", e),
            document.addEventListener("watcherCallback", e);
        })(),
        (function () {
          wi = !0;
          const e = document.querySelector("header.header"),
            t = e.hasAttribute("data-scroll-show"),
            n = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
            i = e.dataset.scroll ? e.dataset.scroll : 1;
          let r,
            s = 0;
          document.addEventListener("windowScroll", function (o) {
            const a = window.scrollY;
            clearTimeout(r),
              a >= i
                ? (!e.classList.contains("_header-scroll") &&
                    e.classList.add("_header-scroll"),
                  t &&
                    (a > s
                      ? e.classList.contains("_header-show") &&
                        e.classList.remove("_header-show")
                      : !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show"),
                    (r = setTimeout(() => {
                      !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show");
                    }, n))))
                : (e.classList.contains("_header-scroll") &&
                    e.classList.remove("_header-scroll"),
                  t &&
                    e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")),
              (s = a <= 0 ? 0 : a);
          });
        })();
    })();
})();
