import React, { useState } from 'react'
import {Toaster} from 'react-hot-toast'
import Navbar from './Components/Navbar'
import { useAppContext } from './Context/AppContext'
import Login from './Components/Login'


const App = () => {
  const {showUserLogin} = useAppContext()
  return (
    <div>
      <Toaster/>
      <Navbar/>
    {
      showUserLogin && <Login/>
    }
      <div>
      
      </div>
    </div>
  )
}

export default App