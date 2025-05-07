
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ParentPageNavigationProps {
  parentPath: string;
  parentName: string;
}

const ParentPageNavigation: React.FC<ParentPageNavigationProps> = ({ 
  parentPath, 
  parentName 
}) => {
  return (
    <div>
      <Button 
        variant="ghost" 
        asChild 
        className="text-dragon hover:text-dragon-dark hover:bg-dragon-beige pl-2"
      >
        <Link to={parentPath}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {parentName}
        </Link>
      </Button>
    </div>
  );
};

export default ParentPageNavigation;
