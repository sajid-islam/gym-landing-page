import { satoshi } from "./fonts";
import "./globals.css";

export const metadata = {
    title: "Gymify | Transform Your Body, Elevate Your Life",
    description:
        "Gymify is your ultimate fitness destination. Explore workouts, training programs, and expert tips to build strength, stay fit, and achieve your goals.",
    icons: {
        icon: "/logo.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${satoshi.className} h-full antialiased`}>
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
