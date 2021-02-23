import React from "react";

function Title(props) {
  return (
    <div>
      <h3>Title:</h3>
      <h1 className="appTitle"> {props.appTitle} </h1>
    </div>
  );
}

export default Title;
