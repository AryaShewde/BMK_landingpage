import React from 'react';
import { FaRegBookmark } from 'react-icons/fa6'
import { FaBookmark } from "react-icons/fa";
import "./togglesave.css"

const Togglesave = ({ user, isSaved, toggleSaveUser }) => {
  return (
    <button className='togglesavebtn' onClick={() => toggleSaveUser(user)}>
      {isSaved? <FaBookmark style={{fontSize: "29px"}}/>: <FaRegBookmark style={{fontSize: "29px"}}/>}
    </button>
  );
};

export default Togglesave;