import React from 'react'
import "./jobdesc.css"
import { IoShareSocial } from 'react-icons/io5'
import { FaRegBookmark } from 'react-icons/fa6'

const Jobdesc = () => {
    return (
        <div className='jobdesc'>
            <div className='maindesc'>
                <div className='submaindesc'>
                    <h1>Job Tittle</h1>
                    <p>Posted on- 10/06/24</p>
                </div>
                <hr />
                <div className='submaindesc'>
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <hr />
                <div className='submaindesc'>
                    <h1>Your Role</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p><span style={{ color: "#BB362A" }}>Skills Required</span>- Skill 1, Skill 2, Skill 3</p>
                </div>
                <hr />
                <div className='submaindesc'>
                    <h1>Company Details</h1>
                    <p><span style={{ color: "#BB362A" }}>Name of company</span>: Talent for Talet</p>
                    <p><span style={{ color: "#BB362A" }}>Recruiter/Owner</span>: Rahul Singh</p>
                    <p><span style={{ color: "#BB362A" }}>Member since 2022</span>: Verified user 08 Jobs Posted 03 Hired</p>
                </div>
                <hr />
                <div className='submaindesc'>
                    <p><span style={{ color: "#BB362A" }}>Location</span>: Mumbai, Maharashtra</p>
                    <p><span style={{ color: "#BB362A" }}>Start By</span>: 01/07/24</p>
                    <p><span style={{ color: "#BB362A" }}>Duration</span>: 6 months</p>
                    <p><span style={{ color: "#BB362A" }}>Compensation</span>: -</p>
                    <p><span style={{ color: "#BB362A" }}>Other Facilities</span>: -</p>
                    <p><span style={{ color: "#BB362A" }}>Website</span>: Talentfortalent.in</p>
                </div>
                <hr />
                <div className='lastbtns'>
                    <button>Apply Now</button>
                    <button>Shortlist</button>
                </div>
            </div>
            <div className='suggestions'>
                <div className='sugtit'>View similar jobs</div>
                <div className='mainsugg'>
                    <div className='sugsing'>
                        <div className='sugsigtop'>
                            <div style={{ color: "#BB362A" }}>Job Title</div>
                            <div className='sugsiglogo'>
                                <IoShareSocial />
                                <FaRegBookmark />
                            </div>
                        </div>
                        <div>Location</div>
                        <div>Job Description</div>
                        <p>Apply By</p>
                        <div style={{ color: "#BB362A" }}>View all details and apply</div>
                    </div>
                    <div className='sugsing'>
                        <div className='sugsigtop'>
                            <div style={{ color: "#BB362A" }}>Job Title</div>
                            <div className='sugsiglogo'>
                                <IoShareSocial />
                                <FaRegBookmark />
                            </div>
                        </div>
                        <div>Location</div>
                        <div>Job Description</div>
                        <p>Apply By</p>
                        <div style={{ color: "#BB362A" }}>View all details and apply</div>
                    </div>
                    <div className='sugsing'>
                        <div className='sugsigtop'>
                            <div style={{ color: "#BB362A" }}>Job Title</div>
                            <div className='sugsiglogo'>
                                <IoShareSocial />
                                <FaRegBookmark />
                            </div>
                        </div>
                        <div>Location</div>
                        <div>Job Description</div>
                        <p>Apply By</p>
                        <div style={{ color: "#BB362A" }}>View all details and apply</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobdesc
