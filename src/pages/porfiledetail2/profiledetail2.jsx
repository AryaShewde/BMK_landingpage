import React from 'react'
import "./profiledetail2.css"

const Profiledetail2 = () => {
  return (
    <div className='pfdetail'>
      <div className='pfdet'>
        <h1 className='title'>Profile Details</h1>
        <div className='inputset1'>
          <div>
            <p className='inptitles'>Bio</p>
            <input type="text" className='textinp' placeholder='Bio' />
          </div>
        </div>
        <div className='inputset1'>
          <div>
            <p className='inptitles'>About yourself</p>
            <textarea type="text" className='textinp' placeholder='About yourself' />
          </div>
        </div>
        <div className='inputset1'>
          <div>
            <p className='inptitles'>Skills</p>
            <input type="text" className='textinp' placeholder='Skills' />
          </div>
        </div>
        <div className='inputset1'>
          <div>
            <p className='inptitles'>Language required</p>
            <input type="text" className='textinp' placeholder='Language required' />
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
            <p className='inptitles'>Social Media Handles(URL)</p>
            <div className='inputsdob' style={{ flexDirection: "column" }}>
              <input type="text" className='textinp' placeholder='Social Media Handle 1' />
              <input type="text" className='textinp' placeholder='Social Media Handle 2' />
              <input type="text" className='textinp' placeholder='Social Media Handle 3' />
            </div>
          </div>
          <div></div>
        </div>
        <h1 className='title'>Past Experience</h1>
        <div className='inputset1'>
          <div>
            <p className='inptitles'>Name of the Project</p>
            <input type="text" className='textinp' placeholder='Name' />
          </div>
          <div>
            <p className='inptitles'>Year</p>
            <input type="text" className='textinp' placeholder='Year' />
          </div>
        </div>
        <div className='inputset1'>
          <div>
            <p className='inptitles'>Duration(In Months)</p>
            <input type="text" className='textinp' placeholder='Duration' />
          </div>
          <div>
            <p className='inptitles'>Role</p>
            <input type="text" className='textinp' placeholder='Role' />
          </div>
        </div>
        <div className='inputset1'>
          <div>
            <p className='inptitles'>About the project</p>
            <textarea type="text" className='textinp' placeholder='Brief Description of the project and your role in the project' />
          </div>
        </div>
        <div className='inputset1'>
          <div>
            <p className='inptitles'>Relevant Links (if any)</p>
            <input type="text" className='textinp' placeholder='Add link to showcases your work better' />
            <p style={{color: "white"}}>+Add Experience</p>
          </div>
        </div>
        <h1 className='title'>Upload Files</h1>
        <p style={{ color: "white" }}>To showcase your talent effectively, please upload your photos and videos. High-quality visuals help casting professionals see your potential and match you with the right opportunities.</p>
        <label className='fileupld' style={{ textAlign: "center" }}>
          <input type="file" style={{ display: "none" }} />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="uploadlogo">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
          </svg>
          <p style={{ color: "white", textAlign: "center" }}>Drag file to upload <br />or <br />drop files</p>
        </label>
        <button className='nextbtnsmts'>Submit</button>
      </div>
    </div>
  )
}

export default Profiledetail2
