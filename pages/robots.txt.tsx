import { GetServerSideProps } from 'next'

function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: https://crystalrockpg.com/sitemap.xml`
}

function RobotsTxt() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // We generate the robots.txt
  const robotsTxt = generateRobotsTxt()

  res.setHeader('Content-Type', 'text/plain')
  // we send the robots.txt to the browser
  res.write(robotsTxt)
  res.end()

  return {
    props: {}
  }
}

export default RobotsTxt
