import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Arena from '../components/Arena/Arena';
import Teachers from '../components/Teachers/Teachers';
import Gastronomy from '../components/Gastronomy/Gastronomy';
import Location from '../components/Location/Location';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Arena />
        <Teachers />
        <Gastronomy />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
