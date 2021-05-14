// Copyright 2012 Google Inc. All rights reserved.
(function() {

	var data = {
		"resource": {
			"version": "1",

			"macros": [{
				"function": "__e"
			}, {
				"function": "__cid"
			}],
			"tags": [{
				"function": "__rep",
				"once_per_event": true,
				"vtp_containerId": ["macro", 1],
				"tag_id": 1
			}],
			"predicates": [{
				"function": "_eq",
				"arg0": ["macro", 0],
				"arg1": "gtm.js"
			}],
			"rules": [
				[
					["if", 0],
					["add", 0]
				]
			]
		},
		"runtime": []




	};
	/*

	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/
	var aa, ba = "function" == typeof Object.create ? Object.create : function(a) {
			var b = function() {};
			b.prototype = a;
			return new b
		},
		ca;
	if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
	else {
		var da;
		a: {
			var ea = {
					Lf: !0
				},
				fa = {};
			try {
				fa.__proto__ = ea;
				da = fa.Lf;
				break a
			} catch (a) {}
			da = !1
		}
		ca = da ? function(a, b) {
			a.__proto__ = b;
			if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
			return a
		} : null
	}
	var ha = ca,
		ia = this || self,
		ja = /^[\w+/_-]+[=]{0,2}$/,
		ka = null;
	var ma = function() {},
		na = function(a) {
			return "function" == typeof a
		},
		g = function(a) {
			return "string" == typeof a
		},
		oa = function(a) {
			return "number" == typeof a && !isNaN(a)
		},
		pa = function(a) {
			return "[object Array]" == Object.prototype.toString.call(Object(a))
		},
		qa = function(a, b) {
			if (Array.prototype.indexOf) {
				var c = a.indexOf(b);
				return "number" == typeof c ? c : -1
			}
			for (var d = 0; d < a.length; d++)
				if (a[d] === b) return d;
			return -1
		},
		sa = function(a, b) {
			if (a && pa(a))
				for (var c = 0; c < a.length; c++)
					if (a[c] && b(a[c])) return a[c]
		},
		va = function(a, b) {
			if (!oa(a) ||
				!oa(b) || a > b) a = 0, b = 2147483647;
			return Math.floor(Math.random() * (b - a + 1) + a)
		},
		xa = function(a, b) {
			for (var c = new wa, d = 0; d < a.length; d++) c.set(a[d], !0);
			for (var e = 0; e < b.length; e++)
				if (c.get(b[e])) return !0;
			return !1
		},
		ya = function(a, b) {
			for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
		},
		Aa = function(a) {
			return Math.round(Number(a)) || 0
		},
		Ca = function(a) {
			return "false" == String(a).toLowerCase() ? !1 : !!a
		},
		Da = function(a) {
			var b = [];
			if (pa(a))
				for (var c = 0; c < a.length; c++) b.push(String(a[c]));
			return b
		},
		Ea = function(a) {
			return a ?
				a.replace(/^\s+|\s+$/g, "") : ""
		},
		Fa = function() {
			return (new Date).getTime()
		},
		wa = function() {
			this.prefix = "gtm.";
			this.values = {}
		};
	wa.prototype.set = function(a, b) {
		this.values[this.prefix + a] = b
	};
	wa.prototype.get = function(a) {
		return this.values[this.prefix + a]
	};
	var Ha = function(a, b, c) {
			return a && a.hasOwnProperty(b) ? a[b] : c
		},
		Ia = function(a) {
			var b = !1;
			return function() {
				if (!b) try {
					a()
				} catch (c) {}
				b = !0
			}
		},
		Ja = function(a, b) {
			for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
		},
		Ka = function(a) {
			for (var b in a)
				if (a.hasOwnProperty(b)) return !0;
			return !1
		},
		La = function(a, b) {
			for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
			return c
		},
		Ma = function(a, b) {
			for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
			d[e[e.length - 1]] = b;
			return c
		},
		Oa = function(a) {
			var b = [];
			ya(a, function(c, d) {
				10 > c.length && d && b.push(c)
			});
			return b.join(",")
		};
	/*
	 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
	var Pa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
		Qa = function(a) {
			if (null == a) return String(a);
			var b = Pa.exec(Object.prototype.toString.call(Object(a)));
			return b ? b[1].toLowerCase() : "object"
		},
		Sa = function(a, b) {
			return Object.prototype.hasOwnProperty.call(Object(a), b)
		},
		Ta = function(a) {
			if (!a || "object" != Qa(a) || a.nodeType || a == a.window) return !1;
			try {
				if (a.constructor && !Sa(a, "constructor") && !Sa(a.constructor.prototype, "isPrototypeOf"))
				return !1
			} catch (c) {
				return !1
			}
			for (var b in a);
			return void 0 ===
				b || Sa(a, b)
		},
		n = function(a, b) {
			var c = b || ("array" == Qa(a) ? [] : {}),
				d;
			for (d in a)
				if (Sa(a, d)) {
					var e = a[d];
					"array" == Qa(e) ? ("array" != Qa(c[d]) && (c[d] = []), c[d] = n(e, c[d])) : Ta(e) ? (Ta(c[
						d]) || (c[d] = {}), c[d] = n(e, c[d])) : c[d] = e
				} return c
		};
	var qb;
	var rb = [],
		sb = [],
		tb = [],
		ub = [],
		vb = [],
		wb = {},
		xb, yb, zb, Ab = function(a, b) {
			var c = {};
			c["function"] = "__" + a;
			for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
			return c
		},
		Bb = function(a, b) {
			var c = a["function"];
			if (!c) throw Error("Error: No function name given for function call.");
			var d = wb[c],
				e = {},
				f;
			for (f in a) a.hasOwnProperty(f) && 0 === f.indexOf("vtp_") && (e[void 0 !== d ? f : f.substr(4)] = a[
				f]);
			return void 0 !== d ? d(e) : qb(c, e, b)
		},
		Eb = function(a, b, c) {
			c = c || [];
			var d = {},
				e;
			for (e in a) a.hasOwnProperty(e) && (d[e] = Cb(a[e], b, c));
			return d
		},
		Fb = function(a) {
			var b = a["function"];
			if (!b) throw "Error: No function name given for function call.";
			var c = wb[b];
			return c ? c.priorityOverride || 0 : 0
		},
		Cb = function(a, b, c) {
			if (pa(a)) {
				var d;
				switch (a[0]) {
					case "function_id":
						return a[1];
					case "list":
						d = [];
						for (var e = 1; e < a.length; e++) d.push(Cb(a[e], b, c));
						return d;
					case "macro":
						var f = a[1];
						if (c[f]) return;
						var h = rb[f];
						if (!h || b.Zc(h)) return;
						c[f] = !0;
						try {
							var k = Eb(h, b, c);
							k.vtp_gtmEventId = b.id;
							d = Bb(k, b);
							zb && (d = zb.kg(d, k))
						} catch (x) {
							b.Fe && b.Fe(x, Number(f)), d = !1
						}
						c[f] = !1;
						return d;
					case "map":
						d = {};
						for (var l = 1; l < a.length; l += 2) d[Cb(a[l], b, c)] = Cb(a[l + 1], b, c);
						return d;
					case "template":
						d = [];
						for (var m = !1, p = 1; p < a.length; p++) {
							var r = Cb(a[p], b, c);
							yb && (m = m || r === yb.Kb);
							d.push(r)
						}
						return yb && m ? yb.ng(d) : d.join("");
					case "escape":
						d = Cb(a[1], b, c);
						if (yb && pa(a[1]) && "macro" === a[1][0] && yb.Lg(a)) return yb.bh(d);
						d = String(d);
						for (var t = 2; t < a.length; t++) Ua[a[t]] && (d = Ua[a[t]](d));
						return d;
					case "tag":
						var q = a[1];
						if (!ub[q]) throw Error("Unable to resolve tag reference " + q + ".");
						return d = {
							se: a[2],
							index: q
						};
					case "zb":
						var u = {
							arg0: a[2],
							arg1: a[3],
							ignore_case: a[5]
						};
						u["function"] = a[1];
						var w = Gb(u, b, c),
							v = !!a[4];
						return v || 2 !== w ? v !== (1 === w) : null;
					default:
						throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
				}
			}
			return a
		},
		Gb = function(a, b, c) {
			try {
				return xb(Eb(a, b, c))
			} catch (d) {
				JSON.stringify(a)
			}
			return 2
		};
	var Hb = function() {
		var a = function(b) {
			return {
				toString: function() {
					return b
				}
			}
		};
		return {
			Cd: a("convert_case_to"),
			Dd: a("convert_false_to"),
			Ed: a("convert_null_to"),
			Fd: a("convert_true_to"),
			Gd: a("convert_undefined_to"),
			Hh: a("debug_mode_metadata"),
			wa: a("function"),
			jf: a("instance_name"),
			pf: a("live_only"),
			rf: a("malware_disabled"),
			sf: a("metadata"),
			Ih: a("original_vendor_template_id"),
			wf: a("once_per_event"),
			Md: a("once_per_load"),
			Ud: a("setup_tags"),
			Wd: a("tag_id"),
			Xd: a("teardown_tags")
		}
	}();
	var Ib = null,
		Lb = function(a) {
			function b(r) {
				for (var t = 0; t < r.length; t++) d[r[t]] = !0
			}
			var c = [],
				d = [];
			Ib = Jb(a);
			for (var e = 0; e < sb.length; e++) {
				var f = sb[e],
					h = Kb(f);
				if (h) {
					for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
					b(f.block || [])
				} else null === h && b(f.block || [])
			}
			for (var m = [], p = 0; p < ub.length; p++) c[p] && !d[p] && (m[p] = !0);
			return m
		},
		Kb = function(a) {
			for (var b = a["if"] || [], c = 0; c < b.length; c++) {
				var d = Ib(b[c]);
				if (0 === d) return !1;
				if (2 === d) return null
			}
			for (var e = a.unless || [], f = 0; f < e.length; f++) {
				var h = Ib(e[f]);
				if (2 === h) return null;
				if (1 === h) return !1
			}
			return !0
		},
		Jb = function(a) {
			var b = [];
			return function(c) {
				void 0 === b[c] && (b[c] = Gb(tb[c], a));
				return b[c]
			}
		};
	/*
	 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
	var C = {
		ab: "_ee",
		Lc: "_syn",
		Kh: "_uei",
		Ac: "event_callback",
		Jb: "event_timeout",
		I: "gtag.config",
		fa: "allow_ad_personalization_signals",
		Bc: "restricted_data_processing",
		Za: "allow_google_signals",
		ia: "cookie_expires",
		Ib: "cookie_update",
		$a: "session_duration",
		ka: "user_properties",
		va: "transport_url",
		N: "ads_data_redaction"
	};
	C.xd = "page_view";
	C.Gh = "user_engagement";
	C.na = "purchase";
	C.Zb = "refund";
	C.fb = "begin_checkout";
	C.Vb = "add_to_cart";
	C.Xb = "remove_from_cart";
	C.yh = "view_cart";
	C.Nd = "add_to_wishlist";
	C.Ia = "view_item";
	C.Fh = "view_promotion";
	C.Eh = "select_promotion";
	C.Ah = "select_item";
	C.wd = "view_item_list";
	C.Kd = "add_payment_info";
	C.xh = "add_shipping_info";
	C.Ye = "allow_custom_scripts";
	C.$e = "allow_display_features";
	C.af = "allow_enhanced_conversions";
	C.he = "enhanced_conversions";
	C.$b = "client_id";
	C.Y = "cookie_domain";
	C.ac = "cookie_name";
	C.La = "cookie_path";
	C.ca = "cookie_flags";
	C.ja = "currency";
	C.bc = "custom_params";
	C.ce = "custom_map";
	C.Cc = "groups";
	C.Ma = "language";
	C.df = "country";
	C.Mh = "non_interaction";
	C.kb = "page_location";
	C.lb = "page_referrer";
	C.Ec = "page_title";
	C.mb = "send_page_view";
	C.ya = "send_to";
	C.Fc = "session_engaged";
	C.fc = "session_id";
	C.Gc = "session_number";
	C.Hf = "tracking_id";
	C.xa = "linker";
	C.ob = "url_passthrough";
	C.hb = "accept_incoming";
	C.L = "domains";
	C.jb = "url_position";
	C.ib = "decorate_forms";
	C.ye = "phone_conversion_number";
	C.qe = "phone_conversion_callback";
	C.xe = "phone_conversion_css_class";
	C.Ae = "phone_conversion_options";
	C.Bf = "phone_conversion_ids";
	C.Af = "phone_conversion_country_code";
	C.Pd = "aw_remarketing";
	C.Qd = "aw_remarketing_only";
	C.da = "value";
	C.Df = "quantity";
	C.hf = "affiliation";
	C.Ad = "tax";
	C.nf = "shipping";
	C.wc = "list_name";
	C.fe = "checkout_step";
	C.ee = "checkout_option";
	C.kf = "coupon";
	C.lf = "promotions";
	C.nb = "transaction_id";
	C.rb = "user_id";
	C.Ka = "conversion_linker";
	C.Ja = "conversion_cookie_prefix";
	C.Z = "cookie_prefix";
	C.T = "items";
	C.$d = "aw_merchant_id";
	C.Vd =
		"aw_feed_country";
	C.Zd = "aw_feed_language";
	C.Td = "discount";
	C.de = "disable_merchant_reported_purchases";
	C.ke = "new_customer";
	C.be = "customer_lifetime_value";
	C.ff = "dc_natural_search";
	C.ef = "dc_custom_params";
	C.If = "trip_type";
	C.pe = "passengers";
	C.yf = "method";
	C.Gf = "search_term";
	C.cf = "content_type";
	C.zf = "optimize_id";
	C.qf = "experiments";
	C.gb = "google_signals";
	C.zc = "google_tld";
	C.jc = "update";
	C.yc = "firebase_id";
	C.cc = "ga_restrict_domain";
	C.xc = "event_settings";
	C.yd = "dynamic_event_settings";
	C.Ef = "screen_name";
	C.uf =
		"_x_19";
	C.tf = "_x_20";
	C.Ee = [C.fa, C.Za, C.Bc, C.Y, C.ia, C.ca, C.ac, C.La, C.Z, C.Ib, C.ce, C.bc, C.yd, C.Ac, C.xc, C.Jb, C.cc, C
		.gb, C.zc, C.Cc, C.xa, C.ya, C.mb, C.$a, C.jc, C.ka, C.va
	];
	C.Ee.push(C.T);
	C.Be = [C.kb, C.lb, C.Ec, C.Ma, C.Ef, C.rb, C.yc];
	C.Jf = [C.na, C.Zb, C.fb, C.Vb, C.Xb, C.yh, C.Nd, C.Ia, C.Fh, C.Eh, C.wd, C.Ah, C.Kd, C.xh];
	C.Jd = [C.ya, C.Pd, C.Qd, C.bc, C.mb, C.Ma, C.da, C.ja, C.nb, C.rb, C.Ka, C.Ja, C.Z, C.Y, C.ia, C.ca, C.kb, C
		.lb, C.ye, C.qe, C.xe, C.Ae,
		C.T, C.$d, C.Vd, C.Zd, C.Td, C.de, C.ke, C.be, C.fa, C.Bc, C.jc, C.yc, C.he, C.va, C.ob
	];
	C.Ce = [C.fa, C.Za, C.Ib];
	C.Ge = [C.ia, C.Jb, C.$a];
	var E = window,
		F = document,
		fc = navigator,
		gc = F.currentScript && F.currentScript.src,
		hc = function(a, b) {
			var c = E[a];
			E[a] = void 0 === c ? b : c;
			return E[a]
		},
		ic = function(a, b) {
			b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
				a.readyState in {
					loaded: 1,
					complete: 1
				} && (a.onreadystatechange = null, b())
			})
		},
		jc = function(a, b, c) {
			var d = F.createElement("script");
			d.type = "text/javascript";
			d.async = !0;
			d.src = a;
			ic(d, b);
			c && (d.onerror = c);
			var e;
			if (null === ka) b: {
				var f = ia.document,
					h = f.querySelector && f.querySelector("script[nonce]");
				if (h) {
					var k = h.nonce || h.getAttribute("nonce");
					if (k && ja.test(k)) {
						ka = k;
						break b
					}
				}
				ka = ""
			}
			e = ka;
			e && d.setAttribute("nonce", e);
			var l = F.getElementsByTagName("script")[0] || F.body || F.head;
			l.parentNode.insertBefore(d, l);
			return d
		},
		kc = function() {
			if (gc) {
				var a = gc.toLowerCase();
				if (0 === a.indexOf("https://")) return 2;
				if (0 === a.indexOf("http://")) return 3
			}
			return 1
		},
		lc = function(a, b) {
			var c = F.createElement("iframe");
			c.height = "0";
			c.width = "0";
			c.style.display = "none";
			c.style.visibility = "hidden";
			var d = F.body && F.body.lastChild ||
				F.body || F.head;
			d.parentNode.insertBefore(c, d);
			ic(c, b);
			void 0 !== a && (c.src = a);
			return c
		},
		mc = function(a, b, c) {
			var d = new Image(1, 1);
			d.onload = function() {
				d.onload = null;
				b && b()
			};
			d.onerror = function() {
				d.onerror = null;
				c && c()
			};
			d.src = a;
			return d
		},
		nc = function(a, b, c, d) {
			a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
		},
		oc = function(a, b, c) {
			a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
		},
		G = function(a) {
			E.setTimeout(a, 0)
		},
		pc = function(a, b) {
			return a &&
				b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
		},
		qc = function(a) {
			var b = a.innerText || a.textContent || "";
			b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
			b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
			return b
		},
		rc = function(a) {
			var b = F.createElement("div");
			b.innerHTML = "A<div>" + a + "</div>";
			b = b.lastChild;
			for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
			return c
		},
		sc = function(a, b, c) {
			c = c || 100;
			for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
			for (var f = a, h = 0; f && h <= c; h++) {
				if (d[String(f.tagName).toLowerCase()]) return f;
				f = f.parentElement
			}
			return null
		},
		tc = function(a) {
			fc.sendBeacon && fc.sendBeacon(a) || mc(a)
		},
		uc = function(a, b) {
			var c = a[b];
			c && "string" === typeof c.animVal && (c = c.animVal);
			return c
		};
	var vc = {},
		I = function(a, b) {
			vc[a] = vc[a] || [];
			vc[a][b] = !0
		},
		wc = function(a) {
			for (var b = [], c = vc[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d %
			6);
			for (var e = 0; e < b.length; e++) b[e] =
				"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
			return b.join("")
		};
	var xc = [];

	function yc() {
		var a = hc("google_tag_data", {});
		a.ics || (a.ics = {
			entries: {},
			set: zc,
			update: Ac,
			addListener: Bc,
			notifyListeners: Dc,
			active: !1
		});
		return a.ics
	}

	function zc(a, b, c, d, e, f) {
		var h = yc();
		h.active = !0;
		if (void 0 != b) {
			var k = h.entries,
				l = k[a] || {},
				m = l.region,
				p = c && g(c) ? c.toUpperCase() : void 0;
			d = d.toUpperCase();
			e = e.toUpperCase();
			if (p === e || (p === d ? m !== e : !p && !m)) {
				var r = !!(f && 0 < f && void 0 === l.update),
					t = {
						region: p,
						initial: "granted" === b,
						update: l.update,
						quiet: r
					};
				k[a] = t;
				r && E.setTimeout(function() {
					k[a] === t && t.quiet && (t.quiet = !1, Ec(a), Dc(), I("TAGGING", 2))
				}, f)
			}
		}
	}

	function Ac(a, b) {
		var c = yc();
		c.active = !0;
		if (void 0 != b) {
			var d = Fc(a),
				e = c.entries,
				f = e[a] = e[a] || {};
			f.update = "granted" === b;
			var h = Fc(a);
			f.quiet ? (f.quiet = !1, Ec(a)) : h !== d && Ec(a)
		}
	}

	function Bc(a, b) {
		xc.push({
			me: a,
			xg: b
		})
	}

	function Ec(a) {
		for (var b = 0; b < xc.length; ++b) {
			var c = xc[b];
			pa(c.me) && -1 !== c.me.indexOf(a) && (c.Ne = !0)
		}
	}

	function Dc() {
		for (var a = 0; a < xc.length; ++a) {
			var b = xc[a];
			if (b.Ne) {
				b.Ne = !1;
				try {
					b.xg.call()
				} catch (c) {}
			}
		}
	}
	var Fc = function(a) {
			var b = yc().entries[a] || {};
			return void 0 !== b.update ? b.update : void 0 !== b.initial ? b.initial : void 0
		},
		Gc = function(a) {
			return !(yc().entries[a] || {}).quiet
		},
		Hc = function() {
			return yc().active
		},
		Ic = function(a, b) {
			yc().addListener(a, b)
		},
		Jc = function(a, b) {
			function c() {
				for (var e = 0; e < b.length; e++)
					if (!Gc(b[e])) return !0;
				return !1
			}
			if (c()) {
				var d = !1;
				Ic(b, function() {
					d || c() || (d = !0, a())
				})
			} else a()
		},
		Kc = function(a, b) {
			if (!1 === Fc(b)) {
				var c = !1;
				Ic([b], function() {
					!c && Fc(b) && (a(), c = !0)
				})
			}
		};
	var Lc = [C.o, C.H],
		Mc = function(a) {
			var b = a[C.oh];
			b && I("GTM", 40);
			var c = a[C.uh];
			c && I("GTM", 41);
			for (var d = pa(b) ? b : [b], e = 0; e < d.length; ++e)
				for (var f = 0; f < Lc.length; f++) {
					var h = Lc[f],
						k = a[Lc[f]],
						l = d[e];
					yc().set(h, k, l, "CN", "CN-11", c)
				}
		},
		Nc = function(a) {
			for (var b = 0; b < Lc.length; b++) {
				var c = Lc[b],
					d = a[Lc[b]];
				yc().update(c, d)
			}
			yc().notifyListeners()
		},
		Oc = function(a) {
			var b = Fc(a);
			return void 0 != b ? b : !0
		},
		Pc = function() {
			for (var a = [], b = 0; b < Lc.length; b++) {
				var c = Fc(Lc[b]);
				a[b] = !0 === c ? "1" : !1 === c ? "0" : "-"
			}
			return "G1" +
				a.join("")
		},
		Qc = function(a) {
			Kc(a, C.o)
		},
		Rc = function(a, b) {
			Jc(a, b)
		};
	var Tc = function(a) {
			return Sc ? F.querySelectorAll(a) : null
		},
		Uc = function(a, b) {
			if (!Sc) return null;
			if (Element.prototype.closest) try {
				return a.closest(b)
			} catch (e) {
				return null
			}
			var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype
				.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
				d = a;
			if (!F.documentElement.contains(d)) return null;
			do {
				try {
					if (c.call(d, b)) return d
				} catch (e) {
					break
				}
				d = d.parentElement || d.parentNode
			} while (null !== d && 1 === d.nodeType);
			return null
		},
		Vc = !1;
	if (F.querySelectorAll) try {
		var Wc = F.querySelectorAll(":root");
		Wc && 1 == Wc.length && Wc[0] == F.documentElement && (Vc = !0)
	} catch (a) {}
	var Sc = Vc;
	var jd = {},
		kd = null,
		ld = Math.random();
	jd.s = "UA-93920714-4";
	jd.Ob = "5r0";
	jd.Ld = "";
	var md = {
			__cl: !0,
			__ecl: !0,
			__ehl: !0,
			__evl: !0,
			__fal: !0,
			__fil: !0,
			__fsl: !0,
			__hl: !0,
			__jel: !0,
			__lcl: !0,
			__sdl: !0,
			__tl: !0,
			__ytl: !0,
			__paused: !0,
			__tg: !0
		},
		od = "www.googletagmanager.com/gtm.js";
	od = "www.googletagmanager.com/gtag/js";
	var pd = od,
		qd = null,
		rd = null,
		sd = null,
		td = "//www.googletagmanager.com/a?id=" + jd.s + "&cv=1",
		ud = {},
		vd = {},
		wd = function() {
			var a = kd.sequence || 0;
			kd.sequence = a + 1;
			return a
		};
	var xd = function() {
			return "&tc=" + ub.filter(function(a) {
				return a
			}).length
		},
		Ad = function() {
			yd || (yd = E.setTimeout(zd, 500))
		},
		zd = function() {
			yd && (E.clearTimeout(yd), yd = void 0);
			void 0 === Bd || Cd[Bd] && !Dd && !Ed || (Fd[Bd] || Gd.Ng() || 0 >= Hd-- ? (I("GTM", 1), Fd[Bd] = !0) :
				(Gd.jh(), mc(Id()), Cd[Bd] = !0, Jd = Kd = Ed = Dd = ""))
		},
		Id = function() {
			var a = Bd;
			if (void 0 === a) return "";
			var b = wc("GTM"),
				c = wc("TAGGING");
			return [Ld, Cd[a] ? "" : "&es=1", Md[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", xd(), Dd, Ed, Kd, Jd,
				"&z=0"
			].join("")
		},
		Nd = function() {
			return [td, "&v=3&t=t", "&pid=" +
				va(), "&rv=" + jd.Ob
			].join("")
		},
		Od = "0.005000" > Math.random(),
		Ld = Nd(),
		Pd = function() {
			Ld = Nd()
		},
		Cd = {},
		Dd = "",
		Ed = "",
		Jd = "",
		Kd = "",
		Bd = void 0,
		Md = {},
		Fd = {},
		yd = void 0,
		Gd = function(a, b) {
			var c = 0,
				d = 0;
			return {
				Ng: function() {
					if (c < a) return !1;
					Fa() - d >= b && (c = 0);
					return c >= a
				},
				jh: function() {
					Fa() - d >= b && (c = 0);
					c++;
					d = Fa()
				}
			}
		}(2, 1E3),
		Hd = 1E3,
		Qd = function(a, b) {
			if (Od && !Fd[a] && Bd !== a) {
				zd();
				Bd = a;
				Jd = Dd = "";
				var c;
				c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
				Md[a] = "&e=" + c + "&eid=" + a;
				Ad()
			}
		},
		Rd = function(a, b, c) {
			if (Od && !Fd[a] &&
				b) {
				a !== Bd && (zd(), Bd = a);
				var d, e = String(b[Hb.wa] || "").replace(/_/g, "");
				0 === e.indexOf("cvt") && (e = "cvt");
				d = e;
				var f = c + d;
				Dd = Dd ? Dd + "." + f : "&tr=" + f;
				var h = b["function"];
				if (!h) throw Error("Error: No function name given for function call.");
				var k = (wb[h] ? "1" : "2") + d;
				Jd = Jd ? Jd + "." + k : "&ti=" + k;
				Ad();
				2022 <= Id().length && zd()
			}
		},
		Sd = function(a, b, c) {
			if (Od && !Fd[a]) {
				a !== Bd && (zd(), Bd = a);
				var d = c + b;
				Ed = Ed ? Ed +
					"." + d : "&epr=" + d;
				Ad();
				2022 <= Id().length && zd()
			}
		};
	var Td = {},
		Ud = new wa,
		Vd = {},
		Wd = {},
		Zd = {
			name: "dataLayer",
			set: function(a, b) {
				n(Ma(a, b), Vd);
				Xd()
			},
			get: function(a) {
				return Yd(a, 2)
			},
			reset: function() {
				Ud = new wa;
				Vd = {};
				Xd()
			}
		},
		Yd = function(a, b) {
			if (2 != b) {
				var c = Ud.get(a);
				if (Od) {
					var d = $d(a);
					c !== d && I("GTM", 5)
				}
				return c
			}
			return $d(a)
		},
		$d = function(a) {
			var b = a.split("."),
				c = !1,
				d = void 0;
			var e = function(f, h) {
				for (var k = 0; void 0 !== f && k < b.length; k++) {
					if (null === f) return !1;
					f = f[b[k]]
				}
				var l;
				if (void 0 !== f || 1 < k) l = f;
				else {
					var m;
					if (h.length) {
						var p;
						var r =
							h.pop();
						if (r) {
							var t = ae(["gtag", "targets", r]);
							p = Ta(t) ? t : void 0
						} else p = void 0;
						m = e(p, h)
					} else m = ae(b);
					l = m
				}
				return l
			};
			c = !0;
			d = e(Vd.eventModel, [void 0, void 0]);
			return c ? d : ae(b)
		},
		ae = function(a) {
			for (var b = Vd, c = 0; c < a.length; c++) {
				if (null === b) return !1;
				if (void 0 === b) break;
				b = b[a[c]]
			}
			return b
		};
	var be = function(a, b) {
			Wd.hasOwnProperty(a) || (Ud.set(a, b), n(Ma(a, b), Vd), Xd())
		},
		Xd = function(a) {
			ya(Wd, function(b, c) {
				Ud.set(b, c);
				n(Ma(b, void 0), Vd);
				n(Ma(b, c), Vd);
				a && delete Wd[b]
			})
		},
		ce = function(a, b, c) {
			Td[a] = Td[a] || {};
			var d = 1 !== c ? $d(b) : Ud.get(b);
			"array" === Qa(d) || "object" === Qa(d) ? Td[a][b] = n(d) : Td[a][b] = d
		},
		de = function(a, b) {
			if (Td[a]) return Td[a][b]
		},
		ee = function(a, b) {
			Td[a] && delete Td[a][b]
		};
	var he = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
	var ie = /:[0-9]+$/,
		je = function(a, b, c) {
			for (var d = a.split("&"), e = 0; e < d.length; e++) {
				var f = d[e].split("=");
				if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
					var h = f.slice(1).join("=");
					return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
				}
			}
		},
		me = function(a, b, c, d, e) {
			b && (b = String(b).toLowerCase());
			if ("protocol" === b || "port" === b) a.protocol = ke(a.protocol) || ke(E.location.protocol);
			"port" === b ? a.port = String(Number(a.hostname ? a.port : E.location.port) || ("http" == a.protocol ?
					80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
				(a.hostname = (a.hostname || E.location.hostname).replace(ie, "").toLowerCase());
			return le(a, b, c, d, e)
		},
		le = function(a, b, c, d, e) {
			var f, h = ke(a.protocol);
			b && (b = String(b).toLowerCase());
			switch (b) {
				case "url_no_fragment":
					f = ne(a);
					break;
				case "protocol":
					f = h;
					break;
				case "host":
					f = a.hostname.replace(ie, "").toLowerCase();
					if (c) {
						var k = /^www\d*\./.exec(f);
						k && k[0] && (f = f.substr(k[0].length))
					}
					break;
				case "port":
					f = String(Number(a.port) || ("http" == h ? 80 : "https" == h ? 443 : ""));
					break;
				case "path":
					a.pathname || a.hostname || I("TAGGING", 1);
					f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
					var l = f.split("/");
					0 <= qa(d || [], l[l.length - 1]) && (l[l.length - 1] = "");
					f = l.join("/");
					break;
				case "query":
					f = a.search.replace("?", "");
					e && (f = je(f, e, void 0));
					break;
				case "extension":
					var m = a.pathname.split(".");
					f = 1 < m.length ? m[m.length - 1] : "";
					f = f.split("/")[0];
					break;
				case "fragment":
					f = a.hash.replace("#", "");
					break;
				default:
					f = a && a.href
			}
			return f
		},
		ke = function(a) {
			return a ? a.replace(":", "").toLowerCase() : ""
		},
		ne = function(a) {
			var b = "";
			if (a && a.href) {
				var c = a.href.indexOf("#");
				b = 0 > c ? a.href : a.href.substr(0, c)
			}
			return b
		},
		oe = function(a) {
			var b = F.createElement("a");
			a && (b.href = a);
			var c = b.pathname;
			"/" !== c[0] && (a || I("TAGGING", 1), c = "/" + c);
			var d = b.hostname.replace(ie, "");
			return {
				href: b.href,
				protocol: b.protocol,
				host: b.host,
				hostname: d,
				pathname: c,
				search: b.search,
				hash: b.hash,
				port: b.port
			}
		},
		pe = function(a) {
			function b(m) {
				var p = m.split("=")[0];
				return 0 > d.indexOf(p) ? m : p + "=0"
			}

			function c(m) {
				return m.split("&").map(b).filter(function(p) {
					return void 0 != p
				}).join("&")
			}
			var d = "gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
				e = oe(a),
				f = a.split(/[?#]/)[0],
				h = e.search,
				k = e.hash;
			"?" === h[0] && (h = h.substring(1));
			"#" === k[0] && (k = k.substring(1));
			h = c(h);
			k = c(k);
			"" !== h && (h = "?" + h);
			"" !== k && (k = "#" + k);
			var l = "" + f + h + k;
			"/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
			return l
		};

	function qe(a, b, c) {
		for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
			var h = e[f].split("="),
				k = h[0].replace(/^\s*|\s*$/g, "");
			if (k && k == a) {
				var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
				l && c && (l = decodeURIComponent(l));
				d.push(l)
			}
		}
		return d
	};
	var re = {},
		se = function(a) {
			return void 0 == re[a] ? !1 : re[a]
		};
	var ue = function(a, b, c, d) {
			return te(d) ? qe(a, String(b || document.cookie), c) : []
		},
		xe = function(a, b, c, d, e) {
			if (te(e)) {
				var f = ve(a, d, e);
				if (1 === f.length) return f[0].id;
				if (0 !== f.length) {
					f = we(f, function(h) {
						return h.Tb
					}, b);
					if (1 === f.length) return f[0].id;
					f = we(f, function(h) {
						return h.yb
					}, c);
					return f[0] ? f[0].id : void 0
				}
			}
		};

	function ye(a, b, c, d) {
		var e = document.cookie;
		document.cookie = a;
		var f = document.cookie;
		return e != f || void 0 != c && 0 <= ue(b, f, !1, d).indexOf(c)
	}
	var Ce = function(a, b, c) {
			function d(q, u, w) {
				if (null == w) return delete h[u], q;
				h[u] = w;
				return q + "; " + u + "=" + w
			}

			function e(q, u) {
				if (null == u) return delete h[u], q;
				h[u] = !0;
				return q + "; " + u
			}
			if (!te(c.Ca)) return 2;
			var f;
			void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b =
				encodeURIComponent(b)), b = ze(b), f = a + "=" + b);
			var h = {};
			f = d(f, "path", c.path);
			var k;
			c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
			f = d(f, "expires", k);
			f = d(f, "max-age", c.Uh);
			f = d(f, "samesite",
				c.Zh);
			c.$h && (f = e(f, "secure"));
			f = e(f, c.flags);
			var l = c.domain;
			if ("auto" === l) {
				for (var m = Ae(), p = 0; p < m.length; ++p) {
					var r = "none" !== m[p] ? m[p] : void 0,
						t = d(f, "domain", r);
					if (!Be(r, c.path) && ye(t, a, b, c.Ca)) return 0
				}
				return 1
			}
			l && "none" !== l && (f = d(f, "domain", l));
			return Be(l, c.path) ? 1 : ye(f, a, b, c.Ca) ? 0 : 1
		},
		De = function(a, b, c) {
			null == c.path && (c.path = "/");
			c.domain || (c.domain = "auto");
			return Ce(a, b, c)
		};

	function we(a, b, c) {
		for (var d = [], e = [], f, h = 0; h < a.length; h++) {
			var k = a[h],
				l = b(k);
			l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k)
		}
		return 0 < d.length ? d : e
	}

	function ve(a, b, c) {
		for (var d = [], e = ue(a, void 0, void 0, c), f = 0; f < e.length; f++) {
			var h = e[f].split("."),
				k = h.shift();
			if (!b || -1 !== b.indexOf(k)) {
				var l = h.shift();
				l && (l = l.split("-"), d.push({
					id: h.join("."),
					Tb: 1 * l[0] || 1,
					yb: 1 * l[1] || 1
				}))
			}
		}
		return d
	}
	var ze = function(a) {
			a && 1200 < a.length && (a = a.substring(0, 1200));
			return a
		},
		Ee = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
		Fe = /(^|\.)doubleclick\.net$/i,
		Be = function(a, b) {
			return Fe.test(document.location.hostname) || "/" === b && Ee.test(a)
		},
		Ae = function() {
			var a = [],
				b = document.location.hostname.split(".");
			if (4 === b.length) {
				var c = b[b.length - 1];
				if (parseInt(c, 10).toString() === c) return ["none"]
			}
			for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
			var e = document.location.hostname;
			Fe.test(e) || Ee.test(e) || a.push("none");
			return a
		},
		te = function(a) {
			if (!se("gtag_cs_api") || !a || !Hc()) return !0;
			if (!Gc(a)) return !1;
			var b = Fc(a);
			return null == b ? !0 : !!b
		};
	var Ge = function() {
			for (var a = fc.userAgent + (F.cookie || "") + (F.referrer || ""), b = a.length, c = E.history
				.length; 0 < c;) a += c-- ^ b++;
			var d = 1,
				e, f, h;
			if (a)
				for (d = 0, f = a.length - 1; 0 <= f; f--) h = a.charCodeAt(f), d = (d << 6 & 268435455) + h + (h <<
					14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
			return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(Fa() / 1E3)].join(".")
		},
		Je = function(a, b, c, d, e) {
			var f = He(b);
			return xe(a, f, Ie(c), d, e)
		},
		Ke = function(a, b, c, d) {
			var e = "" + He(c),
				f = Ie(d);
			1 < f && (e += "-" + f);
			return [b, e, a].join(".")
		},
		He = function(a) {
			if (!a) return 1;
			a = 0 === a.indexOf(".") ? a.substr(1) : a;
			return a.split(".").length
		},
		Ie = function(a) {
			if (!a || "/" === a) return 1;
			"/" !== a[0] && (a = "/" + a);
			"/" !== a[a.length - 1] && (a += "/");
			return a.split("/").length - 1
		};

	function Le(a, b, c) {
		var d, e = a.wb;
		null == e && (e = 7776E3);
		0 !== e && (d = new Date((b || Fa()) + 1E3 * e));
		return {
			path: a.path,
			domain: a.domain,
			flags: a.flags,
			encode: !!c,
			expires: d
		}
	};
	var Me = ["1"],
		Ne = {},
		Re = function(a) {
			var b = Oe(a.prefix);
			Ne[b] || Pe(b, a.path, a.domain) || (Qe(b, Ge(), a), Pe(b, a.path, a.domain))
		};

	function Qe(a, b, c) {
		var d = Ke(b, "1", c.domain, c.path),
			e = Le(c);
		e.Ca = "ad_storage";
		De(a, d, e)
	}

	function Pe(a, b, c) {
		var d = Je(a, b, c, Me, "ad_storage");
		d && (Ne[a] = d);
		return d
	}

	function Oe(a) {
		return (a || "_gcl") + "_au"
	};

	function Se() {
		for (var a = Te, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
		return b
	}

	function Ue() {
		var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		a += a.toLowerCase() + "0123456789-_";
		return a + "."
	}
	var Te, Ve;

	function We(a) {
		Te = Te || Ue();
		Ve = Ve || Se();
		for (var b = [], c = 0; c < a.length; c += 3) {
			var d = c + 1 < a.length,
				e = c + 2 < a.length,
				f = a.charCodeAt(c),
				h = d ? a.charCodeAt(c + 1) : 0,
				k = e ? a.charCodeAt(c + 2) : 0,
				l = f >> 2,
				m = (f & 3) << 4 | h >> 4,
				p = (h & 15) << 2 | k >> 6,
				r = k & 63;
			e || (r = 64, d || (p = 64));
			b.push(Te[l], Te[m], Te[p], Te[r])
		}
		return b.join("")
	}

	function Xe(a) {
		function b(l) {
			for (; d < a.length;) {
				var m = a.charAt(d++),
					p = Ve[m];
				if (null != p) return p;
				if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
			}
			return l
		}
		Te = Te || Ue();
		Ve = Ve || Se();
		for (var c = "", d = 0;;) {
			var e = b(-1),
				f = b(0),
				h = b(64),
				k = b(64);
			if (64 === k && -1 === e) return c;
			c += String.fromCharCode(e << 2 | f >> 4);
			64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h <<
				6 & 192 | k)))
		}
	};
	var Ye;
	var bf = function() {
			var a = Ze,
				b = $e,
				c = af(),
				d = function(h) {
					a(h.target || h.srcElement || {})
				},
				e = function(h) {
					b(h.target || h.srcElement || {})
				};
			if (!c.init) {
				nc(F, "mousedown", d);
				nc(F, "keyup", d);
				nc(F, "submit", e);
				var f = HTMLFormElement.prototype.submit;
				HTMLFormElement.prototype.submit = function() {
					b(this);
					f.call(this)
				};
				c.init = !0
			}
		},
		cf = function(a, b, c, d, e) {
			var f = {
				callback: a,
				domains: b,
				fragment: 2 === c,
				placement: c,
				forms: d,
				sameHost: e
			};
			af().decorators.push(f)
		},
		df = function(a, b, c) {
			for (var d = af().decorators, e = {}, f = 0; f < d.length; ++f) {
				var h =
					d[f],
					k;
				if (k = !c || h.forms) a: {
					var l = h.domains,
						m = a,
						p = !!h.sameHost;
					if (l && (p || m !== F.location.hostname))
						for (var r = 0; r < l.length; r++)
							if (l[r] instanceof RegExp) {
								if (l[r].test(m)) {
									k = !0;
									break a
								}
							} else if (0 <= m.indexOf(l[r]) || p && 0 <= l[r].indexOf(m)) {
						k = !0;
						break a
					}
					k = !1
				}
				if (k) {
					var t = h.placement;
					void 0 == t && (t = h.fragment ? 2 : 1);
					t === b && Ja(e, h.callback())
				}
			}
			return e
		},
		af = function() {
			var a = hc("google_tag_data", {}),
				b = a.gl;
			b && b.decorators || (b = {
				decorators: []
			}, a.gl = b);
			return b
		};
	var ef = /(.*?)\*(.*?)\*(.*)/,
		ff = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
		gf = /^(?:www\.|m\.|amp\.)+/,
		hf = /([^?#]+)(\?[^#]*)?(#.*)?/;

	function jf(a) {
		return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
	}
	var lf = function(a) {
			var b = [],
				c;
			for (c in a)
				if (a.hasOwnProperty(c)) {
					var d = a[c];
					void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b
						.push(We(String(d))))
				} var e = b.join("*");
			return ["1", kf(e), e].join("*")
		},
		kf = function(a, b) {
			var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage ||
					window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b),
					a
				].join("*"),
				d;
			if (!(d = Ye)) {
				for (var e = Array(256), f = 0; 256 > f; f++) {
					for (var h = f, k = 0; 8 > k; k++) h =
						h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
					e[f] = h
				}
				d = e
			}
			Ye = d;
			for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ Ye[(l ^ c.charCodeAt(m)) & 255];
			return ((l ^ -1) >>> 0).toString(36)
		},
		nf = function() {
			return function(a) {
				var b = oe(E.location.href),
					c = b.search.replace("?", ""),
					d = je(c, "_gl", !0) || "";
				a.query = mf(d) || {};
				var e = me(b, "fragment").match(jf("_gl"));
				a.fragment = mf(e && e[3] || "") || {}
			}
		},
		of = function(a) {
			var b = nf(),
				c = af();
			c.data || (c.data = {
				query: {},
				fragment: {}
			}, b(c.data));
			var d = {},
				e = c.data;
			e && (Ja(d, e.query), a && Ja(d, e.fragment));
			return d
		},
		mf =
		function(a) {
			var b;
			b = void 0 === b ? 3 : b;
			try {
				if (a) {
					var c;
					a: {
						for (var d = a, e = 0; 3 > e; ++e) {
							var f = ef.exec(d);
							if (f) {
								c = f;
								break a
							}
							d = decodeURIComponent(d)
						}
						c = void 0
					}
					var h = c;
					if (h && "1" === h[1]) {
						var k = h[3],
							l;
						a: {
							for (var m = h[2], p = 0; p < b; ++p)
								if (m === kf(k, p)) {
									l = !0;
									break a
								} l = !1
						}
						if (l) {
							for (var r = {}, t = k ? k.split("*") : [], q = 0; q < t.length; q += 2) r[t[q]] = Xe(t[
								q + 1]);
							return r
						}
					}
				}
			} catch (u) {}
		};

	function pf(a, b, c, d) {
		function e(p) {
			var r = p,
				t = jf(a).exec(r),
				q = r;
			if (t) {
				var u = t[2],
					w = t[4];
				q = t[1];
				w && (q = q + u + w)
			}
			p = q;
			var v = p.charAt(p.length - 1);
			p && "&" !== v && (p += "&");
			return p + m
		}
		d = void 0 === d ? !1 : d;
		var f = hf.exec(c);
		if (!f) return "";
		var h = f[1],
			k = f[2] || "",
			l = f[3] || "",
			m = a + "=" + b;
		d ? l = "#" + e(l.substring(1)) : k = "?" + e(k.substring(1));
		return "" + h + k + l
	}

	function qf(a, b) {
		var c = "FORM" === (a.tagName || "").toUpperCase(),
			d = df(b, 1, c),
			e = df(b, 2, c),
			f = df(b, 3, c);
		if (Ka(d)) {
			var h = lf(d);
			c ? rf("_gl", h, a) : sf("_gl", h, a, !1)
		}
		if (!c && Ka(e)) {
			var k = lf(e);
			sf("_gl", k, a, !0)
		}
		for (var l in f)
			if (f.hasOwnProperty(l)) a: {
				var m = l,
					p = f[l],
					r = a;
				if (r.tagName) {
					if ("a" === r.tagName.toLowerCase()) {
						sf(m, p, r, void 0);
						break a
					}
					if ("form" === r.tagName.toLowerCase()) {
						rf(m, p, r);
						break a
					}
				}
				"string" == typeof r && pf(m, p, r, void 0)
			}
	}

	function sf(a, b, c, d) {
		if (c.href) {
			var e = pf(a, b, c.href, void 0 === d ? !1 : d);
			he.test(e) && (c.href = e)
		}
	}

	function rf(a, b, c) {
		if (c && c.action) {
			var d = (c.method || "").toLowerCase();
			if ("get" === d) {
				for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
					var k = e[h];
					if (k.name === a) {
						k.setAttribute("value", b);
						f = !0;
						break
					}
				}
				if (!f) {
					var l = F.createElement("input");
					l.setAttribute("type", "hidden");
					l.setAttribute("name", a);
					l.setAttribute("value", b);
					c.appendChild(l)
				}
			} else if ("post" === d) {
				var m = pf(a, b, c.action);
				he.test(m) && (c.action = m)
			}
		}
	}
	var Ze = function(a) {
			try {
				var b;
				a: {
					for (var c = a, d = 100; c && 0 < d;) {
						if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
							b = c;
							break a
						}
						c = c.parentNode;
						d--
					}
					b = null
				}
				var e = b;
				if (e) {
					var f = e.protocol;
					"http:" !== f && "https:" !== f || qf(e, e.hostname)
				}
			} catch (h) {}
		},
		$e = function(a) {
			try {
				if (a.action) {
					var b = me(oe(a.action), "host");
					qf(a, b)
				}
			} catch (c) {}
		},
		tf = function(a, b, c, d) {
			bf();
			cf(a, b, "fragment" === c ? 2 : 1, !!d, !1)
		},
		uf = function(a, b) {
			bf();
			cf(a, [le(E.location, "host", !0)], b, !0, !0)
		},
		vf = function() {
			var a = F.location.hostname,
				b = ff.exec(F.referrer);
			if (!b) return !1;
			var c = b[2],
				d = b[1],
				e = "";
			if (c) {
				var f = c.split("/"),
					h = f[1];
				e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
			} else if (d) {
				if (0 === d.indexOf("xn--")) return !1;
				e = d.replace(/-/g, ".").replace(/\.\./g, "-")
			}
			var k = a.replace(gf, ""),
				l = e.replace(gf, ""),
				m;
			if (!(m = k === l)) {
				var p = "." + l;
				m = k.substring(k.length - p.length, k.length) === p
			}
			return m
		},
		wf = function(a, b) {
			return !1 === a ? !1 : a || b || vf()
		};
	var xf = /^\w+$/,
		yf = /^[\w-]+$/,
		zf = /^~?[\w-]+$/,
		Af = {
			aw: "_aw",
			dc: "_dc",
			gf: "_gf",
			ha: "_ha",
			gp: "_gp"
		},
		Bf = function() {
			if (!se("gtag_cs_api") || !Hc()) return !0;
			var a = Fc("ad_storage");
			return null == a ? !0 : !!a
		},
		Cf = function(a, b) {
			Gc("ad_storage") ? Bf() ? a() : Kc(a, "ad_storage") : b ? I("TAGGING", 3) : Jc(function() {
				Cf(a, !0)
			}, ["ad_storage"])
		},
		Ff = function(a) {
			var b = [];
			if (!F.cookie) return b;
			var c = ue(a, F.cookie, void 0, "ad_storage");
			if (!c || 0 == c.length) return b;
			for (var d = 0; d < c.length; d++) {
				var e = Df(c[d]);
				e && -1 === qa(b, e) && b.push(e)
			}
			return Ef(b)
		};

	function Gf(a) {
		return a && "string" == typeof a && a.match(xf) ? a : "_gcl"
	}
	var If = function() {
			var a = oe(E.location.href),
				b = me(a, "query", !1, void 0, "gclid"),
				c = me(a, "query", !1, void 0, "gclsrc"),
				d = me(a, "query", !1, void 0, "dclid");
			if (!b || !c) {
				var e = a.hash.replace("#", "");
				b = b || je(e, "gclid", void 0);
				c = c || je(e, "gclsrc", void 0)
			}
			return Hf(b, c, d)
		},
		Hf = function(a, b, c) {
			var d = {},
				e = function(f, h) {
					d[h] || (d[h] = []);
					d[h].push(f)
				};
			d.gclid = a;
			d.gclsrc = b;
			d.dclid = c;
			if (void 0 !== a && a.match(yf)) switch (b) {
				case void 0:
					e(a, "aw");
					break;
				case "aw.ds":
					e(a, "aw");
					e(a, "dc");
					break;
				case "ds":
					e(a, "dc");
					break;
				case "3p.ds":
					se("gtm_3pds") &&
						e(a, "dc");
					break;
				case "gf":
					e(a, "gf");
					break;
				case "ha":
					e(a, "ha");
					break;
				case "gp":
					e(a, "gp")
			}
			c && e(c, "dc");
			return d
		},
		Kf = function(a) {
			var b = If();
			Cf(function() {
				return Jf(b, a)
			})
		};

	function Jf(a, b, c) {
		function d(m, p) {
			var r = Lf(m, e);
			r && (De(r, p, f), h = !0)
		}
		b = b || {};
		var e = Gf(b.prefix);
		c = c || Fa();
		var f = Le(b, c, !0);
		f.Ca = "ad_storage";
		var h = !1,
			k = Math.round(c / 1E3),
			l = function(m) {
				return ["GCL", k, m].join(".")
			};
		a.aw && (!0 === b.di ? d("aw", l("~" + a.aw[0])) : d("aw", l(a.aw[0])));
		a.dc && d("dc", l(a.dc[0]));
		a.gf && d("gf", l(a.gf[0]));
		a.ha && d("ha", l(a.ha[0]));
		a.gp && d("gp", l(a.gp[0]));
		return h
	}
	var Nf = function(a, b) {
			var c = of (!0);
			Cf(function() {
				for (var d = Gf(b.prefix), e = 0; e < a.length; ++e) {
					var f = a[e];
					if (void 0 !== Af[f]) {
						var h = Lf(f, d),
							k = c[h];
						if (k) {
							var l = Math.min(Mf(k), Fa()),
								m;
							b: {
								for (var p = l, r = ue(h, F.cookie, void 0, "ad_storage"), t = 0; t < r
									.length; ++t)
									if (Mf(r[t]) > p) {
										m = !0;
										break b
									} m = !1
							}
							if (!m) {
								var q = Le(b, l, !0);
								q.Ca = "ad_storage";
								De(h, k, q)
							}
						}
					}
				}
				Jf(Hf(c.gclid, c.gclsrc), b)
			})
		},
		Lf = function(a, b) {
			var c = Af[a];
			if (void 0 !== c) return b + c
		},
		Mf = function(a) {
			var b = a.split(".");
			return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) ||
				0)
		};

	function Df(a) {
		var b = a.split(".");
		if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
	}
	var Of = function(a, b, c, d, e) {
			if (pa(b)) {
				var f = Gf(e),
					h = function() {
						for (var k = {}, l = 0; l < a.length; ++l) {
							var m = Lf(a[l], f);
							if (m) {
								var p = ue(m, F.cookie, void 0, "ad_storage");
								p.length && (k[m] = p.sort()[p.length - 1])
							}
						}
						return k
					};
				Cf(function() {
					tf(h, b, c, d)
				})
			}
		},
		Ef = function(a) {
			return a.filter(function(b) {
				return zf.test(b)
			})
		},
		Pf = function(a, b) {
			for (var c = Gf(b.prefix), d = {}, e = 0; e < a.length; e++) Af[a[e]] && (d[a[e]] = Af[a[e]]);
			Cf(function() {
				ya(d, function(f, h) {
					var k = ue(c + h, F.cookie, void 0, "ad_storage");
					if (k.length) {
						var l = k[0],
							m = Mf(l),
							p = {};
						p[f] = [Df(l)];
						Jf(p, b, m)
					}
				})
			})
		};

	function Qf(a, b) {
		for (var c = 0; c < b.length; ++c)
			if (a[b[c]]) return !0;
		return !1
	}
	var Rf = function() {
			function a(e, f, h) {
				h && (e[f] = h)
			}
			var b = ["aw", "dc"];
			if (Hc()) {
				var c = If();
				if (Qf(c, b)) {
					var d = {};
					a(d, "gclid", c.gclid);
					a(d, "dclid", c.dclid);
					a(d, "gclsrc", c.gclsrc);
					uf(function() {
						return d
					}, 3);
					uf(function() {
						var e = {};
						return e._up = "1", e
					}, 1)
				}
			}
		},
		Sf = function() {
			var a;
			if (Bf()) {
				for (var b = [], c = F.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c
					.length; e++) {
					var f = c[e].match(d);
					f && b.push({
						sd: f[1],
						value: f[2]
					})
				}
				var h = {};
				if (b && b.length)
					for (var k = 0; k < b.length; k++) {
						var l = b[k].value.split(".");
						"1" == l[0] && 3 == l.length && l[1] && (h[b[k].sd] || (h[b[k].sd] = []), h[b[k].sd].push({
							timestamp: l[1],
							zg: l[2]
						}))
					}
				a = h
			} else a = {};
			return a
		};
	var Tf = /^\d+\.fls\.doubleclick\.net$/;

	function Uf(a, b) {
		Gc(C.o) ? Oc(C.o) ? a() : Qc(a) : b ? I("GTM", 42) : Rc(function() {
			Uf(a, !0)
		}, [C.o])
	}

	function Vf(a) {
		var b = oe(E.location.href),
			c = me(b, "host", !1);
		if (c && c.match(Tf)) {
			var d = me(b, "path").split(a + "=");
			if (1 < d.length) return d[1].split(";")[0].split("?")[0]
		}
	}

	function Wf(a, b, c) {
		if ("aw" == a || "dc" == a) {
			var d = Vf("gcl" + a);
			if (d) return d.split(".")
		}
		var e = Gf(b);
		if ("_gcl" == e) {
			c = void 0 === c ? !0 : c;
			var f = !Oc(C.o) && c,
				h;
			h = If()[a] || [];
			if (0 < h.length) return f ? ["0"] : h
		}
		var k = Lf(a, e);
		return k ? Ff(k) : []
	}
	var Xf = function(a) {
			var b = Vf("gac");
			if (b) return !Oc(C.o) && a ? "0" : decodeURIComponent(b);
			var c = Sf(),
				d = [];
			ya(c, function(e, f) {
				for (var h = [], k = 0; k < f.length; k++) h.push(f[k].zg);
				h = Ef(h);
				h.length && d.push(e + ":" + h.join(","))
			});
			return d.join(";")
		},
		Yf = function(a, b) {
			var c = If().dc || [];
			Uf(function() {
				Re(b);
				var d = Ne[Oe(b.prefix)],
					e = !1;
				if (d && 0 < c.length) {
					var f = kd.joined_au = kd.joined_au || {},
						h = b.prefix || "_gcl";
					if (!f[h])
						for (var k = 0; k < c.length; k++) {
							var l = "http://ad.doubleclick.net/ddm/regclk";
							l = l + "?gclid=" + c[k] + "&auiddc=" + d;
							tc(l);
							e = f[h] = !0
						}
				}
				null == a && (a = e);
				if (a && d) {
					var m = Oe(b.prefix),
						p = Ne[m];
					p && Qe(m, p, b)
				}
			})
		};
	var Zf = /[A-Z]+/,
		$f = /\s/,
		ag = function(a) {
			if (g(a) && (a = Ea(a), !$f.test(a))) {
				var b = a.indexOf("-");
				if (!(0 > b)) {
					var c = a.substring(0, b);
					if (Zf.test(c)) {
						for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
							if (!d[e]) return;
						return {
							id: a,
							prefix: c,
							containerId: c + "-" + d[0],
							B: d
						}
					}
				}
			}
		},
		cg = function(a) {
			for (var b = {}, c = 0; c < a.length; ++c) {
				var d = ag(a[c]);
				d && (b[d.id] = d)
			}
			bg(b);
			var e = [];
			ya(b, function(f, h) {
				e.push(h)
			});
			return e
		};

	function bg(a) {
		var b = [],
			c;
		for (c in a)
			if (a.hasOwnProperty(c)) {
				var d = a[c];
				"AW" === d.prefix && d.B[1] && b.push(d.containerId)
			} for (var e = 0; e < b.length; ++e) delete a[b[e]]
	};
	var dg = function() {
		var a = !1;
		return a
	};
	var fg = function(a, b, c, d) {
			return (2 === eg() || d || "http:" != E.location.protocol ? a : b) + c
		},
		eg = function() {
			var a = kc(),
				b;
			if (1 === a) a: {
				var c = pd;c = c.toLowerCase();
				for (var d = "https://" + c, e = "http://" + c, f = 1, h = F.getElementsByTagName("script"), k =
						0; k < h.length && 100 > k; k++) {
					var l = h[k].src;
					if (l) {
						l = l.toLowerCase();
						if (0 === l.indexOf(e)) {
							b = 3;
							break a
						}
						1 === f && 0 === l.indexOf(d) && (f = 2)
					}
				}
				b = f
			}
			else b = a;
			return b
		};
	var hg = function(a, b, c) {
			if (E[a.functionName]) return b.ed && G(b.ed), E[a.functionName];
			var d = gg();
			E[a.functionName] = d;
			if (a.Qb)
				for (var e = 0; e < a.Qb.length; e++) E[a.Qb[e]] = E[a.Qb[e]] || gg();
			a.Yb && void 0 === E[a.Yb] && (E[a.Yb] = c);
			jc(fg("https://", "http://", a.pd), b.ed, b.Xg);
			return d
		},
		gg = function() {
			var a = function() {
				a.q = a.q || [];
				a.q.push(arguments)
			};
			return a
		},
		ig = {
			functionName: "_googWcmImpl",
			Yb: "_googWcmAk",
			pd: "www.gstatic.com/wcm/loader.js"
		},
		jg = {
			functionName: "_gaPhoneImpl",
			Yb: "ga_wpid",
			pd: "www.gstatic.com/gaphone/loader.js"
		},
		kg = {
			Ze: "",
			Cf: "5"
		},
		lg = {
			functionName: "_googCallTrackingImpl",
			Qb: [jg.functionName, ig.functionName],
			pd: "www.gstatic.com/call-tracking/call-tracking_" + (kg.Ze || kg.Cf) + ".js"
		},
		mg = {},
		ng = function(a, b, c, d) {
			I("GTM", 22);
			if (c) {
				d = d || {};
				var e = hg(ig, d, a),
					f = {
						ak: a,
						cl: b
					};
				void 0 === d.la && (f.autoreplace = c);
				e(2, d.la, f, c, 0, new Date, d.options)
			}
		},
		og = function(a, b, c, d) {
			I("GTM", 21);
			if (b && c) {
				d = d || {};
				for (var e = {
						countryNameCode: c,
						destinationNumber: b,
						retrievalTime: new Date
					}, f = 0; f < a.length; f++) {
					var h =
						a[f];
					mg[h.id] || (h && "AW" === h.prefix && !e.adData && 2 <= h.B.length ? (e.adData = {
						ak: h.B[0],
						cl: h.B[1]
					}, mg[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = {
						gaWpid: h.containerId
					}, mg[h.id] = !0))
				}(e.gaData || e.adData) && hg(lg, d)(d.la, e, d.options)
			}
		},
		pg = function() {
			var a = !1;
			return a
		},
		qg = function(a, b) {
			if (a)
				if (dg()) {} else {
					if (g(a)) {
						var c =
							ag(a);
						if (!c) return;
						a = c
					}
					var d = void 0,
						e = !1,
						f = b.getWithConfig(C.Bf);
					if (f && pa(f)) {
						d = [];
						for (var h = 0; h < f.length; h++) {
							var k = ag(f[h]);
							k && (d.push(k), (a.id === k.id || a.id === a.containerId && a.containerId === k
								.containerId) && (e = !0))
						}
					}
					if (!d || e) {
						var l = b.getWithConfig(C.ye),
							m;
						if (l) {
							pa(l) ? m = l : m = [l];
							var p = b.getWithConfig(C.qe),
								r = b.getWithConfig(C.xe),
								t = b.getWithConfig(C.Ae),
								q = b.getWithConfig(C.Af),
								u = p || r,
								w = 1;
							"UA" !== a.prefix || d || (w = 5);
							for (var v = 0; v < m.length; v++)
								if (v < w)
									if (d) og(d, m[v], q, {
										la: u,
										options: t
									});
									else if ("AW" === a.prefix &&
								a.B[1]) pg() ? og([a], m[v], q || "US", {
								la: u,
								options: t
							}) : ng(a.B[0], a.B[1], m[v], {
								la: u,
								options: t
							});
							else if ("UA" === a.prefix)
								if (pg()) og([a], m[v], q || "US", {
									la: u
								});
								else {
									var x = a.containerId,
										y = m[v],
										A = {
											la: u
										};
									I("GTM", 23);
									if (y) {
										A = A || {};
										var B = hg(jg, A, x),
											z = {};
										void 0 !== A.la ? z.receiver = A.la : z.replace = y;
										z.ga_wpid = x;
										z.destination = y;
										B(2, new Date, z)
									}
								}
						}
					}
				}
		};
	var tg = function(a) {
		return Oc(C.o) ? a : a.replace(/&url=([^&#]+)/, function(b, c) {
			var d = pe(decodeURIComponent(c));
			return "&url=" + encodeURIComponent(d)
		})
	};
	var ug = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
		vg = {
			cl: ["ecl"],
			customPixels: ["nonGooglePixels"],
			ecl: ["cl"],
			ehl: ["hl"],
			hl: ["ehl"],
			html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
			customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
			nonGooglePixels: [],
			nonGoogleScripts: ["nonGooglePixels"],
			nonGoogleIframes: ["nonGooglePixels"]
		},
		wg = {
			cl: ["ecl"],
			customPixels: ["customScripts", "html"],
			ecl: ["cl"],
			ehl: ["hl"],
			hl: ["ehl"],
			html: ["customScripts"],
			customScripts: ["html"],
			nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
			nonGoogleScripts: ["customScripts", "html"],
			nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
		},
		xg = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
	var zg = function(a) {
			var b = Yd("gtm.whitelist");
			b && I("GTM", 9);
			b = "google gtagfl lcl zone oid op".split(" ");
			var c = b && La(Da(b), vg),
				d = Yd("gtm.blacklist");
			d || (d = Yd("tagTypeBlacklist")) && I("GTM", 3);
			d ?
				I("GTM", 8) : d = [];
			yg() && (d = Da(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
			0 <= qa(Da(d), "google") && I("GTM", 2);
			var e = d && La(Da(d), wg),
				f = {};
			return function(h) {
				var k = h && h[Hb.wa];
				if (!k || "string" != typeof k) return !0;
				k = k.replace(/^_*/, "");
				if (void 0 !== f[k]) return f[k];
				var l = vd[k] || [],
					m = a(k, l);
				if (b) {
					var p;
					if (p = m) a: {
						if (0 > qa(c, k))
							if (l && 0 < l.length)
								for (var r =
										0; r < l.length; r++) {
									if (0 > qa(c, l[r])) {
										I("GTM", 11);
										p = !1;
										break a
									}
								} else {
									p = !1;
									break a
								}
						p = !0
					}
					m = p
				}
				var t = !1;
				if (d) {
					var q = 0 <= qa(e, k);
					if (q) t = q;
					else {
						var u = xa(e, l || []);
						u && I("GTM", 10);
						t = u
					}
				}
				var w = !m || t;
				w || !(0 <= qa(l, "sandboxedScripts")) || c && -1 !== qa(c, "sandboxedScripts") || (w = xa(e,
					xg));
				return f[k] = w
			}
		},
		yg = function() {
			return ug.test(E.location && E.location.hostname)
		};
	var Bg = {
		kg: function(a, b) {
			b[Hb.Cd] && "string" === typeof a && (a = 1 == b[Hb.Cd] ? a.toLowerCase() : a.toUpperCase());
			b.hasOwnProperty(Hb.Ed) && null === a && (a = b[Hb.Ed]);
			b.hasOwnProperty(Hb.Gd) && void 0 === a && (a = b[Hb.Gd]);
			b.hasOwnProperty(Hb.Fd) && !0 === a && (a = b[Hb.Fd]);
			b.hasOwnProperty(Hb.Dd) && !1 === a && (a = b[Hb.Dd]);
			return a
		}
	};
	var Cg = {
			active: !0,
			isWhitelisted: function() {
				return !0
			}
		},
		Dg = function(a) {
			var b = kd.zones;
			!b && a && (b = kd.zones = a());
			return b
		};
	var Eg = function() {};
	var Fg = !1,
		Gg = 0,
		Hg = [];

	function Ig(a) {
		if (!Fg) {
			var b = F.createEventObject,
				c = "complete" == F.readyState,
				d = "interactive" == F.readyState;
			if (!a || "readystatechange" != a.type || c || !b && d) {
				Fg = !0;
				for (var e = 0; e < Hg.length; e++) G(Hg[e])
			}
			Hg.push = function() {
				for (var f = 0; f < arguments.length; f++) G(arguments[f]);
				return 0
			}
		}
	}

	function Jg() {
		if (!Fg && 140 > Gg) {
			Gg++;
			try {
				F.documentElement.doScroll("left"), Ig()
			} catch (a) {
				E.setTimeout(Jg, 50)
			}
		}
	}
	var Kg = function(a) {
		Fg ? a() : Hg.push(a)
	};
	var Lg = {},
		Mg = {},
		Ng = function(a, b, c, d) {
			if (!Mg[a] || md[b] || "__zone" === b) return -1;
			var e = {};
			Ta(d) && (e = n(d, e));
			e.id = c;
			e.status = "timeout";
			return Mg[a].tags.push(e) - 1
		},
		Og = function(a, b, c, d) {
			if (Mg[a]) {
				var e = Mg[a].tags[b];
				e && (e.status = c, e.executionTime = d)
			}
		};

	function Pg(a) {
		for (var b = Lg[a] || [], c = 0; c < b.length; c++) b[c]();
		Lg[a] = {
			push: function(d) {
				d(jd.s, Mg[a])
			}
		}
	}
	var Sg = function(a, b, c) {
			Mg[a] = {
				tags: []
			};
			na(b) && Qg(a, b);
			c && E.setTimeout(function() {
				return Pg(a)
			}, Number(c));
			return Rg(a)
		},
		Qg = function(a, b) {
			Lg[a] = Lg[a] || [];
			Lg[a].push(Ia(function() {
				return G(function() {
					b(jd.s, Mg[a])
				})
			}))
		};

	function Rg(a) {
		var b = 0,
			c = 0,
			d = !1;
		return {
			add: function() {
				c++;
				return Ia(function() {
					b++;
					d && b >= c && Pg(a)
				})
			},
			Xf: function() {
				d = !0;
				b >= c && Pg(a)
			}
		}
	};
	var Tg = function() {
		function a(d) {
			return !oa(d) || 0 > d ? 0 : d
		}
		if (!kd._li && E.performance && E.performance.timing) {
			var b = E.performance.timing.navigationStart,
				c = oa(Zd.get("gtm.start")) ? Zd.get("gtm.start") : 0;
			kd._li = {
				cst: a(c - b),
				cbt: a(rd - b)
			}
		}
	};
	var Xg = {},
		Yg = function() {
			return E.GoogleAnalyticsObject && E[E.GoogleAnalyticsObject]
		},
		Zg = !1;
	var $g = function(a) {
			E.GoogleAnalyticsObject || (E.GoogleAnalyticsObject = a || "ga");
			var b = E.GoogleAnalyticsObject;
			if (E[b]) E.hasOwnProperty(b) || I("GTM", 12);
			else {
				var c = function() {
					c.q = c.q || [];
					c.q.push(arguments)
				};
				c.l = Number(new Date);
				E[b] = c
			}
			Tg();
			return E[b]
		},
		ah = function(a, b, c, d) {
			b = String(b).replace(/\s+/g, "").split(",");
			var e = Yg();
			e(a + "require", "linker");
			e(a + "linker:autoLink", b, c, d)
		};
	var ch = function(a) {},
		bh = function() {
			return E.GoogleAnalyticsObject || "ga"
		};

	function ih(a, b, c, d) {
		var e = ub[a],
			f = jh(a, b, c, d);
		if (!f) return null;
		var h = Cb(e[Hb.Ud], c, []);
		if (h && h.length) {
			var k = h[0];
			f = ih(k.index, {
				D: f,
				C: 1 === k.se ? b.terminate : f,
				terminate: b.terminate
			}, c, d)
		}
		return f
	}

	function jh(a, b, c, d) {
		function e() {
			if (f[Hb.rf]) k();
			else {
				var v = Eb(f, c, []),
					x = Ng(c.id, String(f[Hb.wa]), Number(f[Hb.Wd]), v[Hb.sf]),
					y = !1;
				v.vtp_gtmOnSuccess = function() {
					if (!y) {
						y = !0;
						var z = Fa() - B;
						Rd(c.id, ub[a], "5");
						Og(c.id, x, "success", z);
						h()
					}
				};
				v.vtp_gtmOnFailure = function() {
					if (!y) {
						y = !0;
						var z = Fa() - B;
						Rd(c.id, ub[a], "6");
						Og(c.id, x, "failure", z);
						k()
					}
				};
				v.vtp_gtmTagId = f.tag_id;
				v.vtp_gtmEventId = c.id;
				Rd(c.id, f, "1");
				var A = function() {
					var z = Fa() - B;
					Rd(c.id, f, "7");
					Og(c.id, x, "exception", z);
					y || (y = !0, k())
				};
				var B = Fa();
				try {
					Bb(v, c)
				} catch (z) {
					A(z)
				}
			}
		}
		var f = ub[a],
			h = b.D,
			k = b.C,
			l = b.terminate;
		if (c.Zc(f)) return null;
		var m = Cb(f[Hb.Xd], c, []);
		if (m && m.length) {
			var p = m[0],
				r = ih(p.index, {
					D: h,
					C: k,
					terminate: l
				}, c, d);
			if (!r) return null;
			h = r;
			k = 2 === p.se ? l : r
		}
		if (f[Hb.Md] || f[Hb.wf]) {
			var t = f[Hb.Md] ? vb : c.sh,
				q = h,
				u = k;
			if (!t[a]) {
				e = Ia(e);
				var w = kh(a, t, e);
				h = w.D;
				k = w.C
			}
			return function() {
				t[a](q, u)
			}
		}
		return e
	}

	function kh(a, b, c) {
		var d = [],
			e = [];
		b[a] = lh(d, e, c);
		return {
			D: function() {
				b[a] = mh;
				for (var f = 0; f < d.length; f++) d[f]()
			},
			C: function() {
				b[a] = nh;
				for (var f = 0; f < e.length; f++) e[f]()
			}
		}
	}

	function lh(a, b, c) {
		return function(d, e) {
			a.push(d);
			b.push(e);
			c()
		}
	}

	function mh(a) {
		a()
	}

	function nh(a, b) {
		b()
	};
	var qh = function(a, b) {
		for (var c = [], d = 0; d < ub.length; d++)
			if (a.xb[d]) {
				var e = ub[d];
				var f = b.add();
				try {
					var h = ih(d, {
						D: f,
						C: f,
						terminate: f
					}, a, d);
					h ? c.push({
						Ve: d,
						Oe: Fb(e),
						vg: h
					}) : (oh(d, a), f())
				} catch (l) {
					f()
				}
			} b.Xf();
		c.sort(ph);
		for (var k = 0; k < c.length; k++) c[k].vg();
		return 0 < c.length
	};

	function ph(a, b) {
		var c, d = b.Oe,
			e = a.Oe;
		c = d > e ? 1 : d < e ? -1 : 0;
		var f;
		if (0 !== c) f = c;
		else {
			var h = a.Ve,
				k = b.Ve;
			f = h > k ? 1 : h < k ? -1 : 0
		}
		return f
	}

	function oh(a, b) {
		if (!Od) return;
		var c = function(d) {
			var e = b.Zc(ub[d]) ? "3" : "4",
				f = Cb(ub[d][Hb.Ud], b, []);
			f && f.length && c(f[0].index);
			Rd(b.id, ub[d], e);
			var h = Cb(ub[d][Hb.Xd], b, []);
			h && h.length && c(h[0].index)
		};
		c(a);
	}
	var rh = !1,
		sh = function(a, b, c, d, e) {
			if ("gtm.js" == b) {
				if (rh) return !1;
				rh = !0
			}
			Qd(a, b);
			var f = Sg(a, d, e);
			ce(a, "event", 1);
			ce(a, "ecommerce", 1);
			ce(a, "gtm");
			var h = {
				id: a,
				name: b,
				Zc: zg(c),
				xb: [],
				sh: [],
				Fe: function() {
					I("GTM", 6)
				}
			};
			h.xb = Lb(h);
			var k = qh(h, f);
			"gtm.js" !== b && "gtm.sync" !== b || ch(jd.s);
			if (!k) return k;
			for (var l = 0; l < h.xb.length; l++)
				if (h.xb[l]) {
					var m = ub[l];
					if (m && !md[String(m[Hb.wa])]) return !0
				} return !1
		};
	var th = function(a, b) {
		var c = Ab(a, b);
		ub.push(c);
		return ub.length - 1
	};

	function uh(a, b) {}

	function vh(a, b) {
		return wh() ? uh(a, b) : void 0
	}

	function wh() {
		var a = !1;
		return a
	};
	var xh = function() {
			this.eventModel = {};
			this.targetConfig = {};
			this.containerConfig = {};
			this.h = {};
			this.globalConfig = {};
			this.D = function() {};
			this.C = function() {};
			this.eventId = void 0
		},
		yh = function(a) {
			var b = new xh;
			b.eventModel = a;
			return b
		},
		zh = function(a, b) {
			a.targetConfig = b;
			return a
		},
		Ah = function(a, b) {
			a.containerConfig = b;
			return a
		},
		Bh = function(a, b) {
			a.h = b;
			return a
		},
		Ch = function(a, b) {
			a.globalConfig = b;
			return a
		},
		Dh = function(a, b) {
			a.D = b;
			return a
		},
		Eh = function(a, b) {
			a.C = b;
			return a
		};
	xh.prototype.getWithConfig = function(a) {
		if (void 0 !== this.eventModel[a]) return this.eventModel[a];
		if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
		if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
		if (void 0 !== this.h[a]) return this.h[a];
		if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]
	};
	var Fh = function(a) {
		function b(e) {
			ya(e, function(f) {
				c[f] = null
			})
		}
		var c = {};
		b(a.eventModel);
		b(a.targetConfig);
		b(a.containerConfig);
		b(a.globalConfig);
		var d = [];
		ya(c, function(e) {
			d.push(e)
		});
		return d
	};
	var Gh;
	if (3 === jd.Ob.length) Gh = "g";
	else {
		var Hh = "G";
		Hh = "g";
		Gh = Hh
	}
	var Ih = {
			"": "n",
			UA: "u",
			AW: "a",
			DC: "d",
			G: "e",
			GF: "f",
			HA: "h",
			GTM: Gh,
			OPT: "o"
		},
		Jh = function(a) {
			var b = jd.s.split("-"),
				c = b[0].toUpperCase(),
				d = Ih[c] || "i",
				e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
				f;
			if (3 === jd.Ob.length) {
				var h = "w";
				h = dg() ? "s" : "o";
				f = "2" + h
			} else f = "";
			return f + d + jd.Ob + e
		};

	function Kh() {
		var a = !1;
		a = Hc();
		return a
	}

	function Lh(a, b, c) {
		function d(r) {
			var t;
			kd.reported_gclid || (kd.reported_gclid = {});
			t = kd.reported_gclid;
			var q = f + (r ? "gcu" : "gcs");
			if (!t[q]) {
				t[q] = !0;
				var u = [],
					w = function(B, z) {
						z && u.push(B + "=" + encodeURIComponent(z))
					},
					v = "https://www.google.com";
				if (Hc()) {
					var x = Oc(C.o);
					w("gcs", Pc());
					r && w("gcu", "1");
					w("rnd", p);
					if ((!f || h && "aw.ds" !== h) && Oc(C.o)) {
						var y = Ff("_gcl_aw");
						w("gclaw", y.join("."))
					}
					w("url", String(E.location).split(/[?#]/)[0]);
					w("dclid", Mh(b, k));
					!x && b && (v = "https://pagead2.googlesyndication.com")
				}
				w("gclid", Mh(b, f));
				w("gclsrc", h);
				w("gtm", Jh(!c));
				var A = v + "/pagead/landing?" + u.join("&");
				tc(A)
			}
		}
		var e = If(),
			f = e.gclid || "",
			h = e.gclsrc,
			k = e.dclid || "",
			l = !a && (!f || h && "aw.ds" !== h ? !1 : !0),
			m = Kh();
		if (l || m) {
			var p = "" + Ge();
			m ? Rc(function() {
				d();
				Oc(C.o) || Qc(function() {
					return d(!0)
				})
			}, [C.o]) : d()
		}
	}

	function Mh(a, b) {
		var c = a && !Oc(C.o);
		if (b && c) return "0";
		return b
	}
	var Nh = function(a) {
			var b = vh(a, "/pagead/conversion_async.js");
			return b ? b : -1 === navigator.userAgent.toLowerCase().indexOf("firefox") ? fg("https://", "http://",
					"www.googleadservices.com/pagead/conversion_async.js") :
				"https://www.google.com/pagead/conversion_async.js"
		},
		Oh = !1,
		Ph = [],
		Qh = ["aw", "dc"],
		Rh = function(a) {
			var b = E.google_trackConversion,
				c = a.gtm_onFailure;
			"function" == typeof b ? b(a) || c() : c()
		},
		Sh = function() {
			for (; 0 < Ph.length;) Rh(Ph.shift())
		},
		Th = function(a) {
			if (!Oh) {
				Oh = !0;
				Tg();
				var b = function() {
					Sh();
					Ph = {
						push: Rh
					}
				};
				dg() ? b() : jc(a, b, function() {
					Sh();
					Oh = !1
				})
			}
		},
		Uh = function(a) {
			if (a) {
				for (var b = [], c = 0; c < a.length; ++c) {
					var d = a[c];
					d && b.push({
						item_id: d.id,
						quantity: d.quantity,
						value: d.price,
						start_date: d.start_date,
						end_date: d.end_date
					})
				}
				return b
			}
		},
		Vh = function(a, b, c, d) {
			function e() {
				var S = !1;
				S = !0;
				S && Hc() ? Rc(function() {
					var L = Oc(C.o);
					if (m) N("gcs", Pc()), L || x || !r || (D.google_transport_url =
						"https://pagead2.googlesyndication.com/"), Ph.push(D);
					else if (L) {
						Ph.push(D);
						return
					}
					L || Qc(function() {
						D = n(D);
						!x && D.google_transport_url && delete D.google_transport_url;
						m && (N("gcs", Pc()), N("gcu", "1"));
						Ph.push(D)
					})
				}, [C.o]) : Ph.push(D)
			}
			var f = ag(a),
				h = b == C.I,
				k = f.B[0],
				l = f.B[1],
				m = void 0 !== l,
				p = function(S) {
					return d.getWithConfig(S)
				},
				r = void 0 != p(C.N) && !1 !== p(C.N),
				t = !1 !== p(C.Ka),
				q = p(C.Ja) || p(C.Z),
				u = p(C.Y),
				w = p(C.ia),
				v = p(C.ca),
				x = p(C.va),
				y = Nh(x),
				A = {
					prefix: q,
					domain: u,
					wb: w,
					flags: v
				};
			if (h) {
				var B = p(C.xa) || {};
				t && (wf(B[C.hb], !!B[C.L]) && Nf(Qh, A), Kf(A), Pf(["aw", "dc"], A));
				B[C.L] && Of(Qh, B[C.L], B[C.jb], !!B[C.ib], q);
				qg(f, d);
				Lh(!1, r, a);
			}
			var z = !1 === p(C.Pd) || !1 === p(C.mb);
			if (!h || !m && !z)
				if (!0 === p(C.Qd) && (m = !1), !1 !== p(C.fa) || m) {
					var D = {
						google_conversion_id: k,
						google_remarketing_only: !m,
						onload_callback: d.D,
						gtm_onFailure: d.C,
						google_conversion_format: "3",
						google_conversion_color: "ffffff",
						google_conversion_domain: "",
						google_conversion_label: l,
						google_conversion_language: p(C.Ma),
						google_conversion_value: p(C.da),
						google_conversion_currency: p(C.ja),
						google_conversion_order_id: p(C.nb),
						google_user_id: p(C.rb),
						google_conversion_page_url: p(C.kb),
						google_conversion_referrer_url: p(C.lb),
						google_gtm: Jh()
					};
					m && (D.google_transport_url = uh(x, "/"));
					D.google_restricted_data_processing = p(C.Bc);
					dg() && (D.opt_image_generator = function() {
							return new Image
						},
						D.google_enable_display_cookie_match = !1);
					!1 === p(C.fa) && (D.google_allow_ad_personalization_signals = !1);
					D.google_read_gcl_cookie_opt_out = !t;
					t && q && (D.google_gcl_cookie_prefix = q);
					var H = function() {
						var S = p(C.bc),
							L = {
								event: b
							};
						if (pa(S)) {
							I("GTM", 26);
							for (var J = 0; J < S.length; ++J) {
								var U = S[J],
									X = p(U);
								void 0 !== X && (L[U] = X)
							}
							return L
						}
						var T = d.eventModel;
						if (!T) return null;
						n(T, L);
						for (var ra = 0; ra < C.Jd.length; ++ra) delete L[C.Jd[ra]];
						return L
					}();
					H && (D.google_custom_params = H);
					!m && p(C.T) && (D.google_gtag_event_data = {
						items: p(C.T),
						value: p(C.da)
					});
					if (m && b == C.na) {
						D.google_conversion_merchant_id = p(C.$d);
						D.google_basket_feed_country = p(C.Vd);
						D.google_basket_feed_language = p(C.Zd);
						D.google_basket_discount = p(C.Td);
						D.google_basket_transaction_type = b;
						D.google_disable_merchant_reported_conversions = !0 === p(C.de);
						dg() && (D.google_disable_merchant_reported_conversions = !0);
						var M = Uh(p(C.T));
						M && (D.google_conversion_items = M)
					}
					var N = function(S, L) {
						void 0 != L && "" !== L && (D.google_additional_conversion_params = D
							.google_additional_conversion_params || {},
							D.google_additional_conversion_params[S] = L)
					};
					m && (N("vdnc", p(C.ke)), N("vdltv", p(C.be)));
					D.google_gtm_url_processor = function(S) {
						r && (S = tg(S));
						return S
					};
					var Z = !0;
					Z && e()
				} Th(y)
		};

	var Wh = function(a) {
			return !(void 0 === a || null === a || 0 === (a + "").length)
		},
		Xh = function(a, b) {
			var c;
			if (2 === b.X) return a("ord", va(1E11, 1E13)), !0;
			if (3 === b.X) return a("ord", "1"), a("num", va(1E11, 1E13)), !0;
			if (4 === b.X) return Wh(b.sessionId) && a("ord", b.sessionId), !0;
			if (5 === b.X) c = "1";
			else if (6 === b.X) c = b.nd;
			else return !1;
			Wh(c) && a("qty", c);
			Wh(b.Rb) && a("cost", b.Rb);
			Wh(b.transactionId) && a("ord", b.transactionId);
			return !0
		},
		Zh = function(a, b, c) {
			function d(A, B, z) {
				r.hasOwnProperty(A) || (B = String(B), p.push(";" + A + "=" + (z ? B : Yh(B))))
			}
			var e = a.Sc,
				f = a.qd,
				h = a.protocol;
			h += f ? "//" + e + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
			var k = ";",
				l = !0;
			l = Oc(C.o);
			var m = !l && a.zb;
			m && (h = "https://ade.googlesyndication.com/ddm/activity", k = "/", f = !1);
			var p = [k, "src=" + Yh(e), ";type=" + Yh(a.Vc), ";cat=" + Yh(a.qb)],
				r = a.pg || {};
			ya(r, function(A, B) {
				p.push(";" + Yh(A) + "=" + Yh(B + ""))
			});
			if (Xh(d, a)) {
				Wh(a.vc) && d("u", a.vc);
				Wh(a.uc) && d("tran", a.uc);
				d("gtm",
					Jh());
				Hc() && (d("gcs", Pc()), c && d("gcu", "1"));
				!1 === a.Tf && d("npa", "1");
				if (a.Rc) {
					var t = void 0 === a.zb ? !0 : !!a.zb,
						q = Wf("dc", a.Na, t);
					q && q.length && d("gcldc", q.join("."));
					var u = Wf("aw", a.Na, t);
					u && u.length && d("gclaw", u.join("."));
					var w = Xf(t);
					w && d("gac", w);
					Re({
						prefix: a.Na,
						wb: a.mg,
						domain: a.lg,
						flags: a.Oh
					});
					var v = Ne[Oe(a.Na)];
					v && d("auiddc", v)
				}
				Wh(a.jd) && d("prd", a.jd, !0);
				ya(a.ud, function(A, B) {
					d(A, B)
				});
				p.push(b || "");
				if (Wh(a.hc)) {
					var x = a.hc || "";
					m && (x = pe(x));
					d("~oref", x)
				}
				var y = h + p.join("") + "?";
				f ? lc(y, a.D) : mc(y, a.D, a.C)
			} else G(a.C)
		},
		Yh = encodeURIComponent,
		$h = function(a, b) {
			var c = !1;
			c = !0;
			c && Hc() ? Rc(function() {
				Zh(a, b);
				Oc(C.o) ||
					Qc(function() {
						Zh(a, b, !0)
					})
			}, [C.o]) : Zh(a, b)
		};
	var ai = function(a, b, c, d) {
			function e() {
				var f = {
					config: a,
					gtm: Jh()
				};
				c && (Re(d), f.auiddc = Ne[Oe(d.prefix)]);
				b && (f.loadInsecure = b);
				void 0 === E.__dc_ns_processor && (E.__dc_ns_processor = []);
				E.__dc_ns_processor.push(f);
				jc((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
			}
			Oc(C.o) ? e() : Qc(e)
		},
		bi = function(a) {
			var b = /^u([1-9]\d?|100)$/,
				c = a.getWithConfig(C.ce) || {},
				d = Fh(a),
				e = {},
				f = {};
			if (Ta(c))
				for (var h in c)
					if (c.hasOwnProperty(h) && b.test(h)) {
						var k = c[h];
						g(k) && (e[h] = k)
					} for (var l = 0; l < d.length; l++) {
				var m = d[l];
				b.test(m) && (e[m] = m)
			}
			for (var p in e) e.hasOwnProperty(p) && (f[p] = a.getWithConfig(e[p]));
			return f
		},
		ci = function(a) {
			function b(l, m, p) {
				void 0 !== p && 0 !== (p + "").length && d.push(l + m + ":" + c(p + ""))
			}
			var c = encodeURIComponent,
				d = [],
				e = a(C.T) || [];
			if (pa(e))
				for (var f = 0; f < e.length; f++) {
					var h = e[f],
						k = f + 1;
					b("i", k, h.id);
					b("p", k, h.price);
					b("q", k, h.quantity);
					b("c", k, a(C.df));
					b("l", k, a(C.Ma))
				}
			return d.join("|")
		},
		di = function(a) {
			var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
			if (b) {
				var c = {
					standard: 2,
					unique: 3,
					per_session: 4,
					transactions: 5,
					items_sold: 6,
					"": 1
				} [(b[5] || "").toLowerCase()];
				if (c) return {
					containerId: "DC-" + b[1],
					ba: b[3] ? a : "",
					Nf: b[1],
					Mf: b[3] || "",
					qb: b[4] || "",
					X: c
				}
			}
		},
		fi = function(a, b, c, d) {
			var e = di(a);
			if (e) {
				var f = function(Y) {
						return d.getWithConfig(Y)
					},
					h = !1 !== f(C.Ka),
					k = f(C.Ja) || f(C.Z),
					l = f(C.Y),
					m = f(C.ia),
					p = f(C.ca),
					r = f(C.ff),
					t = 3 === eg();
				if (b === C.I) {
					var q = {
							prefix: k,
							domain: l,
							wb: m,
							flags: p
						},
						u = f(C.xa) || {},
						w = f(C.Ib),
						v = void 0 === w ? !0 : !!w;
					if (h) {
						if (wf(u[C.hb], !!u[C.L])) {
							Nf(ei, q);
						}
						Kf(q);
						Pf(ei, q);
						Yf(v, q)
					}
					if (u[C.L]) {
						Of(ei, u[C.L], u[C.jb], !!u[C.ib], k);
					}
					if (r && r.exclusion_parameters && r.engines)
						if (dg()) {} else ai(r, t, h, q);
					var x = void 0 != f(C.N) && !1 !== f(C.N);
					Lh(!0, x, a);
					G(d.D)
				} else {
					var y = {},
						A = f(C.ef);
					if (Ta(A))
						for (var B in A)
							if (A.hasOwnProperty(B)) {
								var z = A[B];
								void 0 !== z && null !== z && (y[B] = z)
							} var D = "";
					if (5 === e.X || 6 === e.X) D = ci(f);
					var H = bi(d),
						M = !0 === f(C.Ye);
					if (dg() && M) {
						M = !1
					}
					var N = void 0 != f(C.N) && !1 !== f(C.N),
						Z = {
							qb: e.qb,
							Rc: h,
							lg: l,
							mg: m,
							Na: k,
							Rb: f(C.da),
							X: e.X,
							pg: y,
							Sc: e.Nf,
							Vc: e.Mf,
							C: d.C,
							D: d.D,
							hc: ne(oe(E.location.href)),
							jd: D,
							protocol: t ?
								"http:" : "https:",
							nd: f(C.Df),
							qd: M,
							sessionId: f(C.fc),
							uc: void 0,
							transactionId: f(C.nb),
							vc: void 0,
							ud: H,
							Tf: !1 !== f(C.fa),
							ig: d.ig,
							zb: N
						};
					$h(Z)
				}
			} else G(d.C)
		},
		ei = ["aw", "dc"];
	var hi = function(a) {
			function b() {
				var e = c,
					f = gi(JSON.stringify(a[e])),
					h = "https://www.google.com/travel/flights/click/conversion/" + gi(a.conversion_id) + "/?" + e +
					"=" + f;
				if (a.conversionLinkerEnabled) {
					var k = Wf("gf", a.cookiePrefix, void 0);
					if (k && k.length)
						for (var l = 0; l < k.length; l++) h += "&gclgf=" + gi(k[l])
				}
				mc(h, a.onSuccess, a.onFailure)
			}
			var c;
			if (a.hasOwnProperty("conversion_data")) c = "conversion_data";
			else if (a.hasOwnProperty("price")) c = "price";
			else return;
			var d = !0;
			d = Oc(C.o);
			d ? b() : Qc(b)
		},
		gi = function(a) {
			return null === a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a))
		};
	var ii = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
		ki = function(a, b, c, d) {
			var e = function(x) {
					return d.getWithConfig(x)
				},
				f = ag(a).B[0],
				h = !1 !== e(C.Ka),
				k = e(C.Ja) || e(C.Z),
				l = e(C.Y),
				m = e(C.ia),
				p = e(C.ca);
			if (b === C.I) {
				if (h) {
					var r = {
						prefix: k,
						domain: l,
						flags: p,
						wb: m
					};
					Kf(r);
					Pf(["aw", "dc"], r)
				}
				G(d.D)
			} else {
				var t = {
						conversion_id: f,
						onFailure: d.C,
						onSuccess: d.D,
						conversionLinkerEnabled: h,
						cookiePrefix: k
					},
					q = ii.test(E.location.href);
				if (b !== C.na) G(d.C);
				else {
					var w = {
							partner_id: f,
							trip_type: e(C.If),
							total_price: e(C.da),
							currency: e(C.ja),
							is_direct_booking: q,
							flight_segment: ji(e(C.T))
						},
						v = e(C.pe);
					v && "object" === typeof v && (w.passengers_total = Aa(v.total), w.passengers_adult = Aa(v
						.adult), w.passengers_child = Aa(v.child), w.passengers_infant_in_seat = Aa(v
						.infant_in_seat), w.passengers_infant_in_lap = Aa(v.infant_in_lap));
					t.conversion_data =
						w;
					hi(t)
				}
			}
		},
		ji = function(a) {
			if (a) {
				for (var b = [], c = 0, d = 0; d < a.length; ++d) {
					var e = a[d];
					!e || void 0 !== e.category && "" !== e.category && "FlightSegment" !== e.category || (b[c] = {
						cabin: e.travel_class,
						fare_product: e.fare_product,
						booking_code: e.booking_code,
						flight_number: e.flight_number,
						origin: e.origin,
						destination: e.destination,
						departure_date: e.start_date
					}, c++)
				}
				return b
			}
		};
	var pi = function(a, b, c, d) {
			function e() {
				if (k) {
					var A = b === C.Ia ? Wf("aw", l, void 0) : Wf("ha", l, void 0);
					w += A.map(function(B) {
						return "&gclha=" + encodeURIComponent(B)
					}).join("")
				}
				mc(w, d.D, d.C)
			}
			var f = ag(a),
				h = function(A) {
					return d.getWithConfig(A)
				},
				k = !1 !== h(C.Ka),
				l = h(C.Ja) || h(C.Z),
				m = h(C.Y),
				p = h(C.ia),
				r = h(C.ca);
			if (b === C.I) {
				var t = h(C.xa) || {};
				if (k) {
					var q = {
						prefix: l,
						domain: m,
						flags: r,
						wb: p
					};
					wf(t[C.hb], !!t[C.L]) && Nf(li, q);
					Kf(q);
					Pf(["aw", "dc"], q)
				}
				if (t[C.L]) {
					Of(li, t[C.L], t[C.jb], !!t[C.ib],
						l);
				}
				G(d.D)
			} else {
				var u = f.B[0];
				if (/^\d+$/.test(u)) {
					var w = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" +
						encodeURIComponent(u) + "/";
					if (b === C.na) {
						var v = mi(h(C.nb), h(C.da), h(C.ja), h(C.T));
						v = encodeURIComponent(ni(v));
						w += "?data=" + v
					} else if (b === C.Ia) {
						var x = oi(u, h(C.da), h(C.Ad), h(C.ja), h(C.T));
						x = encodeURIComponent(ni(x));
						w += "?label=FH&guid=ON&script=0&ord=" + va(0, 4294967295) + ("&price=" + x)
					} else {
						G(d.C);
						return
					}
					var y = !0;
					y = Oc(C.o);
					y ? e() : Qc(e)
				} else G(d.C)
			}
		},
		mi = function(a, b, c, d) {
			var e = {};
			qi(a) && (e.hct_booking_xref = a);
			g(c) && (e.hct_currency_code = c);
			qi(b) && (e.hct_total_price = b, e.hct_base_price = b);
			if (!pa(d) || 0 === d.length) return e;
			var f = d[0];
			if (!Ta(f)) return e;
			qi(f[ri.za]) && (e.hct_partner_hotel_id = f[ri.za]);
			g(f[ri.oa]) && (e.hct_checkin_date = f[ri.oa]);
			g(f[ri.Ya]) && (e.hct_checkout_date = f[ri.Ya]);
			return e
		},
		oi = function(a, b, c, d, e) {
			function f(p) {
				void 0 === p && (p = 0);
				if (qi(p)) return l +
					p
			}

			function h(p, r, t) {
				t(r) && (k[p] = r)
			}
			var k = {};
			k.partner_id = a;
			var l = "USD";
			g(d) && (l = k.currency = d);
			qi(b) && (k.base_price_value_string = f(b), k.display_price_value_string = f(b));
			qi(c) && (k.tax_price_value_string = f(c));
			g("LANDING_PAGE") && (k.page_type = "LANDING_PAGE");
			if (!pa(e) || 0 == e.length) return k;
			var m = e[0];
			if (!Ta(m)) return k;
			qi(m[ri.Od]) && (k.total_price_value_string = f(m[ri.Od]));
			h("partner_hotel_id", m[ri.za], qi);
			h("check_in_date", m[ri.oa], g);
			h("check_out_date", m[ri.Ya], g);
			h("adults", m[ri.vf], si);
			h(ri.Sd, m[ri.Sd],
				g);
			h(ri.Rd, m[ri.Rd], g);
			return k
		},
		ni = function(a) {
			var b = [];
			ya(a, function(c, d) {
				b.push(c + "=" + d)
			});
			return b.join(";")
		},
		qi = function(a) {
			return g(a) || si(a)
		},
		si = function(a) {
			return "number" === typeof a
		},
		ri = {
			za: "id",
			Od: "price",
			oa: "start_date",
			Ya: "end_date",
			vf: "occupancy",
			Sd: "room_id",
			Rd: "rate_rule_id"
		},
		li = ["ha"];
	var vi = function(a, b, c, d) {
			var e = ag(a),
				f = !1 !== d.getWithConfig(C.Ka),
				h = d.getWithConfig(C.Ja) || d.getWithConfig(C.Z),
				k = d.getWithConfig(C.ca);
			if (b === C.I) {
				if (f) {
					var l = {
						prefix: h,
						flags: k
					};
					Kf(l);
					Pf(["aw", "dc"], l)
				}
				G(d.D)
			} else if (b === C.na) {
				var m = d.getWithConfig(C.da),
					p = d.getWithConfig(C.ja),
					r = d.getWithConfig(C.pe),
					t = d.getWithConfig(C.T),
					q = {};
				if (g(m) || "number" === typeof m) q.base_price_value_string = "" + p + m, q
					.tax_price_value_string = p + "0";
				Ta(r) && "number" === typeof r.adult && (q.adult_count = r.adult);
				if (pa(t) && 0 !== t.length) {
					var u =
						t[0];
					if (Ta(u)) {
						if (g(u[ti.za]) || "number" === typeof u[ti.za]) q.partner_hotel_id = u[ti.za];
						g(u[ti.oa]) && (q.hotel_checkin_date = u[ti.oa]);
						var w = u[ti.Ya];
						g(w) && (q.hotel_checkout_date = w, q.return_date = w);
						if (1 !== t.length) {
							var v = t[1];
							if (Ta(v)) {
								q.origin_airport = v[ti.xf];
								q.departure_date = v[ti.oa];
								for (var x = [v[ti.Yd]], y = [v[ti.Bd]], A = [v[ti.Hd]], B = null !== w && g(w), z =
										1, D = 2; D < t.length; D++) {
									var H = t[D];
									Ta(H) && (x.push(H[ti.Yd]), y.push(H[ti.Bd]), A.push(H[ti.Hd]), B && H[ti.oa] <
										w && (z = D))
								}
								B && (q.destination_airport = t[z][ti.bf]);
								q.cabins = x.join(",");
								q.booking_codes = y.join(",");
								q.flight_numbers = A.join(",")
							}
						}
					}
				}
				ui(e.B[0], q, f, h, d.D, d.C)
			} else G(d.C)
		},
		ui = function(a, b, c, d, e, f) {
			function h() {
				c && (m += Wf("gp", d, void 0).map(function(r) {
					return "&gclgp=" + encodeURIComponent(r)
				}).join(""));
				mc(m, e, f)
			}
			if (/^\d+$/.test(a)) {
				var k = encodeURIComponent(a),
					l = encodeURIComponent(wi(b)),
					m = "https://www.googletraveladservices.com/travel/vacations/clk/pagead/conversion/" + k +
					"/?data=" + l,
					p = !0;
				p = Oc(C.o);
				p ? h() : Qc(h)
			} else G(f)
		},
		wi = function(a) {
			var b = [],
				c;
			for (c in a) a.hasOwnProperty(c) && b.push(c + "=" + a[c]);
			return b.join(";")
		},
		ti = {
			za: "id",
			oa: "start_date",
			Ya: "end_date",
			xf: "origin",
			Yd: "travel_class",
			Bd: "booking_code",
			Hd: "flight_number",
			bf: "destination"
		};
	var Gi = function(a, b, c) {
			var d = "https://www.google-analytics.com/analytics.js",
				e = $g();
			if (na(e)) {
				var f = "gtag_" + a.split("-").join("_"),
					h = function(v) {
						var x = [].slice.call(arguments, 0);
						x[0] = f + "." + x[0];
						e.apply(window, x)
					},
					k = function() {
						var v = function(B, z) {
								for (var D = 0; z && D < z.length; D++) h(B, z[D])
							},
							x = xi(b, c);
						if (x) {
							var y = x.action;
							if ("impressions" === y) v("ec:addImpression", x.Gg);
							else if ("promo_click" === y || "promo_view" === y) {
								var A = x.kd;
								v("ec:addPromo", x.kd);
								A && 0 < A.length && "promo_click" === y && h("ec:setAction", y)
							} else v("ec:addProduct",
								x.Ra), h("ec:setAction", y, x.pb)
						}
					},
					l = function() {
						if (dg()) {} else {
							var v = c.getWithConfig(C.zf);
							v && (h("require", v, {
								dataLayer: "dataLayer"
							}), h("require", "render"))
						}
					},
					m = yi(a, f, b, c),
					p = function(v, x, y) {
						y && (x = "" + x);
						m.ra[v] = x
					};
				zi(f, m.Oa) && (e(function() {
					Yg() && Yg().remove(f)
				}), Ai[f] = !1);
				e("create", a, m.Oa);
				(function() {
					var v = c.getWithConfig("custom_map");
					e(function() {
						if (Ta(v)) {
							var x = m.ra,
								y = Yg().getByName(f),
								A;
							for (A in v)
								if (v.hasOwnProperty(A) && /^(dimension|metric)\d+$/.test(A) &&
									void 0 != v[A]) {
									var B = y.get(Bi(v[A]));
									Ci(x, A, B)
								}
						}
					})
				})();
				(function(v) {
					if (v) {
						var x = {};
						if (Ta(v))
							for (var y in Di) Di.hasOwnProperty(y) && Ei(Di[y], y, v[y], x);
						h("require", "linkid", x)
					}
				})(m.linkAttribution);
				var t = m[C.xa];
				if (t && t[C.L]) {
					var q = t[C.jb];
					ah(f + ".", t[C.L], void 0 ===
						q ? !!t.use_anchor : "fragment" === q, !!t[C.ib])
				}
				if (b === C.xd) l(), h("send", "pageview", m.ra);
				else if (b === C.I) {
					l();
					qg(a, c);
					0 != m.sendPageView && h("send", "pageview", m.ra)
				} else "screen_view" === b ? h("send", "screenview", m.ra) : "timing_complete" === b ? (p(
					"timingCategory", m.eventCategory, !0), p("timingVar", m.name, !0), p("timingValue", Aa(
					m.value)), void 0 !== m.eventLabel && p("timingLabel",
					m.eventLabel, !0), h("send", "timing", m.ra)) : "exception" === b ? h("send", "exception", m
					.ra) : "optimize.callback" !== b && (0 <= qa([C.wd, "select_content", C.Ia, C.Vb, C.Xb, C
					.fb, "set_checkout_option", C.na, C.Zb, "view_promotion", "checkout_progress"
				], b) && (h("require", "ec", "ec.js"), k()), p("eventCategory", m.eventCategory, !0), p(
					"eventAction", m.eventAction || b, !0), void 0 !== m.eventLabel && p("eventLabel", m
					.eventLabel, !0), void 0 !== m.value && p("eventValue", Aa(m.value)), h("send", "event",
					m.ra));
				if (!Fi) {
					Fi = !0;
					Tg();
					var u = c.C,
						w = function() {
							Yg().loaded ||
								u()
						};
					dg() ? G(w) : jc(d, w, u)
				}
			} else G(c.C)
		},
		Hi = function(a, b, c, d) {
			Rc(function() {
				Gi(a, b, d)
			}, [C.H, C.o])
		},
		Fi, Ai = {},
		Ii = {
			client_id: 1,
			client_storage: "storage",
			cookie_name: 1,
			cookie_domain: 1,
			cookie_expires: 1,
			cookie_path: 1,
			cookie_update: 1,
			cookie_flags: 1,
			sample_rate: 1,
			site_speed_sample_rate: 1,
			use_amp_client_id: 1,
			store_gac: 1,
			conversion_linker: "storeGac"
		},
		Ji = {
			anonymize_ip: 1,
			app_id: 1,
			app_installer_id: 1,
			app_name: 1,
			app_version: 1,
			campaign: {
				name: "campaignName",
				source: "campaignSource",
				medium: "campaignMedium",
				term: "campaignTerm",
				content: "campaignContent",
				id: "campaignId"
			},
			currency: "currencyCode",
			description: "exDescription",
			fatal: "exFatal",
			language: 1,
			non_interaction: 1,
			page_hostname: "hostname",
			page_referrer: "referrer",
			page_path: "page",
			page_location: "location",
			page_title: "title",
			screen_name: 1,
			transport_type: "transport",
			user_id: 1
		},
		Ki = {
			content_id: 1,
			event_category: 1,
			event_action: 1,
			event_label: 1,
			link_attribution: 1,
			linker: 1,
			method: 1,
			name: 1,
			send_page_view: 1,
			value: 1
		},
		Di = {
			cookie_name: 1,
			cookie_expires: "duration",
			levels: 1
		},
		Li = {
			anonymize_ip: 1,
			fatal: 1,
			non_interaction: 1,
			use_amp_client_id: 1,
			send_page_view: 1,
			store_gac: 1,
			conversion_linker: 1
		},
		Ei = function(a, b, c, d) {
			if (void 0 !== c)
				if (Li[b] && (c = Ca(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[Bi(b)] = c;
				else if (g(a)) d[a] = c;
			else
				for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
		},
		Bi = function(a) {
			return a && g(a) ? a.replace(/(_[a-z])/g, function(b) {
				return b[1].toUpperCase()
			}) : a
		},
		Mi = function(a) {
			var b = "general";
			0 <= qa([C.Kd, C.Vb, C.Nd, C.fb, "checkout_progress", C.na, C.Zb, C.Xb, "set_checkout_option"],
				a) ? b = "ecommerce" : 0 <= qa(
				"generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results"
				.split(" "), a) ? b = "engagement" : "exception" === a && (b = "error");
			return b
		},
		Ci = function(a, b, c) {
			a.hasOwnProperty(b) || (a[b] = c)
		},
		Ni = function(a) {
			if (pa(a)) {
				for (var b = [], c = 0; c < a.length; c++) {
					var d = a[c];
					if (void 0 != d) {
						var e = d.id,
							f = d.variant;
						void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
					}
				}
				return 0 < b.length ? b.join("!") : void 0
			}
		},
		yi = function(a, b, c, d) {
			var e = function(z) {
					return d.getWithConfig(z)
				},
				f = {},
				h = {},
				k = {},
				l = Ni(e(C.qf));
			l && Ci(h, "exp", l);
			var m = e("custom_map");
			if (Ta(m))
				for (var p in m)
					if (m.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != m[p]) {
						var r = e(String(m[p]));
						void 0 !== r && Ci(h, p, r)
					} for (var t = Fh(d), q = 0; q < t.length; ++q) {
				var u = t[q],
					w = e(u);
				if (Ki.hasOwnProperty(u)) Ei(Ki[u], u, w, f);
				else if (Ji.hasOwnProperty(u)) Ei(Ji[u], u, w, h);
				else if (Ii.hasOwnProperty(u)) Ei(Ii[u], u, w, k);
				else if (/^(dimension|metric|content_group)\d+$/.test(u)) Ei(1, u, w, h);
				else if ("developer_id" === u) {} else u === C.Z && 0 > qa(t, C.ac) && (k.cookieName = w + "_ga")
			}
			Ci(k, "cookieDomain", "auto");
			Ci(h, "forceSSL", !0);
			Ci(f, "eventCategory", Mi(c));
			0 <= qa(["view_item", "view_item_list", "view_promotion", "view_search_results"], c) && Ci(h,
				"nonInteraction", !0);
			"login" === c || "sign_up" === c || "share" === c ? Ci(f, "eventLabel", e(C.yf)) : "search" === c ||
				"view_search_results" === c ? Ci(f, "eventLabel", e(C.Gf)) : "select_content" === c && Ci(f,
					"eventLabel", e(C.cf));
			var x =
				f[C.xa] || {},
				y = x[C.hb];
			y || 0 != y && x[C.L] ? k.allowLinker = !0 : !1 === y && Ci(k, "useAmpClientId", !1);
			if (!1 === e(C.$e) || !1 === e(C.fa) || !1 === e(C.Za)) h.allowAdFeatures = !1;
			!1 === e(C.fa) && I("GTM", 27);
			k.name = b;
			h["&gtm"] = Jh(!0);
			h.hitCallback = d.D;
			Hc() && (h["&gcs"] = Pc(), Oc(C.H) || (k.storage = "none"), Oc(C.o) || (h.allowAdFeatures = !1, k
				.storeGac = !1));
			var A = e(C.va) || e(C.uf) || Yd("gtag.remote_config." + a + ".url", 2),
				B = e(C.tf) || Yd("gtag.remote_config." +
					a + ".dualId", 2);
			if (A && null != gc) {
				k._x_19 = A;
			}
			B && (k._x_20 = B);
			f.ra = h;
			f.Oa = k;
			return f
		},
		xi = function(a, b) {
			function c(w) {
				var v = n(w);
				v.list = w.list_name;
				v.listPosition = w.list_position;
				v.position = w.list_position || w.creative_slot;
				v.creative = w.creative_name;
				return v
			}

			function d(w) {
				for (var v = [], x = 0; w && x < w.length; x++) w[x] && v.push(c(w[x]));
				return v.length ? v : void 0
			}

			function e(w) {
				return {
					id: f(C.nb),
					affiliation: f(C.hf),
					revenue: f(C.da),
					tax: f(C.Ad),
					shipping: f(C.nf),
					coupon: f(C.kf),
					list: f(C.wc) || w
				}
			}
			for (var f = function(w) {
					return b.getWithConfig(w)
				}, h = f(C.T), k, l = 0; h && l < h.length && !(k = h[l][C.wc]); l++);
			var m = f("custom_map");
			if (Ta(m))
				for (var p = 0; h && p < h.length; ++p) {
					var r = h[p],
						t;
					for (t in m) m.hasOwnProperty(t) && /^(dimension|metric)\d+$/.test(t) && void 0 != m[t] && Ci(r,
						t, r[m[t]])
				}
			var q = null,
				u = f(C.lf);
			a === C.na || a === C.Zb ? q = {
					action: a,
					pb: e(),
					Ra: d(h)
				} : a === C.Vb ? q = {
					action: "add",
					Ra: d(h)
				} : a === C.Xb ? q = {
					action: "remove",
					Ra: d(h)
				} :
				a === C.Ia ? q = {
					action: "detail",
					pb: e(k),
					Ra: d(h)
				} : a === C.wd ? q = {
					action: "impressions",
					Gg: d(h)
				} : "view_promotion" === a ? q = {
					action: "promo_view",
					kd: d(u)
				} : "select_content" === a && u && 0 < u.length ? q = {
					action: "promo_click",
					kd: d(u)
				} : "select_content" === a ? q = {
					action: "click",
					pb: {
						list: f(C.wc) || k
					},
					Ra: d(h)
				} : a === C.fb || "checkout_progress" === a ? q = {
					action: "checkout",
					Ra: d(h),
					pb: {
						step: a === C.fb ? 1 : f(C.fe),
						option: f(C.ee)
					}
				} : "set_checkout_option" === a && (q = {
					action: "checkout_option",
					pb: {
						step: f(C.fe),
						option: f(C.ee)
					}
				});
			q && (q.Ph = f(C.ja));
			return q
		},
		Oi = {},
		zi = function(a, b) {
			var c = Oi[a];
			Oi[a] = n(b);
			if (!c) return !1;
			for (var d in b)
				if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
			for (var e in c)
				if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
			return !1
		};
	var Pi = {},
		Qi = ["G", "GP"];
	Pi.Xe = "";
	var Ri = Pi.Xe.split(",");

	function Si() {
		var a = kd;
		return a.gcq = a.gcq || new Ti
	}
	var Ui = function(a, b, c) {
			Si().register(a, b, c)
		},
		Vi = function(a, b, c, d) {
			Si().push("event", [b, a], c, d)
		},
		Wi = function(a, b) {
			Si().push("config", [a], b)
		},
		Xi = {},
		Yi = function(a) {
			return !0
		},
		Zi = function() {
			this.status = 1;
			this.containerConfig = {};
			this.targetConfig = {};
			this.i = {};
			this.m = null;
			this.h = !1
		},
		$i = function(a, b, c, d, e) {
			this.type = a;
			this.m = b;
			this.ba = c ||
				"";
			this.h = d;
			this.i = e
		},
		Ti = function() {
			this.m = {};
			this.i = {};
			this.h = []
		},
		aj = function(a, b) {
			var c = ag(b);
			return a.m[c.containerId] = a.m[c.containerId] || new Zi
		},
		bj = function(a, b, c) {
			if (b) {
				var d = ag(b);
				if (d && 1 === aj(a, b).status && Yi(d.prefix)) {
					aj(a, b).status = 2;
					var e = {};
					Od && (e.timeoutId = E.setTimeout(function() {
						I("GTM", 38);
						Ad()
					}, 3E3));
					a.push("require", [e], d.containerId);
					Xi[d.containerId] = Fa();
					if (dg()) {} else {
						var h = "/gtag/js?id=" + encodeURIComponent(d.containerId) + "&l=dataLayer&cx=c",
							k = ("http:" != E.location.protocol ? "https:" : "http:") + (
								"//www.googletagmanager.com" + h),
							l = vh(c, h) || k;
						jc(l)
					}
				}
			}
		},
		cj = function(a, b, c, d) {
			if (d.ba) {
				var e = aj(a, d.ba),
					f = e.m;
				if (f) {
					var h = n(c),
						k = n(e.targetConfig[d.ba]),
						l = n(e.containerConfig),
						m = n(e.i),
						p = n(a.i),
						r = Yd("gtm.uniqueEventId"),
						t = ag(d.ba).prefix,
						q = Eh(Dh(Ch(Bh(Ah(zh(yh(h), k), l), m), p), function() {
							Sd(r, t, "2");
						}), function() {
							Sd(r, t, "3");
						});
					try {
						Sd(r, t, "1");
						f(d.ba, b, d.m, q)
					} catch (u) {
						Sd(r, t, "4");
					}
				}
			}
		};
	Ti.prototype.register = function(a, b, c) {
		if (3 !== aj(this, a).status) {
			aj(this, a).m = b;
			aj(this, a).status = 3;
			c && (aj(this, a).i = c);
			var d = ag(a),
				e = Xi[d.containerId];
			if (void 0 !== e) {
				var f = kd[d.containerId].bootstrap,
					h = d.prefix.toUpperCase();
				kd[d.containerId]._spx && (h = h.toLowerCase());
				var k = Yd("gtm.uniqueEventId"),
					l = h,
					m = Fa() - f;
				if (Od && !Fd[k]) {
					k !== Bd && (zd(), Bd = k);
					var p = l + "." + Math.floor(f - e) + "." + Math.floor(m);
					Kd = Kd ? Kd + "," + p : "&cl=" + p
				}
				delete Xi[d.containerId]
			}
			this.flush()
		}
	};
	Ti.prototype.push = function(a, b, c, d) {
		var e = Math.floor(Fa() / 1E3);
		bj(this, c, b[0][C.va] || this.i[C.va]);
		this.h.push(new $i(a, e, c, b, d));
		d || this.flush()
	};
	Ti.prototype.flush = function(a) {
		for (var b = this; this.h.length;) {
			var c = this.h[0];
			if (c.i) c.i = !1, this.h.push(c);
			else switch (c.type) {
				case "require":
					if (3 !== aj(this, c.ba).status && !a) return;
					Od && E.clearTimeout(c.h[0].timeoutId);
					break;
				case "set":
					ya(c.h[0], function(l, m) {
						n(Ma(l, m), b.i)
					});
					break;
				case "config":
					var d = c.h[0],
						e = !!d[C.jc];
					delete d[C.jc];
					var f = aj(this, c.ba),
						h = ag(c.ba),
						k = h.containerId === h.id;
					e || (k ? f.containerConfig = {} : f.targetConfig[c.ba] = {});
					f.h && e || cj(this, C.I, d, c);
					f.h = !0;
					delete d[C.ab];
					k ? n(d, f.containerConfig) :
						n(d, f.targetConfig[c.ba]);
					break;
				case "event":
					cj(this, c.h[1], c.h[0], c)
			}
			this.h.shift()
		}
	};
	var dj = ["HA", "GF", "GP", "G"],
		ej = "G".split(/,/);
	ej.push("DC");
	ej.push("UA");
	ej.push("AW");
	var fj = !1;
	fj = !0;
	var gj = null,
		hj = {},
		ij = {},
		jj;

	function kj(a, b) {
		var c = {
			event: a
		};
		b && (c.eventModel = n(b), b[C.Ac] && (c.eventCallback = b[C.Ac]), b[C.Jb] && (c.eventTimeout = b[C.Jb]));
		return c
	}
	var lj = function() {
			gj = gj || !kd.gtagRegistered;
			kd.gtagRegistered = !0;
			return gj
		},
		mj = function(a) {
			if (void 0 === ij[a.id]) {
				var b;
				switch (a.prefix) {
					case "UA":
						b = th("gtagua", {
							trackingId: a.id
						});
						break;
					case "AW":
						b = th("gtagaw", {
							conversionId: a
						});
						break;
					case "DC":
						b = th("gtagfl", {
							targetId: a.id
						});
						break;
					case "GF":
						b = th("gtaggf", {
							conversionId: a
						});
						break;
					case "HA":
						b = th("gtagha", {
							conversionId: a
						});
						break;
					case "GP":
						b = th("gtaggp", {
							conversionId: a.id
						});
						break;
					default:
						return
				}
				if (!jj) {
					var c = Ab("v", {
						name: "send_to",
						dataLayerVersion: 2
					});
					rb.push(c);
					jj = ["macro", rb.length - 1]
				}
				var d = {
					arg0: jj,
					arg1: a.id,
					ignore_case: !1
				};
				d[Hb.wa] = "_lc";
				tb.push(d);
				var e = {
					"if": [tb.length - 1],
					add: [b]
				};
				e["if"] && (e.add || e.block) && sb.push(e);
				ij[a.id] = b
			}
		},
		nj = function(a) {
			ya(hj, function(b, c) {
				var d = qa(c, a);
				0 <= d && c.splice(d, 1)
			})
		},
		oj = function(a) {
			if (a.containerId !== jd.s && "G" !== a.prefix) {
				var b;
				switch (a.prefix) {
					case "UA":
						b = 14;
						break;
					case "AW":
						b = 15;
						break;
					case "DC":
						b = 16;
						break;
					default:
						b = 17
				}
				I("GTM", b)
			}
		};
	var pj = {
		config: function(a) {
			var b = a[2] || {};
			if (2 > a.length || !g(a[1]) || !Ta(b)) return;
			var c = ag(a[1]);
			if (!c) return;
			nj(c.id);
			var d = c.id,
				e = b[C.Cc] || "default";
			e = e.toString().split(",");
			for (var f = 0; f < e.length; f++) hj[e[f]] = hj[e[f]] || [], hj[e[f]].push(d);
			delete b[C.Cc];
			wd();
			if (lj()) {
				n(b);
				if (fj && -1 !== qa(ej, c.prefix) || -1 !== qa(dj, c.prefix)) {
					"G" === c.prefix && (b[C.ab] = !0);
					Wi(b, c.id);
					return
				}
				mj(c);
				oj(c)
			}
			be("gtag.targets." + c.id, void 0);
			be("gtag.targets." + c.id, n(b));
			var h = {};
			h[C.ya] = c.id;
			return kj(C.I, h);
		},
		event: function(a) {
			var b = a[1];
			if (g(b) && !(3 < a.length)) {
				var c;
				if (2 < a.length) {
					if (!Ta(a[2]) && void 0 != a[2]) return;
					c = a[2]
				}
				var d = kj(b, c);
				var e;
				var f = c && c[C.ya];
				void 0 === f && (f = Yd(C.ya, 2), void 0 === f && (f = "default"));
				if (g(f) || pa(f)) {
					for (var h = f.toString().replace(/\s+/g, "").split(","), k = [], l = 0; l < h
						.length; l++) 0 <= h[l].indexOf("-") ? k.push(h[l]) : k = k.concat(hj[h[l]] || []);
					e = cg(k)
				} else e = void 0;
				var m = e;
				if (!m) return;
				var p = lj();
				wd();
				for (var r = [], t = 0; p && t < m.length; t++) {
					var q = m[t];
					oj(q);
					if (fj && -1 !== qa(ej, q.prefix) || -1 !== qa(dj, q.prefix)) {
						var u = n(c);
						"G" === q.prefix && (u[C.ab] = !0);
						Vi(b, u, q.id)
					} else mj(q);
					r.push(q.id)
				}
				d.eventModel = d.eventModel || {};
				0 < m.length ? d.eventModel[C.ya] = r.join() : delete d.eventModel[C.ya];
				return d
			}
		},
		js: function(a) {
			if (2 == a.length && a[1].getTime) return {
				event: "gtm.js",
				"gtm.start": a[1].getTime()
			}
		},
		policy: function() {},
		set: function(a) {
			var b;
			2 == a.length && Ta(a[1]) ? b = n(a[1]) : 3 == a.length && g(a[1]) && (b = {},
				Ta(a[2]) || pa(a[2]) ? b[a[1]] = n(a[2]) : b[a[1]] = a[2]);
			if (b) {
				if (lj()) {
					wd();
					var c = n(b);
					Si().push("set", [c]);
					n(b)
				}
				b._clear = !0;
				return b
			}
		}
	};
	var qj = {
		policy: !0
	};
	var rj = function(a, b) {
			var c = a.hide;
			if (c && void 0 !== c[b] && c.end) {
				c[b] = !1;
				var d = !0,
					e;
				for (e in c)
					if (c.hasOwnProperty(e) && !0 === c[e]) {
						d = !1;
						break
					} d && (c.end(), c.end = null)
			}
		},
		tj = function(a) {
			var b = sj(),
				c = b && b.hide;
			c && c.end && (c[a] = !0)
		};
	var uj = !1,
		vj = [];

	function wj() {
		if (!uj) {
			uj = !0;
			for (var a = 0; a < vj.length; a++) G(vj[a])
		}
	}
	var xj = function(a) {
		uj ? G(a) : vj.push(a)
	};
	var Pj = function(a) {
		if (Oj(a)) return a;
		this.h = a
	};
	Pj.prototype.Dg = function() {
		return this.h
	};
	var Oj = function(a) {
		return !a || "object" !== Qa(a) || Ta(a) ? !1 : "getUntrustedUpdateValue" in a
	};
	Pj.prototype.getUntrustedUpdateValue = Pj.prototype.Dg;
	var Qj = [],
		Rj = !1,
		Sj = function(a) {
			return E["dataLayer"].push(a)
		},
		Tj = function(a) {
			var b = kd["dataLayer"],
				c = b ? b.subscribers : 1,
				d = 0;
			return function() {
				++d === c && a()
			}
		};

	function Uj(a) {
		var b = a._clear;
		ya(a, function(f, h) {
			"_clear" !== f && (b && be(f, void 0), be(f, h))
		});
		qd || (qd = a["gtm.start"]);
		var c = a.event,
			d = a["gtm.uniqueEventId"];
		if (!c) return !1;
		d || (d = wd(), a["gtm.uniqueEventId"] = d, be("gtm.uniqueEventId", d));
		sd = c;
		var e = Vj(a);
		sd = null;
		switch (c) {
			case "gtm.init":
				I("GTM", 19), e && I("GTM", 20)
		}
		return e
	}

	function Vj(a) {
		var b = a.event,
			c = a["gtm.uniqueEventId"],
			d, e = kd.zones;
		d = e ? e.checkState(jd.s, c) : Cg;
		return d.active ? sh(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
	}

	function Wj() {
		for (var a = !1; !Rj && 0 < Qj.length;) {
			Rj = !0;
			delete Vd.eventModel;
			Xd();
			var b = Qj.shift();
			if (null != b) {
				var c = Oj(b);
				if (c) {
					var d = b;
					b = Oj(d) ? d.getUntrustedUpdateValue() : void 0;
					for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], f = 0; f < e.length; f++) {
						var h = e[f],
							k = Yd(h, 1);
						if (pa(k) || Ta(k)) k = n(k);
						Wd[h] = k
					}
				}
				try {
					if (na(b)) try {
						b.call(Zd)
					} catch (w) {} else if (pa(b)) {
						var l = b;
						if (g(l[0])) {
							var m =
								l[0].split("."),
								p = m.pop(),
								r = l.slice(1),
								t = Yd(m.join("."), 2);
							if (void 0 !== t && null !== t) try {
								t[p].apply(t, r)
							} catch (w) {}
						}
					} else {
						var q = b;
						if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype
								.hasOwnProperty.call(q, "callee"))) {
							a: {
								if (b.length && g(b[0])) {
									var u = pj[b[0]];
									if (u && (!c || !qj[b[0]])) {
										b = u(b);
										break a
									}
								}
								b = void 0
							}
							if (!b) {
								Rj = !1;
								continue
							}
						}
						a = Uj(b) || a
					}
				} finally {
					c && Xd(!0)
				}
			}
			Rj = !1
		}
		return !a
	}

	function Xj() {
		var a = Wj();
		try {
			rj(E["dataLayer"], jd.s)
		} catch (b) {}
		return a
	}
	var Zj = function() {
			var a = hc("dataLayer", []),
				b = hc("google_tag_manager", {});
			b = b["dataLayer"] = b["dataLayer"] || {};
			Kg(function() {
				b.gtmDom || (b.gtmDom = !0, a.push({
					event: "gtm.dom"
				}))
			});
			xj(function() {
				b.gtmLoad || (b.gtmLoad = !0, a.push({
					event: "gtm.load"
				}))
			});
			b.subscribers = (b.subscribers || 0) + 1;
			var c = a.push;
			a.push = function() {
				var d;
				if (0 < kd.SANDBOXED_JS_SEMAPHORE) {
					d = [];
					for (var e = 0; e < arguments.length; e++) d[e] = new Pj(arguments[e])
				} else d = [].slice.call(arguments, 0);
				var f = c.apply(a, d);
				Qj.push.apply(Qj, d);
				if (300 <
					this.length)
					for (I("GTM", 4); 300 < this.length;) this.shift();
				var h = "boolean" !== typeof f || f;
				return Wj() && h
			};
			Qj.push.apply(Qj, a.slice(0));
			Yj() && G(Xj)
		},
		Yj = function() {
			var a = !0;
			return a
		};
	var ak = {};
	ak.Kb = new String("undefined");
	var bk = function(a) {
		this.h = function(b) {
			for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === ak.Kb ? b : a[d]);
			return c.join("")
		}
	};
	bk.prototype.toString = function() {
		return this.h("undefined")
	};
	bk.prototype.valueOf = bk.prototype.toString;
	ak.Ff = bk;
	ak.Kc = {};
	ak.ng = function(a) {
		return new bk(a)
	};
	var ck = {};
	ak.kh = function(a, b) {
		var c = wd();
		ck[c] = [a, b];
		return c
	};
	ak.ne = function(a) {
		var b = a ? 0 : 1;
		return function(c) {
			var d = ck[c];
			if (d && "function" === typeof d[b]) d[b]();
			ck[c] = void 0
		}
	};
	ak.Lg = function(a) {
		for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
			b || 8 === a[d], c = c || 16 === a[d];
		return b && c
	};
	ak.bh = function(a) {
		if (a === ak.Kb) return a;
		var b = wd();
		ak.Kc[b] = a;
		return 'google_tag_manager["' + jd.s + '"].macro(' + b + ")"
	};
	ak.Vg = function(a, b, c) {
		a instanceof ak.Ff && (a = a.h(ak.kh(b, c)), b = ma);
		return {
			Xc: a,
			D: b
		}
	};
	var dk = function(a, b, c) {
			function d(f, h) {
				var k = f[h];
				return k
			}
			var e = {
				event: b,
				"gtm.element": a,
				"gtm.elementClasses": d(a, "className"),
				"gtm.elementId": a["for"] || pc(a, "id") || "",
				"gtm.elementTarget": a.formTarget || d(a, "target") || ""
			};
			c && (e["gtm.triggers"] = c.join(","));
			e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a,
					"href") || a.src || a.code || a.codebase ||
				"";
			return e
		},
		ek = function(a) {
			kd.hasOwnProperty("autoEventsSettings") || (kd.autoEventsSettings = {});
			var b = kd.autoEventsSettings;
			b.hasOwnProperty(a) || (b[a] = {});
			return b[a]
		},
		fk = function(a, b, c) {
			ek(a)[b] = c
		},
		gk = function(a, b, c, d) {
			var e = ek(a),
				f = Ha(e, b, d);
			e[b] = c(f)
		},
		hk = function(a, b, c) {
			var d = ek(a);
			return Ha(d, b, c)
		};
	var ik = ["input", "select", "textarea"],
		jk = ["button", "hidden", "image", "reset", "submit"],
		kk = function(a) {
			var b = a.tagName.toLowerCase();
			return !sa(ik, function(c) {
				return c === b
			}) || "input" === b && sa(jk, function(c) {
				return c === a.type.toLowerCase()
			}) ? !1 : !0
		},
		lk = function(a) {
			return a.form ? a.form.tagName ? a.form : F.getElementById(a.form) : sc(a, ["form"], 100)
		},
		mk = function(a, b, c) {
			if (!a.elements) return 0;
			for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
				var h = a.elements[e];
				if (kk(h)) {
					if (h.getAttribute(c) === d) return f;
					f++
				}
			}
			return 0
		};
	var nk = !!E.MutationObserver,
		ok = void 0,
		pk = function(a) {
			if (!ok) {
				var b = function() {
					var c = F.body;
					if (c)
						if (nk)(new MutationObserver(function() {
							for (var e = 0; e < ok.length; e++) G(ok[e])
						})).observe(c, {
							childList: !0,
							subtree: !0
						});
						else {
							var d = !1;
							nc(c, "DOMNodeInserted", function() {
								d || (d = !0, G(function() {
									d = !1;
									for (var e = 0; e < ok.length; e++) G(ok[e])
								}))
							})
						}
				};
				ok = [];
				F.body ? b() : G(b)
			}
			ok.push(a)
		};
	var Kk = E.clearTimeout,
		Lk = E.setTimeout,
		K = function(a, b, c) {
			if (dg()) {
				b && G(b)
			} else return jc(a, b, c)
		},
		Mk = function() {
			return E.location.href
		},
		Nk = function(a) {
			return me(oe(a), "fragment")
		},
		Ok = function(a) {
			return ne(oe(a))
		},
		Q = function(a, b) {
			return Yd(a, b || 2)
		},
		Pk = function(a, b, c) {
			var d;
			b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Sj(a)) : d = Sj(a);
			return d
		},
		Qk = function(a, b) {
			E[a] = b
		},
		R = function(a, b, c) {
			b && (void 0 === E[a] || c && !E[a]) && (E[a] =
				b);
			return E[a]
		},
		Rk = function(a, b, c) {
			return ue(a, b, void 0 === c ? !0 : !!c)
		},
		Sk = function(a, b) {
			if (dg()) {
				b && G(b)
			} else lc(a, b)
		},
		Tk = function(a) {
			return !!hk(a, "init", !1)
		},
		Uk = function(a) {
			fk(a, "init", !0)
		},
		Vk = function(a, b) {
			var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : pd;
			c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
			K(fg("https://", "http://", c))
		},
		Wk = function(a, b) {
			var c = a[b];
			return c
		};
	var Xk = ak.Vg;

	function tl(a, b) {
		a = String(a);
		b = String(b);
		var c = a.length - b.length;
		return 0 <= c && a.indexOf(b, c) == c
	}
	var ul = new wa;

	function vl(a, b) {
		function c(h) {
			var k = oe(h),
				l = me(k, "protocol"),
				m = me(k, "host", !0),
				p = me(k, "port"),
				r = me(k, "path").toLowerCase().replace(/\/$/, "");
			if (void 0 === l || "http" == l && "80" == p || "https" == l && "443" == p) l = "web", p = "default";
			return [l, m, p, r]
		}
		for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
			if (d[f] !== e[f]) return !1;
		return !0
	}

	function wl(a) {
		return xl(a) ? 1 : 0
	}

	function xl(a) {
		var b = a.arg0,
			c = a.arg1;
		if (a.any_of && pa(c)) {
			for (var d = 0; d < c.length; d++)
				if (wl({
						"function": a["function"],
						arg0: b,
						arg1: c[d]
					})) return !0;
			return !1
		}
		switch (a["function"]) {
			case "_cn":
				return 0 <= String(b).indexOf(String(c));
			case "_css":
				var e;
				a: {
					if (b) {
						var f = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector",
							"oMatchesSelector"
						];
						try {
							for (var h = 0; h < f.length; h++)
								if (b[f[h]]) {
									e = b[f[h]](c);
									break a
								}
						} catch (t) {}
					}
					e = !1
				}
				return e;
			case "_ew":
				return tl(b, c);
			case "_eq":
				return String(b) == String(c);
			case "_ge":
				return Number(b) >= Number(c);
			case "_gt":
				return Number(b) > Number(c);
			case "_lc":
				var k;
				k = String(b).split(",");
				return 0 <= qa(k, String(c));
			case "_le":
				return Number(b) <= Number(c);
			case "_lt":
				return Number(b) < Number(c);
			case "_re":
				var l;
				var m = a.ignore_case ? "i" : void 0;
				try {
					var p = String(c) + m,
						r = ul.get(p);
					r || (r = new RegExp(c, m), ul.set(p, r));
					l = r.test(b)
				} catch (t) {
					l = !1
				}
				return l;
			case "_sw":
				return 0 == String(b).indexOf(String(c));
			case "_um":
				return vl(b, c)
		}
		return !1
	};
	var yl = function(a, b) {
		var c = function() {};
		c.prototype = a.prototype;
		var d = new c;
		a.apply(d, Array.prototype.slice.call(arguments, 1));
		return d
	};
	var zl = {},
		Al = encodeURI,
		V = encodeURIComponent,
		Bl = mc;
	var Cl = function(a, b) {
		if (!a) return !1;
		var c = me(oe(a), "host");
		if (!c) return !1;
		for (var d = 0; b && d < b.length; d++) {
			var e = b[d] && b[d].toLowerCase();
			if (e) {
				var f = c.length - e.length;
				0 < f && "." != e.charAt(0) && (f--, e = "." + e);
				if (0 <= f && c.indexOf(e, f) == f) return !0
			}
		}
		return !1
	};
	var Dl = function(a, b, c) {
		for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f]
			.hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
		return e ? d : null
	};
	zl.Mg = function() {
		var a = !1;
		return a
	};

	function Vm() {
		return E.gaGlobal = E.gaGlobal || {}
	}
	var Wm = function() {
		var a = Vm();
		a.hid = a.hid || va();
		return a.hid
	};
	var gn = window,
		hn = document,
		jn = function(a) {
			var b = gn._gaUserPrefs;
			if (b && b.ioo && b.ioo() || a && !0 === gn["ga-disable-" + a]) return !0;
			try {
				var c = gn.external;
				if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
			} catch (f) {}
			for (var d = qe("AMP_TOKEN", String(hn.cookie), !0), e = 0; e < d.length; e++)
				if ("$OPT_OUT" == d[e]) return !0;
			return hn.getElementById("__gaOptOutExtension") ? !0 : !1
		};

	function mn(a, b) {
		delete b.eventModel[C.ab];
		if (a !== C.I) {
			var c = b.getWithConfig(C.bc);
			if (pa(c)) {
				I("GTM", 26);
				for (var d = {}, e = 0; e < c.length; e++) {
					var f = c[e],
						h = b.getWithConfig(f);
					void 0 !== h && (d[f] = h)
				}
				b.eventModel = d
			}
		}
		on(b.eventModel)
	}
	var on = function(a) {
		ya(a, function(c) {
			"_" === c.charAt(0) && delete a[c]
		});
		var b = a[C.ka] || {};
		ya(b, function(c) {
			"_" === c.charAt(0) && delete b[c]
		})
	};
	var rn = function(a, b, c) {
			Vi(b, c, a)
		},
		sn = function(a, b, c) {
			Vi(b, c, a, !0)
		},
		un = function(a, b) {};

	function tn(a, b) {}
	var W = {
		a: {}
	};


	W.a.gtagha = ["google"],
		function() {
			(function(a) {
				W.__gtagha = a;
				W.__gtagha.b = "gtagha";
				W.__gtagha.g = !0;
				W.__gtagha.priorityOverride = 0
			})(function(a) {
				var b = a.vtp_conversionId,
					c = sd,
					d = Q("eventModel");
				Ui(b.id, pi);
				if (c === C.I) {
					var e = Q("gtag.targets." + b.id);
					Wi(e, b.id)
				} else Vi(c, d, b.id);
				G(a.vtp_gtmOnSuccess)
			})
		}();
	W.a.e = ["google"],
		function() {
			(function(a) {
				W.__e = a;
				W.__e.b = "e";
				W.__e.g = !0;
				W.__e.priorityOverride = 0
			})(function(a) {
				return String(de(a.vtp_gtmEventId, "event"))
			})
		}();

	W.a.v = ["google"],
		function() {
			(function(a) {
				W.__v = a;
				W.__v.b = "v";
				W.__v.g = !0;
				W.__v.priorityOverride = 0
			})(function(a) {
				var b = a.vtp_name;
				if (!b || !b.replace) return !1;
				var c = Q(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
				return void 0 !== c ? c : a.vtp_defaultValue
			})
		}();
	W.a.rep = ["google"],
		function() {
			(function(a) {
				W.__rep = a;
				W.__rep.b = "rep";
				W.__rep.g = !0;
				W.__rep.priorityOverride = 0
			})(function(a) {
				var b;
				switch (ag(a.vtp_containerId).prefix) {
					case "AW":
						b = Vh;
						break;
					case "DC":
						b = fi;
						break;
					case "GF":
						b = ki;
						break;
					case "GP":
						b = vi;
						break;
					case "HA":
						b = pi;
						break;
					case "UA":
						b = Hi;
						break;
					default:
						G(a.vtp_gtmOnFailure);
						return
				}
				G(a.vtp_gtmOnSuccess);
				Ui(a.vtp_containerId, b, a.vtp_remoteConfig || {})
			})
		}();



	W.a.cid = ["google"],
		function() {
			(function(a) {
				W.__cid = a;
				W.__cid.b = "cid";
				W.__cid.g = !0;
				W.__cid.priorityOverride = 0
			})(function() {
				return jd.s
			})
		}();




	W.a.gtagaw = ["google"],
		function() {
			(function(a) {
				W.__gtagaw = a;
				W.__gtagaw.b = "gtagaw";
				W.__gtagaw.g = !0;
				W.__gtagaw.priorityOverride = 0
			})(function(a) {
				var b = a.vtp_conversionId,
					c = sd;
				Ui(b.id, Vh);
				if (c === C.I) {
					var d = Q("gtag.targets." + b.id);
					Wi(d, b.id)
				} else {
					var e = Q("eventModel");
					Vi(c, e, b.id)
				}
				G(a.vtp_gtmOnSuccess)
			})
		}();

	W.a.get = ["google"],
		function() {
			(function(a) {
				W.__get = a;
				W.__get.b = "get";
				W.__get.g = !0;
				W.__get.priorityOverride = 0
			})(function(a) {
				var b = a.vtp_settings;
				(a.vtp_deferrable ? sn : rn)(String(b.streamId), String(a.vtp_eventName), b.eventParameters ||
					{});
				a.vtp_gtmOnSuccess()
			})
		}();

	W.a.gtagfl = [],
		function() {
			(function(a) {
				W.__gtagfl = a;
				W.__gtagfl.b = "gtagfl";
				W.__gtagfl.g = !0;
				W.__gtagfl.priorityOverride = 0
			})(function(a) {
				var b = a.vtp_targetId,
					c = sd,
					d = Q("eventModel");
				Ui(b, fi);
				if (c === C.I) {
					var e = Q("gtag.targets." + b);
					Wi(e, b)
				} else Vi(c, d, b);
				G(a.vtp_gtmOnSuccess)
			})
		}();


	W.a.gtaggf = ["google"],
		function() {
			(function(a) {
				W.__gtaggf = a;
				W.__gtaggf.b = "gtaggf";
				W.__gtaggf.g = !0;
				W.__gtaggf.priorityOverride = 0
			})(function(a) {
				var b = a.vtp_conversionId,
					c = sd,
					d = Q("eventModel");
				Ui(b.id, ki);
				if (c === C.I) {
					var e = Q("gtag.targets." + b.id);
					Wi(e, b.id)
				} else Vi(c, d, b.id);
				G(a.vtp_gtmOnSuccess)
			})
		}();

	W.a.gtaggp = ["google"],
		function() {
			(function(a) {
				W.__gtaggp = a;
				W.__gtaggp.b = "gtaggp";
				W.__gtaggp.g = !0;
				W.__gtaggp.priorityOverride = 0
			})(function(a) {
				var b = a.vtp_conversionId,
					c = sd,
					d = Q("eventModel");
				Ui(b, vi);
				if (c === C.I) {
					var e = Q("gtag.targets." + b);
					Wi(e, b)
				} else Vi(c, d, b);
				G(a.vtp_gtmOnSuccess)
			})
		}();



	W.a.gtagua = ["google"],
		function() {
			(function(a) {
				W.__gtagua = a;
				W.__gtagua.b = "gtagua";
				W.__gtagua.g = !0;
				W.__gtagua.priorityOverride = 0
			})(function(a) {
				var b = a.vtp_trackingId,
					c = sd,
					d = Q("eventModel");
				Ui(b, Hi);
				if (c === C.I) {
					var e = Q("gtag.targets." + b);
					Wi(e, b)
				} else Vi(c, d, b);
				G(a.vtp_gtmOnSuccess)
			})
		}();


	var vn = {};
	vn.macro = function(a) {
		if (ak.Kc.hasOwnProperty(a)) return ak.Kc[a]
	}, vn.onHtmlSuccess = ak.ne(!0), vn.onHtmlFailure = ak.ne(!1);
	vn.dataLayer = Zd;
	vn.callback = function(a) {
		ud.hasOwnProperty(a) && na(ud[a]) && ud[a]();
		delete ud[a]
	};

	function wn() {
		kd[jd.s] = vn;
		Ja(vd, W.a);
		yb = yb || ak;
		zb = Bg
	}

	function xn() {
		re.gtm_3pds = !0;
		kd = E.google_tag_manager = E.google_tag_manager || {};
		if (kd[jd.s]) {
			var a = kd.zones;
			a && a.unregisterChild(jd.s);
		} else {
			for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) rb.push(c[d]);
			for (var e = b.tags || [], f = 0; f < e.length; f++) ub.push(e[f]);
			for (var h = b.predicates || [], k = 0; k < h.length; k++) tb.push(h[k]);
			for (var l = b.rules || [], m = 0; m < l.length; m++) {
				for (var p = l[m], r = {}, t = 0; t < p.length; t++) r[p[t][0]] = Array.prototype.slice.call(p[t],
					1);
				sb.push(r)
			}
			wb = W;
			xb = wl;
			wn();
			Zj();
			Fg = !1;
			Gg = 0;
			if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState) Ig();
			else {
				nc(F, "DOMContentLoaded", Ig);
				nc(F, "readystatechange", Ig);
				if (F.createEventObject && F.documentElement.doScroll) {
					var q = !0;
					try {
						q = !E.frameElement
					} catch (x) {}
					q && Jg()
				}
				nc(E, "load", Ig)
			}
			uj = !1;
			"complete" === F.readyState ? wj() : nc(E, "load", wj);
			a: {
				if (!Od) break a;E.setInterval(Pd,
					864E5);
			}
			rd = (new Date).getTime();
			vn.bootstrap = rd;
		}
	}
	(function(a) {
		a()
	})(xn);

})()
