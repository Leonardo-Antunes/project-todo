import React from "react";
import { useSelector, useDispatch } from "react-redux";
import inputActions from "../../redux/actions/inputActions";
import { Card } from "..";
import todoActions from "../../redux/actions/todoActions";

const SecaoDeTarefas = () => {
  const dispatch = useDispatch();
  const itens = useSelector((state) => state.todos.todos);

  const onItemClicked = (item, index) => {
    dispatch(todoActions.setIndex(index));
    dispatch(inputActions.setInputId(item.id));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputDescription(item.description));
    dispatch(inputActions.setTag(item.tag));
    dispatch(inputActions.setIsChecked(item.isChecked));
  };

  if (itens.length === 0) {
    return <p>Nao ha todos</p>;
  }

  return (
    <>
      <div>
        <h1>Todas as tarefas</h1>
        {itens.map((item, index) => {
          if (item && !item.isChecked) {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                isChecked={item.isChecked}
                //tag={item.tag.tagName ? item.tag.tagName : "sem tag"}
                //tagColor={item.tag.tagColor ? item.tag.tagColor : "fff"}
                onItemClicked={() => {
                  onItemClicked(item, index);
                }}
              />
            );
          }
          return null;
        })}
      </div>
      <div>
        <h1>Concluídas</h1>
        {itens.map((item, index) => {
          if (item && item.isChecked) {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                isChecked={item.isChecked}
                //tag={item.tag.tagName}
                //tagColor={item.tag.tagColor}
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
