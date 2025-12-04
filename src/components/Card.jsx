import React from 'react'

export default function Card({children, className=''}){
  return (
    <div className={`p-4 md:p-6 card-neon glass ${className}`}>
      {children}
    </div>
  )
}
