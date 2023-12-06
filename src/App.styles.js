import { styled, createGlobalStyle, keyframes } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: "StratosSkyeng";
	src: local("StratosSkyeng"), local("StratosSkyeng"),
		url("/fonts/StratosSkyeng.woff2") format("woff2"),
		url("/fonts/StratosSkyeng.woff") format("woff");
	font-weight: 400;
	font-style: normal;
}
* {
	margin: 0;
	padding: 0;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	}
*:before,
*:after {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
a,
a:visited {
	text-decoration: none;
	font-family: "StratosSkyeng", sans-serif;
	cursor: pointer;
	color: #000;
}
ul li {
	list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-style: normal;
	font-weight: 400;
}
html, body {
	font-family: "StratosSkyeng", sans-serif;
	color: #000;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
  user-select: none;
}
`

export const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding-bottom: 20px;
`
export const Container = styled.div`
  max-width: 1190px;
  padding: 0 15px;
  margin: 0 auto;
`
export const ButtonPurple = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 278px;
  height: 52px;
  border-radius: 46px;
  background: var(--palette-purple-90);
  border: none;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  cursor: pointer;
  &:disabled {
    background-color: #303030;
  }
  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: var(--palette-purple-100);
  }
`
export const DarkBG = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  min-height: 100vh;
  background-color: var(--palette-purple-100);
  overflow: hidden;
`
const moveY = keyframes`
0% , 100% {top: 10%}
45% , 55% {top: 59%}
60% {top: 40%}	    
`
const rotate = keyframes`
0% { transform: translate(-50%, -100%) rotate(0deg) scale(1 , 1)}
 25%{ transform: translate(-50%, 0%) rotate(180deg) scale(1 , 1)}
 45% , 55%{ transform: translate(-50%, 100%) rotate(180deg) scale(3 , 0.5)}
 60%{ transform: translate(-50%, 100%) rotate(180deg) scale(1, 1)}
 75%{ transform: translate(-50%, 0%) rotate(270deg) scale(1 , 1)}
 100%{ transform: translate(-50%, -100%) rotate(360deg) scale(1 , 1)}	    
`
export const Loader = styled.div`
  position: relative;
  top: 10vh;
  left: calc(50% - 50px);
  width: 164px;
  height: 164px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: #00c1ff;
    left: 50%;
    top: 50%;
    animation: ${rotate} 1s ease-in infinite;
  }
  &::after {
    width: 20px;
    height: 20px;
    background-color: #bcec30;
    animation:
      ${rotate} 1s ease-in infinite,
      ${moveY} 1s ease-in infinite;
  }
`
