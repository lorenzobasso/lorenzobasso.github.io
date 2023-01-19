import posts from '$lib/posts';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ params }) => {
	const [post] = posts.filter(post => post.slug === params.slug);

	if (!post) {
		throw error(404, `Could not find ${params.slug}`);
	}

	return { post };
};
