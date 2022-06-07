import styled from "styled-components";

const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const AuthTitle = ({ title }) => {
  return <Title>{title}</Title>;
};
