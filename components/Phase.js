import Image from "next/image";
import React from "react";

function Phase({ name, description, image }) {
  return (
    <div className="flex flex-row pt-7">
      <div className="relative w-[100px] sm:w-[150px]">
        <Image src={image} objectFit="cover" className="rounded-md" alt="Dino Picture For Phase" />
      </div>

      <div className="pl-5 w-[300px]">
        <h1 className="font-akira">{name}</h1>
        <p className="font-helvetica-regular">{description}</p>
      </div>
    </div>
  );
}

export default Phase;
