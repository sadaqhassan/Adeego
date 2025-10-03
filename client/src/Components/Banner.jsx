import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div  className='relative'>
        <img src={assets.main_banner_bg} alt="banner" className='hidden md:block w-full' />
        <img src={assets.main_banner_bg_sm} alt="smbanner" className='md:hidden block w-full'/>
        <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 pl-18 lg:pl-24'>
            <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl text-center md:text-start max-w-72 md:max-w-80 lg:max-w-105 loading-tight md:loading-15'
            >Freshness You Can Trust Sevings You Will Love!</h1>
        
        <div className='flex items-center mt-6 font-medium'>
            {/* mobile */}
            <Link to={'/all-products'} className='group flex items-center gap-2 px-7 py-3 md:px-9 bg-primary hover:bg-primary-dull transition rounded text-white'>ShopNow
            <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt="Arrow" />
            </Link>

            {/* deskTop */}
            <Link className='group hidden md:flex items-center gap-2 py-3 px-9 cursor-pointer' to={'/all-products'}>Explore deals
            <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="Arrow" />
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Banner