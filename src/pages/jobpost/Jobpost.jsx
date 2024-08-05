import React from 'react'
import "./jobpost.css"
import { IoIosArrowDown } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Togglesavepost from '../../components/togglesave/Togglesavepost';

const Jobpost = ({ savedPosts, toggleSavePost }) => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    const posts = [
        { id: 1, title: 'TV Commercial', loc: "Delhi", desc: "Seeking a charismatic child actor for a TV commercial. Must deliver lines naturally and convey emotions convincingly on camera." },
        { id: 2, title: 'TV Commercial', loc: "Delhi", desc: "Seeking a charismatic child actor for a TV commercial. Must deliver lines naturally and convey emotions convincingly on camera." },
        { id: 3, title: 'Clothing Brand Model', loc: "Pune, Maharashtra",desc: "Searching for a stylish and photogenic child model for a clothing brand photoshoot. Must pose confidently and showcase various outfits." },
        { id: 4, title: 'Toy Advertisement', loc: "Chandigarh, Punjab",desc: "Seeking a cheerful and energetic child model for a toy commercial. Must be able to express excitement and play naturally on camera." },
        { id: 5, title: 'Music Video', loc: "Mumbai, Maharashtra",desc: "Looking for a dynamic child performer for a music video. Must be able to dance and act in sync with the music and storyline." },
        { id: 6, title: 'Juice Advertisement', loc: "Mumbai, Maharashtra",desc: "Looking for a vibrant, expressive child to star in a juice commercial. Must convey joy and refreshment while enjoying the drink on camera." },
        { id: 7, title: 'Animated Series Voiceover', loc: "Mumbai, Maharashtra",desc: "Seeking a talented child with a clear, expressive voice for an animated series. Must bring characters to life with enthusiasm and clarity." },
    ];
    return (
        <div className='jobpost'>
            <input className='searchinp' type="text" placeholder='Search' />
            <div className='jobtype'>
                <div className='subtype'>
                    <div>Job Type <IoIosArrowDown /></div>
                    <div>Age <IoIosArrowDown /></div>
                    <div>Gender <IoIosArrowDown /></div>
                    <div>Location <IoIosArrowDown /></div>
                    <div>Production Type <IoIosArrowDown /></div>
                    <div>Ethnicity <IoIosArrowDown /></div>
                    <div>Posted By <IoIosArrowDown /></div>
                    <div>Language <IoIosArrowDown /></div>
                    <div>Compensation <IoIosArrowDown /></div>
                </div>
                <button className='applbtn'>Apply</button>
            </div>
            <div className='sorttype'>
                <p>Sort By</p>
                <div className='seltype'>Newest</div>
                <div className='sorttypesig'>Oldest</div>
                <div className='sorttypesig'>Apply Date</div>
                <div className='sorttypesig'>Nearest to me</div>
            </div>
            <div className='posts'>
                {posts.map((post) => (
                    <div className='postsig' key={post.id}>
                        <div className='toppost'>
                            <h1>{post.title}</h1>
                            <div>
                            <div><IoShareSocial  style={{fontSize: "29px"}}/> <Togglesavepost
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
                            <Link onClick={scrollToTop} to="/jobdesc" style={{ textDecoration: "none", color: "white" }}><button className='applbtn'>Apply</button></Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='pageno'><span className='one'>1</span> 2 3 4 5 ..... 14 15</div>
        </div>
    )
}

export default Jobpost
