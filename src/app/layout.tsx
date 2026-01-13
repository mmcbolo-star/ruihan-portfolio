import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "芮菡 - 项目案例",
  description: "芮菡的项目案例网站，展示文化艺术项目管理的实践成果。让每个创意稳准落地并产生可见成效。",
  keywords: ["项目管理", "制片", "文化艺术", "活动策划", "展览", "演出", "芮菡"],
  authors: [{ name: "芮菡" }],
  openGraph: {
    title: "芮菡 - 项目案例",
    description: "让每个创意稳准落地并产生可见成效",
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
