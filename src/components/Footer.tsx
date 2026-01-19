import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ScrollToTopNavLink from "./ScrollToTopNavLink";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="relative bg-[#0B0F19] text-white overflow-hidden border-t border-white/5">
      
      {/* --- DECORATIVE BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img className="h-20 w-auto" src="/ProgbidLogo.png" alt="logo" />
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              Accelerating app growth with smart user acquisition and AI-driven optimization.
            </p>
            
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/app-ladder/" },
                { icon: Instagram, href: "#" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-slate-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-500 rounded-full" />
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "User Acquisition", to: "/user-acquisition" },
                { name: "Retargeting", to: "/retargeting" },
                { name: "Branding", to: "/branding" }
              ].map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <li key={item.name}>
                    <ScrollToTopNavLink
                      to={item.to}
                      className={`group flex items-center gap-1 transition-all duration-300 ${
                        isActive 
                          ? "text-blue-400 translate-x-2" 
                          : "text-slate-400 hover:text-white hover:translate-x-2"
                      }`}
                    >
                      <ChevronRight 
                        className={`w-3 h-3 text-blue-500 transition-all duration-300 ${
                          isActive 
                            ? "opacity-100 translate-x-0" 
                            : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                      />
                      <span>{item.name}</span>
                    </ScrollToTopNavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company - UPDATED WITH ARROW EFFECT */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-violet-500 rounded-full" />
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About Us", to: "/about" },
                { name: "Careers", to: "", badge: "Hiring" },
                { name: "Contact", to: "/contact" }
              ].map((item) => {
                const isActive = location.pathname === item.to && item.to !== "";
                return (
                  <li key={item.name}>
                    {item.name === "Careers" ? (
                      // Using standard Link for Careers if it doesn't need ScrollToTop or is external/placeholder
                      <Link 
                        to={item.to}
                        className="group flex items-center gap-1 text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300"
                      >
                         <ChevronRight 
                          className="w-3 h-3 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        />
                        <span>{item.name}</span>
                      </Link>
                    ) : (
                      <ScrollToTopNavLink
                        to={item.to}
                        className={`group flex items-center gap-1 transition-all duration-300 ${
                          isActive 
                            ? "text-blue-400 translate-x-2" 
                            : "text-slate-400 hover:text-white hover:translate-x-2"
                        }`}
                      >
                        <ChevronRight 
                          className={`w-3 h-3 text-blue-500 transition-all duration-300 ${
                            isActive 
                              ? "opacity-100 translate-x-0" 
                              : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                          }`}
                        />
                        <span>{item.name}</span>
                      </ScrollToTopNavLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact - UPDATED WITH HOVER EFFECT ON LOCATION */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-pink-500 rounded-full" />
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 group">
                <div className="p-1.5 rounded bg-white/5 group-hover:bg-blue-500/20 group-hover:text-blue-400 text-slate-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:sales@progbid.com" className="text-slate-400 hover:text-white transition-colors">
                  sales@progbid.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-1.5 rounded bg-white/5 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 text-slate-400 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="https://wa.me/+12177735685" className="text-slate-400 hover:text-white transition-colors">
                  +1 (217) 773-5685
                </a>
              </div>
              
              {/* Location - Now with Hover Effect */}
              <div className="flex items-start gap-3 group cursor-default">
                <div className="p-1.5 rounded bg-white/5 group-hover:bg-violet-500/20 group-hover:text-violet-400 text-slate-400 transition-colors mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-slate-400 group-hover:text-white transition-colors leading-snug">
                  28 Geary St STE 650, 531, San Francisco, US
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm">
              © 2025 Progbid. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                <Link
                  key={link}
                  to=""
                  className="text-slate-500 hover:text-white transition-colors duration-300 hover:underline decoration-blue-500 underline-offset-4"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;