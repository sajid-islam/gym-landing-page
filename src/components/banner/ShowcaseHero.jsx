import bodyBuilders from '@/images/banner/body-builders.png';
import Image from 'next/image';
const ShowcaseHero = () => {
  return (
    <section className="relative h-full">
      <h1 className="absolute top-80 right-4 z-10 text-[128px] leading-32 text-white">
        POWER YOU <br /> POTENTIALE
      </h1>
      <div className="absolute top-0 right-0 z-20">
        <Image src={bodyBuilders} alt="bg" width={800} className="" />
      </div>
      <h1 className="stroke-text absolute top-80 right-4 z-30 bg-white/25 bg-clip-text text-[128px] leading-32 text-transparent">
        POWER YOU <br /> POTENTIALE
      </h1>
    </section>
  );
};

export default ShowcaseHero;
