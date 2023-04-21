import React from 'react'
import Notice from '../components/notice'
import Gridview from '../components/Gridview'
import Testimonials from '../components/Testimonials'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <>
    <Banner/>
   <Gridview/>
   <Testimonials/>
   <Notice/>
    </>
  )
}

export default Home