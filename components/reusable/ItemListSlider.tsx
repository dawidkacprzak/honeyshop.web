import Image from "next/image";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { randomInt } from "crypto";


const ItemListSlider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      spaceBetween={30}
      slidesPerView="auto"
    >
      {mockSlideItems(15)}
    </Swiper>

  );
};

const mockSlideItems = (count: number) => {
  let items: JSX.Element[] = [];
  for (let i: number = 0; i < count; i++) {
    items.push(
      <SwiperSlide
        key={i}
        className="hover:cursor-pointer flex flex-col hover:opacity-70  group-hover:underline group  !h-[270px] !w-[170px]"
      >
        <div className={`relative h-[150px] w-[150px]`}>
          <Image
            alt="Slider button"
            layout="fill"
            objectFit="contain"
            placeholder="empty"
            src={"https://picsum.photos/"+(600+Math.floor(i+Math.random() * 50))}
          ></Image>
        </div>
        <div>
          <p className="text-boldgray font-bold text-[15px] mt-[50px]">
            10,99 zł
          </p>
          <p className="text-maingray lg:text-[15px] group-hover:underline whitespace-nowrap overflow-hidden text-ellipsis break-words">
            Miód wielokwiatowy 200m434 34  3453  5345 435 34 l
          </p>
        </div>
      </SwiperSlide>
    );
  }
  return items;
};

export default ItemListSlider;
