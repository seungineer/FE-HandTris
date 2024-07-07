import { Nanum_Gothic_Coding } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactQueryProviders from "@/hook/useReactQuery";
import React from "react";
import ClientWrapper from "@/components/ClientWrapper";
import { MusicProvider } from "@/components/MusicProvider";
import { Toaster } from "@/components/ui/toaster";

const nanum = Nanum_Gothic_Coding({
  weight: "700",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nanum.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
        />
      </head>
      <body className="select-none">
        <div className="mx-auto flex h-[100vh] w-full max-w-[1400px] flex-col">
          <ReactQueryProviders>
            <MusicProvider>
              <ClientWrapper>
                <Header />
                <main className="grow flex flex-col flex-1 overflow-hidden">
                  {children}
                  <Toaster />
                </main>
                <Footer />
              </ClientWrapper>
            </MusicProvider>
          </ReactQueryProviders>
        </div>
      </body>
    </html>
  );
}
