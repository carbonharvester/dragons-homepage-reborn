
import { useState, useEffect } from 'react';

interface SectionVisibilityState {
  [key: string]: boolean;
}

export const useSectionVisibility = (sectionIds: string[]) => {
  const [sectionsVisible, setSectionsVisible] = useState<SectionVisibilityState>(
    sectionIds.reduce((acc, id) => ({ ...acc, [id]: false }), {})
  );

  useEffect(() => {
    const observerOptions = {
      rootMargin: '200px 0px',
      threshold: 0.1
    };

    // Create observer for sections
    const sectionsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setSectionsVisible(prev => ({ ...prev, [sectionId]: true }));
        }
      });
    }, observerOptions);

    // Observe sections
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.id = id; // Ensure ID is set
        sectionsObserver.observe(element);
      }
    });

    return () => {
      sectionsObserver.disconnect();
    };
  }, [sectionIds]);

  return sectionsVisible;
};

export default useSectionVisibility;
