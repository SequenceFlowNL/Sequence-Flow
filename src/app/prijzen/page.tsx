import Client from '@/components/pricing/Client';
import Faq from '@/components/pricing/Faq';
import Pricing from '@/components/pricing/Pricing';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Prijzen - SequenceFlow',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Pricing />
      <Client />
      <Faq />
      <CTAV1
        className="dark:bg-background-5 bg-background-1"
        badgeText="Start vandaag"
        badgeClass="!badge-green"
        ctaHeading="Klaar om te automatiseren?"
        description="Laat uw e-mailadres achter en wij nemen contact met u op voor een vrijblijvend gesprek."
        ctaBtnText="Verstuur"
        showCheckList={false}
      />
    </main>
  );
};

export default page;
