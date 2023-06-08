import React from 'react';

export const Introduction = ({ fullName, imageSrc, description }) => {
  return (
    <div className="introduction">
      <div className="image-container">
        <img src={imageSrc} alt="Profile" />
      </div>
      <h2>{fullName}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Introduction;