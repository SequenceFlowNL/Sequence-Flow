import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'menu',
    title: 'Menu',
    submenu: [
      { id: 'oplossingen', label: 'Oplossingen', href: '/oplossingen' },
      { id: 'prijzen', label: 'Prijzen', href: '/prijzen' },
      { id: 'how-we-work', label: 'Hoe wij werken', href: '/hoe-wij-werken' },
      { id: 'blog', label: 'Blog', href: '/blog' },
    ],
  },
];
