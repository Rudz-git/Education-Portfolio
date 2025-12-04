import React from 'react'
import { Github, Mail, Facebook, Instagram } from 'lucide-react'
import Card from '../components/Card'

export default function Contact(){
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-100">Contact / About Me</h1>
        <p className="text-sm text-slate-400 mt-1">Connect with Rudino and learn more about the projects and tour journey.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0ea5a4] via-[#38bdf8] to-[#a78bfa] p-1 flex items-center justify-center">
              <div className="bg-slate-900 w-full h-full rounded-sm flex items-center justify-center text-lg font-semibold text-slate-100">R</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">Name</div>
              <div className="text-lg font-semibold text-slate-100">Rudino R. Zapanta Jr. — BSIT-3B</div>

              <div className="mt-3 text-sm text-slate-300">Documenting my growth through learning, travel, and tech. Reach out anytime through my social platforms to follow the next steps of my journey..</div>

              <div className="mt-4 flex items-center gap-3">
                <a href="https://github.com/Rudz-git" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md border border-white/6 text-slate-200 inline-flex items-center gap-2"><Github size={16}/> GitHub</a>
              </div>

            </div>
          </div>
        </Card>

        <Card>
          <div>
            <h3 className="text-sm text-slate-400 mb-6">Follow Me</h3>
            <div className="flex flex-col gap-4">
              <a 
                href="https://www.facebook.com/rudz.zapanta" 
                target="_blank" 
                rel="noreferrer"
                className="social-btn social-fb"
                aria-label="Visit Facebook profile"
              >
                <Facebook size={24} />
                <span>Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/yoo_din0/" 
                target="_blank" 
                rel="noreferrer"
                className="social-btn social-ig"
                aria-label="Visit Instagram profile"
              >
                <Instagram size={24} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
