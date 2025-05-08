
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface ParentPageNavigationProps {
  parentPath: string;
  parentName: string;
}

const ParentPageNavigation = ({ parentPath, parentName }: ParentPageNavigationProps) => {
  return (
    <div className="flex items-center text-sm text-dragon-gray mb-4">
      <Link to={parentPath} className="flex items-center hover:text-dragon transition-colors">
        <ChevronLeft className="mr-1" size={16} />
        <span>Back to {parentName}</span>
      </Link>
    </div>
  );
};

export default ParentPageNavigation;
