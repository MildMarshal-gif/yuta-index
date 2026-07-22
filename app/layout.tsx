import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://yuta-index.pages.dev",
  ),
  title: "ゆた｜links — @yutayuta_8e",
  description: "ゆた（@yutayuta_8e）の作品とSNSをまとめた公式リンクページ。",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ゆた｜links",
    title: "ゆた｜links — @yutayuta_8e",
    description: "ゆた（@yutayuta_8e）の作品とSNSをまとめた公式リンクページ。",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "YUTA INDEX" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@yutayuta_8e",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body className="grain">{children}</body></html>;
}
