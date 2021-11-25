import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import './Button.css'; 

class Form extends React.Component {
  
  
    render() {
      return (
        <div id ="myTbl">
          <h3 id="heading">Personal Information</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Member Number:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            First Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label><br/><br/>
          <h3 >Address</h3>
          <label>
            Street Address:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            City:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            State:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          
        </form><br/><br/>
        <input id= "submit" type="submit" value="Submit" />
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Form />,
    document.getElementById('root')
  );

  export default Form;