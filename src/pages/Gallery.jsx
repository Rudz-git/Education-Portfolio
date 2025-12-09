import React, { useEffect, useState, useCallback, useRef } from 'react'
import Card from '../components/Card'
import rivan from "./picture/rivan.jpg";
import rivan2 from "./picture/rivan2.jpg";
import worldtech from "./picture/Worldtech.jpg";
import codechum from "./picture/codechum.jpg";

import bohol1 from "./picture/bohol1.jpg";
import bohol2 from "./picture/bohol2.jpg";
import bohol3 from "./picture/bohol3.jpg";
import bohol4 from "./picture/bohol4.jpg";
import bohol5 from "./picture/bohol5.jpg";
import bohol6 from "./picture/bohol6.jpg";
import bohol7 from "./picture/bohol7.jpg";
import bohol8 from "./picture/bohol8.jpg";
import bohol9 from "./picture/bohol9.jpg";
import bohol10 from "./picture/bohol10.jpg";
import bohol11 from "./picture/bohol11.jpg";
import bohol12 from "./picture/bohol12.jpg";
import bohol13 from "./picture/bohol13.jpg";
import bohol14 from "./picture/bohol14.jpg";
import bohol15 from "./picture/bohol15.jpg";
import bohol16 from "./picture/bohol16.jpg";

import cebu1 from "./Picture/cebu1.jpg";
import cebu2 from "./Picture/cebu2.jpg";
import cebu3 from "./Picture/cebu3.jpg";
import cebu4 from "./Picture/cebu4.jpg";
import cebu5 from "./Picture/cebu5.jpg";
import cebu6 from "./Picture/cebu6.jpg";
import cebu7 from "./Picture/cebu7.jpg";
import cebu8 from "./Picture/cebu8.jpg";
import cebu9 from "./Picture/cebu9.jpg";
import cebu10 from "./Picture/cebu10.jpg";
import cebu11 from "./Picture/cebu11.jpg";
import cebu12 from "./Picture/cebu12.jpg";
import cebu1st from "./Picture/cebu1st.jpg";

import third1 from "./picture/3rd1.jpg";
import third2 from "./picture/3rd2.jpg";
import third3 from "./picture/3rd3.jpg";
import third4 from "./picture/3rd4.jpg";
import third5 from "./picture/3rd5.jpg";
import third6 from "./picture/3rd6.jpg";
import third7 from "./picture/3rd7.jpg";




// Clean mock-only gallery component — all images are hard-coded placeholders

function placeholderSVG(text = 'Placeholder', w = 900, h = 580){
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
    <defs>
      <linearGradient id='g' x1='0' x2='1'>
        <stop offset='0' stop-color='#00ffe6' />
        <stop offset='1' stop-color='#8b5cf6' />
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' rx='20' fill='rgba(3,7,18,0.7)' />
    <rect x='8' y='8' width='${w-16}' height='${h-16}' rx='14' fill='rgba(255,255,255,0.02)' stroke='url(#g)' stroke-width='2' />
    <g transform='translate(36,72)'>
      <rect x='0' y='0' width='${w-72}' height='${h-220}' rx='10' fill='rgba(255,255,255,0.015)' />
      <text x='50%' y='50%' fill='rgba(255,255,255,0.7)' font-family='Inter, Poppins, sans-serif' font-size='28' text-anchor='middle' dominant-baseline='middle'>${text}</text>
    </g>
    <g transform='translate(40,${h-110})'>
      <rect x='0' y='0' width='${w-80}' height='56' rx='10' fill='rgba(255,255,255,0.02)' />
      <text x='20' y='36' fill='rgba(255,255,255,0.9)' font-family='Inter, Poppins, sans-serif' font-size='16'>SCI-FI MOCKUP — ${text}</text>
    </g>
  </svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const GROUPS = [
  {
    date: '2025-11-19',
    label: 'November 19 - Cebu 1st Day',
    items: [
      { id: 'g1-1', name: 'Worldtech Visit', data: worldtech },
      { id:'c1st', name:'Cebu 1st Day', data: cebu1st },
      { id:'c2', name:'Cebu Photo 2', data: cebu2 },
      { id:'c3', name:'Cebu Photo 3', data: cebu3 },
      { id:'c4', name:'Cebu Photo 4', data: cebu4 },
      { id:'c5', name:'Cebu Photo 5', data: cebu5 },
      { id:'c6', name:'Cebu Photo 6', data: cebu6 },
      { id:'c7', name:'Cebu Photo 7', data: cebu7 },
      { id:'c8', name:'Cebu Photo 8', data: cebu8 },
       { id:'c12', name:'Cebu Photo 12', data: cebu12 },
      
    ]
  },
  {
    date: '2025-11-20',
    label: 'November 20 - Cebu 2nd Day',
    items: [
      { id: 'g2-1', name: 'Rivan IT Hall', data: rivan },
      { id: 'g2-2', name: 'Rivan IT Hall', data: rivan2 },
      { id:'c1', name:'Cebu Photo 1', data: cebu1 },
      { id:'c9', name:'Cebu Photo 9', data: cebu9 },
        { id:'g3-1', name:'CodeChum Visit', data: codechum },
      { id:'c10', name:'Cebu Photo 10', data: cebu10 },
      { id:'c11', name:'Cebu Photo 11', data: cebu11 },
    ]
  },
  {
    date: '2025-11-21',
    label: 'November 21 - Cebu 3rd Day',
    items: [
      { id:'3d1', name:'3rd Day Photo 1', data: third1 },
      { id:'3d2', name:'3rd Day Photo 2', data: third2 },
       { id:'3d3', name:'Activity Photo 3', data: third3 },
      { id:'3d4', name:'Activity Photo 4', data: third4 },
      { id:'3d5', name:'Activity Photo 5', data: third5 },
      { id:'3d6', name:'Activity Photo 6', data: third6 },
      { id:'3d7', name:'Activity Photo 7', data: third7 },
    ]
  },
  {
    date: '2025-11-22',
    label: 'November 22 - Bohol',
    items: [
      { id:'b1', name:'Bohol Photo 1', data: bohol1 },
      { id:'b2', name:'Bohol Photo 2', data: bohol2 },
      { id:'b3', name:'Bohol Photo 3', data: bohol3 },
      { id:'b4', name:'Bohol Photo 4', data: bohol4 },
      { id:'b5', name:'Bohol Photo 5', data: bohol5 },
      { id:'b6', name:'Bohol Photo 6', data: bohol6 },
      { id:'b7', name:'Bohol Photo 7', data: bohol7 },
      { id:'b8', name:'Bohol Photo 8', data: bohol8 },
      { id:'b9', name:'Bohol Photo 9', data: bohol9 },
      { id:'b10', name:'Bohol Photo 10', data: bohol10 },
      { id:'b11', name:'Bohol Photo 11', data: bohol11 },
      { id:'b12', name:'Bohol Photo 12', data: bohol12 },
      { id:'b13', name:'Bohol Photo 13', data: bohol13 },
      { id:'b14', name:'Bohol Photo 14', data: bohol14 },
      { id:'b15', name:'Bohol Photo 15', data: bohol15 },
      { id:'b16', name:'Bohol Photo 16', data: bohol16 },
    ]
  },
]

export default function Gallery(){
  useEffect(()=>{ if(window.location.hash === '#gallery-anchor'){ const el = document.querySelector('#gallery-anchor'); if(el) el.scrollIntoView({behavior:'smooth'}) } }, [])

  // animations removed: parallax/circuit overlay disabled for reduced motion

  const total = GROUPS.reduce((s,g)=> s + (g.items?.length || 0), 0)

  // build a flattened list so modal can navigate across groups
  const allItems = GROUPS.flatMap(g => g.items.map(i => ({ ...i, groupDate: g.date, groupLabel: g.label })))

  const [viewerIndex, setViewerIndex] = useState(null)

  const openViewer = useCallback((idx) => setViewerIndex(idx), [])
  const closeViewer = useCallback(() => setViewerIndex(null), [])

  const showPrev = useCallback(() => {
    setViewerIndex(prev => (prev === null ? null : (prev - 1 + allItems.length) % allItems.length))
  }, [allItems.length])

  const showNext = useCallback(() => {
    setViewerIndex(prev => (prev === null ? null : (prev + 1) % allItems.length))
  }, [allItems.length])

  // keyboard navigation while viewer is open
  useEffect(()=>{
    if(viewerIndex === null) return
    function onKey(e){
      if(e.key === 'Escape') closeViewer()
      if(e.key === 'ArrowLeft') showPrev()
      if(e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  }, [viewerIndex, closeViewer, showPrev, showNext])

  return (
    <div className="max-w-7xl mx-auto bg-flow px-6 md:px-0">
      <div className="futuristic-stage relative">
          <div id="gallery-anchor" className="-mt-20 pt-20" />
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-orbitron font-extrabold text-slate-100">Gallery — Documented Photos</h1>        </div>
        <div className="text-sm text-slate-400">Total Images: <strong className="text-slate-100 ml-2">{total}</strong></div>
      </div>

      <Card className="p-8 glass">
        <div className="space-y-12">
            {GROUPS.map(group => (
            <section key={group.date}>
              <div className="flex items-center justify-between mb-4 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-12 rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-indigo-400 shadow-[0_0_28px_rgba(67,56,202,0.12)]" />
                  <div>
                    <div className="text-xs text-slate-400/80 uppercase tracking-widest">{new Date(group.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                    <div className="text-xl md:text-2xl font-orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-teal-200 drop-shadow-[0_8px_30px_rgba(124,58,237,0.12)]">{group.label}</div>
                    <div className="text-xs text-slate-400/70 mt-1">{group.items.length} photo{group.items.length !== 1 ? 's' : ''}</div>
                  </div>
                </div>
                <div className="text-xs text-slate-400/60">Scroll ▼</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-3">
                {group.items.map(img => {
                  const idx = allItems.findIndex(it => it.id === img.id)
                  return (
                    <div key={img.id} onClick={() => openViewer(idx)} role="button" tabIndex={0} className="relative neon-frame cursor-pointer rounded-2xl overflow-hidden">
                    <div className="p-2 bg-gradient-to-br from-slate-900/30 to-transparent border border-white/6 rounded-xl neon-border">
                      <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-black/20 to-transparent glass">
                        <img src={img.data} alt={img.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="mt-3 flex items-start justify-between gap-3">
      
                        <div className="text-xxs text-slate-400/60">{new Date(group.date).toLocaleDateString(undefined, { weekday: 'short' })}</div>
                      </div>
                    </div>
                  </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </Card>

      {/* Viewer modal */}
      {viewerIndex !== null && (
        <div onClick={closeViewer} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6 py-12">
          <div onClick={(e)=>e.stopPropagation()} className="relative max-w-[1200px] w-full mx-auto">
            <button onClick={closeViewer} aria-label="Close viewer" className="absolute right-2 top-2 z-50 rounded-full p-2 bg-black/50 border border-white/6 text-slate-200 hover:scale-105">✕</button>

            <div className="relative rounded-3xl overflow-hidden neon-viewer bg-gradient-to-br from-[#021226]/70 to-[#071025]/70 border border-white/6 p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="text-xs text-slate-400/80 uppercase tracking-widest">{allItems[viewerIndex].groupLabel}</div>
                  <div className="text-lg md:text-2xl font-orbitron font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-teal-200">{allItems[viewerIndex].name}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xxs text-slate-400/60 mr-2">{new Date(allItems[viewerIndex].groupDate).toLocaleDateString()}</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6">
                <button onClick={(e)=>{ e.stopPropagation(); showPrev() }} aria-label="Previous" className="viewer-nav left text-lg md:text-2xl p-3 rounded-full bg-black/40 border border-white/6 hover:scale-105">◀</button>

                <div className="max-w-[1000px] w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-black/30 to-transparent flex items-center justify-center">
                  <img src={allItems[viewerIndex].data} alt={allItems[viewerIndex].name} className="w-full h-full object-contain" />
                </div>

                <button onClick={(e)=>{ e.stopPropagation(); showNext() }} aria-label="Next" className="viewer-nav right text-lg md:text-2xl p-3 rounded-full bg-black/40 border border-white/6 hover:scale-105">▶</button>
              </div>

              <div className="mt-4 text-xs text-slate-400/70">Click outside or press Esc to close. Use ← / → to navigate.</div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}
