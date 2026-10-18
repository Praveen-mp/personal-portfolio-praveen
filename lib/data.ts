export const profile = {
  name: "Praveen Kumar M",
  role: "AI Engineer — Backend & Distributed Systems",
  location: "Chennai, Tamil Nadu, India",
  email: "pravinkabi6@gmail.com",
  phone: "+91-9003867705",
  github: "https://github.com/Praveen-mp",
  linkedin: "https://www.linkedin.com/in/praveen-kumar-m-b04358203/",
  leetcode: "https://leetcode.com/u/pravinkabi6/",
  summary:
    "Software Engineer with strong backend and distributed-systems experience, currently focused on building AI-powered applications and LLM workflows. Hands-on experience with Python, FastAPI, Node.js, microservices, Kubernetes, event-driven systems, and cloud infrastructure, along with Azure OpenAI, AutoGen, prompt engineering, POML, and structured LLM workflows.",
  summary2:
    "Experienced in building production systems from API design and data processing to deployment, observability, debugging, and performance optimization. Combines strong backend engineering fundamentals with practical experience building and integrating AI features into real-world products.",
};

export const highlights = [
  { label: "Production issues resolved", value: "50+" },
  { label: "Technical debt reduced", value: "~60%" },
  { label: "Analytics query speedup", value: "5–10x" },
  { label: "Manual effort cut (placement workflow)", value: "20min → 2min" },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "Microservices",
      "Async Programming",
      "Temporal",
      "Event-Driven Systems",
    ],
  },
  {
    title: "AI / LLM",
    skills: [
      "LLM Applications",
      "LLM Engineering",
      "AI Agents",
      "RAG",
      "Prompt Engineering",
      "Azure OpenAI",
      "AutoGen",
      "POML",
      "Structured Output",
      "LLM Workflows",
      "QLoRA",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Kubernetes",
      "Docker",
      "GCP",
      "AWS",
      "GitHub Actions",
      "Cloud Build",
      "CI/CD",
      "Workload Identity",
      "Kubernetes RBAC",
    ],
  },
  {
    title: "Databases & Data",
    skills: [
      "MySQL",
      "PostgreSQL",
      "ClickHouse",
      "Redis",
      "Elasticsearch",
      "Firestore",
      "Maxwell CDC",
      "Pub/Sub",
    ],
  },
  {
    title: "Security & Observability",
    skills: [
      "OIDC",
      "PKCE",
      "Zitadel",
      "JWT",
      "RBAC",
      "SSO",
      "SigNoz",
      "Distributed Tracing",
      "LLM Tracing",
      "Logging",
      "Alerting",
    ],
  },
  {
    title: "Languages",
    skills: ["Python", "JavaScript / TypeScript", "Java", "C"],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "iamneo.ai — NIIT Ventures",
    role: "Software Engineer",
    location: "Chennai, Tamil Nadu",
    period: "Aug 2023 – Present",
    points: [
      "Built and maintained scalable backend services and microservice workflows for a multi-tenant education and assessment platform.",
      "Developed REST APIs and backend services using Python, FastAPI, and Node.js for production applications.",
      "Designed and implemented an OIDC Backend-for-Frontend authentication service with PKCE, JWT validation, silent SSO, and cross-product logout.",
      "Implemented Redis-based session revocation and tenant-based user onboarding and role-management workflows using Zitadel.",
      "Designed Kubernetes RBAC policies using Roles, RoleBindings, ClusterRoles, and ServiceAccounts following least-privilege principles.",
      "Deployed and maintained cloud-native services on GCP Kubernetes using Workload Identity, ConfigMaps, CI/CD, centralized logging, and monitoring.",
      "Built a MySQL-to-ClickHouse CDC pipeline using Maxwell and Pub/Sub, processing lakhs of records daily for analytics workloads.",
      "Improved analytics query performance by approximately 5–10x by moving analytical workloads from MySQL to ClickHouse.",
      "Developed a Kubernetes-based sandbox for isolated execution of Python, Java, and C++ code.",
      "Developed an AI-powered placement-drive creation workflow that extracts company, role, compensation, location, eligibility, and deadlines from unstructured company emails, reducing manual effort from approximately 20 minutes to under 2 minutes.",
      "Built the PAT Co-pilot Service using Python, FastAPI, and Azure OpenAI to automate placement operations and convert unstructured inputs into structured application data.",
      "Designed a conversational AI workflow using AutoGen that maintains context, identifies missing information, applies business rules, and generates structured placement-drive data.",
      "Applied prompt engineering and structured-output techniques to improve LLM reliability, control responses, and reduce unnecessary token usage.",
      "Added LLM observability with SigNoz to monitor AI workflow latency, failures, token usage, API performance, and service health.",
      "Improved AI workflow reliability through validation, retries, asynchronous processing, and application-level error handling.",
      "Resolved 50+ production issues across backend, authentication, infrastructure, and AI workflows, improving overall platform reliability.",
      "Reduced technical debt by approximately 60% through refactoring, architectural improvements, and simplification of existing implementations.",
    ],
  },
  {
    company: "iamneo.ai — NIIT Ventures",
    role: "Software Engineer Trainee / Intern",
    location: "Chennai, Tamil Nadu",
    period: "Aug 2023 – Apr 2024",
    points: [
      "Developed REST APIs using FastAPI and Node.js for microservice-based applications.",
      "Optimized SQL queries and backend workflows for high-volume operations and improved API performance.",
      "Contributed to feature development, testing, debugging, code reviews, Git workflows, and production deployments.",
    ],
  },
  {
    company: "Numentica (Sanio.ai)",
    role: "Software Engineer",
    location: "Bengaluru, India",
    period: "May 2025 – Sep 2025",
    points: [
      "Built backend services using Python, FastAPI, and Node.js for ETL and AI-assisted product-matching workflows.",
      "Used Temporal for asynchronous and reliable execution of long-running data processing workflows.",
      "Worked on AI-assisted product-matching workflows combining backend services, data processing, and product intelligence.",
      "Optimized Elasticsearch indexes and search workflows for large-scale product data retrieval.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  points: string[];
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "CredQuery (dbchat)",
    tagline: "Self-Hosted Natural-Language Database Chat Platform",
    description:
      "A self-hosted chat platform over SQL databases using LangChain agents, FastAPI, and Streamlit — letting users query live data in plain English without writing SQL.",
    stack: [
      "LangChain",
      "FastAPI",
      "Streamlit",
      "PostgreSQL",
      "OIDC",
      "GitHub Actions",
    ],
    points: [
      "Architected a plugin-based adapter system using Repository and Service Layer patterns with dependency injection — decoupling business logic from the UI so a Streamlit frontend and a FastAPI REST API share one core service layer.",
      "Implemented defense-in-depth query safety: a SQL-guard layer restricting the LLM to single read-only SELECT/WITH statements, automated verification of database-user privileges instead of self-attestation, and per-query row limits and statement timeouts.",
      "Added encrypted credential storage (Fernet), per-session rate limiting, and dual authentication: OIDC/Google sign-in for the UI and bearer-token auth for the API.",
      "Built Excel/PDF export and a saved-reports feature for re-running common questions against live data on demand.",
      "Set up CI/CD with GitHub Actions running the full test suite, score-gated pylint, and Conventional Commits enforcement — 50+ unit tests using dependency-injected fakes, requiring no live database or LLM to run.",
    ],
    link: "https://github.com/Praveen-mp/CredQuery-Portal",
    featured: true,
  },
];

export const coursework = {
  title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
  provider: "Udemy",
  description:
    "Completed hands-on training covering LLM engineering, RAG, AI agents, prompt engineering, embeddings, and parameter-efficient fine-tuning using QLoRA.",
};

export const education = {
  school: "Karpagam College of Engineering",
  degree: "B.E. Electrical and Electronics Engineering",
  period: "2020 – 2024",
  gpa: "CGPA: 8.57 / 10",
};
