export default function PortfolioLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="mx-auto max-w-7xl py-5 mb-10 px-4 ">{children}</main>;
}
