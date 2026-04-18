'use client';

import AuthWrapper from '@/components/auth/AuthWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Login attempt:', data);
    alert('Login attempted! Check console for data.');
  };

  return (
    <AuthWrapper
      title="Welcome Back, Champ!"
      subtitle="Sign in to track your progress and crush your goals."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="champ@gymify.com"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
            required
          />
        </div>
        <div className="flex flex-col gap-2 text-white">
          <label className="text-sm font-medium text-gray-300">Password</label>
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
            required
          />
        </div>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="size-4 rounded border-white/10 bg-white/5 accent-white"
            />
            <label htmlFor="remember" className="cursor-pointer text-gray-400">
              Remember me
            </label>
          </div>
          <Link href="#" className="font-medium text-gray-300 hover:text-white transition-colors">
            Forgot password?
          </Link>
        </div>
        
        <Button 
          type="submit" 
          className="mt-2 h-auto rounded-xl bg-white py-4 font-bold text-black uppercase tracking-wider hover:bg-gray-200"
        >
          Sign In
        </Button>
        
        <p className="mt-4 text-center text-sm text-gray-400">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-bold text-white hover:underline">
            Join the Pack
          </Link>
        </p>
      </form>
    </AuthWrapper>
  );
}
