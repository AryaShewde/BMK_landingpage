import React from 'react'
import "./profiledetail1.css"
import { Link } from 'react-router-dom'

const Profiledetail1 = () => {
    return (
        <div className='pfdetail'>
            <div className='pfdet'>
                <h1 className='title'>Profile Details</h1>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>First Name</p>
                        <input type="text" className='textinp' placeholder='First Name' />
                    </div>
                    <div>
                        <p className='inptitles'>Last Name</p>
                        <input type="text" className='textinp' placeholder='Last Name' />
                    </div>
                </div>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>Gender</p>
                        <input type="text" className='textinp' placeholder='Gender' />
                    </div>
                    <div>
                        <p className='inptitles'>Date of Birth</p>
                        <div className='inputsdob'>
                            <input type="number" className='textinp' placeholder='DD' />
                            <input type="number" className='textinp' placeholder='MM' />
                            <input type="number" className='textinp' placeholder='YYYY' />
                        </div>
                    </div>
                </div>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>Contact number</p>
                        <input type="number" className='textinp' placeholder='Contact number' />
                    </div>
                    <div>
                        <p className='inptitles'>Alternate Contact number</p>
                        <input type="number" className='textinp' placeholder='Alternate Contact number' />
                    </div>
                </div>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>Email ID</p>
                        <input type="email" className='textinp' placeholder='Email ID' />
                    </div>
                    <div></div>
                </div>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>Address</p>
                        <input type="text" className='textinp' placeholder='Address' />
                    </div>
                </div>
                <div className='inputset1'>
                    <div>
                        <p className='inptitles'>City</p>
                        <input type="text" className='textinp' placeholder='City' />
                    </div>
                    <div>
                        <p className='inptitles'>State</p>
                        <input type="text" className='textinp' placeholder='State' />
                    </div>
                </div>
                <h1 className='title'>Upload Files</h1>
                <p style={{ color: "white" }}>To ensure the security and authenticity of our community, please upload the required documents for verification. This step helps us prevent fraud and maintain a safe environment for all our members.</p>
                <label className='fileupld' style={{textAlign: "center"}}>
                    <input type="file" style={{ display: "none" }} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="uploadlogo">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                    <p style={{color: "white", textAlign: "center"}}>Drag file to upload <br />or <br />drop files</p>
                </label>
                <button className='nextbtnsmt'><Link to="/profiledetail2" style={{ textDecoration: "none", color: "white" }}>Next</Link></button>
            </div>
        </div>
    )
}

export default Profiledetail1
