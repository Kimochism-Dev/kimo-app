import Image from "next/image";
import React from "react";

interface IAvatar {
  image: string;
}

const Avatar = ({ image }: IAvatar) => {
  return (
    <div className={`avatar`}>
      <Image src={image} fill alt="avatar" />
    </div>
  );
};

export default Avatar;
