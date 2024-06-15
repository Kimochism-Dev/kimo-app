import React from "react";

interface IInput {
  placeholder?: string;
}

const Input = ({ placeholder }: IInput) => {
  return <input type="text" placeholder={placeholder || ''} />;
};

export default Input;
