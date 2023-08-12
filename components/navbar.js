import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
  <>
     <nav aria-label="Site Nav" className="mx-auto flex max-w-3xl items-center justify-between p-4">
      
      <Link href="/" className="inline-flex  items-center justify-center rounded-lg bg-gray-100 text-gray-900 font-bold text-lg">
      <Image src="/logo.png" alt="Picture of the author" width={80} height={60}  />
      </Link>
      
      <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
        
        <li className="hidden lg:block">
          
          <Link className="rounded-lg px-3 py-2 hover:text-gray-900 hover:bg-gray-100" href="/">
            Home
          </Link>
          
        </li>
        
        <li>
          <Link className="rounded-lg px-3 py-2 hover:text-gray-900 hover:bg-gray-100" href="/about">
            About
          </Link>
        </li>
       
        <li>
          <Link className="rounded-lg px-3 py-2 hover:text-gray-900 hover:bg-gray-100" href="">
            Review
          </Link>
        </li>

        
        <li>
          
          <Link className="inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-green-500 text-white hover:bg-green-600" href="" target="_blank">
            Upcoming New 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
              
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              
            </svg>
            
          </Link>
          
        </li>
        
      </ul>
      
    </nav>
  
  </>
  )
}

export default Navbar