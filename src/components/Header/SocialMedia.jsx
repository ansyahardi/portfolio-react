import React, { Component } from 'react';
import In from '../../assets/icons/in-warna.png';
import Fb from '../../assets/icons/fb-warna.png';
import Drbl from '../../assets/icons/dribbble-warna.png';
import Yt from '../../assets/icons/yt-warna.png';

export default class SocialMedia extends Component {
  render() {
    return (
      <ul className="social-media">
        <Image src={In} alt="LinkedIn" />
        <Image src={Fb} alt="Facebook" />
        <Image src={Drbl} alt="Dribbble" />
        <Image src={Yt} alt="Youtube" />
      </ul>
    )
  }
}

function Image({src, alt}){
  return(
    <li><img src={src} alt={alt} /></li>
  );
}