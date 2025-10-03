import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../Context/AppContext'

const BestSeller = () => {
  const {products}= useAppContext()
  return (
    <div className='mt-16'>
      <h1 className='text-2xl md:text-3xl font-medium'>Best Selles</h1>
      <div className='gap-6 p-6 m-3'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 my-6'>
          {products.filter(product =>product.price>140).map((product,index)=>(
            <ProductCard key={index} product={product}/>
          ))}
          
        </div>

      </div>
    </div>
  )
}

export default BestSeller