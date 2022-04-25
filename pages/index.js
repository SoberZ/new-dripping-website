import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Marquee from "../components/Marquee";
import dino2 from "../public/assets/images/roadmap_dino_2.png";
import dino5 from "../public/assets/images/roadmap_dino_5.png";
import AboutUs from "../components/sections/AboutUs";
import DGK from "../components/sections/DGK";
import Roadmap from "../components/Roadmap";
import DinoPreviews from "../components/DinoPreviews";

export default function Home() {
  const roadmapRef = useRef();
  const whiteDivRef = useRef();
  const whiteDivRef2 = useRef();
  const [showHeaderBg, setShowHeaderBg] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  // Change Roadmap text color on hover over section.
  const scrollHandler = (_) => {
    const rmBounding = roadmapRef.current.getBoundingClientRect();
    const wdBounding = whiteDivRef.current.getBoundingClientRect();
    const wdBounding2 = whiteDivRef2.current.getBoundingClientRect();

    setShowHeaderBg(window.scrollY > 0 ? true : false);

    // The 2 white sections
    if (
      (rmBounding.y > wdBounding.y &&
        wdBounding.y > rmBounding.y - wdBounding.height) ||
      (rmBounding.y > wdBounding2.y &&
        wdBounding2.y > rmBounding.y - wdBounding2.height)
    ) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  const teamData = [
    {
      id: 0,
      name: "Reza",
      image: dino5,
      role: "Co-Founder",
    },
    {
      id: 1,
      name: "Jeffrey",
      image: dino2,
      role: "Co-Founder",
    },
    {
      id: 2,
      name: "Stevie Williams",
      image: dino2,
      role: "DGK Founder",
    },
    {
      id: 3,
      name: "Dusty",
      image: dino5,
      role: "Web Developer",
    },
    {
      id: 4,
      name: "Eduardo",
      image: dino5,
      role: "3D Designer",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

  return (
    <div>
      <Header showBackground={showHeaderBg} />

      <Banner />

      <Marquee />

      <main>
        <AboutUs />

        <DGK sectionRef={whiteDivRef} />

        <Marquee />
        <DinoPreviews />
        <Marquee />

        {/* Team */}
        <section className="bg-main-black">
          <div className="flex flex-col py-40 px-20">
            <div className="text-slate-50 order-1 text-center">
              <h1 className="font-helvetica-title text-3xl mb-8 ">
                DRIPPING TEAM
              </h1>
            </div>
            <div className="flex flex-wrap flex-col items-center sm:items-start sm:flex-row justify-center order-2">
              {teamData.map((item) => (
                <div className="w-[200px] m-5" key={item.id}>
                  <Image
                    src={item.image}
                    objectFit="cover"
                    className="rounded-2xl"
                    alt=""
                  />
                  <h1 className="text-md md:text-xl text-slate-50 font-akira">
                    {item.name}
                  </h1>
                  <h2 className="text-sm md:text-md text-gray-300 font-helvetica-title">
                    {item.role}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DAO */}
        <section
          className="bg-white max-w-7xl grid grid-cols-2 mx-auto py-40 sm:px-16"
          ref={whiteDivRef2}
        >
          <div className="text-black order-1">
            <h1 className="font-helvetica-title text-3xl mb-8">DAO</h1>
            <p className="max-w-lg text-xl font-helvetica-regular leading-7">
              Dripping Dinos is reimagining and upping the standard in the next
              generation of Ethereum NFTs. Bringing never seen before utilities
              and culture brands to the NFT space. Focusing on becoming an
              emerging lifestyle brand, based on streetwear culture. The project
              will create and sustain a loyal and driven movement by combining
              the plans of building a strong community and delivering value back
              to the holders. The collection will consist of 8000 handcrafted
              artworks created with exceptional visual traits. Our aim is to
              inspire a culture that connects people in the digital world, as
              well as the real world.
            </p>
          </div>
          <div className="flex items-center justify-center order-2">
            <div className="w-[400px]">
              <Image
                src={dino5}
                objectFit="cover"
                className="w-[400px] rounded-2xl"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>

      <Marquee />

      <Footer />
      <Roadmap buttonRef={roadmapRef} changeColor={changeColor} />
    </div>
  );
}
