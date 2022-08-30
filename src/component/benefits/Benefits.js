import React from 'react'
import Content from '../content/Content'
import AllBenefit from './AllBenefit'
import './benefits.css'

function Benefits() {
  return (
    <div className='benefits'>
        <Content
          title="why choose us?"
          header="The benefits that will make you comfort"
        />
        <AllBenefit/>
        
    </div>
  )
}

export default Benefits