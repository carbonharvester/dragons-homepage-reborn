
import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

// Main Pages
import Index from "@/pages/Index";
import AboutUs from "@/pages/AboutUs";
import PartnerWithUs from "@/pages/PartnerWithUs";
import NotFound from "@/pages/NotFound";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Auth from "@/pages/Auth";
import TripRegistration from "@/pages/TripRegistration";
import MediaConsentPolicy from "@/pages/MediaConsentPolicy";
import StudentSignup from "@/pages/StudentSignup";
import StudentLogin from "@/pages/StudentLogin";
import StudentDashboard from "@/pages/StudentDashboard";
// import Podcast from "@/pages/Podcast"; - Podcast page hidden
import ImpactScorecard from "@/pages/ImpactScorecard";

// Program Categories
import Programs from "@/pages/Programs";
import SchoolTrips from "@/pages/SchoolTrips";
import SchoolTripsLanding from "@/pages/SchoolTripsLanding";
import SummerAbroad from "@/pages/SummerAbroad";
import MultiYearCurriculum from "@/pages/MultiYearCurriculum";
import AdultPrograms from "@/pages/AdultPrograms";
import EducatorTrips from "@/pages/EducatorTrips";

// School Trip Programs
import FoodForEducation from "@/pages/FoodForEducation";
import CommunityConservation from "@/pages/CommunityConservation";
import EmpoweringWomen from "@/pages/EmpoweringWomen";

// Summer Programs
import CapturingKenya from "@/pages/CapturingKenya";
import CapturingKenyaItinerary from "@/pages/CapturingKenyaItinerary";
import FeedingTheFuture from "@/pages/FeedingTheFuture";
import FeedingTheFutureItinerary from "@/pages/FeedingTheFutureItinerary";

// Educator Programs
import EducationalLeadership from "@/pages/EducationalLeadership";

// Adult Programs
import PermacultureDesignCourse from "@/pages/PermacultureDesignCourse";

// Resources
import FAQ from "@/pages/FAQ";
import HealthAndSafety from "@/pages/HealthAndSafety";
import DiscoverKenya from "@/pages/DiscoverKenya";

const MainRoutes = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/partner-with-us" element={<PartnerWithUs />} />
      <Route path="/curriculum-guide" element={<PartnerWithUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:postId" element={<BlogPost />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/trip-registration" element={<TripRegistration />} />
      <Route path="/media-consent-policy" element={<MediaConsentPolicy />} />
      {/* Podcast route removed */}
      
      {/* Student Portal Routes */}
      <Route path="/student/signup" element={<StudentSignup />} />
      <Route path="/student/login" element={<StudentLogin />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      
      {/* Program Categories */}
      <Route path="/programs" element={<Programs />} />
      <Route path="/school-trips" element={<SchoolTrips />} />
      <Route path="/school-trips-landing" element={<SchoolTripsLanding />} />
      <Route path="/summer-abroad" element={<SummerAbroad />} />
      <Route path="/multi-year-curriculum" element={<MultiYearCurriculum />} />
      <Route path="/adult-programs" element={<AdultPrograms />} />
      <Route path="/educator-trips" element={<EducatorTrips />} />
      
      {/* School Trip Programs */}
      <Route path="/programs/food-for-education" element={<FoodForEducation />} />
      <Route path="/programs/community-conservation" element={<CommunityConservation />} />
      <Route path="/programs/empowering-women" element={<EmpoweringWomen />} />
      
      {/* Summer Programs */}
      <Route path="/programs/capturing-kenya" element={<CapturingKenya />} />
      <Route path="/programs/capturing-kenya/itinerary" element={<CapturingKenyaItinerary />} />
      <Route path="/programs/feeding-the-future" element={<FeedingTheFuture />} />
      <Route path="/programs/feeding-the-future/itinerary" element={<FeedingTheFutureItinerary />} />
      <Route path="/programs/roots-of-change" element={<Navigate to="/programs/feeding-the-future" replace />} />
      <Route path="/programs/roots-of-change/itinerary" element={<Navigate to="/programs/feeding-the-future/itinerary" replace />} />
      
      {/* Educator Programs */}
      <Route path="/programs/educational-leadership" element={<EducationalLeadership />} />
      
      {/* Adult Trips */}
      <Route path="/programs/permaculture-design-course" element={<PermacultureDesignCourse />} />
      
      {/* Resource Pages */}
      <Route path="/faq" element={<FAQ />} />
      <Route path="/health-and-safety" element={<HealthAndSafety />} />
      <Route path="/discover-kenya" element={<DiscoverKenya />} />
      <Route path="/impact-scorecard" element={<ImpactScorecard />} />
      
      {/* 404 Catch All */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
