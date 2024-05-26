"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { RiWhatsappLine } from "react-icons/ri";
import Navbar from "./components/Navbar";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
export default function Home() {
  return (
    <>
      <header className="bg-white h-[10vh] flex justify-center relative">
        {/* <nav className="w-full flex justify-center items-center">
          <ul className="text-primary flex gap-4 text-xl justify-center items-center">
            <li>LOGO</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </nav> */}
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <a
          href="https://wa.link/2ybboi"
          className="fixed bottom-4 right-4 z-10 text-white w-12 h-12 sm:w-24 sm:h-24 md:w-auto bg-[#27d045] rounded-full flex items-center md:h-auto md:px-4 md:py-2 md:gap-1"
        >
          <p className="hidden md:inline font-bold">Chatea con nosotros</p>
          <RiWhatsappLine className="w-full h-full p-2 md:w-12 " />
        </a>
        <div
          id="home"
          className="min-h-[90vh] flex justify-center items-center bg-[url('/imgs/home-bg.jpg')] bg-cover p-4 w-full"
        >
          <Fade className="w-full">
            <section className="flex flex-col gap-2.5 text-white w-full max-w-[32rem] lg:mx-28">
              <h1 className="text-4xl font-medium">Global Food Business</h1>
              <p className="text-xl">
                We deliver world-class products from experienced manufacturers
                with a global reach.
              </p>
              <a
                className="rounded-lg bg-white text-primary p-3 text-center text-2xl md:max-w-[298px]"
                href="#about"
              >
                Learn More
              </a>
            </section>
          </Fade>
        </div>
        <div
          id="about"
          className="flex flex-col lg:flex-row min-h-screen bg-white px-4 lg:mx-28 lg:gap-12 lg:min-h-screen py-12 lg:items-center" 
        >
          <section className="flex flex-col gap-3 py-4 lg:flex-1">
            <h3 className="font-bold text-primary text-2xl">ABOUT US</h3>
            <h2 className="font-semibold text-primary text-xl">
              Experts in international food trade
            </h2>
            <p className="relative before:content-[''] before:flex before:w-8 before:h-1 before:bg-primary after:content-[''] after:flex after:h-1 after:w-calc before:left-0 after:right-0 before:top-0 after:top-0 after:bg-primary/50 before:absolute after:absolute pt-3 text-xl">
              We are an agri-food trade company with over 25 years of
              experience. Founded by <strong>Gonzalo López</strong>, an
              international trade expert with a global network of contacts.
            </p>
            <div className="flex flex-col -gap-4 relative min-h-[420px] mt-8">
              <Fade>
                <div
                  className="w-full h-[300px] sm:h-[450px] rounded-lg bg-cover bg-center bg-[url('/imgs/about-us-2.jpg')]"
                  width="100"
                  height="100"
                  alt="about-us-image"
                ></div>
              </Fade>
            </div>
          </section>
          <section className="py-4 flex-col gap-3 inline-flex lg:flex-1">
            <h4 className="text-primaryfont-black inline-flex flex-col text-3xl">
              +25 YEARS
              <span className="text-primaryfont-light tracking-[8.28px] text-xl">
                of experiencie
              </span>
            </h4>
            <div className="flex flex-col gap-3 relative">
              <p className="relative before:content-[''] before:flex before:w-8 before:h-1 before:bg-primary after:content-[''] after:flex after:h-1 after:w-calc before:left-0 after:right-0 before:top-0 after:top-0 after:bg-primary/50 before:absolute after:absolute pt-3 text-xl">
                <strong>Our mission</strong> is to assist and advise companies
                that want to expand their businesses in international markets,
                offering them comprehensive and customized solutions. We
                specialize in the area of legumes, dried fruits and other
                products of high quality and demand.
              </p>
              <p className="relative before:content-[''] before:flex before:w-8 before:h-1 before:bg-primary after:content-[''] after:flex after:h-1 after:w-calc before:left-0 after:right-0 before:top-0 after:top-0 after:bg-primary/50 before:absolute after:absolute pt-3 text-xl">
                <strong>Our vision</strong> is to be a leader in the sector of
                international trade of legumes, creating added value for our
                clients and suppliers, and contributing to the economic and
                social development of the communities where we operate.
              </p>
              <p className="relative before:content-[''] before:flex before:w-8 before:h-1 before:bg-primary after:content-[''] after:flex after:h-1 after:w-calc before:left-0 after:right-0 before:top-0 after:top-0 after:bg-primary/50 before:absolute after:absolute pt-3 text-xl">
                <strong>Our values</strong> are trust, transparency, innovation,
                responsibility and excellence. These principles guide our daily
                work and allow us to establish lasting and satisfying
                relationships with our clients and suppliers.
              </p>
            </div>
          </section>
        </div>
        <div
          id="products"
          className="text-white flex flex-col justify-center items-center w-full py-12 lg:px-28 lg:min-h-screen lg:justify-between"
        >
          <section className="text-white flex flex-col w-full p-4 gap-2.5">
            <h3 className="font-bold text-primary text-2xl">PRODUCTS</h3>
            <h2 className="font-semibold text-primary text-xl">
              We work directly with Oilseeds
            </h2>
          </section>
          <div className="flex flex-wrap justify-center items-center p-4 w-full gap-4 sm:gap-8">
            <Fade cascade damping={0.1} className="max-w-[28rem] flex-1">
              <div className="relative grid h-[20rem] w-full max-w-[28rem] flex-col sm:flex-1 items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/imgs/poroto.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    Beans
                  </h2>
                </div>
              </div>
              <div className="relative grid h-[20rem] w-full max-w-[28rem] flex-col sm:flex-1 items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/imgs/arveja.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    Peas
                  </h2>
                </div>
              </div>
              <div className="relative grid h-[20rem] w-full max-w-[28rem] flex-col sm:flex-1 items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/imgs/maiz.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    Corn
                  </h2>
                </div>
              </div>
            </Fade>
          </div>
            <section className="w-full flex flex-col gap-2.5 justify-center items-center text-center p-4 my-4">
              <h4 className="text-primary text-3xl">Want to see more?</h4>
              <p className="text-primary text-xl">
               We have more than 40.000 products
              </p>
              <a
                className="bg-primary p-4 rounded-lg px-16 text-2xl w-full md:max-w-[380px]"
                href="/global-food-bussiness-catalogue.pdf"
                download
              >
                See our catalog
              </a>
            </section>
        </div>
        <section
          id="porque-nosotros"
          className="p-4 flex flex-col w-full gap-2.5 pt-12 lg:px-32 lg:py-12"
        >
          <h3 className="font-bold text-primary text-2xl">WHY CHOOSE US</h3>
          <h2 className="font-semibold text-primary text-xl">
            Experts in international food trade
          </h2>
          <Fade cascade >
            <div className="w-full justify-center items-center flex flex-wrap gap-4 py-8">
              <div className="w-[232px] p-8 rounded-xl shadow-md flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-black text-base font-medium font-['Mona Sans']">
                  Best quality trading services
                </div>
              </div>
              <div className="w-[232px] p-8 rounded-xl shadow-md flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-black text-base font-medium font-['Mona Sans']">
                  Reliable & Trusted Services
                </div>
              </div>
              <div className="w-[232px] p-8 rounded-xl shadow-md flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-black text-base font-medium font-['Mona Sans']">
                  Exceptional & High Quality standards
                </div>
              </div>
            </div>
          </Fade>
        </section>
        <div
          id="founder"
          className="p-4 flex flex-col sm:flex-row gap-4 w-full pb-28 lg:px-32 lg:justify-between"
        >
          <section className="flex flex-wrap w-full gap-4 lg:max-w-[50%]">
            <div className="flex flex-col gap-4">
              <img className="w-8" src="/imgs/comilla.png" alt="comilla" />
              <h2 className="text-3xl">
                In international trade, trust and quality are our most valuable
                harvest.
              </h2>
            </div>
            <p className="text-primary/50 self-end">
              Gonzalo Lopez - Founder at Global Food Business
            </p>
          </section>
          <Fade>
            <img
              className="rounded-lg max-w-[408px] w-full"
              src="/imgs/founder.jpg"
              alt="Gonzalo Lopez - Fundador"
            />
          </Fade>
        </div>
      </main>
      <footer className="w-full min-h-[591px] px-4 py-8 bg-primary justify-center items-center inline-flex flex-col lg:px-32">
        <div className="w-full min-h-[220px] justify-between items-start inline-flex flex-col flex-wrap gap-12 sm:flex-row">
          <div className="flex-col justify-start items-start gap-8 inline-flex lg:max-w-[346px]">
            <div className="text-white text-2xl font-semibold">
              Global Food Business
            </div>
            <div className="w-full text-white text-md font-normal md:max-w-[50%] lg:max-w-full">
              Global Food Business is a leading supplier and exporter of agro
              products and extracts
            </div>
            <div className="text-white text-md font-normal">
            sales@foodproducts.com.ar            
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-8 inline-flex">
            <div className="text-white text-2xl font-semibold">Company</div>
            <div className="text-white text-md font-medium">
              <ScrollLink
                className="text-white"
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </ScrollLink>
            </div>
            <div className="text-white text-md font-medium">
              <ScrollLink
                className="text-white"
                to="about"
                smooth={true}
                duration={500}
              >
                About Us
              </ScrollLink>
            </div>
            <div className="text-white text-md font-medium">
              <ScrollLink
                className="text-white"
                to="products"
                smooth={true}
                duration={500}
              >
                Products
              </ScrollLink>
            </div>
            <a
              className="text-white text-md font-medium"
              href="https://wa.link/2ybboi"
            >
              Contact
            </a>
          </div>
          <div className="flex-col justify-start items-start gap-8 inline-flex">
            <div className="text-white text-2xl font-semibold">
              🇦🇷 Argentina
            </div>
            <div className="h-[34px] text-white text-md font-normal">
            J.L. suarez 1076 CABA             
            </div>
            <div className="text-white text-md font-normal">
              +54 9 11 6442-6439
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
