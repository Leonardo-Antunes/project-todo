import React from "react";
import { CardTitle, Wrapper, CardDescription, CardTag } from "./style";

const Card = ({ title, description, tag, onItemClicked }) => {
  return (
    <Wrapper role="button" onClick={onItemClicked}>
      <CardTag> {tag} </CardTag>
      <CardTitle> {title} </CardTitle>
      <CardDescription> {description} </CardDescription>
    </Wrapper>
  );
};

export default Card;
