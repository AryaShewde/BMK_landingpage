import React from 'react'
import "./community.css"
import com1 from "../../img/commun1.png"
import com2 from "../../img/commun2.png"
import com3 from "../../img/commun3.png"
import com4 from "../../img/commun4.png"
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineEventNote } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { FaCommentAlt } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";


const Community = () => {
    return (
        <div className='community'>
            <div className='compost'>
                <div className='toppostcom'>
                    <img className='postimg' src={com1} alt="" />
                    <input type="text" placeholder='Start a post' />
                </div>
                <div className='postaddons'>
                    <div className='addon'><BiSolidVideos /> Media</div>
                    <div className='addon'><MdOutlineEventNote /> Event</div>
                    <div className='addon'><IoNewspaperSharp /> Article</div>
                    <div className='addon'><IoPeopleSharp /> Job Post</div>
                </div>
            </div>
            <div className='maincomm'>
                <div className='leftcom'>
                    <h2 style={{ color: "#BB362A" }}>Conversations</h2>
                    <div className='leftmesscom'>
                        <div className='lmes'>
                            <div className='lmesstop'>
                                <div className='mestit'>Rahul</div>
                                <div>12:00 A.M.</div>
                            </div>
                            <p>Hey! How are You?</p>
                        </div>
                        <div className='lmes'>
                            <div className='lmesstop'>
                                <div className='mestit'>Rima</div>
                                <div>12:00 A.M.</div>
                            </div>
                            <p>Any Update?</p>
                        </div>
                        <div className='lmes'>
                            <div className='lmesstop'>
                                <div className='mestit'>Chandni</div>
                                <div>12:00 A.M.</div>
                            </div>
                            <p>Audition at 5?</p>
                        </div>
                        <div className='lmes'>
                            <div className='lmesstop'>
                                <div className='mestit'>Khyati</div>
                                <div>12:00 A.M.</div>
                            </div>
                            <p>Thankyou</p>
                        </div>
                        <div className='lmes'>
                            <div className='lmesstop'>
                                <div className='mestit'>Ridhabh</div>
                                <div>12:00 A.M.</div>
                            </div>
                            <p>I might know someone</p>
                        </div>
                    </div>
                </div>
                <div className='rightcom'>
                    <div className='subrightcom'>
                        <div className='topsubrightcom'>
                            <img src={com2} alt="" />
                            <div>
                                <h2>Rishabh</h2>
                                <p>mooi Productions</p>
                                <p>12 Jan 2024</p>
                            </div>
                        </div>
                        <div className='midpostcom'>
                            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro labore excepturi a cupiditate consequuntur veritatis corrupti consectetur dolor qui sed quae nihil possimus corporis, dolore ipsam aliquam, voluptas minus blanditiis? Excepturi, tempore repellat similique molestiae odit fugiat ea eos explicabo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo esse deleniti autem? Voluptates distinctio incidunt id, earum nisi laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt fuga laudantium a aspernatur quaerat sit maiores ipsam tenetur repudiandae numquam. Doloremque, est repudiandae sed ad praesentium nobis culpa error? Aliquam!</div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae adipisci nisi, animi repellat beatae temporibus! Eligendi in tempora ex quaerat repudiandae, suscipit nisi a? Quo id unde aspernatur voluptates. Magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum libero asperiores, necessitatibus nisi ab vel dignissimos corporis accusamus tenetur minima.</div>
                        </div>
                        <div className='lastpostcom'>
                            <p><FcLike/> Like by 37 peoples</p>
                            <hr />
                            <div className='lastcomm'>
                                <div><FcLike/> Like</div>
                                <div><FaCommentAlt/> Comment</div>
                                <div><IoIosShareAlt/> Share</div>
                                <div><CiBookmark/> Save</div>
                            </div>
                        </div>
                    </div>
                    <div className='subrightcom'>
                        <div className='topsubrightcom'>
                            <img src={com3} alt="" />
                            <div>
                                <h2>Rishabh</h2>
                                <p>mooi Productions</p>
                                <p>12 Jan 2024</p>
                            </div>
                        </div>
                        <div className='midpostcom'>
                            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro labore excepturi a cupiditate consequuntur veritatis corrupti consectetur dolor qui sed quae nihil possimus corporis, dolore ipsam aliquam, voluptas minus blanditiis? Excepturi, tempore repellat similique molestiae odit fugiat ea eos explicabo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo esse deleniti autem? Voluptates distinctio incidunt id, earum nisi laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt fuga laudantium a aspernatur quaerat sit maiores ipsam tenetur repudiandae numquam. Doloremque, est repudiandae sed ad praesentium nobis culpa error? Aliquam!</div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae adipisci nisi, animi repellat beatae temporibus! Eligendi in tempora ex quaerat repudiandae, suscipit nisi a? Quo id unde aspernatur voluptates. Magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum libero asperiores, necessitatibus nisi ab vel dignissimos corporis accusamus tenetur minima.</div>
                        </div>
                        <div className='lastpostcom'>
                            <p><FcLike/> Like by 37 peoples</p>
                            <hr />
                            <div className='lastcomm'>
                                <div><FcLike/> Like</div>
                                <div><FaCommentAlt/> Comment</div>
                                <div><IoIosShareAlt/> Share</div>
                                <div><CiBookmark/> Save</div>
                            </div>
                        </div>
                    </div>
                    <div className='subrightcom'>
                        <div className='topsubrightcom'>
                            <img src={com4} alt="" />
                            <div>
                                <h2>Rishabh</h2>
                                <p>mooi Productions</p>
                                <p>12 Jan 2024</p>
                            </div>
                        </div>
                        <div className='midpostcom'>
                            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro labore excepturi a cupiditate consequuntur veritatis corrupti consectetur dolor qui sed quae nihil possimus corporis, dolore ipsam aliquam, voluptas minus blanditiis? Excepturi, tempore repellat similique molestiae odit fugiat ea eos explicabo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo esse deleniti autem? Voluptates distinctio incidunt id, earum nisi laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt fuga laudantium a aspernatur quaerat sit maiores ipsam tenetur repudiandae numquam. Doloremque, est repudiandae sed ad praesentium nobis culpa error? Aliquam!</div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae adipisci nisi, animi repellat beatae temporibus! Eligendi in tempora ex quaerat repudiandae, suscipit nisi a? Quo id unde aspernatur voluptates. Magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum libero asperiores, necessitatibus nisi ab vel dignissimos corporis accusamus tenetur minima.</div>
                        </div>
                        <div className='lastpostcom'>
                            <p><FcLike/> Like by 37 peoples</p>
                            <hr />
                            <div className='lastcomm'>
                                <div><FcLike/> Like</div>
                                <div><FaCommentAlt/> Comment</div>
                                <div><IoIosShareAlt/> Share</div>
                                <div><CiBookmark/> Save</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community
