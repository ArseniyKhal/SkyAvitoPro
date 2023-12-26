import { styled, createGlobalStyle, keyframes } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: "StratosSkyeng";
	font-weight: 400;
	font-style: normal;
	font-display: swap;
	src: local("StratosSkyeng"), local("StratosSkyeng"),
		url("/fonts/StratosSkyeng.woff2") format("woff2"),
		url("/fonts/StratosSkyeng.woff") format("woff");
}
@font-face {
	font-family: "Roboto";
	font-weight: 400;
	font-style: normal;
	font-display: swap;
	src: local("Roboto-Regular"), local("Roboto-Regular"),
		url("/fonts/Roboto-Regular.woff2") format("woff2"),
		url("/fonts/Roboto-Regular.woff") format("woff"),
		url("/fonts/Roboto-Regular.ttf") format("ttf");
}
@font-face {
	font-family: "Roboto";
	font-weight: 500;
	font-style: normal;
	font-display: swap;
	src: local("Roboto-Medium"), local("Roboto-Medium"),
		url("/fonts/Roboto-Medium.woff2") format("woff2"),
		url("/fonts/Roboto-Medium.woff") format("woff"),
		url("/fonts/Roboto-Medium.ttf") format("ttf");
}
@font-face {
	font-family: "Roboto";
	font-weight: 700;
	font-style: normal;
	font-display: swap;
	src: local("Roboto-Bold"), local("Roboto-Bold"),
		url("/fonts/Roboto-Bold.woff2") format("woff2"),
		url("/fonts/Roboto-Bold.woff") format("woff"),
		url("/fonts/Roboto-Bold.ttf") format("ttf");
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
	font-family: 'Roboto', sans-serif;
	cursor: pointer;
	decoration: none;
	color: inherit;
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
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}

::-webkit-scrollbar {
	width: 6px;
  }
 ::-webkit-scrollbar-track {
	background: #FFF;

 }
 ::-webkit-scrollbar-thumb {
	background-color: #D9D9D9;
	border-radius: 10px;
 }

html, body {
	font-family: 'Roboto', sans-serif;
	color: #000;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
   user-select: none;
	scrollbar-width: thin;
	scrollbar-color:  #D9D9D9 #FFF;
}
`

export const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  padding-bottom: 40px;
`
export const Container = styled.div`
  max-width: 1190px;
  padding: 0 15px;
  margin: 0 auto;
`
export const Button = styled.button`
  color: #fff;
  height: 50px;
  background: var(--main-topic);
  border-radius: 6px;
  padding: 0 24px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.3s ease 0s;
  &:hover {
    background: var(--btn-hover);
  }
  &:disabled {
    background-color: var(--btn-disabled);
  }
  @media (width <= 600px) {
    height: 40px;
    font-size: 14px;
  }
`

const rotate = keyframes`
	0% { transform: rotate(0deg) scale(0.8) }
	50% { transform: rotate(360deg) scale(1.2) }
	100% { transform: rotate(720deg) scale(0.8) }
 `
const ball1 = keyframes`
 	0% {
	  box-shadow: 30px 0 0 #bcec30;
	}
	50% {
	  box-shadow: 0 0 0 #bcec30;
	  margin-bottom: 0;
	  transform: translate(15px, 15px);
	}
	100% {
	  box-shadow: 30px 0 0 #bcec30;
	  margin-bottom: 10px;
	}
 `
const ball2 = keyframes`
	0% {
	  box-shadow: 30px 0 0 #00c1ff;
	}
	50% {
	  box-shadow: 0 0 0 #00c1ff;
	  margin-top: -20px;
	  transform: translate(15px, 15px);
	}
	100% {
	  box-shadow: 30px 0 0 #00c1ff;
	  margin-top: 0;
	}
 `

export const Loader = styled.div`
  position: relative;
  top: 20vh;
  left: 50%;
  animation: ${rotate} 3s infinite;
  transform: translate(-50%, -50%);
  height: 50px;
  width: 50px;
  &::before,
  &::after {
    border-radius: 50%;
    content: '';
    display: block;
    height: 20px;
    width: 20px;
  }
  &::before {
    animation: ${ball1} 1s infinite;
    background-color: #00c1ff;
    box-shadow: 30px 0 0 #bcec30;
    margin-bottom: 10px;
  }
  &::after {
    animation: ${ball2} 1s infinite;
    background-color: #bcec30;
    box-shadow: 30px 0 0 #00c1ff;
  }
`
