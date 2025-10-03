import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AppContext = createContext()


export const AppContextProvider = ({children})=>{


//states and fuctins
    
    const navigate = useNavigate()
    const [isSeller,setIsSeller]  = useState(false)
    const [user , setUser] = useState(null)
    const [showUserLogin , setShowUserLogin] = useState(false)
    



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
        setShowUserLogin
    }








    return<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = ()=>useContext(AppContext)