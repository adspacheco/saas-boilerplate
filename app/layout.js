export const metadata = {
  title: "SaaS Boilerplate",
  description: "SaaS boilerplate inspired by TabNews.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
