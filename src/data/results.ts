import { ResultMedia } from '@/types';

export const clinicalResults: ResultMedia[] = [
  // Images
  {
    id: 'res-img-1',
    type: 'image',
    src: '/images/results/result-1.jpeg',
    title: 'Eyelid & Facial Mole / Wart Excision',
    treatment: 'Radiofrequency Electrosurgery',
    doctor: 'Dr. M. Munivel',
    description:
      'Safe removal of raised periorbital lesion near delicate eyelid area with minimal downtime and pristine tissue healing.',
    category: 'wart-lesion',
  },
  {
    id: 'res-img-2',
    type: 'image',
    src: '/images/results/result-2.jpeg',
    title: 'Forehead Seborrheic Keratosis / Verrucous Lesion',
    treatment: 'Radiofrequency Ablation',
    doctor: 'Dr. M. Munivel',
    description:
      'Complete clearance of extensive hyperpigmented forehead lesion showing intact dermal margin and healthy re-epithelialization.',
    category: 'wart-lesion',
  },
  {
    id: 'res-img-3',
    type: 'image',
    src: '/images/results/result-3.jpeg',
    title: 'Male Pattern Androgenetic Alopecia (Vertex/Crown)',
    treatment: 'Autologous PRP + Growth Factor Therapy',
    doctor: 'Dr. M. Munivel',
    description:
      'Significant improvement in scalp hair coverage and follicular thickness after 4 sessions of targeted PRP therapy.',
    category: 'hair',
  },
  {
    id: 'res-img-4',
    type: 'image',
    src: '/images/results/result-4.jpeg',
    title: 'Female Pattern Hair Thinning (Ludwig Scale)',
    treatment: 'GFC & Follicular Stimulation Therapy',
    doctor: 'Dr. M. Munivel',
    description:
      'Restoration of midline parting density and scalp concealment in female patient following personalized growth factor therapy.',
    category: 'hair',
  },
  {
    id: 'res-img-5',
    type: 'image',
    src: '/images/results/result-5.jpeg',
    title: 'Extensive Crown & Mid-Scalp Hair Regrowth',
    treatment: 'Combination PRP + Medical Trichology Protocol',
    doctor: 'Dr. M. Munivel',
    description:
      'Dramatic increase in hair volume and coverage over a 6-month treatment period with excellent follicular vitality.',
    category: 'hair',
  },
  {
    id: 'res-img-6',
    type: 'image',
    src: '/images/results/result-6.jpeg',
    title: 'Deep Atrophic Acne Scars & Post-Inflammatory Pigmentation',
    treatment: 'Microneedling + Subcision + Chemical Peel',
    doctor: 'Dr. M. Munivel',
    description:
      'Marked skin texture refinement, softening of rolling/boxcar acne scars, and uniform complexion rejuvenation.',
    category: 'acne-skin',
  },
  {
    id: 'res-img-7',
    type: 'image',
    src: '/images/results/result-7.jpeg',
    title: 'Frontal & Mid-Scalp Density Enhancement',
    treatment: 'PRP Hair Regrowth Protocol',
    doctor: 'Dr. M. Munivel',
    description:
      'Visible terminal hair shaft thickening and reduction in shedding documented through photographic dermoscopy.',
    category: 'hair',
  },
  {
    id: 'res-img-8',
    type: 'image',
    src: '/images/results/result-8.jpeg',
    title: 'Pediatric Nuchal Dermatitis / Skin Condition Relief',
    treatment: 'Targeted Topical Medical Dermatology',
    doctor: 'Dr. M. Munivel',
    description:
      'Complete resolution of inflammatory pediatric skin rash with soothing barrier restoration and symptom remission.',
    category: 'acne-skin',
  },

  // Videos
  {
    id: 'res-vid-1',
    type: 'video',
    src: '/images/results/result-video-1.mp4',
    title: 'Hair Regrowth Follicular Evaluation — Video 1',
    treatment: 'PRP / GFC Hair Therapy Assessment',
    doctor: 'Dr. M. Munivel',
    description:
      'Clinical video examination demonstrating newly stimulated hair follicles, increased strand caliber, and scalp coverage.',
    category: 'hair',
  },
  {
    id: 'res-vid-2',
    type: 'video',
    src: '/images/results/result-video-2.mp4',
    title: 'Dermatological Treatment Follow-Up — Video 2',
    treatment: 'Clinical Transformation Video',
    doctor: 'Dr. M. Munivel',
    description:
      'Video review showing treated skin texture post-procedure with smooth dermal healing and patient satisfaction.',
    category: 'acne-skin',
  },
  {
    id: 'res-vid-3',
    type: 'video',
    src: '/images/results/result-video-3.mp4',
    title: 'Clinical Procedure & Result Progress — Video 3',
    treatment: 'Aesthetic Dermatology Assessment',
    doctor: 'Dr. M. Munivel',
    description:
      'Live follow-up video inspection demonstrating aesthetic surgery outcome and patient progress at the clinic.',
    category: 'all',
  },
];
