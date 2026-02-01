import { groq } from '@sanity/sveltekit';

export const pageBySlugQuery = groq`*[_type == "page" && slug.current == $slug][0]{
     _id,
     title,
     "slug": slug.current,
     featuredImage,
     content
}`;

export const allPagesQuery = groq`*[_type == "page"]{
     _id,
     title,
     "slug": slug.current
}`;

export const globalSettingsQuery = groq`*[_type == "globalSettings"][0]{
     siteTitle,
     siteDescription,
     navigation
}`;
