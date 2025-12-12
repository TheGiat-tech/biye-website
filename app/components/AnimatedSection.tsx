'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  animationClass?: string;
}

export default function AnimatedSection({
  id,
  className = '',
  children,
  animationClass = 'animate-fade-in-up',
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
    >
      {children}
    </section>
  );
}
