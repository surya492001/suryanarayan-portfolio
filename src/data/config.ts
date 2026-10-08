// Portfolio content verified against the supplied Analyst and Developer CVs.
export const site = {
  name: 'Suryanarayan Satheesh Pillai',
  shortName: 'Suryanarayan',
  role: 'Software engineer & business analyst',
  url: 'https://suryanarayan-portfolio.surya492001.workers.dev',
  email: 'surya492001@gmail.com',
  web3formsKey: '86572421-c21a-48ef-8baf-4455c1d24e37',
  linkedin: 'https://www.linkedin.com/in/suryanarayan-pillai-7b66a4194/',
  github: 'https://github.com/surya492001',
};
export const experience = {
  company: 'HDFC Bank',
  period: 'Jul 2023 — Sep 2026',
  role: 'Deputy Manager · IT, Business Solutions Group',
  location: 'Mumbai, India',
  points: [
    'Developed and maintained three enterprise banking applications using ASP.NET Core, C# and SQL Server.',
    'Led legacy application migration to ASP.NET Core, integrating budgeting, compliance, procurement and reporting into a unified workflow. Improved page response times by 40%.',
    'Delivered 60+ production deployments across development, UAT support, defect resolution, release management and production support.',
    'Gathered stakeholder requirements and prepared BRDs and FRDs. Built 12+ automated notification schedulers and workflow monitoring services.',
    'Designed REST APIs and role-based access modules, optimised SQL queries, and remediated stored XSS and path traversal findings.',
  ],
};
export const projects = [
  {
    title: 'BankOps AI', subtitle: 'An agent for banking operations', category: 'ai', date: 'Oct 2026',
    stack: ['LangGraph', 'FastAPI', 'PostgreSQL', 'Chroma', 'Streamlit'],
    description: 'Investigating banking incidents with an AI agent that brings together incident records, SLA status, application health and operational procedures.',
    detail: 'Built an agent using LLM tool calling and RAG-based SOP retrieval. Added an operations dashboard with investigation evidence, recommendations, audit trails and escalation capabilities. The agent avoids unsupported SOP guidance when no applicable knowledge exists.',
    outcome: 'Evidence-backed operational recommendations',
    link: 'https://bankops-ai-agent-for-banking-operations-h8uvg8bdsrctipoxyu8re2.streamlit.app/',
  },
  {
    title: 'PICS Attestation', subtitle: 'From appointments to application tracking', category: 'development', date: 'Jul 2025',
    stack: ['Full-stack development', 'Workflow automation', 'KPI dashboards'],
    description: 'A live customer-facing platform for appointment booking, document submission, application tracking and automated notifications.',
    detail: 'Designed, developed and deployed the platform, with ongoing maintenance. Gathered requirements, defined process flows and implemented role-based modules and dashboards tracking 10 operational KPIs.',
    outcome: '400+ customers per month · 10 operational KPIs',
    link: 'https://picsattestation.in/',
  },
  {
    title: 'Workflow Analytics', subtitle: 'Predicting SLA breaches in banking', category: 'analytics', date: 'May 2026 · MBA capstone',
    stack: ['Python', 'Decision Tree', 'Power BI', 'Process mining'],
    description: 'Analysed banking approval workflows to measure turnaround time, identify bottlenecks and predict cases at risk of breaching SLAs.',
    detail: 'Built a Decision Tree classifier with 97.5% accuracy, delivered a Power BI dashboard for TAT and SLA monitoring, and used process mining to recommend targeted process improvements.',
    outcome: '97.5% classification accuracy in the capstone project', link: '',
  },
  {
    title: 'Retail Data Pipeline', subtitle: 'From raw data to profitability insights', category: 'analytics', date: 'Jul 2026',
    stack: ['Microsoft Fabric', 'PySpark', 'Delta tables', 'Power BI'],
    description: 'An end-to-end Medallion pipeline that cleans, transforms and integrates multi-source retail data in Microsoft Fabric.',
    detail: 'Built Bronze, Silver and Gold layers using PySpark. Delivered Gold Delta tables and a Power BI dashboard tracking profitability, inventory turnover, return rates and core business KPIs.',
    outcome: 'Bronze → Silver → Gold → business insights', link: '',
  },
  {
    title: 'Nivara Living', subtitle: 'A mobile-first linen storefront', category: 'development', date: 'Dec 2025',
    stack: ['JavaScript', 'E-commerce', 'UPI', 'WhatsApp routing'],
    description: 'A full-stack e-commerce platform for hotel and home linen products, with a responsive, mobile-first purchase flow.',
    detail: 'Built shopping cart and checkout functionality, integrated UPI payments and WhatsApp order routing, and developed the responsive front end in JavaScript.',
    outcome: 'Cart, checkout, payments and order routing', link: '',
  },
];
export const skills = [
  { group: 'Software development', items: ['C# / ASP.NET Core', 'SQL Server / T-SQL', 'REST APIs', 'Entity Framework', 'JavaScript', 'Java / Spring Boot / React'] },
  { group: 'Data & business analysis', items: ['Power BI / DAX', 'Microsoft Fabric / PySpark', 'Data modelling / ETL', 'Requirements gathering / BRD / FRD', 'Process mapping / Gap analysis', 'UAT / Stakeholder management'] },
  { group: 'AI & delivery', items: ['Python / FastAPI', 'LangGraph / RAG / LLMs', 'Chroma / PostgreSQL', 'GitHub / Jira / Confluence', 'Agile / Scrum', 'Power Automate / SharePoint'] },
];
export const education = [
  { period: '2024 — 2026', org: 'BITS Pilani', title: 'MBA, Business Analytics', note: 'CGPA 9.07 / 10' },
  { period: '2019 — 2023', org: 'NMIMS, Mumbai', title: 'B.Tech, Electronics & Telecommunication', note: 'CGPA 3.62 / 4 · Minor in AI & Machine Learning' },
];
export const certifications = [
  'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
  'Master Java Full Stack — Udemy',
  'ASP.NET Core Web API Development — Udemy',
  'Microsoft Fabric Data Engineering: Real-Time Projects — Udemy',
  'Machine Learning with R — Alison',
  'Project Management Foundations — LinkedIn Learning',
  'Discover the Art of Prompting — Google, Coursera',
];
// Set to true to make the CV download options visible again.
export const showResumes = false;
export const resumes = [
  { label: 'Developer CV', file: '/Suryanarayan-Satheesh-Pillai-Developer.pdf' },
  { label: 'Analyst CV', file: '/Suryanarayan-Satheesh-Pillai-Analyst.pdf' },
];
