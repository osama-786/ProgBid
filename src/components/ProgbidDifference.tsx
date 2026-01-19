import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ProgbidDifference1 from "@/assets/ProgbidDifference1.png";
import ProgbidDifference2 from "@/assets/ProgbidDifference2.png";
import ProgbidDifference3 from "@/assets/ProgbidDifference3.png";
import ProgbidDifference4 from "@/assets/ProgbidDifference4.png";

type Slide = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

const slides: Slide[] = [
  {
    id: "Mobile First Thinking",
    title: "Mobile First Thinking",
    description:
      "With years of category-defining expertise in apps and web, we fuel user acquisition with precision and efficiency that the market depends on.",
    imageSrc: ProgbidDifference1,
    imageAlt: "Mobile First Thinking",
  },
  {
    id: "Speedy Expansion",
    title: "Speedy Expansion",
    description:
      "Enter new markets backed by iron-clad performance experience, real-time behavioral insights, and teams who already understand your audience. While others are still learning, you’re already winning.",
    imageSrc: ProgbidDifference2,
    imageAlt: "Speedy Expansion",
  },
  {
    id: "Scale Global Effortlessly",
    title: "Scale Global Effortlessly",
    description:
      "We act as a single, trusted partner for all your growth needs, combining robust technology, market know-how, and dedicated service. Rather than juggling multiple vendors, you get one streamlined growth engine covering everything from mobile acquisition to full-funnel performance marketing.",
    imageSrc: ProgbidDifference3,
    imageAlt: "Scale Global Effortlessly",
  },
  {
    id: "ARPU That Keeps Climbing",
    title: "ARPU That Keeps Climbing",
    description:
      "We don’t just bring users we bring valuable users. Our tools optimize their entire journey so engagement turns into revenue, and you see a tangible rise in average revenue per user, while we manage the heavy lifting.",
    imageSrc: ProgbidDifference4,
    imageAlt: "ARPU That Keeps Climbing",
  },
];

const SLIDE_COLORS = [
  "linear-gradient(135deg, #232526 0%, #414345 100%)",
  "linear-gradient(135deg, #3a0000 0%, #7f1d1d 100%)",
  "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
  "linear-gradient(135deg, #55251d 0%, #8a3b2c 100%)",
];
const TAB_COLORS = SLIDE_COLORS.slice();

// Motion Constants
const TRANSITION_DURATION = 0.5;
const TRANSITION_EASE = [0.22, 1, 0.36, 1] as const; // Fixed tuple type

// Variants for Text
const textVariants: Variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? -30 : 30,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: TRANSITION_DURATION,
      ease: TRANSITION_EASE,
    },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -30 : 30,
    opacity: 0,
    transition: {
      duration: TRANSITION_DURATION / 2,
      ease: "easeIn",
    },
  }),
};

// Variants for Image
const imageVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: TRANSITION_DURATION + 0.1,
      ease: TRANSITION_EASE,
      delay: 0.1,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
    transition: {
      duration: TRANSITION_DURATION / 2,
      ease: "easeIn",
    },
  }),
};

export default function ProgbidDifference(): JSX.Element {
  const [active, setActive] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Function to calculate underline position
  const updateUnderline = () => {
    const currentTab = tabsRef.current[active];
    if (currentTab) {
      setUnderline({
        left: currentTab.offsetLeft,
        width: currentTab.clientWidth,
      });
    }
  };

  // Update underline on active change
  useLayoutEffect(() => {
    updateUnderline();
  }, [active]);

  // Update underline on window resize (prevents desync)
  useEffect(() => {
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [active]); // Re-bind if active changes to capture correct tab ref

  const changeTab = (index: number) => {
    if (index === active) return;
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-white mx-4 md:mx-8 rounded-[3rem] my-8 shadow-md">
      <div className="container mx-auto px-6 py-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          How We're <span className="gradient-text">Different</span>
        </h2>

        {/* Tabs Navigation */}
        <div className="mb-4 relative border-b border-slate-200/50 pb-1">
          <ul className="flex gap-8 relative z-10">
            {slides.map((s, i) => (
              <li key={s.id}>
                <button
                  ref={(el) => (tabsRef.current[i] = el)}
                  onClick={() => changeTab(i)}
                  className={`text-lg font-medium px-1 py-2 focus:outline-none transition-colors duration-300 ${
                    active === i ? "text-slate-900" : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>

          {/* Animated Underline */}
          <motion.div
            className="absolute bottom-0 h-[4px] rounded-full z-20"
            initial={false}
            animate={{
              left: underline.left,
              width: underline.width,
              background: TAB_COLORS[active % TAB_COLORS.length], // FIXED: Changed backgroundColor to background for gradients
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Main Content Card */}
        <div className="relative rounded-lg overflow-hidden w-full h-[380px] md:h-[450px] lg:h-[510px]">
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 z-0"
            animate={{ background: SLIDE_COLORS[active % SLIDE_COLORS.length] }}
            transition={{ duration: 0.5 }}
          />

          <div className="relative z-10 w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-12 h-full">
              
              {/* Left Side: Text */}
              <div className="md:col-span-7 h-full flex flex-col justify-center px-8 md:px-12">
                <AnimatePresence initial={false} mode="wait" custom={direction}>
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex flex-col"
                  >
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                      {slides[active].title}
                    </h3>
                    <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
                      {slides[active].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Side: Image */}
              <div className="md:col-span-5 h-full flex items-center justify-center p-6 md:pr-12">
                <AnimatePresence initial={false} mode="wait" custom={direction}>
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full flex justify-center"
                  >
                    <img
                      src={slides[active].imageSrc}
                      alt={slides[active].imageAlt}
                      className="w-[220px] h-[220px] md:w-[320px] md:h-[320px] lg:w-[420px] lg:h-[420px] object-cover rounded-xl shadow-2xl"
                      draggable={false}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}