import { React } from "react";
import { CardTitle, Wrapper, CardDescription } from "./style";

const Card = ({ title, isChecked, description, onItemClicked }) => {
 
  return (
    <Wrapper color={isChecked ? "green" : "white"}>
      <CardTitle>{title}</CardTitle>
      <CardDescription> {description} </CardDescription>
      <button onClick={onItemClicked}>Texto</button>
    </Wrapper>
  );
};

export default Card;
