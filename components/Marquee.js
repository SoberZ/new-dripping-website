function Marquee() {
  return (
    <div className="relative bg-gray-500 flex overflow-x-hidden">
      <div className="py-4 animate-marquee whitespace-nowrap">
        <span className="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span className="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span className="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span className="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span className="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span className="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
      </div>

      <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
        <span className="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span className="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span className="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span className="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span className="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span className="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
      </div>
    </div>
  );
}

export default Marquee;
