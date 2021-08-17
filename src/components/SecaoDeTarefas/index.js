import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Title,
  Wrapper,
  BoxTarefas,
  LottieWrapper,
  LottieTitle,
} from "./style";
import { Card } from "..";
import inputActions from "../../redux/actions/inputActions";
import todoActions from "../../redux/actions/todoActions";
import Lottie from "react-lottie";
import animationData from "../../images/72519-banner-happy-emoji.json";

const SecaoDeTarefas = () => {
  const dispatch = useDispatch();
  const itens = useSelector((state) => state.todos.todos);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const onItemClicked = (item, index) => {
    dispatch(todoActions.setIndex(index));
    dispatch(inputActions.setInputId(item.id));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputDescription(item.description));
    dispatch(inputActions.setTag(item.tag));
    dispatch(inputActions.setIsChecked(item.isChecked));
  };

  if (itens.length === 0) {
    return (
      <LottieWrapper>
        <LottieTitle> Não há nada para ver aqui! </LottieTitle>
        <Lottie options={defaultOptions} height={400} width={400} />
      </LottieWrapper>
    );
  }

  let counterTasks = 0;

  for (const obj of itens) {
    if (obj.isChecked === true) counterTasks++;
  }

  return (
    <Wrapper>
      <BoxTarefas>
        <Title variant="h5">Todas as tarefas: {itens.length}</Title>
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
        <Title variant="h5">
          Não concluídas: {itens.length - counterTasks}{" "}
        </Title>
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
        <Title variant="h5">Concluídas: {counterTasks}</Title>
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
