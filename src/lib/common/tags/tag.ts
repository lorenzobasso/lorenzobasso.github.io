export const formatTagForUrl = (tag: string) => encodeURI(tag.toLowerCase());

export const getAllActiveTags = (searchParams?: URLSearchParams) =>
	searchParams
		?.get('tag')
		?.split(',')
		?.filter(t => t) ?? [];

export const isTagActive = (tag: string, searchParams?: URLSearchParams) =>
	getAllActiveTags(searchParams).includes(formatTagForUrl(tag));
