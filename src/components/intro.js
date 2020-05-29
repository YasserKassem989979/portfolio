import React from "react"
import styled, { keyframes } from "styled-components"
import "typeface-source-sans-pro"

const IntroContainer = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  font-family: "Source Sans Pro", sans-serif;
  align-items: center;
  overflow-x:hidden;
`

// Create the keyframes
const translateLeft = keyframes`
0% {
    opacity:0;
    transform:  translate(-1500px,0px)  ;
  }
  60% {
    opacity:1;
    transform:  translate(30px,0px)  ;
  }
  80% {
    transform:  translate(-10px,0px)  ;
  }


  100% {
    opacity:1;
    transform:  translate(0px,0px)  ;
  }
`

// Create the keyframes
const translateRight = keyframes`
0% {
    opacity:0;
    transform:  translate(1500px,0px)  ;
  }
  60% {
    opacity:1;
    transform:  translate(-30px,0px)  ;
  }
  80% {
    transform:  translate(10px,0px)  ;
  }
  100% {
    opacity:1;
    transform:  translate(0px,0px)  ;
  }
`

const LeftLetter = styled.div`
  flex: 1;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${translateLeft} 0.8s ease-out;
`
const RightLetter = styled(LeftLetter)`
  animation: ${translateRight} 0.8s ease-out;
`

const Letter = styled.p`
  font-size: 300px;
  color: #fff;
  background: #000;
  margin: 0;
  padding: 0;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Intro = () => (
  <IntroContainer>
    <LeftLetter>
      <Letter>Y</Letter>
    </LeftLetter>
    <RightLetter>
      <Letter>K</Letter>
    </RightLetter>
  </IntroContainer>
)
