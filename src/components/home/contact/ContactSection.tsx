"use client";
import { Col, Container, Row } from '@/app/layoutGrid';
import { StyledButton } from '@/components/shared/Button/Button.styles';
import { SubContainer, Box, ResponsiveImage, HeroTitle } from './Contact.styled'; // Uncommented import for styled components
import younggirl from '../../../assets/images/young-smiling.png'; // Fixed variable name
import React from 'react';

function ContactSection() {
  return (
    <>
    <Container
      style={{
        background: 'linear-gradient(to left, #3365AA, #0E356D)', // Gradient from right to left
      }}
    >
      <Row>
      <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

          <SubContainer>
            <Box>
              <h3>Book Your Free</h3>
              <HeroTitle>TRIAL TODAY</HeroTitle>
            </Box>
            <Box>
              <StyledButton variant="accent" onClick={() => console.log("Button clicked!")}>
                Contact Us
              </StyledButton>
            </Box>
          </SubContainer>
        </Col>
        <Col xs={12} md={6}>
          <SubContainer>
          <ResponsiveImage // Use the styled component
              className="younggirl"
              src={younggirl.src}
              alt="youngirl"
            />
          </SubContainer>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default ContactSection;
