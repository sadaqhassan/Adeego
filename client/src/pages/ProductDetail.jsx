import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";
import ProductCard from "../Components/ProductCard";

const ProductDetail = () => {

    const {products , navigate , addToCart, currency}= useAppContext() 
    let {id} = useParams()

    const product = products.find((item)=>item._id === id);

    const [thumbnail, setThumbnail] = useState(null);
    const [related ,setRelated] = useState([])

    useEffect(()=>{
        if(products.length>0){
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter((item)=> item.category=== product.category )
            setRelated(productsCopy.slice(0,4))
        }else{
            setRelated([])
        }
    },[products])
    
    useEffect(()=>{
        setThumbnail(product?.image[0] ? product.image[0] : null)
    },[product])

    return product ? (
        <div className="max-w-6xl w-full mb-24 mt-16 px-6">
            <p>
                <Link to={'/'}>Home</Link> /
                <Link to={'/all-products'}> Products</Link> /
                <Link to={`/all-products/${product.category.toLowerCase()}`}> {product.category}</Link> /
                <span className="text-primary"> {product.name}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {product.image.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={thumbnail} alt="Selected product" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{product.name}</h1>

                    <div className="flex items-center gap-0.5 mt-1">
                        {Array(5).fill('').map((_, i) =>(
                            <img src={i<4 ? assets.star_icon : assets.star_dull_icon} alt="" />
                            )
                        )}
                        <p className="text-base ml-2">(4)</p>
                    </div>

                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: {currency}${product.price}</p>
                        <p className="text-2xl font-medium">MRP:{currency}${product.offerPrice}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button onClick={()=>addToCart(product._id)} className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                            Add to Cart
                        </button>
                        <button onClick={()=>navigate('/cart')} className="w-full py-3.5 cursor-pointer font-medium bg-primary text-white hover:bg-primary-dull transition" >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col  items-center mt-16">
                    <div className="flex flex-col w-max items-center">
                        <h1 className="text-2xl md:text-3xl font-medium">Related Products</h1>
                        <div className="bg-primary w-20 mt-1 h-0.5 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5">
                        {related.filter(pro=>pro.inStock).map((item,index)=>(
                            <ProductCard product={item} key={index}/>
                        ))}
                    </div>
                    <button onClick={()=>{navigate('/all-products'); scrollTo(0,0)}} className="bg-gradient-to-b from-secondary to-primary px-2 py-1 rounded text-white  mt-10 "> See More</button>
                </div>
            </div>
        </div>
    ) : (<h1>Sorry not found this product</h1>);
};

export default ProductDetail;