import "./globals.css";
import type { ReactNode } from "react";
import { Playfair_Display, Manrope } from "next/font/google";
import { Providers } from "./providers";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});
const bodyFont = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Cartas Anonimas",
  description: "Cartas anonimas de aniversario",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
