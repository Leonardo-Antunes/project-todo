import styled from "styled-components";
import { Box, Typography } from "@material-ui/core";

export const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-evenly;
`

export const BoxTarefas = styled(Box) `
  background-color: #f8f9fa;
  border-radius: 8px;
`
export const Title = styled(Typography)`
  text-align: center;
  font-weight: 600;
  padding: 0.5rem;
`