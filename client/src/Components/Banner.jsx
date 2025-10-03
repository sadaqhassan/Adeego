import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div  className='relative'>
        <img src={assets.main_banner_bg} alt="banner" className='hidden md:block w-full' />
         <img src={assets.main_banner_bg_sm} alt="smbanner" className='md:hidden block w-full'/>
    </div>
  )
}

export default Banner