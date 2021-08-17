import styled from "styled-components";
import { Card, Chip, Typography } from '@material-ui/core'
import { CheckCircle } from "@material-ui/icons";

export const CardTodo = styled(Card)`
  width: 20vw;
  background-color: #fff;
  padding: 0.5rem 0.8rem;
  margin: 0.8rem;
`

export const CardTitle = styled(Typography)`
`;

export const CardDescription = styled(Typography)`
  line-height: 1.5rem;
  margin: 1.5rem 0 !important;
  text-align: justify;
`;

export const TagBox = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Tag = styled(Chip)`
  color: #f1faee !important;
  font-weight: 600;
  background-color: ${props => props.bgcolor} !important;
`

export const Concluido = styled(CheckCircle)`
  color: #90be6d;
  font-size: 1.8rem;
`

export const NaoConcluido = styled(CheckCircle)`
  color: #f25c54;
  font-size: 1.8rem;
`