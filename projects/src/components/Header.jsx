import React from 'react'
import menu from '../assets/open_menu.svg';

export const Header = () => {
  return (
    <header>
    <span className="header">
      <h1>Jessica Kincaid</h1>
    </span>
    <button className="menu-btn">
        <img src={menu} alt="menu" />
    </button>

  <div className="navbar">
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
  </div>

    </header>
  )
}

export default Header