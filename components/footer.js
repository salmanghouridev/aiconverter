import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
            
            <footer aria-label="Site Footer" className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
 

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  
  <p className="mx-auto lg:mx-0 max-w-md text-center lg:text-left leading-relaxed text-gray-500">
    Join thousands of professionals and businesses benefiting from our AI-powered solutions. Discover how we can help you improve your efficiency and productivity.
  </p>
  
  <div className="text-center lg:text-right text-sm text-gray-500">
    
    <p className="mb-4 font-semibold text-lg">
      Subscribe to our newsletter
    </p>
    
    <form className="flex flex-col sm:flex-row justify-center lg:justify-end">
      
      <input type="email" className="bg-white rounded-l-lg py-2 px-4 border border-gray-400 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent" placeholder="Your email address"></input>
      
      <button type="submit" className="bg-teal-600 rounded-r-lg py-2 px-4 text-white transition hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent">
        Subscribe
      </button>
      
    </form>
    
    <p className="mt-8 text-sm">
      © 2023
      <a href="http://aiconverter.com/" className="text-blue-500 hover:text-teal-600">
        AICONVERTER
      </a>
      by
      <a href="http://salmanghouri.com/" className="text-blue-500 hover:text-teal-600">
        Salman Ghouri
      </a>
      . All rights reserved.
    </p>
    
  </div>
  
</div>
</div>
</footer>
    
    </>
  )
}

export default Footer