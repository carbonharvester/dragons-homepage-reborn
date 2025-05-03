
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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
import CommunityConservation from "./pages/CommunityConservation";
import EmpoweringWomen from "./pages/EmpoweringWomen";
import AdultPrograms from "./pages/AdultPrograms";
import FAQ from "./pages/FAQ";
import HealthAndSafety from "./pages/HealthAndSafety";
import DiscoverKenya from "./pages/DiscoverKenya";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/partner-with-us" element={<PartnerWithUs />} />
    <Route path="/school-trips" element={<SchoolTrips />} />
    <Route path="/summer-abroad" element={<SchoolTrips />} />
    <Route path="/adult-programs" element={<AdultPrograms />} />
    <Route path="/programs/food-for-education" element={<FoodForEducation />} />
    <Route path="/programs/community-conservation" element={<CommunityConservation />} />
    <Route path="/programs/empowering-women" element={<EmpoweringWomen />} />
    <Route path="/programs/safari-sustainability" element={<FoodForEducation />} />
    <Route path="/programs/capturing-kenya" element={<CapturingKenya />} />
    <Route path="/programs/capturing-kenya/itinerary" element={<CapturingKenyaItinerary />} />
    <Route path="/programs/permaculture-design-course" element={<PermacultureDesignCourse />} />
    <Route path="/curriculum-guide" element={<PartnerWithUs />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:postId" element={<BlogPost />} />
    {/* Resource pages */}
    <Route path="/faq" element={<FAQ />} />
    <Route path="/health-and-safety" element={<HealthAndSafety />} />
    <Route path="/discover-kenya" element={<DiscoverKenya />} />
    {/* Add explicit redirect for old route, if any */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
