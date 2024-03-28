/*// MemberList.js
import React from 'react';

const MemberList = ({ members, onSelectMember }) => {
  return (
    <div>
      <h2>Member List</h2>
      <ul>
        {members.map(member => (
          <li key={member.id} onClick={() => onSelectMember(member)}>
            {member.firstName} {member.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;*/
