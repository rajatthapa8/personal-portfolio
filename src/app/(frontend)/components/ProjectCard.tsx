import React from 'react'
import Image from 'next/image'

interface ProjectProps {
  title: string
  description?: string
  image?: { url: string }
  link?: string
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, link }) => (
  <>
    <section className="text-gray-700 body-font bg-white">
      <div className="container px-5 py-15 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4">
            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
              {image && (
                <Image
                  height={500}
                  width={500}
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={image.url}
                  alt="blog"
                />
              )}

              <div className="p-6">
                <h2 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h2>
                <p className="leading-relaxed mb-3">{description}</p>
                <div className="flex items-center flex-wrap ">
                  <a
                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    href={link}
                    target="_blank"
                  >
                    Visit Site
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default ProjectCard
