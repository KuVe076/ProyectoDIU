import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import Asignatura from '../pages/asignatura'

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/asignatura/:id' element={<Asignatura />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
