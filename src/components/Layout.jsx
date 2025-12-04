import React from 'react'
import Nav from './Nav'
import { motion } from 'framer-motion'

export default function Layout({children}){
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Nav />
      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute -left-24 -top-28 w-80 h-80 rounded-full bg-gradient-to-br from-[#0ea5a4]/20 to-[#a78bfa]/10 blur-3xl opacity-50" />
      <div className="pointer-events-none absolute right-10 -bottom-36 w-72 h-72 rounded-3xl bg-gradient-to-tr from-[#38bdf8]/18 to-[#0ea5a4]/6 blur-3xl opacity-40 rotate-[18deg]" />
      <motion.main
        initial={{opacity:0, y:10}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5}}
        className="flex-1 container mx-auto px-6 py-10 lg:py-16"
      >
        {children}
      </motion.main>
      <footer className="text-center py-6 text-sm text-slate-400">
        <div>© {new Date().getFullYear()} Rudino R. Zapanta Jr. BSIT Student</div>
      </footer>
    </div>
  )
}
