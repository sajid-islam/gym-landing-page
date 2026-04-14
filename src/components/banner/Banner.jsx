import BannerLeftPattern from '@/components/polygons/banner-left-pattern';
import FbLogo from '@/images/social-media-logos/facebook-logo.png';
import InstaLogo from '@/images/social-media-logos/instagram-logo.png';
import InLogo from '@/images/social-media-logos/linkedin-logo.png';
import XLogo from '@/images/social-media-logos/twitter-logo.png';
import Image from 'next/image';
import OurSpecialty from './OurSpecialty';
const Banner = () => {
  return (
    <div className="font-tilt-warp relative">
      {/* Social Media */}
      <section className="relative">
        <div className="absolute mt-16 ml-10 flex items-center gap-4 text-gray-200">
          <h6 className="text-xl">Follow On: </h6>
          <div className="flex items-center gap-4">
            <Image src={FbLogo} alt="Facebook Logo" width={20} />
            <Image src={InstaLogo} alt="Instagram Logo" width={20} />
            <Image src={XLogo} alt="X(Twitter) Logo" width={20} />
            <Image src={InLogo} alt="LinkedIn Logo" width={20} />
          </div>
        </div>
        <div>
          <BannerLeftPattern className={'absolute mt-14 ml-10'} />
        </div>
      </section>
      {/* Our Specialty */}
      <OurSpecialty />
      {/* Showcase */}
      {/* <ShowcaseHero /> */}
    </div>
  );
};

export default Banner;
