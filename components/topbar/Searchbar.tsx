import Image from "next/image";
import React from "react";

class Searchbar extends React.Component {
  render() {
    return (
      <div
        className="flex flex-row 2xl:w-[600px] xl:w-[500px] lg:w-[400px] w-[100%] sl:ml-[50px] h-[35px] sm:h-[40px]
       items-center sm:pl-[8px]"
      >
        <div className="w-full border-lightgray border-[1px] rounded-md h-full flex flex-row p-1 border-r-1 sm:border-r-0 sm:rounded-r-none items-center justify-center content-center">
          <div className={`relative h-[17px] w-[17px] ml-[4px] block sm:hidden`}>
            <Image
              alt="Szukaj produktow"
              layout="fill"
              objectFit="contain"
              placeholder="empty"
              src={"/icons/loupe.png"}
            ></Image>
          </div>
          <input
            type="text"
            className="w-full text-maingray focus:outline-none text-[15px] sm:text-[16px] pl-[10px] pr-[10px]"
            placeholder="Szukaj w ofercie..."
          />
        </div>

        <div className="relative h-full w-[70px] bg-main hidden sm:block">
          <div
            className={`relative h-full w-[25px] hidden sm:block self-center m-auto`}
          >
            <Image
              alt="Szukaj produktow"
              layout="fill"
              objectFit="contain"
              placeholder="empty"
              src={"/icons/loupe_white.png"}
            ></Image>
          </div>
        </div>
      </div>
    );
  }
}

export default Searchbar;
