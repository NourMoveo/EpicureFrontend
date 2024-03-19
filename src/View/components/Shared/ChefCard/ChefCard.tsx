// Corrected ChefCard.jsx
import React from 'react';
import './ChefCard.scss';
import { Chef } from "@/Model/Interfaces";

const ChefCard: React.FC<{ chef: Chef }> = ({ chef }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${chef.image})`,
  };

  return (
    <div className='chef-image-container' style={backgroundImageStyle}>
      <div className='chef-img-name'>
        <h3 className='chef-name'>{chef.fName} {chef.lName}</h3>
      </div>
    </div>
  );
}

export default ChefCard;
