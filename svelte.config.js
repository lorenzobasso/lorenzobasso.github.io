import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				blog: 'src/routes/blog/_blog.svelte'
			}
		})
	],
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
	},
	extensions: ['.svelte', '.md', '.svx']
};

export default config;
