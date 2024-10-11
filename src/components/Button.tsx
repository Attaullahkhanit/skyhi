// components/Button.tsx
import styled from "styled-components";

interface ButtonProps {
  variant?: "main" | "accent" | "alert";
  onClick?: () => void;
  children: React.ReactNode;
}

// Styled button component with media queries
const StyledButton = styled.button<{ variant: "main" | "accent" | "alert" }>`
  background-color: ${({ variant }) =>
    variant === "main"
      ? "var(--secondary-button-bgcolor)"
      : variant === "accent"
      ? "var(--primary-button-bgcolor)"
      : "#e0e0e0"}; // Default color

  border: none;
  color: white;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "main"
        ? "var(--secondary-button-bgcolor)"
        : variant === "accent"
        ? "var(--primary-button-bgcolor)"
        : "#bdbdbd"}; // Darker shades for hover
  }

  /* Media Queries for Responsiveness */
  @media (max-width: 1424px) {
    width: 18vw;
  }

  @media (max-width: 1220px) {
    width: 16vw;
    height: 5vh;
    font-size: 0.8rem;
    padding: 0.8rem 1.8rem;
  }

  @media (max-width: 1024px) {
    width: 14vw;
    height: 5vh;
    font-size: 0.7rem;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 900px) {
    width: 12vw;
    height: 5vh;
    font-size: 0.6rem;
    padding: 0.7rem 1.2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 8vh;
    font-size: 1rem;
  }
`;

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

export default Button;
