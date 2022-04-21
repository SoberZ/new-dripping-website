import { useState, useEffect } from "react";
import Image from "next/image";
import roadmapSVG from "../public/assets/images/road-map.svg";
import dino3 from "../public/assets/images/roadmap_dino_3.png"
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
      description: "In phase one we will focus on this and that and furthermore also this and that because of this and that yes this and that",
      image: dino3
    },
    {
      name: "Phase 2",
      description: "In phase one we will focus on this and that and furthermore also this and that because of this and that yes this and that",
      image: dino3
    },
    {
      name: "Phase 3",
      description: "In phase one we will focus on this and that and furthermore also this and that because of this and that yes this and that",
      image: dino3
    },
    {
      name: "Phase 4",
      description: "In phase one we will focus on this and that and furthermore also this and that because of this and that yes this and that",
      image: dino3
    },
    {
      name: "Phase 5",
      description: "In phase one we will focus on this and that and furthermore also this and that because of this and that yes this and that",
      image: dino3
    },
    {
      name: "Phase 6",
      description: "In phase one we will focus on this and that and furthermore also this and that because of this and that yes this and that",
      image: dino3
    },
  ]

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
      className={`${animateState} top-0 z-50 h-screen bg-white p-20 w-full sm:w-4/6 md:w-1/3 duration-500 overflow-y-scroll`}
      id="roadmap"
    >
      {/* Top */}
      <div className="grid grid-cols-2 center items-center">
        <h1 className="text-black font-helvetica-title text-2xl justify-start">
          ROADMAP
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
      {phases.map((item) => (
        <Phase name={item.name} description={item.description} image={item.image} key={item.name}/>
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
          } sticky font-helvetica-title p-3 text-sm sm:text-md border-2 rounded-full backdrop-blur-md active:scale-95 transition duration-100 hover:shadow-xl hover:backdrop-blur-sm`}
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
