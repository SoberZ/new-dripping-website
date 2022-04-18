function Marquee() {
  return (
    <div class="relative bg-gray-500 flex overflow-x-hidden">
      <div class="py-4 animate-marquee whitespace-nowrap">
        <span class="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span class="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span class="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span class="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span class="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span class="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
      </div>

      <div class="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
        <span class="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span class="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span class="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span class="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span class="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
        <span class="text-3xl mx-4 text-white font-akira">Dripping Dinos</span>
      </div>
    </div>
  );
}

export default Marquee;
