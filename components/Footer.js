import Image from "next/image";
import logo from "../public/assets/images/logo.png";
import twitterImg from "../public/assets/images/twitter.svg";
import discordImg from "../public/assets/images/discord.svg";
import instagramImg from "../public/assets/images/instagram.svg";

export default function Footer() {
  return (
    <div className="flex items-center flex-col justify-center px-28 py-10 bg-main-black border-t-2">
      <div className="text-slate-200 flex items-center justify-center font-akira text-md sm:text-2xl pb-5">
        <p>Dripping Dinos</p>
      </div>
      <div className="hidden md:flex justify-end items-center">
        <div className="mx-2">
          <Image
            src={twitterImg}
            objectFit="contain"
            className="cursor-pointer"
            alt=""
          />
        </div>
        <div className="mx-2">
          <Image
            src={instagramImg}
            objectFit="contain"
            className="cursor-pointer"
            alt=""
          />
        </div>
        <div className="mx-2">
          <Image
            src={discordImg}
            objectFit="contain"
            className="cursor-pointer"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
