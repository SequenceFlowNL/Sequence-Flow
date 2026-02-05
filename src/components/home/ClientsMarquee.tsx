import exactLogo from '@/components/Brand Icons/exact.svg';
import slackLogo from '@/components/Brand Icons/slack.svg';
import linkedinLogo from '@/components/Brand Icons/linkedin.svg';
import chatgptLogo from '@/components/Brand Icons/chatgpt.svg';
import whatsappLogo from '@/components/Brand Icons/whatsapp.svg';
import afasLogo from '@/components/Brand Icons/afas.svg';
import gmailLogo from '@/components/Brand Icons/gmail.svg';
import instagramLogo from '@/components/Brand Icons/instagram.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const ClientsMarquee = () => {
  return (
    <section>
      <RevealAnimation delay={0.2}>
        <div className="relative">
          <div className="dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r from-white to-transparent md:w-[20%]" />
          <div className="dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l from-white to-transparent md:w-[20%]" />
          <Marquee autoFill speed={40}>
            <div className="flex items-center justify-center gap-8 py-7.5">
              <figure className="ml-8 min-w-[140px] md:min-w-[201px] flex justify-center">
                <Image src={exactLogo} alt="Exact logo" loading="lazy" className="h-10 w-auto dark:invert" />
              </figure>
              <figure className="min-w-[140px] md:min-w-[201px] flex justify-center">
                <Image src={slackLogo} alt="Slack logo" loading="lazy" className="h-10 w-auto" />
              </figure>
              <figure className="min-w-[140px] md:min-w-[201px] flex justify-center">
                <Image src={linkedinLogo} alt="LinkedIn logo" loading="lazy" className="h-10 w-auto" />
              </figure>
              <figure className="min-w-[140px] md:min-w-[201px] flex justify-center">
                <Image src={chatgptLogo} alt="ChatGPT logo" loading="lazy" className="h-10 w-auto" />
              </figure>
              <figure className="min-w-[140px] md:min-w-[201px] flex justify-center">
                <Image src={whatsappLogo} alt="WhatsApp logo" loading="lazy" className="h-10 w-auto" />
              </figure>
              <figure className="min-w-[140px] md:min-w-[201px] flex justify-center">
                <Image src={afasLogo} alt="AFAS logo" loading="lazy" className="h-10 w-auto dark:invert" />
              </figure>
              <figure className="min-w-[140px] md:min-w-[201px] flex justify-center">
                <Image src={gmailLogo} alt="Gmail logo" loading="lazy" className="h-10 w-auto" />
              </figure>
              <figure className="min-w-[140px] md:min-w-[201px] flex justify-center">
                <Image src={instagramLogo} alt="Instagram logo" loading="lazy" className="h-10 w-auto" />
              </figure>
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

ClientsMarquee.displayName = 'ClientsMarquee';
export default ClientsMarquee;
