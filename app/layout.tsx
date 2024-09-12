import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomas Di Mauro - Frontend and Full Stack Developer",
  description: "I'm Tomas, a Full Stack and Frontend Development for Companies and Individuals. Specializing in React/Next.js, SCSS, Node.js, and SQL/Postgres. EEST N° 5 student.",
  keywords: "Tomas Di Mauro, Di Mauro, tomas di mauro, di mauro, full stack development, frontend development, web development, React, Next.js, SCSS, Node.js, SQL, Postgres, eest n5",
  robots: "index, follow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
