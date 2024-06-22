import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Specify the weights you want
  style: ['normal', 'italic'], // Specify the styles you want
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: {
    default: "Scholar Nexus",
    template: "%s | Scholar Nexus",
},
  description: "An Educational Productivity tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable} style={{ backgroundColor: "#000" }}>
       {children}
      </body>
    </html>
  );
}