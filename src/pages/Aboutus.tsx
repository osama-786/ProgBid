import { 
  Rocket, 
  RotateCcw, 
  Fingerprint, 
  Bot, 
  Zap, 
  ShieldCheck, 
  Video, 
  Globe2, 
  HeartHandshake, 
  Wallet 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GetstartedModalButton } from "@/components/GetstartedModal";

const services = [
  {
    icon: Rocket,
    title: "User Acquisition",
    desc: "Smarter growth, stronger LTV. We find your highest value users globally using predictive AI and creative testing.",
    textColor: "text-blue-600",
    gradient: "from-blue-600 to-indigo-600",
    shadow: "shadow-blue-200",
  },
  {
    icon: RotateCcw,
    title: "Retargeting",
    desc: "Re-engage dormant users with personalized, event-triggered campaigns that improve DAU and retention.",
    textColor: "text-violet-600",
    gradient: "from-violet-600 to-fuchsia-600",
    shadow: "shadow-violet-200",
  },
  {
    icon: Fingerprint,
    title: "Branding",
    desc: "Enhance brand credibility with high-impact creatives designed to drive recognition and user confidence.",
    textColor: "text-pink-600",
    gradient: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-200",
  },
  {
    icon: Bot,
    title: "Programmatic Buying",
    desc: "Real-time DSP with advanced algorithms for smart, automated buying that optimizes spend and guarantees quality.",
    textColor: "text-orange-600",
    gradient: "from-amber-500 to-orange-600",
    shadow: "shadow-orange-200",
  },
];

const whyChoosePoints = [
  { icon: Zap, title: "Fast Onboarding", desc: "Get campaigns live in under 48 hours." },
  { icon: ShieldCheck, title: "Advanced Protection", desc: "Fraud protection & real-time analytics." },
  { icon: Video, title: "Creative Studio", desc: "Immersive Mobile Ad Experiences." },
  { icon: Globe2, title: "Global Reach", desc: "Various traffic partners via single platform." },
  { icon: HeartHandshake, title: "Expert Support", desc: "Friendly team, always there, never bots." },
  { icon: Wallet, title: "Transparent Pricing", desc: "No hidden fees, clear costs, flexible budgets." }
];

const AboutUsPage = () => {
  return (
    <>
      <Header />
      
      {/* GLOBAL BACKGROUND BLOBS (Fixed for the whole page effect) */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-slate-50">
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-rose-400/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
         <div className="absolute top-[40%] left-[40%] w-[600px] h-[600px] bg-violet-400/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-4000" />
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 10s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100/50 backdrop-blur-md">
            <span className="uppercase tracking-widest text-xs font-bold text-pink-600">
              About Progbid
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
            We <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600">Elevate Growth</span>
            <br /> with Data & Tech.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Progbid turns every mobile app's growth goal into reality. From quality user acquisition to lasting engagement, we help you scale, succeed, and build a brand people love.
          </p>
          
          <div className="flex justify-center transform hover:scale-105 transition-transform duration-300">
            <GetstartedModalButton />
          </div>

        </div>
      </section>

      {/* --- MISSION SECTION (Glass Card) --- */}
      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="relative rounded-[3rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl overflow-hidden p-8 md:p-16 text-center">
            
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-bold mb-8 text-slate-900">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600">Mission</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                "We combine deep data insights with creative strategies to deliver real users who stick around. Honest results, clear communication, and long-term partnerships are at the heart of everything we do."
              </p>
            </div>

            {/* Decorative Gradient Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 opacity-50" />
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600">We Do</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive mobile marketing solutions designed to accelerate your app's growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="
                  group relative overflow-hidden transition-all duration-500
                  bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg rounded-3xl
                  hover:-translate-y-2 hover:shadow-2xl hover:bg-white/80
                "
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-5">
                    <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center 
                      shadow-lg ${service.shadow}
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <service.icon className={`w-7 h-7 ${service.textColor}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-lg leading-relaxed ml-[4.75rem] -mt-2">
                    {service.desc}
                  </p>
                </CardContent>
                
                {/* Bottom Gradient Accent */}
                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-20 px-4 md:px-8 mb-20">
        <div className="container mx-auto bg-[#0F172A] rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Dark Theme Background Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600">ProgBid?</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Here's what makes us the trusted choice for app growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoosePoints.map((point, index) => (
                <div
                  key={index}
                  className="
                    group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 
                    hover:bg-white/10 hover:border-white/20 hover:translate-y-[-4px] 
                    transition-all duration-300
                  "
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 text-pink-400 group-hover:text-white transition-colors duration-300">
                      <point.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUsPage;