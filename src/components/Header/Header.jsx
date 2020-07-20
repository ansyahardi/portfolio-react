import React, { Component } from 'react';
import Profile from '../../assets/images/foto.jpg';
import SocialMedia from './SocialMedia';

export default class Header extends Component {
  render() {
    return (
      <header id="home">
        <ul className="navbar">
          <Navbar href="#home" text="Home" />
          <Navbar href="#skill" text="Skill" />
          <Navbar href="#projects" text="Projects" />
          <Navbar href="#blogs" text="Blogs" />
          <Navbar href="#contact" text="Contact" />
        </ul>
        <img className="profile" alt="Profile" src={Profile} />
        <SocialMedia />
        <p>I’m a Software Engineer - FrontEnd Developer/Designer
      make a website be better</p>
      </header>
    )
  }
}

function Navbar({href, text}){
  return(
    <li><a href={href}>{text}</a></li>
  );
}