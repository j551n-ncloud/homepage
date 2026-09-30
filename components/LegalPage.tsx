import Link from "next/link";
import Nav from "@/components/Nav";
import type { Lang } from "@/lib/content";
import type { LegalDoc } from "@/lib/legal";

export default function LegalPage({ lang, doc, altHref }: { lang: Lang; doc: LegalDoc; altHref: string }) {
  return (
    <>
      <Nav lang={lang} altHref={altHref} />
      <div className="page">
        <div className="legal-page">

          <div className="legal-header">
            <Link href={lang === "de" ? "/de" : "/"} className="legal-back">← Johannes Nguyen</Link>
            <h1 className="legal-title">{doc.title}</h1>
            <p className="legal-subtitle">{doc.subtitle}</p>
          </div>

          {doc.sections.map((s) => (
            <div className="legal-section" key={s.label}>
              <div className="legal-section-label">{s.label}</div>
              <div className="legal-section-body">{s.body}</div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
