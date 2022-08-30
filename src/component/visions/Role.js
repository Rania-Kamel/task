import React from 'react'
import './role.css'

function Role({src,title,description}) {
  return (
    <section >
        <div className='imageAndTitle'>
        <img className='imageRole' src={src} alt="image"/>
        <div className='titleAndDescriptionRole'>
        <p className='titleRole'>{title}</p>
        <p className='descriptionRole'>{description}</p>
        </div>
        </div>
        
    </section>
  )
}

export default Role