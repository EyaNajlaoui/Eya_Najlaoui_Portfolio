import type { CertificationItem, NavItem, ProjectItem, SkillCategory, StatItem, TimelineItem } from '../types/portfolio';

/* ------------------------------------------------------------------ */
/*  Profile                                                            */
/* ------------------------------------------------------------------ */

export const profile = {
  name: 'Eya Najlaoui',
  role: 'Applied Mathematics & Modeling Engineer',
  tagline: 'Data Scientist · ML, Deep Learning & Agentic AI',
  location: 'Tunis, Tunisia',
  email: 'eya.najlaouii@gmail.com',
  github: 'https://github.com/EyaNajlaoui',
  linkedin: 'https://www.linkedin.com/in/eya-najlaoui/',
  photo: '/images/eya-najlaoui.webp',
  /**
   * Put your CV PDF in the `public/` folder with exactly this name.
   * Leave empty ('') to hide the "Download CV" buttons.
   */
  cvUrl: '/Eya_Najlaoui_CV.pdf',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */

export const experienceItems: TimelineItem[] = [
  {
    title: 'Talan Tunisia Consulting',
    subtitle: 'AI Consultant Intern (End-of-Studies Internship)',
    duration: 'Feb 2026 – Jun 2026',
    location: 'Tunis, Tunisia',
    summary:
      'Built PrioPath, an AI-powered cybersecurity platform that combines Knowledge Graphs, Graph Neural Networks and AI agents to correlate vulnerabilities and prioritize attack paths.',
    highlights: [
      'Designed and delivered the platform end to end, from data ingestion to analyst dashboards.',
      'Built a unified Knowledge Graph of **5,000+ CVEs** from **6 threat-intelligence sources** (NVD, EPSS, CISA KEV, ExploitDB, MITRE ATT&CK, CAPEC).',
      'Trained and evaluated **Graph Neural Networks** to rank critical attack paths by exploitability and impact.',
      'Developed **LangGraph agents** for vulnerability enrichment, attack-path detection and remediation recommendations.',
    ],
    tags: ['Python', 'Neo4j', 'GNNs', 'LangGraph', 'LangChain', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
  },
  {
    title: 'Five Elements Services (5ES)',
    subtitle: 'Data Science Intern',
    duration: 'Jul 2025 – Aug 2025',
    location: 'Tunis, Tunisia',
    summary: 'Built a demand-forecasting solution from ERP data to predict product orders.',
    highlights: [
      'Built the forecasting dataset from internal ERP databases (extraction, cleaning, feature engineering, EDA).',
      'Developed an **LSTM** model and raised its **R² from 66% to 97%** through regularization and log transformation.',
      'Deployed a **Streamlit** app for product analytics and demand forecasting used for business decisions.',
    ],
    tags: ['Python', 'SQL', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Streamlit'],
  },
  {
    title: 'Ministry of Tourism',
    subtitle: 'IT Summer Intern',
    duration: 'Jul 2024 – Aug 2024',
    location: 'Tunis, Tunisia',
    highlights: [
      'Built an inventory of **200+ IT assets** and analyzed equipment condition to prioritize maintenance.',
      'Contributed to reducing IT maintenance response times by **20%**.',
    ],
    tags: ['Excel', 'Data Analysis'],
  },
];

/* ------------------------------------------------------------------ */
/*  Projects (featured first)                                          */
/* ------------------------------------------------------------------ */

export const projects: ProjectItem[] = [
  {
    title: 'FinQuery',
    subtitle: 'Agentic RAG over financial reports',
    summary:
      'An AI assistant that answers plain-English questions on financial filings and cites the exact page behind every number.',
    keyResult: '80% correct answers vs. 50% for a standard RAG pipeline on FinanceBench',
    technologies: ['Python', 'Qdrant', 'BM25', 'Cross-Encoder', 'Groq LLM', 'Streamlit', 'Docker'],
    details: [
      {
        label: 'Problem',
        text: 'Finding and verifying figures in long financial filings is slow, and generic chatbots tend to invent numbers instead of citing them.',
      },
      {
        label: 'Approach',
        text: 'Hybrid search (semantic embeddings + BM25, reranked by a cross-encoder) feeding a tool-calling agent that plans several searches and uses a calculator for financial ratios.',
      },
      {
        label: 'Evaluation',
        text: 'Held-out FinanceBench questions scored by an LLM judge plus automated checks. Hybrid search doubled the share of questions where the right page ranks first.',
      },
      {
        label: 'Engineering',
        text: 'Page-level citations, honest "not found" answers, pytest unit tests, GitHub Actions CI, Docker and a built-in evaluation dashboard.',
      },
    ],
    githubUrl: 'https://github.com/EyaNajlaoui/finquery',
    liveUrl: 'https://finquery-eya-najlaoui.streamlit.app/',
    featured: true,
  },
  {
    title: 'PrioPath',
    subtitle: 'Cybersecurity risk prioritization with GNNs & agents',
    summary:
      'A platform that helps security teams find the attack paths that matter most and focus remediation where risk is highest.',
    keyResult: 'Knowledge Graph of 5,000+ CVEs from 6 threat-intelligence sources',
    technologies: ['Neo4j', 'Cypher', 'GNNs', 'LangGraph', 'PostgreSQL', 'Redis'],
    details: [
      {
        label: 'Problem',
        text: 'Vulnerability scores assess issues in isolation, hiding multi-step attack paths and the vulnerabilities that create the most business risk.',
      },
      {
        label: 'Approach',
        text: 'A unified Knowledge Graph linking vulnerabilities, products, weaknesses and attack techniques (NVD, EPSS, CISA KEV, ExploitDB, MITRE ATT&CK, CAPEC), with GNNs ranking critical vulnerability chains.',
      },
      {
        label: 'Automation',
        text: 'LangGraph / LangChain agents collect vulnerabilities, enrich threat data, detect attack paths, compute risk and generate remediation recommendations.',
      },
      {
        label: 'Outcome',
        text: 'An interactive dashboard where analysts visualize attack paths, understand risk context and prioritize remediation.',
      },
    ],
    liveUrl: 'https://drive.google.com/file/d/1ow2b3Jv_jYFjDuPyxR-4rVDARLxeb-iZ/view?usp=drive_link',
    liveLabel: 'Watch demo',
  },
  {
    title: 'Customer Churn Prediction & Retention Dashboard',
    subtitle: 'XGBoost, SHAP & Power BI for telecom retention',
    summary:
      'End-to-end churn project: an XGBoost model predicts which telecom customers will leave, SHAP explains why, and a 4-page Power BI dashboard turns it into a prioritized call list with the revenue at stake.',
    keyResult: 'ROC-AUC 0.848 · 82% of churners detected · $139K/month revenue at risk',
    technologies: ['Python', 'XGBoost', 'scikit-learn', 'SHAP', 'K-Means', 'Power BI', 'DAX', 'Power Query'],
    details: [
      {
        label: 'Model',
        text: 'Tuned XGBoost for precision at 80% recall: ROC-AUC 0.848, 82% of churners detected, contact list twice as precise as random targeting.',
      },
      {
        label: 'Calibration',
        text: 'Kept probabilities calibrated (1,869 expected vs. 1,869 actual churners) so they can be converted into revenue at risk: $139K per month.',
      },
      {
        label: 'Explainability',
        text: 'SHAP gives each customer a main risk reason: for 93% of flagged customers, it is the month-to-month contract.',
      },
      {
        label: 'Segmentation',
        text: 'K-Means segmentation into 4 customer groups, each with a recommended retention action.',
      },
      {
        label: 'Dashboard',
        text: 'Power BI report: star schema, DAX measures, action list sorted by revenue at risk, and a what-if slider (retaining 20% of churners saves $280K per year).',
      },
    ],
    githubUrl: 'https://github.com/EyaNajlaoui/churn-retention-dashboard',
    liveUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiMDUwYzE2ZjYtYzNhNy00NTAxLWJlNjYtYjk2NTQ0OTQzZDRkIiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9',
    liveLabel: 'Live dashboard',
  },
  {
    title: 'PrognosIA',
    subtitle: 'Predictive maintenance for turbofan engines',
    summary:
      'An ML web app that classifies engine health and forecasts Remaining Useful Life (RUL) from multivariate sensor data.',
    keyResult: 'Live app: health classification + LSTM-based RUL forecasting',
    technologies: ['Python', 'XGBoost', 'TensorFlow/Keras', 'K-Means', 'Streamlit', 'Docker'],
    details: [
      {
        label: 'Problem',
        text: 'Predict turbofan engine degradation and estimate Remaining Useful Life from multivariate sensor time series.',
      },
      {
        label: 'Approach',
        text: 'Health classification (Random Forest, SVM, XGBoost) paired with LSTM regression for RUL, and K-Means clustering to detect operating regimes.',
      },
      {
        label: 'Product',
        text: 'Interactive diagnostic tool for real-time predictions plus a methodology page detailing the pipeline, feature selection and metrics. Containerized with Docker and deployed on Streamlit Cloud.',
      },
    ],
    githubUrl: 'https://github.com/EyaNajlaoui/maintenance_predictive',
    liveUrl: 'https://prognosia.streamlit.app/',
  },
];

/* ------------------------------------------------------------------ */
/*  Skills                                                             */
/* ------------------------------------------------------------------ */

export const skillCategories: SkillCategory[] = [
  {
    title: 'Machine & Deep Learning',
    icon: 'ml',
    skills: ['Scikit-learn', 'XGBoost', 'TensorFlow / Keras', 'PyTorch', 'LSTM / RNN', 'CNN', 'Time Series Forecasting', 'Model Evaluation'],
  },
  {
    title: 'LLMs, RAG & Agentic AI',
    icon: 'llm',
    skills: ['LangGraph', 'LangChain', 'RAG', 'Hybrid Search (BM25 + Dense)', 'Cross-Encoder Reranking', 'Qdrant', 'Tool Calling', 'LLM-as-a-Judge'],
  },
  {
    title: 'Graph & Knowledge AI',
    icon: 'graph',
    skills: ['Knowledge Graphs', 'Graph Neural Networks', 'Neo4j', 'Cypher', 'Attack Path Analysis'],
  },
  {
    title: 'Math & Modeling',
    icon: 'math',
    skills: ['Statistics & Probability', 'Optimization', 'Monte Carlo Simulation', 'Numerical Methods', 'Reliability Engineering'],
  },
  {
    title: 'Data & Visualization',
    icon: 'data',
    skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'PostgreSQL', 'Redis', 'ETL Pipelines', 'Power BI', 'Matplotlib / Seaborn', 'Plotly', 'Streamlit'],
  },
  {
    title: 'Engineering & Tools',
    icon: 'tools',
    skills: ['Git / GitHub', 'Docker', 'GitHub Actions (CI)', 'pytest', 'REST APIs', 'React / TypeScript'],
  },
];

/* ------------------------------------------------------------------ */
/*  Education                                                          */
/* ------------------------------------------------------------------ */

export const educationItems: TimelineItem[] = [
  {
    title: 'Engineering Degree in Applied Mathematics & Modeling',
    subtitle: 'Higher National School of Engineering of Tunis (ENSIT)',
    duration: '2023 – 2026',
    highlights: [
      'Specialization in Data Science.',
      'Graduated with **Highest Honors**; ranked **1st** in the Reliability & Maintenance specialization.',
    ],
    tags: ['Probability & Statistics', 'Machine Learning', 'Deep Learning', 'Optimization', 'Time Series', 'Graph Theory', 'Financial & Actuarial Modeling', 'Cryptography'],
  },
  {
    title: 'Research Master (M2) in Data Science',
    subtitle: 'Higher National School of Engineering of Tunis (ENSIT)',
    duration: '2025 – 2026',
    summary: 'Pursued alongside the engineering degree, covering the full data science workflow from data preparation to deploying AI solutions.',
    tags: ['Data Mining', 'Machine Learning', 'Monte Carlo Methods', 'Optimization', 'AI on the Cloud'],
  },
  {
    title: 'Preparatory Cycle in Mathematics & Physics',
    subtitle: 'Faculty of Sciences of Monastir',
    duration: '2021 – 2023',
    summary: 'Intensive program in advanced mathematics and physics, building strong analytical and problem-solving foundations.',
  },
];

/* ------------------------------------------------------------------ */
/*  Certifications (featured first)                                    */
/* ------------------------------------------------------------------ */

const favicon = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

// Several sources are tried in order; if all fail, the issuer's initials are shown.
const IBM_LOGO = [
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png',
  '/logos/coursera.svg',
];

export const certifications: CertificationItem[] = [
  {
    title: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    issuerLogo: favicon('microsoft.com'),
    accessUrl: 'https://www.credly.com/badges/1e5b75c7-cc59-465b-8a5c-7bbd763ece99/public_url',
    featured: true,
  },
  {
    title: 'Deep Learning Fundamentals',
    issuer: 'NVIDIA Deep Learning Institute',
    issuerLogo: '/logos/nvidia.svg',
    accessUrl: 'https://learn.nvidia.com/certificates?id=_vcbAvDoR3iPO550YnvyIw',
    featured: true,
  },
  {
    title: 'Machine Learning',
    issuer: 'IBM · Coursera',
    issuerLogo: IBM_LOGO,
    accessUrl: 'https://www.coursera.org/account/accomplishments/verify/D3NBAAYNZQXN',
  },
  {
    title: 'Python for Finance',
    issuer: '365 Data Science',
    issuerLogo: favicon('365datascience.com'),
    accessUrl: 'https://learn.365datascience.com/certificates/CC-40E1C7C753/',
  },
  {
    title: 'Databases and SQL for Data Science',
    issuer: 'IBM · Coursera',
    issuerLogo: IBM_LOGO,
    accessUrl: 'https://www.coursera.org/account/accomplishments/verify/DQPBAKBL7C4W',
  },
  {
    title: 'Data Analysis with Python',
    issuer: 'IBM · Coursera',
    issuerLogo: IBM_LOGO,
    accessUrl: 'https://www.coursera.org/account/accomplishments/verify/BTX5659LDQFB',
  },
  {
    title: 'Python Project for Data Science',
    issuer: 'IBM · Coursera',
    issuerLogo: IBM_LOGO,
    accessUrl: 'https://www.coursera.org/account/accomplishments/verify/V586EBX4E5H9',
  },
  {
    title: 'Data Science Methodology',
    issuer: 'IBM · Coursera',
    issuerLogo: IBM_LOGO,
    accessUrl: 'https://www.coursera.org/account/accomplishments/verify/XHHSQDVXPKW3',
  },
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM · Coursera',
    issuerLogo: IBM_LOGO,
    accessUrl: 'https://www.coursera.org/account/accomplishments/verify/EQ4N2YY5QXFP',
  },
];

/* ------------------------------------------------------------------ */
/*  Stats                                                              */
/* ------------------------------------------------------------------ */

const pad = (n: number) => String(n).padStart(2, '0');

export const stats: StatItem[] = [
  { value: pad(experienceItems.length), label: 'Internships' },
  { value: '5+', label: 'Deployed projects' },
  { value: '10+', label: 'Certifications' },
  { value: '1st', label: 'Rank in specialization' },
];
