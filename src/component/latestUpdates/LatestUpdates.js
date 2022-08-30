import React from 'react'
import './latestUpdates.css'
import Content from '../content/Content'
import NewsCards from "../newsCards/NewsCards";

function LatestUpdates() {
  return (
    <div className='latestUpdates'>
        <Content header="Have a look at our latest updates and news..."/>
        <NewsCards/>
        
    </div>
  )
}

export default LatestUpdates