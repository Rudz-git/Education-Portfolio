import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import { Sun, Moon, ImageIcon, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Nav(){
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const links = [
    {to: '/', label: 'Home'},
    {to: '/journal', label: 'Journal'},
    {to: '/gallery', label: 'Gallery'},
    {to: '/certificates', label: 'Certificates'},
    {to: '/reflection', label: 'Reflection'},
    {to: '/contact', label: 'Contact'},
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="w-full bg-transparent/10 backdrop-blur-sm border-b border-white/5 shadow-[inset_0_-14px_24px_-18px_rgba(0,0,0,0.8)]">
        <nav style={{height:'var(--nav-height)'}} className="w-full max-w-6xl mx-auto floating-nav glass px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-slate-800/30 to-transparent border border-slate-700/40">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0ea5a4] via-[#38bdf8] to-[#a78bfa] p-[2px] flex items-center justify-center glow-cyan">
              <div className="bg-slate-900 p-1 rounded-full text-xs font-semibold text-slate-100">R</div>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide text-slate-100">Rudino Zapanta</div>
              <div className="text-xs text-slate-400">Portfolio</div>
            </div>
          </div>
        </div>

        <div className={`hidden md:flex gap-2 items-center ${open ? '' : ''}`}>
          {links.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({isActive}) => `px-3 py-2 rounded-md text-sm nav-btn ${isActive ? 'bg-gradient-to-r from-[#0ea5a4]/20 to-[#38bdf8]/10 ring-1 ring-[#0ea5a4]/30 text-white' : 'text-slate-300/80 hover:text-white'}`}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex gap-3 items-center">
          <div className="hidden md:block w-[1px] bg-slate-700/30 h-6" />
        </div>

        <div className="md:hidden">
          <button onClick={()=>setOpen(v=>!v)} className="p-2 rounded-md border border-white/5 bg-slate-800/40">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      </div>
      {open && (
        <div className="md:hidden mt-2 w-full max-w-6xl mx-auto px-4">
          <div className="bg-slate-900/50 border border-white/5 rounded-lg p-3 glass">
            <div className="flex flex-col gap-2">
              {links.map(l => (
                <NavLink key={l.to} to={l.to} onClick={()=>setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md text-sm nav-btn ${isActive ? 'bg-gradient-to-r from-[#0ea5a4]/20 to-[#38bdf8]/10 ring-1 ring-[#0ea5a4]/30 text-white' : 'text-slate-300/80 hover:text-white'}`}>
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
