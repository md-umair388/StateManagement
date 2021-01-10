import React from "react";

const Button = (props) => {
  return <button onClick={props.action}>{props.buttonTitle}</button>;
};

export default Button;
