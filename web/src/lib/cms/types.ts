export interface Page {
	_id: string;
	_type: 'page';
	title: string;
	slug: { current: string };
	content?: [];
}

export interface GlobalSettings {
	siteTitle: string;
	siteDescription?: string;
	navigation?: Array<{
		label: string;
		url: string;
	}>;
}
