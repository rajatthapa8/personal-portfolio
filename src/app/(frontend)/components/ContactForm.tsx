'use client'
import React, { useState } from 'react'
interface ContactFormProps {
  title?: string
}
const ContacForm = ({ title }: ContactFormProps) => {
  const [isSubmitted, SetIsSubmitted] = useState(Boolean)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payloadData = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }
    const res = await fetch('http://localhost:3000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payloadData),
    })

    if (res.ok) {
      SetIsSubmitted(true)
    } else {
      SetIsSubmitted(false)
    }
  }

  return (
    <>
      <div className="isolate bg-gray-900 px-6 py-24 sm:py-20 lg:px-5">
        {isSubmitted ? (
          <div className="flex items-center justify-center">
            <h3 className="text-2xl font-semibold tracking-tight text-center text-balance text-white sm:text-5xl ">
              Your message has been sent
            </h3>
          </div>
        ) : (
          <>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                {title}
              </h2>
              <p className="mt-2 text-lg/8 text-gray-400">
                send me a message for freelancing project
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl sm:mt-10">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm/6 font-semibold text-white">
                    Full Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm/6 font-semibold text-white">
                    Subject
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      autoComplete="subject"
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                      defaultValue={''}
                    />
                  </div>
                </div>
                {/* <div className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-checked:bg-indigo-500 has-focus-visible:outline-2">
                      <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                      <input
                        id="agree-to-policies"
                        name="agree-to-policies"
                        type="checkbox"
                        aria-label="Agree to policies"
                        className="absolute inset-0 size-full appearance-none focus:outline-hidden"
                      />
                    </div>
                  </div>
                  <label htmlFor="agree-to-policies" className="text-sm/6 text-gray-400">
                    By selecting this, you agree to our{' '}
                    <a href="#" className="font-semibold whitespace-nowrap text-indigo-400">
                      privacy policy
                    </a>
                    .
                  </label>
                </div> */}
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Lets talk
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  )
}

export default ContacForm
