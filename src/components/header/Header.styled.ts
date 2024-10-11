import styled from "styled-components";
import { StyledButton } from "../shared/Button/Button.styles";

// Header container using flexbox for layout
export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 80px; /* Default padding for larger screens */
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 80px;
  position: relative;
  z-index: 1000;

  /* Media query for mobile screens */
  @media (max-width: 768px) {
    padding: 15px; /* Padding for mobile: left and right 15px */
    width: 100%;
  }
`;


// Logo container
export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  
`;


// Navigation menu for desktop
export const Navigation = styled.nav`
  display: flex;
  flex: 2;
  justify-content: center;

  @media (max-width: 768px) {
    display: none; // Hide navigation on mobile
  }
`;

// Navigation link styles
export const NavLink = styled.a<{ isActive?: boolean }>`
  padding: 0 25px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? "blue" : "#333")}; /* Blue when active */

  &:hover {
    color: blue; /* Hover effect */
    text-decoration: underline;
  }

  ${({ isActive }) =>
    isActive &&
    `
    color: blue; /* Active color */
    text-decoration: underline; /* Active underline */
  `}
`;

// Button container for desktop
export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none; // Hide button on mobile
  }
`;

// Mobile hamburger icon
export const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  cursor: pointer;

  span {
    width: 100%;
    height: 3px;
    background-color: #333;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    display: flex; // Show hamburger on mobile
  }
`;

// Mobile menu overlay
export const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white; /* White background for mobile menu */
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center NavLinks and Button */
  z-index: 1000;
`;

// Mobile menu links
export const MobileNavLink = styled.a`
  display: block;
  padding: 15px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  text-align: center;
  text-decoration: none;
  width: 100%; /* Full width */
  
  &:hover {
    color: blue;
    text-decoration: underline;
  }

  &.active {
    color: blue;
    text-decoration: underline;
  }
`;

// Close button for mobile menu
export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 36px;
  cursor: pointer;
`;

export const MobileStyledButton = styled(StyledButton)`
  width: 100%; /* Full width on mobile */
  max-width: 300px; /* Optional max width */
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
`;