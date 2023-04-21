import React, { useState, useEffect } from 'react';
import Link from 'next/link';





const Gridview = () => {

  const [views, setViews] = useState(2); // initial value is 2

  function handleClick() {
    setViews(views + 1); // increment the views state by 1
  }
  return (
    <>
    <div class="bg-25D366 py-10">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl text-center text-111B21 font-extrabold mb-6">
      Developer Tool Kit
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* 1*/}
      <Link href="/htmltojsx" class="group relative block rounded-3xl border-4 border-[#5ef896] bg-white pt-12 transition hover:bg-25D366 sm:pt-16 lg:pt-24 shadow-xl hover:shadow-2xl" onClick={handleClick}>
        <span class="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-25D366 to-111B21 ring-4 ring-111B21 transform hover:scale-110 transition duration-300"></span>
        <div class="p-4 sm:p-6 lg:p-8">
          <p class="text-lg font-bold text-111B21">Html To Jsx</p>
          <p class="mt-1 font-mono text-xs text-111B21 mb-2">it convert HTML code to React, Nextjs, and more Format</p>
          <p class="mt-1 font-mono text-xs text-111B21"><span class="text-25D366 font-bold">{views}</span> Views</p>
        </div>
      </Link>
      {/* Repeated links */}
      <Link href="/htmltojsx" class="group relative block rounded-3xl border-4 border-[#5ef896] bg-white pt-12 transition hover:bg-25D366 sm:pt-16 lg:pt-24 shadow-xl hover:shadow-2xl" onClick={handleClick}>
        <span class="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-25D366 to-111B21 ring-4 ring-111B21 transform hover:scale-110 transition duration-300"></span>
        <div class="p-4 sm:p-6 lg:p-8">
          <p class="text-lg font-bold text-111B21">Html To Jsx</p>
          <p class="mt-1 font-mono text-xs text-111B21 mb-2">it convert HTML code to React, Nextjs, and more Format</p>
          <p class="mt-1 font-mono text-xs text-111B21"><span class="text-25D366 font-bold">{views}</span> Views</p>
        </div>
      </Link>
      <Link href="/htmltojsx" class="group relative block rounded-3xl border-4 border-[#5ef896] bg-white pt-12 transition hover:bg-25D366 sm:pt-16 lg:pt-24 shadow-xl hover:shadow-2xl" onClick={handleClick}>
        <span class="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-25D366 to-111B21 ring-4 ring-111B21 transform hover:scale-110 transition duration-300"></span>
        <div class="p-4 sm:p-6 lg:p-8">
          <p class="text-lg font-bold text-111B21">Html To Jsx</p>
          <p class="mt-1 font-mono text-xs text-111B21 mb-2">it convert HTML code to React, Nextjs, and more Format</p>
          <p class="mt-1 font-mono text-xs text-111B21"><span class="text-25D366 font-bold">{views}</span> Views</p>
        </div>
      </Link>
    </div>
  </div>
</div>
<div class="bg-yellow-100 py-10">
  {/* Ai Converters */}
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl text-center text-111B21 font-extrabold mb-6">
      Media Converters
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* 1*/}
      <Link href="/htmltojsx" class="group relative block rounded-3xl border-4 border-[#5ef896] bg-white pt-12 transition hover:bg-25D366 sm:pt-16 lg:pt-24 shadow-xl hover:shadow-2xl" onClick={handleClick}>
        <span class="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-25D366 to-111B21 ring-4 ring-111B21 transform hover:scale-110 transition duration-300"></span>
        <div class="p-4 sm:p-6 lg:p-8">
          <p class="text-lg font-bold text-111B21">Html To Jsx</p>
          <p class="mt-1 font-mono text-xs text-111B21 mb-2">it convert HTML code to React, Nextjs, and more Format</p>
          <p class="mt-1 font-mono text-xs text-111B21"><span class="text-25D366 font-bold">{views}</span> Views</p>
        </div>
      </Link>
      <Link href="/htmltojsx" class="group relative block rounded-3xl border-4 border-[#5ef896] bg-white pt-12 transition hover:bg-25D366 sm:pt-16 lg:pt-24 shadow-xl hover:shadow-2xl" onClick={handleClick}>
        <span class="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-25D366 to-111B21 ring-4 ring-111B21 transform hover:scale-110 transition duration-300"></span>
        <div class="p-4 sm:p-6 lg:p-8">
          <p class="text-lg font-bold text-111B21">Html To Jsx</p>
          <p class="mt-1 font-mono text-xs text-111B21 mb-2">it convert HTML code to React, Nextjs, and more Format</p>
          <p class="mt-1 font-mono text-xs text-111B21"><span class="text-25D366 font-bold">{views}</span> Views</p>
        </div>
      </Link>
      <Link href="/htmltojsx" class="group relative block rounded-3xl border-4 border-[#5ef896] bg-white pt-12 transition hover:bg-25D366 sm:pt-16 lg:pt-24 shadow-xl hover:shadow-2xl" onClick={handleClick}>
        <span class="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-25D366 to-111B21 ring-4 ring-111B21 transform hover:scale-110 transition duration-300"></span>
        <div class="p-4 sm:p-6 lg:p-8">
          <p class="text-lg font-bold text-111B21">Html To Jsx</p>
          <p class="mt-1 font-mono text-xs text-111B21 mb-2">it convert HTML code to React, Nextjs, and more Format</p>
          <p class="mt-1 font-mono text-xs text-111B21"><span class="text-25D366 font-bold">{views}</span> Views</p>
        </div>
      </Link>
      <Link href="/htmltojsx" class="group relative block rounded-3xl border-4 border-[#5ef896] bg-white pt-12 transition hover:bg-25D366 sm:pt-16 lg:pt-24 shadow-xl hover:shadow-2xl" onClick={handleClick}>
        <span class="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-25D366 to-111B21 ring-4 ring-111B21 transform hover:scale-110 transition duration-300"></span>
        <div class="p-4 sm:p-6 lg:p-8">
          <p class="text-lg font-bold text-111B21">Html To Jsx</p>
          <p class="mt-1 font-mono text-xs text-111B21 mb-2">it convert HTML code to React, Nextjs, and more Format</p>
          <p class="mt-1 font-mono text-xs text-111B21"><span class="text-25D366 font-bold">{views}</span> Views</p>
        </div>
      </Link>
      {/* Repeated links */}
    </div>
  </div>
</div>

    
    </>
  )
}

export default Gridview