import React from 'react';

export const Introduction = ({ fullName, imageSrc, description }) => {
  return (
    <div className="introduction">
      <div className="image-container">
        <img src={imageSrc} alt="Profile" style={{ width: '300px', height: '300px' }} className="introduction-image"/>
      </div>
      <h2 className="introduction-fullname">{fullName}</h2>
      <div className="description-container">
      <textarea rows={10}  cols={20}>{description}</textarea>
      
      </div>
    </div>
  );
};

export default Introduction;