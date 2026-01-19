import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  ArrowRight 
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// --- TYPES ---
interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  subValue?: string;
  href: string | null;
  action: (() => void) | null;
  textColor: string;
  gradient: string;
  shadow: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// --- DATA ---
const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email Us",
    value: "sales@progbid.com",
    subValue: "Response within 24h",
    href: "mailto:sales@progbid.com",
    action: () => window.location.href = "mailto:sales@progbid.com",
    textColor: "text-blue-500",
    gradient: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-200"
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+1 (217) 773-5685",
    subValue: "Mon-Fri, 9am-6pm EST",
    href: "https://wa.me/12177735685",
    action: () => window.open("https://wa.me/12177735685", "_blank"),
    textColor: "text-green-500",
    gradient: "from-emerald-500 to-green-600",
    shadow: "shadow-emerald-200"
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "28 Geary St STE 650, 531",
    subValue: "San Francisco, US",
    href: null,
    action: null,
    textColor: "text-violet-700",
    gradient: "from-violet-500 to-purple-600",
    shadow: "shadow-violet-300"
  }
];

const ContactUsPage = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleContactClick = (info: ContactInfo) => {
    if (info.action) {
      info.action();
    }
  };

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
      <section className="relative pt-32 pb-12 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100/50 backdrop-blur-md">
            <span className="uppercase tracking-widest text-xs font-bold text-rose-600">
              Contact Us
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
            Let's Start <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600">Growing Together.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Have questions or ready to scale? Fill out the form and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Contact Cards (Span 4) */}
            <div className="lg:col-span-4 space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className={`
                    group relative overflow-hidden transition-all duration-300
                    bg-white/60 backdrop-blur-xl border border-white/60 shadow-lg rounded-3xl
                    hover:-translate-y-1 hover:shadow-xl hover:bg-white/80
                    ${info.action ? 'cursor-pointer' : ''}
                  `}
                  onClick={() => handleContactClick(info)}
                >
                  <CardContent className="p-6 flex items-center gap-5">
                    <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center shrink-0
                      shadow-lg ${info.shadow}
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <info.icon className={`w-7 h-7 ${info.textColor}`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 mb-0.5">{info.label}</h3>
                      <p className="text-slate-600 font-medium truncate">{info.value}</p>
                      {info.subValue && (
                        <p className="text-base text-slate-400 mt-0.5">{info.subValue}</p>
                      )}
                    </div>

                    {info.action && (
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* RIGHT COLUMN: Glass Form (Span 8) */}
            <div className="lg:col-span-8">
              <div className="relative rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-2xl p-8 md:p-12 overflow-hidden">
                
                {/* Decorative Form Background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-blue-50 rounded-2xl">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
                  </div>

                  {submitted ? (
                    <div className="text-center py-12 animate-fade-in-up">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-200">
                        <Send className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                      <p className="text-slate-600 mb-8 max-w-md mx-auto">
                        Thank you for reaching out, <span className="font-semibold text-blue-600">{form.name}</span>. 
                        Our team has received your message and will respond shortly.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: "", email: "", subject: "", message: "" });
                        }}
                        className="rounded-full px-8 border-slate-300 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700 ml-1">Name</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className="w-full bg-white/50 border border-white/60 rounded-xl p-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/80 transition-all"
                            value={form.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="john@company.com"
                            className="w-full bg-white/50 border border-white/60 rounded-xl p-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/80 transition-all"
                            value={form.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          placeholder="How can we help?"
                          className="w-full bg-white/50 border border-white/60 rounded-xl p-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/80 transition-all"
                          value={form.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Tell us about your project..."
                          className="w-full bg-white/50 border border-white/60 rounded-xl p-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/80 transition-all resize-none"
                          value={form.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="
                          w-full h-14 text-lg font-bold rounded-xl 
                          bg-gradient-to-r from-blue-600 to-violet-600 
                          hover:from-blue-700 hover:to-violet-700 
                          shadow-lg shadow-blue-200 
                          transition-all duration-300 hover:scale-[1.01] hover:shadow-xl
                        "
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
                            <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-100" />
                            <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-200" />
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message <Send className="w-5 h-5" />
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUsPage;