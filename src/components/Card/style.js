import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => (props.color)};
  width: 12em;
  border: solid 0.5px black;
  border-radius: 0.3em;
  margin-bottom: 1em;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
`;

export const CardDescription = styled.p`

`;

export const CardTag = styled.span`
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  width: 40%;
`;
