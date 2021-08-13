import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Title, Wrapper, BoxTarefas } from "./style";
import { Card } from "..";
import inputActions from "../../redux/actions/inputActions";
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
    <Wrapper>
      <BoxTarefas>
        <Title variant="h5">Todas as tarefas</Title>
        {itens.map((item, index) => {
          if (item) {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                isChecked={item.isChecked}
                tagName={item.tag.tagName}
                tagColor={item.tag.tagColor}
                onItemClicked={() => {
                  onItemClicked(item, index);
                }}
              />
            );
          }
          return null;
        })}
      </BoxTarefas>
      <BoxTarefas>
        <Title variant="h5">Não concluídas</Title>
        {itens.map((item, index) => {
          if (item && !item.isChecked) {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                isChecked={item.isChecked}
                tagName={item.tag.tagName}
                tagColor={item.tag.tagColor}
                onItemClicked={() => {
                  onItemClicked(item, index);
                }}
              />
            );
          }
          return null;
        })}
      </BoxTarefas>
      <BoxTarefas>
        <Title variant="h5">Concluídas</Title>
        {itens.map((item, index) => {
          if (item && item.isChecked) {
            return (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                isChecked={item.isChecked}
                tagName={item.tag.tagName}
                tagColor={item.tag.tagColor}
                onItemClicked={() => {
                  onItemClicked(item, index);
                }}
              />
            );
          }
          return null;
        })}
      </BoxTarefas>
    </Wrapper>
  );
};

export default SecaoDeTarefas;
