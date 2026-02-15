import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'menu',
    title: 'Menu',
    submenu: [
      { id: 'diensten', label: 'Diensten', href: '/diensten' },
      { id: 'how-we-work', label: 'Hoe wij werken', href: '/hoe-wij-werken' },
      { id: 'blog', label: 'Blog', href: '/blog' },
      { id: 'faq', label: 'FAQ', href: '/faq' },
    ],
  },
];
