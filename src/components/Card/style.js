import styled from "styled-components";
import { Card, Chip, Typography } from '@material-ui/core'
import { CheckCircle, CheckCircleOutline } from "@material-ui/icons";

export const CardTodo = styled(Card)`
  max-width: 15vw;
  background-color: #f8f9fa;
  padding: 0.5rem 0.8rem;
  margin: 0.8rem;
`

export const CardTitle = styled(Typography)`
`;

export const CardDescription = styled(Typography)`
  line-height: 1.5rem;
  margin: 1rem 0;
  text-align: justify;
`;

export const TagBox = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Tag = styled(Chip)`
  color: #fff;
  background-color: ${props => props.bgcolor};
`

export const Concluido = styled(CheckCircle)`
  color: #90be6d;
  font-size: 1.8rem;
`
export const NaoConcluido = styled(CheckCircleOutline)`
  color: #f25c54;
  font-size: 1.8rem;
`

export const CardTag = styled.span`
  background-color: ${props => props.tagColor};
  border-radius: 10px;
  width: 40%;
`;
