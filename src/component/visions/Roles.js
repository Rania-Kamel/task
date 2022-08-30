import React from 'react'
import Role from './Role'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import './roles.css'

function Roles() {
  return (
    <div className='roles'>
         <Role src={icon1} title="high quality co-living spaces" description="Coworking is an arrangement in which workers of different companies." />
         <Role src={icon2} title="Equipped for productivity" description="Coworking is an arrangement in which workers of different companies." />
         <Role src={icon3} title="Simple and inclusive" description="Coworking is an arrangement in which workers of different companies." />
    </div>
  )
}

export default Roles