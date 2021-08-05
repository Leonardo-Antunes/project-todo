import React from "react";
import { CardTitle, Wrapper, CardDescription, CardTag } from "./style";

const Card = ({ title, description, tag, onItemClicked }) => {
  return (
    <Wrapper role="button" onClick={onItemClicked}>
      <CardTitle> {title} </CardTitle>
      <CardDescription> {description} </CardDescription>
      <CardTag> {tag} </CardTag>
    </Wrapper>
  );
};

export default Card;
