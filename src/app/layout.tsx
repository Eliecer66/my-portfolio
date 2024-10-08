import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex justify-around w-full p-5">
          <div className="flex basis-1/2">Jorge</div>
          <div className="flex basis-1/2 justify-around">
            <a>Home</a>
            <a>About</a>
            <a>Projects</a>
            <a>Stats</a>
          </div>
        </nav>
        {children}
        <footer className="bg-dark-primary px-4 py-10">
          © 2024 Jorge Acosta
        </footer>
      </body>
    </html>
  );
}
