import bodyBuilders from '@/images/banner/body-builders.png';
import Image from 'next/image';
const ShowcaseHero = () => {
  return (
    <section className="relative h-full">
      <h1 className="absolute top-80 right-4 z-10 leading-20 text-white lg:text-[104px] xl:text-[128px] xl:leading-32">
        POWER YOU <br /> POTENTIALE
      </h1>
      <div className="absolute top-0 right-0 z-20">
        <Image src={bodyBuilders} alt="bg" className="lg:w-170 xl:w-200" />
      </div>
      <h1 className="stroke-text absolute top-80 right-4 z-30 bg-white/25 bg-clip-text leading-20 text-transparent lg:text-[104px] xl:text-[128px] xl:leading-32">
        POWER YOU <br /> POTENTIALE
      </h1>
    </section>
  );
};

export default ShowcaseHero;
