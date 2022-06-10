export enum CanGroupBy {
	speaker = 'speaker'
}

export type TalkType = {
	title: string;
	url: string;
	speaker: string;
	conference: string;
	summary: string;
	category: string[];
};
