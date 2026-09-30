import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Privacy Statement — Johannes Nguyen",
  alternates: { canonical: "/legal/privacy" },
};

export default function Privacy() {
  return (
    <>
      <Nav />
      <div className="page">
        <div className="legal-page">

          <div className="legal-header">
            <Link href="/" className="legal-back">← Johannes Nguyen</Link>
            <h1 className="legal-title">Privacy Statement</h1>
            <p className="legal-subtitle">Information on how personal data is handled on this site in line with GDPR and German data protection law.</p>
          </div>

          <div className="legal-section">
            <div className="legal-section-label">Responsible party</div>
            <div className="legal-section-body">
              <p>Johannes Nguyen<br />Heinrich-Böll-Straße 28<br />68723 Oftersheim<br />Germany</p>
              <p><a href="mailto:johannes.nguyen@j551n.com">johannes.nguyen@j551n.com</a></p>
              <p>Data is processed in accordance with the GDPR and the German Federal Data Protection Act (BDSG).</p>
            </div>
          </div>

          <div className="legal-section">
            <div className="legal-section-label">Data collected</div>
            <div className="legal-section-body">
              <p>When visiting the website, server log files automatically capture:</p>
              <ul>
                <li>Browser type and version</li>
                <li>Operating system used</li>
                <li>Referrer URL</li>
                <li>IP address and country</li>
                <li>Requested page</li>
                <li>Date and time of the server request</li>
              </ul>
              <p>This data is not combined with other sources. It serves the secure and reliable operation of the website and the detection of abuse (Art. 6(1)(f) GDPR). Log files are deleted automatically through log rotation after a short period.</p>
            </div>
          </div>

          <div className="legal-section">
            <div className="legal-section-label">Analytics</div>
            <div className="legal-section-body">
              <p>This site uses PostHog (PostHog Inc., hosted in the EU, Frankfurt) to understand how visitors use it, such as pages viewed, referrer and device type. PostHog runs in cookieless mode: no cookies or local storage are set and no persistent identifier is stored on your device. Visitors are counted via a daily rotating hash that cannot be traced back to an individual.</p>
              <p>Legal basis is legitimate interest in improving the website (Art. 6(1)(f) GDPR). Tracking can be blocked with common content blockers.</p>
            </div>
          </div>

          <div className="legal-section">
            <div className="legal-section-label">Your rights</div>
            <div className="legal-section-body">
              <p>You are entitled to: access, rectification, erasure, restriction of processing, data portability, and objection. Requests can be submitted via the contact details above.</p>
            </div>
          </div>

          <div className="legal-section">
            <div className="legal-section-label">Data security</div>
            <div className="legal-section-body">
              <p>Appropriate technical and organizational measures are implemented to protect personal data from unauthorized access, loss, or alteration. Absolute protection against third-party access cannot be guaranteed.</p>
            </div>
          </div>

          <div className="legal-section">
            <div className="legal-section-label">Changes</div>
            <div className="legal-section-body">
              <p>This statement may be updated to reflect legal requirements or service changes. The latest version is always available on this page.</p>
            </div>
          </div>

          <div className="legal-section">
            <div className="legal-section-label">Last updated</div>
            <div className="legal-section-body">
              <p>September 2026</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
