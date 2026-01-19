import worldMap from "@/assets/world-map.png";


const WorldMapSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-4">
            Our <span className="gradient-text">Global Presence</span> 
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Operating across all major markets worldwide, delivering mobile marketing solutions to businesses in every corner of the globe.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden">
          <img
            src={worldMap}
            alt="World map showing global presence"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
