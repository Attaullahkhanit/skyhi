import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themes } from "@/app/styles.ts/theme";

export const HeroMain = styled.div`
  width: 100%;
  // max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  padding:0px;
  position: relative;
  overflow: hidden;
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
`;

export const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroGradientOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0;
  left: 0;
  z-index: 2;
  background: var(--primary-gradient-color);
  box-shadow: 50px 0 30px rgba(207, 206, 233, 0.49);

  @media (max-width: 768px) {
    width: 100%;
    box-shadow: none;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 25%;
  left: 5%;
  bottom: 25%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start; // Ensure button stays aligned to the content
  width: auto; // Make sure the content doesn't stretch

  @media (max-width: 768px) {
    top: 20%;
    left: 5%;
  }
`;


export const HeroTitle = styled.h1`
  font-family: var(--font-goodtimes-regular);
  font-size: 6vw;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;
  color: ${themes.baseColors.blue};

  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;

export const HeroSubtitle = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 2vw;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  color: var(--primary-textcolor);

  @media (max-width: 768px) {
    font-size: 4vw;
    margin-top: 20px;
  }
`;

export const HeroButton = styled.button`
  margin-top: 30px;
  padding: 16px 44px;
  border-radius: 10px 0px 0px 0px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  color: var(--primary-button-textcolor);
  background-color: var(--primary-button-bgcolor);

  @media (max-width: 768px) {
    padding: 12px 32px;
    font-size: 16px;
  }
`;

export const HeroVideoButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 3;
  cursor: pointer;
  color: var(--primary-textcolor);
  background-color: ${themes.baseColors.white};
  border-top-left-radius: 50px;

  @media (max-width: 768px) {
    padding: 12px 32px;
  }

  /* Pseudo-element for inverted bottom-left corner */
  &::before {
    content: "";
    position: absolute;
    left: -50px; /* Position it to the left */
    bottom: -10px; /* Align it with the bottom */
    width: 50px; /* Width of the pseudo-element */
    height: 35px; /* Height of the pseudo-element */
    z-index: -1; /* Behind the main button */
    background-color: transparent; /* Pseudo element Background color */
    border-bottom-right-radius: 50px; /* Rounded bottom-right corner */

    /* Box shadow to the right */
    box-shadow: 25px 1px var(--bg); /* Right-side shadow */
  }
`;

export const PlayIcon = styled(FontAwesomeIcon)`
  padding: 10px;
  height: 50px;
  width: 50px;
  color: var(--iconcolor);
`;

export const PlayImage = styled(Image)`
  height: 50px;
  width: 50px;
`;

export const ArrowIcon = styled(FontAwesomeIcon)`
  height: 40px;
  width: 40px;
  padding: 10px;
  font-size: 24px;
  color: var(--primary-textcolor);
`;
