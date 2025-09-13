import { GetServerSideProps } from 'next'

const EXTERNAL_DATA_URL = 'https://crystalrockpg.com'

function generateSiteMap() {
  const routes = [
    {
      url: '',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: '/about',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5
    },
    {
      url: '/contact',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5
    },
    {
      url: '/gallery',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5
    }
  ]

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${routes
       .map((route) => {
         return `
       <url>
           <loc>${EXTERNAL_DATA_URL}${route.url}</loc>
           <lastmod>${route.lastModified}</lastmod>
           <changefreq>${route.changeFrequency}</changefreq>
           <priority>${route.priority}</priority>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default SiteMap
