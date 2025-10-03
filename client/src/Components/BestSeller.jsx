import React from 'react'
import ProductCard from './ProductCard'

const BestSeller = () => {
  return (
    <div className='mt-16'>
      <h1 className='text-2xl md:text-3xl font-medium'>Best Selles</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 my-6'>
        <div>
          <ProductCard/>
        </div>

      </div>
    </div>
  )
}

export default BestSeller