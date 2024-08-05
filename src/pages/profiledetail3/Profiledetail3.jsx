import React from 'react'
import "./profiledetail3.css"

const Profiledetail3 = () => {
    return (
        <div className='pfdetail'>
            <div className='pfdet'>
                <h1 className='title'>Type of Projects</h1>
                <div className='projecttags'>
                    <div className='pjtag'>Theater</div>
                    <div className='pjtag'>Film</div>
                    <div className='pjtag'>TV shows & Web series</div>
                    <div className='pjtag'>Commercials</div>
                    <div className='pjtag'>Live Events</div>
                    <div className='pjtag'>Music Videos</div>
                    <div className='pjtag'>Live Events</div>
                    <div className='pjtag'>Video Games</div>
                    <div className='pjtag'>Podcasts</div>
                    <div className='pjtag'>Fashion Shows</div>
                    <div className='pjtag'>Audiobooks</div>
                    <div className='pjtag'>Print Ads & Catalogs</div>
                    <div className='pjtag'>Brand Endorsements</div>
                    <div className='pjtag'>Social Media Campaigns</div>
                    <div className='pjtag'>Other</div>
                </div>
                <h1 className='title'>Type of organization</h1>
                <div className='projecttags'>
                    <div className='pjtag'>Theater</div>
                    <div className='pjtag'>Brand</div>
                    <div className='pjtag'>Production House</div>
                    <div className='pjtag'>Creative/Marketing Agency</div>
                    <div className='pjtag'>Studio/Network</div>
                    <div className='pjtag'>Casting Office</div>
                    <div className='pjtag'>Personal Project</div>
                    <div className='pjtag'>Other</div>
                </div>
                <h1 className='title'>Other Details</h1>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>Company Name</p>
                        <input type="text" className='textinp' placeholder='Company Name' />
                    </div>
                    <div>
                        <p className='inptitles'>Recruiter</p>
                        <input type="text" className='textinp' placeholder='Recruiter' />
                    </div>
                </div>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>Company Website</p>
                        <input type="text" className='textinp' placeholder='Company Website' />
                    </div>
                </div>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>Job Title</p>
                        <input type="text" className='textinp' placeholder='Job Title' />
                    </div>
                    <div>
                        <p className='inptitles'>Location</p>
                        <input type="text" className='textinp' placeholder='City' />
                    </div>
                </div>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>About the project</p>
                        <textarea type="text" className='textinp' placeholder='About the project' />
                    </div>
                </div>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>Job Role</p>
                        <textarea type="text" className='textinp' placeholder='Job Role' />
                    </div>
                </div>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>Start By</p>
                        <input type="text" className='textinp' placeholder='Start By' />
                    </div>
                    <div>
                        <p className='inptitles'>Duration</p>
                        <input type="text" className='textinp' placeholder='Duration' />
                    </div>
                    <div>
                        <p className='inptitles'>Apply By</p>
                        <input type="text" className='textinp' placeholder='Apply By' />
                    </div>
                </div>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>Skills Required</p>
                        <input type="text" className='textinp' placeholder='Type skills' />
                    </div>
                </div>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>Other Facilities</p>
                        <textarea type="text" className='textinp' placeholder='Other Facilities' />
                    </div>
                </div>
                <div className='inputset1'>
                    <div>
                        <div>
                            <p className='inptitles'>Age(in Years)</p>
                            <input type="number" className='textinp' placeholder='Age' />
                        </div>
                        <div>
                            <p className='inptitles'>Height</p>
                            <input type="number" className='textinp' placeholder='Height' />
                        </div>
                        <div>
                            <p className='inptitles'>Hair color</p>
                            <input type="number" className='textinp' placeholder='Hair color' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='inptitles'>Gender</p>
                            <input type="number" className='textinp' placeholder='Gender' />
                        </div>
                        <div>
                            <p className='inptitles'>Weight</p>
                            <input type="number" className='textinp' placeholder='Weight' />
                        </div>
                        <div>
                            <p className='inptitles'>Eye color</p>
                            <input type="text" className='textinp' placeholder='Eye color' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='inptitles'>Ethnicity</p>
                            <input type="number" className='textinp' placeholder='Ethnicity' />
                        </div>
                        <div>
                            <p className='inptitles'>Body Type</p>
                            <input type="text" className='textinp' placeholder='Body Type' />
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>Language Required</p>
                        <input type="text" className='textinp' placeholder='Type Language' />
                    </div>
                </div>
                <button className='nextbtnsmtss'>Post Job</button>
            </div>
        </div>
    )
}

export default Profiledetail3
