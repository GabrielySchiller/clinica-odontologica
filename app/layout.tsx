import type { Metadata } from "next";
import "./globals.css";
import Logo from "../public/logo.png"


export const metadata: Metadata = {
   title: "Clínica Vida Oral",
  description: "Projeto Landing page criado com Next.js, TypeScript, Tailwind e API",
  
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
