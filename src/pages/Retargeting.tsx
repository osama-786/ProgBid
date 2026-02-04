import {  
  BellRing, 
  Link, 
  Activity, 
  TrendingUp, 
  Filter, 
  Sparkles,
  Magnet,
  MousePointerClick,
  Timer,
  ArrowRight,
  X, // Added X for the close button
  MessageCircle // Added for visual flair
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GetstartedModalButton } from "@/components/GetstartedModal";

// --- DATA & STYLING ---
const ValueHighlights = [
  {
    icon: Filter,
    title: "Smart Segmentation",
    text: "Identify dormant users and high-value churners for precision re-engagement.",
    textColor: "text-blue-600",
    gradient: "from-blue-600 to-indigo-600",
    shadow: "shadow-blue-200",
  },
  {
    icon: Sparkles,
    title: "Dynamic Creative",
    text: "Deliver personalized offers and messages at exactly the right moment for every user.",
    textColor: "text-fuchsia-500",
    gradient: "from-fuchsia-500 to-pink-600",
    shadow: "shadow-fuchsia-200",
  },
  {
    icon: Link,
    title: "Deep Linking",
    text: "Seamlessly direct users to specific in-app destinations, boosting conversion rates.",
    textColor: "text-violet-500",
    gradient: "from-violet-500 to-purple-600",
    shadow: "shadow-violet-200",
  },
  {
    icon: BellRing,
    title: "Event Triggers",
    text: "Trigger retargeting based on key actions like app open, cart abandon, or level completion.",
    textColor: "text-amber-500",
    gradient: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-200",
  },
  {
    icon: Activity,
    title: "Real-Time Attribution",
    text: "Instantly measure reactivations, conversions, and the true impact of every campaign.",
    textColor: "text-teal-500",
    gradient: "from-emerald-300 to-teal-600",
    shadow: "shadow-emerald-200",
  },
  {
    icon: TrendingUp,
    title: "Outcome-Driven",
    text: "Increase DAU, boost retention, maximize ARPU, and turn one-time users into loyalists.",
    textColor: "text-rose-500",
    gradient: "from-rose-500 to-red-600",
    shadow: "shadow-rose-200",
  },
];

const steps = [
  {
    icon: Magnet,
    title: "Segment",
    desc: "Identify inactive users, cart abandoners, and valuable churned audiences.",
    num: "01",
  },
  {
    icon: Sparkles,
    title: "Personalize",
    desc: "Craft relevant messages using behavioral data for every segment.",
    num: "02",
  },
  {
    icon: Timer,
    title: "Trigger",
    desc: "Deliver campaigns when users take (or miss) key actions instantly.",
    num: "03",
  },
  {
    icon: MousePointerClick,
    title: "Redirect & Measure",
    desc: "Send users to the perfect in-app spot via deep linking.",
    num: "04",
  },
];

const faqs = [
  {
    q: "What makes your retargeting different?",
    a: "We build truly smart, personalized campaigns using deep segmentation, in-app events, and real-time triggers not just generic blasts. Your users get exactly what matters, when it matters.",
  },
  {
    q: "Is your engine privacy conscious?",
    a: "Absolutely. All retargeting honors user opt-outs and privacy rules (GDPR/CCPA), and we never use data without explicit user permission.",
  },
  {
    q: "Which channels do you support?",
    a: "We support in-app, mobile web, video, programmatic, and cross-channel retargeting to reach users throughout their mobile journey.",
  },
  {
    q: "Can I use this for churned users from months ago?",
    a: "Yes! Bring back users after weeks or months with personalized incentives. They don't need to be recent drop-offs to be valuable.",
  },
  {
    q: "How do I track ROI from re-engagement?",
    a: "We measure revenue from users who return after seeing ads. Using MMPs, we attribute post-engagement actions (purchases) to specific campaigns to calculate exact ROAS.",
  },
];

const RetargetingReEngagementPage = () => {
  const [openFAQ, setOpenFAQ] = useState<null | number>(null);

  return (
    <>
      <Header />

      {/* --- GLOBAL BACKGROUND BLOBS --- */}
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
          
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100/50 backdrop-blur-md">
            <span className="uppercase tracking-widest text-xs font-bold text-rose-600">
              Retargeting & Re-engagement
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
            Turn One-Time Installs Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600">Long Term Revenue.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Not every new user means value. We identify <b>dormant or churned users</b> and bring them back with personalized campaigns that drive repeat action.
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
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600">Features</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Advanced retargeting solutions designed to bring back your most valuable users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-violet-400">Works</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our platform brings your best users back at scale using data, personalization, and live feedback.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-rose-500/0 via-rose-500/30 to-rose-500/0" />

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
                  <div className="absolute -top-4 left-6 px-3 py-1 bg-rose-600 rounded-full text-xs font-bold text-white shadow-lg shadow-rose-900/50">
                    Step {step.num}
                  </div>

                  <div className="mt-4 mb-4 p-3 w-fit rounded-xl bg-gradient-to-br from-rose-500/20 to-violet-500/20 text-rose-400 group-hover:text-white transition-colors duration-300">
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
                  <div className="p-3 bg-rose-50 rounded-full text-rose-600 group-hover:bg-rose-100 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-slate-800 text-lg group-hover:text-rose-600 transition-colors">
                    {faq.q}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-1 transition-all" />
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
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="mt-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pr-8">
                    {faqs[openFAQ].q}
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-rose-500 to-violet-500 rounded-full mb-6" />
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {faqs[openFAQ].a}
                  </p>
                </div>

                {/* Bottom decorative blur */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-400/20 rounded-full blur-3xl pointer-events-none" />
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

export default RetargetingReEngagementPage;