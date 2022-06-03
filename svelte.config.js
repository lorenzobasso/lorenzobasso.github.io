import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	target: '#svelte',
	kit: {
		prerender: { default: true },
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			base: ''
		}
	}
};

export default config;
