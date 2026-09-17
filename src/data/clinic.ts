import { ClinicInfo } from '@/types';

export const clinic: ClinicInfo = {
  name: "Shree Vel's Clinic",
  fullName: "Shree Vel's Skin Care & Women's Health Clinic",
  tagline: 'Where Skin Meets Care, Women Meet Comfort',
  phone: '8778896736',
  alternatePhone: '7338861038',
  whatsapp: '918778896736',
  email: 'shreevelsclinic@gmail.com',
  mapsUrl:
    "https://www.google.com/maps/place/Shree+Vel's+skin+care+and+women's+health+Clinic(+DERMATOLOGY+%26GYNECOLOGY)/@11.9639097,79.2025602,17z/data=!4m8!3m7!1s0x3bacaf23e7f8cac5:0x5269132f4901fb43!8m2!3d11.9639097!4d79.2025602!9m1!1b1!16s%2Fg%2F11xrzh9tpq!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",
  address: {
    street: 'No.84, South Street',
    area: 'Maruthamalaiyan Agencies Opposite',
    city: 'Thirukovilur',
    state: 'Tamil Nadu',
    pincode: '605757',
    full: 'No.84, South Street, Maruthamalaiyan Agencies Opposite, Thirukovilur - 605757, Tamil Nadu, India',
  },
  coordinates: {
    lat: 11.9833,
    lng: 79.2083,
  },
  social: {
    instagram: 'https://www.instagram.com/shree_vels/',
  },
  siteUrl: 'https://www.shreevelsclinic.com',
};

export const openingHours = {
  consultationDays: 'Monday to Saturday',
  dermatology: {
    department: 'DERMATOLOGY CONSULTATION',
    doctor: 'Dr. Munivel',
    qualification: 'MD (DVL), Fellowship in Laser & Aesthetic Surgery',
    timings: ['1:30 PM – 4:30 PM', '5:30 PM – 8:30 PM'],
    display: '1:30 PM – 4:30 PM & 5:30 PM – 8:30 PM',
  },
  obgyn: {
    department: "WOMEN'S HEALTH / OBGYN",
    doctor: 'Dr. Bhavyashree S.P',
    qualification: 'MS (OG), DNB (OG)',
    timings: ['5:00 PM – 8:30 PM'],
    display: '5:00 PM – 8:30 PM',
  },
  sunday: 'Sunday: Prior Appointment Only',
  note: 'Prior appointment recommended for clinical procedures and specialized consultations.',
  placeholder: false,
};
