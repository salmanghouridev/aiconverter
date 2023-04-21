import React from 'react'
import Link from 'next/link'

const Banner = () => {
  return (
   <>
   <section className="bg-[#111B21] text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Understand User Flow.
        <span className="sm:block">Increase Conversion.</span>
      </h1>
      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/get-started"
          className="block w-full rounded border border-green-500 bg-green-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
        >
          Get Started
        </Link>
        <Link
          href="/about"
          className="block w-full rounded border border-green-500 bg-white text-green-500 px-12 py-3 text-sm font-medium hover:bg-green-500 hover:text-white focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>

    
   </>
  )
}

export default Banner