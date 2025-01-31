import type { Metadata } from "next";
import localFont from "next/font/local";
import StyledLayout from "@/utils/providers/StyledLayout";
import { RouteProvider } from "../utils/providers/RouteContext";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const goodtimesRegular = localFont({
  src: "../assets/fonts/GoodTimesRg-Regular.woff",
  variable: "--font-goodtimes-regular",
  weight: "400",
});

export const metadata: Metadata = {
  title: "SkyHI Tech",
  description: "Generated by SkyHI Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RouteProvider>
      <html lang="en">
        <body className={`${goodtimesRegular.variable}`}>
          <StyledLayout>
            <Header />
            {children}
            <Footer />
          </StyledLayout>
        </body>
      </html>
    </RouteProvider>
  );
}
