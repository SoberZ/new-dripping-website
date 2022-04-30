import { useRef, useEffect } from "react";
import logo from "../public/assets/images/logo.png";
import twitterImg from "../public/assets/images/twitter.svg";
import discordImg from "../public/assets/images/discord.svg";
import instagramImg from "../public/assets/images/instagram.svg";
import Image from "next/image";
import Link from "next/link";

function Header({showBackground}) {
  return (
    <header className={`fixed ${showBackground ? " bg-opacity-25 animate duration-300" : ""} w-screen z-40`}>
      <div className="sticky top-0 grid grid-cols-1 md:grid-cols-2 p-0.5 sm:p-2 md:px-24">
        {/* left */}
        <div className="relative flex h-20 my-auto">
          <div className="hidden md:flex">
            <Image
              src={logo}
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              className="cursor-pointer"
              alt=""
            />
          </div>
          <div className="flex md:hidden">
            <Image src={logo} layout="fill" objectFit="contain" alt="" />
          </div>
        </div>

        {/* right icons */}
        <div className="hidden md:flex justify-end items-center">
          <Link href="https://twitter.com/DrippingDinos/">
            <div className="mx-2">
              <Image
                src={twitterImg}
                objectFit="contain"
                className="cursor-pointer"
                alt=""
              />
            </div>
          </Link>
          <Link href="https://www.instagram.com/drippingdinosnft/">
            <div className="mx-2">
              <Image
                src={instagramImg}
                objectFit="contain"
                className="cursor-pointer"
                alt=""
              />
            </div>
          </Link>
          <Link href="https://twitter.com/DrippingDinos/">
            <div className="mx-2">
              <Image
                src={discordImg}
                objectFit="contain"
                className="cursor-pointer"
                alt=""
              />
            </div>
          </Link>
          <button className="font-helvetica-title text-sm text-slate-50 ml-3 rounded-md border-2 bg-main-black py-2 px-5 hover:bg-slate-50 hover:border-slate-50 hover:text-zinc-900 transition duration-150 active:scale-90">
            WHITEPAPER
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
