import { Button } from '@/components/ui/button';
import characterImg from '@/images/others/character-doing-fitness-exercising.png';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { SectionHeader } from '../section-header/SectionHeader';

const WhyUs = () => {
  return (
    <section>
      <SectionHeader
        title={'Train Like a Champion'}
        description={'Unleash Your Power with Expert Boxing Training'}
        cplClassname={'rotate-90 size-20 md:size-auto'}
        cprClassname={'-left-20 top-4 size-20 md:size-auto'}
      />
      <div className="mt-10 grid grid-cols-1 items-stretch gap-8 overflow-hidden rounded-[2rem] bg-black p-6 text-white md:rounded-[2.5rem] md:p-10 lg:grid-cols-3 xl:gap-12">
        {/* Left Side: Image */}
        <div className="relative w-full overflow-hidden rounded-2xl">
          <Image
            src={characterImg}
            alt="Character doing fitness"
            className="h-[400px] w-full object-cover object-top lg:h-auto lg:w-full"
          />
        </div>

        {/* Right Side: Content */}
        <div className="col-span-2 flex h-full flex-col justify-between py-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:gap-12">
            {/* Training Focus Areas */}
            <div className="content-column">
              <h3 className="mb-6 text-xl font-semibold tracking-tighter text-white md:mb-10">
                Training Focus Areas:
              </h3>

              <div className="mb-6 md:mb-8">
                <h4 className="mb-2 text-base font-semibold text-gray-100">
                  Strength & Conditioning
                </h4>
                <p className="text-[14px] leading-relaxed font-normal text-gray-400 md:text-xs">
                  Develop knockout power with a mix of strength training and explosive movements.
                </p>
              </div>

              <div className="mb-6 md:mb-8">
                <h4 className="mb-2 text-base font-semibold text-gray-100">Speed & Agility</h4>
                <p className="text-[14px] leading-relaxed font-normal text-gray-400 md:text-xs">
                  Sharpen your reflexes and footwork with dynamic drills that improve speed and
                  coordination.
                </p>
              </div>

              <div className="mb-6 md:mb-8">
                <h4 className="mb-2 text-base font-semibold text-gray-100">Endurance Training</h4>
                <p className="text-[14px] leading-relaxed font-normal text-gray-400 md:text-xs">
                  Boost your stamina with high-intensity circuits that keep you fighting strong till
                  the final round.
                </p>
              </div>
            </div>

            {/* Why Train With Us */}
            <div className="flex h-full flex-col">
              <div>
                <h3 className="mb-6 text-xl font-semibold tracking-tighter text-white md:mb-10">
                  Why Train With Us:
                </h3>

                <div className="mb-6 md:mb-8">
                  <h4 className="mb-2 text-base font-semibold text-gray-100">Expert Coaches</h4>
                  <p className="text-[14px] leading-relaxed font-normal text-gray-400 md:text-xs">
                    Our experienced boxing trainers have worked with amateur and professional
                    athletes, ensuring you get the best training tailored to your goals.
                  </p>
                </div>

                <div className="mb-6 md:mb-8">
                  <h4 className="mb-2 text-base font-semibold text-gray-100">Flexible Programs</h4>
                  <p className="text-[14px] leading-relaxed font-normal text-gray-400 md:text-xs">
                    Whether you&apos;re a beginner or seasoned boxer, we offer flexible programs
                    that fit your schedule and needs.
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="flex items-center gap-6 md:gap-8">
                <Button className="h-auto cursor-pointer border-none bg-[#57B233] px-10 py-4 text-lg font-semibold text-white sm:w-auto md:px-8 md:py-2">
                  Punch Now
                </Button>
                <div className="flex size-12 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-[#57B233]/50 transition-all duration-300 hover:scale-110 hover:border-[#57B233] hover:bg-[#57B233]/5">
                  <Play className="ml-1 size-4 fill-[#57B233] text-[#57B233]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
