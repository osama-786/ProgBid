import { ExampleWithModalButton } from "./UniversalModal";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // State to track when video is actually ready to show
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black">
      
      {/* --- LAYER 1: Immediate Background Image (The "Poster") --- */}
      {/* This shows instantly while the video loads to prevent black flash */}
      <img 
        src="/hero-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* --- LAYER 2: Background Video --- */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // 1. Force browser to load immediately
        onLoadedData={handleVideoLoad} // 2. Trigger fade-in when data is ready
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`} // 3. Smooth fade from 0 to 100
      >
        <source src="/HomepageVideo.mp4" type="video/mp4" />
      </video>

      {/* --- LAYER 3: Decorative Glow/Blobs --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* --- LAYER 4: Content Container --- */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center">
        
        {/* 1. HEADLINE AREA */}
        <div className="flex-grow flex flex-col items-center justify-center text-center max-w-5xl pb-8 pt-28">
          <h1 className="text-2xl md:text-2xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            BUILT FOR APP GROWTH.<br/><span className="text-white"> DRIVEN BY AI.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-600 animate-shimmer pb-2">
              FOCUSED ON REAL OUTCOMES.
            </span>
          </h1>
        </div>

        {/* 2. BOTTOM ANCHORED AREA */}
        <div className="w-full max-w-5xl flex flex-col items-center pb-16 md:pb-28">
          
          {/* Subheadline Pill */}
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="text-blue-100 text-xs md:text-lg font-bold tracking-widest uppercase">
                User Acquisition • Retargeting • Branding
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <ExampleWithModalButton />
          </div>

          {/* Divider */}
          <div className=" w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3 animate-fade-in-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }} />

          {/* Trust Section */}
          <div className="flex flex-col items-center gap-3 w-full animate-fade-in-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <p className="text-white text-lg font-medium uppercase tracking-widest">
              Trusted by leading publishers
            </p>
            
            <div className="
              inline-flex flex-wrap items-center justify-center
              gap-6 md:gap-12
              px-6 py-2
              rounded-3xl 
              bg-white backdrop-blur-xl
              border border-white/10 
            ">
              <img 
                src="/amazon.png" 
                alt="Amazon" 
                className="h-8 md:h-7 w-auto object-contain filter-none opacity-100 hover:scale-110 transition-transform duration-300 drop-shadow-sm" 
              />
              <img 
                src="/888.png" 
                alt="888" 
                className="h-8 md:h-7 w-auto object-contain filter-none opacity-100 hover:scale-110 transition-transform duration-300 drop-shadow-sm" 
              />
              <img 
                src="/spotify.png" 
                alt="Spotify" 
                className="h-8 md:h-7 w-auto object-contain filter-none opacity-100 hover:scale-110 transition-transform duration-300 drop-shadow-sm" 
              />
              <img 
                src="/swiggy.png" 
                alt="Swiggy" 
                className="h-8 md:h-7 w-auto object-contain filter-none opacity-100 hover:scale-110 transition-transform duration-300 drop-shadow-sm" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;