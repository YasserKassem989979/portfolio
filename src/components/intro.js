import React from "react"
import styled, { keyframes } from "styled-components"
import "typeface-source-sans-pro"
// Create the keyframes
const drawBox = keyframes`
0%{
  width:0px;
  height:0px;
  border:1px solid #000;
}
12.5%{
  width:300px;
  height:0px;
  border:5px solid #000;
}
25%{
  width:300px;
  height:300px;
  border:5px solid #000;
}

75%{
  width:300px;
  height:300px;
  border:5px solid #000;
}
87.5%{
  width:300px;
  height:0px;
  border:5px solid #000;
}
100%{
  width:0px;
  height:0px;
  border:1px solid #000;
}
`
const changeLetter = keyframes`
0%{
  content:"Y";
}
12.5%{
  content:"Y";
  font-size:300px;
}
25%{
  content:"Y";
  font-size:300px;
}
37%{
  content:"Y";
}
37.5%{
  content:"K";
  font-size:0px;
}
50%{
  content:"K";
  font-size:300px;
}
62.5%{
  content:"K";
  font-size:300px;
}
75%{
  content:"K";
  font-size:0px;
}
`

// create JSX elemets used Styled Components
const IntroContainer = styled.div`
height: 100vh;
width: 100%;
margin: 0;
padding: 0;
overflow:hidden;
font-family: "Source Sans Pro", sans-serif;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
overflow: hidden;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
`

const LeftLetter = styled.div`
-webkit-box-flex: 1;
-ms-flex: 1;
flex: 1;
height: 50%;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
  align-items: center;
`

const LetterBox = styled.div`
height: 0px;
width: 0px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
position: absolute;
-webkit-transform: translateZ(0);
-moz-transform: translateZ(0);
-ms-transform: translateZ(0);
-o-transform: translateZ(0);
transform: translateZ(0);
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
color: #000;
border: none;
-webkit-animation: ${drawBox} 4s;
animation: ${drawBox} 4s;
`

const Letter = styled.p`
font-size:0px;
margin: 0;
padding: 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
&:after {
  content: "";
  -webkit-animation: ${changeLetter} 3s 1s ease-in-out;
   animation: ${changeLetter} 3s 1s ease-in-out;
}
`

export const Intro = () => {
  return (
    <IntroContainer id="intro-container">
      <LeftLetter>
        <LetterBox id="intro-letter-box">
          <Letter>Y</Letter>
        </LetterBox>
      </LeftLetter>
    </IntroContainer>
  )
}
