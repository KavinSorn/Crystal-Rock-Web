import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
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
      <NextSeo
        title="Crystal Rock Accommodations - Premium Hostel Living in Bengaluru"
        description="Experience comfort, community & convenience at Crystal Rock - Premium hostel accommodations across Adugodi, Hennur, and HSR Layout in Bengaluru"
        canonical="https://crystalrockaccommodations.com"
        openGraph={{
          type: 'website',
          locale: 'en_IN',
          url: 'https://crystalrockaccommodations.com',
          title: 'Crystal Rock Accommodations - Premium Hostel Living in Bengaluru',
          description: 'Experience comfort, community & convenience at Crystal Rock - Premium hostel accommodations across Adugodi, Hennur, and HSR Layout in Bengaluru',
          images: [
            {
              url: '/logo_landscape.png',
              width: 1200,
              height: 630,
              alt: 'Crystal Rock Accommodations',
            },
          ],
          siteName: 'Crystal Rock Accommodations',
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@crystalrock',
          handle: '@crystalrock',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'hostel, accommodation, bengaluru, bangalore, co-living, shared living, IT professionals, students',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
        ]}
      />

      <div className="min-h-screen bg-primary-50">
        <Navigation />
        
        <main>
          <AnimatePresence mode="wait">
            {renderPage()}
          </AnimatePresence>
        </main>

        <AnimatePresence>
          {modalData && <HostelModal />}
        </AnimatePresence>
      </div>
    </>
  )
}
