import "./globals.css";
import { Lato, Lexend } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular e Bold
  variable: "--font-lato",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Light, Regular, Bold
  variable: "--font-lexend",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${lato.variable} ${lexend.variable}`}>
      <body>{children}</body>
    </html>
  );
}
