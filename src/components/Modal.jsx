import React from 'react'
import { motion } from 'framer-motion'

export default function Modal({open, onClose, children}){
  if(!open) return null
  React.useEffect(()=>{
    function onKey(e){ if(e.key === 'Escape') onClose(); }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[onClose])
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} exit={{opacity:0}} className="relative z-50 max-w-4xl w-full p-6 bg-slate-900/60 border border-white/5 rounded-xl glass">
        {children}
      </motion.div>
    </div>
  )
}
