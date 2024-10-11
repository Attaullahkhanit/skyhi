import { baseColors } from "@/app/styles.ts/tokens/base/baseColors";
import styled from "styled-components";

// SubContainer: Flex container for the contact section
export const SubContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center vertically */
    align-items: center; /* Center horizontally */
    height: 100vh; /* Full height of the viewport */
    padding: 20px 0 0 90px; /* Optional: Add some padding if needed */
`;


// Box: Styling for the content boxes
export const Box = styled.div`
  width: 100%;
  text-align: left; /* Align text to the left */
  color: ${baseColors.white};
`;

export const ResponsiveImage = styled.img`
  width: 100%; // Makes the image take the full width of its container
  height: auto; // Maintains the aspect ratio
`;
export const HeroTitle = styled.h1`
  font-family: var(--font-goodtimes-regular);
  font-size: 4vw;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;
  padding-bottom: 50px;
  color: ${baseColors.white};

  @media (max-width: 768px) {
    font-size: 8vw;
  }
`;