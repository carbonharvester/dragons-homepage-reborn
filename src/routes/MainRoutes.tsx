
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

// Loading component to show while lazy loading routes
const RouteLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-full max-w-md p-8">
      <Skeleton className="h-12 w-3/4 mb-4" />
      <Skeleton className="h-32 w-full mb-6" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  </div>
);

// Lazily loaded pages
const Index = lazy(() => import('@/pages/Index'));
const SchoolTrips = lazy(() => import('@/pages/SchoolTrips'));
const SummerAbroad = lazy(() => import('@/pages/SummerAbroad'));
const MultiYearCurriculum = lazy(() => import('@/pages/MultiYearCurriculum'));
const AdultPrograms = lazy(() => import('@/pages/AdultPrograms'));
const Programs = lazy(() => import('@/pages/Programs'));
const EmpoweringWomen = lazy(() => import('@/pages/EmpoweringWomen'));
const FoodForEducation = lazy(() => import('@/pages/FoodForEducation'));
const CommunityConservation = lazy(() => import('@/pages/CommunityConservation'));
const CapturingKenya = lazy(() => import('@/pages/CapturingKenya'));
const CapturingKenyaItinerary = lazy(() => import('@/pages/CapturingKenyaItinerary'));
const FeedingTheFuture = lazy(() => import('@/pages/FeedingTheFuture'));
const FeedingTheFutureItinerary = lazy(() => import('@/pages/FeedingTheFutureItinerary'));
const PermacultureDesignCourse = lazy(() => import('@/pages/PermacultureDesignCourse'));
const AboutUs = lazy(() => import('@/pages/AboutUs'));
const DiscoverKenya = lazy(() => import('@/pages/DiscoverKenya'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const Podcast = lazy(() => import('@/pages/Podcast'));
const HealthAndSafety = lazy(() => import('@/pages/HealthAndSafety'));
const PartnerWithUs = lazy(() => import('@/pages/PartnerWithUs'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const MainRoutes = () => {
  return (
    <Suspense fallback={<RouteLoading />}>
      <Routes>
        <Route path="/" element={<Index />} />
        
        {/* Program Routes */}
        <Route path="/programs/school-trips" element={<SchoolTrips />} />
        <Route path="/programs/summer-abroad" element={<SummerAbroad />} />
        <Route path="/programs/multi-year-curriculum" element={<MultiYearCurriculum />} />
        <Route path="/programs/adult-programs" element={<AdultPrograms />} />
        <Route path="/programs" element={<Programs />} />
        
        {/* Trip Routes */}
        <Route path="/programs/empowering-women" element={<EmpoweringWomen />} />
        <Route path="/programs/food-for-education" element={<FoodForEducation />} />
        <Route path="/programs/community-conservation" element={<CommunityConservation />} />
        <Route path="/programs/capturing-kenya" element={<CapturingKenya />} />
        <Route path="/programs/capturing-kenya/itinerary" element={<CapturingKenyaItinerary />} />
        <Route path="/programs/feeding-the-future" element={<FeedingTheFuture />} />
        <Route path="/programs/feeding-the-future/itinerary" element={<FeedingTheFutureItinerary />} />
        <Route path="/programs/permaculture-design" element={<PermacultureDesignCourse />} />
        
        {/* Main Pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/discover/kenya" element={<DiscoverKenya />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/health-safety" element={<HealthAndSafety />} />
        <Route path="/partner" element={<PartnerWithUs />} />
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
