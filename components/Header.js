import logo from "../public/assets/images/logo.png";
import twitterImg from "../public/assets/images/twitter.svg";
import discordImg from "../public/assets/images/discord.svg";
import instagramImg from "../public/assets/images/instagram.svg";
import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-1 md:grid-cols-2 bg-zinc-900 p-2 md:px-10">
      {/* left */}
      <div className="relative flex h-16 cursor-pointer my-auto">
        <div className="hidden md:flex">
        <Image src={logo} layout='fill' objectFit="contain" objectPosition="left" />
        </div>
        <div className="flex md:hidden">
        <Image src={logo} layout='fill' objectFit="contain"/>
        </div>
      </div>

      {/* middle */}
      {/* <div className="hidden md:flex items-center justify-center col-span-2 text-xs md:text-sm">
        <ul className="flex list-none items-center font-dela ">
            <li className="text-white font-normal px-2 hover:text-purple-500 transition duration-300 cursor-pointer">ABOUT US</li>
            <li className="text-white font-normal px-2 hover:text-purple-500 transition duration-300 cursor-pointer">ROADMAP</li>
            <li className="text-white font-normal px-2 hover:text-purple-500 transition duration-300 cursor-pointer">DAO</li>
            <li className="text-white font-normal px-2 hover:text-purple-500 transition duration-300 cursor-pointer">SHOP</li>
        </ul>
      </div> */}

      {/* right icons */}
      <div className="hidden md:flex justify-end items-center">
        <div className="mx-2">
          <Image
            src={twitterImg}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="mx-2">
          <Image
            src={instagramImg}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="mx-2">
          <Image
            src={discordImg}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
