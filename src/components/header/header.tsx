"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo1.png";
import {
  HeaderContainer,
  LogoContainer,
  Navigation,
  NavLink,
  ButtonContainer,
  HamburgerIcon,
  MobileMenuOverlay,
  MobileNavLink,
  CloseButton,
} from "@/components/header/Header.styled";
import { useRoute } from "@/utils/providers/RouteContext";
import Button from "../shared/Button/Button";
import { StyledButton } from "../shared/Button/Button.styles";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { route } = useRoute(); // Get current route

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HeaderContainer>
        {/* Logo on the left */}
        <LogoContainer>
          <Image src={logo.src} alt="Logo" width={172} height={80} />
        </LogoContainer>

        {/* Desktop Navigation in the center */}
        <Navigation>
          <NavLink href="/" isActive={route === "/"}>
            Home
          </NavLink>
          <NavLink href="/about" isActive={route === "/about"}>
            About
          </NavLink>
          <NavLink href="/courses" isActive={route === "/courses"}>
            Courses
          </NavLink>
          <NavLink href="/approach" isActive={route === "/approach"}>
            Approach
          </NavLink>
          <NavLink href="/resources" isActive={route === "/resources"}>
            Resources
          </NavLink>
        </Navigation>

        {/* Header Button on the right for desktop */}
        <ButtonContainer>
          <Button variant="main" onClick={() => alert("Button clicked!")}>
            Book your free trial today
          </Button>
        </ButtonContainer>

        {/* Hamburger Icon for Mobile */}
        <HamburgerIcon onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerIcon>
      </HeaderContainer>

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay $isOpen={isMenuOpen}>
        <CloseButton onClick={toggleMenu}>&times;</CloseButton>
        <MobileNavLink href="/" className={route === "/" ? "active" : ""}>
          Home
        </MobileNavLink>
        <MobileNavLink
          href="/about"
          className={route === "/about" ? "active" : ""}
        >
          About
        </MobileNavLink>
        <MobileNavLink
          href="/courses"
          className={route === "/courses" ? "active" : ""}
        >
          Courses
        </MobileNavLink>
        <MobileNavLink
          href="/approach"
          className={route === "/approach" ? "active" : ""}
        >
          Approach
        </MobileNavLink>
        <MobileNavLink
          href="/resources"
          className={route === "/resources" ? "active" : ""}
        >
          Resources
        </MobileNavLink>
        <StyledButton variant="main" onClick={() => console.log("Button clicked!")}>
          Book your free trial today
        </StyledButton>
      </MobileMenuOverlay>
    </>
  );
};

export default Header;
