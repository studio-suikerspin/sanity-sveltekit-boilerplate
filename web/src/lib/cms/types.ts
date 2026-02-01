import type { SanityImageSource } from "@sanity/image-url";

export interface Page {
	_id: string;
	_type: 'page';
	title: string;
     slug: { current: string };
     featuredImage?: SanityImageSource;
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
