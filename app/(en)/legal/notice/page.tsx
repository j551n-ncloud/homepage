import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { notice } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Legal Notice · Johannes Nguyen",
  alternates: { canonical: "/legal/notice", languages: { en: "/legal/notice", de: "/de/impressum" } },
};

export default function Page() {
  return <LegalPage lang="en" doc={notice.en} altHref="/de/impressum" />;
}
