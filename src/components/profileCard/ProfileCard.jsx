import React from 'react';
import './profileCard.css';


// tutaj tworzę szablon dla karty user

function ProfileCard({ user }) {
  return (
    //tutaj jest ogólna karta userów
    <div className="profile-card">

      {/* odniesienie do avatara */}
      <img src={user.avatar} alt={user.name} className="profile-card-avatar" />
      
      {/* tutaj zapełniam kartę elementami, po kolei: imię, zawód, hobby */}
      <h2 className="profile-card-name">
        {user.name}
      </h2>

      <p className="profile-card-occupation">Occupation: {user.occupation}</p>
      
      <div className="profile-card-hobbies">
        <h4>Hobbies:</h4>
        <ul>
          <li>{user.hobbies[0]}</li>
          <li>{user.hobbies[1]}</li>
          <li>{user.hobbies[2]}</li>
        </ul>
      </div>
      
    </div>
  );
}

export default ProfileCard;
