import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeonBlast - Retro Space Arcade Game",
  description: "Experience the thrill of classic arcade gaming with NeonBlast, a retro-styled space shooter featuring neon graphics, intense action, and nostalgic gameplay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Press+Start+2P&family=Special+Elite&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neon-dark-purple text-cream antialiased font-outfit">
        {children}
      </body>
    </html>
  );
}