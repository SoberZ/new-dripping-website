import Image from "next/image";
import React from "react";

function Phase({ name, description, image }) {
  return (
    <div className="flex flex-row pt-10">
      <div className="relative w-[400px]">
        <Image src={image} objectFit="cover" className="rounded-md" alt="Dino Picture For Phase" />
      </div>

      <div className="p-5">
        <h1 className="font-akira">{name}</h1>
        <p className="font-helvetica-regular">{description}</p>
      </div>
    </div>
  );
}

export default Phase;
