
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { programCategories } from '@/data/programsData';
import SchoolTripsTab from './SchoolTripsTab';
import SummerAbroadTab from './SummerAbroadTab';
import MultiYearTab from './MultiYearTab';
import EducatorTripsTab from './EducatorTripsTab';

const TabsSection = () => {
  return (
    <Tabs defaultValue="school-trips" className="w-full">
      <TabsList className="flex flex-wrap justify-center gap-4 mb-10 bg-transparent h-auto">
        {programCategories.map(category => (
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
      
      {/* Adult Trips tab removed */}
    </Tabs>
  );
};

export default TabsSection;
