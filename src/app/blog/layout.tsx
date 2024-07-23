export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mx-auto max-w-3xl py-5 px-4 ">{children}</main>;
}
