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
      { name: "Python & SQL", tags: "FastAPI, PostgreSQL, MySQL" },
      { name: "TypeScript", tags: "Node.js, Next.js" },
      { name: de ? "KI & LLMs" : "AI & LLMs", tags: de ? "RAG, MCP-Server, selbst gehostete LLMs" : "RAG, MCP servers, self-hosted LLMs", tag: "ai" },
    ],
  },
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
    label: "Identity & Security",
    topic: "identity-and-security",
    items: [
      { name: de ? "Verzeichnis & SSO" : "Directory & SSO", tags: "LDAP/AD, ADFS, OIDC, Pocket ID", tag: "identity" },
      { name: "Security", tags: "CrowdSec, Trivy, firewalld, TLS/PKI", tag: "security" },
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
        "I am an IT specialist for system integration at the German Cancer Research Center (DKFZ), where I qualified in July 2026 after my apprenticeship (IHK). I work in the ODCF team on Linux, automation, Kubernetes and the HPC cluster. Next up: computerized system validation in a GxP environment.",
        "I get up to speed with new technology quickly and take it from first comparison to production: evaluate the options, present them to the team, implement, hand over. I trace faults systematically to their root cause instead of patching symptoms, a way of working I learned in the workshop as an automotive mechatronics technician.",
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
      intro: "From ops fundamentals to developer workflows, I focus on reliable platforms, automation, identity and observability.",
      groups: skillGroups(false),
    },
    projects: {
      label: "Projects",
      title: "Selected work",
      intro: "From idea to production.",
      problem: "Problem",
      solution: "Solution",
      items: [
        {
          kind: "Personal · used at work · Open source",
          title: "RAG knowledge search over MCP",
          problem: "My notes and work SOPs were spread out, and every task switch meant searching for them again. On top of that, the department has a steep learning curve.",
          solution: "A personal retrieval system with hybrid search (full text and embeddings) over my notes and SOPs, exposed as an MCP server so LLM assistants answer from them. Built privately, used daily at work.",
          stack: "Node.js · SQLite · multilingual-e5 · MCP",
          links: [{ href: `${gh}/glance-public`, label: "GitHub" }, { href: "https://blog.j551n.com/from-dashboard-to-assistant-backend-glance-with-73-mcp-tools/", label: "Blog" }],
        },
        {
          kind: "Work · ODCF · Open source",
          title: "systemd-resource-control",
          problem: "On shared cluster nodes, a single user could use up all CPU and memory and slow down everyone else.",
          solution: "An Ansible role that limits CPU and RAM per user with systemd slices, applied at login through PAM. In production on all 5 worker nodes of the HPC cluster, for every cluster user.",
          stack: "Ansible · systemd · PAM",
          links: [{ href: `${gh}/systemd-resource-control`, label: "GitHub" }, { href: "https://blog.j551n.com/per-user-cpu-and-ram-limits-on-shared-cluster-nodes-with-systemd-and-pam/", label: "Blog" }],
        },
        {
          kind: "Homelab · Open source",
          title: "git-iac: self-hosted GitOps",
          problem: "Updating services by hand across many hosts is slow, and a bad update is hard to roll back.",
          solution: "Separate build and deploy pipelines: images are tagged by commit SHA, scanned with Trivy and stored in Harbor. A merge request bumps the pin, and the merge rolls it out with Ansible after a Proxmox snapshot. Deploys 15 Docker stacks to 5 hosts.",
          stack: "GitLab CI · Ansible · Harbor · Trivy",
          links: [{ href: `${gh}/git-iac`, label: "GitHub" }, { href: "https://blog.j551n.com/two-repos-one-pipeline-self-hosted-gitops-with-gitlab-ci-harbor-and-ansible/", label: "Blog" }],
        },
        {
          kind: "Work · ODCF",
          title: "AWX & Ascender on Kubernetes",
          problem: "Ansible runs happened from individual machines, with no shared overview of who ran what.",
          solution: "Compared AWX and Ascender, presented the results, then ran them on k3s behind the corporate proxy with LDAP/AD login, deployed by my own playbook.",
          stack: "k3s · Helm · AWX Operator · LDAP/AD",
          links: [{ href: `${blog}/dkfz/`, label: "Blog" }],
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
      text: "I am deepening my expertise in automation, observability, and resilient platform design while bringing the same discipline from automotive diagnostics into modern infrastructure work.",
      avail: "Open to opportunities matching systems work",
      location: "Based in the Rhein-Neckar region, near Heidelberg",
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
        "Ich bin Fachinformatiker für Systemintegration am Deutschen Krebsforschungszentrum (DKFZ), wo ich im Juli 2026 meine Ausbildung (IHK) abgeschlossen habe. Im ODCF-Team arbeite ich mit Linux, Automatisierung, Kubernetes und dem HPC-Cluster. Als Nächstes kommt die Validierung computergestützter Systeme im GxP-Umfeld dazu.",
        "Ich arbeite mich schnell in neue Technologien ein und bringe sie vom ersten Vergleich bis in den Produktivbetrieb: Optionen bewerten, im Team vorstellen, umsetzen, übergeben. Fehler verfolge ich systematisch bis zur Ursache, statt nur Symptome zu beheben. Diese Arbeitsweise habe ich als Kfz-Mechatroniker in der Werkstatt gelernt.",
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
      title: "Ausgewählte Arbeiten",
      intro: "Von der Idee bis zum Produktivbetrieb.",
      problem: "Problem",
      solution: "Lösung",
      items: [
        {
          kind: "Privat · auch im Job genutzt · Open Source",
          title: "RAG-Wissenssuche per MCP",
          problem: "Meine Notizen und die SOPs aus der Arbeit waren verteilt, und bei jedem Aufgabenwechsel habe ich sie neu zusammengesucht. Dazu kommt die steile Einarbeitung in der Abteilung.",
          solution: "Ein eigenes Retrieval-System mit hybrider Suche (Volltext und Embeddings) über meine Notizen und SOPs, bereitgestellt als MCP-Server, damit LLM-Assistenten daraus antworten. Privat gebaut, täglich im Job im Einsatz.",
          stack: "Node.js · SQLite · multilingual-e5 · MCP",
          links: [{ href: `${gh}/glance-public`, label: "GitHub" }, { href: "https://blog.j551n.com/from-dashboard-to-assistant-backend-glance-with-73-mcp-tools/", label: "Blog" }],
        },
        {
          kind: "Arbeit · ODCF · Open Source",
          title: "systemd-resource-control",
          problem: "Auf geteilten Cluster-Knoten konnte ein einzelner Benutzer CPU und RAM komplett belegen und alle anderen ausbremsen.",
          solution: "Eine Ansible-Rolle, die CPU und RAM pro Benutzer über systemd-Slices begrenzt, angewendet beim Login per PAM. Produktiv auf allen 5 Worker-Knoten des HPC-Clusters, für jeden Cluster-Benutzer.",
          stack: "Ansible · systemd · PAM",
          links: [{ href: `${gh}/systemd-resource-control`, label: "GitHub" }, { href: "https://blog.j551n.com/per-user-cpu-and-ram-limits-on-shared-cluster-nodes-with-systemd-and-pam/", label: "Blog" }],
        },
        {
          kind: "Homelab · Open Source",
          title: "git-iac: Self-hosted GitOps",
          problem: "Dienste auf vielen Hosts von Hand zu aktualisieren ist langsam, und ein fehlerhaftes Update lässt sich schwer zurückrollen.",
          solution: "Getrennte Build- und Deploy-Pipelines: Images mit Commit-SHA, Trivy-Scan und Ablage in Harbor. Ein Merge Request hebt den Pin, der Merge rollt per Ansible nach einem Proxmox-Snapshot aus. Verteilt 15 Docker-Stacks auf 5 Hosts.",
          stack: "GitLab CI · Ansible · Harbor · Trivy",
          links: [{ href: `${gh}/git-iac`, label: "GitHub" }, { href: "https://blog.j551n.com/two-repos-one-pipeline-self-hosted-gitops-with-gitlab-ci-harbor-and-ansible/", label: "Blog" }],
        },
        {
          kind: "Arbeit · ODCF",
          title: "AWX & Ascender auf Kubernetes",
          problem: "Ansible lief von einzelnen Rechnern aus, ohne gemeinsamen Überblick, wer was ausgeführt hat.",
          solution: "AWX und Ascender verglichen, Ergebnisse vorgestellt und dann auf k3s hinter dem Firmen-Proxy betrieben, mit LDAP/AD-Anmeldung und eigenem Playbook für das Deployment.",
          stack: "k3s · Helm · AWX Operator · LDAP/AD",
          links: [{ href: `${blog}/dkfz/`, label: "Blog" }],
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
      text: "Ich vertiefe mein Wissen in Automatisierung, Observability und resilientem Plattformdesign und bringe dabei die Sorgfalt aus der Fahrzeugdiagnose in moderne Infrastrukturarbeit ein.",
      avail: "Offen für neue Aufgaben in der Systemarbeit",
      location: "Wohnhaft in der Rhein-Neckar-Region, bei Heidelberg",
      copied: "Kopiert!",
    },
    footer: { notice: "Impressum", privacy: "Datenschutz" },
  },
};
