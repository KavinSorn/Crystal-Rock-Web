import { NextSeo } from 'next-seo'
import Layout from '@/components/layout/Layout'
import AboutPage from '@/components/sections/AboutPage'

export default function About() {
  return (
    <>
      <NextSeo
        title="About Us"
        description="Learn more about Crystal Rock PG - our mission, values, and commitment to providing the best accommodation experience in Bengaluru."
        canonical="https://crystalrockpg.com/about"
        openGraph={{
          url: 'https://crystalrockpg.com/about',
          title: 'About Crystal Rock PG',
          description: 'Learn more about Crystal Rock PG - our mission, values, and commitment to providing the best accommodation experience in Bengaluru.',
        }}
      />
      <Layout>
        <AboutPage />
      </Layout>
    </>
  )
}
