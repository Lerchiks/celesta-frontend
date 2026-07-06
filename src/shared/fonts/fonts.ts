import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const bezierSans = localFont({
    src: [
        {
            path: '../assets/fonts/BezierSansBold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../assets/fonts/BezierSansLight.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/BezierSansRegular.ttf',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-bezier-sans',
    display: 'swap',
});
