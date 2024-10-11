// src/styles/fontSizes.ts

const baseFontSize = 16; // Base font size in pixels, adjust if needed

export const fontSizes = {
  tiny: `${(11 / baseFontSize).toFixed(2)}rem`,  // 11px
  small: `${(12 / baseFontSize).toFixed(2)}rem`, // 12px
  medium: `${(14 / baseFontSize).toFixed(2)}rem`, // 14px
  large: `${(16 / baseFontSize).toFixed(2)}rem`,  // 16px
  xlarge: `${(18 / baseFontSize).toFixed(2)}rem`, // 18px
  xxlarge: `${(20 / baseFontSize).toFixed(2)}rem`, // 20px
  huge: `${(24 / baseFontSize).toFixed(2)}rem`,   // 24px
  xhuge: `${(28 / baseFontSize).toFixed(2)}rem`,  // 28px
  giant: `${(32 / baseFontSize).toFixed(2)}rem`,   // 32px
};

export default fontSizes;
