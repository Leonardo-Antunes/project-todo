import { React, useState } from "react";
import { CardTitle, Wrapper, CardDescription, CardTag } from "./style";
import { useSelector, useDispatch } from "react-redux";
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
      {/* <CardTag> {tag} </CardTag> */}
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
