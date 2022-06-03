function q() {}
function F(t, n) {
	for (const e in n) t[e] = n[e];
	return t;
}
function B(t) {
	return t();
}
function v() {
	return Object.create(null);
}
function p(t) {
	t.forEach(B);
}
function H(t) {
	return typeof t == 'function';
}
function rt(t, n) {
	return t != t ? n == n : t !== n || (t && typeof t == 'object') || typeof t == 'function';
}
function I(t) {
	return Object.keys(t).length === 0;
}
function ct(t, n, e, r) {
	if (t) {
		const c = T(t, n, e, r);
		return t[0](c);
	}
}
function T(t, n, e, r) {
	return t[1] && r ? F(e.ctx.slice(), t[1](r(n))) : e.ctx;
}
function lt(t, n, e, r) {
	if (t[2] && r) {
		const c = t[2](r(e));
		if (n.dirty === void 0) return c;
		if (typeof c == 'object') {
			const a = [],
				l = Math.max(n.dirty.length, c.length);
			for (let o = 0; o < l; o += 1) a[o] = n.dirty[o] | c[o];
			return a;
		}
		return n.dirty | c;
	}
	return n.dirty;
}
function ot(t, n, e, r, c, a) {
	if (c) {
		const l = T(n, e, r, a);
		t.p(l, c);
	}
}
function ut(t) {
	if (t.ctx.length > 32) {
		const n = [],
			e = t.ctx.length / 32;
		for (let r = 0; r < e; r++) n[r] = -1;
		return n;
	}
	return -1;
}
let $ = !1;
function G() {
	$ = !0;
}
function J() {
	$ = !1;
}
function K(t, n, e, r) {
	for (; t < n; ) {
		const c = t + ((n - t) >> 1);
		e(c) <= r ? (t = c + 1) : (n = c);
	}
	return t;
}
function L(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let n = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const i = [];
		for (let u = 0; u < n.length; u++) {
			const s = n[u];
			s.claim_order !== void 0 && i.push(s);
		}
		n = i;
	}
	const e = new Int32Array(n.length + 1),
		r = new Int32Array(n.length);
	e[0] = -1;
	let c = 0;
	for (let i = 0; i < n.length; i++) {
		const u = n[i].claim_order,
			s = (c > 0 && n[e[c]].claim_order <= u ? c + 1 : K(1, c, (y) => n[e[y]].claim_order, u)) - 1;
		r[i] = e[s] + 1;
		const f = s + 1;
		(e[f] = i), (c = Math.max(f, c));
	}
	const a = [],
		l = [];
	let o = n.length - 1;
	for (let i = e[c] + 1; i != 0; i = r[i - 1]) {
		for (a.push(n[i - 1]); o >= i; o--) l.push(n[o]);
		o--;
	}
	for (; o >= 0; o--) l.push(n[o]);
	a.reverse(), l.sort((i, u) => i.claim_order - u.claim_order);
	for (let i = 0, u = 0; i < l.length; i++) {
		for (; u < a.length && l[i].claim_order >= a[u].claim_order; ) u++;
		const s = u < a.length ? a[u] : null;
		t.insertBefore(l[i], s);
	}
}
function W(t, n) {
	if ($) {
		for (
			L(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentElement !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		n !== t.actual_end_child
			? (n.claim_order !== void 0 || n.parentNode !== t) && t.insertBefore(n, t.actual_end_child)
			: (t.actual_end_child = n.nextSibling);
	} else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function at(t, n, e) {
	$ && !e ? W(t, n) : (n.parentNode !== t || n.nextSibling != e) && t.insertBefore(n, e || null);
}
function Q(t) {
	t.parentNode.removeChild(t);
}
function R(t) {
	return document.createElement(t);
}
function E(t) {
	return document.createTextNode(t);
}
function ft() {
	return E(' ');
}
function st() {
	return E('');
}
function dt(t, n, e) {
	e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function U(t) {
	return Array.from(t.childNodes);
}
function V(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function O(t, n, e, r, c = !1) {
	V(t);
	const a = (() => {
		for (let l = t.claim_info.last_index; l < t.length; l++) {
			const o = t[l];
			if (n(o)) {
				const i = e(o);
				return i === void 0 ? t.splice(l, 1) : (t[l] = i), c || (t.claim_info.last_index = l), o;
			}
		}
		for (let l = t.claim_info.last_index - 1; l >= 0; l--) {
			const o = t[l];
			if (n(o)) {
				const i = e(o);
				return (
					i === void 0 ? t.splice(l, 1) : (t[l] = i),
					c ? i === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = l),
					o
				);
			}
		}
		return r();
	})();
	return (a.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), a;
}
function X(t, n, e, r) {
	return O(
		t,
		(c) => c.nodeName === n,
		(c) => {
			const a = [];
			for (let l = 0; l < c.attributes.length; l++) {
				const o = c.attributes[l];
				e[o.name] || a.push(o.name);
			}
			a.forEach((l) => c.removeAttribute(l));
		},
		() => r(n)
	);
}
function _t(t, n, e) {
	return X(t, n, e, R);
}
function Y(t, n) {
	return O(
		t,
		(e) => e.nodeType === 3,
		(e) => {
			const r = '' + n;
			if (e.data.startsWith(r)) {
				if (e.data.length !== r.length) return e.splitText(r.length);
			} else e.data = r;
		},
		() => E(n),
		!0
	);
}
function ht(t) {
	return Y(t, ' ');
}
function mt(t, n) {
	(n = '' + n), t.wholeText !== n && (t.data = n);
}
function pt(t, n, e, r) {
	e === null ? t.style.removeProperty(n) : t.style.setProperty(n, e, r ? 'important' : '');
}
function yt(t, n = document.body) {
	return Array.from(n.querySelectorAll(t));
}
let m;
function h(t) {
	m = t;
}
function j() {
	if (!m) throw new Error('Function called outside component initialization');
	return m;
}
function gt(t) {
	j().$$.on_mount.push(t);
}
function xt(t) {
	j().$$.after_update.push(t);
}
function bt(t, n) {
	return j().$$.context.set(t, n), n;
}
const _ = [],
	C = [],
	x = [],
	M = [],
	P = Promise.resolve();
let k = !1;
function z() {
	k || ((k = !0), P.then(D));
}
function $t() {
	return z(), P;
}
function A(t) {
	x.push(t);
}
const w = new Set();
let g = 0;
function D() {
	const t = m;
	do {
		for (; g < _.length; ) {
			const n = _[g];
			g++, h(n), Z(n.$$);
		}
		for (h(null), _.length = 0, g = 0; C.length; ) C.pop()();
		for (let n = 0; n < x.length; n += 1) {
			const e = x[n];
			w.has(e) || (w.add(e), e());
		}
		x.length = 0;
	} while (_.length);
	for (; M.length; ) M.pop()();
	(k = !1), w.clear(), h(t);
}
function Z(t) {
	if (t.fragment !== null) {
		t.update(), p(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(A);
	}
}
const b = new Set();
let d;
function wt() {
	d = { r: 0, c: [], p: d };
}
function kt() {
	d.r || p(d.c), (d = d.p);
}
function tt(t, n) {
	t && t.i && (b.delete(t), t.i(n));
}
function At(t, n, e, r) {
	if (t && t.o) {
		if (b.has(t)) return;
		b.add(t),
			d.c.push(() => {
				b.delete(t), r && (e && t.d(1), r());
			}),
			t.o(n);
	}
}
function Et(t, n) {
	const e = {},
		r = {},
		c = { $$scope: 1 };
	let a = t.length;
	for (; a--; ) {
		const l = t[a],
			o = n[a];
		if (o) {
			for (const i in l) i in o || (r[i] = 1);
			for (const i in o) c[i] || ((e[i] = o[i]), (c[i] = 1));
			t[a] = o;
		} else for (const i in l) c[i] = 1;
	}
	for (const l in r) l in e || (e[l] = void 0);
	return e;
}
function jt(t) {
	return typeof t == 'object' && t !== null ? t : {};
}
function St(t) {
	t && t.c();
}
function Nt(t, n) {
	t && t.l(n);
}
function nt(t, n, e, r) {
	const { fragment: c, on_mount: a, on_destroy: l, after_update: o } = t.$$;
	c && c.m(n, e),
		r ||
			A(() => {
				const i = a.map(B).filter(H);
				l ? l.push(...i) : p(i), (t.$$.on_mount = []);
			}),
		o.forEach(A);
}
function et(t, n) {
	const e = t.$$;
	e.fragment !== null &&
		(p(e.on_destroy),
		e.fragment && e.fragment.d(n),
		(e.on_destroy = e.fragment = null),
		(e.ctx = []));
}
function it(t, n) {
	t.$$.dirty[0] === -1 && (_.push(t), z(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function vt(t, n, e, r, c, a, l, o = [-1]) {
	const i = m;
	h(t);
	const u = (t.$$ = {
		fragment: null,
		ctx: null,
		props: a,
		update: q,
		not_equal: c,
		bound: v(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(n.context || (i ? i.$$.context : [])),
		callbacks: v(),
		dirty: o,
		skip_bound: !1,
		root: n.target || i.$$.root
	});
	l && l(u.root);
	let s = !1;
	if (
		((u.ctx = e
			? e(t, n.props || {}, (f, y, ...S) => {
					const N = S.length ? S[0] : y;
					return (
						u.ctx &&
							c(u.ctx[f], (u.ctx[f] = N)) &&
							(!u.skip_bound && u.bound[f] && u.bound[f](N), s && it(t, f)),
						y
					);
			  })
			: []),
		u.update(),
		(s = !0),
		p(u.before_update),
		(u.fragment = r ? r(u.ctx) : !1),
		n.target)
	) {
		if (n.hydrate) {
			G();
			const f = U(n.target);
			u.fragment && u.fragment.l(f), f.forEach(Q);
		} else u.fragment && u.fragment.c();
		n.intro && tt(t.$$.fragment), nt(t, n.target, n.anchor, n.customElement), J(), D();
	}
	h(i);
}
class Ct {
	$destroy() {
		et(this, 1), (this.$destroy = q);
	}
	$on(n, e) {
		const r = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
		return (
			r.push(e),
			() => {
				const c = r.indexOf(e);
				c !== -1 && r.splice(c, 1);
			}
		);
	}
	$set(n) {
		this.$$set && !I(n) && ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
	}
}
export {
	Et as A,
	jt as B,
	et as C,
	F as D,
	$t as E,
	ct as F,
	ot as G,
	ut as H,
	lt as I,
	W as J,
	yt as K,
	Ct as S,
	U as a,
	dt as b,
	_t as c,
	Q as d,
	R as e,
	pt as f,
	at as g,
	Y as h,
	vt as i,
	mt as j,
	ft as k,
	st as l,
	ht as m,
	q as n,
	wt as o,
	At as p,
	kt as q,
	tt as r,
	rt as s,
	E as t,
	bt as u,
	xt as v,
	gt as w,
	St as x,
	Nt as y,
	nt as z
};
