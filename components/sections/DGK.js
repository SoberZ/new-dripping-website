import Image from "next/image";
import twins from "../../public/assets/images/twin_dinos.png";

function DGK({sectionRef}) {
  return (
    <section className="bg-white" ref={sectionRef}>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto py-40 sm:px-16">
        <div className="text-black mb-12 md:mb-0 order-1 text-center md:text-left p-7 md:p-0">
          <h1 className="font-helvetica-title text-3xl mb-8">DGK</h1>
          <p className="max-w-lg text-xl font-helvetica-regular">
            DrippingDinos had partnered up with the world renowned street
            fashion brand DGK. The project will implement DGK designs onto the
            majority of the DrippingDino Traits. Holder will be eligible for
            future giveaways involving
          </p>
        </div>
        <div className="flex items-center justify-center order-2 w-full">
          <div className="w-[300px] md:w-[400px]">
            <Image src={twins} objectFit="cover" className="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DGK;
