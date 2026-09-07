import { Service } from '@/types';

export const dermatologyServices: Service[] = [
  {
    id: 'skin-diseases',
    name: 'Skin Disease Management',
    description:
      'Comprehensive diagnosis and treatment for various skin conditions including psoriasis, fungal infections, eczema, urticaria, and other dermatological conditions.',
    details: ['Psoriasis', 'Fungal Infections', 'Eczema', 'Urticaria', 'Other Skin Conditions'],
    department: 'dermatology',
    icon: '🩺',
  },
  {
    id: 'hair-growth',
    name: 'Hair & Scalp Treatments',
    description:
      'Advanced hair growth treatments using PRP therapy, GFC (Growth Factor Concentrate), and other growth factor-based approaches for hair loss and scalp conditions.',
    details: ['PRP Therapy', 'GFC (Growth Factor Concentrate)', 'Growth Factor Treatments'],
    department: 'dermatology',
    icon: '💆',
  },
  {
    id: 'acne-scars',
    name: 'Acne & Acne Scar Treatment',
    description:
      'Specialised treatment for active acne and acne scarring using PRP, microneedling, scar revision, and other evidence-based approaches.',
    details: ['PRP', 'Microneedling', 'Scar Revision'],
    department: 'dermatology',
    icon: '✨',
  },
  {
    id: 'vitiligo',
    name: 'Vitiligo Management',
    description:
      'Comprehensive vitiligo care including excimer laser therapy, medical management, and surgical treatment options.',
    details: ['Excimer Laser Therapy', 'Medical Treatment', 'Surgical Treatments'],
    department: 'dermatology',
    icon: '🔬',
  },
  {
    id: 'pigmentation',
    name: 'Pigmentation Treatment',
    description:
      'Professional treatments for skin pigmentation concerns using chemical peels, microdermabrasion, PRP, and other dermatological approaches.',
    details: ['Chemical Peels', 'Microdermabrasion', 'PRP'],
    department: 'dermatology',
    icon: '🌟',
  },
  {
    id: 'wart-mole',
    name: 'Wart, Skin Tag & Mole Removal',
    description:
      'Safe and effective removal of warts, skin tags, and moles using radiofrequency and electrocautery excision techniques.',
    details: ['Radiofrequency Removal', 'Electrocautery Excision'],
    department: 'dermatology',
    icon: '⚕️',
  },
  {
    id: 'sti',
    name: 'Venereology (STI Care)',
    description:
      'Confidential consultation, counselling, and management for sexually transmitted infections including genital ulcers, discharge, and related conditions.',
    details: ['Genital Ulcers', 'Discharge Management', 'Counseling & Management'],
    department: 'dermatology',
    icon: '🛡️',
  },
];

export const obstetricsServices: Service[] = [
  {
    id: 'preconception',
    name: 'Pre-conceptional Counselling',
    description:
      'Comprehensive pre-pregnancy guidance and health evaluation to help couples prepare for a healthy pregnancy.',
    department: 'obstetrics-gynaecology',
    icon: '💝',
  },
  {
    id: 'antenatal-postnatal',
    name: 'Antenatal & Postnatal Care',
    description:
      'Complete pregnancy care from conception through delivery and the postnatal period, including regular check-ups and monitoring.',
    department: 'obstetrics-gynaecology',
    icon: '🤰',
  },
  {
    id: 'menstrual-disorders',
    name: 'Menstrual Disorders Management',
    description:
      'Evaluation and management of menstrual irregularities, heavy bleeding, painful periods, and other menstrual health concerns.',
    department: 'obstetrics-gynaecology',
    icon: '📋',
  },
  {
    id: 'infertility',
    name: 'Infertility Evaluation',
    description:
      'Professional assessment and evaluation for couples experiencing difficulty in conceiving, with personalised guidance and support.',
    department: 'obstetrics-gynaecology',
    icon: '🔍',
  },
  {
    id: 'pcod',
    name: 'PCOD Treatment',
    description:
      'Diagnosis and management of Polycystic Ovarian Disease (PCOD) with personalised treatment plans for hormonal balance and symptom relief.',
    department: 'obstetrics-gynaecology',
    icon: '💊',
  },
  {
    id: 'contraceptive',
    name: 'Contraceptive Counselling & Services',
    description:
      'Confidential counselling and guidance on contraceptive options suited to individual needs and family planning goals.',
    department: 'obstetrics-gynaecology',
    icon: '❤️',
  },
];

export const allServices: Service[] = [...dermatologyServices, ...obstetricsServices];
