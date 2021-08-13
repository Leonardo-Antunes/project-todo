import React from "react";
import { CardTodo, CardTitle, CardDescription, Tag, Concluido, NaoConcluido, TagBox } from "./style";

const Card = ({ title, isChecked, description, tagName, tagColor, onItemClicked }) => {

  return (


    <CardTodo onClick={onItemClicked}>
      <CardTitle variant="h6">{title}</CardTitle>
      <CardDescription variant="body2"> {description} </CardDescription>
      <TagBox>
        <Tag label={tagName} bgcolor={tagColor}/>
        {isChecked ?
          <Concluido /> :
          <NaoConcluido />
        }
      </TagBox>
    </CardTodo>
  )
};

export default Card;
