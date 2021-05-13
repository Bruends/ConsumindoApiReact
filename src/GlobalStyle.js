import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #a3d2ca;
        --secondary-color: #f05945;
        --bg-color: #E0F7FA;
    }

    *{
        box-sizing: border-box;
    }
    
    body {
        font-family: "Montserrat", sans-serif; 
        background-color: var(--bg-color);
    }    
`;
