import { useState } from "react";
import Image from "next/image";
import roadmapSVG from "../public/assets/images/road-map.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Roadmap({ buttonRef, changeColor }) {
  const { _, width } = useWindowDimensions();
  const [show, setShow] = useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const RoadmapComponent = () => (
    <div className="fixed top-0 z-50 h-screen bg-white p-20 transition-transform duration-200 overflow-y-scroll">
      <button className="border-2" onClick={handleOnClick}>Close</button>
      <p>IM THE ROADMAP NOW</p>
    </div>
  );

  return (
    <>
      {show && <RoadmapComponent />}
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
