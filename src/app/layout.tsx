import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChambaQ Vibes",
  description: "Agentic local hiring MVP and Control Tower for ChambaQ."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

