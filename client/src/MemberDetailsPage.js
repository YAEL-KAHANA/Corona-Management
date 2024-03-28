/*// MemberDetailsPage.js
import React from 'react';

const MemberDetailsPage = ({ member }) => {
  return (
    <div>
      <h2>Member Details</h2>
      <div>
        <h3>Personal Details:</h3>
        <p>Name: {member.firstName} {member.lastName}</p>
        <p>ID: {member.id}</p>
        <p>Address: {member.address}</p>
        <p>Date of Birth: {member.dateOfBirth}</p>
        <p>Phone: {member.phone}</p>
        <p>Mobile: {member.mobile}</p>
      </div>
      <div>
        <h3>COVID-19 Details:</h3>
        <p>Vaccination Dates:</p>
        <ul>
          {member.vaccinationDates.map((date, index) => (
            <li key={index}>Date {index + 1}: {date}</li>
          ))}
        </ul>
        <p>Vaccine Manufacturers:</p>
        <ul>
          {member.vaccineManufacturers.map((manufacturer, index) => (
            <li key={index}>Vaccine {index + 1}: {manufacturer}</li>
          ))}
        </ul>
        <p>Positive Result Date: {member.positiveResultDate}</p>
        <p>Recovery Date: {member.recoveryDate}</p>
      </div>
    </div>
  );
};

export default MemberDetailsPage;*/
