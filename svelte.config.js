import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const extensions = ['.svelte', '.md'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true,
			scss: true,
			preserve: ['module']
		}),
		mdsvex({
			// layout: {article: '..'},
			extensions,
			rehypePlugins: [
				rehypeExternalLinks,
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: 'append',
						content: {
							type: 'element',
							tagName: 'span',
							properties: { className: ['heading-link'] },
							children: [{ type: 'text', value: '#' }]
						}
					}
				]
			]
		})
	],
	extensions,
	kit: {
		adapter: adapter()
	}
};

export default config;
