async function getPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL
  const res = await fetch(`${baseUrl}/api/pages?where[slug][equals]=about-us`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch page')
  }

  const data = await res.json()

  return data.docs?.[0] ?? null
}
import AboutUsCompo from '../components/AboutUsCompo'
export default async function AboutUsPage() {
  const page = await getPage()
  if (!page || !page.layout) {
    return <p>No content found!!</p>
  }
  return (
    <>
      {page.layout.map(
        (
          block: { blockType: string; bigHeading: string; smallText: string; image: any },
          i: number,
        ) => {
          if (block.blockType === 'about-us') {
            return (
              <AboutUsCompo
                key={i}
                bigHeading={block.bigHeading}
                smallText={block.smallText}
                image={block.image}
              />
            )
          }
          return null
        },
      )}
    </>
  )
}
