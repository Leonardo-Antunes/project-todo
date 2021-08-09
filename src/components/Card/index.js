import { React, useState } from "react";
import { CardTitle, Wrapper, CardDescription } from "./style";
import { useDispatch } from "react-redux";
import inputActions from "../../redux/actions/inputActions";

const Card = ({ title, description, onItemClicked }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleIsChecked = () => {
    setIsChecked(!isChecked);
    dispatch(inputActions.setIsChecked(isChecked));
  };

  return (
    <Wrapper color={isChecked ? "green" : "white" }>
      <CardTitle>{title}</CardTitle>
      <CardDescription> {description} </CardDescription>
      <button onClick={onItemClicked}>Texto</button>
      <input
        className="toggle"
        type="checkbox"
        checked={isChecked}
        onChange={handleIsChecked}
      />
    </Wrapper>
  );
};

export default Card;
