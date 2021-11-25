import React from 'react'
//import App from './App'

const Members = ({ members }) => {

  return (
    <div>
      <center><h1>Members List</h1></center>
      {(members) .map((member) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{members.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{members[member].email}</h6>
            
          </div>
        </div>
      ))}
    </div>
  )
};

export default Members