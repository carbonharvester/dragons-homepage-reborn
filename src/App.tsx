
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import PartnerWithUs from "./pages/PartnerWithUs";
import NotFound from "./pages/NotFound";
import FoodForEducation from "./pages/FoodForEducation";
import PermacultureDesignCourse from "./pages/PermacultureDesignCourse";
import SchoolTrips from "./pages/SchoolTrips";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CapturingKenya from "./pages/CapturingKenya";
import CapturingKenyaItinerary from "./pages/CapturingKenyaItinerary";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/school-trips" element={<SchoolTrips />} />
          <Route path="/programs/food-for-education" element={<FoodForEducation />} />
          <Route path="/programs/community-conservation" element={<FoodForEducation />} />
          <Route path="/programs/empowering-women" element={<FoodForEducation />} />
          <Route path="/programs/safari-sustainability" element={<FoodForEducation />} />
          <Route path="/programs/capturing-kenya" element={<CapturingKenya />} />
          <Route path="/programs/capturing-kenya/itinerary" element={<CapturingKenyaItinerary />} />
          <Route path="/programs/permaculture-design-course" element={<PermacultureDesignCourse />} />
          <Route path="/curriculum-guide" element={<PartnerWithUs />} /> {/* Redirecting to Partner page for now */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
