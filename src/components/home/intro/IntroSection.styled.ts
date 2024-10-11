import styled from "styled-components";
import { motion } from "framer-motion";
import { themes } from "@/app/styles.ts/theme";
import fontSizes from "@/app/styles.ts/utils/fontSizes";
import { fontWeight } from "@/app/styles.ts/utils/fontWeight";

interface ListItemProps {
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
}

// Color Constants
const colors = {
  primary: "#AFBBE7",
  secondary: "#F4A3CA",
};

// Wrapper for the whole page
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 1000px;
  padding-top: 6rem;
  background-color: ${themes.baseColors.white};

  @media (max-width: 768px) {
    align-items: left;
    width: 100vw;
  }
`;

// Header section
export const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: ${fontSizes.xxlarge};
    font-weight: bold;
    color: var(--primary-textcolor);
  }

  p {
    max-width: 600px;
    margin: 1rem auto;
    font-size: ${fontSizes.small};
    color: var(--primary-textcolor);
  }

  span {
    color: ${themes.baseColors.blue};
  }

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 0;
    width: 100%;

    p {
      width: 100%;
      text-align: left;
      align-items: left;
      margin: 0.5rem 0;
    }
  }
`;

// Main content layout
export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    // width: 100vw;
    align-items: left;
    justify-content: left;
    self-align: left;
    margin: 0;
  }
`;

export const BrainImageContainer = styled.div`
  z-index: 1;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    width: 100vw;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

// Brain image with styling for responsiveness
export const BrainImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .brain_image {
    width: 200px;
    max-width: 386px;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 286px;

    .brain_image {
      width: 100%;
      max-width: 286px;
    }
  }
`;

// Outer Circle surrounding the brain image
export const OuterCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  border: 2px dashed var(--primary-textcolor);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Dots for Blue and Pink
export const BlueDot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #4767da;
  border-radius: 50%;

  &.blue-dot-1 {
    top: 10%;
    left: 17%;
  }

  &.blue-dot-2 {
    top: 30%;
    left: 2%;
  }

  &.blue-dot-3 {
    top: 50%;
    left: -2%;
  }

  &.blue-dot-4 {
    top: 70%;
    left: 3%;
  }

  &.blue-dot-5 {
    top: 90%;
    left: 20%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PinkDot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #f4a3ca;
  border-radius: 50%;

  &.pink-dot-1 {
    top: 10%;
    right: 17%;
  }

  &.pink-dot-2 {
    top: 30%;
    right: 2%;
  }

  &.pink-dot-3 {
    top: 50%;
    right: -2%;
  }

  &.pink-dot-4 {
    top: 70%;
    right: 3%;
  }

  &.pink-dot-5 {
    top: 90%;
    right: 20%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

interface ListContainerProps {
  $align: string;
}

// Left and Right content (Lists)
export const ListContainer = styled.div<ListContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$align};
  padding: 2rem;
  gap: 4rem;
  width: 350px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: left;
    justify-content: left;
    align-content: left;
    self-align: left;
    gap: 2rem;
    padding: 0;
    margin: 0;
    width: 100%;
  }
`;

export const ListItemPrimary = styled.div<ListItemProps>`
  display: flex;
  align-items: center;
  top: ${(props) => props.$top || "auto"};
  bottom: ${(props) => props.$bottom || "auto"};
  left: ${(props) => props.$left || "auto"};
  right: ${(props) => props.$right || "auto"};
  font-size: ${fontSizes.small};
  // margin-bottom: 1rem;
  color: var(--primary-textcolor);
  position: relative;
  text-align: right;
  font-weight: bold;
  gap: 1rem;

  .bulletin {
    position: relative;
    align-items: center;
    align-content: center;
    text-align: center;
    width: 10px;
    height: 10px;
    padding: 0.2rem;
    background-color: ${colors.primary};
    border-radius: 50%;
    display: none;
  }

  .mark {
    display: inline-block;
    background: ${colors.primary};
    color: white;
    width: 35px;
    height: 35px;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    text-align: left;
    margin-right: 0;

    align-items: flex-start;
    left: 0;
    right: 0;

    // buletin
    .bulletin {
      display: inline-block;
    }

    // mark
    .mark {
      display: none;
    }
  }
`;

// Secondary List Item (Pink)
export const ListItemSecondary = styled.div<ListItemProps>`
  display: flex;
  align-items: center;
  top: ${(props) => props.$top || "auto"};
  bottom: ${(props) => props.$bottom || "auto"};
  left: ${(props) => props.$left || "auto"};
  right: ${(props) => props.$right || "auto"};
  font-size: ${fontSizes.small};
  // margin-bottom: 1rem;
  color: var(--primary-textcolor);
  position: relative;
  text-align: left;
  font-weight: ${fontWeight.semiBold};
  gap: 1rem;

  .bulletin {
    position: relative;
    align-items: center;
    align-content: center;
    text-align: center;
    width: 10px;
    height: 10px;
    padding: 0.2rem;
    background-color: ${colors.secondary};
    border-radius: 100%;
    display: none;
  }

  .mark {
    display: inline-block;
    background: ${colors.secondary};
    color: white;
    width: 35px;
    height: 35px;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    text-align: left;
    margin-left: 0;

    align-items: flex-start;
    left: 0;
    right: 0;

    // buletin

    .bulletin {
      display: inline-block;
    }
    .mark {
      display: none;
    }
  }
`;

export const UnderlayTextLeft = styled.p`
  position: absolute;
  left: -30%;
  height: 216px;

  width: 555px;
  align-content: center;
  text-align: center;
  // transform: translateY(-50%);
  transform: rotate(270deg);
  font-family: "Satoshi", sans-serif;
  font-weight: 900;
  font-size: 7rem;
  line-height: 216px;

  color: var(--primary-textcolor);
  opacity: 0.2;
  z-index: 0;
  top: 20%;

  @media (max-width: 768px) {
    text-align: center;
    display: block;

    position: relative;
    left: 0;
    top: 10px;
    font-size: 30px;

    line-height: 30px;
    height: 50px;
    width: 100px;
  }
`;

export const UnderlayTextRight = styled.p`
  position: absolute;
  right: -30%;
  height: 216px;
  width: 555px;
  text-align: center;
  align-content: center;

  // transform: translateY(-50%);
  transform: rotate(270deg);
  font-family: "Satoshi", sans-serif;

  font-size: 160px;
  font-weight: 900;
  font-size: 7rem;
  line-height: 216px;

  color: var(--primary-textcolor);
  opacity: 0.2;
  z-index: 0;
  top: 20%;

  @media (max-width: 768px) {
    text-align: center;
    display: block;
    position: relative;
    right: 0;
    top: 0;
    font-size: 30px;

    line-height: 30px;
    height: 50px;
    width: 100px;
  }
`;
