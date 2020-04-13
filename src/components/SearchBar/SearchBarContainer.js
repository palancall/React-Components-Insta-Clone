// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          className="fab fa-instagram"
        />
      </div>
      <form className="search-form">
        <input type="text" placeholder="Search" />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <img
            src="https://cdn3.iconfinder.com/data/icons/instagram-18/512/186_Instagram_Compass_Navigation-512.png"
            className="far fa-compass"
          />
        </div>
        <div className="social">
          <img
            src="https://www.kindpng.com/picc/m/105-1058680_two-hearts-clipart-black-and-white-heart-emoji.png"
            className="far fa-heart"
          />
        </div>
        <div className="social">
          <img
            src="https://instagram.fpos1-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fpos1-2.fna.fbcdn.net&_nc_ohc=_0JSWM4P2w4AX91PuEb&oh=144873f03baadf39f18e159d35c73ccb&oe=5EB8B50F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
            className="far fa-user-circle"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
