'use client';

import AuthWrapper from '@/components/auth/AuthWrapper';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rememberMe = formData.get('remember') === 'on';

    const result = await login(email, password, rememberMe);
    if (result.success) {
      router.push('/');
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <AuthWrapper
      title="Welcome Back, Champ!"
      subtitle="Sign in to track your progress and crush your goals."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {error && <p className="text-sm text-red-500">{error}</p>}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="champ@gymify.com"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-gray-600 focus:border-white/30 focus:ring-1 focus:ring-white/30 focus:outline-none"
            required
          />
        </div>
        <div className="flex flex-col gap-2 text-white">
          <label className="text-sm font-medium text-gray-300">Password</label>
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-gray-600 focus:border-white/30 focus:ring-1 focus:ring-white/30 focus:outline-none"
            required
          />
        </div>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <input
              name="remember"
              type="checkbox"
              id="remember"
              className="size-4 rounded border-white/10 bg-white/5 accent-white"
            />
            <label htmlFor="remember" className="cursor-pointer text-gray-400">
              Remember me
            </label>
          </div>
          <Link
            href="/forgot-password"
            className="font-medium text-gray-300 transition-colors hover:text-white"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="mt-2 h-auto rounded-xl bg-white py-4 font-bold tracking-wider text-black uppercase hover:bg-gray-200 disabled:opacity-50"
        >
          {loading ? 'Signing In...' : 'Sign In'}
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
