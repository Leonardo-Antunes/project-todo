import { Box, Button, TextField, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Autocomplete } from "@material-ui/lab";
import styled from "styled-components";

const textColor = grey[300]

export const Form = styled.form`
  max-width: 85vw;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  margin: 2rem auto;
  border-radius: 8px;

  @media(max-width: 1024px){
    width: 80vw;
  }
`;

export const FormBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media(max-width: 960px){
    flex-wrap: wrap;
  }
`;

export const Title = styled(Typography)`
  text-align: center;
  font-weight: 600;
  padding: 0.5rem;
`;

export const FormBoxBotao = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1rem 0;

  @media(max-width: 600px){
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const InputText = styled(TextField)`
  width: 210px;

  @media(max-width: 960px){
    margin: 1rem 0
  }
`;

export const SelectTag = styled(Autocomplete)`
  margin-bottom: 8px;
  min-width: 210px;
`;

export const ButtonForm = styled(Button)`
  background-color: ${(props) => props.bgcolor};
  color: ${textColor};

  &:hover {
    background-color: ${(props) => props.bgcolor};
    opacity: 0.85;
  }

  @media(max-width: 600px){
    margin: 1rem;
  }
`;
