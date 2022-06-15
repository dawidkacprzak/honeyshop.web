import React from "react";
import FooterLinkSection from "./footer/FooterLinkSection";
import FooterSocialMediaSection from "./footer/FooterSocialMediaSection";

const Footer = () => {
  return (
    <div className="w-full mt-[50px] flex flex-col items-center mb-[120px] lg:mb-[50px]">
      <div className="2xl:w-2xlwidth xl:w-xlwidth lg:w-lgwidth w-mobilewidth border-t-[1px] pl-[50px] pr-[50px] xl:pl-[100px] xl:pr-[100px] border-lightgray pt-[50px] flex flex-col lg:flex-row justify-between">
        <div className="flex flex-row lg:justify-start justify-between">
          <FooterLinkSection
            header="Tytul 1"
            links={[
              { text: "text", url: "https://test.pl" },
              { text: "text", url: "https://test.pl" },
              { text: "text", url: "https://test.pl" },
            ]}
          />
          <FooterLinkSection
            header="Tytul 1"
            links={[
              { text: "text", url: "https://test.pl" },
              { text: "text", url: "https://test.pl" },
              { text: "text", url: "https://test.pl" },
            ]}
          />
          <FooterLinkSection
            header="Tytul 1"
            links={[
              { text: "text", url: "https://test.pl" },
              { text: "text", url: "https://test.pl" },
              { text: "text", url: "https://test.pl" },
            ]}
          />
          <FooterLinkSection
            header="Tytul 1"
            links={[
              { text: "text", url: "https://test.pl" },
              { text: "text", url: "https://test.pl" },
              { text: "text", url: "https://test.pl" },
            ]}
          />
        </div>
        <FooterSocialMediaSection header="Social Media"/>
      </div>
    </div>
  );
};

export default Footer;
