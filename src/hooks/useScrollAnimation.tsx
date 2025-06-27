
import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export const useScrollAnimation = (
  elements?: number,
  options: UseScrollAnimationOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    delay = 0,
    stagger = false,
    staggerDelay = 100
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [visibleElements, setVisibleElements] = useState<boolean[]>([]);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            
            if (stagger && elements) {
              // Stagger animation for multiple elements
              const newVisibleElements = new Array(elements).fill(false);
              setVisibleElements(newVisibleElements);
              
              newVisibleElements.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleElements(prev => {
                    const updated = [...prev];
                    updated[index] = true;
                    return updated;
                  });
                }, index * staggerDelay);
              });
            }
          }, delay);
        }
      },
      { threshold, rootMargin }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, delay, stagger, elements, staggerDelay]);

  return {
    elementRef,
    isVisible,
    visibleElements
  };
};

export default useScrollAnimation;
