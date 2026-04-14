import running from '@/images/icons/running.png';
import trainer from '@/images/icons/trainer.png';
import yoga from '@/images/icons/yoga.png';
import Image from 'next/image';
import OurSpecialtyPattern from '../polygons/our-specialty-pattern';

const OurSpecialty = () => {
  return (
    <div className="absolute top-[14vw] lg:ml-6 xl:top-56 xl:ml-7">
      <OurSpecialtyPattern />
      <section>
        <h3 className="text-white lg:text-xl xl:text-2xl">OUR SPECIALTY</h3>
        <ul className="mt-3 flex flex-col gap-2 text-white xl:mt-5">
          <li className="specialty-box flex w-full items-center gap-4 rounded-2xl border-2 border-[#c3dc9c] bg-white/15 backdrop-blur-xs">
            <div className="rounded-xl border-2 border-[#c3dc9c] p-2">
              <Image src={running} alt="Running icon" className="size-9 xl:size-12" />
            </div>
            <p>Ground Running</p>
          </li>
          <li className="specialty-box flex w-full items-center gap-4 rounded-2xl border-2 border-[#c3dc9c] bg-white/15 backdrop-blur-xs">
            <div className="rounded-xl border-2 border-[#c3dc9c] p-2">
              <Image src={yoga} alt="Running icon" className="size-9 xl:size-12" />
            </div>
            <p>Yoga Assistance</p>
          </li>
          <li className="specialty-box flex w-full items-center gap-4 rounded-t-2xl rounded-b-[45px] border-2 border-[#c3dc9c] bg-white/15 px-5 py-6 backdrop-blur-xs xl:rounded-b-[50px]">
            <div className="rounded-xl border-2 border-[#c3dc9c] p-2">
              <Image src={trainer} alt="Running icon" className="size-9 xl:size-12" />
            </div>
            <p>Personal Trainer</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default OurSpecialty;
