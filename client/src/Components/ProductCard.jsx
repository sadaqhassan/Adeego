import { useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../Context/AppContext";

const ProductCard = () => {
    const [count, setCount] = useState(0);

    const {products} = useAppContext();

    return products &&(
        <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
          {
              products.map((product,index)=>(
              <div>
            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img className="group-hover:scale-105 transition max-w-26 md:max-w-36" src={product.image} alt={product.name} />
            </div>
            

              
            <div className="text-gray-500/60 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                    assets <0 ? assets.star_icon : assets.star_dull_icon
                        
                    ))}
                    <p>({product.rating})</p>
                </div>
                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-primary">
                        ${product.offerPrice} <span className="text-gray-500/60 md:text-sm text-xs line-through">${product.price}</span>
                    </p>
                    
                    <div className="text-primary">
                        {count === 0 ? (
                            <button className="flex items-center justify-center gap-1 bg-gray-100 border border-gray-300 md:w-[80px] w-[64px] h-[34px] rounded text-primary font-medium" onClick={() => setCount(1)} >
                                <img src={assets.cart_icon} alt="" />
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/25 rounded select-none">
                                <button onClick={() => setCount((prev) => Math.max(prev - 1, 0))} className="cursor-pointer text-md px-2 h-full" >
                                    -
                                </button>
                                <span className="w-5 text-center">{count}</span>
                                <button onClick={() => setCount((prev) => prev + 1)} className="cursor-pointer text-md px-2 h-full" >
                                    +
                                </button>
                            </div>
                            
                        )}
                        
                    </div>
                    
                </div>
                
            </div>
            
           </div>
            ))
            }
        </div>
        
    );
};

export default ProductCard;