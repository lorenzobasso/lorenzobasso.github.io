import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

import { mdsvex } from 'mdsvex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import preprocess from 'svelte-preprocess'

const extensions = ['.svelte', '.md']
const dev = process.argv.includes('dev')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: './docs',
			assets: './docs',
		}),
		paths: { base: dev ? '' : '' },
		appDir: 'internal',
	},
	preprocess: [
		vitePreprocess({
			postcss: true,
		}),
		preprocess({
			postcss: true,
			scss: true,
			preserve: ['module'],
		}),
		mdsvex({
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
							children: [{ type: 'text', value: '#' }],
						},
					},
				],
			],
		}),
	],
	extensions,
	vitePlugin: {
		experimental: {
			inspector: {
				holdMode: true,
			},
		},
	},
	target: '#svelte',
}

export default config
