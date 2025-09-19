import { Metadata } from "next";
import { blogPageMetadata } from "./page-metadata";

export const metadata: Metadata = blogPageMetadata;

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
