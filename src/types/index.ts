export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  title: string;
  department: 'dermatology' | 'obstetrics-gynaecology';
  registrationNumber: string;
  image: string;
  slug: string;
  description: string;
  services: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  details?: string[];
  department: 'dermatology' | 'obstetrics-gynaecology';
  icon: string;
  image?: string;
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  description: string;
  doctor: Doctor;
  services: Service[];
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'clinic' | 'doctors' | 'results';
  width: number;
  height: number;
  treatmentType?: string;
}

export interface ResultMedia {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  treatment: string;
  doctor: string;
  description: string;
  category: 'hair' | 'acne-skin' | 'wart-lesion' | 'vitiligo' | 'all';
  condition?: string;
  treatmentApproach?: string;
  duration?: string;
  outcome?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: 'general' | 'dermatology' | 'obstetrics';
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  treatment: string;
  doctorName: string;
  department: 'dermatology' | 'obstetrics-gynaecology';
  review: string;
  rating: number;
  location?: string;
  date?: string;
  source?: string;
}

export interface ClinicInfo {
  name: string;
  fullName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  mapsUrl: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  social: {
    instagram: string;
  };
  siteUrl: string;
}
