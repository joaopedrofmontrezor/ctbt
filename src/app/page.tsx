import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Arena from "../components/Arena/Arena";
import Plans from "../components/Plans/Plans";
import Teachers from "../components/Teachers/Teachers";
import Gastronomy from "../components/Gastronomy/Gastronomy";
import Location from "../components/Location/Location";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Arena />
        <Plans />
        <Teachers />
        <Gastronomy />
        <Location />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}
