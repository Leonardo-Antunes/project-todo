import { Box, Button, TextField, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import styled from "styled-components";

export const Form = styled.form`
  max-width: 1000px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  margin: 2rem auto;
  border-radius: 8px;
`;

export const FormBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
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
`;

export const InputBox = styled.div`
  margin: 16px 0 8px 0;
  display: flex;
  justify-content: space-between;
`;

export const InputText = styled(TextField)`
  margin-right: 10px;
`;

export const SelectTag = styled(Autocomplete)`
  min-width: 150px;
`;

export const ButtonForm = styled(Button)`
  color: #f1faee !important;
  background-color: ${(props) => props.bgcolor} !important;

  :hover {
    opacity: 0.8 !important;
  }
`;
