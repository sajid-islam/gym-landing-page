import menuIcon from '@/images/icons/menu.svg';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className="relative flex justify-between">
      <div>
        <button className="bg-primary menu-icon-padding rounded-full">
          <Image src={menuIcon} alt="menu-icon" className="size-5 md:size-8 lg:size-12" />
        </button>
      </div>
      <section className="absolute top-5 left-32 hidden items-center gap-8 rounded-full border-2 border-white px-10 py-4 lg:flex">
        {/* Navigation Links */}
        <ul className="flex items-center gap-10 font-medium text-white">
          <li className="cursor-pointer transition-colors hover:text-gray-300">Home</li>
          <li className="cursor-pointer transition-colors hover:text-gray-300">Our gym location</li>
        </ul>

        {/* Divider Line */}
        <div className="h-4 w-[2px] bg-white/30" />

        {/* Search Button Section */}
        <div className="group flex cursor-pointer items-center gap-3 rounded-full bg-[#404040] px-6 py-2 transition-all hover:bg-white/20">
          <span className="text-sm font-medium text-white">Search</span>
          <Search size={18} className="text-white transition-transform group-hover:scale-110" />
        </div>
      </section>
      <div>
        <Link href={'/register'}>
          <Button className="font-tilt-warp register-btn-padding rounded-full text-xl uppercase transition-colors duration-300 hover:cursor-pointer hover:bg-black lg:text-3xl">
            Register
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
