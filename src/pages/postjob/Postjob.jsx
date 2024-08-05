import React, { useState } from 'react';
import './postjob.css';
import { BsPersonArmsUp } from "react-icons/bs";
import { FaTheaterMasks } from "react-icons/fa";
import { IoMicOutline } from "react-icons/io5";
import { TfiInstagram } from "react-icons/tfi";
import { PiDress } from "react-icons/pi";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Postjob = () => {
    const items = [
        <div className='card'><BsPersonArmsUp className='cardlogo' /><p className='titlepf'>Performer</p><div className='descpf'>Find dynamic talent for stage</div></div>,
        <div className='card'><IoMicOutline className='cardlogo' /><p className='titlepf'>Voiceover Artists</p><div className='descpf'>Discover the stars for your screen</div></div>,
        <div className='card'><TfiInstagram className='cardlogo' /><p className='titlepf'>Influencers & Content Creators</p><div className='descpf'>Find the face of your campaign</div></div>,
        <div className='card'><PiDress className='cardlogo' /><p className='titlepf'>Model</p><div className='descpf'>Find the ideal voice</div></div>,
        <div className='card'><FaTheaterMasks className='cardlogo' /><p className='titlepf'>Actor</p><div className='descpf'>Connect with impactful voices and creative minds.</div></div>,
        <div className='card'><TfiInstagram className='cardlogo' /><p className='titlepf'>Influencers & Content Creators</p><div className='descpf'>Find the face of your campaign</div></div>,
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = items.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    const visibleItems = () => {
        const offset = 2;
        const startIndex = (currentIndex - offset + totalItems) % totalItems;

        let itemsToShow = [];
        for (let i = 0; i < 5; i++) {
            const index = (startIndex + i) % totalItems;
            itemsToShow.push(
                <div
                    key={index}
                    className={`item ${i === 2 ? 'center' : i === 1 || i === 3 ? 'side' : 'hidden'
                        }`}
                >
                    {items[index]}
                </div>
            );
        }

        return itemsToShow;
    };

    return (
        <div className='mkp'>
            <div className='mkptop'>
                <h1>Post a Job and Discover Exceptional Talent!</h1>
                <p>Seeking the perfect fit for your next project? Post your job here to access a diverse network of talented actors, models, voice-over artists, and creative professionals. Our platform streamlines the hiring process, ensuring you find the ideal match to bring your vision to life. Start your search today!</p>
                <div>What type of talent are you looking for?</div>
            </div>
            <div className="carousel">
                <button className="arrow left" onClick={prevSlide}>
                    <IoChevronBack />
                </button>
                <div className="carousel-items">
                    {visibleItems()}
                </div>
                <button className="arrow right" onClick={nextSlide}>
                    <IoChevronForward />
                </button>
            </div>
            <div className='mkpbtm'>
                <div>Looking for something else?</div>
                <button>Other</button>
            </div>
            <div className='nextbtn'>
                <button><Link to="/profiledetail3" style={{ textDecoration: "none", color: "white" }}>Next</Link></button>
            </div>
        </div>
    );
};

export default Postjob;