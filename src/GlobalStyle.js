import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #314e52;
        --secondary-color: #f2a154;
        --bg-color: #e7e6e1;
        --card-color: #f7f6e7;
    }

    *{
        box-sizing: border-box;
    }
    
    body {
        font-family: "Montserrat", sans-serif; 
        background-color: var(--bg-color);
    }    
`;
