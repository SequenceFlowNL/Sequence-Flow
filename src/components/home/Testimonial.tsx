import avatar4 from '@public/images/ns-avatar-4.png';
import avatar5 from '@public/images/ns-avatar-5.png';
import avatar6 from '@public/images/ns-avatar-6.png';
import avatar7 from '@public/images/ns-avatar-7.png';
import avatar8 from '@public/images/ns-avatar-8.png';
import avatar9 from '@public/images/ns-avatar-9.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  twitterUrl: string;
  delay: number;
  avatar: {
    src: StaticImageData | string;
    alt: string;
    bgClass: string;
  };
};

// data
const testimonials: Testimonial[] = [
  {
    name: 'Mark de Vries',
    role: 'CEO, TechStart B.V.',
    quote:
      'Dankzij SequenceFlow hebben we onze lead opvolging volledig geautomatiseerd. We missen geen enkele kans meer en onze conversie is met 40% gestegen.',
    twitterUrl: 'https://x.com',
    delay: 0.2,
    avatar: {
      src: avatar4,
      alt: "Mark de Vries's avatar",
      bgClass: 'bg-linear-[156deg,#F4F8E7_12.92%,#D485FF_91%]',
    },
  },
  {
    name: 'Sophie Jansen',
    role: 'Operations Manager, GrowthHub',
    quote:
      'De Admin-Killer flow bespaart ons team minimaal 20 uur per week. Facturen, contracten en rapportages gaan nu volledig automatisch.',
    twitterUrl: 'https://x.com',
    delay: 0.3,
    avatar: {
      src: avatar5,
      alt: "Sophie Jansen's avatar",
      bgClass: 'bg-linear-[156deg,#E8F4FD_12.92%,#4A90E2_91%]',
    },
  },
  {
    name: 'Thomas Bakker',
    role: 'Founder, ScaleUp Agency',
    quote:
      'Onze klanten worden nu binnen minuten geholpen via de AI First-Line Support. De klanttevredenheid is door het dak gegaan.',
    twitterUrl: 'https://x.com',
    delay: 0.4,
    avatar: {
      src: avatar6,
      alt: "Thomas Bakker's avatar",
      bgClass: 'bg-linear-[156deg,#FFF2E8_12.92%,#FF6B35_91%]',
    },
  },
  {
    name: 'Lisa van den Berg',
    role: 'Sales Director, Nexus Solutions',
    quote:
      'De Smart Lead Scoring heeft onze sales pipeline getransformeerd. We focussen nu alleen nog op de leads die er echt toe doen.',
    twitterUrl: 'https://x.com',
    delay: 0.1,
    avatar: {
      src: avatar7,
      alt: "Lisa van den Berg's avatar",
      bgClass: 'bg-linear-[156deg,#F0E6FF_12.92%,#8B5CF6_91%]',
    },
  },
  {
    name: 'Pieter Vermeer',
    role: 'CFO, DataFlow B.V.',
    quote:
      'De CRM-Sync Flow zorgt ervoor dat onze data tussen Exact en ons CRM altijd 100% klopt. Geen handmatige invoer meer, geen fouten.',
    twitterUrl: 'https://x.com',
    delay: 0.2,
    avatar: {
      src: avatar8,
      alt: "Pieter Vermeer's avatar",
      bgClass: 'bg-linear-[156deg,#E6F7FF_12.92%,#1890FF_91%]',
    },
  },
  {
    name: 'Emma de Groot',
    role: 'Marketing Manager, BrandBoost',
    quote:
      'Met de Autonome Outreach bereiken we nu 10x meer prospects dan voorheen. En het mooiste: het voelt persoonlijk en authentiek.',
    twitterUrl: 'https://x.com',
    delay: 0.3,
    avatar: {
      src: avatar9,
      alt: "Emma de Groot's avatar",
      bgClass: 'bg-linear-[156deg,#FFF7E6_12.92%,#FF8C00_91%]',
    },
  },
];

const Testimonial = () => {
  return (
    <section
      className="pt-14 pb-20 sm:pt-16 sm:pb-24 md:pt-24 md:pb-24 2xl:pt-28 2xl:pb-44"
      aria-label="Klantbeoordelingen">
      <div className="main-container">
        <div className="mb-14 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-3.5 md:mb-5">Testimonials</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="xl:mx-auto xl:max-w-[906px]">Wat onze klanten zeggen over SequenceFlow</h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealAnimation key={t.name} delay={t.delay}>
              <article className="border-stroke-1 rounded-[20px] border bg-white p-6 sm:p-8">
                <div className="flex items-center justify-between pb-5">
                  <figure className="flex items-center gap-1" aria-label="5 sterren beoordeling">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i + 1}
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-[15px]"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none">
                        <path
                          d="M7.25672 0.486272C7.53172 -0.162091 8.46832 -0.162091 8.74332 0.486274L10.3663 4.31303C10.4823 4.58637 10.7445 4.77313 11.0454 4.79678L15.2582 5.12799C15.9719 5.18411 16.2614 6.05763 15.7175 6.51446L12.5079 9.2107C12.2786 9.40331 12.1784 9.70552 12.2485 9.99343L13.2291 14.0249C13.3952 14.7079 12.6375 15.2478 12.0264 14.8818L8.41965 12.7214C8.16202 12.5671 7.83802 12.5671 7.5804 12.7214L3.9736 14.8818C3.3625 15.2478 2.60477 14.7079 2.77091 14.0249L3.75155 9.99343C3.82159 9.70552 3.72147 9.40331 3.49221 9.2107L0.28245 6.51446C-0.261375 6.05763 0.0280544 5.18411 0.741835 5.12799L4.9547 4.79678C5.25561 4.77313 5.51774 4.58637 5.63367 4.31303L7.25672 0.486272Z"
                          fill="#C7F56F"
                        />
                      </svg>
                    ))}
                  </figure>

                  <Link href={t.twitterUrl} target="_blank" rel="noopener" aria-label={`Volg ${t.name} op Twitter`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                      <path
                        d="M17.8441 4.24219H20.6042L14.5741 11.0196L21.668 20.2422H16.1136L11.7631 14.6488L6.7852 20.2422H4.02341L10.4731 12.993L3.66797 4.24219H9.36342L13.2959 9.35481L17.8441 4.24219ZM16.8753 18.6176H18.4048L8.53238 5.78147H6.89117L16.8753 18.6176Z"
                        fill="#12161F"
                      />
                    </svg>
                  </Link>
                </div>

                <p className="pb-6">{t.quote}</p>

                <figure className="flex items-center gap-3">
                  <Image
                    src={t.avatar.src}
                    className={`size-11 rounded-full object-cover object-center ${t.avatar.bgClass}`}
                    alt={t.avatar.alt}
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-tagline-1 leading-[1.5] font-semibold sm:text-lg">{t.name}</h3>
                    <p className="text-tagline-2 text-secondary/60">{t.role}</p>
                  </div>
                </figure>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

Testimonial.displayName = 'Testimonial';
export default Testimonial;
