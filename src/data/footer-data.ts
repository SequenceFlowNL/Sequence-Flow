import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Bedrijf',
    links: [
      { label: 'Over ons', href: '/about' },
      { label: 'Carrière', href: '/career' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Contact', href: '/contact-us' },
    ],
  },
  {
    title: 'Ondersteuning',
    links: [
      { label: 'Veelgestelde vragen', href: '/faq' },
      { label: 'Documentatie', href: '/documentation' },
      { label: 'Tutorial', href: '/tutorial' },
      { label: 'Support', href: '/support' },
    ],
  },
  {
    title: 'Juridisch',
    links: [
      { label: 'Algemene voorwaarden', href: '/terms-conditions' },
      { label: 'Privacybeleid', href: '/privacy-policy' },
      { label: 'Restitutiebeleid', href: '/refund-policy' },
      { label: 'AVG Compliance', href: '/gdpr' },
      { label: 'Affiliate beleid', href: '/affiliate-policy' },
    ],
  },
];
