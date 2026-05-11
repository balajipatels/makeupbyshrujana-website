import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MakeUpByShrujana - Professional Bridal Makeup Artist',
    short_name: 'MakeUpByShrujana',
    description: 'Professional bridal and Non-bridal makeup services by MakeUpByShrujana',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdf2f8',
    theme_color: '#ec4899',
    orientation: 'portrait',
    scope: '/',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['lifestyle', 'beauty', 'services'],
    lang: 'en',
    dir: 'ltr',
  }
}
