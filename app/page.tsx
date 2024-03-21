import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainUrlDiv from "./components/MainUrlDiv";
import Statistics from "./components/Statistics";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MainUrlDiv />
      <Statistics />
      <BoostLinks />
      <Footer />
    </>
  );
}
