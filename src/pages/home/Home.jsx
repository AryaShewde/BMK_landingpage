import React from 'react'
import './home.css'
import d264 from '../../img/d264.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import img1 from '../../img/fjimg1.png'
import img2 from '../../img/fjimg2.png'
import img3 from '../../img/fjimg3.png'
import img4 from '../../img/fjimg4.png'
import tal1 from '../../img/tal1.png'
import tal2 from '../../img/tal2.png'
import tal3 from '../../img/tal3.png'
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

const Home = () => {
    return (
        <div className='home'>
            <div className='landingpg'>
                <div className='topsec'>
                    <div className='lefttopsec'>
                        <div className='lefttoptit'>Casting the Stars of Tomorrow</div>
                        <div className='lefttopdesc'>At Book My Kids, we discover and nurture young talent, connecting aspiring actors and models with opportunities to shine.</div>
                        <button className='lefttopbtn'>Join Now</button>
                    </div>
                    <img src={d264} alt="" />
                </div>
                <div className='lefttopsec'>
                    <div className='lefttoptit'>Join Bookmykids and start your journey to stardom</div>
                    <div className='lefttopdesc'>Book My Kids is your premier casting platform dedicated to discovering and nurturing young talent. We connect aspiring child actors, models, and performers with top-tier auditions and casting opportunities in the entertainment industry. Our expert team ensures a seamless process from talent discovery to stardom, providing the support and resources needed for your child to shine. Join Book My Kids today and watch your child's dreams come to life on the big stage.</div>
                </div>
                <div className='fjob'>
                    <div className='fjobt'>
                        <div className='fjobtit'>Featured job</div>
                        <button className='viewbtn'>View All <IoIosArrowRoundForward className='fjarrowbtn' /></button>
                    </div>
                    <div className='fjobeles'>
                        <div className='fjobele'>
                            <div className='lfjob'>
                                <img src={img1} alt="" />
                                <div className='jobdetails'>
                                    <div className='jobdt'>
                                        <div className='jobdtext'>Garba Dancers</div>
                                        <div className='tag'>Dancer</div>
                                    </div>
                                    <div className='jobod'>
                                        <div>
                                            <IoLocationOutline className='odlogo' />
                                            Mumbai
                                        </div>
                                        <div>
                                            <CiCalendar className='odlogo'/>
                                            6 Days Remaining
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='rfjob'>
                                <CiBookmark className='bookmark' />
                                <button className='fjobabtn'><div>Appley now</div><IoIosArrowRoundForward className='fjarrowbtn' /></button>
                            </div>
                        </div>
                        <div className='fjobele'>
                            <div className='lfjob'>
                                <img src={img2} alt="" />
                                <div className='jobdetails'>
                                    <div className='jobdt'>
                                        <div className='jobdtext'>Clothing Commercial</div>
                                        <div className='tag'>Acting</div>
                                    </div>
                                    <div className='jobod'>
                                        <div>
                                            <IoLocationOutline className='odlogo' />
                                            Delhi
                                        </div>
                                        <div>
                                            <CiCalendar className='odlogo'/>
                                            4 Days Remaining
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='rfjob'>
                                <CiBookmark className='bookmark' />
                                <button className='fjobabtn'><div>Appley now</div><IoIosArrowRoundForward className='fjarrowbtn' /></button>
                            </div>
                        </div>
                        <div className='fjobele'>
                            <div className='lfjob'>
                                <img src={img3} alt="" />
                                <div className='jobdetails'>
                                    <div className='jobdt'>
                                        <div className='jobdtext'>Model for Kids Bag Brand</div>
                                        <div className='tag'>Modelling</div>
                                    </div>
                                    <div className='jobod'>
                                        <div>
                                            <IoLocationOutline className='odlogo' />
                                            Pune
                                        </div>
                                        <div>
                                            <CiCalendar className='odlogo'/>
                                            6 Days Remaining
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='rfjob'>
                                <CiBookmark className='bookmark' />
                                <button className='fjobabtn'><div>Appley now</div><IoIosArrowRoundForward className='fjarrowbtn' /></button>
                            </div>
                        </div>
                        <div className='fjobele'>
                            <div className='lfjob'>
                                <img src={img4} alt="" />
                                <div className='jobdetails'>
                                    <div className='jobdt'>
                                        <div className='jobdtext'>TV Series</div>
                                        <div className='tag'>Acting</div>
                                    </div>
                                    <div className='jobod'>
                                        <div>
                                            <IoLocationOutline className='odlogo' />
                                            Mumbai
                                        </div>
                                        <div>
                                            <CiCalendar className='odlogo'/>
                                            4 Days Remaining
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='rfjob'>
                                <CiBookmark className='bookmark' />
                                <button className='fjobabtn'><div>Appley now</div><IoIosArrowRoundForward className='fjarrowbtn' /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='banner'>
                    <p>Connect, collaborate, and grow with fellow actors, models, and creatives. Share insights, spark discussions, and forge valuable connections in our network. Elevate your craft and expand your horizons with like-minded artists today!</p>
                    <button>Join our Community</button>
                </div>
                <div className='talentsec'>
                    <div className='taltit'>
                        <p>Need talent for your project? We've got you covered.</p>
                        <button className='viewbtn'>View All <IoIosArrowRoundForward className='fjarrowbtn' /></button>
                    </div>
                    <div className='tals'>
                        <img src={tal1} alt="" />
                        <img src={tal2} alt="" />
                        <img src={tal3} alt="" />
                    </div>
                </div>
                <div className='banner2'>
                    <p>Explore a world of talent for your project! From actors to models, voice-over artists, freelancers, and crew members, find your perfect fit to bring your project to life with flair and finesse.</p>
                    <button>Post a Job</button>
                </div>
            </div>
        </div>
    )
}

export default Home
