import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'menu',
    title: 'Menu',
    submenu: [
      { id: 'contact', label: 'Contact', href: '/contact-us' },
      { id: 'how-we-work', label: 'Hoe wij werken', href: '/process' },
      { id: 'blog', label: 'Blog', href: '/blog' },
      { id: 'faq', label: 'FAQ', href: '/faq' },
    ],
  },
];
