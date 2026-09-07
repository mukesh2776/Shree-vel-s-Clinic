import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} mb-12`}>
      <div className="w-12 h-1 rounded bg-accent mb-4"></div>
      <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${light ? 'text-white' : 'text-charcoal'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-lg ${light ? 'text-gray-200' : 'text-secondary-text'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
