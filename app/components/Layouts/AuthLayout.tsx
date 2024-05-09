"use client";

import { EarthoOneProvider } from "@eartho/one-client-react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <EarthoOneProvider
      domain={`${process.env.NEXT_PUBLIC_DOMAIN}`}
      clientId={`${process.env.NEXT_PUBLIC_CLIENT_ID}`}
    >
      {children}
    </EarthoOneProvider>
  );
}
