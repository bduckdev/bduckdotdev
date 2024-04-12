import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "bduck.dev",
    description: "Brennan Duck builds numerous things.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="cyberpunk">
            <body className={inter.className}>
                <Header />

                {children}
            </body>
        </html>
    );
}
