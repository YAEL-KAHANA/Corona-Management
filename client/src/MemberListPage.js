/*import React, { useState, useEffect } from 'react';
import MemberList from './MemberList';
import MemberDetails from './MemberDetails';
import AddMemberForm from './AddMemberForm';
import EditMemberForm from './EditMemberForm';

const MemberListPage = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('api/members');
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);

  const handleSelectMember = member => {
    setSelectedMember(member);
  };

  const handleAddMember = newMember => {
    setMembers([...members, newMember]);
  };

  const handleUpdateMember = updatedMember => {
    setMembers(members.map(member => 
      member.id === updatedMember.id ? updatedMember : member
    ));
    setSelectedMember(null);
  };

  const handleDeleteMember = memberId => {
    setMembers(members.filter(member => member.id !== memberId));
    setSelectedMember(null);
  };

  return (
    <div>
      <MemberList members={members} onSelectMember={handleSelectMember} />
      {selectedMember && (
        <MemberDetails
          member={selectedMember}
          onDeleteMember={handleDeleteMember}
        />
      )}
      <AddMemberForm onAddMember={handleAddMember} />
    </div>
  );
};

export default MemberListPage;*/
