import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import Journal from './pages/Journal'
import Gallery from './pages/Gallery'
import Certificates from './pages/Certificates'
import Reflection from './pages/Reflection'
import Contact from './pages/Contact'

export default function App(){
  const location = useLocation()
  return (
    <Layout>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div key={location.pathname} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-6}} transition={{duration:0.28}}>
          <Routes location={location}>
        <Route path='/' element={<Home/>} />
        <Route path='/journal' element={<Journal/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/certificates' element={<Certificates/>} />
        <Route path='/reflection' element={<Reflection/>} />
        <Route path='/contact' element={<Contact/>} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}
