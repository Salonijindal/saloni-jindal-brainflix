import React from "react";
import "./HeroVideo.scss";

const HeroVideo = () => {
  return (
    <div className="hero-section">
      <video
        className="hero-section__video"
        poster="https://i.imgur.com/l2Xfgpl.jpg"
        controls
      ></video>
      <div className="hero-section__description">
        <h1>MX Rampage: 2021 Highlights</h1>
        <hr></hr>
        <div>
          <div className="hero-section__info">
            <h2>By Red Crow</h2>
            <p className="">1,001,023</p>
          </div>
          <div className="hero-section__info">
            <p>07/11/2021</p>
            <p>1,001,023</p>
          </div>
          <hr></hr>
          <p>
            On a gusty day in Southern Utah, a group of 25 daring mountain
            bikers blew the doors off what is possible on two wheels, unleashing
            some of the biggest moments the sport has ever seen. While mother
            nature only allowed for one full run before the conditions made it
            impossible to ride, that was all that was needed for event veteran
            Kyle Strait, who won the event for the second time -- eight years
            after his first Red Cow Rampage title
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
