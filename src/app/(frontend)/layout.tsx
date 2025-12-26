import React from 'react'
import './styles.css'
import { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
})

async function getSiteSettings() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL
  const res = await fetch(`${baseUrl}/api/globals/site-settings`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch page')
  }

  return res.json()
}

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings()

  return {
    title: site.siteName || 'My Website',
    description: site.siteDescription || '',
  }
}

interface NavItem {
  label: string
  url: string
}

interface MenuData {
  siteName: string
  logo: { url: string }
  headerNav: NavItem[]
  footerText: string
}

//for footer
interface socialLinks {
  label: string
  link: string
}

interface footer {
  copyrightText: string
  footerLinks: socialLinks[]
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const site = await getSiteSettings()

  return (
    <html lang="en" className={lato.variable}>
      <body>
        <Header MenuData={site} />
        <main>{children}</main>
        <Footer footerProps={site} />
      </body>
    </html>
  )
}
