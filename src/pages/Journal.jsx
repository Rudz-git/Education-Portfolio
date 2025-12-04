import React, { useState, useCallback } from 'react'
import Card from '../components/Card'

// Import real journal photos
import page1 from './Picture/page1.jpg'
import page2 from './Picture/page2.jpg'
import page3 from './Picture/page3.jpg'
import page4 from './Picture/page4.jpg'
import page5 from './Picture/page5.jpg'
import page6 from './Picture/page6.jpg'

const PHOTOS = [
  { id: 'j1', caption: 'Cover Page', src: page1 },
  { id: 'j2', caption: 'Tour Itinerary ', src: page2 },
  { id: 'j3', caption: 'Tour General House Rules', src: page3 },
  { id: 'j4', caption: 'WorldTech Information Solutions',  src: page4 },
  { id: 'j5', caption: 'Rivan IT Cebu', src: page5 },
  { id: 'j6', caption: 'Codechum', src: page6 },
]

export default function Journal(){
  const [viewerIndex, setViewerIndex] = useState(null)

  const openViewer = useCallback((i)=> setViewerIndex(i), [])
  const closeViewer = useCallback(()=> setViewerIndex(null), [])

  const showPrev = useCallback(()=> setViewerIndex(i => i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length), [])
  const showNext = useCallback(()=> setViewerIndex(i => i === null ? null : (i + 1) % PHOTOS.length), [])

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-100">Educational Tour — Journal</h1>
         
        </div>
      </div>

      <Card className="p-6 glass">
        <div className="journal-grid">
          {PHOTOS.map((p, idx) => (
            <div key={p.id} className="journal-tile" onClick={()=>openViewer(idx)} role="button" tabIndex={0}>
              <div className="tile-inner neon-frame">
                <div className="tile-media bg-black/20">
                  <img src={p.src} alt={p.caption} className="w-full h-full object-cover" />
                </div>
                <div className="tile-meta">
                  <div className="text-sm font-medium text-slate-100">{p.caption}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* viewer modal */}
      {viewerIndex !== null && (
        <div onClick={closeViewer} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6 py-12">
          <div onClick={(e)=>e.stopPropagation()} className="relative max-w-[1100px] w-full mx-auto">
            <button onClick={closeViewer} aria-label="Close viewer" className="absolute right-2 top-2 z-50 rounded-full p-2 bg-black/50 border border-white/6 text-slate-200">✕</button>
            <div className="relative rounded-3xl overflow-hidden neon-viewer bg-gradient-to-br from-[#021226]/70 to-[#071025]/70 border border-white/6 p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="text-xs text-slate-400/80 uppercase tracking-widest">{PHOTOS[viewerIndex].caption}</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6">
                <button onClick={(e)=>{ e.stopPropagation(); showPrev() }} aria-label="Previous" className="viewer-nav left text-lg md:text-2xl p-3 rounded-full bg-black/40 border border-white/6">◀</button>

                <div className="max-w-[1000px] w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-black/30 to-transparent flex items-center justify-center">
                  <img src={PHOTOS[viewerIndex].src} alt={PHOTOS[viewerIndex].caption} className="w-full h-full object-contain" />
                </div>

                <button onClick={(e)=>{ e.stopPropagation(); showNext() }} aria-label="Next" className="viewer-nav right text-lg md:text-2xl p-3 rounded-full bg-black/40 border border-white/6">▶</button>
              </div>

              <div className="mt-4 text-xs text-slate-400/70">Click outside or press Esc to close. Use ← / → to navigate.</div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
