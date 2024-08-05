import React from 'react';
import { FaRegBookmark } from 'react-icons/fa6'
import { FaBookmark } from "react-icons/fa";
import "./togglesave.css"

const Togglesavepost = ({ post, isSaved, toggleSavePost }) => {
  return (
    <button className='togglesavebtn' onClick={() => toggleSavePost(post)}>
      {isSaved? <FaBookmark style={{fontSize: "29px"}}/>: <FaRegBookmark style={{fontSize: "29px"}}/>}
    </button>
  );
};

export default Togglesavepost;