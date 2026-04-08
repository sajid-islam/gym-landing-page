import BannerBg from '@/components/banner-bg/BannerBg';
import Banner from '@/components/banner/Banner';
import Navbar from '@/components/navbar/Navbar';

export default function Home() {
  return (
    <div className="mx-auto mt-5 w-full max-w-7xl px-5">
      <div className="relative h-[800px]">
        <BannerBg />
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}
