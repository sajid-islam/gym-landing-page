import BannerBg from '@/components/banner-bg/BannerBg';
import Banner from '@/components/banner/Banner';
import Navbar from '@/components/navbar/Navbar';

export default function Home() {
  return (
    <div className="relative mx-auto mt-5 min-h-screen w-full max-w-7xl overflow-hidden px-5">
      <BannerBg />
      <Navbar />
      <Banner />
    </div>
  );
}
