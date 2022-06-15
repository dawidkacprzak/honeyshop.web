import { useEffect, useState } from "react";
import CategoryButton from "./category/CategoryButton";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const CategoryList = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <div className="hidden lg:block w-mobilewidthbg-topbar h-[65px] bg-topbar">
        <div className="flex flex-row justify-between 2xl:w-2xlwidth xl:w-xlwidth lg:w-lgwidth w-mobilewidth h-[65px] m-auto">
          <CategoryButton text="Kategoria A" />
          <CategoryButton text="Kategoria B" />
          <CategoryButton text="Kategoria C" />
          <CategoryButton text="Kategoria D" />
          <CategoryButton text="Kategoria E" />
        </div>
      </div>

      <div className="w-full lg:hidden mt-[10px] mb-[10px] lg:mt-[20px] lg:mb-[20px] category_swiper">
        <Swiper
          modules={[Pagination]}
          loop={true}
          spaceBetween={7}
          slidesPerView="auto"
        >
          <SwiperSlide>
            <CategoryButton smallMobile text="Kategoria A" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryButton smallMobile text="Kategoria B" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryButton smallMobile text="Kategoria C" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryButton smallMobile text="Kategoria D" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryButton smallMobile text="Kategoria E" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryButton smallMobile text="Kategoria F" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryButton smallMobile text="Kategoria G" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryButton smallMobile text="Kategoria H" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CategoryList;
