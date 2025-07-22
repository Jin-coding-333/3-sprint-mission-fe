import React from "react";
import "./globals.css";
import Provider from "@/providers/_provider";
import GNB from "@/components/organisms/gnb";
import Footer from "@/components/organisms/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PandaMarket</title>
      </head>
      <body className="w-full h-full pt-[80px]">
        <Provider>
          <GNB />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
