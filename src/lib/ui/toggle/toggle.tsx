import React from "react";

interface IToggle {
  checked: boolean;
}

const Toggle = ({ checked }: IToggle) => {
  return <input className="toggle" type="checkbox" defaultChecked={checked} />;
};

export default Toggle;
