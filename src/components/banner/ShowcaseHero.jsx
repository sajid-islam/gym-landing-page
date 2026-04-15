import bodyBuilders from '@/images/banner/body-builders.png';
import Image from 'next/image';
const ShowcaseHero = () => {
  return (
    <section className="relative mt-5 h-full w-full rounded-md bg-black p-4 lg:mt-0 lg:bg-none lg:p-0">
      <h1 className="hero-text absolute top-[36vw] right-1/2 z-10 translate-x-1/2 leading-12 text-white md:leading-20 lg:top-80 lg:right-4 lg:translate-x-0 lg:text-[104px] lg:leading-20 xl:text-[128px] xl:leading-32">
        POWER YOU <br /> POTENTIALE
      </h1>
      <div className="relative right-0 z-20 lg:absolute lg:top-0">
        <Image src={bodyBuilders} alt="bg" className="lg:w-170 xl:w-200" />
      </div>
      <h1 className="stroke-text hero-text absolute top-[36vw] right-1/2 z-30 translate-x-1/2 bg-white/25 bg-clip-text leading-12 text-transparent md:leading-20 lg:top-80 lg:right-4 lg:translate-x-0 lg:text-[104px] lg:leading-20 xl:text-[128px] xl:leading-32">
        POWER YOU <br /> POTENTIALE
      </h1>
    </section>
  );
};

export default ShowcaseHero;
