import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UserAcquisitionPage from "./pages/UserAcquisition";
import RetargetingReEngagementPage from "./pages/Retargeting";
import BrandingPage from "./pages/Branding";
import ContactUsPage from "./pages/Contact";
import AboutUsPage from "./pages/Aboutus";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/user-acquisition" element={<UserAcquisitionPage />} />
          <Route path="/retargeting" element={<RetargetingReEngagementPage/>} />
          <Route path="/branding" element={<BrandingPage/>} />
          <Route path="/contact" element={<ContactUsPage/>} />
          <Route path="/about" element={<AboutUsPage/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;