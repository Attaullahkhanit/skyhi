// components/Button.tsx
import React from "react";
import styled from "styled-components";

import { StyledButton } from "./Button.styles";

interface ButtonProps {
  variant?: "main" | "accent" | "alert";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "main",
  children,
  onClick,
}) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

// const Button =styled.button` 
//   height: 100vh;
//   margin: 0 auto;
//   position: relative;
//   overflow: hidden; 
// `
export default Button;


