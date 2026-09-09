// ─────────────────────────────────────────────────────────────
//  EDIT EVERYTHING HERE. No HTML editing needed.
//  Lines marked TODO are placeholders you must replace.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Suryanarayan', // TODO: full name as you want it displayed
  role: 'Full-stack developer & business analyst',
  headline: 'Full-stack developer and business analyst building data-driven solutions in banking.',
  location: 'India · Open to opportunities in Dubai, Singapore & Europe',
  available: true,
  url: 'https://suryanarayan.pages.dev', // TODO: update after deploy
  // TODO: replace with your real profile URLs
  linkedin: 'https://www.linkedin.com/in/your-handle',
  github: 'https://github.com/your-handle',
  // TODO: get a free key at https://web3forms.com (takes 30 seconds, no account)
  web3formsKey: 'YOUR-WEB3FORMS-ACCESS-KEY',
};

export const about = [
  `I sit between the business and the build. Day to day that means gathering requirements from
   stakeholders, translating them into specs a delivery team can act on, and then writing the
   .NET and SQL that makes them real.`,
  `I currently work as Deputy Manager in the Business Solutions Group at a top-5 Indian
   private-sector bank, where most of my work involves automating manual operational processes
   and turning fragmented data into reporting people actually use.`,
  `My background is a mix of engineering and analytics — an MBA in Business Analytics from
   BITS Pilani alongside hands-on development, plus a Microsoft PL-300 certification in Power BI.`,
  `Some client work is under confidentiality — happy to walk through it verbally.`,
];

export const experience = [
  {
    role: 'Deputy Manager — Business Solutions Group',
    company: 'HDFC Bank',
    period: '2022 — Present',
    location: 'India',
    points: [
      'Own requirement gathering end to end: stakeholder workshops, BRD/FRD authoring, gap analysis and UAT sign-off across business and technology teams.',
      'Build .NET Core and SQL Server solutions that replace manual, spreadsheet-driven operational processes.',
      'Deliver Power BI reporting on operational and business data, moving teams from ad-hoc extracts to a single refreshed source.',
    ],
  },
];

export const projects = [
  {
    title: 'Reconciliation workflow automation',
    tags: ['.NET Core', 'SQL Server', 'Process design'],
    problem: 'A daily reconciliation process ran on spreadsheets passed between teams, with turnaround measured in days and no audit trail.',
    approach: 'Mapped the as-is process with the operations team, then built a .NET Core workflow with rule-based matching, exception queues and role-based approvals on SQL Server.',
    impact: 'Turnaround moved from days to hours, manual touchpoints dropped sharply, and every action became auditable.',
  },
  {
    title: 'Operations reporting on Power BI',
    tags: ['Power BI', 'Data modelling', 'DAX'],
    problem: 'Business heads were making decisions from static month-end extracts that arrived too late to act on.',
    approach: 'Built a star-schema model over the operational data, defined the metric layer in DAX with the business, and shipped a refreshed dashboard with drill-through to case level.',
    impact: 'Replaced recurring manual reporting effort with a self-serve dashboard, cutting reporting lag from weeks to a day.',
  },
  {
    title: 'Requirements-to-delivery for a customer-facing module',
    tags: ['BRD/FRD', 'UAT', 'Stakeholder management'],
    problem: 'A cross-functional initiative had competing definitions of scope across three stakeholder groups.',
    approach: 'Ran structured discovery, documented BRD and FRD with traceability back to each business ask, and drove UAT with defined entry and exit criteria.',
    impact: 'Scope stayed stable through delivery and the module passed UAT without a re-scoping cycle.',
  },
];

export const skills = [
  {
    group: 'Development',
    items: ['C#', 'ASP.NET Core', 'SQL Server', 'JavaScript', 'REST APIs', 'Git'],
  },
  {
    group: 'Business Analysis',
    items: ['BRD / FRD', 'Gap analysis', 'UAT', 'Process mapping', 'Stakeholder management'],
  },
  {
    group: 'Data & BI',
    items: ['Power BI', 'Microsoft Fabric', 'Alteryx', 'DAX', 'Data modelling'],
  },
];

export const education = [
  {
    title: 'MBA, Business Analytics',
    org: 'BITS Pilani',
    period: '',
  },
  {
    title: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
    org: 'Microsoft',
    period: '',
  },
];

// Drop the PDFs into public/ with exactly these filenames.
export const resumes = [
  { label: 'Developer resume', file: '/Suryanarayan-Developer-Resume.pdf' },
  { label: 'BA / Data Analyst resume', file: '/Suryanarayan-Analyst-Resume.pdf' },
];
