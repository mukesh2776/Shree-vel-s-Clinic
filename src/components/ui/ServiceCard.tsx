import React from 'react';
import Link from 'next/link';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const departmentUrl =
    service.department === 'dermatology'
      ? '/dermatology'
      : '/obstetrics-gynaecology';

  return (
    <div 
      className="card hover:shadow-card-hover transition-all duration-300 bg-white rounded-2xl p-6 border border-gray-100 flex flex-col h-full group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 bg-light-green text-primary rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {service.icon || '⚕️'}
      </div>
      
      <h3 className="text-xl font-bold text-charcoal font-heading mb-2">{service.name}</h3>
      <p className="text-secondary-text text-sm mb-4 flex-grow">
        {service.description}
      </p>
      
      {service.details && service.details.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {service.details.slice(0, 3).map((sub, idx) => (
            <span key={idx} className="text-xs bg-light-green text-primary font-medium px-2.5 py-1 rounded-full border border-primary/10">
              {sub}
            </span>
          ))}
        </div>
      )}
      
      <Link 
        href={departmentUrl}
        className="text-primary font-semibold text-sm flex items-center hover:text-accent transition-colors mt-auto w-fit"
      >
        Learn More
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
}
