'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  animation?: string; // alias for direction — accepts 'fade-up', 'fade-left', 'fade-right'
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction,
  animation,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  // Parse animation string to direction, or use direction prop
  const resolvedDirection = (() => {
    if (direction) return direction;
    if (animation) {
      if (animation.includes('right')) return 'right' as const;
      if (animation.includes('left')) return 'left' as const;
      return 'up' as const;
    }
    return 'up' as const;
  })();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getTransform = () => {
    switch (resolvedDirection) {
      case 'up':
        return 'translateY(20px)';
      case 'left':
        return 'translateX(-20px)';
      case 'right':
        return 'translateX(20px)';
      default:
        return 'none';
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0)' : getTransform(),
    transition: `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`,
  };

  return (
    <div ref={domRef} className={className} style={style}>
      {children}
    </div>
  );
}
