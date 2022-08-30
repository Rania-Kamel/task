import React from 'react'
import './button.css'

function Button({name , className}) {
  return (
    <div>
        <button className={`button ${className}`}>{name}</button>
    </div>
  )
}

export default Button

