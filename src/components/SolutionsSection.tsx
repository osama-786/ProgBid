import { Rocket, RefreshCw, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: Rocket,
    title: "User Acquisition",
    gradient: "from-red-600 to-violet-500",
    iconColor: "text-red-600",
    iconBg: "bg-red-50",
    features: [
      "Predictive Audience Modeling",
      "Global & Local Traffic Optimization",
      "Machine-Learning User Segmentation",
      "Automated Campaign Scaling"
    ]
  },
  {
    icon: RefreshCw,
    title: "Retargeting & Re-engagement",
    gradient: "from-fuchsia-600 to-pink-600",
    iconColor: "text-fuchsia-600",
    iconBg: "bg-fuchsia-50",
    features: [
      "AI-Powered Segmentation",
      "Behavior-Based Trigger Automation",
      "Cross-Channel Creative Orchestration",
      "Predictive Churn Prevention"
    ]
  },
  {
    icon: Globe,
    title: "Branding",
    gradient: "from-pink-500 to-red-800",
    iconColor: "text-pink-500",
    iconBg: "bg-pink-50",
    features: [
      "Custom Video & Display Creatives",
      "High-Impact Mobile Ad Experiences",
      "Unified Cross-Channel Brand Presence",
      "Brand-Safe & Contextual Placements"
    ]
  }
];

const SolutionsSection = () => {
  return (
    // 1. ROUNDED SECTION: Added 'rounded-[3rem]' and 'mx-4'
    // This creates a "floating island" look for the entire section.
    <section className="relative py-24 overflow-hidden bg-slate-50 mx-4 md:mx-8 rounded-[3rem] my-8 shadow-sm">
      
      {/* Custom Animation Styles */}
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

      {/* Water Blobs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 drop-shadow-sm">
            Our <span className="text-transparent bg-clip-text gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to acquire, retain, and scale app users with precision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              // 2. ROUNDED CARDS: Changed to 'rounded-3xl' (Extra Round)
              // This fits the liquid/bubble aesthetic perfectly
              className="
                group relative overflow-hidden transition-all duration-500
                bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl
                hover:-translate-y-2 hover:shadow-2xl hover:bg-white/60
                rounded-3xl
              "
            >
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-4">
                  {/* Icon Container: Rounded-2xl to match the card */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${solution.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className={`w-7 h-7 ${solution.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {solution.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="pt-2 relative z-10">
                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.gradient}`} />
                      <span className="text-slate-800 text-sm font-medium leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${solution.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;