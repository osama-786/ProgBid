import { ShieldCheck, Cpu, Layers, Globe2, BrainCircuit, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Cpu,
    title: "AI-Powered Optimization",
    description: "Machine learning algorithms continuously optimize your campaigns for maximum performance and ROI.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    icon: ShieldCheck,
    title: "Fraud-Free Results",
    description: "Advanced fraud detection and prevention systems ensure every install is genuine and valuable.",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    gradient: "from-emerald-600 to-teal-600"
  },
  {
    icon: Layers,
    title: "Cross-Platform Excellence",
    description: "Seamlessly run campaigns across iOS, Android, and web platforms with unified tracking.",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    gradient: "from-violet-600 to-purple-600"
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Run campaigns in over 105+ countries with support for localization and cultural adaptation.",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    gradient: "from-orange-600 to-red-600"
  },
  {
    icon: TrendingUp,
    title: "Proven Growth Results",
    description: "Track record of scaling apps from thousands to millions of users with sustainable growth strategies.",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    gradient: "from-amber-500 to-yellow-600"
  },
  {
    icon: BrainCircuit,
    title: "Advanced Targeting",
    description: "Deep audience segmentation and lookalike modeling to reach your ideal users efficiently.",
    iconColor: "text-pink-600",
    iconBg: "bg-pink-50",
    gradient: "from-pink-600 to-rose-600"
  }
];

const WhyChooseSection = () => {
  return (
    // 1. ROUNDED SECTION
    <section className="relative py-24 overflow-hidden bg-slate-50 mx-4 md:mx-8 rounded-[3rem] my-8 shadow-md">
      
      {/* 2. ANIMATED BLOBS */}
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
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Why Choose <span className="text-transparent bg-clip-text gradient-text pb-2.5">ProgBid</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The platform that combines cutting-edge technology with proven strategies to deliver exceptional results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              // 3. GLASS CARD STYLING
              className="
                group relative overflow-hidden transition-all duration-500
                bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl
                hover:-translate-y-2 hover:shadow-2xl hover:bg-white/60
              "
            >
              <CardContent className="p-8 flex flex-col items-center text-center h-full relative z-10">
                
                {/* Icon Circle */}
                <div className={`
                  mb-6 w-16 h-16 rounded-2xl flex items-center justify-center 
                  ${benefit.iconBg} 
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-8 leading-relaxed text-sm font-medium">
                  {benefit.description}
                </p>
              </CardContent>

              {/* Optional: Bottom Gradient Line for extra flair */}
              <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </Card>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default WhyChooseSection;