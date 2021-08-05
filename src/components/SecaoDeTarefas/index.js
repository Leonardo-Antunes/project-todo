import React from "react";
import { useSelector, useDispatch } from "react-redux";
import inputActions from "../../redux/actions/inputActions";
import { Card } from "..";
import {} from "./style";

const SecaoDeTarefas = () => {
  const dispatch = useDispatch();
  const itens = useSelector((state) => state);

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputDescription(item.description));
    // dispatch(inputActions.setItemTag(item.tag));
  };

  // if (itens.length === 0) {
  //   return <p>Nao ha todos</p>;
  // }

  return (
    <div>
      {itens.map((item, index) => {
        if (item) {
          return (
            <Card
              title={item.title}
              description={item.description}
              tag={item.tag}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default SecaoDeTarefas;
