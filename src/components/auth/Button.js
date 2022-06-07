import styled from "styled-components";

const SButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: slateblue;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  color: white;
`;

export const Button = ({ text }) => {
  return <SButton>{text}</SButton>;
};
