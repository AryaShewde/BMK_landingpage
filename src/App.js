import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Mkprofile from './pages/demo/Mkprofile';
import "./App.css"
import Profiledetail1 from './pages/porfiledetail1/Profiledetail1';
import Profiledetail2 from './pages/porfiledetail2/profiledetail2';
import Jobpost from './pages/jobpost/Jobpost';
import Jobdesc from './pages/jobdesc/Jobdesc';
import Actors from './pages/actors/Actors';
import Shortlistact from './pages/shortlistact/Shortlistact';
import Userdetail from './pages/userdetail/Userdetail';
import Postjob from './pages/postjob/Postjob';
import Profiledetail3 from './pages/profiledetail3/Profiledetail3';
import Community from './pages/community/Community';
import Shortlistjob from './pages/shortlistjob/Shortlistjob';
import Shortlist from './pages/shortlist/Shortlist';
import Account from './pages/account/Account';
import Process from './pages/account/Process';
import Completed from './pages/account/Completed';
import Profile from './pages/account/Profile';

function App() {
  const [savedUsers, setSavedUsers] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  const toggleSaveUser = (user) => {
    setSavedUsers((prevSavedUsers) =>
      prevSavedUsers.some((savedUser) => savedUser.id === user.id)
        ? prevSavedUsers.filter((savedUser) => savedUser.id !== user.id)
        : [...prevSavedUsers, user]
    );
  };
  const toggleSavePost = (post) => {
    setSavedPosts((prevSavedPosts) =>
      prevSavedPosts.some((savedPost) => savedPost.id === post.id)
        ? prevSavedPosts.filter((savedPost) => savedPost.id !== post.id)
        : [...prevSavedPosts, post]
    );
  };
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <Home />
          } />
        </Routes>
        <Routes>
          <Route exact path="/login" element={
            <Login />
          } />
        </Routes>
        <Routes>
          <Route exact path="/signup" element={
            <Signup />
          } />
        </Routes>
        <Routes>
          <Route exact path="/mkprofile" element={
              <Mkprofile />
          } />
        </Routes>
        <Routes>
          <Route exact path="/profiledetail1" element={
              <Profiledetail1 />
          } />
        </Routes>
        <Routes>
          <Route exact path="/profiledetail2" element={
              <Profiledetail2 />
          } />
        </Routes>
        <Routes>
          <Route exact path="/profiledetail3" element={
              <Profiledetail3 />
          } />
        </Routes>
        <Routes>
          <Route exact path="/jobpost" element={
              <Jobpost savedPosts={savedPosts} toggleSavePost={toggleSavePost} />
          } />
        </Routes>
        <Routes>
          <Route exact path="/jobdesc" element={
              <Jobdesc />
          } />
        </Routes>
        <Routes>
          <Route exact path="/actors" element={
              <Actors savedUsers={savedUsers} toggleSaveUser={toggleSaveUser} />
          } />
        </Routes>
        <Routes>
          <Route exact path="/shortlistact" element={
              <Shortlistact savedUsers={savedUsers} toggleSaveUser={toggleSaveUser}  />
          } />
        </Routes>
        <Routes>
          <Route exact path="/shortlistjob" element={
              <Shortlistjob savedPosts={savedPosts} toggleSavePost={toggleSavePost}  />
          } />
        </Routes>
        <Routes>
          <Route exact path="/userdetail/:id" element={
              <Userdetail />
          } />
        </Routes>
        <Routes>
          <Route exact path="/postjob" element={
              <Postjob />
          } />
        </Routes>
        <Routes>
          <Route exact path="/shortlist" element={
              <Shortlist />
          } />
        </Routes>
        <Routes>
          <Route exact path="/community" element={
              <Community />
          } />
        </Routes>
        <Routes>
          <Route exact path="/account" element={
              <Account />
          } />
        </Routes>
        <Routes>
          <Route exact path="/process" element={
              <Process />
          } />
        </Routes>
        <Routes>
          <Route exact path="/completed" element={
              <Completed />
          } />
        </Routes>
        <Routes>
          <Route exact path="/profile" element={
              <Profile />
          } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
