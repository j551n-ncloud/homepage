import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Impressum — Johannes Nguyen",
};

export default function Impressum() {
  return (
    <>
      <Nav />
      <div className="page">
        <div className="legal-page">

          <div className="legal-header">
            <Link href="/" className="legal-back">← Johannes Nguyen</Link>
            <h1 className="legal-title">Impressum</h1>
            <p className="legal-subtitle">Mandatory information according to German TMG and RStV regulations for this privately operated website.</p>
          </div>

          <div className="legal-section">
            <div className="legal-section-label">§ 5 TMG</div>
            <div className="legal-section-body">
              <p>Johannes Nguyen<br />Heinrich-Böll-Straße 28<br />68723 Oftersheim<br />Germany</p>
            </div>
          </div>

          <div className="legal-section">
            <div className="legal-section-label">Contact</div>
            <div className="legal-section-body">
              <p><a href="mailto:johannes.nguyen@j551n.com">johannes.nguyen@j551n.com</a></p>
            </div>
          </div>

          <div className="legal-section">
            <div className="legal-section-label">§ 55 Abs. 2 RStV</div>
            <div className="legal-section-body">
              <p>Johannes Nguyen<br />Heinrich-Böll-Straße 28<br />68723 Oftersheim<br />Germany</p>
            </div>
          </div>

          <div className="legal-section">
            <div className="legal-section-label">Content liability</div>
            <div className="legal-section-body">
              <p>The content of this website has been created with the greatest possible care. However, accuracy, completeness, and timeliness cannot be guaranteed. As a service provider I am responsible for my own content under § 7 (1) TMG. Under §§ 8–10 TMG I am not obligated to monitor transmitted or stored third-party information or investigate circumstances indicating illegal activity.</p>
              <p>Obligations to remove or block information under general law remain unaffected. Liability is only possible from the point of knowledge of a specific legal violation. Content will be removed immediately upon becoming aware of any such violation.</p>
            </div>
          </div>

          <div className="legal-section">
            <div className="legal-section-label">Link liability</div>
            <div className="legal-section-body">
              <p>This site contains links to external third-party websites whose content is beyond my control. No liability can be assumed for external content. Linked pages were checked for legal violations at the time of linking — no illegal content was apparent. Continuous monitoring without concrete indication of a violation is not reasonable. Links will be removed immediately upon awareness of any legal violation.</p>
            </div>
          </div>

          <div className="legal-section">
            <div className="legal-section-label">Copyright</div>
            <div className="legal-section-body">
              <p>Content created by the site operator is subject to German copyright law. Reproduction, editing, distribution, or exploitation beyond copyright law requires written consent. Downloads are permitted for private, non-commercial use only. Third-party content is marked as such and their copyrights are respected. Please notify me of any copyright infringement — affected content will be removed immediately.</p>
            </div>
          </div>

          <div className="legal-section">
            <div className="legal-section-label">Last updated</div>
            <div className="legal-section-body">
              <p>April 2025</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
