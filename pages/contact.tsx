import { NextSeo } from 'next-seo'
import Layout from '@/components/layout/Layout'
import ContactPage from '@/components/sections/ContactPage'

export default function Contact() {
  return (
    <>
      <NextSeo
        title="Contact Us"
        description="Get in touch with Crystal Rock PG. Contact us for bookings, inquiries, or any questions about our accommodation services in Bengaluru."
        canonical="https://crystalrockpg.com/contact"
        openGraph={{
          url: 'https://crystalrockpg.com/contact',
          title: 'Contact Crystal Rock PG',
          description: 'Get in touch with Crystal Rock PG. Contact us for bookings, inquiries, or any questions about our accommodation services in Bengaluru.',
        }}
      />
      <Layout>
        <ContactPage />
      </Layout>
    </>
  )
}
