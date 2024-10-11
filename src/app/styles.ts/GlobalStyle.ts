// app/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";
import { themes } from "./theme";
import fontSizes from "./utils/fontSizes";
// import { fontSizes } from "./fontSizes"; // Import the font sizes

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "GoodTimesRg";
    src: url("../assets/fonts/GoodTimesRg-Regular.eot");
    src: url("../assets/fonts/GoodTimesRg-Regular.eot?#iefix") format("embedded-opentype"),
         url("../assets/fonts/GoodTimesRg-Regular.woff2") format("woff2"),
         url("../assets/fonts/GoodTimesRg-Regular.woff") format("woff"),
         url("../assets/fonts/GoodTimesRg-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${themes?.font?.goodTimesRg}, sans-serif; // This should match the theme
    background-color: ${themes?.baseColors?.white};
    color: ${themes?.colors?.text};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${themes?.fontWeight?.bold};
  }
  
  p {
    font-size: ${fontSizes.medium}; // Use tiny font size for paragraphs (11px)
    line-height: 1.5; // Optional: Adjust the line height for readability
  }

  button {
    cursor: pointer;
  }

  // Responsive styles
  @media (max-width: 768px) {
    body {
      padding: 0px; // Reduce padding on smaller screens
      font-size: 14px; // Adjust font size for mobile devices
    }

    h1 {
      font-size: 1.5rem; // Adjust heading sizes
    }

    h2 {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 1.125rem;
    }

    // Add more styles as needed for smaller screens
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    body {
      padding: 0px; // Add padding for tablet screens
      font-size: 16px; // Slightly larger font size
    }

    h1 {
      font-size: 2rem; // Adjust heading sizes
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    // Add more styles as needed for tablet screens
  }

  @media (min-width: 1025px) {
    body {
      padding: 0px; // Add padding for larger screens
      font-size: 18px; // Default font size for larger devices
    }

    h1 {
      font-size: 2.5rem; // Adjust heading sizes
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.75rem;
    }
  }
`;

export default GlobalStyles;
