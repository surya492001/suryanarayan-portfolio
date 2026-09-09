// ─────────────────────────────────────────────────────────────
//  EDIT EVERYTHING HERE. No HTML editing needed.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Suryanarayan Satheesh Pillai',
  shortName: 'Suryanarayan',
  role: 'Full-stack developer & business analyst',
  availability: 'Open to opportunities',
  url: 'https://suryanarayan-portfolio.surya492001.workers.dev', // Live on Cloudflare Workers.
  linkedin: 'https://www.linkedin.com/in/suryanarayan-pillai-7b66a4194/',
  github: 'https://github.com/surya492001',
  // TODO: free key from https://web3forms.com (enter your email, it is mailed to you)
  web3formsKey: '86572421-c21a-48ef-8baf-4455c1d24e37',
};

export const hero = {
  // The word wrapped in *asterisks* is rendered in italic accent type.
  headline: 'Full-stack developer & business analyst building *data-driven* solutions.',
  intro: `I gather the requirements, build the thing, and prove it worked. Currently Deputy Manager IT
    in the Business Solutions Group at HDFC Bank, working where .NET engineering meets business
    analysis and BI.`,
  facts: [
    { label: 'Based in', value: 'Mumbai, India' },
    { label: 'Experience', value: '3 years' },
    { label: 'Focus', value: 'BFSI · Data' },
    { label: 'Certified', value: 'Microsoft PL-300' },
  ],
};

export const marquee = [
  'C#',
  'ASP.NET Core',
  'SQL Server',
  'REST APIs',
  'Power BI',
  'Microsoft Fabric',
  'PySpark',
  'React',
  'BRD / FRD',
  'UAT',
  'Stakeholder management',
];

export const experience = [
  {
    period: 'July 2023 to Present',
    company: 'HDFC Bank',
    role: 'Deputy Manager IT, Business Solutions Group',
    location: 'Mumbai, India',
    lead: `Full-stack developer and business analyst on three enterprise banking applications, from
      requirements through to production support.`,
    points: [
      'Led the migration of legacy .NET Framework applications to ASP.NET Core, re-architecting the codebase and folding budgeting, compliance, procurement and reporting into one unified workflow.',
      'Designed RESTful APIs, role-based access modules and optimised SQL Server stored procedures supporting high-volume approval workflows.',
      'Delivered 60+ production deployments, owning development, UAT support, defect resolution, release management and post-production support.',
      'Built 12+ automated notification schedulers and workflow monitoring services, removing manual follow-up for operations teams.',
      'Remediated SAST security findings including stored XSS and path traversal (CWE-22) with input validation, output encoding and secure file-handling patterns.',
      'Gathered requirements directly from business stakeholders, authored BRDs and FRDs, and translated them into technical designs.',
    ],
  },
];

export const education = [
  {
    period: '2024 to 2026',
    org: 'BITS Pilani, Pilani Campus',
    title: 'MBA, Business Analytics',
    note: 'CGPA 9.07 / 10',
  },
  {
    period: '2019 to 2023',
    org: 'NMIMS, Mumbai',
    title: 'B.Tech, Electronics & Telecommunication',
    note: 'CGPA 3.62 / 4',
  },
];

export const certifications = [
  'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
  'ASP.NET Core Web API Development (Udemy)',
  'Microsoft Fabric Data Engineering: Real-Time Projects (Udemy)',
  'Master Java Full Stack: React, Spring Boot, REST APIs, JWT (Udemy, in progress)',
  'Machine Learning with R (Alison)',
  'Project Management Foundations (LinkedIn Learning)',
];

export const projects = [
  {
    title: 'PICS Attestation Services',
    tag: 'Live production',
    stack: 'ASP.NET Core · SQL Server · JavaScript',
    problem:
      'A document attestation business was running appointments, submissions and status updates over phone and spreadsheets, with no way for customers to track their own application.',
    approach:
      'Designed, built and deployed a full-stack platform covering appointment booking, document submission, application tracking and automated notifications, with role-based modules and dashboards tracking 10 operational KPIs.',
    impact:
      'Live in production, serving 400+ customers a month. I own the full lifecycle from requirements through to production support.',
  },
  {
    title: 'Workflow analytics & SLA prediction',
    tag: 'MBA capstone',
    stack: 'Python · Power BI · Process mining',
    problem:
      'Banking approval workflows were breaching SLAs, but breaches were only visible after the fact, so escalation was always reactive.',
    approach:
      'Analysed real banking workflow data to measure turnaround time and locate bottlenecks by approval stage, then trained a Decision Tree classifier to flag cases likely to breach before they did.',
    impact:
      '97% accuracy on breach prediction, delivered alongside a Power BI dashboard for SLA monitoring and process-mining recommendations for targeted fixes.',
  },
  {
    title: 'Retail data pipeline on Microsoft Fabric',
    tag: 'Data engineering',
    stack: 'Microsoft Fabric · PySpark · Delta · Power BI',
    problem:
      'Multi-source retail data arrived dirty and inconsistent, so profitability and inventory questions could not be answered from one place.',
    approach:
      'Built an end-to-end Medallion pipeline (Bronze, Silver, Gold) in Microsoft Fabric using PySpark to clean, transform and integrate the sources, including SCD Type 1 and Type 2 handling.',
    impact:
      'Gold Delta tables plus a Power BI dashboard covering profitability, inventory turnover and return rates.',
  },
  {
    title: 'Nivara Living',
    tag: 'E-commerce',
    stack: 'JavaScript · UPI · WhatsApp routing',
    problem:
      'A hotel and home linen business needed to sell online without the overhead of a hosted storefront platform.',
    approach:
      'Built a full-stack e-commerce platform with cart, checkout, UPI payment integration and WhatsApp order routing, front end written mobile-first.',
    impact: 'A working storefront with a purchase flow that holds up on a phone.',
  },
];

export const skills = [
  {
    group: 'Development',
    items: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'Entity Framework', 'REST APIs', 'JavaScript', 'React', 'Java / Spring Boot'],
  },
  {
    group: 'Data & BI',
    items: ['SQL Server', 'T-SQL', 'Power BI', 'DAX', 'Microsoft Fabric', 'PySpark', 'ETL pipelines', 'Data modelling'],
  },
  {
    group: 'Business analysis',
    items: ['Requirements elicitation', 'BRD / FRD', 'User stories', 'Process mapping', 'Gap analysis', 'UAT planning', 'Change requests', 'Stakeholder management'],
  },
  {
    group: 'Practices & tools',
    items: ['Agile / Scrum', 'N-tier architecture', 'JWT & RBAC', 'Secure coding (SAST)', 'Git / GitHub', 'Jira', 'Confluence', 'Postman'],
  },
];

export const publication = {
  text: 'Pillai, S. "Probability of Heart Disease using Various Machine Learning Algorithms", 2023 International Conference on Advanced Computing Technologies and Applications (ICACTA), Mumbai, India.',
};

// Drop the PDFs into public/ with exactly these filenames.
export const resumes = [
  {
    label: 'Developer',
    note: '.NET · SQL · Web',
    file: '/Suryanarayan-Satheesh-Pillai-Developer.pdf',
  },
  {
    label: 'BA / Data Analyst',
    note: 'Requirements · Power BI · Fabric',
    file: '/Suryanarayan-Satheesh-Pillai-Analyst.pdf',
  },
];
