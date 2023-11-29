import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import StyledComponentsRegistry from '@/lib/AntdRegistry';
import Link from 'next/link';
import { ConfigProvider } from 'antd';
import theme from '@/theme/themeConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'MYTube',
    description: 'Test Vercel: Postgres Database, Blob Store',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="p-2 pl-4 flex ">
                    <Link href="/">
                        <h1 className="font-bold text-[32px] cursor-pointer">
                            MYTube
                        </h1>
                    </Link>
                </div>
                <ConfigProvider theme={theme}>
                    <StyledComponentsRegistry>
                        <div className="py-12 px-24">{children}</div>
                    </StyledComponentsRegistry>
                </ConfigProvider>
            </body>
        </html>
    );
}
