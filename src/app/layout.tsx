import { geistMono, geistSans } from '@/shared/fonts/fonts';
import '@/shared/styles/fonts.scss';
import NavigationBar from '@/widgets/NavBar/ui/NavigationBar';
import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
    title: 'Celesta',
    description: 'In progress',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable}`}
        >
            <body>
                <header>
                    <NavigationBar />
                </header>
                <main className="container-global">{children}</main>
            </body>
        </html>
    );
}
