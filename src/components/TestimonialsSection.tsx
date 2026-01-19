import { Card, CardContent } from "@/components/ui/card";
import { Star, BadgeCheck } from "lucide-react";

const companies = [
  { image: "/companies/mcd.png", name: "McDonald's" },
  { image: "/companies/noon.png", name: "Noon" },
  { image: "/companies/monese.png", name: "Monese" },
  { image: "/companies/labeb.png", name: "Labeb" },
  { image: "/companies/bright.png", name: "Bright" },
  { image: "/companies/octafx.png", name: "OctaFX" }
];

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Growth Manager",
    company: "Betway",
    logo: "/betway.jpg", // Use the correct logo path for Betway
    rating: 5,
    text: "Progbid helped us scale from 10K to 1M+ downloads in just 6 months. Their AI optimization is incredible our CPI dropped 40% while quality improved dramatically.",
    avatar: "SC",
    gradient: "from-blue-600 to-indigo-600",
    shadow: "shadow-blue-200"
  },
  {
    name: "Marcus Rodriguez",
    title: "Head of Marketing",
    company: "Amazon",
    logo: "/amazon.png", // Use the correct logo path for Amazon
    rating: 5,
    text: "The fraud protection alone saved us hundreds of thousands. Every install we get through Progbid converts to real, engaged users. Game-changing platform.",
    avatar: "MR",
    gradient: "from-fuchsia-600 to-pink-600",
    shadow: "shadow-fuchsia-200"
  },
  {
    name: "Emily Foster",
    title: "Performance Manager",
    company: "Crypto.com",
    logo: "/crypto.png", // Use the correct logo path for Crypto.com
    rating: 5,
    text: "Best UA platform we've used. The reports are incredibly detailed, and our dedicated account manager feels like part of our team. Highly recommended!",
    avatar: "EF",
    gradient: "from-emerald-500 to-teal-500",
    shadow: "shadow-teal-200"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50 mx-4 md:mx-8 rounded-[3rem] my-8 shadow-md">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Customer <span className="text-transparent bg-clip-text gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how leading app publishers achieve exceptional growth with Progbid.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative bg-white border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.gradient}`} />
              <CardContent className="p-8 relative">
              {/* UPDATED: Centered Background Brand Logo */}
                <img 
                  src={testimonial.logo} 
                  alt={`${testimonial.company} Watermark`}
                  className="
                   absolute 
                   top-1/2 left-1/2 
                   transform -translate-x-1/2 -translate-y-1/2 
                   h-24 w-auto object-contain 
                   opacity-20 
                   pointer-events-none 
                   z-0
                   " 
                />

                {/* Stars */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 mb-6 leading-relaxed italic text-lg relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 relative z-10">
                  {/* Avatar with Gradient Ring */}
                  <div className={`p-[2px] rounded-full bg-gradient-to-br ${testimonial.gradient}`}>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className={`font-bold text-lg text-transparent bg-clip-text bg-gradient-to-br ${testimonial.gradient}`}>
                        {testimonial.avatar}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      {/* Verified Badge */}
                      <BadgeCheck className={`w-4 h-4 text-blue-500`} />
                    </div>
                    <div className="text-sm text-slate-500 font-medium">
                      {testimonial.title} @ <span className="text-slate-900 font-semibold">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

       {/* Company Logos Strip */}
        <div className="pt-16 border-t border-slate-200">
          <p className="text-center text-slate-600 font-medium tracking-wide text-xl uppercase mb-10">
            Trusted by global leaders in the app economy
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-10">
            {companies.map((company, index) => (
              <div key={index} className="group">
                <img
                  src={company.image}
                  alt={company.name}
                  className="
                    h-20 w-auto object-contain 
                    transition-all duration-500 ease-in-out
                    opacity-85 
                    hover:opacity-100 hover:scale-110 
                    cursor-pointer
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;