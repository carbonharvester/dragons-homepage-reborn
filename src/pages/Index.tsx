
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import ProgramsSection from '@/components/ProgramsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, University } from 'lucide-react';

const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <div className="py-16 bg-white">
          <div className="container-wide text-center">
            <h2 className="section-heading">Experience Learning Through Adventure</h2>
            <p className="section-subheading mx-auto">Since 2023, we've specialised in immersive experiences that combine authentic cultural engagement, wilderness exploration, and transformative education, with social impact and sustainability.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=200&auto=format" alt="School logo" />
                    <AvatarFallback><University className="h-8 w-8 text-dragon" /></AvatarFallback>
                  </Avatar>
                  <p className="text-dragon-gray text-center">Life Changing Experiences</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=200&auto=format" alt="School logo" />
                    <AvatarFallback><GraduationCap className="h-8 w-8 text-dragon" /></AvatarFallback>
                  </Avatar>
                  <p className="text-dragon-gray text-center">Students</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=200&auto=format" alt="School logo" />
                    <AvatarFallback><University className="h-8 w-8 text-dragon" /></AvatarFallback>
                  </Avatar>
                  <p className="text-dragon-gray text-center">Programme Leaders</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=200&auto=format" alt="School logo" />
                    <AvatarFallback><GraduationCap className="h-8 w-8 text-dragon" /></AvatarFallback>
                  </Avatar>
                  <p className="text-dragon-gray text-center">Alumni Worldwide</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <ProgramsSection />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>;
};

export default Index;
