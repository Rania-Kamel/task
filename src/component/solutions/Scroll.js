import React from 'react'
import './scroll.css'

function Scroll({src}) {
  return (
    <div>
        <img className='solutionImage' src={src} alt="solutionImage"/>
    </div>
  )
}

export default Scroll