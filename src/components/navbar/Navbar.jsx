import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import Hamburger from 'hamburger-react'
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [isOpen, setOpen] = useState(false)
  let isPart = useState(useMediaQuery({ query: '(max-width: 865px)' }))
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className={isOpen ? 'nav' : 'none'}>
        <ul className="topList">
          <li className='topListItem'>
            <Link to="/" onClick={scrollToTop} style={{ textDecoration: "none", color: "white" }}>Home</Link>
          </li>
          <li className='topListItem'><Link onClick={scrollToTop} to="/jobpost" style={{ textDecoration: "none", color: "white" }}>Find Job</Link></li>
          <li className='topListItem'><Link onClick={scrollToTop} to="/actors" style={{ textDecoration: "none", color: "white" }}>Find Talent</Link></li>
          <li className='topListItem'><Link onClick={scrollToTop} to="/postjob" style={{ textDecoration: "none", color: "white" }}>Post a job</Link></li>
          <li className='topListItem'><Link onClick={scrollToTop} to="/shortlist" style={{ textDecoration: "none", color: "white" }}>Shortlist</Link></li>
          <li className='topListItem'><Link onClick={scrollToTop} to="/community" style={{ textDecoration: "none", color: "white" }}>Community</Link></li>
          <li className='topListItem'><Link onClick={scrollToTop} to="/mkprofile" style={{ textDecoration: "none", color: "white" }}>Profile</Link></li>
          <li className='topListItem'><Link onClick={scrollToTop} to="/account" style={{ textDecoration: "none", color: "white" }}>Account</Link></li>
        </ul>
        <button className='authbtn'><Link to="/login" style={{ textDecoration: "none", color: "white" }}>Login/Signup</Link></button>
      </div>
      {isPart?
      <div className='nav1'>
        <ul className="topList">
          <li className='topListItem'>
            <Link onClick={scrollToTop} to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link>
          </li>
          <li className='topListItem'><Link onClick={scrollToTop} to="/jobpost" style={{ textDecoration: "none", color: "white" }}>Find Job</Link></li>
          <li className='topListItem'><Link onClick={scrollToTop} to="/actors" style={{ textDecoration: "none", color: "white" }}>Find Talent</Link></li>
          <li className='topListItem'><Link onClick={scrollToTop} to="/postjob" style={{ textDecoration: "none", color: "white" }}>Post a job</Link></li>
          <li className='topListItem'><Link onClick={scrollToTop} to="/shortlist" style={{ textDecoration: "none", color: "white" }}>Shortlist</Link></li>
          <li className='topListItem'><Link onClick={scrollToTop} to="/community" style={{ textDecoration: "none", color: "white" }}>Community</Link></li>
          <li className='topListItem'><Link onClick={scrollToTop} to="/mkprofile" style={{ textDecoration: "none", color: "white" }}>Profile</Link></li>
          <li className='topListItem'><Link onClick={scrollToTop} to="/account" style={{ textDecoration: "none", color: "white" }}>Account</Link></li>
        </ul>
        <button className='authbtn'><Link onClick={scrollToTop} to="/login" style={{ textDecoration: "none", color: "white" }}>Login/Signup</Link></button>
      </div> : ''
      }
      <div className='hamburger'>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div >
  )
}

export default Navbar
