import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import myPic from './Picture/profile.jpg'   // ← IMPORTANT
import AnimatedPortal from '../components/AnimatedPortal'

export default function Home(){
  const navigate = useNavigate()
  const location = useLocation()
  const [showZoom, setShowZoom] = useState(false)
  const [showProfileZoom, setShowProfileZoom] = useState(false)
  return (
    <section className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* LEFT PANEL */}
        <motion.div 
          initial={{x:-10, opacity:0}} 
          animate={{x:0, opacity:1}} 
          transition={{delay:0.1}} 
          className="glass p-10 md:p-12 rounded-[24px] border border-white/5"
        >

          <div className="flex items-center gap-4 mb-3">

            {/* PROFILE IMAGE */}
            <div 
              className="w-28 h-28 rounded-xl overflow-hidden border border-white/10 shadow-lg cursor-pointer hover:shadow-xl hover:border-cyan-400/30 transition-all"
              onClick={() => setShowProfileZoom(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setShowProfileZoom(true)}
            >
              <img 
                src={myPic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="text-xs text-slate-400">Portfolio</div>
              <div className="text-xl font-semibold text-slate-100">
                Rudino R. Zapanta Jr. — BSIT-3B
              </div>
            </div>

          </div>

          <h1 className="text-4xl md:text-6xl font-orbitron font-extrabold leading-tight mb-4 tracking-tight text-slate-100">
            Education Tour
          </h1>

          <p className="text-slate-300/90 mb-6">
           Join me on an educational tour where knowledge meets adventure—visiting innovative companies, cultural landmarks, and capturing moments that inspire and educate.
          </p>

          <div className="flex gap-4 mt-3">
            <button 
              onClick={()=>navigate('/journal')} 
              className="px-5 py-3 rounded-xl btn-cyan text-sm font-semibold"
            >
              Explore Journal
            </button>

            <button 
              onClick={()=>{
                if(location.pathname === '/'){
                  const el = document.querySelector('#gallery-anchor')
                  if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
                  else navigate('/gallery')
                } else {
                  navigate('/gallery')
                }
              }} 
              className="px-5 py-3 rounded-xl btn-purple text-sm font-semibold border border-white/6"
            >
              See Gallery
            </button>
          </div>

          <div className="mt-8 text-sm text-slate-400">
            Visited:{' '}
            <a href="https://www.facebook.com/worldtechinformationsolutions" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">Worldtech Information Solutions</a>
            {' '}·{' '}
            <a href="https://www.facebook.com/rivanitcebu" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">Rivan IT Cebu</a>
            {' '}·{' '}
            <a href="https://www.facebook.com/codechum" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">CodeChum</a>
            {' '}·{' '}
            <a href="https://www.facebook.com/matatechnologies/" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">Mata Technologies</a>
            {' '}·{' '}
            <a href="https://www.facebook.com/t.a.r.s.i.e.r117.balilihan.substation" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">T.A.R.S.I.E.R 117</a>
          </div>

        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div 
          initial={{x:10, opacity:0}} 
          animate={{x:0, opacity:1}} 
          transition={{delay:0.2}} 
          className="relative rounded-[24px] overflow-hidden min-h-[360px] border border-white/6"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0ea5a4]/8 via-transparent to-[#a78bfa]/6 opacity-80" />

          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-transparent to-black/30">
            <div 
              className="p-8 w-[80%] h-[80%] rounded-xl border border-white/6 bg-gradient-to-tr from-[#0ea5a4]/4 to-[#a78bfa]/4 flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
              onClick={() => setShowZoom(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setShowZoom(true)}
            >
              <AnimatedPortal size={220} />
            </div>
          </div>

        </motion.div>

      </div>

      {/* ZOOM MODAL */}
      {showZoom && (
        <div 
          onClick={() => setShowZoom(false)} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6 py-12"
        >
          <div onClick={(e) => e.stopPropagation()} className="relative max-w-2xl w-full mx-auto">
            <button 
              onClick={() => setShowZoom(false)} 
              aria-label="Close zoom"
              className="absolute right-2 top-2 z-50 rounded-full p-2 bg-black/50 border border-white/6 text-slate-200 hover:scale-105"
            >
              ✕
            </button>
            <div className="relative rounded-3xl overflow-hidden neon-viewer bg-gradient-to-br from-[#021226]/70 to-[#071025]/70 border border-white/6 p-6">
              <div className="flex items-center justify-center">
                <div className="max-w-[900px] w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-black/30 to-transparent flex items-center justify-center">
                  <AnimatedPortal size={450} />
                </div>
              </div>
              <div className="mt-4 text-center text-xs text-slate-400/70">Click outside or press Esc to close</div>
            </div>
          </div>
        </div>
      )}

      {/* CARDS */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="p-8 glass rounded-[20px] border border-white/5 card-neon shadow-[0_10px_40px_rgba(2,6,23,0.55)]">
          <h3 className="text-sm text-slate-400">Tour Purpose</h3>
          <div className="mt-2 text-lg font-semibold text-slate-100">Visit & Learn — Industry Tech, Certifications, Use-cases</div>
        </div>

        <div className="p-8 glass rounded-[20px] border border-white/5 card-neon shadow-[0_10px_40px_rgba(2,6,23,0.55)]">
          <h3 className="text-sm text-slate-400">Outcomes</h3>
          <div className="mt-2 text-lg font-semibold text-slate-100">Hands-on exposure, certifications, career insights.</div>
        </div>

        <div className="p-8 glass rounded-[20px] border border-white/5 card-neon shadow-[0_10px_40px_rgba(2,6,23,0.55)]">
          <h3 className="text-sm text-slate-400">Experience</h3>
          <div className="mt-2 text-lg font-semibold text-slate-100">Reflections, documented photos, and a polished journal of the journey</div>
        </div>
      </div>

      {/* PROFILE ZOOM MODAL */}
      {showProfileZoom && (
        <div 
          onClick={() => setShowProfileZoom(false)} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6 py-12"
        >
          <div onClick={(e) => e.stopPropagation()} className="relative max-w-md w-full mx-auto">
            <button 
              onClick={() => setShowProfileZoom(false)} 
              aria-label="Close zoom"
              className="absolute right-2 top-2 z-50 rounded-full p-2 bg-black/50 border border-white/6 text-slate-200 hover:scale-105"
            >
              ✕
            </button>
            <div className="relative rounded-3xl overflow-hidden neon-viewer bg-gradient-to-br from-[#021226]/70 to-[#071025]/70 border border-white/6 p-6">
              <div className="flex items-center justify-center">
                <div className="max-w-sm w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-black/30 to-transparent flex items-center justify-center border border-white/10 shadow-2xl">
                  <img src={myPic} alt="Profile - Zoomed" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="mt-4 text-center text-xs text-slate-400/70">Click outside or press Esc to close</div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
