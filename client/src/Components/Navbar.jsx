import { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

const Navbar = () => {
    const [open, setOpen]=useState(false)
    const {user,setUser , setShowUserLogin}= useAppContext()

    const handleLogout = ()=>{
      setUser(null)
    }
    const handleLogin = ()=>{
      setOpen(false)
      setShowUserLogin(true)
    }
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <Link to={'/'}>
                <img src={assets.logo} alt="logo" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <Link to={'/'}>Home</Link>
                <Link to={'/all-products'}>AllProducts</Link>
                <Link to={'/'}>Contact</Link>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={assets.search_icon} alt="seach" />
                </div>

                <div className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt="cart" className="w-6 opacity-80"/>
                    <button className="absolute -top-2 -right-3 text-xs text-white  bg-primary w-[18px] h-[18px] rounded-full">3</button>
                </div>

                {!user ?
                (<button 
                  onClick={handleLogin}
                className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                    Login
                </button>):
                (<div>
                  <img className="group relative h-8 w-8" src={assets.profile_icon} alt="profile" />
                  <ul className="hidden hover:block absolute bg-white shadow-2xl">
                    <li>My orders</li>
                    <li onClick={handleLogout}>Logout</li>
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
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <Link onClick={()=>setOpen(false)} to={'/'} className="block">Home</Link>
                <Link onClick={()=>setOpen(false)} to={'/all-products'} className="block">AllProducts</Link>
                <Link onClick={()=>setOpen(false)}  to={'/'} className="block">Contact</Link>
                {
                  user ?
                  ( <div><Link to={'/'} className="block">My orders</Link>
                <button onClick={handleLogout} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                    Logout
                </button> </div> )
                  :
                  (
                <button onClick={()=>setOpen(false)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                    Login
                </button> )
                }
                
            </div>

        </nav>
    )
}
export default Navbar;