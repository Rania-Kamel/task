import React from 'react'
import Content from '../content/Content'
import Button from '../button/Button'
import member from '../../assets/member.png'
import './member.css'

function Member() {
  return (
    <div className='member'>
         <div className='contentAndButton'>
        <Content
          title="BECOME A MEMBER"
          header="Ready to try different work environment now?"
          description="Coworking is an arrangement in which workers of different companies share an office space, allowing cost savings and convenience through the use of common infrastructures, such as equipment, utilities, and receptionist and custodial services, and in some cases refreshments and parcel acceptance services."
        />
        <Button name="View Availability" />
        </div>
        <img className="memberImage" src={member} alt="member"/>
    </div>
  )
}

export default Member