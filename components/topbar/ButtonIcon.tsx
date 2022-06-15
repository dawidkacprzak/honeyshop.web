import Image from "next/image";
import React from "react";

interface IRequiredProps {
    iconSrc: string;
    text: string;
    onClick?: void;
    className? : string;
    mobile? : boolean
  }

class ButtonIcon extends React.Component<IRequiredProps> {
  render() {
    return (
      <div className={`${this.props.className}  hover:cursor-pointer flex flex-col h-[50px] md:h-[65px] items-center justify-center text-center lg:pl-0 lg:pr-0 pl-[15px] pr-[15px] sm:pl-[40px] sm:pr-[40px]`}>
        <div className="md:h-[30px] relative md:w-[30px] lg:h-[35px] lg:w-[35px] h-[20px] w-[20px]">
          <Image
            alt="Button icon"
            layout="fill"
            objectFit="cover"
            placeholder="empty"
            src={`${this.props.iconSrc}`}
          ></Image>
        </div>
        <div className={`${this.props.mobile ? "text-gray" : "text-main"} text-[13px] md-text[14px] lg:leading-[14px] lg:mt-[3px] `}>{this.props.text}</div>
      </div>
    );
  }
}

export default ButtonIcon;
