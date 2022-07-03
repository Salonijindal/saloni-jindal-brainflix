import React from "react";
import logo from "../../assets/logo/brainflix-logo.svg";
import avatar from "../../assets/images/mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="nav-bar">
      <a>
        <img className="nav-bar__logo" src={logo} alt="BrainFlix logo" />
      </a>
      <div className="nav-bar__list">
        <div className="nav-bar__panel nav-bar__panel--wrapper">
          <img className="nav-bar__search" src={searchIcon} alt="Search Icon" />
          <input
            type="search"
            id="gsearch"
            className="nav-bar__search-input"
            name="gsearch"
            placeholder="Search"
          />
        </div>
        <img
          className="nav-bar__avatar"
          src={avatar}
          alt="BrainFlix User Avatar"
        />
        <button className="nav-bar__btn">upload</button>
      </div>
    </header>
  );
};

export default Header;
