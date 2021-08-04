import React from "react";

const Card = ({title, description, tag}) => {

  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{tag}</h3>
    </div>
  );
};

export default Card;
