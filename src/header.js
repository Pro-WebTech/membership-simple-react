import React , { Component }from 'react'
import logo from './logo.png';

class Header extends Component {
    render() {
      return (
        <div id= "headingnew" >
        <img src={logo} style={{width:80, marginTop: 1}} />
        <h2 > Welcome to BJ's Wholesale Club </h2> 
        </div>);
    }
  }

  export default Header ;