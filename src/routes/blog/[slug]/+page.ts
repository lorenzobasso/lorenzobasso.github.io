// import readingTime from 'reading-time';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type Post = {
	metadata: any;
	default: any;
};

const allPosts = import.meta.glob('../../../lib/posts/*.md', { eager: true });

export const load: PageLoad = ({ params }) => {
	const post = (Object.values(allPosts) as Post[]).find(post => post.metadata.slug === params.slug);

	if (!post) {
		throw error(404, `Could not find ${params.slug}`);
	}

	return { post, page: post.default };
};
