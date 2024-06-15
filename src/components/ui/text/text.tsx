import React from "react";

interface IText {
  link?: boolean,
  href?: string,
  text: string
}

const Text = ({ text, link = false, href }: IText) => {
  return (
    link 
    ?
    <a href={href} className="link">
      <label className="text">
        {text}
      </label>
    </a>
    : 
    <label className="text">
      {text}
    </label>
  );
};

export default Text;
