import React from 'react';
import ProfileCard from '../ProfileCard';
import './homework02.css'

// na podstawie ProfileCard tworzę userów, odnoszę się do 
function Homework02() {
  return (
    <div className="homework-02">
      <ProfileCard
        user={{
          avatar:"https://st.depositphotos.com/3854637/52379/v/950/depositphotos_523790208-stock-illustration-portrait-beautiful-latin-american-woman.jpg",
          name: 'Lara Clara',
          occupation: 'Stuntman',
          hobbies: ['extreme sport', 'racing', 'japanese singing'] 
    }}
      />
      <ProfileCard
        user={{
            avatar: 'https://thumbs.dreamstime.com/z/pi%C4%99kna-avatar-kobieta-95135825.jpg?ct=jpeg',
            name: 'Greta von Hell',
            occupation: 'Actress',
            hobbies: ['70s movies', 'beauty', 'joga']
        }}
      />
      <ProfileCard
        user={{
            avatar: 'https://e7.pngegg.com/pngimages/520/472/png-clipart-computer-icons-avatar-man-male-face-head-man-icon-miscellaneous-human-thumbnail.png',
            name: 'Charlie Refabrick',
            occupation: 'Production Manager',
            hobbies: ['70s movies', 'music', 'chess']
          }}
      />
    </div>
  );
}

export default Homework02;
