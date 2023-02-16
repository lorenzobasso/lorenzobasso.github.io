import { formatTagForUrl, getAllActiveTags } from '$lib/common/tags/tag';
import posts, { type RenderedPost } from '$lib/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ url: { searchParams } }) => {
	const activeTags = getAllActiveTags(searchParams);

	const shouldShowPost = (post: RenderedPost) =>
		post.tags.some(tag => activeTags.length === 0 || activeTags.includes(formatTagForUrl(tag)));

	return { posts };
};
