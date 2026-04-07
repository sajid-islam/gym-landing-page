import { Tilt_Warp } from 'next/font/google';
import { satoshi } from './fonts';

import './globals.css';

const tiltWarp = Tilt_Warp({ weight: ['400'], subsets: ['latin'], variable: '--font-tilt-warp' });

export const metadata = {
  title: 'Gymify | Transform Your Body, Elevate Your Life',
  description:
    'Gymify is your ultimate fitness destination. Explore workouts, training programs, and expert tips to build strength, stay fit, and achieve your goals.',
  icons: {
    icon: '/logo.png ',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${satoshi.className} ${tiltWarp.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
