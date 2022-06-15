import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import CategoryList from "../components/home/CategoryList";
import MainContainer from "../components/reusable/MainContainer";
import Topbar from "../components/topbar/Topbar";
import Slider from "../components/home/Slider";
import TitledSection from "../components/reusable/TitledSection";
import ItemListSlider from "../components/reusable/ItemListSlider";
import Footer from "../components/reusable/Footer";
import MenuMobile from "../components/reusable/MenuMobile";


const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Topbar />
      <MainContainer>
        <Slider/>
        <TitledSection title="Polecamy">
          <ItemListSlider/>
        </TitledSection>
        <TitledSection title="Najczęściej kupowane">
          <ItemListSlider/>
        </TitledSection>
      </MainContainer>
      <Footer/>
      <MenuMobile/>
    </React.Fragment>
  );
};

export default Home;
