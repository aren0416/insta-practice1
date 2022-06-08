import styled from "styled-components";

const SFormError = styled.p`
  color: tomato;
  font-weight: 600;
  font-size: 12px;
  margin: 0 0 20px 0;
  text-align: center;
`;

export const FormError = ({ message }) => {
  return message === "" || !message ? null : <SFormError>{message}</SFormError>;
};
