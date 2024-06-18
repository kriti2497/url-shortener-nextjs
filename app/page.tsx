import BoostLinks from "@/components/BoostLinks";
import Hero from "@/components/Hero";
import MainUrlDiv from "@/components/MainUrlDiv";
import React from "react";
import Statistics from "@/components/Statistics";

const Home = () => {
  return (
    <div>
      <Hero />
      <MainUrlDiv />
      <Statistics />
      <BoostLinks />
    </div>
  );
};

export default Home;
