import React from "react";

const HeroVideo = () => {
  return (
    <div className="hero-section">
      <video
        className=""
        poster="https://i.imgur.com/l2Xfgpl.jpg"
        controls
      ></video>
      <h1>Song name</h1>
      <div>
        <div>
          <h2>Singer name</h2>
          <p className="">1,001,023</p>
        </div>
        <div>
          <p>07/11/2021</p>
          <p>1,001,023</p>
        </div>
        <p>
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </p>
      </div>
    </div>
  );
};

export default HeroVideo;
