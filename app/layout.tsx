import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Boilerplate",
  description: "SaaS boilerplate inspired by TabNews.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
