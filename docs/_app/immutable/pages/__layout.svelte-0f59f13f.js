import {
	S as d,
	i as $,
	s as v,
	F as E,
	e as u,
	k as h,
	c,
	a as m,
	d as f,
	m as y,
	g as _,
	G as F,
	H as I,
	I as O,
	r as S,
	p as b
} from '../chunks/index-54ae59b6.js';
function k(n) {
	let t, i, o, a;
	const r = n[1].default,
		s = E(r, n, n[0], null);
	return {
		c() {
			(t = u('main')), s && s.c(), (i = h()), (o = u('footer'));
		},
		l(e) {
			t = c(e, 'MAIN', {});
			var l = m(t);
			s && s.l(l), l.forEach(f), (i = y(e)), (o = c(e, 'FOOTER', {}));
			var p = m(o);
			p.forEach(f);
		},
		m(e, l) {
			_(e, t, l), s && s.m(t, null), _(e, i, l), _(e, o, l), (a = !0);
		},
		p(e, [l]) {
			s && s.p && (!a || l & 1) && F(s, r, e, e[0], a ? O(r, e[0], l, null) : I(e[0]), null);
		},
		i(e) {
			a || (S(s, e), (a = !0));
		},
		o(e) {
			b(s, e), (a = !1);
		},
		d(e) {
			e && f(t), s && s.d(e), e && f(i), e && f(o);
		}
	};
}
function q(n, t, i) {
	let { $$slots: o = {}, $$scope: a } = t;
	return (
		(n.$$set = (r) => {
			'$$scope' in r && i(0, (a = r.$$scope));
		}),
		[a, o]
	);
}
class C extends d {
	constructor(t) {
		super(), $(this, t, q, k, v, {});
	}
}
export { C as default };
