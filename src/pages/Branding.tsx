import { 
  Palette, 
  Layout, 
  ShieldCheck, 
  Sparkles, 
  Search, 
  PenTool, 
  Share2, 
  BarChart2, 
  ArrowRight,
  X,
  MessageCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GetstartedModalButton } from "@/components/GetstartedModal";

// --- DATA & STYLING ---
const ValueHighlights = [
  {
    icon: Palette,
    title: "Brand-Led Creative",
    text: "We tell your brand story through impactful, mobile first creative that connects and converts.",
    textColor: "text-rose-500",
    gradient: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-200",
  },
  {
    icon: Layout,
    title: "High-Impact Formats",
    text: "Leverage video, playable ads, and native units to deliver a consistent, memorable presence.",
    textColor: "text-violet-500",
    gradient: "from-violet-500 to-purple-600",
    shadow: "shadow-violet-200",
  },
  {
    icon: Sparkles,
    title: "Cross-Channel",
    text: "Unified look and tone across every touchpoint, from ads and videos to in-app experiences.",
    textColor: "text-fuchsia-700",
    gradient: "from-fuchsia-500 to-violet-600",
    shadow: "shadow-fuchsia-200",
  },
  {
    icon: ShieldCheck,
    title: "Brand Safety",
    text: "Your content only appears in high quality, safe placements for maximum trust.",
    textColor: "text-teal-500",
    gradient: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-200",
  },
];

const steps = [
  {
    icon: Search,
    title: "Discover",
    desc: "We audit your app and values to define the look, voice, and intent.",
    num: "01",
  },
  {
    icon: PenTool,
    title: "Craft",
    desc: "Our studio designs and animates assets optimized for every audience.",
    num: "02",
  },
  {
    icon: Share2,
    title: "Amplify",
    desc: "Deploy your brand across trusted, brand-safe mobile environments.",
    num: "03",
  },
  {
    icon: BarChart2,
    title: "Analyze",
    desc: "Track reach, sentiment, and lift in real-time not just views.",
    num: "04",
  },
];

const faqs = [
  {
    q: "Is there a minimum spend for branding campaigns?",
    a: "It depends on scope: starter campaigns available from $5,000/month. Custom projects (including design + media) are quoted after a free audit.",
  },
  {
    q: "How do you measure brand campaign success?",
    a: "We provide full brand lift analytics: reach, brand recall, engagement, positive sentiment and actual user growth all in your reports.",
  },
  {
    q: "Can you help amplify brand visibility across mobile channels?",
    a: "Yes. We amplify brand presence across in-app, mobile web, video, and programmatic channels using customized creatives, smart delivery, and brand-safe inventory.",
  },
];

const BrandingPage = () => {
  const [openFAQ, setOpenFAQ] = useState<null | number>(null);

  return (
    <>
      <Header />

      {/* --- GLOBAL BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-slate-50">
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-violet-400/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
         <div className="absolute top-[40%] left-[40%] w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-4000" />
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
          
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100/50 backdrop-blur-md">
            <span className="uppercase tracking-widest text-xs font-bold text-blue-600">
              Branding & Creative
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
            Build Loyalty. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Make it Unforgettable.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            First impressions matter. We craft your app's brand identity and amplify it to millions, everywhere your users spend time.
          </p>
          
          <div className="flex justify-center transform hover:scale-105 transition-transform duration-300">
            <GetstartedModalButton />
          </div>

        </div>
      </section>

      {/* --- VALUE HIGHLIGHTS (Glass Grid) --- */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive branding services designed to make your app stand out.
            </p>
          </div>

          {/* UPDATED LAYOUT: grid-cols-2 + centered max-width to create 2x2 layout */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ValueHighlights.map((vh, index) => (
              <Card 
                key={vh.title}
                className="
                  group relative overflow-hidden transition-all duration-500
                  bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg rounded-[2rem]
                  hover:-translate-y-2 hover:shadow-2xl hover:bg-white/80
                "
              >
                <CardHeader className="pb-4">
                  <div className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center mb-4
                    shadow-lg ${vh.shadow}
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <vh.icon className={`w-7 h-7 ${vh.textColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {vh.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {vh.text}
                  </p>
                </CardContent>

                {/* Bottom Gradient Accent */}
                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${vh.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (Dark Theme Island) --- */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto bg-[#0F172A] rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Dark Theme Background Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Works</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Here's how we turn your brand vision into sustainable app growth and user love.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500/0 via-blue-500/30 to-blue-500/0" />

              {steps.map((step, index) => (
                <div
                  key={step.num}
                  className="
                    group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 
                    hover:bg-white/10 hover:border-white/20 hover:translate-y-[-4px] 
                    transition-all duration-300 relative
                  "
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-6 px-3 py-1 bg-blue-600 rounded-full text-xs font-bold text-white shadow-lg shadow-blue-900/50">
                    Step {step.num}
                  </div>

                  <div className="mt-4 mb-4 p-3 w-fit rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-400 group-hover:text-white transition-colors duration-300">
                    <step.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (Popup Modal Style) --- */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Questions</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Click on a question to view the answer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                onClick={() => setOpenFAQ(idx)}
                className="
                  group cursor-pointer rounded-2xl border bg-white/40 border-white/60 
                  backdrop-blur-md hover:bg-white/80 hover:shadow-lg hover:-translate-y-1
                  transition-all duration-300 p-6 flex items-center justify-between
                "
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">
                    {faq.q}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>

          {/* POPUP MODAL OVERLAY */}
          {openFAQ !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
              {/* Modal Content */}
              <div 
                className="
                  relative w-full max-w-lg bg-white/90 backdrop-blur-xl border border-white/50 
                  rounded-3xl shadow-2xl p-8 transform scale-100 animate-zoom-in
                "
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setOpenFAQ(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-blue-100 text-slate-500 hover:text-blue-600 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="mt-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pr-8">
                    {faqs[openFAQ].q}
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mb-6" />
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {faqs[openFAQ].a}
                  </p>
                </div>

                {/* Bottom decorative blur */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
              </div>
              
              {/* Click background to close */}
              <div className="absolute inset-0 z-[-1]" onClick={() => setOpenFAQ(null)} />
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default BrandingPage;