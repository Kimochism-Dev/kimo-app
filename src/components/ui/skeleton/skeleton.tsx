"use client";

import React, { useEffect } from "react";

interface ISkeleton {
  avatar: boolean;
  lines: boolean;
  linesQuant: number;
  cards: boolean;
  cardsQuant: number;
  outline?: string;
  directionContainer?: string;
  directionBody?: string;
}

const Skeleton = ({
  avatar,
  lines,
  linesQuant,
  cards,
  cardsQuant,
  outline = "outline",
  directionContainer = "column",
  directionBody = "column",
}: ISkeleton) => {
  const linesQuantMap = Array.from(
    { length: linesQuant },
    (_, index) => `${index}`
  );
  const cardsQuantMap = Array.from(
    { length: cardsQuant },
    (_, index) => `${index}`
  );
  return (
    <div className={`skeleton-container ${directionContainer} ${outline}`}>
      {avatar && (
        <div className="loading skeleton-side-l">
          <div className="loading skeleton-avatar" />
        </div>
      )}
      <div className={`loading skeleton-side-r ${directionBody}`}>
        {lines &&
          linesQuantMap.length != 0 &&
          linesQuantMap.map((index: string) => {
            return <div className="loading skeleton-line" key={index}></div>;
          })}
        {cards &&
          cardsQuantMap.length != 0 &&
          cardsQuantMap.map((index: string) => {
            return <div className="loading skeleton-card" key={index}></div>;
          })}
      </div>
    </div>
  );
};

export default Skeleton;
