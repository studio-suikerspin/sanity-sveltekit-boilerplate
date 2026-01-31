export interface Page {
     _id: string;
     _type: 'page';
	title: string;
	slug: { current: string };
	content?: any;
}
