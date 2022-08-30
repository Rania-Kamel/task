import React from 'react'
import Content from '../content/Content'
import Button from '../button/Button'
import './solutions.css' 
import solutionImage from '../../assets/solutionImage.png'
import Scroll from './Scroll'

function Solutions() {
  return (
    <div className='solutions'>
        <div className='contentAndButton'>
        <Content
          title="SOLUTIONS"
          header="The 1-space all view experience technology"
          description="Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some cases refreshments and parcel acceptance services."
        />
        <Button name="View Availability" />
        </div>
        <div className='scroll'>
            <Scroll src={solutionImage}/>
            <Scroll src={solutionImage}/>
            <Scroll src={solutionImage}/>
        </div>
    </div>
  )
}

export default Solutions