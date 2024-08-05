import React from 'react'
import './footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { RiYoutubeLine } from "react-icons/ri";
import footerbg from '../../img/footerbg.png'

const Footer = () => {
  const divStyle = {
    backgroundImage: `url(${footerbg})`,
    height: 'auto',
    width: 'auto',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className='footer' style={divStyle} >
      <div className='footertop'>
        <div className='subfootertop'>
          <p>Company</p>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Partners</li>
            <li>How we work</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='subfootertop'>
          <p>Artists and Recruiters </p>
          <ul>
            <li>Casting Calls</li>
            <li>Join our Community</li>
            <li>Agencies</li>
            <li>Popular Auditions</li>
            <li>Post a Job</li>
            <li>Find Talent</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className='subfootertop'>
          <p>Support</p>
          <ul>
            <li>Help</li>
            <li>Pricing</li>
            <li>FAQ’s</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className='footerbtm'>
        <p>Connect with us <div className='ftlogos'><FaInstagram/><FaXTwitter/><CiFacebook/><RiYoutubeLine/></div></p>
      </div>
    </div>
  )
}

export default Footer
