'use client';

import AuthWrapper from '@/components/auth/AuthWrapper';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { forgotPassword } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const formData = new FormData(e.target);
    const email = formData.get('email');

    const result = await forgotPassword(email);
    if (result.success) {
      const otpQuery = result.otp ? `&otp=${result.otp}` : '';
      router.push(`/forgot-verify-otp?email=${encodeURIComponent(email)}${otpQuery}`);
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <AuthWrapper title="Forgot Password" subtitle="Enter your email to reset your password">
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

        <Button
          type="submit"
          disabled={loading}
          className="mt-2 h-auto rounded-xl bg-white py-4 font-bold tracking-wider text-black uppercase hover:bg-gray-200 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Reset Code'}
        </Button>

        <p className="mt-4 text-center text-sm text-gray-400">
          Remember your password?{' '}
          <Link href="/login" className="font-bold text-white hover:underline">
            Login
          </Link>
        </p>
      </form>
    </AuthWrapper>
  );
}
