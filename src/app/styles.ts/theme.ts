"use client";

import { spacing } from "./utils/spacing";
import { fontWeight } from "./utils/fontWeight";
import { zIndex } from "./utils/zIndex";
import { elevation } from "./utils/elevation";
// import { breakpoints } from "./utils/breakpoints";
// import { colors } from "./tokens/palette";
import { baseColors } from "./tokens/base/baseColors";
import { colors } from "./tokens/pallets";
import { breakpoints } from "./utils/breakpoint";

// Define the Theme interface for TypeScript
import { DefaultTheme } from 'styled-components';
import fontSizes from "./utils/fontSizes";

export interface Themeings {
  font: {
    goodTimesRg: string;
    poppins: string;
    gothamFont: string;
    gothamRoundedFont: string;
  };
  colors: typeof colors; // Specify the type for colors
  zIndex: typeof zIndex; // Specify the type for zIndex
  spacing: typeof spacing; // Specify the type for spacing
  fontWeight: typeof fontWeight; // Specify the type for fontWeight
  baseColors: typeof baseColors; // Specify the type for baseColors
  fontSizes: typeof fontSizes;
  breakpoints: {
    mobile: number;
    largeMobile: number;
    tablet: number;
    desktop: number;
    largeDesktop: number;
  };
  media: {
    up: (x: keyof typeof breakpoints) => string;
    down: (x: keyof typeof breakpoints) => string;
    between: (a: keyof typeof breakpoints, b: keyof typeof breakpoints) => string;
    only: (x: keyof typeof breakpoints) => string;
  };
  elevation: typeof elevation; // Specify the type for elevation
}

// Create the theme object
export const themes: Themeings = {
  font: {
    goodTimesRg: "GoodTimesRg, sans-serif", // Ensure it's spelled correctly
    poppins: "Poppins, sans-serif",
    gothamFont: "Gotham, sans-serif",
    gothamRoundedFont: "Gotham Rounded, sans-serif",
  },
  colors,
  zIndex,
  spacing,
  fontWeight,
  baseColors,
  fontSizes,
  breakpoints: {
    mobile: 480,
    largeMobile: 600,
    tablet: 768,
    desktop: 1024,
    largeDesktop: 1440,
  },
  media: {
    up: (x: keyof typeof breakpoints) => `
      @media (min-width: ${breakpoints[x]}px)
    `,
    down: (x: keyof typeof breakpoints) => `
      @media (max-width: ${breakpoints[x]}px)
    `,
    between: (a: keyof typeof breakpoints, b: keyof typeof breakpoints) => `
      @media (min-width: ${breakpoints[a]}px) and (max-width: ${breakpoints[b]}px)
    `,
    only: (x: keyof typeof breakpoints) => `
      @media (min-width: ${breakpoints[x]}px) and (max-width: ${breakpoints[x]}px)
    `,
  },
  elevation,
};
