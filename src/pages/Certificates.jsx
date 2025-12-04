import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import certificateImg from './Picture/certificate.jpg'

export default function Certificates(){
  const [isOpen, setIsOpen] = useState(false)
  const [zoomed, setZoomed] = useState(false)

  useEffect(()=>{
    function onKey(e){
      if(e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(()=>{
    if(!isOpen) setZoomed(false)
    else {
      // start zoom-in after mount for smooth effect
      const t = setTimeout(()=> setZoomed(true), 20)
      return ()=> clearTimeout(t)
    }
  }, [isOpen])

  const title = 'Certificates'
  const issuer = 'Verified Certificate'
  const date = 'Nov 22, 2025'
  const total = 1

  return (
    <div className="max-w-7xl mx-auto bg-flow px-6 md:px-0">
      <div id="certs-anchor" className="-mt-20 pt-20" />

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-orbitron font-extrabold text-slate-100">Certificate</h1>
        </div>

        <div className="text-sm text-slate-400">Total Certificates: <strong className="text-slate-100 ml-2">{String(total).padStart(2,'0')}</strong></div>
      </div>

      <Card className="p-8 glass">
        <div className="flex flex-col items-center justify-center gap-6 py-8">
          <div className="text-sm text-slate-400/80 uppercase tracking-widest">{date}</div>
          <div className="text-xl md:text-2xl font-orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-teal-200">{issuer}</div>

          <div className="w-full flex justify-center">
            <div style={{maxWidth: 900, width: '100%'}} className="rounded-[20px] overflow-hidden neon-frame cursor-zoom-in">
              <img
                src={certificateImg}
                alt="Certificate"
                onClick={()=> setIsOpen(true)}
                className="w-full h-auto block"
                style={{borderRadius:20, boxShadow: '0 20px 60px rgba(99,102,241,0.12)'}}
              />
            </div>
          </div>

          <div className="text-xs text-slate-400/70">Click image to enlarge</div>
        </div>
      </Card>

      {isOpen && (
        <div onClick={()=> setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-6 py-12">
          <div onClick={(e)=> e.stopPropagation()} className="relative w-full max-w-[1200px]">
            <button onClick={()=> setIsOpen(false)} aria-label="Close viewer" className="absolute right-2 top-2 z-50 rounded-full p-2 bg-black/50 border border-white/6 text-slate-200">✕</button>

            <div className="w-full flex items-center justify-center">
              <div className={`transform transition-all duration-300 ${zoomed ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <img src={certificateImg} alt="Certificate Large" style={{width:'100%', maxWidth:900, borderRadius:20, boxShadow: '0 40px 120px rgba(99,102,241,0.18)'}} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

