import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
return (
    <div className='relative mt-24 mb-20'>
        <img src={assets.bottom_banner_image} alt="banner" className='hidden w-full md:block' />
        <img src={assets.bottom_banner_image_sm} alt="banner" className='md:hidden w-full block' />
        <div className='absolute inset-0 flex flex-col  items-center md:items-end pt-16  md:pt-0 md:justify-center md:pr-24'>
            <div>
            <h1 className='text-2xl md:text-3xl font-bold text-primary'>Why We Are The Best</h1>
            {
                features.map((feature,index)=>(
                    <div key={index} className='flex items-center md:space-x-3 mt-5 gap-6'>
                    <img src={feature.icon} alt={feature.title} className='md:w-11 w-9'/>
                        <div className='flex flex-col items-start'>
                        <p className='text-xl font-semibold'>{feature.title}</p>
                        <p className='text-gray-500/70'>{feature.description}</p>
                    </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default BottomBanner