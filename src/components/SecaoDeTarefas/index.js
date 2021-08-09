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
  };

  if (itens.length === 0) {
    return <p>Nao ha todos</p>;
  }

  return (
    <>
      <div>
        <h1>Todas as tarefas</h1>
        {itens.map((item, index) => {
          if (item) {
            return (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                onItemClicked={() => {
                  onItemClicked(item, index);
                }}
              />
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default SecaoDeTarefas;
