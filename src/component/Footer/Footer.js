import "./footer.css";
import React from 'react'
import facebook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'
import Dribbble from '../../assets/Dribbble.png'
import LinkedIn from '../../assets/LinkedIn.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="space">
        <p className="spaceTitle">1-Space</p>
        <p className="spaceDescription">
          Men cannot not live by exchanging articles, but producing them. They
          live by work not trade.
        </p>
      </div>
      <div children="company">
        <p className="companyTitle">Company</p>
        <p className="list">Global Localities</p>
        <p className="list">Missions</p>
        <p className="list">Careers</p>
        <p className="list">Investors</p>
        <p className="list">Newsroom</p>
      </div>
      <div children="partnership">
      <p className="partnershipTitle">Partnership</p>
      <p className="list">Tasks</p>
      <p className="list">Profile</p>
      <p className="list">Events</p>
      <p className="list">Services</p>
      </div>
      <div children="followUs">
      <p className="followUsTitle">Follow us</p>
      <div className="socialLinks">
        <img src={facebook} alt="image"/>
        <img src={Twitter} alt="image"/>
        <img src={Dribbble} alt="image"/>
        <img src={LinkedIn} alt="image"/>
      </div>
      </div>
    </footer>
  );
}
