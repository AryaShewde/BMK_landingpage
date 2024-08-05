import React from 'react'
import "./userdetail.css"
import actor1 from "../../img/actor1.png"
import actor2 from "../../img/actor2.png"
import actor3 from "../../img/actor3.png"
import actor4 from "../../img/actor4.png"
import actor5 from "../../img/actor5.png"
import actor6 from "../../img/actor6.png"
import { useParams } from 'react-router-dom'
import { IoAdd } from "react-icons/io5";

const users = [
    { id: 1, img: actor1, tag: 'Actor', name: 'Kabir', loc: "Mumbai, Maharashtra", otherdet: '9 Yrs   132Cm   28Kg  Male', },
    { id: 2, img: actor2, tag: 'Actor', name: 'Aditi', loc: "Mumbai, Maharashtra", otherdet: '7 Yrs   120Cm   26Kg  Female', },
    { id: 3, img: actor3, tag: 'Actor', name: 'Rishi', loc: "Delhi", otherdet: '4 Yrs   98Cm   18Kg  Male', },
    { id: 4, img: actor4, tag: 'Actor', name: 'Jaipur, Rajasthan', loc: "Mumbai, Maharashtra", otherdet: '8 Yrs   129Cm   32Kg  Female', },
    { id: 5, img: actor5, tag: 'Actor', name: 'Nikki', loc: "Bangalore", otherdet: '12 Yrs   152Cm   39Kg  Female', },
    { id: 6, img: actor6, tag: 'Actor', name: 'Tanya', loc: "Pune, Maharashtra", otherdet: '4 Yrs   104Cm   18Kg  Female', },
];
const Userdetail = () => {
    const { id } = useParams();
    const user = users.find((user) => user.id === parseInt(id));

    if (!user) {
        return <div>User not found</div>;
    }
    return (
        <div className='details'>
            <div className='leftdetail'>
                <img className='imgdet' src={user.img} alt="" />
                <h2 style={{ color: "#BB362A" }}>Contact Information</h2>
                <div className='leftsubdet'>
                    <p>Phone Number:</p>
                    <div>1234567890</div>
                </div>
                <div className='leftsubdet'>
                    <p>Email ID:</p>
                    <div>{user.name}@gmail.com</div>
                </div>
                <div className='leftsubdet'>
                    <p>Social Media Handle 1 <br />(Instagram):</p>
                    <div>{user.name}_0909</div>
                </div>
                <div className='leftsubdet'>
                    <p>Social Media Handle 2 <br />(YouTube):</p>
                    <div>{user.name}.0909</div>
                </div>
            </div>
            <div className='rightdetail'>
                <div className='rightsubdet'>
                    <div className='dettag'>{user.tag}</div>
                    <h1>{user.name}</h1>
                    <p>{user.loc}</p>
                    <p style={{ color: "#BB362A", fontWeight: "600" }}>{user.otherdet}</p>
                </div>
                <hr />
                <div className='rightsubdet'>
                    <h2 style={{ color: "#BB362A", fontWeight: "600", margin: "0" }}>Bio</h2>
                    <p>{user.name} is a charismatic 9-year-old {user.tag} and model with a natural talent for captivating audiences</p>
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
                        Hi, I'm {user.name}! I love acting, and bringing characters to life. Whether it's performing in front of a camera or walking the runway, I always give my best. In my free time, I enjoy dancing, playing sports, and spending time with my friends. I'm excited to take on new roles and challenges.
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
                        <img src={user.img} alt="" />
                        <img src={user.img} alt="" />
                        <img src={user.img} alt="" />
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
    )
}

export default Userdetail
