import React, { ReactNode } from "react";

interface IFlex {
  children?: ReactNode;
  wrap?: boolean;
  full?: boolean;
  column?: boolean;
  columnReverse?: boolean;
  row?: boolean;
  rowReverse?: boolean;
  justifyCenter?: boolean;
  justifyStart?: boolean;
  justifyEnd?: boolean;
  alignCenter?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
  outline?: boolean;
  padding?: string;
  gap?: string;
}

const Flex = ({
  children,
  wrap = true,
  full = false,
  column,
  columnReverse,
  row,
  rowReverse,
  justifyCenter,
  justifyStart,
  justifyEnd,
  alignCenter,
  alignEnd,
  alignStart,
  outline = true,
  padding = "p-1",
  gap = "g-1",
}: IFlex) => {
  return (
    <div
      className={`
      flex
    ${column ? "column" : ""} 
    ${columnReverse ? "column-reverse" : ""} 
    ${row ? "row" : ""} 
    ${rowReverse ? "row-reverse" : ""} 
    ${justifyCenter ? "justify-center" : ""} 
    ${justifyStart ? "justify-start" : ""} 
    ${justifyEnd ? "justify-end" : ""} 
    ${alignCenter ? "align-center" : ""} 
    ${alignEnd ? "align-end" : ""} 
    ${alignStart ? "align-start" : ""} 
    ${outline ? "outline" : ""} 
    ${full ? "full" : ""} 
    ${wrap ? "wrap" : ""} 
    ${padding} 
    ${gap} 
    `}
    >
      {children}
    </div>
  );
};

export default Flex;
