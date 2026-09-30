import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung · Johannes Nguyen",
  alternates: { canonical: "/de/datenschutz", languages: { de: "/de/datenschutz", en: "/legal/privacy" } },
};

export default function Page() {
  return <LegalPage lang="de" doc={privacy.de} altHref="/legal/privacy" />;
}
