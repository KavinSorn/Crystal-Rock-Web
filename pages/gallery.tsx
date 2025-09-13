import { NextSeo } from 'next-seo'
import Layout from '@/components/layout/Layout'
import Amenities from '@/components/sections/Amenities'
import Hostels from '@/components/sections/Hostels'

export default function Gallery() {
  return (
    <>
      <NextSeo
        title="Gallery"
        description="Explore our facilities, rooms, and amenities at Crystal Rock PG through our comprehensive photo gallery. See what makes us special."
        canonical="https://crystalrockpg.com/gallery"
        openGraph={{
          url: 'https://crystalrockpg.com/gallery',
          title: 'Crystal Rock PG Gallery',
          description: 'Explore our facilities, rooms, and amenities at Crystal Rock PG through our comprehensive photo gallery. See what makes us special.',
        }}
      />
      <Layout>
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Gallery
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Take a virtual tour of our facilities and see why Crystal Rock PG is the perfect home away from home
              </p>
            </div>
          </div>
        </section>
        <Amenities />
        <Hostels />
      </Layout>
    </>
  )
}
