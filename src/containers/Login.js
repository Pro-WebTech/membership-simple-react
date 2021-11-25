import React, { Component } from "react";
import { Button, FormGroup, FormControl} from "react-bootstrap";
import "./Login.css";
import { Auth } from "aws-amplify";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    
    try {
      await Auth.signIn(this.state.email, this.state.password);
      this.props.userHasAuthenticated(true);
      this.props.history.push('/member');
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    return (
      <div class="mx-auto" > 
      <div className="Login" >  
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
          <label for="colFormLabelLg" class="col-lg-2 col-form-label">Email </label>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter email"
            />
           
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
          <label for="colFormLabelLg" class="col-lg-2 col-form-label text-danger ">Password</label>
            <FormControl
            
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              lass="form-control is-invalid"
              placeholder="Password"
            />
             <div class="col-sm-5">
             
      </div>
          </FormGroup>
          
          <Button 
            block
            disabled={!this.validateForm()}
            type="submit" 
          >
            <div  class="button"  >
           <b >Login</b> 
           </div>
          </Button>
          
        </form>
     
      </div>
      
      </div>
     
    );
  }
}