import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "芮菡 - 创意设计师作品集",
  description: "芮菡的个人作品集网站，展示品牌设计、UI/UX设计、插画设计等创意作品。用设计讲述故事，用创意点亮生活。",
  keywords: ["设计师", "作品集", "品牌设计", "UI设计", "插画", "芮菡"],
  authors: [{ name: "芮菡" }],
  openGraph: {
    title: "芮菡 - 创意设计师作品集",
    description: "用设计讲述故事，用创意点亮生活",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
