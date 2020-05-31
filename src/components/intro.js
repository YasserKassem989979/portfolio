import React, { useEffect } from "react"
import styled, { keyframes } from "styled-components"
import "typeface-source-sans-pro"

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
    opacity:1;
    transform:  translate(-10px,0px)  ;
  }

  100% {
    opacity:1;
    transform:  translate(0px,0px)  ;
  }
`
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
    opacity:1;
    transform:  translate(10px,0px)  ;
  }
  100% {
    opacity:1;
    transform:  translate(0px,0px);
  }
`

const scaleAnimation = keyframes`
0% {
  opacity:1;
  transform:  scaleX(1.00) scaleY(1.00) ;
}
25% {
  opacity:1;
  transform:  scaleX(0.95) scaleY(0.95) ;
}
50% {
  opacity:1;
  transform:  scaleX(100) scaleY(100) ;
}
100% {
  opacity:1;
  transform:  scaleX(999.9) scaleY(999.9) 
}
`

const backgroundAnimation = keyframes`
0% {
  background:#000;
  border:none;
  color:#fff
}
25%{
  background:#fff;
  border:5px solid #000;
  color:#000
}
50% {
  background:#000;
  border:none;
  color:#fff
}
75% {
  background:#fff;
  border:5px solid #000;
  color:#000 
}
100% {
  background:#fff;
  border:5px solid #000;
  color:#000 
}
`

// create JSX elemets used Styled Components
const IntroContainer = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Source Sans Pro", sans-serif;
  align-items: center;
  overflow: hidden;
  display: flex;
`

const LeftLetter = styled.div`
  flex: 1;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${translateLeft} 1s ease, ${scaleAnimation} 0.45s linear 2.125s;
`
const RightLetter = styled(LeftLetter)`
  animation: ${translateRight} 1s ease, ${scaleAnimation} 0.45s linear 2.125s;
`

const LetterBox = styled.div`
  height: 300px;
  width: 300px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  animation: ${backgroundAnimation} 1.5s ease-in-out 1s;
  @media (max-width: 768px) {
    height: 150px;
    width: 150px;
  }
`

const Letter = styled.p`
  font-size: 300px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    font-size: 150px;
  }
`

export const Intro = () => {
  // life cycle
  useEffect(() => {
    // get intro container element to hide after animation finished
    const introContainer = document.getElementById("intro-container")
    // add listener to check the animation is end
    const introBox = document.getElementById("intro-letter-box")
    introBox.addEventListener(
      "animationend",
      () => {
        // change the display properity to none 'hide'
        introContainer.style.display = "none"
      },
      false
    )

    // remove listener
    return () => introBox.removeEventListener("animationend",introBox)
  })

  return (
    <IntroContainer id="intro-container">
      <LeftLetter>
        <LetterBox id="intro-letter-box">
          <Letter>Y</Letter>
        </LetterBox>
      </LeftLetter>
      <RightLetter>
        <LetterBox>
          <Letter>K</Letter>
        </LetterBox>
      </RightLetter>
    </IntroContainer>
  )
}
