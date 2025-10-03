import React from 'react'
import Banner from '../Components/Banner'
import Catogeries from '../Components/Catogeries'
import BestSeller from '../Components/BestSeller'

const Home = () => {
  return (
    <div className='mt-10'>
      <Banner/>
      <Catogeries/>
      <BestSeller/>
    </div>
  )
}

export default Home