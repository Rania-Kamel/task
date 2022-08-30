import React from 'react'
import './oneBenefit.css'

function OneBenefit({src , title ,description }) {
  return (
    <div>
        <img className='oneBenefit' src={src} alt="oneBenefit"/>
        <p className='benefitTitle'>{title}</p>
        <p className='benefitDescription'>{description}</p>

    </div>
  )
}

export default OneBenefit