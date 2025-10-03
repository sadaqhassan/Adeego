import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
const AppContext = createContext()


export const AppContextProvider = ({children})=>{


//states and fuctins
    
    const navigate = useNavigate()
    const [isSeller,setIsSeller]  = useState(false)
    const [user , setUser] = useState(true)
    const [showUserLogin , setShowUserLogin] = useState(false)
    const [products,setProducts] = useState([])

    const fetchProducts = async()=>{
        setProducts(dummyProducts)
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
    }








    return<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = ()=>useContext(AppContext)