'use client';

import AuthWrapper from '@/components/auth/AuthWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RegisterPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Registration attempt:', data);
    alert('Registration attempted! Check console for data.');
  };

  return (
    <AuthWrapper
      title="Join the Pack!"
      subtitle="Start your fitness journey with our elite community."
      maxWidth="max-w-2xl"
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-sans text-white transition-all placeholder:text-gray-600 focus:border-white/30 focus:ring-1 focus:ring-white/30 focus:outline-none"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="champ@gymify.com"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-sans text-white transition-all placeholder:text-gray-600 focus:border-white/30 focus:ring-1 focus:ring-white/30 focus:outline-none"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">Password</label>
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-sans text-white transition-all placeholder:text-gray-600 focus:border-white/30 focus:ring-1 focus:ring-white/30 focus:outline-none"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-sans text-white transition-all placeholder:text-gray-600 focus:border-white/30 focus:ring-1 focus:ring-white/30 focus:outline-none"
            required
          />
        </div>

        <Button
          type="submit"
          className="mt-4 h-auto rounded-xl bg-white py-4 font-bold tracking-wider text-black uppercase transition-colors hover:bg-gray-200 md:col-span-2"
        >
          Join Now
        </Button>

        <p className="mt-4 text-center text-sm text-gray-400 md:col-span-2">
          Already have an account?{' '}
          <Link href="/login" className="font-bold text-white transition-all hover:underline">
            Login
          </Link>
        </p>
      </form>
    </AuthWrapper>
  );
}
