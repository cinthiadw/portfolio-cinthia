import React from "react";
import "./Slider.css";

const slidesInfo = [
    {
        src:"https://pixabay.com/get/g2c1fbcc96ee218f874fce115c3561ccd98ba50fa2e3c4c5220de2276579caf7d73d3feaad654c75c2e4a9553aa730153_640.jpg",
        alt:"Project 1",
        desc:"Project 1"
    },
    {
        src:"https://pixabay.com/get/gdd3e2482b125c747c8711b9c9e1efd996a2ee304ea701bd02170ed859e77c369af921633bb9a768a509d7b11b4c9b976_640.jpg",
        alt:"Project 2",
        desc:"Project 2"
    },
    {
        src:"https://pixabay.com/get/g6d4a061dac3097a5cb2cd59bb7c050fdfc34219fa5af77d2dc82e6131affde0781db999c9c472ed6dc0bab01b14590c8_640.jpg",
        alt:"Project 3",
        desc:"Project 3"
    },
];

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-desc">
         <span>{slide.desc}</span>
        </div>
    </div>
));

export default slides;