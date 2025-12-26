import ProjectCard from '../components/ProjectCard'

async function getPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL
  const res = await fetch(`${baseUrl}/api/pages?where[slug][equals]=projects`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch page')
  }

  const data = await res.json()
  return data.docs?.[0] ?? null
}

export default async function ProjectPage() {
  const page = await getPage()
  console.log(page.layout)
  if (!page || !page.layout) {
    return (
      <>
        <p>No content found</p>
        {console.log('no content found')}
      </>
    )
  }
  return (
    <>
      {page.layout.map((block: any, i: number) => {
        if (block.blockType === 'projectBlock') {
          return (
            <section key={i}>
              <div className="flex flex-col items-center justify-center">
                <div className="w-full bg-white text-center p-4">
                  <h3 className="text-5xl font-bold  text-blue-950">{block.heading}</h3>
                </div>
                <div className="flex items-center justify-center">
                  {block.projects.map((project: any, idx: number) => (
                    <div key={idx}>
                      <ProjectCard
                        key={idx}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )
        }
        return null
      })}
    </>
  )
}
