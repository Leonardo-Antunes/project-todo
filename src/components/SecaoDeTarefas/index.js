import React from "react";
import { useSelector, useDispatch } from "react-redux";
import inputActions from "../../redux/actions/inputActions";
import { Card } from "..";


const SecaoDeTarefas = () => {
  const dispatch = useDispatch();
  const title = useSelector(state => state.inputs.title);
  const description = useSelector(state => state.inputs.description);

  const itens = useSelector(state => state.todos.todos)
  console.log(itens)

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
