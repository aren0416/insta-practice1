import styled from "styled-components";
import { Link } from "react-router-dom";

const SBottomBox = styled.div`
  padding: 20px 0;
  width: 100%;
  text-align: center;
  font-size: 14px;
  a:hover {
    text-decoration: underline;
  }
`;

export const BottomBox = ({ cta, link, linkText }) => {
  return (
    <SBottomBox>
      <span>{cta} </span>
      <Link to={link}>{linkText}</Link>
    </SBottomBox>
  );
};
