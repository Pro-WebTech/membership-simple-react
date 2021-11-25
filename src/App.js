import React, { Component ,Fragment} from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link , withRouter } from "react-router-dom";
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import "./App.css";
import Routes from "./Routes";
import { Auth } from "aws-amplify";
import logo from './bjs-logo.jpg';


class App extends Component {

  constructor(props){
  super(props);
  this.state = {
    isAuthenticated: false,
    isAuthenticating: true
  };
}

async componentDidMount() {
  try {
    await Auth.currentSession();
    this.userHasAuthenticated(true);
  }
  catch(e) {
    if (e !== 'No current user') {
      alert(e);
    }
  }

  this.setState({ isAuthenticating: false });
}
userHasAuthenticated = authenticated => {
  this.setState({ isAuthenticated: authenticated });
} 

handleLogout = async event => {
  await Auth.signOut();
  this.userHasAuthenticated(false);
  this.props.history.push("/login");
} 


  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    
    return (
    
      !this.state.isAuthenticating &&
      <div className="App container">
        <Navbar  fluid collapseOnSelect>
        <a href="/" >
             <span class="glyphicon glyphicon-menu-hamburger pull-left "></span>
            </a>
          <Navbar.Header>
            <Navbar.Brand  >
            
              Welcome to BJ's Wholesale Club
           
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.state.isAuthenticated
                ? <NavItem class="navitem" onClick={this.handleLogout}>Logout</NavItem>
                : <Fragment>
                      <LinkContainer to="/login" >
                      <NavItem class="navitem" >Login</NavItem>
                    </LinkContainer>
                  </Fragment>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );

  }
}


export default withRouter(App);

