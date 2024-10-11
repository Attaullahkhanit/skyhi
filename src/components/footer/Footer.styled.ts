import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { baseColors } from "@/app/styles.ts/tokens/base/baseColors";
import fontSizes from "@/app/styles.ts/utils/fontSizes";

// Footer Wrapper
export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${baseColors.black};
  padding: 40px 20px;
  position: relative;
`;

// Inner Container
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 60px 100px 20px 60px;
  
  color: ${baseColors.white};

  @media (max-width: 1200px) {
    padding: 60px 60px;
  }

  @media (max-width: 992px) {
    padding: 50px 30px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

// Logo Section
export const FooterLogo = styled.div`

  @media (max-width: 768px) {
    width: 220px;
    height: auto;
    margin-bottom: 20px;
  }
`;

// Contact Section
export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  // Target the specific span that contains "Contact"
  span:first-child {
    font-size: ${fontSizes.xlarge}; // Set the font size of the first span to medium
  }

  // Target other spans to maintain the default tiny font size
  span {
    font-size: ${fontSizes.medium}; // Ensure other spans maintain the tiny font size
  }

  @media (max-width: 992px) {
    align-items: center;
    text-align: center;
  }
`;

// Individual Contact Items
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

// Contact Icon
export const ContactIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${baseColors.blue};
  padding: 6px;
  color: ${baseColors.white}
`;

// Social Links Section
export const FooterSocial = styled.div`
  width: 204px;

  @media (max-width: 992px) {
    margin-top: 20px;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;

// Social Section Title
export const SocialTitle = styled.h3`
  margin-bottom: 20px;
  font-size: ${fontSizes.xlarge};
`;

// Social Icons Container
export const SocialIcons = styled.div`
  display: flex;
  gap: 28px;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

// Individual Social Icon
export const SocialIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${baseColors.blue};
  padding: 6px;
`;
