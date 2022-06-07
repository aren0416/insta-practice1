import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 300px;
  padding: 30px;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthLayout = ({ children }) => {
  return (
    <Wrap>
      <Container>{children}</Container>
    </Wrap>
  );
};
