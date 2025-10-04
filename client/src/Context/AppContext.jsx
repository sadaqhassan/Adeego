import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
const AppContext = createContext()


export const AppContextProvider = ({children})=>{


//states and fuctins
    
    const navigate = useNavigate()
    const currency = import.meta.env.CURRENCY;
    const [isSeller,setIsSeller]  = useState(false)
    const [user , setUser] = useState(true)
    const [showUserLogin , setShowUserLogin] = useState(false)
    const [products,setProducts] = useState([])
    const [cartItems,setCartItems] = useState({})
    const [searchQuery ,setSearchQuery] =useState([])
    const [inPutSearch , setInputSearch] = useState("") 

    //fetching dummy Products
    const fetchProducts = async()=>{
        setProducts(dummyProducts)
    }

    //AddToCart
    const addToCart = (itemId)=>{
        let cartData = structuredClone(cartItems)

        if(cartData[itemId]){
            cartData[itemId]+=1
        }else{
            cartData[itemId]=1
        }
        setCartItems(cartData)
        toast.success('Added to cart')
    }

    // update cart Data
    const updateCartData = (itemId,quantity)=>{
        let cartData = structuredClone(cartItems)
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success('cart updated')
    }

    //Remove from Cart
    const removeitem = (itemId)=>{
        const cartData = structuredClone(cartItems)
        if(cartData[itemId]){
            cartData[itemId]-=1
            if(cartData[itemId] === 0){
                delete cartData[itemId]
                toast.success('Removed from cart')
            } 
        }
        setCartItems(cartData)
        
    }
    //cartCount
    const cartCount = ()=>{
        let totalCount = 0;
        for(const item in cartItems){
            totalCount+=cartItems[item]
        }
        return totalCount;
    }

    const cartAmount = ()=>{
        let totalAmount = 0
        for(const items in cartItems){
            const itemsInfo = products.find((product)=>product._id === items);
            if(cartItems[items] > 0){
                totalAmount+=itemsInfo.offerPrice*cartItems[items]
            }
        }
        Math.floor(totalAmount*100)/100;
    }


    // useEffects
    useEffect(()=>{
        fetchProducts()
    },[])
    



//exporting place 

    const value = {
        navigate,
        isSeller,
        setIsSeller,
        isSeller,
        setIsSeller,
        user,
        setUser,
        showUserLogin,
        setShowUserLogin,
        products,
        setProducts,
        currency,
        cartItems,
        setCartItems,
        addToCart,
        removeitem,
        updateCartData,
        searchQuery,
        setSearchQuery,
        inPutSearch,
        setInputSearch,
        cartCount,
        cartAmount
        
    }








    return<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = ()=>useContext(AppContext)