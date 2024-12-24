import type { Metadata } from "next";
import localFont from "next/font/local";
import {Theme} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./css/light-theme.css";
import "./css/dark-theme.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "OrionCMS",
  description: "The only content manager you'll ever need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Theme children={children} hasBackground={true}></Theme>
      </body>
    </html>
  );
}
