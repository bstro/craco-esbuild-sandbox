import React from "react";
import styled, { css } from "styled-components";
import * as supportedIcons from "./supportedIcons";
import "./App.css";

const iconCSS = css`
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  user-select: none;
`;

const styleIcon = (icon) => styled(icon)`
  ${iconCSS};
`;

const GenerateStyledIcons = (styledIcons, name) => {
  styledIcons[name] = styleIcon(supportedIcons[name]);
  return styledIcons;
};

const StyledSupportedIcons = Object.keys(supportedIcons).reduce(
  GenerateStyledIcons,
  {}
);

export const getIcon = (name) => StyledSupportedIcons[name];

const MySvg = styled(getIcon("Login"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MySvg />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
