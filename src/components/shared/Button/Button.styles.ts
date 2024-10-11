import { themes } from "@/app/styles.ts/theme";
import styled from "styled-components";

export const StyledButton = styled.button<{ variant: "main" | "accent" | "alert" }>`
  background-color: ${({ variant }) =>
    variant === "main"
      ? themes.baseColors.blue
      : variant === "accent"
      ? themes.baseColors.pink
      : "#e0e0e0"}; // Default color

  border: none;
  color: white;
  padding: 15px 30px; // Padding remains to control button size
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.80em;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-family: ${themes.font.goodTimesRg};
  white-space: nowrap; // Prevents button text from wrapping to a new line
  width: auto; // Width adjusts based on content

  &:hover {
    background-color: ${({ variant }) =>
      variant === "main"
        ? themes.baseColors.blue
        : variant === "accent"
        ? themes.baseColors.pink
        : "#bdbdbd"}; // Darker shades for hover
  }
`;
