import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div className="container-fluid box">
      <div className="title">
        <h2>Welcome To</h2>
        <h3>Moviefinder </h3>
      </div>
      <div class="search-box">
        <input type="text" placeholder="" class="search-input" />
        <button>Seacrh</button>

      </div>

    </div>


  )
}

export default Header;