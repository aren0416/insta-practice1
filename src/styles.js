import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    *{ box-sizing: border-box;}
    a{ text-decoration: none;}
    input { all: unset;}
    body {

    }
`;
