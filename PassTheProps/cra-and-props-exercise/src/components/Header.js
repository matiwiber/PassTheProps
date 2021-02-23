import React from "react";
import logoFileFromSRC from "../logo.svg";
import Title from "./Title";
import Description from "./Description";

function Header(props) {
  return (
    <header className="App-header">
      {/* <img src={logoFileFromSRC} className="App-logo" alt="logo" /> */}
      <Title appTitle="React Best Test Ever"> </Title>
      <Description>
        Wubba luba dub dub yeaah pickle rick mother f@c#er!
      </Description>
    </header>
  );
}

export default Header;
