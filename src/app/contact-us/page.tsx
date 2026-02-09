import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact - SequenceFlow',
};

const ContactUs = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ContactInfo />
      <ContactMap />
      <CTAV1
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-yellow-v2"
        badgeText="Start vandaag"
        ctaBtnText="Neem contact op"
        ctaHeading="Klaar om te automatiseren?"
        description="Ontdek hoe SequenceFlow uw bedrijfsprocessen kan transformeren. Neem contact met ons op voor een vrijblijvend gesprek over de mogelijkheden."
      />
    </main>
  );
};

export default ContactUs;
