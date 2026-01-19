import { ScanSearch, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const steps = [
  {
    icon: ScanSearch,
    title: "Identify high-value audiences",
    description: "We analyze your app and ideal customer profile. Our team reviews existing data to unlock potential growth areas.",
    step: "01",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    gradient: "from-blue-600 to-indigo-600",
    shadow: "shadow-blue-200"
  },
  {
    icon: Lightbulb,
    title: "AI-Driven Engagement",
    description: "Utilizing smart AI, we develop tailored acquisition plans to target the most effective channels and engage users instantly.",
    step: "02",
    iconColor: "text-fuchsia-600",
    iconBg: "bg-fuchsia-50",
    gradient: "from-violet-600 to-fuchsia-600",
    shadow: "shadow-fuchsia-200"
  },
  {
    icon: Rocket,
    title: "Safe & Scalable Growth",
    description: "Campaigns deploy with ongoing optimization and built-in fraud prevention to ensure every dollar spent brings real value.",
    step: "03",
    iconColor: "text-teal-600",
    iconBg: "bg-teal-50",
    gradient: "from-emerald-500 to-teal-500",
    shadow: "shadow-teal-200"
  }
];

const HowItWorksSection = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const timeouts = steps.map((_, idx) =>
      setTimeout(() => {
        setVisibleIndexes((prev) => [...prev, idx]);
      }, 200 + idx * 200)
    );
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    // 1. ROUNDED SECTION: Floating island look
    <section className="relative py-24 overflow-hidden bg-slate-50 mx-4 md:mx-8 rounded-[3rem] my-8 shadow-md">
      
      {/* 2. ANIMATED BLOBS: Matches Solutions Section */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* Water Blobs Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            How It <span className="text-transparent bg-clip-text gradient-text">Works</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From strategy to scale, we make app growth simple, transparent, and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card
                className={`
                  relative h-full transition-all duration-700 ease-out z-10
                  /* 3. GLASS CARD STYLING */
                  bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl
                  hover:-translate-y-2 hover:shadow-2xl hover:bg-white/60
                  ${visibleIndexes.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                `}
              >
                {/* Number Badge */}
                <div className={`
                  absolute -top-6 left-1/2 transform -translate-x-1/2 
                  w-12 h-12 rounded-2xl rotate-45 flex items-center justify-center 
                  bg-gradient-to-br ${step.gradient} shadow-lg ${step.shadow}
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <span className="-rotate-45 text-white font-bold text-lg">{step.step}</span>
                </div>

                <CardContent className="pt-12 pb-8 px-6 text-center flex flex-col items-center h-full">
                  <div className={`
                    mb-6 w-16 h-16 rounded-full flex items-center justify-center 
                    ${step.iconBg} 
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <step.icon className={`w-8 h-8 ${step.iconColor}`} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-slate-900">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-8 h-1 bg-slate-400/40 -translate-y-1/2 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;