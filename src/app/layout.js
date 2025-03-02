import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChildCom from "./ChildCom";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Certificate",
  description: "police clarence",
  icons: {
    icon: '/349-3492563_client6-bangladesh-police-logo-png-transparent-png.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChildCom children={children} />
      </body>
    </html>
  );
}
