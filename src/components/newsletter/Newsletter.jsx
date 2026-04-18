'use client';
import { Button } from '@/components/ui/button';
import CommonPattern from '../polygons/common-pattern';
import CurveLine from './CurveLine';

const Newsletter = () => {
  return (
    <section className="mt-5">
      <div className="flex w-full justify-end">
        <CommonPattern className={'size-20 md:size-auto'} />
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-black px-6 py-16 text-center text-white md:rounded-[3rem] md:px-10 md:py-24">
          {/* Header Tags/Subtitle */}
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-gray-400 md:text-sm">
            Join our community
          </p>

          {/* Main Title */}
          <h2 className="relative mb-8 text-3xl font-extrabold tracking-tight md:text-5xl lg:text-5xl">
            Subscribe to our{' '}
            <span className="relative inline-block">
              newsletter
              <span className="absolute -bottom-4 left-0 w-full">
                <CurveLine className={'w-36 md:w-auto'} />
              </span>
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-3xl text-[14px] leading-relaxed text-gray-400 md:text-[15px]">
            Join Our Community Of Fitness Enthusiasts And Athletes! By Subscribing To Our
            Newsletter, You&apos;ll Receive Expert Training Tips, Nutrition Guides, Exclusive
            Discounts, And The Latest News On Upcoming Events And Products.
          </p>

          {/* Subscription Form */}
          <div className="mx-auto max-w-2xl">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4 rounded-3xl border-2 border-white p-2 transition-all duration-300 focus-within:border-white/40 sm:flex-row sm:items-center sm:rounded-full"
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full bg-transparent px-6 py-4 text-white placeholder:text-white/85 focus:outline-none sm:py-3"
                required
              />
              <Button
                type="submit"
                className="h-full w-full cursor-pointer rounded-2xl bg-white px-10 py-4 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto sm:rounded-full sm:py-3"
              >
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <CommonPattern className={'size-20 rotate-90 md:size-auto'} />
      </div>
    </section>
  );
};

export default Newsletter;
