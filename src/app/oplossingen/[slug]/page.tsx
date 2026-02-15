import Contents from '@/components/service-details/Contents';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const services = getMarkDownData('src/data/services');
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Dienst Details - SequenceFlow',
};

const OurServicesDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Contents slug={slug} />
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

export default OurServicesDetails;
