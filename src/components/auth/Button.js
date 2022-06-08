import styled from "styled-components";

const SButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: slateblue;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  color: white;
  opacity: ${(props) => props.opacity};
`;

export const Button = ({ text, opacity }) => {
  return <SButton opacity={opacity}>{text}</SButton>;
};
