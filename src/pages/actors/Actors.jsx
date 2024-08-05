import React from 'react'
import "./actors.css"
import { IoIosArrowDown } from 'react-icons/io'
import actor1 from "../../img/actor1.png"
import actor2 from "../../img/actor2.png"
import actor3 from "../../img/actor3.png"
import actor4 from "../../img/actor4.png"
import actor5 from "../../img/actor5.png"
import actor6 from "../../img/actor6.png"
import { IoShareSocial } from 'react-icons/io5'
import Togglesave from '../../components/togglesave/Togglesave'
import { Link } from 'react-router-dom'

const Actors = ({ savedUsers, toggleSaveUser }) => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    const users = [
        { id: 1, img: actor1, tag: 'Actor', name: 'Kabir', loc: "Mumbai, Maharashtra", otherdet: '9 Yrs   132Cm   28Kg  Male', },
        { id: 2, img: actor2, tag: 'Actor', name: 'Aditi', loc: "Mumbai, Maharashtra", otherdet: '7 Yrs   120Cm   26Kg  Female', },
        { id: 3, img: actor3, tag: 'Actor', name: 'Rishi', loc: "Delhi", otherdet: '4 Yrs   98Cm   18Kg  Male', },
        { id: 4, img: actor4, tag: 'Actor', name: 'Jaipur, Rajasthan', loc: "Mumbai, Maharashtra", otherdet: '8 Yrs   129Cm   32Kg  Female', },
        { id: 5, img: actor5, tag: 'Actor', name: 'Nikki', loc: "Bangalore", otherdet: '12 Yrs   152Cm   39Kg  Female', },
        { id: 6, img: actor6, tag: 'Actor', name: 'Tanya', loc: "Pune, Maharashtra", otherdet: '4 Yrs   104Cm   18Kg  Female', },
    ];
    return (
        <div className='actorspage'>
            <div className='jobtype'>
                <div className='subtype'>
                    <div>Job Type <IoIosArrowDown /></div>
                    <div>Age <IoIosArrowDown /></div>
                    <div>Gender <IoIosArrowDown /></div>
                    <div>Location <IoIosArrowDown /></div>
                    <div>Hair color <IoIosArrowDown /></div>
                    <div>Eye color <IoIosArrowDown /></div>
                    <div>Ethnicity <IoIosArrowDown /></div>
                    <div>Height <IoIosArrowDown /></div>
                    <div>Body Type <IoIosArrowDown /></div>
                    <div>Size Chart <IoIosArrowDown /></div>
                    <div>Language <IoIosArrowDown /></div>
                    <input type="text" placeholder='keyword' />
                </div>
                <button className='applbtn'>Apply</button>
            </div>
            <div className='actors'>
                {users.map((user) => (
                    <div className='actor' key={user.id}>
                        <img src={user.img} alt="" />
                        <div className='rightactor'>
                            <div className='actags'><div className='flex'><p>{user.tag}</p></div><div><IoShareSocial  style={{fontSize: "29px"}}/> <Togglesave
                                user={user}
                                isSaved={savedUsers.some((savedUser) => savedUser.id === user.id)}
                                toggleSaveUser={toggleSaveUser}
                            /></div></div>
                            <div className='nameact'>{user.name}</div>
                            <div>{user.loc}</div>
                            <p className='otdet'>{user.otherdet}</p>
                            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, aliquam. Dolorum quas quasi tempora tenetur dignissimos quam qui veniam ullam recusandae ea ducimus excepturi mollitia minima deserunt, obcaecati repudiandae provident.</div>
                            <Link onClick={scrollToTop} to={`/userdetail/${user.id}`}><div className='lastlnact'>View full profile</div></Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='pageno'><span className='one'>1</span> 2 3 4 5 ..... 14 15</div>
        </div>
    )
}

export default Actors
