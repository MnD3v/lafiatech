import { Metadata } from "next";
import { homePageMetadata } from "../page-metadata";

export const metadata: Metadata = homePageMetadata;

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

