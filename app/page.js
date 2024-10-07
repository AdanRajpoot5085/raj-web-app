import Image from "next/image";
import Nav from "./components/nav";
import Header from "./components/header";
// import Container from "./components/Layout";
import Carousel from './components/carousel/carousel';
import './components/carousel/carousel.css';  // Import the CSS
import Container2 from './components/container/container';
import Number from './components/numberDiv/index';
import Salery from './components/salerySection/index';
import Team from './components/team/team';
import Component from './components/3rdLastComponent/index';
import Hero from "./components/hero";
import Footer from "./components/footer";
import './output.css';

export default function Home() {
  return (
    <main className="" style={{maxWidth:"1440px" ,width:"100%" ,margin:"auto"}}>
      <Nav />
      <Header />
      {/* <Container /> */}
      <Carousel />
      <Container2 />
      <Number />
      <Salery />
      <Team />
      <Component />
      <Hero />
      <Footer />
    </main>
  );
}
