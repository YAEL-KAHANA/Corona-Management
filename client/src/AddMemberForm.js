// AddMemberForm.js
/*import React, { useState } from 'react';

const AddMemberForm = ({ onAddMember }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Validate form data
    // Call onAddMember with form data
    onAddMember({ firstName, lastName });
    // Reset form fields
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
      <h2>Add Member</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default AddMemberForm;*/
