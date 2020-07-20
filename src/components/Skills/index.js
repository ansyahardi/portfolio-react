import React, { Component } from 'react';
import Css from '../../assets/icons/css.png';
import Html from '../../assets/icons/html-5.png';
import R from '../../assets/icons/logo512.png';

export default class Skills extends Component {
  render() {
    return (
      <div className="skill" id="skill">
        <h1>SKILL</h1>
        <ul className="icon-skill">
          <Skill src={Css} alt="css" />
          <Skill src={Html} alt="html" />
          <Skill src={R} alt="react" />
        </ul>
      </div>
    )
  }
}

function Skill({src, alt}){
  return <li><img src={src} alt={alt} /></li>
}