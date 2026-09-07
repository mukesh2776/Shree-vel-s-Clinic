import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Doctor } from '@/types';

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  const departmentLabel =
    doctor.department === 'dermatology'
      ? 'Dermatology & Aesthetics'
      : 'Obstetrics & Gynaecology';

  const departmentLink =
    doctor.department === 'dermatology'
      ? '/dermatology'
      : '/obstetrics-gynaecology';

  return (
    <div className="card group hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100">
      <div className="relative w-full aspect-square bg-light-green">
        <Image
          src={doctor.image}
          alt={`${doctor.name} - ${doctor.title}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
          {departmentLabel}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-charcoal font-heading">{doctor.name}</h3>
        <p className="text-accent font-medium text-sm mb-1">{doctor.qualifications}</p>
        <p className="text-primary font-semibold text-sm mb-2">{doctor.title}</p>
        <div className="text-xs text-secondary-text bg-light-green/60 px-2.5 py-1 rounded-full w-fit mb-4">
          TNMC Reg No: {doctor.registrationNumber}
        </div>
        
        <p className="text-secondary-text text-sm mb-6 line-clamp-3">
          {doctor.description}
        </p>
        
        <div className="mt-auto mb-6">
          <h4 className="text-sm font-bold text-charcoal mb-2">Key Services:</h4>
          <ul className="space-y-1">
            {doctor.services.slice(0, 4).map((service, idx) => (
              <li key={idx} className="flex items-start text-sm text-secondary-text">
                <svg className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {service}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Link 
            href={departmentLink}
            className="btn-outline text-center py-2.5 rounded-xl text-primary border-primary hover:bg-primary hover:text-white transition-colors block text-sm font-semibold"
          >
            Department
          </Link>
          <Link 
            href="/appointment"
            className="btn-primary text-center py-2.5 rounded-xl text-white block text-sm font-semibold"
          >
            Consult
          </Link>
        </div>
      </div>
    </div>
  );
}
