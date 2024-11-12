import type { Metadata } from "next";
import "./globals.css";
import avatar from "../../public/album/avatar.png"
import Image from "next/image";
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  title: "Porfolio",
  description: "Jorge's portfolio'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <nav
          className="flex justify-around border border-gray-950 border-b-amber-300 items-center w-full py-4 fixed top-0 bg-gray-900/80 z-10 backdrop-blur"
        >
          <div className="flex w-full container--max-width">
            <div className="flex basis-1/2 items-center justify-start min-h-10 pl-4">
              <a href="#home" className="scroll-smooth">
                <Image
                  src={avatar}
                  alt='My-avatar'
                  className="w-10 flex items-center"
                  objectFit="fill"
                />
              </a>
            </div>
            <div className="flex basis-1/2 justify-around items-end min-h-10">
              <a className="font-bold lg:tex-md text-sm" href="#home" >Home</a>
              <a className="font-bold lg:tex-md text-sm" href="#about" >About</a>
              <a className="font-bold lg:tex-md text-sm" href="#projects" >Projects</a>
              <a className="font-bold lg:tex-md text-sm" href="#stats" >Stats</a>
            </div>
          </div>
        </nav>
        <Box className="lg:pt-16 md:pt-20 pt-20">
          {children}
        </Box>
        <footer className="bg-dark-primary px-4 py-10 container--max-width">
          © 2024 Jorge Acosta
        </footer>
      </body>
    </html >
  );
}
