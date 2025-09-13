import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo
        titleTemplate="%s | Crystal Rock PG"
        defaultTitle="Crystal Rock PG - Your Home Away From Home"
        description="Affordable and comfortable PG and hostel accommodation in Bengaluru for students and professionals."
        canonical="https://crystalrockpg.com"
        openGraph={{
          type: 'website',
          locale: 'en_IN',
          url: 'https://crystalrockpg.com',
          siteName: 'Crystal Rock PG',
          images: [
            {
              url: '/images/hostel-exterior.jpg',
              width: 1200,
              height: 630,
              alt: 'Crystal Rock PG',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
