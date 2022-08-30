import React from 'react'
import './services.css'
import Slider from '../slider/Slider'
import Content from '../content/Content'
import Button from '../button/Button'
import video from '../../assets/video.png'

function Services() {
  return (
    <div className='services'>
        <Slider/>
        <div className='contentAndButton'>
        <Content
          title="SOLUTIONS"
          header="The 1-space all view experience technology"
          description="Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some cases refreshments and parcel acceptance services."
        />
        <div className='buttonAndVideo'>
        <Button name="View Availability" />
        <p className='videos'><img src={video} alt= "image"/>3D Tour of Space</p>
        </div>
        </div>
    </div>
  )
}

export default Services