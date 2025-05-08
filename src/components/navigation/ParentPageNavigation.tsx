
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ParentPageNavigationProps {
  parentPath: string;
  parentName: string;
}

const ParentPageNavigation = ({ parentPath, parentName }: ParentPageNavigationProps) => {
  return (
    <div className="flex items-center text-sm text-dragon-gray mb-4">
      <Link to={parentPath} className="hover:text-dragon transition-colors">
        {parentName === "Adult Programs" ? "Adult Trips" : parentName}
      </Link>
      <ChevronRight className="mx-2" size={14} />
      <span>Current Trip</span>
    </div>
  );
};

export default ParentPageNavigation;
