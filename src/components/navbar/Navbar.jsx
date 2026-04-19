'use client';
import { useAuth } from '@/context/AuthContext';
import menuIcon from '@/images/icons/menu.svg';
import { Search, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="relative flex justify-between">
      <div>
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="bg-primary menu-icon-padding rounded-full"
        >
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
        <div className="h-4 w-0.5 bg-white/30" />

        {/* Search Button Section */}
        <div className="group flex cursor-pointer items-center gap-3 rounded-full bg-[#404040] px-6 py-2 transition-all hover:bg-white/20">
          <span className="text-sm font-medium text-white">Search</span>
          <Search size={18} className="text-white transition-transform group-hover:scale-110" />
        </div>
      </section>

      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <Button
              onClick={handleLogout}
              className="font-tilt-warp register-btn-padding rounded-full text-xl uppercase transition-colors duration-300 hover:cursor-pointer hover:bg-black lg:text-3xl"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link href={'/register'}>
            <Button className="font-tilt-warp register-btn-padding rounded-full text-xl uppercase transition-colors duration-300 hover:cursor-pointer hover:bg-black lg:text-3xl">
              Register
            </Button>
          </Link>
        )}
      </div>

      <div
        className={`fixed inset-y-0 left-0 z-50 w-[80%] max-w-xs transform overflow-hidden bg-[#141414] p-6 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>

        <ul className="space-y-6 text-lg font-medium text-white">
          <li className="cursor-pointer transition-colors hover:text-gray-300">Home</li>
          <li className="cursor-pointer transition-colors hover:text-gray-300">Our gym location</li>
        </ul>

        <div className="mt-8 rounded-full bg-[#404040] px-6 py-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-medium text-white">Search</span>
            <Search size={18} className="text-white" />
          </div>
        </div>

        <div className="mt-8">
          {user ? (
            <div className="space-y-4">
              <p className="text-white">Welcome, {user.first_name}</p>
              <Button
                onClick={handleLogout}
                className="w-full rounded-full bg-white py-3 font-bold text-black uppercase hover:bg-gray-200"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link href={'/register'} onClick={() => setMenuOpen(false)}>
              <Button className="bg-primary hover:bg-primary/80 w-full rounded-full py-3 font-bold text-white uppercase">
                Register
              </Button>
            </Link>
          )}
        </div>
      </div>

      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
