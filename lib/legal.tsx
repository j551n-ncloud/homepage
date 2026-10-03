import type { ReactNode } from "react";
import type { Lang } from "@/lib/content";

export type LegalDoc = {
  title: string;
  subtitle: string;
  sections: { label: string; body: ReactNode }[];
};

const EMAIL = "johannes.nguyen@j551n.com";
const Mail = () => <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;
const Address = () => (
  <p>Johannes Nguyen<br />Heinrich-Böll-Straße 28<br />68723 Oftersheim<br />Germany</p>
);
const AddressDe = () => (
  <p>Johannes Nguyen<br />Heinrich-Böll-Straße 28<br />68723 Oftersheim<br />Deutschland</p>
);
const LFDI = "https://www.baden-wuerttemberg.datenschutz.de";

export const legalPaths: Record<Lang, { notice: string; privacy: string }> = {
  en: { notice: "/legal/notice", privacy: "/legal/privacy" },
  de: { notice: "/de/impressum", privacy: "/de/datenschutz" },
};

export const notice: Record<Lang, LegalDoc> = {
  de: {
    title: "Impressum",
    subtitle: "Angaben gemäß § 5 DDG für diese privat betriebene Website.",
    sections: [
      { label: "Anbieter", body: <AddressDe /> },
      { label: "Kontakt", body: <p>E-Mail: <Mail /></p> },
      { label: "Verantwortlich für den Inhalt", body: <><p>Verantwortlich nach § 18 Abs. 2 MStV:</p><AddressDe /></> },
      {
        label: "Haftung für Inhalte",
        body: <>
          <p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität kann ich jedoch keine Gewähr übernehmen. Für eigene Inhalte bin ich nach den allgemeinen Gesetzen verantwortlich.</p>
          <p>Eine allgemeine Pflicht, übermittelte oder gespeicherte fremde Informationen zu überwachen, besteht nicht (Art. 8 DSA). Sobald mir eine konkrete Rechtsverletzung bekannt wird, entferne ich den betreffenden Inhalt umgehend.</p>
        </>,
      },
      {
        label: "Haftung für Links",
        body: <p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für diese Inhalte ist der jeweilige Anbieter verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Werden mir Rechtsverletzungen bekannt, entferne ich den Link umgehend.</p>,
      },
      {
        label: "Urheberrecht",
        body: <p>Die von mir erstellten Inhalte unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung. Inhalte Dritter sind als solche gekennzeichnet. Solltest du auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen Hinweis.</p>,
      },
      { label: "Stand", body: <p>September 2026</p> },
    ],
  },
  en: {
    title: "Legal Notice",
    subtitle: "Information pursuant to § 5 DDG (German Digital Services Act) for this privately operated website. The German version is legally binding.",
    sections: [
      { label: "Provider", body: <Address /> },
      { label: "Contact", body: <p>Email: <Mail /></p> },
      { label: "Responsible for content", body: <><p>Responsible pursuant to § 18 (2) MStV:</p><Address /></> },
      {
        label: "Liability for content",
        body: <>
          <p>The content of this website has been created with great care. However, I cannot guarantee that it is accurate, complete or up to date. I am responsible for my own content under general law.</p>
          <p>There is no general obligation to monitor transmitted or stored third-party information (Art. 8 DSA). As soon as I become aware of a specific legal violation, I will remove the content concerned immediately.</p>
        </>,
      },
      {
        label: "Liability for links",
        body: <p>This website links to external third-party websites whose content I have no control over. The respective provider is responsible for that content. No legal violations were apparent at the time of linking. If I become aware of any, I will remove the link immediately.</p>,
      },
      {
        label: "Copyright",
        body: <p>Content created by me is subject to German copyright law. Reproduction, editing and distribution beyond the limits of copyright law require my written consent. Third-party content is marked as such. If you notice a copyright infringement, please let me know.</p>,
      },
      { label: "Last updated", body: <p>September 2026</p> },
    ],
  },
};

export const privacy: Record<Lang, LegalDoc> = {
  de: {
    title: "Datenschutzerklärung",
    subtitle: "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website nach Art. 13 DSGVO.",
    sections: [
      { label: "Verantwortlicher", body: <><AddressDe /><p>E-Mail: <Mail /></p></> },
      {
        label: "Kurzfassung",
        body: <p>Diese Website setzt keine Cookies und speichert nichts in deinem Browser. Es gibt keine Werbung und kein seitenübergreifendes Tracking. Verarbeitet werden nur Verbindungsdaten für den sicheren Betrieb und anonyme Nutzungsstatistiken.</p>,
      },
      {
        label: "Hosting",
        body: <p>Die Website läuft auf eigener Hardware in Deutschland. Ein externer Hosting-Anbieter ist nicht beteiligt.</p>,
      },
      {
        label: "Cloudflare",
        body: <>
          <p>Alle Anfragen an diese Website laufen über das Netzwerk von Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA. Cloudflare schützt die Website vor Angriffen und leitet die Anfragen weiter. Dabei verarbeitet Cloudflare deine IP-Adresse und technische Verbindungsdaten.</p>
          <p>Rechtsgrundlage ist mein berechtigtes Interesse an einem sicheren und stabilen Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Mit Cloudflare besteht ein Auftragsverarbeitungsvertrag. Cloudflare ist nach dem EU-US Data Privacy Framework zertifiziert, für Übermittlungen in die USA besteht damit ein Angemessenheitsbeschluss (Art. 45 DSGVO).</p>
        </>,
      },
      {
        label: "Server-Logs",
        body: <>
          <p>Bei jedem Seitenaufruf protokolliert der Server:</p>
          <ul>
            <li>IP-Adresse und Land</li>
            <li>Datum und Uhrzeit</li>
            <li>Aufgerufene Seite</li>
            <li>Browser und Betriebssystem (User-Agent)</li>
          </ul>
          <p>Die Daten dienen dazu, Missbrauch und Angriffe zu erkennen, und werden nicht mit anderen Quellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Logs werden automatisch rotiert und spätestens mit der nächsten Aktualisierung der Website gelöscht.</p>
        </>,
      },
      {
        label: "Nutzungsstatistik",
        body: <>
          <p>Für anonyme Nutzungsstatistiken verwende ich PostHog (PostHog Inc., USA) mit Datenspeicherung in der EU (Frankfurt). Die Anfragen laufen über diese Domain. PostHog arbeitet im cookielosen Modus: Es werden keine Cookies gesetzt und nichts auf deinem Gerät gespeichert.</p>
          <p>Erfasst werden aufgerufene Seiten, Verweisquelle, Land (von Cloudflare aus der Verbindung ermittelt), Gerätetyp, Browser, Klicks auf der Seite und Ladezeiten. Um Besuche zu zählen, bildet PostHog aus IP-Adresse und User-Agent einen täglich wechselnden Hashwert. Die IP-Adresse selbst wird nicht gespeichert, ein Wiedererkennen über mehrere Tage ist nicht möglich.</p>
          <p>Rechtsgrundlage ist mein berechtigtes Interesse, die Website zu verbessern (Art. 6 Abs. 1 lit. f DSGVO). Mit PostHog besteht ein Auftragsverarbeitungsvertrag mit EU-Standardvertragsklauseln. Die Daten werden nach spätestens 12 Monaten gelöscht. Du kannst die Erfassung mit einem Content-Blocker verhindern.</p>
        </>,
      },
      {
        label: "Schriftarten",
        body: <p>Die Schriftart wird von diesem Server geladen. Es besteht keine Verbindung zu Google oder anderen Font-Anbietern.</p>,
      },
      {
        label: "Externe Links",
        body: <p>Links zu GitHub, LinkedIn, meinem Blog und weiteren Seiten sind normale Links. Daten an diese Anbieter werden erst übertragen, wenn du einen Link anklickst. Dann gilt die Datenschutzerklärung des jeweiligen Anbieters.</p>,
      },
      {
        label: "Kontakt per E-Mail",
        body: <p>Wenn du mir schreibst, verarbeite ich deine E-Mail-Adresse und den Inhalt deiner Nachricht, um deine Anfrage zu beantworten (Art. 6 Abs. 1 lit. b bzw. f DSGVO). Die Daten lösche ich, sobald sie dafür nicht mehr benötigt werden und keine Aufbewahrungspflichten bestehen.</p>,
      },
      {
        label: "Deine Rechte",
        body: <>
          <p>Du hast das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20 DSGVO). Gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO kannst du jederzeit Widerspruch einlegen (Art. 21 DSGVO). Eine formlose E-Mail genügt.</p>
          <p>Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO). Zuständig ist der <a href={LFDI} target="_blank" rel="noopener noreferrer">Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg</a>, Lautenschlagerstraße 20, 70173 Stuttgart.</p>
        </>,
      },
      { label: "Stand", body: <p>September 2026</p> },
    ],
  },
  en: {
    title: "Privacy Policy",
    subtitle: "How personal data is processed on this website, pursuant to Art. 13 GDPR. The German version is legally binding.",
    sections: [
      { label: "Controller", body: <><Address /><p>Email: <Mail /></p></> },
      {
        label: "Summary",
        body: <p>This website sets no cookies and stores nothing in your browser. There are no ads and no cross-site tracking. Only connection data for secure operation and anonymous usage statistics are processed.</p>,
      },
      {
        label: "Hosting",
        body: <p>The website runs on my own hardware in Germany. No external hosting provider is involved.</p>,
      },
      {
        label: "Cloudflare",
        body: <>
          <p>All requests to this website pass through the network of Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA. Cloudflare protects the website against attacks and forwards the requests. In doing so, Cloudflare processes your IP address and technical connection data.</p>
          <p>The legal basis is my legitimate interest in secure and stable operation (Art. 6(1)(f) GDPR). A data processing agreement is in place with Cloudflare. Cloudflare is certified under the EU-US Data Privacy Framework, so transfers to the US are covered by an adequacy decision (Art. 45 GDPR).</p>
        </>,
      },
      {
        label: "Server logs",
        body: <>
          <p>For every page request the server logs:</p>
          <ul>
            <li>IP address and country</li>
            <li>Date and time</li>
            <li>Requested page</li>
            <li>Browser and operating system (user agent)</li>
          </ul>
          <p>This data is used to detect abuse and attacks and is not combined with other sources. The legal basis is Art. 6(1)(f) GDPR. The logs are rotated automatically and deleted with the next update of the website at the latest.</p>
        </>,
      },
      {
        label: "Usage statistics",
        body: <>
          <p>For anonymous usage statistics I use PostHog (PostHog Inc., USA) with data stored in the EU (Frankfurt). Requests go through this domain. PostHog runs in cookieless mode: no cookies are set and nothing is stored on your device.</p>
          <p>Collected are pages viewed, referrer, country (determined by Cloudflare from the connection), device type, browser, clicks on the page and loading times. To count visits, PostHog derives a daily rotating hash from IP address and user agent. The IP address itself is not stored, and you cannot be recognised across days.</p>
          <p>The legal basis is my legitimate interest in improving the website (Art. 6(1)(f) GDPR). A data processing agreement with EU Standard Contractual Clauses is in place with PostHog. The data is deleted after 12 months at the latest. You can prevent collection with a content blocker.</p>
        </>,
      },
      {
        label: "Fonts",
        body: <p>The font is loaded from this server. There is no connection to Google or any other font provider.</p>,
      },
      {
        label: "External links",
        body: <p>Links to GitHub, LinkedIn, my blog and other sites are plain links. No data is sent to these providers until you click a link. From then on, that provider&apos;s privacy policy applies.</p>,
      },
      {
        label: "Contact by email",
        body: <p>If you email me, I process your email address and the content of your message to answer your request (Art. 6(1)(b) or (f) GDPR). I delete the data once it is no longer needed for that purpose and no retention obligations apply.</p>,
      },
      {
        label: "Your rights",
        body: <>
          <p>You have the right of access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18) and data portability (Art. 20 GDPR). You can object at any time to processing based on Art. 6(1)(f) GDPR (Art. 21 GDPR). An informal email is sufficient.</p>
          <p>You also have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR). The competent authority is the <a href={LFDI} target="_blank" rel="noopener noreferrer">State Commissioner for Data Protection and Freedom of Information Baden-Württemberg</a>, Lautenschlagerstraße 20, 70173 Stuttgart, Germany.</p>
        </>,
      },
      { label: "Last updated", body: <p>September 2026</p> },
    ],
  },
};
