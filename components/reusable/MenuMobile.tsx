import ButtonIcon from "../topbar/ButtonIcon";

const MenuMobile = () => {
  return (
    <div className=" border-t-[1px] border-lightgray fixed w-full bottom-0 left-0 h-[55px] md:h-[65px] bg-white shadow-lg lg:hidden z-50 flex flex-row items-center justify-between pl-[10px] pr-[10px] sm:pl-[40px] sm:pr-[40px]">
      <ButtonIcon mobile iconSrc="/icons/home_mobile.png" text="Strona główna" />
      <ButtonIcon mobile iconSrc="/icons/basket_mobile.png" text="Koszyk" />
      <ButtonIcon mobile iconSrc="/icons/user_mobile.png" text="Moje konto" />
    </div>
  );
};

export default MenuMobile;
