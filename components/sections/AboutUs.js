import Image from "next/image"
import dino3 from "../../public/assets/images/roadmap_dino_3.png";

function AboutUs() {
  return (
    <section className="bg-zinc-900 ">
    <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto py-40 sm:px-16">
      <div className="text-slate-50 mb-12 md:mb-0 order-1 text-center md:text-left p-7 md:p-0">
        <h1 className="font-helvetica-title text-3xl mb-8  md:text-left">ABOUT US</h1>
        <p className="text-xl font-helvetica-regular leading-7">
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
        <div className="w-[300px] md:w-[400px]">
          <Image
            src={dino3}
            objectFit="cover"
            className="rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutUs