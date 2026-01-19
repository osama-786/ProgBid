import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, Handshake } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    AppName: "",
    budget: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", AppName: "", budget: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    // Reverted to py-2 to match your original size request
    <section className="relative py-24 overflow-hidden bg-white mx-4 md:mx-8 rounded-[3rem] my-8 shadow-md">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-50/50 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Ready to <span className="text-transparent bg-clip-text gradient-text">Get Started?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Let's discuss how Progbid can accelerate your app's growth. Our experts are ready to help you succeed.
          </p>
        </div>

        {/* Reverted to gap-12 and max-w-6xl to match original */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* LEFT COLUMN: Contact Form */}
          <Card className="border border-slate-100 bg-white/80 backdrop-blur-sm h-full flex flex-col shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-3 text-slate-900">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 flex-grow flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700">App Name</label>
                    <Input
                      name="AppName"
                      value={formData.AppName}
                      onChange={handleChange}
                      placeholder="Your App name"
                      className="bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700">Monthly Budget</label>
                    <Input
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g., $10,000"
                      className="bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your app and growth goals..."
                    required
                    rows={4}
                    className="bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 transition-all resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-10 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-bold shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* RIGHT COLUMN: Contact Info */}
          <div className="flex flex-col h-full justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                 {/* Added Handshake Icon as requested */}
                <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Get in touch</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our team of growth experts is here to help you scale your app. Whether you're just starting out or looking to optimize existing campaigns, we'll create a custom strategy for your success.
              </p>
            </div>

            <div className="space-y-6 flex-grow flex flex-col justify-center">
              {/* Email Card */}
              <a href="mailto:sales@Progbid.us" className="block group">
                <Card className="border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Email Us</div>
                      <div className="text-slate-500 text-sm group-hover:text-blue-600 transition-colors">sales@progbid.com</div>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </CardContent>
                </Card>
              </a>

              {/* Whatsapp Card */}
              <a href="https://wa.me/+12177735685" className="block group">
                <Card className="border-slate-100 bg-white hover:border-green-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">WhatsApp Only</div>
                      <div className="text-slate-500 text-sm group-hover:text-green-600 transition-colors">+1 (217) 773-5685</div>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                  </CardContent>
                </Card>
              </a>

              {/* Office Card */}
              <div className="block group">
                <Card className="border-slate-100 bg-white hover:border-violet-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 rounded-lg bg-violet-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-violet-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Visit Us</div>
                      <div className="text-slate-500 text-sm group-hover:text-violet-600 transition-colors">
                        28 Geary St STE 650, 531, San Francisco, US
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;