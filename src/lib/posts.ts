// eslint-disable-next-line no-unused-vars
// import Prism from 'prismjs';
// import 'prism-svelte';

import readingTime, { type ReadTimeResults } from 'reading-time';

type PostMetadata = {
	slug: string;
	title: string;
	description?: string;
	date: Date;
	dateString: string;
	author: string;
	tags: string[];
};

type Post = {
	metadata: PostMetadata;
	default: any;
};

export type RenderedPost = PostMetadata & {
	html: string;
	css: any;
	head: any;
	readingTime: ReadTimeResults;
};

const postsData = import.meta.glob('./posts/*.md', { eager: true });

const posts = (Object.values(postsData) as Post[])
	.map(post => {
		const { date, ...metadata } = post.metadata;
		const dateObject = new Date(date);
		const dateString = dateObject.toLocaleDateString('en-UK', {
			weekday: 'short',
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		});

		return { date: dateObject, dateString, ...metadata, ...post.default.render() };
	})
	.map(post => ({ ...post, readingTime: readingTime(post.html) } as RenderedPost))
	.sort((a, b) => b.date.getTime() - a.date.getTime());

export default posts;
