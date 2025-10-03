import React from 'react'
import { categories } from '../assets/assets'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../Context/AppContext'
import ProductCard from '../Components/ProductCard'

const ProductCategory = () => {
    const {category} = useParams()
    const {products} = useAppContext()

    const searchCategory = categories.find(item=>item.path.toLowerCase()==category)
    const filteredProducts = products.filter(product=>product.category.toLowerCase()===category)
    
return (
    <div className='mt-16 mb-24'>
        {
            searchCategory && (
                <div className='flex flex-col w-max items-end '>
                    <p className='text-2xl md:text-3xl font-medium'>{searchCategory.text.toUpperCase()}</p>
                    <div className='bg-primary w-20 h-0.5 rounded-full'></div>
                    
                </div>
            )
            
        }
        <div className='grid grid-cols-2 md:grid-cols-4 my-5 gap-6'>
        {
        filteredProducts.length > 0 ?
        ( filteredProducts.map((product,index)=>(
                <ProductCard key={index} product={product}/>
            )) ):
            (<p className='text-2xl font-medium'>There no products in this category</p>)
        }
        </div>
    </div>
)
}

export default ProductCategory