import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../Context/AppContext'

const catogeries = () => {
  const {navigate} = useAppContext()
  return (
    <div className='mt-16'>
      <h1 className='text-2xl md:text-3xl font-medium'>Categories</h1>
      <div className='mb-3 grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>
        {
          categories.map((category ,index)=>(
          <div onClick={()=>{navigate(`/all-products/${category.path.toLowerCase()}`);
          scrollTo(0,0)
        }}
          className='group cursor-pointer py-5 px-3 gap-2 rounded flex flex-col jus items-center'  style={{background:category.bgColor}} key={index}>
          <img src={category.image} alt="image" className='group-hover:scale-108 transition max-w-28'/>
          <p className='text-center text-medium'>{category.text}</p>
        </div>
          ))
        
}
      </div>
    </div>
  )
}

export default catogeries