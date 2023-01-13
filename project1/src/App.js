import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Fotter from './Components/Fotter'
import Header from './Components/Header'
import Home from './Components/Home'

import "./Style/app.scss"
import "./Style/header.scss"
import "./Style/Home.scss"
import "./Style/contact.scss"
import "./Style/Fotter.scss"
import Contact from './Components/Contact'
import Services from './Components/Services'

function App() {
  return (
   <Router>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Services/>}/>
    </Routes>
    <Fotter/>
   </Router>
  )
}

export default App