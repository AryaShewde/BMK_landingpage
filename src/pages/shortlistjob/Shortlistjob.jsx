import React from 'react'
import "./shortlistjob.css"
import { IoShareSocial } from 'react-icons/io5'
import Togglesavepost from '../../components/togglesave/Togglesavepost'
import { Link } from 'react-router-dom'

const Shortlistjob = ({savedPosts, toggleSavePost}) => {
    if (savedPosts.length === 0) {
        return <h1 style={{margin: "100px auto 100px auto"}}>Not found</h1>;
    }
    return (
        <div>
            <div className='posts' style={{margin: "100px auto 100px auto", width: "96%"}}>
                <h1>Shortlisted</h1>
                {savedPosts.map((post) => (
                    <div className='postsig' key={post.id}>
                        <div className='toppost'>
                            <h1>{post.title}</h1>
                            <div>
                                <div><IoShareSocial style={{ fontSize: "29px" }} /> <Togglesavepost
                                    post={post}
                                    isSaved={savedPosts.some((savedPost) => savedPost.id === post.id)}
                                    toggleSavePost={toggleSavePost}
                                /></div>
                            </div>
                        </div>
                        <div className='subdes'>
                            <p>{post.loc}</p>
                            <div>{post.desc}</div>
                        </div>
                        <div className='lastpost'>
                            <div><span style={{ color: "#BB362A" }}>Apply By</span>- 1st Jan 20xx</div>
                            <Link to="/jobdesc" style={{ textDecoration: "none", color: "white" }}><button className='applbtn'>Apply</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shortlistjob
