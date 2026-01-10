import { MetadataRoute } from 'next'
import { client } from '@/lib/contentful'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.hafsafinancials.com'

  // 1. Static Routes
  const staticRoutes = [
    '',
    '/services',
    '/insights',
    '/contact',
    '/pricing',
    '/team',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. Dynamic Routes (Blog Posts)
  // Fetch all articles to generate URLs for them
  const response = await client.getEntries({
    content_type: 'article',
  })

  const dynamicRoutes = response.items.map((item: any) => ({
    url: `${baseUrl}/insights/${item.fields.slug}`,
    lastModified: new Date(item.sys.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...dynamicRoutes]
}