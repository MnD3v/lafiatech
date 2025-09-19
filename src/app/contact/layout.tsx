import { Metadata } from "next";
import { contactPageMetadata } from "./page-metadata";

export const metadata: Metadata = contactPageMetadata;

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
