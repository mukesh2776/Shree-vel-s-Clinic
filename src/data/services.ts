import { Service } from '@/types';

export const dermatologyServices: Service[] = [
  {
    id: 'acne-scar-clinic',
    name: 'Acne & Acne Scar Clinic',
    description:
      'Treat acne early. Prevent and manage acne scars appropriately. Evidence-based protocols tailored to active breakout severity and scar morphology.',
    details: [
      'Medical acne treatment',
      'Indication-based chemical peels',
      'Microneedling Radiofrequency (MRF) machine for acne scars',
      'Fractional microneedling & collagen induction',
      'Subcision for tethered scars',
      'Fractional CO₂ laser where appropriate',
      'Personalised combination therapy',
    ],
    department: 'dermatology',
    icon: '✨',
  },
  {
    id: 'hair-scalp-clinic',
    name: 'Hair & Scalp Clinic',
    description:
      'Hair loss is not one disease — proper diagnosis comes first. Personalised treatment, not a one-size-fits-all approach.',
    details: [
      'Trichoscopy-guided scalp assessment',
      'Male & Female Pattern Hair Loss',
      'Telogen Effluvium & Alopecia Areata',
      'Autologous PRP therapy',
      'GFC (Growth Factor Concentrate) therapy',
      'Scalp disorders & Seborrhoeic Dermatitis',
    ],
    department: 'dermatology',
    icon: '💆',
  },
  {
    id: 'advanced-chemical-peels',
    name: 'Advanced Chemical Peels',
    description:
      'Standardised, indication-based chemical peel treatments selected strictly according to skin type, phototype, and clinical diagnosis without unverified claims.',
    details: [
      'Pigmentation & Melasma care',
      'Active acne management',
      'Post-acne marks & erythema',
      'Uneven skin tone refinement',
      'Epidermal texture renewal',
    ],
    department: 'dermatology',
    icon: '🧪',
  },
  {
    id: 'co2-laser',
    name: 'CO₂ Laser Treatment',
    description:
      'Fractional CO₂ laser resurfacing and surgical ablation. Treatment is rigorously selected according to dermatological diagnosis, Fitzpatrick skin type, and tissue depth.',
    details: [
      'Atrophic acne scar revision',
      'Selected traumatic & surgical scars',
      'Skin texture irregularities',
      'Selected benign epidermal lesions',
      'Customised downtime management',
    ],
    department: 'dermatology',
    icon: '🔬',
  },
  {
    id: 'microdermabrasion',
    name: 'Microdermabrasion',
    description:
      'In-clinic clinical microdermabrasion system for gentle mechanical exfoliation. Treatment suitability depends on individual skin condition and barrier integrity.',
    details: [
      'Uneven skin texture smoothing',
      'Superficial skin tone correction',
      'Dull-looking skin revitalization',
      'Superficial skin concern clearance',
      'Barrier-safe clinical protocols',
    ],
    department: 'dermatology',
    icon: '💎',
  },
  {
    id: 'combination-therapy',
    name: 'Personalised Combination Therapy',
    description:
      'One treatment does not suit every patient. Based on diagnosis, severity, skin type, and goals, scientific multi-modality combinations are designed.',
    details: [
      'Medical treatment + Procedures',
      'Chemical Peel + Medical treatment',
      'Microneedling + Medical treatment',
      'Laser + Supportive treatment',
      'Hair-loss medical + Regenerative procedures',
      'Scar treatment + Combination procedures',
    ],
    department: 'dermatology',
    icon: '🧬',
  },
  {
    id: 'pigmentation-skin-tone',
    name: 'Pigmentation & Skin Tone',
    description:
      'Comprehensive dermatological management of localized and diffuse pigmentation concerns, combining evidence-based topical actives, sun protection, and procedural interventions.',
    details: [
      'Facial pigmentation & Melasma',
      'Post-inflammatory hyperpigmentation',
      'Uneven skin tone & sun damage',
      'Broad-spectrum photoprotection advice',
      'Combination peel & medical protocols',
    ],
    department: 'dermatology',
    icon: '🌟',
  },
  {
    id: 'vitiligo-care',
    name: 'Vitiligo Care',
    description:
      'Patient education-focused vitiligo management. Vitiligo is a treatable skin condition and is not contagious. Options presented according to disease extent, activity, and response.',
    details: [
      'Targeted medical & topical therapy',
      'Phototherapy guidance',
      'Excimer-based treatment where appropriate',
      'Combination repigmentation protocols',
      'Objective follow-up photographic monitoring',
    ],
    department: 'dermatology',
    icon: '🩺',
  },
  {
    id: 'skin-diseases',
    name: 'Clinical Dermatology & Skin Diseases',
    description:
      'Accurate diagnostic workup and medical management for common and chronic dermatological diseases across all age groups.',
    details: [
      'Eczema & Atopic Dermatitis',
      'Psoriasis management',
      'Fungal infections & Tinea',
      'Urticaria & Skin Allergies',
      'Pediatric & Geriatric Dermatology',
    ],
    department: 'dermatology',
    icon: '⚕️',
  },
  {
    id: 'radiofrequency-surgery',
    name: 'RF Minor Surgery & Lesion Removal',
    description:
      'Minimally invasive, precise radiofrequency ablation and electrosurgical excision for benign lesions with minimal bleeding and optimal tissue preservation.',
    details: [
      'Facial & neck skin tags (Acrochordons)',
      'Viral warts & Verruca vulgaris',
      'Seborrhoeic keratoses',
      'Benign intradermal naevi / moles',
      'Milia & comedone extraction',
    ],
    department: 'dermatology',
    icon: '⚡',
  },
  {
    id: 'venereology-sti',
    name: 'Venereology & Sexual Health (STI)',
    description:
      'Strictly confidential, empathetic clinical consultations, diagnosis, counselling, and medical management for sexually transmitted infections.',
    details: [
      'Genital ulcer disease evaluation',
      'Discharge syndromes & STI screening',
      'Confidential partner counselling',
      'Preventive education & treatment plans',
    ],
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
    name: 'PCOD / PCOS Treatment',
    description:
      'Holistic approach to managing Polycystic Ovarian Disease through lifestyle modification, dietary counseling, and medical therapy.',
    department: 'obstetrics-gynaecology',
    icon: '🌸',
  },
  {
    id: 'contraception',
    name: 'Contraceptive Counselling',
    description:
      'Personalised family planning advice and contraceptive options tailored to your lifestyle and health needs.',
    department: 'obstetrics-gynaecology',
    icon: '🛡️',
  },
];
