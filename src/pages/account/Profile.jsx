import React from 'react'
import "./account.css"
import { Link } from 'react-router-dom'
import actor1 from "../../img/actor1.png"
import { IoAdd } from 'react-icons/io5'


const Profile = () => {
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
                <div><Link style={{ color: "black", textDecoration: "none" }} onClick={scrollToTop} to={`/completed`}><div>Completed</div></Link></div>
                <div className='selectedleft'><Link style={{ color: "white", textDecoration: "none" }} onClick={scrollToTop} to={`/profile`}><div>Your Profile</div></Link></div>
            </div>
            <div className='rightaccount'>
                <div className='details'>
                    <div className='leftdetail'>
                        <img className='imgdet' src={actor1} alt="" />
                        <h2 style={{ color: "#BB362A" }}>Contact Information</h2>
                        <div className='leftsubdet'>
                            <p>Phone Number:</p>
                            <div>1234567890</div>
                        </div>
                        <div className='leftsubdet'>
                            <p>Email ID:</p>
                            <div>Kabir@gmail.com</div>
                        </div>
                        <div className='leftsubdet'>
                            <p>Social Media Handle 1 <br />(Instagram):</p>
                            <div>Kabir_0909</div>
                        </div>
                        <div className='leftsubdet'>
                            <p>Social Media Handle 2 <br />(YouTube):</p>
                            <div>Kabir.0909</div>
                        </div>
                    </div>
                    <div className='rightdetail'>
                        <div className='rightsubdet'>
                            <div className='dettag'>Actor</div>
                            <h1>Kabir</h1>
                            <p>Actor</p>
                            <p style={{ color: "#BB362A", fontWeight: "600" }}>9 Yrs   132Cm   28Kg  Male</p>
                        </div>
                        <hr />
                        <div className='rightsubdet'>
                            <h2 style={{ color: "#BB362A", fontWeight: "600", margin: "0" }}>Bio</h2>
                            <p>Kabri is a charismatic 9-year-old Actor and model with a natural talent for captivating audiences</p>
                        </div>
                        <hr />
                        <div className='rightsubdet'>
                            <h2 style={{ color: "#BB362A", fontWeight: "600", margin: "0" }}>Skills</h2>
                            <div className='skills'>
                                <div className='skill'>Memorization</div>
                                <div className='skill'>Expression</div>
                                <div className='skill'>Improvisation</div>
                                <div className='skill'>Stage presence</div>
                                <div className='skill'>Dancing</div>
                                <div className='skill'>Singing</div>
                                <div className='skill'>Posing</div>
                                <div className='skill'>Voice Modulation</div>
                                <div className='skill'>Coordination</div>
                            </div>
                        </div>
                        <hr />
                        <div className='rightsubdet'>
                            <h2 style={{ color: "#BB362A", fontWeight: "600", margin: "0" }}>About</h2>
                            <div>
                                Hi, I'm Kabri! I love acting, and bringing characters to life. Whether it's performing in front of a camera or walking the runway, I always give my best. In my free time, I enjoy dancing, playing sports, and spending time with my friends. I'm excited to take on new roles and challenges.
                            </div>
                        </div>
                        <hr />
                        <div className='rightsubdet'>
                            <h2 style={{ color: "#BB362A", fontWeight: "600", margin: "0" }}>Past Experiences</h2>
                            <ol style={{ display: "flex", gap: "6px", flexDirection: "column" }}>
                                <li className='listtit'>TV Commercial for Health Drink(2022)</li>
                                <div style={{ fontWeight: "500" }}>Lead Child Actor</div>
                                <p>Portrayed an energetic and enthusiastic child enjoying a refreshing health drink. Demonstrated a convincing and joyful performance, capturing the essence of the product's benefits.</p>
                                <li className='listtit'>Fashion Show for Mumbai Fashion(2022)</li>
                                <div style={{ fontWeight: "500" }}>Runway Model</div>
                                <p>Walked the runway showcasing the latest kids' fashion. Displayed confidence, style, and a playful attitude that resonated with the audience and photographers.</p>
                            </ol>
                        </div>
                        <hr />
                        <div className='rightsubdet'>
                            <h2 style={{ color: "#BB362A", fontWeight: "600", margin: "0" }}>Certifications</h2>
                            <ol style={{ display: "flex", gap: "6px", flexDirection: "column" }}>
                                <li className='listtit'>Acting Workshop Completion Certificate(2023)</li>
                                <div style={{ fontWeight: "500" }}>Mumbai Acting Academy</div>
                                <p>Successfully completed a 6-week intensive acting workshop focusing on improvisation, voice modulation, and stage presence. Learned from experienced industry professionals and participated in various practical exercises and performances.</p>
                            </ol>
                        </div>
                        <hr />
                        <div className='rightsubdet'>
                            <h2 style={{ color: "#BB362A", fontWeight: "600", margin: "0" }}>Photos/Videos</h2>
                            <div className='addimg'>
                                <img src={actor1} alt="" />
                                <img src={actor1} alt="" />
                                <img src={actor1} alt="" />
                                <label className='fileupld' style={{ textAlign: "center", padding: "0" }}>
                                    <input type="file" style={{ display: "none" }} />
                                    <div className='addphoto'><IoAdd /></div>
                                </label>
                            </div>
                        </div>
                        <div className='rightsubdet'>
                            <div className='btns'>
                                <button>Hire</button>
                                <button>Message</button>
                                <button>Shortlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile




