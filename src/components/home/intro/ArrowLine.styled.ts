import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import leftArrow1 from "@/assets/svg/leftArrow1.svg";
import leftArrow2 from "@/assets/svg/leftArrow2.svg";
import leftArrow3 from "@/assets/svg/leftArrow3.svg";
import leftArrow4 from "@/assets/svg/leftArrow4.svg";
import leftArrow5 from "@/assets/svg/leftArrow5.svg";

import rightArrow1 from "@/assets/svg/rightArrow1.svg";
import rightArrow2 from "@/assets/svg/rightArrow2.svg";
import rightArrow3 from "@/assets/svg/rightArrow3.svg";
import rightArrow4 from "@/assets/svg/rightArrow4.svg";
import rightArrow5 from "@/assets/svg/rightArrow5.svg";

export const leftArrows = [
  leftArrow1,
  leftArrow2,
  leftArrow3,
  leftArrow4,
  leftArrow5,
];

export const rightArrows = [
  rightArrow1,
  rightArrow2,
  rightArrow3,
  rightArrow4,
  rightArrow5,
];

interface ArrowLineProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate?: string;
  color?: string;
}

export const ArrowLine = styled(Image)<ArrowLineProps>`
  position: absolute;
  top: ${({ top }) => top || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
  transform: ${({ rotate }) => `rotate(${rotate || "0deg"})`};
  z-index: 1;
  filter: ${({ color }) =>
    color ? `drop-shadow(0px 0px 5px ${color})` : "none"};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;
