import React from 'react'
import Banner from '../Components/Banner'
import Catogeries from '../Components/Catogeries'
import BestSeller from '../Components/BestSeller'
import BottomBanner from '../Components/BottomBanner'
import NewsLater from '../Components/NewsLater'

const Home = () => {
  return (
    <div className='mt-10'>
      <Banner/>
      <Catogeries/>
      <BestSeller/>
      <BottomBanner/>
      <NewsLater/>
    </div>
  )
}

export default Home