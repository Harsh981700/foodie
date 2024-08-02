

import {BrowserRouter, Route, Routes} from "react-router-dom"

import './App.css'
import Header from './component/Header'

import Footer from './component/Footer'


import OurFood from './component/OurFood'
import Home from './component/Home'
import About from './component/About'
import Sign from './component/Sign'
import { useState } from "react"

function App() {
  const[count,setCount] = useState(0)
  const handleAdd=()=>{
    setCount(count+1)
  }


  return (
    <>
    <div>
    <BrowserRouter>
   
      
      <Header count={count} />
      <Routes>
        <Route path='/' element={<Home handleAdd={handleAdd}/>}/>
        <Route path='/AboutUs' element={<About/>}/>
        <Route path='/Sign' element={<Sign/>}/>
       
        <Route path='/Ourfood' element={<OurFood handleAdd={handleAdd}/>}/>
{/*  */}
      
      
      
      

      </Routes>
      <Footer/>
      </BrowserRouter>
   
      </div>

    </>
  )
}

export default App
