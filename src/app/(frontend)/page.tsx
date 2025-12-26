import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import ContactForm from './components/ContactForm'
import AboutUsCompo from './components/AboutUsCompo'
import config from '@/payload.config'
import './styles.css'
import { title } from 'process'
import ProjectCard from './components/ProjectCard'

async function getPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL
  const res = await fetch(`${baseUrl}/api/pages?where[slug][equals]=home`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch page')
  }

  const data = await res.json()

  return data.docs?.[0] ?? null
}
export default async function HomePage() {
  const page = await getPage()

  if (!page || !page.layout) {
    return <p>No content found</p>
  }
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <>
      {page.layout.map((block: any, i: number) => {
        switch (block.blockType) {
          case 'about-us':
            return (
              <AboutUsCompo
                key={i}
                bigHeading={block.bigHeading}
                smallText={block.smallText}
                image={block.image}
              />
            )

          case 'contactForm':
            return <ContactForm key={i} title={block.title} />

          case 'projectBlock':
            return (
              <section key={i}>
                <div className="flex flex-col items-center justify-center bg-white">
                  <div className="w-full  text-center pt-10">
                    <h3 className="text-5xl font-bold  text-blue-950">{block.heading}</h3>
                  </div>
                  <div className="flex mt-4">
                    {block.projects.map((project: any, idx: number) => (
                      <ProjectCard
                        key={idx}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )
          default:
            return null
        }
      })}
    </>
  )
}
