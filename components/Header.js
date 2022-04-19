import logo from "../public/assets/images/logo.png";
import twitterImg from "../public/assets/images/twitter.svg";
import discordImg from "../public/assets/images/discord.svg";
import instagramImg from "../public/assets/images/instagram.svg";
import Image from "next/image";

function Header() {
  return (
    <header className="bg-fixed bg-[url(/assets/images/dino-background2.png)] bg-no-repeat h-full bg-cover bg-center">
      <div className="sticky top-0 grid grid-cols-1 md:grid-cols-2 bg-transparent p-2 md:px-16">
        {/* left */}
        <div className="relative flex h-16 cursor-pointer my-auto">
          <div className="hidden md:flex">
            <Image
              src={logo}
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              alt=""
            />
          </div>
          <div className="flex md:hidden">
            <Image src={logo} layout="fill" objectFit="contain" alt="" />
          </div>
        </div>

        {/* right icons */}
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
          <button className="font-helvetica-title text-slate-50 ml-3 rounded-md border-2 bg-zinc-900 py-2 px-5 hover:bg-slate-50 hover:border-slate-50 hover:text-zinc-900 transition duration-150 active:scale-90">
            MINT
          </button>
        </div>
      </div>

      <div className="relative h-screen">
        <div className="relative items-center flex flex-col justify-center h-full">
          <h1 className="flex font-akira text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Dripping Dinos
          </h1>
          <button className="flex mt-10 items-center rounded-full text-white font-akira bg-purple-700 h-10 top-96 p-6 text-lg hover:shadow-xl hover:bg-purple-800 transition duration-150 active:scale-95">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
