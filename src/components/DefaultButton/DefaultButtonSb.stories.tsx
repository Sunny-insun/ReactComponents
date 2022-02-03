import React from "react";
import "../DefaultButton/defaultButton.scss";

type ButtonProps = {
  content: string,
};

const Button: React.FC<ButtonProps> = ({ content }) => {
  return <button className="default_button">{content}</button>;
};

export default Button;
