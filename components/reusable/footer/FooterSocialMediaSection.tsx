import Image from "next/image";

interface IProps {
  header: string;
}

const FooterSocialMediaSection = ({ header }: IProps) => {
  return (
    <div className="text-maingray lg:flex lg:flex-col lg:w-[300px] lg:leading-[16px] flex flex-col justify-center content-center">
      <p className="mb-[30px] text-[16px] hidden lg:block">{header}</p>
      <div className="flex flex-col text-[14px]  justify-center content-center text-center  lg:justify-start lg:content-start lg:text-left">
        <p className="text-[16px] lg:text-[14px] mt-[35px] lg:mt-0">Znajdziesz nas na Facebooku i Instagramie</p>
        <div className="flex flex-row  mt-[15px] justify-center content-center text-center lg:justify-start lg:content-start lg:text-left">
          <div className={`relative w-[35px] h-[35px] mr-[15px] `}>
            <Image
              alt="Slider button"
              layout="fill"
              objectFit="contain"
              placeholder="empty"
              src={"/icons/fb.png"}
            ></Image>
          </div>
          <div className={`relative w-[35px] h-[35px] mr-[15px]`}>
            <Image
              alt="Slider button"
              layout="fill"
              placeholder="empty"
              objectFit="contain"
              src={"/icons/instagram.png"}
            ></Image>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col mt-[25px] text-[14px] justify-center content-center text-center lg:justify-start lg:content-start lg:text-left">
        <p  className="text-[16px] lg:text-[14px]">Kontakt do nas</p>
        <div className="flex flex-row mt-[15px] justify-center content-center text-center lg:justify-start lg:content-start lg:text-left">
          <div className={`relative w-[35px] h-[35px] mr-[15px]`}>
            <Image
              alt="Slider button"
              layout="fill"
              objectFit="contain"
              src={"/icons/contact.png"}
              placeholder="empty"
            ></Image>
          </div>
          <div className={``}>
            <p>loremipsum@gmail.com</p>
            <p>+48 532 313 010</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSocialMediaSection;
