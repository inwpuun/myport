import type { Metadata } from "next";
import "./globals.css";
import { BackgroundProvider } from "@/providers/background";
import { Toast } from "@/components/ui";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        <Toast theme="dark" />
        <SpeedInsights />
      </body>
    </html>
  );
}
