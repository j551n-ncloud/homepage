import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { notice } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Impressum · Johannes Nguyen",
  alternates: { canonical: "/de/impressum", languages: { de: "/de/impressum", en: "/legal/notice" } },
};

export default function Page() {
  return <LegalPage lang="de" doc={notice.de} altHref="/legal/notice" />;
}
