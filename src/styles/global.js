import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #040011;
        color: #FFFFFF;
    }
    html {
        font-size: 62.5%;
    }
    img {
        max-width: 100%;
        display: block;
    }
`

export default GlobalStyle