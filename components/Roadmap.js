import { useState, useEffect } from "react";
import Image from "next/image";
import roadmapSVG from "../public/assets/images/road-map.svg";
import dino3 from "../public/assets/images/roadmap_dino_3.png";
import closeIcon from "../public/assets/images/close.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Phase from "./Phase";

function Roadmap({ buttonRef, changeColor }) {
  const { _, width } = useWindowDimensions();
  const [show, setShow] = useState(false);
  const [animateState, setAnimateState] = useState("hidden");
  const [timeoutOn, setTimeoutOn] = useState(false);

  const phasesData = [
    {
      name: "Phase 1",
      description:
        "Design Starting off designing all 8000 Dripping Dinos to go above and beyond every expectation. Our aim is to deliver the most exceptional looking and aesthetically pleasing NFT artworks in the world. We want to make each Dino look unique and stand out in its own way, which is why we have made sure to create over 250+ different types of traits of the highest quality.",
      image: dino3,
    },
    {
      name: "Phase 2",
      description:
        "Minting A DGK Private sale will start off the mint with a total of 1000 NFT’s. Our public sale will consist of the remaining 7000 pieces. You will be able to mint from our own website.",
      image: dino3,
    },
    {
      name: "Phase 3",
      description:
        "DGK Stevie Williams, one of the biggest skater icons, joined our core team. With Stevie on board we've been able to set up a partnership with the streetwear brand DGK. The DGK designs will be implemented into our collection. All holders will receive an exclusive DGK hoodie and skateboard after the public mint, with this you will be fully dripped out and ready to have an amazing experience. We will host skate and yacht parties in Los Angeles where you can have the chance to meet the team including Stevie Williams.",
      image: dino3,
    },
    {
      name: "Phase 4",
      description:
        "Designer Brand We want to stay true to our name Dripping Dino’s, which is why we will strive to create an exclusive and unique Lifestyle brand. With our Huge partnerships in the fashion industry we will make sure that we will deliver exceptional premium quality clothing. Our experienced designers will make sure that you're not only dripping online but also in the real world.",
      image: dino3,
    },
    {
      name: "Phase 5",
      description:
        "Designer Brand We want to stay true to our name Dripping Dino’s, which is why we will strive to create an exclusive and unique Lifestyle brand. With our Huge partnerships in the fashion industry we will make sure that we will deliver exceptional premium quality clothing. Our experienced designers will make sure that you're not only dripping online but also in the real world.",
      image: dino3,
    },
    {
      name: "Phase 6",
      description:
        "Charity We are creating a charity to provide a helping hand to people in need without compromising the needs of our holders. We want to give back in a sustainable way and make an impact in the world while using this incredible technology. Dripping Dino’s will pledge to donate 100.000 USD worth of clothing to our own charity in the first week of minting.",
      image: dino3,
    },
  ];

  const handleOnClick = (e) => {
    e.preventDefault();
    if (!timeoutOn) {
      setShow(!show);
      if (show) {
        setAnimateState("fixed animate-slide-left");
        setTimeoutOn(true);
      } else {
        setAnimateState("fixed animate-slide-right");
      }
    }
  };

  // Hide roadmap after animation has finished
  useEffect(() => {
    if (timeoutOn) {
      setTimeout(() => {
        setAnimateState("hidden");
        setTimeoutOn(false);
      }, 2000);
      return () => clearTimeout();
    }
  }, [timeoutOn]);

  const RoadmapComponent = ({ phases }) => (
    <div
      className={`${animateState} top-0 z-50 h-screen bg-white p-5 lg:p-20 w-full sm:w-4/6 md:w-5/12 duration-500 overflow-y-scroll`}
      id="roadmap"
    >
      {/* Top */}
      <div className="grid grid-cols-2 center items-center">
        <h1 className="text-black font-helvetica-title text-md md:text-xl justify-start">
          DRIPPING ROADMAP
        </h1>
        <div className="flex justify-end">
          <button
            className="border-2 rounded-full p-2 flex hover:shadow-sm hover:scale-95"
            onClick={handleOnClick}
          >
            <Image
              src={closeIcon}
              layout="fixed"
              objectFit="contain"
              className=""
              alt=""
            />
          </button>
        </div>
      </div>
      {/* Content */}
      {phases.map((phase) => (
        <div className="pt-10" key={phase.name}>
          <Phase
            name={phase.name}
            description={phase.description}
            image={phase.image}
          />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <RoadmapComponent phases={phasesData} />

      <div
        className="fixed bottom-6 sm:bottom-10 pl-8 md:pl-32 w-5"
        ref={buttonRef}
      >
        <button
          className={`${
            changeColor ? "text-black" : "text-white"
          } sticky font-helvetica-title px-7 py-4 text-sm sm:text-md border-2 rounded-full backdrop-blur-md active:scale-95 transition duration-100 hover:shadow-xl hover:backdrop-blur-sm`}
          onClick={handleOnClick}
        >
          {/* REHYDRATION ERROR */}
          {/* {width < 640 ? (
            <Image
              src={roadmapSVG}
              layout="fill"
              objectFit="contain"
              className="scale-50"
            />
          ) : (
            "ROADMAP"
          )} */}
          ROADMAP
        </button>
      </div>
    </>
  );
}

export default Roadmap;
