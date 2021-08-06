import React from "react";
import { useSelector, useDispatch } from "react-redux";
import inputActions from "../../redux/actions/inputActions";
import { Card } from "..";

const SecaoDeTarefas = () => {
  const dispatch = useDispatch();

  const itens = useSelector((state) => state.todos.todos);

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputDescription(item.description));
    dispatch(inputActions.setIsChecked(item.isChecked));
    // dispatch(inputActions.setItemTag(item.tag));
  };

  // if (itens.length === 0) {
  //   return <p>Nao ha todos</p>;
  // }

  return (
    <div>
      {itens.map((item, index) => {
        console.log(item)
        if (item) {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              isChecked={item.isChecked}
              // tag={item.todos.tag}
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
