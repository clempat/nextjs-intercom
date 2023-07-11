import "./globals.css";
import { Inter } from "next/font/google";
import "@/utils/appConfig";
import Intercom from "@/components/Intercom";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Intercom />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
