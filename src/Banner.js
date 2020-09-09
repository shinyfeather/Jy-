import React from 'react';
import './Banner.css';
import './Social.css';
import logo from './logo.png'

function Banner() {
    return (
        <div className="site-banner">
            <img className="center" src="https://img.icons8.com/fluent/48/000000/twitter.png"/>
            <img className="logo" src={logo} alt="..." />
            <a href="https://instagram.com/jymediamarketingapuc?igshid=si245jki6wbt"><img className="center2" src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a> 
        <h1 className="site-banner-title">JY </h1>
        <h2 className="site-banner-title2">MEDIA MARKETING</h2>
        <h1 className="site-banner-desc">A gestão social que você e sua empresa merecem!</h1>
            </div>
      
      
    );
  }
  export default Banner;