'use client';

import AuthWrapper from '@/components/auth/AuthWrapper';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function ResetPasswordPageContent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { resetPassword } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      router.push('/forgot-password');
    }
  }, [token, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const formData = new FormData(e.target);
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    const result = await resetPassword(password, confirmPassword, token);
    if (result.success) {
      router.push('/login');
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <AuthWrapper title="Reset Password" subtitle="Enter your new password">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {error && <p className="text-sm text-red-500">{error}</p>}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">New Password</label>
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-gray-600 focus:border-white/30 focus:ring-1 focus:ring-white/30 focus:outline-none"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">Confirm New Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-gray-600 focus:border-white/30 focus:ring-1 focus:ring-white/30 focus:outline-none"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="mt-2 h-auto rounded-xl bg-white py-4 font-bold tracking-wider text-black uppercase hover:bg-gray-200 disabled:opacity-50"
        >
          {loading ? 'Resetting...' : 'Reset Password'}
        </Button>
      </form>
    </AuthWrapper>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordPageContent />
    </Suspense>
  );
}
