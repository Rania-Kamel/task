import React from 'react'
import './content.css'

function Content({title ,header ,  description}) {
  return (
    <div className='content'>
        <p className='title'>{title}</p>
        <p className='header'>{header}</p>
        <p className='description'>{description}</p>
    </div>
  )
}

export default Content