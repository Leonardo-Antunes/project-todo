import { React } from "react";
import { CardTitle, Wrapper, CardDescription, CardTag } from "./style";

const Card = ({ title, isChecked, description, tagName, tagColor, onItemClicked }) => {
 
  return (
    <Wrapper color={isChecked ? "green" : "white"}>
      <CardTitle>{title}</CardTitle>
      <CardDescription> {description} </CardDescription>
      <CardTag bgColor={tagColor}>{tagName}</CardTag>
      <button onClick={onItemClicked}>Texto</button>
    </Wrapper>
  );
};

export default Card;
