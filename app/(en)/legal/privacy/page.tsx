import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy · Johannes Nguyen",
  alternates: { canonical: "/legal/privacy", languages: { en: "/legal/privacy", de: "/de/datenschutz" } },
};

export default function Page() {
  return <LegalPage lang="en" doc={privacy.en} altHref="/de/datenschutz" />;
}
