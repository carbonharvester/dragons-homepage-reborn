
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface YearData {
  title: string;
  ageRange: string;
  description: string;
  icon: React.ElementType;
}

interface MultiYearCurriculumProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    years: YearData[];
  };
}

const MultiYearCurriculum = ({ data }: MultiYearCurriculumProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="overflow-hidden border-none shadow-md">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-2 text-dragon-dark">{data.title}</h3>
          <h4 className="text-xl text-dragon mb-4">{data.subtitle}</h4>
          <p className="text-dragon-gray mb-8">{data.description}</p>
          
          <div className="space-y-6">
            {data.years.map((year, idx) => (
              <div key={idx} className="flex gap-4 border-l-4 border-dragon pl-4 py-2">
                <div className="bg-dragon text-white p-2 rounded-full shrink-0">
                  <year.icon size={24} />
                </div>
                <div>
                  <h5 className="text-lg font-bold text-dragon-dark">{year.title}</h5>
                  <p className="text-sm text-dragon-gray mb-1">{year.ageRange}</p>
                  <p>{year.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h5 className="text-lg font-bold text-dragon-dark mb-3">Customize Your Curriculum</h5>
            <p className="mb-6">We work with you to design a program that fits your school's curriculum, values, and goals. Whether it's STEM, arts, or social justice, your travel curriculum will be unique.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultiYearCurriculum;
