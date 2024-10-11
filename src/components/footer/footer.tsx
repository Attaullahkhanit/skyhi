"use client";
import React from "react";
import Image from "next/image";
import {
  FooterWrapper,
  FooterContainer,
  FooterLogo,
  FooterContact,
  ContactItem,
  ContactIcon,
  FooterSocial,
  SocialTitle,
  SocialIcons,
  SocialIcon,
} from "@/components/footer/Footer.styled";
import {
  faLinkedinIn,
  faTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo from "@/assets/images/logo2.png";
import { Container } from "@/app/layoutGrid";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Logo Section */}
        <FooterLogo>
          <Image
            src={logo}
            alt="SkyHiTech Academy Logo"
            width={170}
            height={85.51}
          />
        </FooterLogo>

        {/* Contact Section */}
        <FooterContact>
          <span>Contact</span>
          <ContactItem>
            <ContactIcon icon={faPhone} />
            <span>+64 22 177 0399</span>
          </ContactItem>
          <ContactItem>
            <ContactIcon icon={faEnvelope} />
            <span>hello@skyhitechacademy.co.nz</span>
          </ContactItem>
          <ContactItem>
            <ContactIcon icon={faMapMarkerAlt} />
            <span>Rockpool Road, Orewa</span>
          </ContactItem>
        </FooterContact>

        {/* Social Links Section */}
        <FooterSocial>
          <SocialTitle>Social Links</SocialTitle>
          <SocialIcons>
            <SocialIcon icon={faLinkedinIn} />
            <SocialIcon icon={faTwitter} />
            <SocialIcon icon={faInstagram} />
            <SocialIcon icon={faFacebookF} />
          </SocialIcons>
        </FooterSocial>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
