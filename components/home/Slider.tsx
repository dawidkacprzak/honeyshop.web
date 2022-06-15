import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Swiper
    modules={[Pagination, Navigation]}
    loop={true}
    navigation={true}
    pagination={true}
    spaceBetween={15}
    className="mt-0 lg:mt-[25px] rounded-none lg:rounded-2xl md:!h-[280px] lg:!h-[280px] xl:!h-[350px]"
    breakpoints={{
      0: {
        slidesPerView: 1,
      }
    }}
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
        className=" bg-main"
      >
      <img src="/slidemock.jpeg" className=" object-fill h-full w-full"/>
          
      </SwiperSlide>
    );
  }
  return items;
};


export default Slider;
