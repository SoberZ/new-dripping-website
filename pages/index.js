import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Marquee from "../components/Marquee";
import twins from "../public/assets/images/twin_dinos.png";
import dino2 from "../public/assets/images/roadmap_dino_2.png";
import dino3 from "../public/assets/images/roadmap_dino_3.png";
import dino5 from "../public/assets/images/roadmap_dino_5.png";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Dripping Dinos</title>
        <meta name="description" content="Dripping Dinos" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Fira+Sans:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="http://fonts.cdnfonts.com/css/akira-expanded"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Banner />

      <Marquee />

      <main className="">
        {/* About us */}
        <section className="bg-zinc-900 ">
          <div className="max-w-7xl grid grid-cols-2 mx-auto py-40 sm:px-16">
            <div className="text-slate-50 order-1">
              <h1 className="font-helvetica-title text-3xl mb-8">ABOUT US</h1>
              <p className="max-w-lg text-xl font-helvetica-regular leading-7">
                Dripping Dinos is reimagining and upping the standard in the
                next generation of Ethereum NFTs. Bringing never seen before
                utilities and culture brands to the NFT space. Focusing on
                becoming an emerging lifestyle brand, based on streetwear
                culture. The project will create and sustain a loyal and driven
                movement by combining the plans of building a strong community
                and delivering value back to the holders. The collection will
                consist of 8000 handcrafted artworks created with exceptional
                visual traits. Our aim is to inspire a culture that connects
                people in the digital world, as well as the real world.
              </p>
            </div>
            <div className="flex items-center justify-center order-2 w-full">
              <div className="w-[400px]">
                <Image
                  src={dino3}
                  objectFit="cover"
                  className="w-[400px] rounded-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        {/* DGK */}
        <section className="bg-white">
          <div className="max-w-7xl grid grid-cols-2 mx-auto py-40 sm:px-16">
            <div className="text-black order-1">
              <h1 className="font-helvetica-title text-3xl mb-8">DGK</h1>
              <p className="max-w-lg text-xl font-helvetica-regular">
                DrippingDinos had partnered up with the world renowned street
                fashion brand DGK. The project will implement DGK designs onto
                the majority of the DrippingDino Traits. Holder will be eligible
                for future giveaways involving
              </p>
            </div>
            <div className="flex items-center justify-center order-2 w-full">
              <div className="w-[500px]">
                <Image
                  src={twins}
                  objectFit="cover"
                  className="w-[400px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        {/* Team */}
        <section className="bg-zinc-900">
          <div className="max-w-7xl grid grid-cols-2 mx-auto py-40 sm:px-16">
            <div className="text-slate-50 order-1">
              <h1 className="font-helvetica-title text-3xl mb-8">TEAM</h1>
              <p className="max-w-lg text-xl font-helvetica-regular leading-7">
                Dripping Dinos is reimagining and upping the standard in the
                next generation of Ethereum NFTs. Bringing never seen before
                utilities and culture brands to the NFT space. Focusing on
                becoming an emerging lifestyle brand, based on streetwear
                culture. The project will create and sustain a loyal and driven
                movement by combining the plans of building a strong community
                and delivering value back to the holders. The collection will
                consist of 8000 handcrafted artworks created with exceptional
                visual traits. Our aim is to inspire a culture that connects
                people in the digital world, as well as the real world.
              </p>
            </div>
            <div className="flex items-center justify-center order-2 w-full">
              <div className="w-[400px]">
                <Image
                  src={dino2}
                  objectFit="cover"
                  className="w-[400px] rounded-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        {/* DAO */}
        <section className="bg-white max-w-7xl grid grid-cols-2 mx-auto py-40 sm:px-16">
          <div className="text-black order-1">
            <h1 className="font-helvetica-title text-3xl mb-8">DAO</h1>
            <p className="max-w-lg text-xl font-helvetica-regular leading-7">
              Dripping Dinos is reimagining and upping the standard in the next
              generation of Ethereum NFTs. Bringing never seen before utilities
              and culture brands to the NFT space. Focusing on becoming an
              emerging lifestyle brand, based on streetwear culture. The project
              will create and sustain a loyal and driven movement by combining
              the plans of building a strong community and delivering value back
              to the holders. The collection will consist of 8000 handcrafted
              artworks created with exceptional visual traits. Our aim is to
              inspire a culture that connects people in the digital world, as
              well as the real world.
            </p>
          </div>
          <div className="flex items-center justify-center order-2 w-full">
            <div className="w-[400px]">
              <Image
                src={dino5}
                objectFit="cover"
                className="w-[400px] rounded-2xl"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
