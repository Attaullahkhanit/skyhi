"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  PageContainer,
  Header,
  MainContent,
  BrainImage,
  ListContainer,
  ListItemPrimary,
  ListItemSecondary,
  OuterCircle,
  PinkDot,
  BlueDot,
  UnderlayTextLeft,
  UnderlayTextRight,
  BrainImageContainer,
} from "@/components/home/intro/IntroSection.styled";
import { ArrowLine, leftArrows, rightArrows } from "./ArrowLine.styled";

import brain_image from "@/assets/svg/brain_image.svg";
import introData from "@/assets/json/introData.json";
import { Container, Row } from "@/app/layoutGrid";
// import { Container } from "@/app/layoutGrid";

const IntroSection = () => {
  return (
    <>
    <Container>
      <Row>
    <PageContainer>
      <Header>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Child Can Excel At <span>Coding</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The "SERIOUSLY FUN" approach to teaching kids to code can be understood in terms of left and right brain stimulation, combining logical thinking with creativity. This approach aims to engage both hemispheres of the brain to create a well-rounded learning experience.
        </motion.p>
      </Header>
      <MainContent>
        <ListContainer $align="left">
          {/* <span className="list-title-left">SERIOUS</span> */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="list-item"
          >
            <ListItemPrimary>
              <span className="bulletin"></span>
              {introData.primaryItems[0]}
              <span className="mark">01</span>
            </ListItemPrimary>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="list-item"
          >
            <ListItemPrimary>
              <span className="bulletin"></span>

              {introData.primaryItems[1]}
              <span className="mark">02</span>
            </ListItemPrimary>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="list-item"
          >
            <ListItemPrimary>
              <span className="bulletin"></span>

              {introData.primaryItems[2]}
              <span className="mark">03</span>
            </ListItemPrimary>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="list-item"
          >
            <ListItemPrimary>
              <span className="bulletin"></span>

              {introData.primaryItems[3]}
              <span className="mark">04</span>
            </ListItemPrimary>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="list-item"
          >
            <ListItemPrimary>
              <span className="bulletin"></span>

              {introData.primaryItems[4]}
              <span className="mark">05</span>
            </ListItemPrimary>
          </motion.div>
        </ListContainer>

        <BrainImageContainer>
          <UnderlayTextLeft>SERIOUS</UnderlayTextLeft>
          <BrainImage>
            <img className="brain_image" src={brain_image.src} alt="Brain" />
            <OuterCircle>
              {/* Blue Dots */}
              <BlueDot className="blue-dot-1" />
              <BlueDot className="blue-dot-2" />
              <BlueDot className="blue-dot-3" />
              <BlueDot className="blue-dot-4" />
              <BlueDot className="blue-dot-5" />

              {/* Blue Arrow Lines */}
              <ArrowLine
                src={leftArrows[0]}
                alt="leftArrow1"
                top="5%"
                left="-2%"
                rotate="0deg"
              />
              <ArrowLine
                src={leftArrows[1]}
                alt="leftArrow2"
                top="30%"
                left="-18%"
                rotate="0deg"
              />
              <ArrowLine
                src={leftArrows[2]}
                alt="leftArrow3"
                top="50%"
                left="-30%"
                rotate="0deg"
              />
              <ArrowLine
                src={leftArrows[3]}
                alt="leftArrow4"
                top="70%"
                left="-18%"
                rotate="0deg"
              />
              <ArrowLine
                src={leftArrows[4]}
                alt="leftArrow5"
                top="92%"
                left="2%"
                rotate="0deg"
              />

              {/* Pink Dots */}
              <PinkDot className="pink-dot-1" />
              <PinkDot className="pink-dot-2" />
              <PinkDot className="pink-dot-3" />
              <PinkDot className="pink-dot-4" />
              <PinkDot className="pink-dot-5" />

              {/* Pink Arrow Lines */}
              <ArrowLine
                src={rightArrows[0]}
                alt="rightArrow1"
                top="5%"
                right="-2%"
                rotate="0deg"
              />
              <ArrowLine
                src={rightArrows[1]}
                alt="rightArrow2"
                top="30%"
                right="-18%"
                rotate="0deg"
              />
              <ArrowLine
                src={rightArrows[2]}
                alt="rightArrow3"
                top="50%"
                right="-30%"
                rotate="0deg"
              />
              <ArrowLine
                src={rightArrows[3]}
                alt="rightArrow4  "
                top="70%"
                right="-18%"
                rotate="0deg"
              />
              <ArrowLine
                src={rightArrows[4]}
                alt="rightArrow5"
                top="92%"
                right="2%"
                rotate="0deg"
              />
            </OuterCircle>
          </BrainImage>
          <UnderlayTextRight>FUN</UnderlayTextRight>
        </BrainImageContainer>

        <ListContainer $align="right">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="list-item"
          >
            {/* <span className="list-title-right">SERIOUS</span> */}

            <ListItemSecondary $right="2%">
              <span className="bulletin"></span>

              <span className="mark">01</span>
              {introData.secondaryItems[0]}
            </ListItemSecondary>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="list-item"
          >
            <ListItemSecondary $right="-25%">
              <span className="bulletin"></span>

              <span className="mark">02</span>
              {introData.secondaryItems[1]}
            </ListItemSecondary>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="list-item"
          >
            <ListItemSecondary $right="-42%">
              <span className="bulletin"></span>

              <span className="mark">03</span>
              {introData.secondaryItems[2]}
            </ListItemSecondary>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="list-item"
          >
            <ListItemSecondary $right="-25%">
              <span className="bulletin"></span>

              <span className="mark">04</span>
              {introData.secondaryItems[3]}
            </ListItemSecondary>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="list-item"
          >
            <ListItemSecondary $right="8%">
              <span className="bulletin"></span>

              <span className="mark">05</span>
              {introData.secondaryItems[4]}
            </ListItemSecondary>
          </motion.div>
        </ListContainer>
      </MainContent>
    </PageContainer>
    </Row>
    </Container>
    </>
  );
};

export default IntroSection;
