import React, { useState } from 'react'
import {Toaster} from 'react-hot-toast'
import Navbar from './Components/Navbar'
import { useAppContext } from './Context/AppContext'
import Login from './Components/Login'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import Footer from './Components/Footer'
import ProductCategory from './pages/ProductCategory'


const App = () => {
  const {showUserLogin} = useAppContext()
  const isSellerPath = useLocation().pathname.includes('/seller')
  return (
    <div>
    
      <Toaster/>
{ showUserLogin ? <Login/> : null}
      {!isSellerPath ? <Navbar/> : null}
    <div className={`${isSellerPath ? '' :'px-6 md:px-16 xl:px-32 lg:px-24'}` }>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all-products' element={<AllProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/all-products/:category' element={<ProductCategory/>}/>
        <Route path='/all-products/:category/:_id' element={<ProductDetail/>}/>
      </Routes>
      <div>  
      </div>
      </div>
    {isSellerPath ? "" : <Footer/>}
    </div>
  )
}

export default App