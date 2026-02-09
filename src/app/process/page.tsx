import ProcessOperation from '@/components/process/ProcessOperation';
import ProcessStep from '@/components/process/ProcessStep';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Hoe wij werken - SequenceFlow',
};

const Process02 = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ProcessStep />
      <ProcessOperation />
      <CTAV1
        className="dark:bg-background-5 bg-white"
        badgeText="Start vandaag"
        badgeClass="!badge-green"
        ctaHeading="Klaar om uw processen te automatiseren?"
        description="Laat uw e-mailadres achter en wij nemen contact met u op voor een vrijblijvend gesprek."
        ctaBtnText="Verstuur"
        showCheckList={false}
      />
    </main>
  );
};

Process02.displayName = 'Process02';
export default Process02;
