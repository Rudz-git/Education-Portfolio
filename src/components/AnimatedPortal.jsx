import React from 'react'

export default function AnimatedPortal({ size = 220 }){
  const s = size
  const center = s/2
  const rectR = 28
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="portal-svg" role="img" aria-label="Animated portal">
        <defs>
          <linearGradient id="portalGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#00ffe6" />
            <stop offset="0.6" stopColor="#06b6d4" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>

          {/* halo gradient + blur for volumetric glow */}
          <radialGradient id="haloGrad" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.28" />
            <stop offset="45%" stopColor="#8b5cf6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <filter id="haloBlur" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="22" result="hb" />
            <feMerge>
              <feMergeNode in="hb" />
              <feMergeNode in="hb" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="22" stdDeviation="32" floodColor="#0ea5a4" floodOpacity="0.07" />
          </filter>

          {/* turbulence-based glitch/static filter */}
          <filter id="turbulenceFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" stitchTiles="noStitch" result="turb">
              <animate attributeName="baseFrequency" values="0.02;0.08;0.02" dur="3.6s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="turb" scale="10" xChannelSelector="R" yChannelSelector="G" />
            <feColorMatrix type="saturate" values="1.2"/>
          </filter>

        </defs>

        {/* volumetric pulsing halo behind the portal */}
        <g className="portal-halo-group" filter="url(#haloBlur)">
          <circle className="portal-halo" cx={center} cy={center - (s*0.04)} r={s*0.48} fill="url(#haloGrad)" opacity="0.22" />
        </g>

        {/* outer rounded frame with stronger glow */}
        <g filter="url(#softShadow)">
          <rect x="10" y="10" width={s-20} height={s-20} rx={rectR} stroke="url(#portalGrad)" strokeWidth="1.8" fill="rgba(2,6,23,0.36)" />
        </g>

        {/* decorative rotating ring to make rotation more visible */}
        <g className="portal-ring" transform={`translate(${center},${center})`}>
          <circle r={s*0.36} stroke="url(#portalGrad)" strokeWidth="2" fill="transparent" opacity="0.08" />
          <circle r={s*0.36} stroke="url(#portalGrad)" strokeWidth="1.2" fill="transparent" opacity="0.06" filter="url(#glow)" />
        </g>

        {/* inner portal group that slowly rotates */}
        <g className="portal-rotate" transform={`translate(${center},${center})`}>
          {/* a softly glowing ring */}
          <g filter="url(#glow)">
            <circle cx="0" cy="0" r={s*0.28} stroke="url(#portalGrad)" strokeWidth="2.6" fill="transparent" opacity="0.22" />
          </g>

          {/* orbiting undulating lines — apply turbulence filter to lines for intermittent glitch */}
          <g className="portal-lines" transform="translate(0,0)" filter="url(#turbulenceFilter)" opacity="0.98">
            <path className="portal-line line-a" d={`M -${s*0.18} 0 C -${s*0.1} -${s*0.15}, ${s*0.1} -${s*0.15}, ${s*0.18} 0`} stroke="url(#portalGrad)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path className="portal-line line-b" d={`M -${s*0.12} 0 C -${s*0.05} ${s*0.12}, ${s*0.05} ${s*0.12}, ${s*0.12} 0`} stroke="url(#portalGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.95" />
            <path className="portal-line line-c" d={`M -${s*0.22} 0 C -${s*0.14} ${s*0.18}, ${s*0.14} ${s*0.18}, ${s*0.22} 0`} stroke="url(#portalGrad)" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.82" />
          </g>
          {/* small accent arcs for motion visibility */}
          <g className="portal-accents" transform={`translate(${center},${center})`}>
            <path d={`M -${s*0.26} ${s*0.12} A ${s*0.36} ${s*0.36} 0 0 1 -${s*0.02} -${s*0.38}`} stroke="url(#portalGrad)" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.65" />
            <path d={`M ${s*0.28} -${s*0.06} A ${s*0.34} ${s*0.34} 0 0 0 ${s*0.06} ${s*0.4}`} stroke="url(#portalGrad)" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
          </g>
        </g>

      </svg>
    </div>
  )
}
