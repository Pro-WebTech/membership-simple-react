import React, { Component } from "react";
import "./Home.css";
import logo from './bj_image.jpg'; // Tell Webpack this JS file uses this image

//console.log(logo); 

export default class Home extends Component {


  render() {
       

    return (
      
      <div className="Home">
        <img src={logo} alt="Logo" align="middle" />
        
        <div className="lander">
       
          <h1>New Membership System</h1><br/>
          <p>Member Enquiry System</p>
        </div>
      </div>
    );
  }
  
}