import {
	S as _,
	i as f,
	s as v,
	e as i,
	k as x,
	t as y,
	K as b,
	c as d,
	d as n,
	m as E,
	a as S,
	h as g,
	b as h,
	J as u,
	g as p,
	n as l
} from '../chunks/index-54ae59b6.js';
function q(m) {
	let e, o, a, c;
	return {
		c() {
			(e = i('meta')), (o = x()), (a = i('h1')), (c = y('Welcome to my blog')), this.h();
		},
		l(t) {
			const s = b('[data-svelte="svelte-t32ptj"]', document.head);
			(e = d(s, 'META', { name: !0, content: !0 })), s.forEach(n), (o = E(t)), (a = d(t, 'H1', {}));
			var r = S(a);
			(c = g(r, 'Welcome to my blog')), r.forEach(n), this.h();
		},
		h() {
			(document.title = 'Home'), h(e, 'name', 'description'), h(e, 'content', 'Svelte demo app');
		},
		m(t, s) {
			u(document.head, e), p(t, o, s), p(t, a, s), u(a, c);
		},
		p: l,
		i: l,
		o: l,
		d(t) {
			n(e), t && n(o), t && n(a);
		}
	};
}
function H(m) {
	return [];
}
class $ extends _ {
	constructor(e) {
		super(), f(this, e, H, q, v, {});
	}
}
export { $ as default };
