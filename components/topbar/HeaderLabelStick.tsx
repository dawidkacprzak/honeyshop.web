import Image from "next/image";
import React from "react";

const HeaderLabelStick = () => {
  return (
    <div className="bg-main lg:w-full lg:h-[50px] justify-center lg:flex hidden">
      <div className="m-0 lg:pt-[5px] lg:pb-[5px] 2xl:w-2xlwidth  xl:w-xlwidth lg:w-lgwidth flex flex-row justify-between">
        <div className="lg:flex lg:items-center">
          <div className="lg:h-[40px] lg:w-[40px] relative lg:mr-[10px]">
            <Image
              alt="Darmowa dostawa od określonej kwoty"
              layout="fill"
              placeholder="empty"
              objectFit="cover"
              src={"/icons/delivery.png"}
            ></Image>
          </div>
          <div className="lg:text-[17px] lg:font-bold lg:flex lg:items-center lg:justify-center lg:text-white">
            Darmowa dostawa od 99zł
          </div>
        </div>
        <div className="lg:flex lg:items-center">
          <div className="lg:h-[40px] lg:w-[40px] relative lg:mr-[10px]">
            <Image
              alt="Kontakt"
              placeholder="empty"
              layout="fill"
              objectFit="cover"
              src={"/icons/contact.png"}
            ></Image>
          </div>
          <div className="lg:flex lg:flex-col lg:text-white lg:text-[17px] lg:leading-[22px]">
              <div>loremipsum@mail.com</div>
              <div>+48 532 313 010</div>
          </div>
          <div className="lg:h-[40px] lg:w-[40px] relative lg:mr-[10px] lg:ml-[40px]">
            <Image
              alt="Instagram"
              placeholder="empty"
              layout="fill"
              objectFit="cover"
              src={"/icons/instagram.png"}
            ></Image>
          </div>
          <div className="lg:h-[40px] lg:w-[40px] relative lg:mr-[10px]">
            <Image
              alt="Facebook"
              placeholder="empty"
              layout="fill"
              objectFit="cover"
              src={"/icons/fb.png"}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLabelStick;
