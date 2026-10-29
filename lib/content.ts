export type Lang = "en" | "de";

type Link = { href: string; label: string };
// tag: blog tag slug, linked only while that tag page is public (see getLiveTags)
type SkillItem = { name: string; tags: string; href?: string; tag?: string };
// topic: anchor of this category on blog.j551n.com/topics/, every label links there
type SkillGroup = { label: string; topic: string; items: SkillItem[] };
type Project = {
  kind: string;
  title: string;
  problem: string;
  solution: string;
  stack: string;
  links?: Link[];
};
type ExpItem = { period: string; company: string; href?: string; role: string; current?: boolean; points?: { label: string; text: string }[] };

export type Content = {
  meta: { title: string; description: string };
  nav: { about: string; skills: string; projects: string; experience: string; contact: string };
  langSwitch: { href: string; label: string; aria: string };
  hero: { role: string; avail: string; headlineStart: string; headlineStrong: string; headlineEnd: string; contact: string; cv: string };
  about: { label: string; paragraphs: string[]; stats: { to?: number; suffix?: string; text?: string; label: string }[] };
  skills: { label: string; title: string; intro: string; groups: SkillGroup[] };
  projects: { label: string; title: string; intro: string; problem: string; solution: string; items: Project[] };
  experience: { label: string; items: ExpItem[] };
  blog: { label: string; title: string; all: string; locale: string };
  contact: { label: string; text: string; avail: string; location: string; copied: string };
  footer: { notice: string; privacy: string };
};

const blog = "https://blog.j551n.com";
const gh = "https://github.com/j551n-ncloud";

const skillGroups = (de: boolean): SkillGroup[] => [
  {
    label: de ? "Container & Virtualisierung" : "Containers & Virtualization",
    topic: "containers-and-virtualization",
    items: [
      { name: "Proxmox VE & PBS", tags: "HA, Ceph, SDN, GPU passthrough" },
      { name: "Kubernetes", tags: "k3s, Helm, " + (de ? "Operatoren" : "operators") },
      { name: "Docker & Harbor", tags: "Docker Compose, " + (de ? "Registry, Trivy-Scans" : "registry, Trivy scanning") },
      { name: "VMware", tags: de ? "ESXi, Migration zu Proxmox" : "ESXi, Proxmox migration" },
    ],
  },
  {
    label: "Sysadmin",
    topic: "sysadmin",
    items: [
      { name: "Linux", tags: "systemd, RHEL, Debian, cgroups, auditd", tag: "linux" },
      { name: de ? "Bash-Scripting" : "Bash Scripting", tags: de ? "Shell-Tools, Automatisierung" : "Shell utilities, automation" },
      { name: "IBM LSF & ESS", tags: de ? "HPC-Cluster-Support, Quotas, Freigaben" : "HPC cluster support, quotas, shares", tag: "hpc" },
      { name: "Dell Hardware", tags: "iDRAC, PowerEdge, RAID, " + (de ? "Hardware-Diagnose" : "hardware diagnostics") },
    ],
  },
  {
    label: "DevOps",
    topic: "devops",
    items: [
      { name: "Ansible / AWX", tags: de ? "Eigene Rollen, Playbooks, AWX Operator, Kickstart" : "Own roles, playbooks, AWX Operator, Kickstart", tag: "ansible" },
      { name: "CI/CD", tags: "GitLab CI/CD, GitHub Actions, Git", tag: "ci-cd" },
      { name: "Python & SQL", tags: "PostgreSQL, MySQL" },
      { name: "TypeScript", tags: "Node.js, Next.js" },
      { name: de ? "KI & LLMs" : "AI & LLMs", tags: de ? "RAG, MCP-Server, selbst gehostete LLMs" : "RAG, MCP servers, self-hosted LLMs", tag: "ai" },
    ],
  },
  {
    label: "Identity & Security",
    topic: "identity-and-security",
    items: [
      { name: de ? "Anmeldung & SSO" : "Login & SSO", tags: "LDAP/AD, Kerberos, SSSD, SAML (ADFS), OIDC", tag: "identity" },
      { name: "Security", tags: "CrowdSec, Trivy, firewalld, TLS/PKI", tag: "security" },
      { name: "GxP / CSV", tags: de ? "GAMP 5, risikobasierte Validierung, IQ/OQ/PQ, Traceability" : "GAMP 5, risk-based validation, IQ/OQ/PQ, traceability" },
    ],
  },
  {
    label: "Observability",
    topic: "observability",
    items: [
      { name: "Logging", tags: de ? "Loki, Grafana Alloy (clusterweit)" : "Loki, Grafana Alloy (cluster-wide)" },
      { name: "Monitoring", tags: "Grafana, Prometheus, Checkmk" },
    ],
  },
  {
    label: de ? "Infrastruktur" : "Infrastructure",
    topic: "infrastructure",
    items: [
      { name: de ? "Netzwerk" : "Networking", tags: "VLANs, LACP, NetBox, Proxmox SDN, Tailscale" },
      { name: "Storage", tags: "IBM ESS, Ceph, NFS" },
      { name: "Homelab", tags: de ? "3-Node-Proxmox-Cluster, Pangolin, SSO" : "3-node Proxmox cluster, Pangolin, SSO", tag: "homelab" },
    ],
  },
];

export const content: Record<Lang, Content> = {
  en: {
    meta: {
      title: "Johannes Nguyen",
      description: "IT Specialist for System Integration (IHK) at DKFZ. Linux, automation and Kubernetes.",
    },
    nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", contact: "Contact" },
    langSwitch: { href: "/de", label: "DE", aria: "Deutsche Version" },
    hero: {
      role: "IT Specialist",
      avail: "Available",
      headlineStart: "Linux, Ansible and Kubernetes for research infrastructure at the ",
      headlineStrong: "German Cancer Research Center (DKFZ)",
      headlineEnd: ", from the HPC cluster to the datacenter rack.",
      contact: "Contact me",
      cv: "CV (PDF)",
    },
    about: {
      label: "About",
      paragraphs: [
        "IT Specialist for System Integration (IHK, 07/2026) in the ODCF team at the German Cancer Research Center (DKFZ). Day-to-day work covers the datacenter, deployments with Ansible, shares and NFS on IBM ESS, and troubleshooting LSF nodes and jobs on the HPC cluster. Alongside operations: computerized system validation (CSV) in a GxP environment.",
        "New technology from first comparison to production: evaluate the options, present them to the team, implement, hand over. With faults, the root cause counts, not the symptom, a way of working from the workshop as an automotive mechatronics technician.",
      ],
      stats: [
        { to: 4, suffix: "+", label: "Years of Linux & Windows Server in production" },
        { to: 15, suffix: "+", label: "Self-hosted services deployed & maintained" },
        { text: "HPC", label: "Cluster support with IBM LSF & ESS at DKFZ" },
        { text: "IHK 2026", label: "Qualified IT specialist for system integration" },
      ],
    },
    skills: {
      label: "Skills",
      title: "Systems work with end-to-end ownership",
      intro: "From ops fundamentals to developer workflows: reliable platforms, automation, identity and observability.",
      groups: skillGroups(false),
    },
    projects: {
      label: "Projects",
      title: "Work and homelab",
      intro: "Two from work at the DKFZ, two from the homelab.",
      problem: "Problem",
      solution: "Solution",
      items: [
        {
          kind: "Work · DKFZ",
          title: "AWX and Ascender on k3s",
          problem: "It was hard to tell whether an Ansible run had reached a host, or where its logs were.",
          solution: "AWX on k3s with LDAP/AD login: every run and its logs in one web interface, recurring runs on a schedule. Compared with Ascender first.",
          stack: "k3s · Helm · AWX Operator · LDAP/AD",
          links: [{ href: `${blog}/dkfz/`, label: "Blog" }],
        },
        {
          kind: "Work · DKFZ",
          title: "Per-user CPU and RAM limits",
          problem: "A single user could take all CPU and memory on a shared cluster node.",
          solution: "An Ansible role sets fixed CPU and memory limits per user at login via PAM (systemd slices). In production.",
          stack: "Ansible · systemd · PAM",
          links: [{ href: `${blog}/per-user-cpu-and-ram-limits-on-shared-cluster-nodes-with-systemd-and-pam/`, label: "Blog" }],
        },
        {
          kind: "Homelab · Open source",
          title: "git-iac: GitOps for the homelab",
          problem: "Manual updates were slow and hard to roll back.",
          solution: "One repo builds the images, scans them with Trivy and stores them in Harbor, the other pins the versions. Every Ansible rollout starts with a Proxmox snapshot. 15 Docker stacks on 5 hosts.",
          stack: "GitLab CI · Ansible · Harbor · Trivy",
          links: [{ href: `${gh}/git-iac`, label: "GitHub" }, { href: `${blog}/two-repos-one-pipeline-self-hosted-gitops-with-gitlab-ci-harbor-and-ansible/`, label: "Blog" }],
        },
        {
          kind: "Personal · Open source",
          title: "Notes search via MCP",
          problem: "Notes were scattered, and every task switch meant searching again.",
          solution: "Search by keyword and meaning, connected to an AI assistant as an MCP server. In daily use.",
          stack: "Node.js · SQLite · multilingual-e5 · MCP",
          links: [{ href: `${gh}/glance-public`, label: "GitHub" }, { href: `${blog}/from-dashboard-to-assistant-backend-glance-with-73-mcp-tools/`, label: "Blog" }],
        },
      ],
    },
    experience: {
      label: "Experience",
      items: [
        {
          period: "2022 – Present", company: "German Cancer Research Center (DKFZ)", href: `${blog}/dkfz/`, role: "IT Specialist for System Integration, ODCF", current: true,
          points: [
            { label: "HPC cluster", text: "support and troubleshooting for W610 with IBM LSF, users, shares and quotas on IBM ESS" },
            { label: "Projects to production", text: "AWX and Ascender on k3s, Bitwarden, Harbor, EasyBuild, per-user CPU and RAM limits" },
            { label: "Identity & logging", text: "LDAP/AD and ADFS login for services, central logging with Loki and Grafana Alloy" },
            { label: "Datacenter", text: "racks, cabling and hosts planned in NetBox, Dell PowerEdge via iDRAC" },
            { label: "GxP validation", text: "risk-based validation of the self-hosted password manager per GAMP 5: requirements, validation plan, IQ/OQ/PQ, work instructions" },
            { label: "Documentation", text: "SOPs for recurring procedures" },
          ],
        },
        { period: "2022 – 2026", company: "German Cancer Research Center (DKFZ)", href: `${blog}/dkfz/`, role: "Apprenticeship, IT Specialist for System Integration (IHK, 07/2026)" },
        { period: "2021 – 2022", company: "Rheingönheim Vögele", role: "Commercial Vehicle Mechanic" },
        { period: "2017 – 2021", company: "Mercedes-Benz Mannheim", role: "Apprenticeship, Automotive Mechatronics Technician" },
        { period: "2013 – 2016", company: "BASF, Porsche, TRW, GRN", role: "Internships: computer science, prototyping, material testing" },
      ],
    },
    blog: { label: "Blog", title: "Latest posts", all: "All posts", locale: "en-GB" },
    contact: {
      label: "Contact",
      text: "Want to talk? Email is the fastest way to reach me.",
      avail: "Happy to talk about Linux and infrastructure work",
      location: "Rhein-Neckar region, near Heidelberg",
      copied: "Copied!",
    },
    footer: { notice: "Legal Notice", privacy: "Privacy" },
  },
  de: {
    meta: {
      title: "Johannes Nguyen",
      description: "Fachinformatiker für Systemintegration (IHK) am DKFZ. Linux, Automatisierung und Kubernetes.",
    },
    nav: { about: "Über mich", skills: "Skills", projects: "Projekte", experience: "Werdegang", contact: "Kontakt" },
    langSwitch: { href: "/", label: "EN", aria: "English version" },
    hero: {
      role: "Fachinformatiker",
      avail: "Verfügbar",
      headlineStart: "Linux, Ansible und Kubernetes für die Forschungsinfrastruktur am ",
      headlineStrong: "Deutschen Krebsforschungszentrum (DKFZ)",
      headlineEnd: ", vom HPC-Cluster bis zum Rack im Rechenzentrum.",
      contact: "Kontakt",
      cv: "Lebenslauf (PDF)",
    },
    about: {
      label: "Über mich",
      paragraphs: [
        "Fachinformatiker für Systemintegration (IHK, 07/2026) im ODCF-Team am Deutschen Krebsforschungszentrum (DKFZ). Zum Alltag gehören das Rechenzentrum, Deployments mit Ansible, Freigaben und NFS auf IBM ESS sowie die Fehlersuche an LSF-Knoten und Jobs im HPC-Cluster. Dazu kommt die Validierung computergestützter Systeme (CSV) im GxP-Umfeld.",
        "Neue Technologien vom ersten Vergleich bis in den Produktivbetrieb: Optionen bewerten, im Team vorstellen, umsetzen, übergeben. Bei Fehlern zählt die Ursache, nicht das Symptom, eine Arbeitsweise aus der Werkstatt als Kfz-Mechatroniker.",
      ],
      stats: [
        { to: 4, suffix: "+", label: "Jahre Linux & Windows Server im Produktivbetrieb" },
        { to: 15, suffix: "+", label: "Selbst gehostete Dienste aufgebaut & betrieben" },
        { text: "HPC", label: "Cluster-Support mit IBM LSF & ESS am DKFZ" },
        { text: "IHK 2026", label: "Fachinformatiker für Systemintegration" },
      ],
    },
    skills: {
      label: "Skills",
      title: "Systemarbeit mit Verantwortung von Anfang bis Ende",
      intro: "Von Betriebsgrundlagen bis zu Entwickler-Workflows: zuverlässige Plattformen, Automatisierung, Identity und Observability.",
      groups: skillGroups(true),
    },
    projects: {
      label: "Projekte",
      title: "Arbeit und Homelab",
      intro: "Zwei Projekte aus der Arbeit am DKFZ, zwei aus dem Homelab.",
      problem: "Problem",
      solution: "Lösung",
      items: [
        {
          kind: "Arbeit · DKFZ",
          title: "AWX und Ascender auf k3s",
          problem: "Ob ein Ansible-Lauf einen Host erreicht hatte und wo die Logs lagen, war kaum nachvollziehbar.",
          solution: "AWX auf k3s mit LDAP/AD-Anmeldung: alle Läufe samt Logs in einer Weboberfläche, wiederkehrende Läufe nach Zeitplan. Vorher mit Ascender verglichen.",
          stack: "k3s · Helm · AWX Operator · LDAP/AD",
          links: [{ href: `${blog}/dkfz/`, label: "Blog" }],
        },
        {
          kind: "Arbeit · DKFZ",
          title: "CPU- und RAM-Limits pro Benutzer",
          problem: "Ein einzelner Nutzer konnte auf geteilten Cluster-Knoten CPU und RAM komplett belegen.",
          solution: "Eine Ansible-Rolle setzt beim Login über PAM feste CPU- und RAM-Grenzen pro Nutzer (systemd-Slices). Produktiv im Einsatz.",
          stack: "Ansible · systemd · PAM",
          links: [{ href: `${blog}/per-user-cpu-and-ram-limits-on-shared-cluster-nodes-with-systemd-and-pam/`, label: "Blog" }],
        },
        {
          kind: "Homelab · Open Source",
          title: "git-iac: GitOps fürs Homelab",
          problem: "Updates von Hand waren langsam und schwer zurückzurollen.",
          solution: "Ein Repo baut die Images, prüft sie mit Trivy und legt sie in Harbor ab, das andere legt die Versionen fest. Vor jedem Rollout per Ansible entsteht ein Proxmox-Snapshot. 15 Docker-Stacks auf 5 Hosts.",
          stack: "GitLab CI · Ansible · Harbor · Trivy",
          links: [{ href: `${gh}/git-iac`, label: "GitHub" }, { href: `${blog}/two-repos-one-pipeline-self-hosted-gitops-with-gitlab-ci-harbor-and-ansible/`, label: "Blog" }],
        },
        {
          kind: "Privat · Open Source",
          title: "Notizsuche per MCP",
          problem: "Notizen lagen verstreut, bei jedem Aufgabenwechsel ging die Suche von vorne los.",
          solution: "Suche nach Stichwort und Bedeutung, als MCP-Server an einen KI-Assistenten angebunden. Täglich im Einsatz.",
          stack: "Node.js · SQLite · multilingual-e5 · MCP",
          links: [{ href: `${gh}/glance-public`, label: "GitHub" }, { href: `${blog}/from-dashboard-to-assistant-backend-glance-with-73-mcp-tools/`, label: "Blog" }],
        },
      ],
    },
    experience: {
      label: "Werdegang",
      items: [
        {
          period: "2022 – heute", company: "Deutsches Krebsforschungszentrum (DKFZ)", href: `${blog}/dkfz/`, role: "Fachinformatiker für Systemintegration, ODCF", current: true,
          points: [
            { label: "HPC-Cluster", text: "Support und Troubleshooting für W610 mit IBM LSF, Benutzer, Freigaben und Quotas auf IBM ESS" },
            { label: "Projekte bis zum Produktivbetrieb", text: "AWX und Ascender auf k3s, Bitwarden, Harbor, EasyBuild, CPU- und RAM-Limits pro Benutzer" },
            { label: "Identity & Logging", text: "Anmeldung per LDAP/AD und ADFS, zentrales Logging mit Loki und Grafana Alloy" },
            { label: "Rechenzentrum", text: "Racks, Verkabelung und Hosts in NetBox geplant, Dell PowerEdge per iDRAC" },
            { label: "GxP-Validierung", text: "risikobasierte Validierung des selbst gehosteten Passwortmanagers nach GAMP 5: Anforderungen, Validierungsplan, IQ/OQ/PQ, Arbeitsanweisungen" },
            { label: "Dokumentation", text: "SOPs für wiederkehrende Abläufe" },
          ],
        },
        { period: "2022 – 2026", company: "Deutsches Krebsforschungszentrum (DKFZ)", href: `${blog}/dkfz/`, role: "Ausbildung, Fachinformatiker für Systemintegration (IHK, 07/2026)" },
        { period: "2021 – 2022", company: "Rheingönheim Vögele", role: "Nutzfahrzeugmechaniker" },
        { period: "2017 – 2021", company: "Mercedes-Benz Mannheim", role: "Ausbildung, Kfz-Mechatroniker" },
        { period: "2013 – 2016", company: "BASF, Porsche, TRW, GRN", role: "Praktika: Informatik, Prototypenbau, Werkstoffprüfung" },
      ],
    },
    blog: { label: "Blog", title: "Neueste Beiträge", all: "Alle Beiträge", locale: "de-DE" },
    contact: {
      label: "Kontakt",
      text: "Interesse an einem Gespräch? Eine kurze E-Mail genügt.",
      avail: "Gern im Gespräch über Linux und Infrastruktur",
      location: "Rhein-Neckar-Region, bei Heidelberg",
      copied: "Kopiert!",
    },
    footer: { notice: "Impressum", privacy: "Datenschutz" },
  },
};
