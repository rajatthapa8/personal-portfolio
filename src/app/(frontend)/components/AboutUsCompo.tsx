'use-client'
import React from 'react'
import Image from 'next/image'
interface AboutusProps {
  bigHeading?: string
  smallText?: string
  image: { url: string }
}
const AboutUsCompo = ({ bigHeading, smallText, image }: AboutusProps) => {
  return (
    <section className="text-gray-700 body-font bg-white">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {bigHeading}
          </h1>
          <p className="mb-8 leading-relaxed">{smallText}</p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            height={500}
            width={500}
            className="object-cover object-center rounded"
            alt="hero"
            src={image.url}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutUsCompo
