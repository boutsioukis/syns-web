import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syns - Air Traffic Control for AI Agents",
  description: "Give your agents shared awareness. Prevent duplicate work and architectural conflicts through intent-based plan sharing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
