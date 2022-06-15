import React from "react";

interface IProps {
    children?: React.ReactNode
}

const MainContainer = ({children} : IProps) => {
  return (
    <div className="lg:w-full flex flex-col items-center">
      <div className="2xl:w-2xlwidth xl:w-xlwidth lg:w-lgwidth w-mobilewidth">{children}</div>
    </div>
  );
};

export default MainContainer;
