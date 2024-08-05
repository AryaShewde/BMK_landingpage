import React from 'react'
import "./account.css"
import { Link } from 'react-router-dom'

const Completed = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className='account'>
            <div className='leftaccount'>
                <div><Link style={{ color: "black", textDecoration: "none" }} onClick={scrollToTop} to={`/account`}><div>Applied</div></Link></div>
                <div><Link style={{ color: "black", textDecoration: "none" }} onClick={scrollToTop} to={`/process`}><div>In Progress</div></Link></div>
                <div className='selectedleft'><Link style={{ color: "white", textDecoration: "none" }} onClick={scrollToTop} to={`/completed`}><div>Completed</div></Link></div>
                <div><Link style={{ color: "black", textDecoration: "none" }} onClick={scrollToTop} to={`/profile`}><div>Your Profile</div></Link></div>
            </div>
            <div className='rightaccount'>
                <h1 style={{ color: "#BB362A" }}>Analytics</h1>
                <div className='righttopacc'>
                    <div><span style={{ fontSize: "30px", color: "#BB362A" }}>00</span> <br />People Viewed <br /> Your Profile</div>
                    <div><span style={{ fontSize: "30px", color: "#BB362A" }}>00</span> <br />People Viewed <br /> Your Profile</div>
                    <div><span style={{ fontSize: "30px", color: "#BB362A" }}>00</span> <br />People Viewed <br /> Your Profile</div>
                </div>
                <h1 style={{ color: "#BB362A" }}>Job Completed</h1>
                <div className='jobapplyedfor'>
                    <div className='setappled'>
                        <div className='sigappled'>
                            <h1 style={{ color: "#BB362A" }}>TV Commercial</h1>
                            <div>Delhi</div>
                            <div>Looking for a dynamic child performer for a music video. Must be able to dance and act in sync with the music and storyline.</div>
                            <div>Applied On- 1st May 20xx <button>See job details</button></div>
                        </div>
                        <div className='sigappled'>
                            <h1 style={{ color: "#BB362A" }}>Model for Shoe Brand</h1>
                            <div>Delhi</div>
                            <div>Looking for a dynamic child performer for a music video. Must be able to dance and act in sync with the music and storyline.</div>
                            <div>Applied On- 1st May 20xx <button>See job details</button></div>
                        </div>
                        <div className='sigappled'>
                            <h1 style={{ color: "#BB362A" }}>Music Video Kid</h1>
                            <div>Delhi</div>
                            <div>Looking for a dynamic child performer for a music video. Must be able to dance and act in sync with the music and storyline.</div>
                            <div>Applied On- 1st May 20xx <button>See job details</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Completed

