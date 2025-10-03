import React from 'react'
import { useAppContext } from '../Context/AppContext'
import ProductCard from '../Components/ProductCard'

const AllProducts = () => {
  const {products , searchQuery} = useAppContext()
  return (
    <div className='mt-16'>
      <div className='w-max items-end flex flex-col'>
      <h1 className='text-2xl md:text-3xl'>All Products</h1>
      <div className='bg-primary h-0.5 w-20 rounded-full'></div>
      </div>
      
      <div className='grid mt-10 mb-4 grid-cols-2 md:grid-cols-4 gap-3 md:gap-4'>
        {
          (searchQuery.length>0 ? searchQuery : products).filter(product =>product?.inStock).map((product,index)=>(
            <ProductCard key={index} product={product}/>
          ))
        }
      </div>

    </div>
  )
}

export default AllProducts