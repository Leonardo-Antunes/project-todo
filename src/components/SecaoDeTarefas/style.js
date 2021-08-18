import styled from "styled-components";
import { Box, Typography } from "@material-ui/core";

export const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  min-width: 100%;
  margin-bottom: 1.5rem;

  @media(max-width: 960px){
    align-items: center;
    flex-direction: column;
  }
`;

export const LottieWrapper = styled(Box)`
  min-width: 100%;
  text-align: center;
`;

export const BoxTarefas = styled(Box)`
  width: 22vw;
  background-color: #f8f9fa;
  border-radius: 8px;

  @media(max-width: 960px){
    width: 70vw;
    margin: 1rem 0 ;
  }
`;

export const Title = styled(Typography)`
  text-align: center;
  font-weight: 600;
  padding: 0.5rem;
`;

export const LottieTitle = styled(Typography)`
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
`;
