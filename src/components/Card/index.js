import { React, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import inputActions from "../../redux/actions/inputActions";
import { CardTitle, Wrapper, CardDescription, CardTag } from "./style";

const Card = ({ title, description, tag, isChecked, onItemClicked }) => {

  return (
    <Wrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription> {description} </CardDescription>
      {/* <CardTag> {tag} </CardTag> */}
      <button onClick={onItemClicked}>Texto</button>
    </Wrapper>
  );
};

export default Card;
