import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Specialist Doctors',
      description: 'Qualified dermatologist and obstetrician registered with the Tamil Nadu Medical Council.',
      icon: '👨‍⚕️'
    },
    {
      title: 'Comprehensive Care',
      description: "Complete skin care, hair treatments, aesthetic procedures, and women's health services.",
      icon: '🏥'
    },
    {
      title: 'Patient-Focused Approach',
      description: "Compassionate, personalised care tailored to each patient's needs.",
      icon: '❤️'
    },
    {
      title: 'Convenient Local Care',
      description: 'Specialist healthcare accessible in Thirukovilur without the need to travel.',
      icon: '📍'
    },
    {
      title: 'Government Registered',
      description: 'Both doctors are government-registered medical practitioners.',
      icon: '📜'
    },
    {
      title: 'Modern Treatments',
      description: 'Access to advanced treatment options including PRP, laser therapy, and more.',
      icon: '✨'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title="Why Choose Shree Vel's Clinic" centered />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <div className="p-6 bg-cream rounded-2xl border border-light-green hover:shadow-card transition-shadow h-full">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">{feature.title}</h3>
                <p className="text-secondary-text">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
