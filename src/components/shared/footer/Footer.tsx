import RevealAnimation from '@/components/animation/RevealAnimation';
import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import linkedin from '@public/images/icons/linkedin.svg';
import gradientImg from '@public/images/ns-img-532.png';
import logoWit from '@/components/new-logo/sequenceflow-logo-wit.png';
import Image from 'next/image';
import Link from 'next/link';
import FooterDivider from './FooterDivider';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('bg-secondary dark:bg-background-8 relative z-0 overflow-hidden', className)}>
      <RevealAnimation delay={0.3} offset={50} direction="up">
        <figure className="pointer-events-none absolute -top-[1320px] left-1/2 -z-1 size-[1635px] -translate-x-1/2 select-none">
          <Image src={gradientImg} alt="footer-four-gradient" className="size-full object-cover" />
        </figure>
      </RevealAnimation>
      <div className="main-container px-5">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 pt-16 pb-12 xl:pt-[90px]">
          <RevealAnimation delay={0.1}>
            <div className="max-w-[306px]">
              <figure>
                <Image src={logoWit} alt="Logo" />
              </figure>
              <p className="text-accent/60 text-tagline-1 mt-4 mb-7 font-normal">
                Wij bouwen, implementeren en beheren intelligente workflows die uw bedrijf laten groeien zonder extra
                personeel.
              </p>
              <div className="flex items-center gap-3">
                <Link target="_blank" href="https://www.linkedin.com/company/sequenceflow">
                  <span className="sr-only">LinkedIn</span>
                  <Image className="size-6" src={linkedin} alt="LinkedIn" />
                </Link>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              {footerLinks[0]?.links.map(({ label, href }) => (
                <Link key={label} href={href} className="footer-link text-tagline-1">
                  {label}
                </Link>
              ))}
            </div>
          </RevealAnimation>
        </div>
        <div className="relative pt-[26px] pb-[42px] text-center">
          <FooterDivider className="bg-accent/10 dark:bg-stroke-6" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-tagline-1 text-primary-50 font-normal">
              Copyright ©SequenceFlow. Flow-as-a-Service voor moderne bedrijven
            </p>
          </RevealAnimation>
        </div>
      </div>
    </footer>
  );
};
Footer.displayName = 'Footer';
export default Footer;
