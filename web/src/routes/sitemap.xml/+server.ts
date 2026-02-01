import { PUBLIC_SITE_URL } from '$env/static/public';
import { client } from '$lib/cms/client';
import { groq } from '@sanity/sveltekit';

const siteUrl = PUBLIC_SITE_URL || 'http://localhost:5173';

const query = groq`{
  "pages": *[_type == "page" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  },
  "posts": *[_type == "post" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt,
    publishedAt
  }
}`;

export async function GET() {
	const data = await client.fetch(query);

	const pages = data.pages || [];
	const posts = data.posts || [];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${siteUrl}/${page.slug}</loc>
    <lastmod>${new Date(page._updatedAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
		)
		.join('')}
  ${posts
		.map(
			(post) => `
  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.publishedAt || post._updatedAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
		)
		.join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
