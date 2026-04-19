'use client';

import AuthWrapper from '@/components/auth/AuthWrapper';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useAuth } from '@/context/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { toast } from 'sonner';

function ForgotVerifyOTPPageContent() {
  const searchParams = useSearchParams();
  const initialOtp = searchParams.get('otp') || '';
  const [otp, setOtp] = useState(initialOtp);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resendLoading, setResendLoading] = useState(false);
  const { forgotVerifyOtp, resendOtp } = useAuth();
  const router = useRouter();
  const email = searchParams.get('email');

  useEffect(() => {
    if (!email) {
      router.push('/forgot-password');
    }
  }, [email, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError('Please enter a 6-digit OTP');
      return;
    }
    setLoading(true);
    setError('');
    const result = await forgotVerifyOtp(email, otp);
    if (result.success) {
      router.push(`/reset-password?token=${encodeURIComponent(result.token)}`);
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  const handleResend = async () => {
    setResendLoading(true);
    const result = await resendOtp(email);
    if (result.success) {
      toast.success('OTP resent successfully');
      if (result.otp) {
        setOtp(result.otp);
      }
    } else {
      setError(result.error);
    }
    setResendLoading(false);
  };

  return (
    <AuthWrapper title="Verify Reset Code" subtitle="Enter the 6-digit code sent to your email">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {error && <p className="text-sm text-red-500">{error}</p>}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300">OTP Code</label>
          <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button
          type="submit"
          disabled={loading || otp.length !== 6}
          className="mt-2 h-auto rounded-xl bg-white py-4 font-bold tracking-wider text-black uppercase hover:bg-gray-200 disabled:opacity-50"
        >
          {loading ? 'Verifying...' : 'Verify'}
        </Button>

        <p className="mt-4 text-center text-sm text-gray-400">
          Didn&apos;t receive the code?{' '}
          <button
            type="button"
            onClick={handleResend}
            disabled={resendLoading}
            className="font-bold text-white hover:underline disabled:opacity-50"
          >
            {resendLoading ? 'Resending...' : 'Resend'}
          </button>
        </p>
      </form>
    </AuthWrapper>
  );
}

export default function ForgotVerifyOTPPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ForgotVerifyOTPPageContent />
    </Suspense>
  );
}
