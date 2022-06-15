import Image from "next/image";
import React from "react";

interface IProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  text?: string;
  smallMobile?: boolean
}

const CategoryButton = ({ onClick, text,smallMobile }: IProps) => {
  return (
    <div
      onClick={onClick}
      className={`${smallMobile ? "justify-center ml-[5px]" : ""} text-[15px] sm:text-[16px] hover:cursor-pointer flex flex-row items-center
       ${smallMobile == true ? "border-[1px] border-[lightgray] text-lightgraytext rounded-md  p-[10px]" : ""}`}
    >
      <div className={`${smallMobile ? "h-[25px] w-[25px] md:h-[30px] md:w-[30px] " : " h-[25px] w-[25px] "} relative mr-[10px]`}>
        <Image
          alt="Button icon"
          layout="fill"
          objectFit="cover"
          placeholder="empty"
          src={`/icons/categories.png`}
        ></Image>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default CategoryButton;
