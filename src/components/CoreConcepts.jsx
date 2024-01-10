import React from "react";

const CoreConcepts = ({ image, title, description }) => {
  return (
    <div>
      <li>
        <img src={image} alt="Image Couldn't load" />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </div>
  );
};

export default CoreConcepts;
