"use client";

import { ThemeProvider } from "next-themes";
import StyledComponentsRegistry from "@/utils/providers/registry";
// import GlobalStyle from "@/app/styles.ts/GlobalStyle";
import { themes } from "@/app/styles.ts/theme";
import GlobalStyles from "@/app/styles.ts/GlobalStyle";
// import GlobalStyle from "@/app/styles.ts/GlobalStyle";

function StyledLayout(props: React.PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
      <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default StyledLayout;
