import type { Metadata } from "next";
import "./globals.css";
import { BackgroundProvider } from "@/providers/background";

export const metadata: Metadata = {
  title: "Puun - website",
  description: "website of Puun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BackgroundProvider>{children}</BackgroundProvider>
      </body>
    </html>
  );
}
