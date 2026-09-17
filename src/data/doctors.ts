import { Doctor } from '@/types';

export const doctors: Doctor[] = [
  {
    id: 'dr-munivel',
    name: 'Dr. M. Munivel',
    qualifications: 'MBBS, MD (DVL), Fellowship in Laser & Aesthetic Surgery',
    title: 'Consultant Dermatologist, Venereologist & Aesthetic Surgeon',
    department: 'dermatology',
    registrationNumber: '131636',
    image: '/images/dr-munivel.png',
    slug: 'dr-m-munivel',
    description:
      'Dr. M. Munivel completed his MBBS and MD (DVL) from Tirunelveli Medical College and holds a Fellowship in Laser and Aesthetic Surgery. Registered with the Tamil Nadu Medical Council (Reg No: 131636), he provides comprehensive clinical dermatology, venereology, laser surgery, and aesthetic procedures at Shree Vel\'s Clinic in Thirukovilur.',
    services: [
      'Skin Disease Management',
      'Hair Loss Treatments',
      'Acne & Scar Treatment',
      'Pigmentation Treatment',
      'Wart & Mole Removal',
      'Vitiligo Management',
      'Nail Disorders & Treatment',
      'Aesthetic Procedures',
      'STI Counseling & Management',
    ],
  },
  {
    id: 'dr-bhavyashree',
    name: 'Dr. Bhavyashree S.P',
    qualifications: 'MBBS, MS (OG), DNB (OG)',
    title: 'Consultant Obstetrician & Gynaecologist',
    department: 'obstetrics-gynaecology',
    registrationNumber: '179550',
    image: '/images/dr-bhavyashree.png',
    slug: 'dr-bhavyashree-sp',
    description:
      'Dr. Bhavyashree S.P completed her MBBS and MS (OG) from Tirunelveli Medical College and holds a DNB in Obstetrics & Gynaecology. She is currently working as a Senior Resident at Arunai Medical College, Tiruvannamalai. Registered with the Tamil Nadu Medical Council (Reg No: 179550), she provides comprehensive women\'s healthcare including pregnancy care, menstrual health management, and gynaecological consultations at Shree Vel\'s Clinic in Thirukovilur.',
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
