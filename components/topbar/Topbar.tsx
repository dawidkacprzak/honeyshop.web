import HeaderLabelStick from "./HeaderLabelStick";
import React from "react";
import Image from "next/image";
import Searchbar from "./Searchbar";
import ButtonIcon from "./ButtonIcon";
import CategoryList from "../home/CategoryList";

const Topbar = () => {
  return (
    <div className="bg-white w-full lg:h-[190px] justify-center flex flex-col md:drop-shadow-md drop-shadow-none ">
      <HeaderLabelStick />
      <div className="lg:h-[80px] flex flex-row justify-center shadow-md ">
        <div className="pl-[10px] sm:pl-[15px] pr-[15px]  lg:pl-0 lg:pr-0 m-0 2xl:w-2xlwidth 
        xl:w-xlwidth lg:w-lgwidth w-mobilewidth flex flex-col sm:flex-row sm:justify-between pb-[10px] pt-[10px] content-center">
          <div className="flex items-center sm:justify-start justify-center sm:w-[250px] mb-[10px] sm:mb-0">
            <div className="relative h-[45px] w-[45px] sm:h-[55px] sm:w-[55px]  mr-[10px] lg:mr-[20px]">
              <Image
                alt="Logo"
                placeholder="empty"
                layout="fill"
                objectFit="cover"
                src={"/icons/logo.png"}
              ></Image>
            </div>
            <div className="lg:flex lg:flex-col text-main text-[17px] leading-[16px] sm:leading-[22px]  sm:text-[20px] lg:text-[21px] uppercase lg:leading-[30px] font-logo">
              <div>Pasieka</div>
              <div>Baryłka miodu</div>
            </div>
          </div>
          <div className="flex items-center flex-1 lg:flex-none sm:pl-0">
            <Searchbar />
          </div>
          <div className="lg:flex lg:flex-row lg:justify-end lg:items-center 2xl:w-[250px] lg:w-[200px] hidden">
              <ButtonIcon className="lg:mr-[35px]" iconSrc="/icons/basket.png" text="Koszyk"/>
              <ButtonIcon iconSrc="/icons/user.png" text="Moje konto"/>
          </div>
        </div>
      </div>
      <span>
      <CategoryList />
      </span>
    </div>
  );
};

export default Topbar;
