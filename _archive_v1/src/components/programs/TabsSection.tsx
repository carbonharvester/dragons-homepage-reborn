
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { programCategories } from '@/data/programsData';
import SchoolTripsTab from './SchoolTripsTab';
import SummerAbroadTab from './SummerAbroadTab';
import EducatorTripsTab from './EducatorTripsTab';
import FamilyTripsTab from './FamilyTripsTab';

const TabsSection = () => {
  // Filter out multi-year curriculum from the categories
  const visibleCategories = programCategories.filter(category => category.id !== 'multi-year');
  
  return (
    <Tabs defaultValue="school-trips" className="w-full">
      <TabsList className="flex flex-wrap justify-center gap-4 mb-10 bg-transparent h-auto">
        {visibleCategories.map(category => (
          <TabsTrigger 
            key={category.id} 
            value={category.id} 
            className="px-6 py-3 min-w-[160px] h-12 w-full sm:w-auto data-[state=active]:bg-dragon data-[state=active]:text-white bg-white border border-dragon text-dragon hover:bg-dragon hover:text-white"
          >
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="school-trips" className="mt-8">
        <SchoolTripsTab />
      </TabsContent>

      <TabsContent value="summer-abroad" className="mt-8">
        <SummerAbroadTab />
      </TabsContent>

      <TabsContent value="educator-trips" className="mt-8">
        <EducatorTripsTab />
      </TabsContent>

      <TabsContent value="family-trips" className="mt-8">
        <FamilyTripsTab />
      </TabsContent>
    </Tabs>
  );
};

export default TabsSection;
