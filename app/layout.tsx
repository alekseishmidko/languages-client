import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";

import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import "./globals.css";
import { ThemeWrapper } from "./components/ThemeProvider/ThemeProvider";
import { EarthoOneProvider } from "@eartho/one-client-react";
import { useStore } from "./utils/store/store";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // isClient && (
    //   <EarthoOneProvider
    //     domain={`${process.env.NEXT_PUBLIC_DOMAIN}`}
    //     clientId={`${process.env.NEXT_PUBLIC_CLIENT_ID}`}
    //   >
    <html lang="en">
      <ThemeWrapper>
        <body className={`${inter.className} min-h-screen`}>{children}</body>{" "}
      </ThemeWrapper>{" "}
    </html>
    // </EarthoOneProvider>
    // )
  );
}
