import type { Metadata } from "next";
import "./globals.css";
import Box from "@mui/material/Box";
import NavBar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Jorge's portfolio",
  description: "Jorge's portfolio'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="h-screen">
        <NavBar />
        <Box className="lg:pt-18 md:pt-20 pt-20">
          {children}
        </Box>
        <footer className="bg-dark-primary px-4 py-10 container--max-width">
          © 2024 Jorge Acosta
        </footer>
      </body>
    </html >
  );
}
