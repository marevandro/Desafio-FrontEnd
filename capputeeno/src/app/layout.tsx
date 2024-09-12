import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { DefatulProvider } from "@/components/default-provider";

const saira = Saira({ 
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"] 
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
      <body className={saira.className}>
        <DefatulProvider>
          <Header/>
          {children}
        </DefatulProvider>
      </body>
    </html>
  );
}
