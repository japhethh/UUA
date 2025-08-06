import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "../globals.css";
// import { TanstackProvider } from "../_providers/provider";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://landing-uua.socia-dev.com";

export const metadata: Metadata = {
  title: "Welcome to UAA",
  description:
    "UAA was built by founders, not just coders. After scaling multiple 8-figure brands, we realized: most businesses don’t fail from bad products — they fail from bad systems. That's why we built UAA.",
  openGraph: {
    title: "Welcome to UAA",
    description:
      "UAA was built by founders, not just coders. After scaling multiple 8-figure brands, we realized: most businesses don’t fail from bad products — they fail from bad systems. That's why we built UAA.",
    images: [
      {
        url: `${BASE_URL}/cover-image-01.png`,
        width: 1200,
        height: 630,
        alt: "UAA Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to UAA",
    description:
      "UAA was built by founders, not just coders. After scaling multiple 8-figure brands, we realized: most businesses don’t fail from bad products — they fail from bad systems. That's why we built UAA.",
    images: [`${BASE_URL}/cover-image-01.png`],
  },
  // icons: {
  //   icon:"/favicon.svg",
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${rethinkSans.className}`}>
      <body className={`antialiased font-sans`}>
        {/* <TanstackProvider></TanstackProvider> */}
        {children}
      </body>
    </html>
  );
}
