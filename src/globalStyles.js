import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    body {
        font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: white;
        max-height: 100vh;
        background-color: var(--brandBrown);
    }
    .freezeflow {
        overflow: hidden;
    }

   

    :root {
        --brandBrown : #201A15;
        --brandRed: #CC231B;
        --maxWidth: 1300px;
        --borderColor: #606060;
    }
    button, svg, img, li {
        cursor: pointer;
    }
`
