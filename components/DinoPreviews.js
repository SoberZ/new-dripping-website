import Image from "next/image";
import placeholderImg from "../public/assets/images/PLACEHOLDER.png";

function DinoPreviews() {
  return (
    <section className="grid grid-rows-3">
      <div className="relative flex overflow-x-hidden">
        <div className="flex">
          {[...Array(5)].map((x, i) => (
            <div className="w-[250px] sm:w-[calc(100vw/5)] pt-1 px-1 animate-marquee-right" key={i}>
              <Image
                src={placeholderImg}
                objectFit="cover"
                alt=""
                className="rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 flex">
          {[...Array(5)].map((x, i) => (
            <div className="w-[250px] sm:w-[calc(100vw/5)] pt-1 px-1 animate-marquee2-right" key={i}>
              <Image
                src={placeholderImg}
                objectFit="cover"
                alt=""
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="flex">
          {[...Array(5)].map((x, i) => (
            <div className="w-[250px] sm:w-[calc(100vw/5)] pt-1 px-1 animate-marquee" key={i}>
              <Image
                src={placeholderImg}
                objectFit="cover"
                alt=""
                className="rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 flex">
          {[...Array(5)].map((x, i) => (
            <div className="w-[250px] sm:w-[calc(100vw/5)] pt-1 px-1 animate-marquee2" key={i}>
              <Image
                src={placeholderImg}
                objectFit="cover"
                alt=""
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
			<div className="relative flex overflow-x-hidden">
        <div className="flex">
          {[...Array(5)].map((x, i) => (
            <div className="w-[250px] sm:w-[calc(100vw/5)] pt-1 px-1 animate-marquee-right" key={i}>
              <Image
                src={placeholderImg}
                objectFit="cover"
                alt=""
                className="rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 flex">
          {[...Array(5)].map((x, i) => (
            <div className="w-[250px] sm:w-[calc(100vw/5)] pt-1 px-1 animate-marquee2-right" key={i}>
              <Image
                src={placeholderImg}
                objectFit="cover"
                alt=""
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default DinoPreviews;
