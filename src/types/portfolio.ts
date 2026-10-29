export type Theme = 'dark' | 'light';

export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type TimelineItem = {
  title: string;
  subtitle: string;
  duration: string;
  location?: string;
  summary?: string;
  highlights?: string[];
  tags?: string[];
};

export type SkillIconKey = 'ml' | 'llm' | 'graph' | 'math' | 'data' | 'tools';

export type SkillCategory = {
  title: string;
  icon: SkillIconKey;
  skills: string[];
};

export type ProjectItem = {
  title: string;
  subtitle: string;
  summary: string;
  /** One key, measurable result shown up front on the card */
  keyResult: string;
  technologies: string[];
  details: { label: string; text: string }[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
  featured?: boolean;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  /** One URL, or several tried in order until one loads */
  issuerLogo: string | string[];
  accessUrl: string;
  featured?: boolean;
};
