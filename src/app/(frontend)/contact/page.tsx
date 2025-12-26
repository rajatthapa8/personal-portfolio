async function getPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL
  const res = await fetch(`${baseUrl}/api/pages?where[slug][equals]=contact`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch page')
  }

  const data = await res.json()
  return data.docs?.[0] ?? null
}
import ContactForm from '../components/ContactForm'
export default async function ContactPage() {
  const page = await getPage()

  if (!page || !page.layout) {
    return <p>No content found</p>
  }
  return (
    <>
      {page.layout.map((block: { blockType: string; title?: string }, i: number) => {
        if (block.blockType === 'contactForm') {
          return <ContactForm key={i} title={block.title} />
        }
        return null
      })}
    </>
  )
}
