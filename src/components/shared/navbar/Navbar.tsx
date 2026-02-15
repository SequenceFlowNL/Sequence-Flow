'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { mobileMenuData } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import logoZwart from '@/components/new-logo/sequenceflow-logo-zwart.png';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from './MobileMenuButton';

const navLinks = [
  { label: 'Diensten', href: '/diensten' },
  { label: 'Hoe wij werken', href: '/hoe-wij-werken' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];

const Navbar = ({ showTopNav }: { showTopNav: boolean }) => {
  const { isScrolled } = useNavbarScroll(150);

  return (
    <MobileMenuProvider>
      <header
        className={cn(
          'lp:!max-w-[1290px] fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 transition-all duration-500 ease-in-out max-[400px]:max-w-[350px] min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          showTopNav ? 'top-13.5' : 'top-5',
          isScrolled && 'top-2',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div className="dark:bg-background-7 flex items-center justify-between rounded-full bg-white/60 px-2.5 py-2.5 backdrop-blur-[25px] xl:py-0">
            <div>
              <Link href="/">
                <span className="sr-only">Home</span>
                <figure className="max-w-[198px]">
                  <Image src={logoZwart} alt="Logo" className="dark:invert" />
                </figure>
              </Link>
            </div>
            <nav className="hidden items-center xl:flex">
              <ul className="flex items-center">
                {navLinks.map((link) => (
                  <li key={link.href} className="nav-item relative cursor-pointer py-2.5">
                    <Link
                      href={link.href}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden items-center justify-center xl:flex">
              <LinkButton href="/contact-us" btnClass="btn-md-v2 btn-primary-v2 border group-hover/btn-v2:btn-secondary-v2">
                Neem contact op
              </LinkButton>
            </div>
            <MobileMenuButton />
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
