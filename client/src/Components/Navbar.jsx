import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

const Navbar = () => {
    const [open, setOpen]=useState(false)
    const {user,setUser,products ,inPutSearch,setInputSearch, setShowUserLogin ,navigate,setSearchQuery}= useAppContext()

    useEffect(()=>{
      if(inPutSearch){
      setSearchQuery(products.filter(product=>product.name.toLowerCase().includes(inPutSearch.toLowerCase())))
      navigate('/all-products')
    }else{
      setSearchQuery([])
    }
    },[inPutSearch,products])

    //logout
    const handleLogout = async()=>{
      setUser(null)
      navigate('/')
    }
    //Login
    const handleLogin = async()=>{
      setOpen(false) 
      setShowUserLogin(true)
    }
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all z-40">

            <Link to={'/'} onClick={()=>setOpen(false)}>
                <img src={assets.logo} alt="logo" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <Link to={'/'}>Home</Link>
                <Link to={'/all-products'}>AllProducts</Link>
                <Link to={'/'}>Contact</Link>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input onChange={(e)=>setInputSearch(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={assets.search_icon} alt="seach" />
                </div>

                <div onClick={()=>navigate('/cart')} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt="cart" className="w-6 opacity-80"/>
                    <button className="absolute -top-2 -right-3 text-xs text-white  bg-primary w-[18px] h-[18px] rounded-full">3</button>
                </div>

                {!user ?
                (<button 
                onClick={handleLogin}
                className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                  Login
                </button>):
                (<div className="group relative cursor-pointer">
                  <img className=" h-8 w-8" src={assets.profile_icon} alt="profile" />
                  <ul className="hidden group-hover:block absolute rounded-lg shadow-2xl  px-2 w-24 bg-white border py-2  border-gray-300 text-sm z-40">
                    <li className="hover:text-primary my-2 text-start">my orders</li>
                    <li className="hover:text-primary text-start pt-2" onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
                ) 

                }
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <img src={assets.menu_icon} alt="menu" />
            </button>

            {/* Mobile Menu */}
            {open &&
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <Link onClick={()=>setOpen(false)} to={'/'} className="block">Home</Link>
                <Link onClick={()=>setOpen(false)} to={'/all-products'} className="block">AllProducts</Link>
                <Link onClick={()=>setOpen(false)}  to={'/'} className="block">Contact</Link>
                {
                  user ?
                  ( <div><Link to={'/'} className="block">My orders</Link>
                <button onClick={handleLogout} className="cursor-pointer mt-2 px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                    Logout
                </button> </div> )
                  :
                  (
                <button onClick={handleLogin} className="cursor-pointer px-8 py-2 mt-4 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                    Login
                </button> )
                
                }
                
            </div>
            }

        </nav>
    )
}
export default Navbar;