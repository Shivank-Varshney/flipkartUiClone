import React from "react";
import Info from "../Components/Info";
import HeaderMenu from "../Components/HeaderMenu";
import Carousel from "../Components/Carousel";
import Deals from "../Components/Deals";
import Ads from "../Components/Ads";

function Dashboard() {
  return (
    <>
      <HeaderMenu />
      <Carousel />
      <Deals />
      <Ads />
      <Deals />
      <Deals />
      <Deals />
      <Deals />
      <Info />
    </>
  );
}

export default Dashboard;
