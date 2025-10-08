import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Hero from '@/components/sections/Hero'
import HSRPromo from '@/components/sections/HSRPromo'
import Hostels from '@/components/sections/Hostels'
import Amenities from '@/components/sections/Amenities'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import MessPage from '@/components/sections/MessPage'
import AboutPage from '@/components/sections/AboutPage'
import ContactPage from '@/components/sections/ContactPage'
import HostelModal from '@/components/ui/HostelModal'
import { useAppStore } from '@/stores/appStore'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '@/components/layout/Layout'

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Crystal Rock PG",
  "description": "Affordable and comfortable PG and hostel accommodation in Bengaluru for students and professionals.",
  "url": "https://crystalrockpg.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "telephone": "+91-XXXXXXXXXX",
  "priceRange": "₹₹",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "WiFi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification", 
      "name": "Laundry",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Security",
      "value": true
    }
  ]
}

export default function Home() {
  const { currentPage, modalData } = useAppStore()

  const renderPage = () => {
    const pageVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    }

    switch (currentPage) {
      case 'mess':
        return (
          <motion.div
            key="mess"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <MessPage />
          </motion.div>
        )
      case 'about':
        return (
          <motion.div
            key="about"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <AboutPage />
          </motion.div>
        )
      case 'contact':
        return (
          <motion.div
            key="contact"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <ContactPage />
          </motion.div>
        )
      default:
        return (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <HSRPromo />
            <Hostels />
            <Amenities />
            <Testimonials />
            <CTA />
          </motion.div>
        )
    }
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <NextSeo
        title="Welcome to Crystal Rock PG - Your Home Away From Home"
        description="Affordable and comfortable PG and hostel accommodation in Bengaluru for students and professionals."
        canonical="https://crystalrockpg.com"
        openGraph={{
          type: 'website',
          locale: 'en_IN',
          url: 'https://crystalrockpg.com',
          title: 'Welcome to Crystal Rock PG - Your Home Away From Home',
          description: 'Affordable and comfortable PG and hostel accommodation in Bengaluru for students and professionals.',
          images: [
            {
              url: '/images/hostel-exterior.jpg',
              width: 1200,
              height: 630,
              alt: 'Crystal Rock PG - Hostel Exterior',
            },
          ],
          siteName: 'Crystal Rock PG',
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@crystalrockpg',
          handle: '@crystalrockpg',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'PG accommodation, hostel, bengaluru, bangalore, students, professionals, affordable, comfortable, crystal rock',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
        ]}
      />

      <Layout>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>

        <AnimatePresence>
          {modalData && <HostelModal />}
        </AnimatePresence>
      </Layout>
    </>
  )
}
