import Header from "./components/Header";
import Hero from "./components/Hero";
import Image from "next/image";
import MainUrlDiv from "./components/MainUrlDiv";
import Statistics from "./components/Statistics";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MainUrlDiv />
      <Statistics />
    </>
  );
}
