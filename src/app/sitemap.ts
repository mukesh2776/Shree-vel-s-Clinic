import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.shreevelsclinic.com';

  const routes = [
    '',
    '/about',
    '/doctors',
    '/dermatology',
    '/obstetrics-gynaecology',
    '/services',
    '/gallery',
    '/contact',
    '/appointment'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
