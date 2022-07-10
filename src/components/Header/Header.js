import React from "react";
import logo from "../../assets/logo/brainflix-logo.svg";
import avatar from "../../assets/images/mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import "./Header.scss";
import upload from "../../assets/icons/upload.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="nav-bar nav-bar--wrapper">
      <NavLink to="/">
        <img className="nav-bar__logo" src={logo} alt="BrainFlix logo" />
      </NavLink>
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
        <NavLink
          to="/upload"
          className="nav-bar__button nav-bar__button--wrapper"
        >
          <img className="nav-bar__upload" src={upload} alt="Upload Icon" />
          <input
            type="button"
            id="upload"
            className="nav-bar__upload-input"
            name="upload"
            value="upload"
          />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
