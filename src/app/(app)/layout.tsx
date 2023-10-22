import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bingod",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="flex h-12 w-full flex-row bg-gray-900">
          <Link href="/home">Bingod</Link>
        </div>
        <div className="flex-grow">{children}</div>
      </div>
    </>
  );
}
