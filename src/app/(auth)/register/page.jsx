'use client';

import AuthWrapper from '@/components/auth/AuthWrapper';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const formData = new FormData(e.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const terms = formData.get('terms') === 'on';

    const result = await register(
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      terms
    );
    if (result.success) {
      // Redirect to verify OTP, passing email and otp (for testing)
      const otpQuery = result.otp ? `&otp=${result.otp}` : '';
      router.push(`/verify-otp?email=${encodeURIComponent(email)}${otpQuery}`);
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <AuthWrapper
      title="Join the Pack!"
      subtitle="Start your fitness journey with our elite community."
      maxWidth="max-w-2xl"
    >
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {error && <p className="text-sm text-red-500 md:col-span-2">{error}</p>}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">First Name</label>
          <input
            name="firstName"
            type="text"
            placeholder="John"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-sans text-white transition-all placeholder:text-gray-600 focus:border-white/30 focus:ring-1 focus:ring-white/30 focus:outline-none"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">Last Name</label>
          <input
            name="lastName"
            type="text"
            placeholder="Doe"
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
        <div className="flex items-center gap-2 md:col-span-2">
          <input
            name="terms"
            type="checkbox"
            id="terms"
            className="size-4 rounded border-white/10 bg-white/5 accent-white"
            required
          />
          <label htmlFor="terms" className="cursor-pointer text-sm text-gray-400">
            I agree to the{' '}
            <Link href="#" className="text-white hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="#" className="text-white hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="mt-4 h-auto rounded-xl bg-white py-4 font-bold tracking-wider text-black uppercase transition-colors hover:bg-gray-200 disabled:opacity-50 md:col-span-2"
        >
          {loading ? 'Joining...' : 'Join Now'}
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
