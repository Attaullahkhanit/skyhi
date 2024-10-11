"use client";
import React from "react";
import {
  HeroMain,
  HeroBackground,
  HeroImage,
  HeroGradientOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  HeroVideoButton,
  PlayImage,
  ArrowIcon,
} from "@/components/home/hero/HeroSection.styled";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PlayImg from "@/assets/svg/play-icon.svg";
import heroBackground from "@/assets/images/hero1.png";
import Button from "@/components/shared/Button/Button";
import { StyledButton } from "@/components/shared/Button/Button.styles";
import { Container, Row } from "@/app/layoutGrid";
// import { ReactComponent as Stay } from "../../../assets/business/video/stay.svg";
// import { Container } from "@/app/layoutGrid";

const HeroSection: React.FC = () => {
  const handleClick = () => {
  };
  return (
    <>
  
    <HeroMain>
      <HeroBackground>
        <HeroImage
          src={heroBackground}
          alt="Hero Background"
          fill
          quality={100}
        />
      </HeroBackground>

      {/* Overlay Gradient Div */}
      <HeroGradientOverlay />

      {/* Left Side Text */}
      <HeroContent>
        <HeroTitle>Beyond AI</HeroTitle>
        <HeroSubtitle>
          Building timeless tech skills for an
          <br />
          ever-changing tech landscape
        </HeroSubtitle>
        <StyledButton variant="accent" onClick={() => console.log("Button clicked!")}>
          Book your free trial today
        </StyledButton>
        {/* <Button variant="accent" onClick={handleClick}>Book your free trial today</Button> */}
      </HeroContent>

      {/* Watch Video Button */}
      <HeroVideoButton>
        <PlayImage src={PlayImg} alt="Play Icon" />
        <span>Watch Video</span>
        <ArrowIcon icon={faArrowRight} />
      </HeroVideoButton>
    </HeroMain>

    </>
  );
};

export default HeroSection;
