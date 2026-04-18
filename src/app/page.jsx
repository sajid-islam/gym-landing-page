import BannerBg from '@/components/banner-bg/BannerBg';
import Banner from '@/components/banner/Banner';
import Navbar from '@/components/navbar/Navbar';
import Newsletter from '@/components/newsletter/Newsletter';
import OurProducts from '@/components/our-products/OurProducts';
import Reviews from '@/components/reviews/Reviews';
import WhyUs from '@/components/why-us/WhyUs';

export default function Home() {
  return (
    <div className="mx-auto mt-5 mb-96 w-full max-w-7xl px-5">
      <div className="relative lg:h-[800px] xl:h-[800px]">
        <BannerBg />
        <Navbar />
        <Banner />
      </div>
      <OurProducts />
      <WhyUs />
      <Reviews />
      <Newsletter />
    </div>
  );
}
