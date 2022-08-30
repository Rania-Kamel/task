import Header from './component/header/Header'
import Visions from './component/visions/Visions'
import Solutions from './component/solutions/Solutions'
import Benefits from './component/benefits/Benefits'
import Member from './component/member/Member'
import Footer from'./component/Footer/Footer'
import Gallery from './component/Gallery/Gallery'
import LatestUpdates from './component/latestUpdates/LatestUpdates'
import Services from './component/services/Services'
import React from 'react'
import HeroSection from './component/heroSection/HeroSection'
import './App.css'

function App() {
  return (
    <div >
     
     <div className='Appsections'>
      <div className='HeaderAndHero'>
     <Header/>
     <HeroSection/>
     </div>
     <Services/>
     <Visions />
     <Solutions/>
     <Benefits/>
     <Gallery/>
     <Member/>
    <LatestUpdates/> 
    </div>
     <Footer/>
    </div>
  );
}

export default App;
