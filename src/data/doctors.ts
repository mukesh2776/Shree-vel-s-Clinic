import { Doctor } from '@/types';

export const doctors: Doctor[] = [
  {
    id: 'dr-munivel',
    name: 'Dr. M. Munivel',
    qualifications: 'MBBS., MD (DVL)',
    title: 'Consultant Dermatologist, Venereologist & Aesthetic Surgeon',
    department: 'dermatology',
    registrationNumber: '131636',
    image: '/images/dr-munivel.png',
    slug: 'dr-m-munivel',
    description:
      'Dr. M. Munivel is a qualified Dermatologist, Venereologist, and Aesthetic Surgeon registered with the Tamil Nadu Medical Council. He provides comprehensive skin care, hair treatments, and aesthetic procedures at Shree Vel\'s Clinic in Thirukovilur.',
    services: [
      'Skin Disease Management',
      'Hair Loss Treatments',
      'Acne & Scar Treatment',
      'Pigmentation Treatment',
      'Wart & Mole Removal',
      'Vitiligo Management',
      'Aesthetic Procedures',
      'STI Counseling & Management',
    ],
  },
  {
    id: 'dr-bhavyashree',
    name: 'Dr. Bhavyashree S.P',
    qualifications: 'MBBS., MS (OG)',
    title: 'Consultant Obstetrician & Gynaecologist',
    department: 'obstetrics-gynaecology',
    registrationNumber: '179550',
    image: '/images/dr-bhavyashree.png',
    slug: 'dr-bhavyashree-sp',
    description:
      'Dr. Bhavyashree S.P is a qualified Obstetrician and Gynaecologist registered with the Tamil Nadu Medical Council. She provides comprehensive women\'s healthcare including pregnancy care, menstrual health management, and gynaecological consultations at Shree Vel\'s Clinic in Thirukovilur.',
    services: [
      'Pre-conceptional Counselling',
      'Antenatal & Postnatal Care',
      'Menstrual Disorders Management',
      'Infertility Evaluation',
      'PCOD Treatment',
      'Contraceptive Counselling',
    ],
  },
];

export const getDoctorByDepartment = (department: string): Doctor | undefined =>
  doctors.find((d) => d.department === department);

export const getDoctorById = (id: string): Doctor | undefined =>
  doctors.find((d) => d.id === id);
