function Banner() {
  return (
    <div className="h-screen bg-zinc-900">
      <div className="relative items-center flex flex-col bg-fixed justify-center bg-[url(/assets/images/dino-background2.png)] bg-no-repeat h-full bg-cover bg-center w-screen h-screen">
        <h1 className="flex font-akira text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white">Dripping Dinos</h1>
        <button className="flex mt-10 items-center rounded-full text-white font-akira bg-purple-700 h-10 top-96 p-6 text-lg hover:shadow-xl hover:bg-purple-800 transition duration-150 active:scale-95">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default Banner;
