import { groq } from '@sanity/sveltekit';

export const homePageQuery = groq`*[_type == "page" && slug.current == "home"][0]`;
