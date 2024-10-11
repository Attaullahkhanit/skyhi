import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2)format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
        U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    :root {
        --bg: #fff;
        --fg: navy;

        --headingfont: "GoodTimesRg-Regular";
        --headingcolor: #4767DA;

        --iconcolor: #ffffff;
        --iconcolor-bg: #4767DA;

        --active-textcolor: #4767DA;

        --primary-textcolor: #2E2E2E;
        --primary-textcolor-bg: #FFFFFF;
        --primary-textcolor-hover: #4767DA;
        --primary-text-font: "Poppins";

        --secondary-textcolor: #000000;
        --secondary-textcolor-bg: #FFFFFF;
        --secondary-textcolor-hover: #4767DA;


        --primary-button-bgcolor: #ED66A7;
        --primary-button-hovercolor: #ED33A7;
        --primary-button-textcolor: #FFFFFF;

        --secondary-button-bgcolor: #4767DA;
        --secondary-button-hovercolor: #4257DA;
        --secondary-button-textcolor: #ffffff;

        --primary-gradient-color: linear-gradient( 270deg,
            rgba(207, 206, 233, 0.49) 1.47%,
            rgba(211, 217, 255, 0.98) 17.8%,
            rgba(239, 239, 255, 0.98) 54.5%,
            rgba(194, 192, 191, 0.98) 97.77%);



        --overlay-bg: rgba(255, 255, 255, 0.8);
        --overlay-gradient-color: linear-gradient( 270deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);

        --footer-bg: #2E2E2E;
    }
`;

export default GlobalStyle;
