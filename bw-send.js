/*!OneAPM-v415.6.31 */
!
function() {
	var a = window.BWEUM.require;
	a = function b(c, d, e) {
		function f(h, i) {
			if (!d[h]) {
				if (!c[h]) {
					var j = "function" == typeof a && a;
					if (!i && j) return j(h, !0);
					if (g) return g(h, !0);
					var k = new Error("Cannot find module '" + h + "'");
					throw k.code = "MODULE_NOT_FOUND", k
				}
				var l = d[h] = {
					exports: {}
				};
				c[h][0].call(l.exports, function(a) {
					var b = c[h][1][a];
					return f(b ? b : a)
				}, l, l.exports, b, c, d, e)
			}
			return d[h].exports
		}
		for (var g = "function" == typeof a && a, h = 0; h < e.length; h++) f(e[h]);
		return f
	}({
		2: [function(a) {
			a("feelTime"), a("sendIni"), a("errorsend"), a("xhrsend"), a("resourcessend")
		}, {
			errorsend: 13,
			feelTime: 14,
			resourcessend: 15,
			sendIni: 27,
			xhrsend: 17
		}],
		27: [function(a) {
			function b(a) {
				a && a.tid && (p = a.tid), a && a.ptid && (l.infoself.sysUid = a.ptid + ""), m.emit("rates", [a]), j.sendX("error", l, !1, !1)
			}
			function c() {
				n += 1, !l.info.beacon
			}
			function d(a) {
				var b = "s";
				if ("pagehide" === a.type && (b = "h"), g.navCookie && (document.cookie = "BWEUM=" + b + "=" + Number(new Date) + "&r=" + e(document.location.href) + "&p=" + e(document.referrer) + "; path=/"), p) {
					var c = (new Date).getTime() + 1e3;
					document.cookie = "BWAGENT=tk=" + p + "; max-age=1; path=/; expires=" + new Date(c).toGMTString()
				}
			} {
				var e = a("s-hash"),
					f = a("add-e"),
					g = a("start-time"),
					h = a("aggregator"),
					i = a("single"),
					j = (a("fetch"), a("harvest")),
					k = a("register-handler"),
					l = a("loader"),
					m = a("ee"),
					n = 0,
					o = "undefined" != typeof window.BWEUM.autorun ? window.BWEUM.autorun : !0;
				document.createElement("div")
			}
			window.BWEUM.setToken = b, window.BWEUM.inlineHit = c;
			var p, q = window.performance,
				r = a("UserIdentifierLazy"),
				s = a("sessionId"),
				t = a("decodeurlfn"),
				u = i(d);
			f("beforeunload", u), f("pagehide", u), f("unload", function() {
				j.sendAll(l, !1, !1)
			}), k("mark", h.mark), h.mark("done"), l.infoself.tNamePlain = t(window.location.href), l.infoself.tNamePlain.length > 500 && (l.infoself.tNamePlain = l.infoself.tNamePlain.slice(0, 500));
			var v = a("browserVersion");
			v(), q ? q.timing && (l.infoself.mockbi = "1", q.getEntriesByType && (l.infoself.mockbi = "2")) : l.infoself.mockbi = "0", r(), s.plantGuid(), l.infoself.sysConType = window.navigator.connection ? window.navigator.connection.type + "" : "", o && setTimeout(function() {
				j.sendBeacon(l, h)
			}, 5)
		}, {
			UserIdentifierLazy: 3,
			"add-e": 4,
			aggregator: 5,
			browserVersion: 18,
			decodeurlfn: 37,
			ee: 38,
			fetch: 21,
			harvest: 22,
			loader: 41,
			"register-handler": 25,
			"s-hash": 26,
			sessionId: 28,
			single: 29,
			"start-time": 30
		}],
		18: [function(a, b) {
			function c() {
				return "undefined" != typeof window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile")
			}
			function d(a) {
				var b, c = navigator.userAgent,
					d = c.match(/(edge|opr|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
				return d = d.length > 0 ? d : c.match(/(chrome|safari(?=\/))\/?\s*(\d+)/i) || [], ("wk" == a || "wb" == a) && (d = c.match(/(AppleWebKit(?=\/))\/?\s*(\d+)/i) || []), /trident/i.test(d[1]) ? (b = /\brv[ :]+(\d+)/g.exec(c) || [], b[1] || "") : "Chrome" === d[1] && (b = c.match(/\bOPR\/(\d+)/), null != b) ? b[1] : (d = d[2] ? [d[1], d[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (b = c.match(/mqqbrowser\/(\d+)/i)) && "wx" == a ? d.splice(1, 1, b[1]) : null != (b = c.match(/micromessenger\/(\d+)/i)) && "wx" == a ? d.splice(1, 1, b[1]) : null != (b = c.match(/ucbrowser\/(\d+)/i)) && "uc" == a ? d.splice(1, 1, b[1]) : null != (b = c.match(/version\/(\d+)/i)) ? d.splice(1, 1, b[1]) : null != (b = c.match(/mobile\/(\d+)/i)) && d.splice(1, 1, b[1]), d.length > 1 ? d[1] : 0)
			}
			function e() {
				var a, b, e, f, g, h, i = c(),
					j = navigator.userAgent,
					k = j.toLowerCase(),
					l = 0,
					m = "";
				if (i) {
					{
						var n = j.match(/Chrome\/([\d.]+)/) || j.match(/CriOS\/([\d.]+)/),
							o = !n && j.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
							p = j.match(/(iPhone|iPod|iPad)/),
							p = (j.match(/Web[kK]it[\/]{0,1}([\d.]+)/), j.match(/(iPhone|iPod|iPad)/)),
							q = o || j.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
						j.match(/Firefox\/([\d.]+)/)
					}
					m = k.indexOf("weibo") > 0 ? "wb" : k.indexOf("micromessenger") > 0 ? "wx" : k.indexOf("ucbrowser") > 0 ? "uc" : null != q && null != p ? "sa" : null != n ? "ch" : "wk"
				}
				return ("wk" == m || "" == m) && (g = j.match(/Edge\/([\d.]+)/), a = ( !! window.ActiveXObject || "ActiveXObject" in window) && !g, b = !! window.opera || !! window.opr || j.indexOf(" OPR/") >= 0, e = ( !! window.chrome && !b || j.match(/Chrome\/([\d.]+)/) || j.match(/CriOS\/([\d.]+)/)) && !g && !b, f = "undefined" != typeof InstallTrigger, h = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, a ? m = "ie" : e ? m = "ch" : f ? m = "fi" : h ? m = "sa" : b ? m = "op" : g && (m = "ed")), a ? l = function() {
					for (var a = 3, b = document.createElement("b"), c = b.all || []; b.innerHTML = "<!--[if gt IE " + ++a + "]><i><![endif]-->", c[0];);
					return a > 4 ? a : document.documentMode
				}() : (l = d(m), l.length > 5 && (l = "")), {
					bT: m,
					bV: l + "",
					mm: i ? "1" : "0"
				}
			}
			b.exports = function() {
				var b = a("loader"),
					c = e();
				c && (b.maxBytes = 6 == c.bV && "ie" == c.bT ? 2e3 : 3e4, b.tpmBrowerInfo = c)
			}
		}, {
			loader: 41
		}],
		4: [function(a, b) {
			b.exports = function(a, b) {
				return "addEventListener" in window ? window.addEventListener(a, b, !1) : "attachEvent" in window ? window.attachEvent("on" + a, b) : void 0
			}
		}, {}],
		3: [function(a, b) {
			b.exports = function() {
				var a = window[window.apmBIUserFindLazy];
				void 0 == a || "string" != typeof a && "number" != typeof a || (window.apmBiUserLazy = a, window.apmBiUserLazy += "")
			}
		}, {}],
		17: [function(a, b) {
			function c(a, b, c) {
				b.time = c - h.offset;
				var e = {};
				a.cat ? (e = a.cat, a.cat.transactionName = encodeURIComponent(a.cat.transactionName), d.store("xhr", g([a.status, [e.applicationID, e.transactionName, e.ttGuid]]), a, b)) : d.store("xhr", g([a.status, a.url]), a, b)
			}
			var d = a("aggregator"),
				e = a("register-handler"),
				f = a("harvest"),
				g = a("stringify"),
				h = a("loader");
			h.features.xhr && (f.on("error", function() {
				return {
					body: d.take(["xhr"])
				}
			}), e("xhr", c), b.exports = c)
		}, {
			aggregator: 5,
			harvest: 22,
			loader: 41,
			"register-handler": 25,
			stringify: 31
		}],
		15: [function(a, b) {
			function c(a) {
				return a += u.timing.navigationStart, a < u.timing.domContentLoadedEventStart ? 1 : a >= u.timing.domContentLoadedEventStart && a < u.timing.loadEventStart ? 2 : 3
			}
			function d(a) {
				return a += u.timing.navigationStart, a <= u.timing.domContentLoadedEventStart ? 1 : 0
			}
			function e(a) {
				return r(a.name)
			}
			function f(a) {
				B = 0, a.forEach(function(a, b) {
					var f, h;
					void 0 == x[b] && a.responseEnd > 0 && 51 > B && A >= z && (f = e(a), h = {
						n: a.initiatorType || "embed",
						s: 0 | a.fetchStart,
						e: 0 | a.responseEnd,
						o: f.pathname,
						t: a.entryType,
						j: {
							of: a.startTime
						}
					}, D.addPTPres(a, h.j), h.lt = c(h.j.of), h.ht = f.hostname, p.headUrl && p.headUrl[unescape(a.name)] && (h.hd = 1), h.h5 = d(a.responseEnd), h.ut = a.duration, h.lt < 3 && (z++, B++, x[b] = 1, g(h)))
				})
			}
			function g(a) {
				var b = w[a.n];
				b || (b = w[a.n] = []), b.push(a)
			}
			function h(a) {
				return function() {
					return a()
				}
			}
			function i() {
				f(u.getEntriesByType("resource"));
				var a = q(w, function(a, b) {
					return a in v ? q(b.sort(j).reduce(smearEvtsByOrigin(a), {}), k).reduce(l, []) : b
				}).reduce(l, []);
				return 0 === a.length ? {} : (w = {}, {
					qs: {
						st: "" + p.offset,
						ptid: s
					},
					body: {
						res: a
					}
				})
			}
			function j(a, b) {
				return a.s - b.s
			}
			function k(a, b) {
				return b
			}
			function l(a, b) {
				return a.concat(b)
			}
			function m() {}
			var n = a("register-handler"),
				o = a("harvest"),
				p = (a("aggregator"), a("loader")),
				q = a("map-own"),
				r = (a("lodash._slice"), a("clean-url"), a("parse-url")),
				s = "",
				t = window,
				u = (t.document, t.performance),
				v = {
					typing: 1e3,
					scrolling: 1e3,
					mousing: 1e3
				},
				w = {},
				x = {},
				y = 0,
				z = 0,
				A = 0,
				B = 0,
				C = a("ee"),
				D = a("nav-timing");
			if (b.exports = {
				_takeSTNs: i,
				_trace: w
			}, a("start-time"), p.features.stn) {
				var E = setTimeout(function() {
					n("bst", m), n("bstResource", m), n("bstHist", m), n("bstAgg", m)
				}, 1e4);
				C.on("rates", function(a) {
					if (a && a.stn) {
						clearTimeout(E), 0 == A && (A = u.getEntriesByType("resource").length), s = p.infoself.sysUid, o.on("resources", h(i)); {
							o.sendX("resources", p, !0)
						}
						setInterval(function() {
							A > z && 3 > y && (o.sendX("resources", p, !0), y++)
						}, 2e3)
					}
				})
			}
		}, {
			aggregator: 5,
			"clean-url": 20,
			ee: 38,
			harvest: 22,
			loader: 41,
			"lodash._slice": 43,
			"map-own": 44,
			"nav-timing": 23,
			"parse-url": 45,
			"register-handler": 25,
			"start-time": 30
		}],
		45: [function(a, b) {
			b.exports = function(a) {
				var b = document.createElement("a"),
					c = window.location,
					d = {};
				b.href = a, d.port = b.port;
				var e = b.href.split("://");
				return !d.port && e[1] && (d.port = e[1].split("/")[0].split(":")[1]), d.port && "0" !== d.port || (d.port = "https" === e[0] ? "443" : "80"), d.hostname = b.hostname || c.hostname, d.pathname = b.pathname, "/" !== d.pathname.charAt(0) && (d.pathname = "/" + d.pathname), d.sameOrigin = !b.hostname || b.hostname === document.domain && b.port === c.port && b.protocol === c.protocol, d
			}
		}, {}],
		14: [function(a) {
			function b() {
				var a, b = 0,
					f = 0,
					k = 0;
				if (h && g.querySelectorAll && h.getEntriesByType) {
					k = h.timing.domLoading, c = g.querySelectorAll("head>link"), d = g.querySelectorAll("head>script");
					for (a in c)"" != c[a].href && void 0 != c[a].href && (j[unescape(c[a].href)] = 1);
					for (a in d)"" != d[a].src && void 0 != d[a].src && 1 != d[a].async && (j[unescape(d[a].src)] = 1);
					for (f += c.length, f += d.length, e = h.getEntriesByType("resource"), 2 * f > e.length ? f = e.length : f += f, b; f >= b; b++) e[b] && 1 == j[unescape(e[b].name)] && e[b].responseEnd > 0 && e[b].responseEnd + h.timing.navigationStart >= k && (k = e[b].responseEnd + h.timing.navigationStart);
					k -= h.timing.navigationStart, i.feelTime = parseInt(k), i.headUrl = j
				}
			}
			var c, d, e, f = window,
				g = f.document,
				h = f.performance,
				i = a("loader"),
				j = {};
			try {
				b()
			} catch (k) {}
		}, {
			loader: 41
		}],
		13: [function(a, b) {
			function c(a) {
				return j(a.exceptionClass) ^ a.stackHash
			}
			function d(a, b, d) {
				var n = i(a);
				b || (b = (new Date).getTime());
				for (var o = "", p = 0; p < n.frames.length; p++) {
					var q = n.frames[p],
						r = g(q.func);
					o && (o += "\n"), r && (o += r + "@"), "string" == typeof q.url && (q.url = q.url.split("?")[0], q.url === k.origin && (q.url = "<inline>"), o += q.url), q.line && (o += ":" + q.line)
				}
				var s = {
					stackHash: j(o),
					exceptionClass: n.name,
					request_uri: window.location.href
				};
				if (n.message && (s.message = n.message), l[s.stackHash] ? s.browser_stack_hash = j(n.stackString) : (l[s.stackHash] = !0, s.stack_trace = n.stackString), document.referrer) {
					var t = h(document.referrer);
					t && (s.request_referer = t)
				}
				var u = c(s);
				m[u] || (s.pageview = 1, m[u] = !0), s = e(s), f.store(d ? "ierr" : "err", u, s, {
					time: b - k.offset
				})
			}
			function e(a) {
				return a.stack_trace && a.stack_trace.length > 600 && (a.stack_trace = a.stack_trace.substring(0, 500) + "..."), a.message && a.message.length > 200 && (a.message = a.message.substring(0, 200) + "..."), a.request_uri && a.request_uri.length > 200 && (a.request_uri = a.request_uri.substring(0, 200) + "..."), a.request_referer && a.request_referer.length > 200 && (a.request_referer = a.request_referer.substring(0, 200) + "..."), a
			}
			var f = a("aggregator"),
				g = a("canonical-function-name"),
				h = a("clean-url"),
				i = a("compute-stack-trace"),
				j = a("string-hash-code"),
				k = a("loader"),
				l = {},
				m = {},
				n = a("register-handler"),
				o = a("harvest");
			a("start-time"), k.features.err && (o.on("error", function() {
				return {
					body: f.take(["err", "ierr"])
				}
			}), o.pingErrors(k), setInterval(function() {
				o.sendX("error", k, !1)
			}, 5e3), n("err", d), n("ierr", d), b.exports = d)
		}, {
			aggregator: 5,
			"canonical-function-name": 11,
			"clean-url": 20,
			"compute-stack-trace": 12,
			harvest: 22,
			loader: 41,
			"register-handler": 25,
			"start-time": 30,
			"string-hash-code": 16
		}],
		30: [function(a, b) {
			function c() {
				var a = d() || e();
				a && (g.mark("starttime", a), h.offset = a)
			}
			function d() {
				var a = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
				if (a) {
					var c = +a[1];
					if (9 > c) return
				}
				return "undefined" != typeof window.performance && window.performance.timing && "undefined" != typeof window.performance.timing.navigationStart ? (b.exports.navCookie = !1, window.performance.timing.navigationStart) : void 0
			}
			function e() {
				for (var a = document.cookie.split(" "), b = 0; b < a.length; b++) if (0 === a[b].indexOf("BWEUM=")) {
					for (var c, d, e, h, i = a[b].substring("BWEUM=".length).split("&"), j = 0; j < i.length; j++) 0 === i[j].indexOf("s=") ? e = i[j].substring(2) : 0 === i[j].indexOf("h=") ? (e = i[j].substring(2), g.store("measures", "ph", {
						value: 1
					})) : 0 === i[j].indexOf("p=") ? (d = i[j].substring(2), ";" === d.charAt(d.length - 1) && (d = d.substr(0, d.length - 1))) : 0 === i[j].indexOf("r=") && (c = i[j].substring(2), ";" === c.charAt(c.length - 1) && (c = c.substr(0, c.length - 1)));
					if (c) {
						var k = f(document.referrer);
						h = k == c, h || (h = f(document.location.href) == c && k == d)
					}
					if (h && e) {
						var l = (new Date).getTime();
						if (l - e > 6e4) return;
						return e
					}
				}
			}
			var f = a("s-hash"),
				g = a("aggregator"),
				h = a("loader");
			b.exports = {
				navCookie: !0
			}, c()
		}, {
			aggregator: 5,
			loader: 41,
			"s-hash": 26
		}],
		26: [function(a, b) {
			function c(a) {
				var b, c = 0;
				for (b = 0; b < a.length; b++) c += (b + 1) * a.charCodeAt(b);
				return Math.abs(c)
			}
			b.exports = c
		}, {}],
		22: [function(a, b) {
			function c() {
				for (var a, b, c = document.cookie.split(" "), d = 0; d < c.length; d++) if (0 === c[d].indexOf("BWAGENT=")) {
					a = c[d].substring("BWAGENT=".length).split("&");
					for (var e = 0; e < a.length; e++) 0 === a[e].indexOf("tk=") && (b = a[e].substring(3), ";" === b.charAt(b.length - 1) && (b = b.substr(0, b.length - 1)))
				}
				return b
			}
			function d(a, b) {
				var d = window.BWEUM.aicookie || {},
					f = window.performance;
				if (a.info.beacon || a.info.beaconUrl) {
					(a.info.queueTime || d.queueTime) && b.store("measures", "qt", {
						value: a.info.queueTime || d.queueTime
					}), (a.info.applicationTime || d.applicationTime) && b.store("measures", "ap", {
						value: a.info.applicationTime || d.applicationTime
					});
					var g = b.get("measures"),
						h = r(g, function(a, b) {
							return "&" + a + "=" + b.params.value
						}).join("");
					a.info.agentToken = c();
					var i = [o(a)];
					h && i.push(h), i.push(u("tt", a.info.ttGuid || d.ttGuid)), i.push(u("ptid", a.infoself.sysUid)), i.push(u("ac", a.info.account)), i.push(u("pr", a.info.product)), i.push(u("tk", a.info.agentToken));
					var j = {},
						k = !0,
						l = {},
						n = {},
						p = 0;
					f && "undefined" != typeof f.timing ? (n = f.navigation, j.timing = s.addPT(f.timing, l), f.timing.loadEventEnd > 0 ? p = f.timing.loadEventEnd - f.timing.navigationStart : f.timing.loadEventStart > 0 && (p = f.timing.loadEventStart - f.timing.navigationStart)) : (l.fetchStart = b.getMark("starttime"), l.responseEnd = b.getMark("firstbyte"), l.domLoading = b.getMark("firstbyte"), l.domContentLoadedEventStart = b.getMark("domContent"), l.domContentLoadedEventEnd = b.getMark("domContent"), l.loadEventStart = b.getMark("onload"), l.loadEventEnd = b.getMark("onload"), j.timing = s.addPTPres(l, {
						of: l.fetchStart
					}), p = l.loadEventEnd - l.fetchStart), i.push(u("mbi", a.infoself.mockbi)), j.navigation = s.addPN(n, {}), r(j.timing, function(a, b) {
						"of" != a && (0 > b || b > 36e5) && (k = !1)
					}), k && i.push(u("perf", v(j))), i.push(u("xx", a.info.extra)), i.push(u("ua", a.info.userAttributes)), i.push(u("at", a.info.atts)), i.push(u("allTime", p.toString())), a.feelTime && a.feelTime < 36e5 && i.push(u("feeltime", a.feelTime.toString())), m(a, i), p > 0 && k && w({
						url: e(a, "rum") + t.fromArray(i, a.maxBytes),
						jsonp: y
					})
				}
			}
			function e(a, b) {
				{
					var c, d = "browser" == a.info.agentType ? 2 : 1;
					window.BWEUM.aicookie || {}
				}
				return c = a.info.beacon ? a.proto + a.info.beacon.replace("beacon/rum", "beacon/" + b) : a.proto + a.info.beaconUrl + "/" + b + "/" + a.info.agentType, c += "/" + d + "/" + a.info.licenseKey + "/"
			}
			function f(a, b, c) {
				var d = !1;
				return r(A, function(e) {
					if ("resources" != e) {
						var f = g(e, a, b, c);
						f && (d = !0)
					}
				}), d
			}
			function g(a, b, c, d) {
				var e = h(a, c);
				return i(b, a, e.body, e.qs, c, d)
			}
			function h(a, b) {
				for (var c = p({}), d = p({}), e = A[a] || [], f = 0; f < e.length; f++) {
					var g = e[f](b);
					g.body && r(g.body, c), g.qs && r(g.qs, d)
				}
				return {
					body: c(),
					qs: d()
				}
			}
			function i(a, b, c, d, f, g) {
				var h = window.navigator.userAgent;
				if (!a.info.errorBeacon && !a.info.beaconUrl) return !1;
				if (!c) return !1;
				var i, j = e(a, b);
				return j += o(a), d && (j += t.obj(d, a.maxBytes)), f ? i = v(c) : j += t.obj(c, a.maxBytes), c.err && c.err.length && !z && (j += u("pve", "1"), z = !0), j += u("mbi", a.info.mockbi), -1 == h.indexOf("MQQBrowser/5.0") && -1 == h.indexOf("QQ-Manager") && j.length <= 4096 ? w({
					url: j,
					body: i,
					isform: g
				}) : void 0
			}
			function j() {}
			function k(a) {
				return a.info.transactionName ? u("to", encodeURIComponent(a.info.transactionName)) : u("to", "")
			}
			function l(a) {
				return a.infoself.tNamePlain ? u("t", a.infoself.tNamePlain) : u("t", "")
			}
			function m(a, b) {
				var c = window.BWEUM.aicookie || {};
				"browser" == a.info.agentType && c.transactionName && (b.push(u("to", encodeURIComponent(c.transactionName))), b.push(u("aiid", c.applicationID)), b.push(u("ai_key", c.licenseKey)), b.push(u("ai_tier", c.tierName)))
			}
			function n(a, b) {
				var c = A[a] || (A[a] = []);
				c.push(b)
			}
			function o(a) {
				var b = ["?a=" + a.info.applicationID, u("sa", a.info.sa ? "" + a.info.sa : ""), u("pl", "" + a.offset), u("v", x), u("sid", C.getGuid()), k(a), l(a)];
				return a.tpmBrowerInfo && a.tpmBrowerInfo.bT && a.tpmBrowerInfo.bV && (b.push(u("tbt", a.tpmBrowerInfo.bT)), b.push(u("tbv", a.tpmBrowerInfo.bV))), b.push(u("pnet", a.infoself.sysConType)), b.push(u("us", a.info.user || window.apmBiUserLazy || window.apmBiUser)), b.push(u("if", B)), b.join("")
			}
			function p(a) {
				var b = !1;
				return function(c, d) {
					return d && d.length && (a[c] = d, b = !0), b ? a : void 0
				}
			}
			var q = a("single"),
				r = a("map-own"),
				s = a("nav-timing"),
				t = a("encode"),
				u = t.param,
				v = a("stringify"),
				w = a("fetch"),
				x = "415.6.31 ",
				y = window.self === window.parent ? "BWEUM.setToken" : !1,
				z = !1,
				A = {},
				B = 0 == y ? "1" : "0",
				C = a("sessionId");
			b.exports = {
				sendBeacon: q(d),
				sendAll: f,
				pingErrors: j,
				sendX: g,
				on: n,
				_send: i,
				_emit: h
			}
		}, {
			encode: 19,
			fetch: 21,
			"map-own": 44,
			"nav-timing": 23,
			sessionId: 28,
			single: 29,
			stringify: 31
		}],
		29: [function(a, b) {
			function c(a) {
				var b, c = !1;
				return function() {
					return c ? b : (c = !0, b = a.apply(this, d(arguments)))
				}
			}
			var d = a("lodash._slice");
			b.exports = c
		}, {
			"lodash._slice": 43
		}],
		28: [function(a, b) {
			function c() {
				var a = f(h);
				return null !== a && a.indexOf("|") > 1 ? a.split("|")[0] : null
			}
			function d() {
				var a = g(1e4) + "." + g(1e3),
					b = new Date;
				document.cookie = h + "=" + a + "|" + b.getTime() + ";path=/"
			}
			function e() {
				var a, b, c = f(h),
					e = (new Date).getTime();
				null === c ? d() : (a = c.split("|"), b = a[1], (void 0 === b || e - b > 6e4 * window.apmBISessionTime) && d())
			}
			var f = a("cookie"),
				g = a("rand"),
				h = "ONEAPM_BI_sessionid";
			b.exports = {
				getGuid: c,
				plantGuid: e
			}
		}, {
			cookie: 36,
			rand: 24
		}],
		24: [function(a, b) {
			function c(a) {
				var a = (9301 * a + 49297) % 233280;
				return a / 233280
			}
			function d(a) {
				var b = new Date,
					d = b.getTime();
				return Math.ceil(c(d) * a)
			}
			b.exports = d
		}, {}],
		23: [function(a, b) {
			function c(a, b) {
				var c = a.navigationStart;
				return b.of = c, d(a, b)
			}
			function d(a, b) {
				var c = b.of;
				return f(a.navigationStart, c, b, "n"), f(a.unloadEventStart, c, b, "u"), f(a.unloadEventEnd, c, b, "ue"), f(a.domLoading, c, b, "dl"), f(a.domInteractive, c, b, "di"), f(a.domContentLoadedEventStart, c, b, "ds"), f(a.domContentLoadedEventEnd, c, b, "de"), f(a.domComplete, c, b, "dc"), f(a.loadEventStart, c, b, "l"), f(a.loadEventEnd, c, b, "le"), f(a.redirectStart, c, b, "r"), f(a.redirectEnd, c, b, "re"), f(a.fetchStart, c, b, "f"), f(a.domainLookupStart, c, b, "dn"), f(a.domainLookupEnd, c, b, "dne"), f(a.connectStart, c, b, "c"), f(a.connectEnd, c, b, "ce"), f(a.secureConnectionStart, c, b, "s"), f(a.requestStart, c, b, "rq"), f(a.responseStart, c, b, "rp"), f(a.responseEnd, c, b, "rpe"), b
			}
			function e(a, b) {
				return f(a.type, 0, b, "ty"), f(a.redirectCount, 0, b, "rc"), b
			}
			function f(a, b, c, d) {
				"number" == typeof a && a > 0 && (c[d] = Math.round(a - b))
			}
			b.exports = {
				addPT: c,
				addPN: e,
				addPTPres: d
			}
		}, {}],
		21: [function(a, b) {
			function c(a) {
				return a && a.url ? a.jsonp ? c.jsonp(a.url, a.jsonp) : a.body || a.xhr ? a.isform ? c.form(a.url, a.body) : c.xhr(a.url, a.body) : c.img(a.url) : !1
			}
			function d(a, b) {
				var c = document.createElement("iframe"),
					d = "oneapmBi" + e;
				document.body.appendChild(c), c.style.display = "none", c.contentWindow.name = d;
				var f = document.createElement("form");
				f.target = d, f.action = a, f.method = "POST";
				var g = document.createElement("input");
				g.type = "hidden", g.name = "data", g.value = b, f.appendChild(g), c.appendChild(f), f.submit()
			}
			b.exports = c;
			var e = 0;
			c.jsonp = function(a, b) {
				var c = document.createElement("script");
				c.type = "text/javascript", c.src = a + "&jsonp=" + b;
				try {
					c.async = !0
				} catch (d) {}
				return document.body.appendChild(c), c
			}, c.xhr = function(a, b) {
				var c = new window._ApmXMLHttpRequest;
				return c.open("POST", a), c.send(b), c
			}, c.img = function(a) {
				var b = new Image;
				return b.src = a, b
			}, c.form = function(a, b) {
				d(a, b)
			}
		}, {}],
		19: [function(a, b) {
			function c(a) {
				return i[a]
			}
			function d(a) {
				return null === a || void 0 === a ? "null" : encodeURIComponent(a).replace(l, c)
			}
			function e(a, b) {
				for (var c = 0, d = 0; d < a.length; d++) if (c += a[d].length, c > b) return a.slice(0, d).join("");
				return a.join("")
			}
			function f(a, b) {
				var c = 0,
					e = "";
				return h(a, function(a, f) {
					var g, h, i = [];
					if ("string" == typeof f) g = "&" + a + "=" + d(f), c += g.length, e += g;
					else if (f.length) {
						for (c += 9, h = 0; h < f.length && (g = d(j(f[h])), c += g.length, !("undefined" != typeof b && c >= b)); h++) i.push(g);
						e += "&" + a + "=%5B" + i.join(",") + "%5D"
					}
				}), e
			}
			function g(a, b) {
				return b && "string" == typeof b ? "&" + a + "=" + d(b) : ""
			}
			var h = a("map-own"),
				i = {
					"%2C": ",",
					"%3A": ":",
					"%2F": "/",
					"%40": "@",
					"%24": "$",
					"%3B": ";"
				},
				j = a("stringify"),
				k = h(i, function(a) {
					return a
				}),
				l = new RegExp(k.join("|"), "g");
			b.exports = {
				obj: f,
				fromArray: e,
				qs: d,
				param: g
			}
		}, {
			"map-own": 44,
			stringify: 31
		}],
		31: [function(a, b) {
			function c(a) {
				try {
					return e("", {
						"": a
					})
				} catch (b) {
					try {
						g.emit("internal-error", [b])
					} catch (c) {}
				}
			}
			function d(a) {
				return h.lastIndex = 0, h.test(a) ? '"' + a.replace(h, function(a) {
					var b = i[a];
					return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
				}) + '"' : '"' + a + '"'
			}
			function e(a, b) {
				var c = b[a];
				switch (typeof c) {
				case "string":
					return d(c);
				case "number":
					return isFinite(c) ? String(c) : "null";
				case "boolean":
					return String(c);
				case "object":
					if (!c) return "null";
					var g = [];
					if ("[object Array]" === Object.prototype.toString.apply(c)) {
						for (var h = c.length, i = 0; h > i; i += 1) g[i] = e(i, c) || "null";
						return 0 === g.length ? "[]" : "[" + g.join(",") + "]"
					}
					return f(c, function(a) {
						var b = e(a, c);
						b && g.push(d(a) + ":" + b)
					}), 0 === g.length ? "{}" : "{" + g.join(",") + "}"
				}
			}
			var f = a("map-own"),
				g = a("ee"),
				h = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
				i = {
					"\b": "\\b",
					"	": "\\t",
					"\n": "\\n",
					"\f": "\\f",
					"\r": "\\r",
					'"': '\\"',
					"\\": "\\\\"
				};
			b.exports = c
		}, {
			ee: 38,
			"map-own": 44
		}],
		20: [function(a, b) {
			function c(a) {
				var b = a.match(d);
				return b ? b[3] ? b[1] + b[3] : b[1] : null
			}
			b.exports = c;
			var d = /^([^?]+)(\?[^#]*)?(#.*)?$/
		}, {}],
		16: [function(a, b) {
			function c(a) {
				var b, c = 0;
				if (!a || !a.length) return c;
				for (var d = 0; d < a.length; d++) b = a.charCodeAt(d), c = (c << 5) - c + b, c = 0 | c;
				return c
			}
			b.exports = c
		}, {}],
		12: [function(a, b) {
			function c(a, b) {
				return Object.prototype.hasOwnProperty.call(a, b)
			}
			b.exports = function() {
				function a(a) {
					var b = l.exec(String(a.constructor));
					return b && b.length > 1 ? b[1] : "unknown"
				}
				function b(a) {
					return a && a.indexOf("nrWrapper") >= 0
				}
				function d(a) {
					return a ? a.replace(m, "") : null
				}
				function e(c) {
					if (!c.stack) return null;
					for (var e, f, g = /^\s*at (?:((?:\[object object\])?(?:[^(]*\([^)]*\))*[^()]*(?: \[as \S+\])?) )?\(?((?:file|http|https|chrome-extension):.*?)?:(\d+)(?::(\d+))?\)?\s*$/i, h = /^\s*(?:(\S*)(?:\(.*?\))?@)?((?:file|http|https|chrome|safari-extension).*?):(\d+)(?::(\d+))?\s*$/i, i = /^\s*at .+ \(eval at \S+ \((?:(?:file|http|https):[^)]+)?\)(?:, [^:]*:\d+:\d+)?\)$/i, j = /^\s*at Function code \(Function code:\d+:\d+\)\s*/i, k = c.stack.split("\n"), l = [], m = [], n = !1, o = (/^(.*) is undefined$/.exec(c.message), 0), p = k.length; p > o; ++o) {
						if (e = h.exec(k[o])) f = {
							url: e[2],
							func: e[1] || null,
							line: +e[3],
							column: e[4] ? +e[4] : null
						};
						else if (e = g.exec(k[o])) f = {
							url: e[2],
							func: e[1] || null,
							line: +e[3],
							column: e[4] ? +e[4] : null
						}, "Anonymous function" === f.func && (f.func = null);
						else {
							if (!i.exec(k[o]) && !j.exec(k[o]) && "anonymous" !== k[o]) {
								m.push(k[o]);
								continue
							}
							f = {
								func: "evaluated code"
							}
						}
						b(f.func) ? n = !0 : m.push(k[o]), n || l.push(f)
					}
					return l.length ? {
						mode: "stack",
						name: c.name || a(c),
						message: c.message,
						stackString: d(m.join("\n")),
						frames: l
					} : null
				}
				function f(c) {
					for (var e, f = c.stacktrace, g = / line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\(.*\) in (.*):\s*$/i, h = f.split("\n"), i = [], j = [], k = !1, l = 0, m = h.length; m > l; l += 2) if (e = g.exec(h[l])) {
						var n = {
							line: +e[1],
							column: +e[2],
							func: e[3] || e[4],
							url: e[5]
						};
						b(n.func) ? k = !0 : j.push(h[l]), k || i.push(n)
					} else j.push(h[l]);
					return i.length ? {
						mode: "stacktrace",
						name: c.name || a(c),
						message: c.message,
						stackString: d(j.join("\n")),
						frames: i
					} : null
				}
				function g(e) {
					var f = e.message.split("\n");
					if (f.length < 4) return null;
					var g, h, i, j = /^\s*Line (\d+) of linked script ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,
						k = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,
						l = /^\s*Line (\d+) of function script\s*$/i,
						m = [],
						n = [],
						o = document.getElementsByTagName("script"),
						p = [],
						q = !1;
					for (h in o) c(o, h) && !o[h].src && p.push(o[h]);
					for (h = 2, i = f.length; i > h; h += 2) {
						var r = null;
						if (g = j.exec(f[h])) r = {
							url: g[2],
							func: g[3],
							line: +g[1]
						};
						else if (g = k.exec(f[h])) r = {
							url: g[3],
							func: g[4]
						};
						else if (g = l.exec(f[h])) {
							var s = window.location.href.replace(/#.*$/, ""),
								t = g[1];
							r = {
								url: s,
								line: t,
								func: ""
							}
						}
						r && (b(r.func) ? q = !0 : n.push(f[h]), q || m.push(r))
					}
					return m.length ? {
						mode: "multiline",
						name: e.name || a(e),
						message: f[0],
						stackString: d(n.join("\n")),
						frames: m
					} : null
				}
				function h(b) {
					if (!("line" in b)) return null;
					var c = b.name || a(b);
					if (!b.sourceURL) return {
						mode: "sourceline",
						name: c,
						message: b.message,
						stackString: a(b) + ": " + b.message + "\n    in evaluated code",
						frames: [{
							func: "evaluated code"
						}]
					};
					var d = c + ": " + b.message + "\n    at " + b.sourceURL;
					return b.line && (d += ":" + b.line, b.column && (d += ":" + b.column)), {
						mode: "sourceline",
						name: c,
						message: b.message,
						stackString: d,
						frames: [{
							url: b.sourceURL,
							line: b.line,
							column: b.column
						}]
					}
				}
				function i(b) {
					var c = b.name || a(b);
					return c ? {
						mode: "nameonly",
						name: c,
						message: b.message,
						stackString: c + ": " + b.message,
						frames: []
					} : null
				}
				function j(a) {
					var b = null;
					try {
						if (b = f(a)) return b
					} catch (c) {
						if (k) throw c
					}
					try {
						if (b = e(a)) return b
					} catch (c) {
						if (k) throw c
					}
					try {
						if (b = g(a)) return b
					} catch (c) {
						if (k) throw c
					}
					try {
						if (b = h(a)) return b
					} catch (c) {
						if (k) throw c
					}
					try {
						if (b = i(a)) return b
					} catch (c) {
						if (k) throw c
					}
					return {
						mode: "failed",
						stackString: "",
						frames: []
					}
				}
				var k = !1,
					l = /function (.+)\(/,
					m = /^\n+|\n+$/g;
				return j
			}()
		}, {}],
		11: [function(a, b) {
			function c(a) {
				if (a) {
					var b = a.match(d);
					return b ? b[1] : void 0
				}
			}
			var d = /([a-z0-9]+)$/i;
			b.exports = c
		}, {}],
		5: [function(a, b) {
			function c(a, b, c, e) {
				m("bstAgg", [a, b, c, e]), o[a] || (o[a] = {});
				var f = o[a][b];
				return f || (o[a][b] = f = {
					params: c || {}
				}), f.metrics = d(e, f.metrics), f
			}
			function d(a, b) {
				return b || (b = {
					count: 0
				}), b.count += 1, l(a, function(a, c) {
					b[a] = e(c, b[a])
				}), b
			}
			function e(a, b) {
				return b ? (b && !b.c && (b = {
					t: b.t,
					min: b.t,
					max: b.t,
					sos: b.t * b.t,
					c: 1
				}), b.c += 1, b.t += a, b.sos += a * a, a > b.max && (b.max = a), a < b.min && (b.min = a), b) : {
					t: a
				}
			}
			function f(a, b) {
				return b ? o[a] && o[a][b] : o[a]
			}
			function g(a) {
				for (var b, c = {}, d = "", e = 0; e < a.length; e++) d = a[e], c[d] = h(o[d]), c[d].length && (b = !0), delete o[d];
				return b ? c : null
			}
			function h(a) {
				return "object" != typeof a ? [] : l(a, function(a, b) {
					return b
				})
			}
			function i(a, b) {
				"undefined" == typeof b && (b = (new Date).getTime()), p[a] = b
			}
			function j(a) {
				return p[a]
			}
			function k(a, b, d) {
				var e = p[b],
					f = p[d];
				"undefined" != typeof e && "undefined" != typeof f && c("measures", a, {
					value: f - e
				})
			}
			var l = a("map-own"),
				m = a("handle"),
				n = a("register-handler"),
				o = {},
				p = {};
			b.exports = {
				store: c,
				take: g,
				get: f,
				mark: i,
				measure: k,
				getMark: j
			}, setTimeout(function() {
				n("bstAgg", function() {})
			}, 1e4)
		}, {
			handle: 40,
			"map-own": 44,
			"register-handler": 25
		}],
		25: [function(a, b) {
			function c(a, b) {
				if (d.listeners(a).length) return !1;
				d.on(a, b);
				var c = d.q[a];
				if (c) {
					for (var e = 0; e < c.length; e++) d.emit(a, c[e]);
					delete d.q[a]
				}
				return !0
			}
			var d = a("handle").ee;
			b.exports = c
		}, {
			handle: 40
		}]
	}, {}, [2])
}();
