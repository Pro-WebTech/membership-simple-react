import React from 'react'

const ValidMembers = ({ members }) => {
  return (
    <div>
      <center><h1>Members</h1></center>
      
      {members .map((member) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{member.StatusMsg}</h5>
            <p class="card-text"> {member.MemberStatus}</p>
            
          </div>
        </div>
      ))}
    </div>
  )
};

export default ValidMembers