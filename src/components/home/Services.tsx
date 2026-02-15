import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Services = () => {
  const services = getMarkDownData<IService & { [key: string]: unknown }>('src/data/services').filter(
    (service) => service.showHomePage === true,
  );

  return (
    <section className="mt-10 overflow-hidden py-14 md:py-16 lg:py-24 xl:py-28">
      <div className="main-container">
        <div className="mb-11 text-center lg:mx-auto lg:mb-9 lg:max-w-[730px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-gray-light-v2 mb-5">Onze Workflows</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-1 md:mb-3">Een greep uit onze AI workflows</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="lg:mx-auto lg:max-w-[530px]">
              Van lead generatie tot klantenservice en interne operaties — dit zijn enkele van de workflows die wij bouwen.
              Elke flow wordt op maat gemaakt voor uw bedrijfsproces.
            </p>
          </RevealAnimation>
        </div>
        {/* services cards */}
        <div className="grid grid-cols-12 gap-y-6 md:gap-6">
          {/* service card 01 */}
          <RevealAnimation delay={0.1} direction="left">
            <div className="group/card-img col-span-12 lg:col-span-6">
              <div className="bg-background-12 border-background-12 grid h-full grid-cols-12 gap-y-16 rounded-3xl border p-5 md:gap-6 md:p-8">
                <aside className="col-span-12 flex flex-col justify-between space-y-5 pt-14 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">{services[0]?.title}</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">{services[0]?.description}</p>
                  </blockquote>
                </aside>
                <figure className="col-span-12 mx-auto h-[360px] w-full max-w-[905px] overflow-hidden rounded-lg transition-transform duration-500 ease-in-out group-hover/card-img:scale-105 md:col-span-6 md:h-full md:rounded-[20px]">
                  <Image
                    src={services[0]?.image}
                    width={292}
                    height={412}
                    alt="services"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 02 */}
          <RevealAnimation delay={0.2} direction="right">
            <div className="group/card-img col-span-12 lg:col-span-6">
              <div className="bg-background-12 border-background-12 grid h-full grid-cols-12 gap-y-16 rounded-3xl border p-5 md:gap-6 md:p-8">
                <aside className="col-span-12 flex flex-col justify-between space-y-5 pt-14 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">{services[5]?.title}</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">{services[5]?.description}</p>
                  </blockquote>
                </aside>
                <figure className="col-span-12 mx-auto h-[360px] w-full max-w-[905px] overflow-hidden rounded-lg transition-transform duration-500 ease-in-out group-hover/card-img:scale-105 md:col-span-6 md:h-full md:rounded-[20px]">
                  <Image
                    src={services[5]?.image}
                    width={292}
                    height={412}
                    alt="services"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 03 */}
          <RevealAnimation delay={0.1} direction="left">
            <div className="group/card-img col-span-12 lg:col-span-6">
              <div className="bg-background-12 border-background-12 grid h-full grid-cols-12 gap-y-16 rounded-3xl border p-5 md:gap-6 md:p-8">
                <aside className="col-span-12 flex flex-col justify-between space-y-5 pt-14 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">{services[7]?.title}</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">{services[7]?.description}</p>
                  </blockquote>
                </aside>
                <figure className="col-span-12 mx-auto h-[360px] w-full max-w-[905px] overflow-hidden rounded-lg transition-transform duration-500 ease-in-out group-hover/card-img:scale-105 md:col-span-6 md:h-full md:rounded-[20px]">
                  <Image
                    src={services[7]?.image}
                    width={292}
                    height={412}
                    alt="services"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 04 */}
          <RevealAnimation delay={0.2} direction="right">
            <div className="group/card-img col-span-12 lg:col-span-6">
              <div className="bg-background-12 border-background-12 grid h-full grid-cols-12 gap-y-16 rounded-3xl border p-5 md:gap-6 md:p-8">
                <aside className="col-span-12 flex flex-col justify-between space-y-5 pt-14 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">{services[4]?.title}</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">{services[4]?.description}</p>
                  </blockquote>
                </aside>
                <figure className="col-span-12 mx-auto h-[360px] w-full max-w-[905px] overflow-hidden rounded-lg transition-transform duration-500 ease-in-out group-hover/card-img:scale-105 md:col-span-6 md:h-full md:rounded-[20px]">
                  <Image
                    src={services[4]?.image}
                    width={292}
                    height={412}
                    alt="services"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 05 */}
          <RevealAnimation delay={0.1} direction="left">
            <div className="group/card-img col-span-12 lg:col-span-6">
              <div className="bg-background-12 border-background-12 grid h-full grid-cols-12 gap-y-16 rounded-3xl border p-5 md:gap-6 md:p-8">
                <aside className="col-span-12 flex flex-col justify-between space-y-5 pt-14 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">{services[1]?.title}</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">{services[1]?.description}</p>
                  </blockquote>
                </aside>
                <figure className="col-span-12 mx-auto h-[360px] w-full max-w-[905px] overflow-hidden rounded-lg transition-transform duration-500 ease-in-out group-hover/card-img:scale-105 md:col-span-6 md:h-full md:rounded-[20px]">
                  <Image
                    src={services[1]?.image}
                    width={292}
                    height={412}
                    alt="services"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 06 */}
          <RevealAnimation delay={0.2} direction="right">
            <div className="group/card-img col-span-12 lg:col-span-6">
              <div className="bg-background-12 border-background-12 grid h-full grid-cols-12 gap-y-16 rounded-3xl border p-5 md:gap-6 md:p-8">
                <aside className="col-span-12 flex flex-col justify-between space-y-5 pt-14 md:col-span-6">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">{services[3]?.title}</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">{services[3]?.description}</p>
                  </blockquote>
                </aside>
                <figure className="col-span-12 mx-auto h-[360px] w-full max-w-[905px] overflow-hidden rounded-lg transition-transform duration-500 ease-in-out group-hover/card-img:scale-105 md:col-span-6 md:h-full md:rounded-[20px]">
                  <Image
                    src={services[3]?.image}
                    width={292}
                    height={412}
                    alt="services"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
          {/* service card 07 */}
          <RevealAnimation delay={0.1}>
            <div className="group/card-img col-span-12">
              <div className="bg-background-12 border-background-12 grid h-full grid-cols-12 gap-y-6 overflow-hidden rounded-4xl border px-5 pt-8 md:gap-6 md:px-8">
                <aside className="col-span-12 flex flex-col justify-between space-y-5 pt-14 pb-9 md:col-span-5 lg:col-span-3">
                  <blockquote className="space-y-2">
                    <h3 className="text-heading-5 md:text-heading-4 line-clamp-2">{services[2]?.title}</h3>
                    <p className="text-tagline-1 text-secondary/60 line-clamp-4">{services[2]?.description}</p>
                  </blockquote>
                </aside>
                <figure className="col-span-12 mx-auto w-full max-w-[905px] overflow-hidden rounded-t-lg transition-transform duration-500 ease-in-out group-hover/card-img:scale-105 md:col-span-7 md:rounded-t-[20px] lg:col-span-9">
                  <Image
                    src={services[2]?.image}
                    width={905}
                    height={400}
                    alt="services"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Services.displayName = 'Services';
export default Services;
