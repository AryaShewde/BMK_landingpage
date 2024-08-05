import React from 'react'
import "./shortlist.css"
import { Link } from 'react-router-dom'

const Shortlist = () => {
    return (
        <div className='shortlist'>
            <div>
                <Link to="/shortlistact" style={{ textDecoration: "none" }}>Shortlist Artist</Link>
                <Link to="/shortlistjob" style={{ textDecoration: "none" }}>Shortlist Jobs</Link>
            </div>
        </div>
    )
}

export default Shortlist
