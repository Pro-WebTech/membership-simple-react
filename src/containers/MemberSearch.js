import React, {Component} from 'react';
import './MemberSearch.css';
//import Header from './header.js';
//import { ReactComponent as Logo } from './logo.svg';
//import ReactDOM from 'react-dom';
//import Members from './Components/members';
//import ReactDOM from 'react-dom';
//import logo from './logo.png';
//import 'bootstrap/dist/css/bootstrap.css';
//import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, FormGroup} from 'react-bootstrap'

export default class MemberSearch extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        error:null,
         memberid: '',
          members: [],
           
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
 
  }

  handleInputChange (event) {
    this.setState({memberid: event.target.value });
  
  }
  handleSubmit(event) {
    event.preventDefault();
    let memid = this.state.memberid;
    if (!Number(memid)) {
      alert("Membership id must be a number");
    }
    if ((Number(memid) && (memid.length !== 11))) {
      alert("Membership id must be 11 digits");
    }
    if (memid.length === 11) {
      alert('Member Id was submitted: ' + this.state.memberid);
      this.getInfo();  
      //console.log ('after the api call');
      //alert("API call successful");        
      //this.props.history.push("/Display");
      // Handle Member id not found scenario here based on API response
    }
  }
    

  getInfo = () => {
    let resStatus = 0
    fetch('https://api-dev1.bjs.com/api/v1/getMemberInfo', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
  },
     body:  JSON.stringify({
      "MWC0036Operation": {
          "q036_message_data": {
              "q036_req_msg_code": "Q036",
              "q036_request_source": "B",
              "q036_request_type": "C",
              "q036_request_data": {
                  "q036_member_number": this.state.memberid,
                  "q036_first_name": "",
                  "q036_last_name": ""
              }
          }
      }
  }),
})

        .then(response =>
           {resStatus = response.status
           return response.json()
        })
         .then((data) => this.setState({members: [data]})) 
         
        .then(response => {
          switch (resStatus) {
            case 200:
              console.log('success')
              break
            case 400:
              if (response.code === 'ValidationFailed') {
                // My custom error messages from the API.
                console.log(response.fieldMessages)
              } else {
                console.log('this is a client (probably invalid JSON) error, but also might be a server error (bad JSON parsing/validation)')
              }
              break
            case 500:
              console.log('server error, try again')
              break
            default:
              console.log('unhandled')
              break
          }
        })
        .catch(err => {
          console.error("HI")
        })
           
    }
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

  render() {
  
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    let members = this.state.members
    //console.log(members)
    /*if(members.length>0){
       console.log(members[0]["MWC0036OperationResponse"]["r036_message_data"]["r036_response_member_data"]);
       members=members[0]["MWC0036OperationResponse"]["r036_message_data"]["r036_response_member_data"];
    }*/
    return (
      
   <div id="topmost">
    <form onSubmit={this.handleSubmit}>
    <label>
         Membership Id 
          <input  type="text" size="30"
           placeholder="Enter Member Number"
           value={this.state.value} 
           onChange={this.handleInputChange}  
       /><br/><br/>
       <input id="submit" type="submit" value="Submit" align="center"/> 
     </label>
     </form>

   {Object.keys(members).map((member) =>(

    <div class="style"> 
      <ul class="list-group">
  <li class="list-group-item list-group-item-danger">First Name : {members[0]["MWC0036OperationResponse"]["r036_message_data"]["r036_response_member_data"].r036_m_first_name}</li>
  <li class="list-group-item list-group-item-danger">Last Name : {members[0]["MWC0036OperationResponse"]["r036_message_data"]["r036_response_member_data"].r036_m_last_name} </li>
  <li class="list-group-item list-group-item-danger">Street : {members[0]["MWC0036OperationResponse"]["r036_message_data"]["r036_response_member_data"].r036_m_address_street}</li>
  <li class="list-group-item list-group-item-danger">City : {members[0]["MWC0036OperationResponse"]["r036_message_data"]["r036_response_member_data"].r036_m_address_city}</li>
  <li class="list-group-item list-group-item-danger">State :{members[0]["MWC0036OperationResponse"]["r036_message_data"]["r036_response_member_data"].r036_m_address_state}</li>
  <li class="list-group-item list-group-item-danger">Enroll Date : {members[0]["MWC0036OperationResponse"]["r036_message_data"]["r036_response_member_data"].r036_m_enroll_date}</li>
  <li class="list-group-item list-group-item-danger">Expiry Date : {members[0]["MWC0036OperationResponse"]["r036_message_data"]["r036_response_member_data"].r036_m_expiry_date}</li>
  <li class="list-group-item list-group-item-danger">Reward Status: {members[0]["MWC0036OperationResponse"]["r036_message_data"]["r036_response_member_data"].r036_m_rewards_status}</li>
      </ul>
      <br/><br/>  
    </div> 
           
        )
       
        )}
             
      
  </div>
     
  )
}
}


