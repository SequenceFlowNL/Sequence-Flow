//white paper client
import { cn } from '@/utils/cn';
import exactLogo from '@/components/Brand Icons/exact.svg';
import slackLogo from '@/components/Brand Icons/slack.svg';
import linkedinLogo from '@/components/Brand Icons/linkedin.svg';
import chatgptLogo from '@/components/Brand Icons/chatgpt.svg';
import whatsappLogo from '@/components/Brand Icons/whatsapp.svg';
import afasLogo from '@/components/Brand Icons/afas.svg';
import gmailLogo from '@/components/Brand Icons/gmail.svg';
import instagramLogo from '@/components/Brand Icons/instagram.svg';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface ClientLogo {
  id: string;
  src: StaticImageData | string;
  alt: string;
  invert?: boolean;
}

const clientLogos: ClientLogo[] = [
  { id: '1', src: exactLogo, alt: 'Exact logo', invert: true },
  { id: '2', src: slackLogo, alt: 'Slack logo' },
  { id: '3', src: linkedinLogo, alt: 'LinkedIn logo' },
  { id: '4', src: chatgptLogo, alt: 'ChatGPT logo' },
  { id: '5', src: whatsappLogo, alt: 'WhatsApp logo' },
  { id: '6', src: afasLogo, alt: 'AFAS logo', invert: true },
  { id: '7', src: gmailLogo, alt: 'Gmail logo' },
  { id: '8', src: instagramLogo, alt: 'Instagram logo' },
];

const Clients = () => {
  return (
    <section className="py-16 lg:py-20 xl:py-28">
      <div className="main-container">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-3">Transforming business success with SequenceFlow</h2>
          </RevealAnimation>
        </div>
      </div>
      <div className="py-14">
        <RevealAnimation delay={0.2}>
          <Marquee autoFill speed={30}>
            <div className="flex items-center justify-center gap-8">
              {clientLogos.map((logo, index) => (
                <figure key={logo.id} className={cn('w-28 md:w-36 flex justify-center', index === 0 && 'ml-8')}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className={cn('h-10 w-auto', logo.invert && 'dark:invert')}
                  />
                </figure>
              ))}
            </div>
          </Marquee>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Clients;
