import styled, { createGlobalStyle } from "styled-components";
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
html,
body,
#root {
  margin: 0;
  padding: 0;
  overflow: hidden;
  outline: none;
  width: 100%;
  height: 100vh;
}

body {
  background: rgb(255, 255, 255);
  font-family: "Inter var", sans-serif;
  display: flex;
  justify-content: center;
}

h5 {
  position: absolute;
  top: 120px;
  left: 0;
  padding: 0;
  margin: 5px;
  font-size: 4em;
  color: white;
}

.picker {
  position: absolute !important;
  bottom: 0;
  left: 0;
  padding: 5px;
  background-color: white;
}

.content_1 {
  grid-column: span 2;
  background-position: bottom right;
  background-size: cover;
  box-shadow: 10px 5px 5px grey;
  position: relative;
}

.content_2 {
  grid-column: span 2;
  background-position: bottom;
  background-size: cover;
  box-shadow: 10px 5px 5px grey;
  position: relative;
}

.content_3 {
  grid-column: -2/ -1;
  grid-row: 1/ 3;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 10px 5px 5px grey;
  position: relative;
}

.content_4 {
  grid-column: span 1;
  grid-row: 2 / 4;
  background-color: white;
  box-shadow: 10px 5px 5px grey;
  position: relative;
  background-position: right;
}

.main_content {
  grid-column: span 3;
  grid-row: span 3;
  background-color: rgb(150, 149, 149);
  position: relative;
  box-shadow: 10px 5px 5px grey;
}

.main_content h1 {
  position: absolute;
  top: 0;
  left: 30%;
  color: rgb(46, 46, 46);
  text-decoration: underline;
}

.content_5 {
  grid-column: -2/ -1;
  grid-row: span 2;
  background-size: cover;
  background-position: left center;
  overflow: hidden;
  box-shadow: 10px 5px 5px grey;
  position: relative;
}

.content_6 {
  grid-column: 1/ 2;
  grid-row: span 2;
  background-position: top right;
  box-shadow: 10px 5px 5px grey;
  position: relative;
}

.content_7,
.content_8 {
  grid-column: span 2;
  grid-row: span 1;
  background-color: white;
  padding: 5px 20px;
  overflow: hidden;
  box-shadow: 10px 5px 5px grey;
  position: relative;
}

.content_img span {
  padding: 10px 12px;
  background-color: black;
  color: white;
  border-radius: 50%;
}

.content_7 img,
.content_8 img {
  width: 500px;
  margin-left: 50px;
}

.content_img {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.header {
  width: 100%;
  color: black;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.header h1 {
  font-size: 35px;
}
.header h2 {
  margin-top: 0;
  font-size: 35px;
  text-decoration-line: aquamarine;
}

.small_img {
  width: 380px;
  height: 220px;
  margin-left: 100px;
  border: 1px solid #d0e3e5;
  border-radius: 25px;
  padding: 0px 0px 25px 20px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
