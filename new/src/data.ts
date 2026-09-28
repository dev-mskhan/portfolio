export const profile = {
  name: "Muhammad Shahzaib",
  role: "Full Stack Developer | MERN & Agentic AI",
  roleClient: "I build web apps & AI tools that ship fast and scale",
  roleHirer: "Full Stack Developer, MERN, Agentic AI",
  stats: [
    { value: "3+", label: "Production Apps" },
    { value: "MERN + AI", label: "Core Stack" },
    { value: "Full-time & Freelance", label: "Available For" },
  ] satisfies Array<{ value: string; label: string }>,
  location: "Multan, Pakistan",
  email: "dev.mskhan@gmail.com",
  phone: "0318 4606617",
  summaryClient: "I build fast, reliable web apps and AI-powered tools that solve real problems, from customer-facing products to internal systems.",
  summaryHirer: "Full-stack across the whole picture: React/Node, agentic AI pipelines, real-time systems, and production deployment on AWS, Docker, and Vercel.",
  resume: "/cv.docx",
  links: {
    github: "https://github.com/dev-mskhan",
    linkedin: "https://linkedin.com/in/shahzaibkhan45",
    portfolio: "https://example.com",
  },
};

export const skillGroups = [
  {
    label: "Frameworks & Libraries",
    items: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Node.js",
      "Express.js",
      "Next.js",
      "Nest.js",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    label: "AI & LLM Integration",
    items: [
      "Agentic AI Development",
      "LLM Integration",
      "RAG Pipelines",
      "Langchain",
      "Vector DB",
      "Workflow Automation",
      "Python",
      "Model Context Protocol (MCP)",
    ],
  },
  {
    label: "Databases",
    items: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Prisma", "Redis"],
  },
  {
    label: "API Development",
    items: ["RESTful APIs", "GraphQL", "Microservices", "WebSockets"],
  },
  {
    label: "Testing & QA",
    items: [
      "Jest",
      "Cypress",
      "CodeRabbit",
      "Vitest",
      "Unit / Integration / E2E",
    ],
  },
  {
    label: "DevOps & Deployment",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "Vercel",
      "Render",
      "AWS cloud",
    ],
  },
];

export const projects = [
  {
    slug: "ai-multi-vendor-marketplace",
    title: "AI-Powered Multi-Vendor E-Commerce Platform",
    tag: "MERN + OpenAI",
    image: "/images/pic-6.png",
    liveLink: "https://ai-ecommerce-six.vercel.app/",
    github: "https://github.com/dev-mskhan/ai-ecommerce",
    outcome:
      "A fully operational marketplace handling multi-vendor inventory, live orders, and AI-assisted product discovery.",
    description:
      "A scalable multi-vendor marketplace with role-based access (Admin, Vendor, Buyer), JWT auth, real-time order tracking via Socket.IO, and analytics dashboards. Integrated an AI product assistant using the OpenAI API for natural-language search, with hardened security (Helmet.js, rate limiting, XSS protection) and full production deployment.",
    stack: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "OpenAI API",
      "Redis",
      "Docker",
    ],
    caseStudy: {
      challenge:
        "Multi-vendor platforms face complex permission hierarchies, data isolation across vendors, and the need for real-time inventory syncing. Adding AI-powered search without compromising query performance or security required careful architectural planning.",
      approach:
        "Built a role-based access system with distinct Admin, Vendor, and Buyer dashboards. Used Socket.IO for live order tracking and Redis for caching frequent queries. The AI assistant was containerized as a microservice with rate limiting and prompt injection guards.",
      highlights: [
        "JWT auth with refresh token rotation",
        "Helmet.js + XSS + rate limiting middleware stack",
        "OpenAI product assistant with Redis caching",
        "Dockerized deployment with CI/CD pipeline",
      ],
    },
  },
  {
    slug: "dark-auction",
    title: "Dark Auction: Real-time Auction Platform",
    tag: "Realtime + Blockchain",
    image: "/images/auction.avif",
    liveLink: "https://dark-auction.vercel.app/",
    github: "https://github.com/dev-mskhan/dark-auction",
    outcome:
      "A live auction platform with real-time bidding, encrypted bid history, and background image processing.",
    description:
      "A real-time auction platform with live bidding over Socket.IO, JWT access/refresh token auth, and BullMQ background queues for image processing and notifications. Integrated blockchain techniques for safe, encrypted bid-chaining, with Zod-validated environment configuration.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Cloudinary",
      "Redis",
      "BullMQ",
    ],
    caseStudy: {
      challenge:
        "Real-time auctions demand sub-second bid propagation, fraud-resistant bid chains, and graceful handling of concurrent bids. Image processing for auction items had to be non-blocking to keep the UI responsive.",
      approach:
        "Leveraged Socket.IO with Redis adapter for horizontal scaling of WebSocket connections. Implemented a cryptographic bid-chaining scheme where each bid references the previous bid's hash. BullMQ processed image uploads asynchronously with retry logic.",
      highlights: [
        "Encrypted bid-chaining for tamper-evident auction history",
        "BullMQ queues for image processing and notifications",
        "Zod-validated env config across all environments",
        "Horizontal scaling via Redis-adapter-backed Socket.IO",
      ],
    },
  },
  {
    slug: "ai-powered-crm",
    title: "AI-Powered Customer Relationship Management",
    tag: "Agentic AI + RAG",
    image: "/images/crm.avif",
    liveLink: "https://ai-crm.vercel.app/",
    github: "https://github.com/dev-mskhan/ai-crm",
    outcome:
      "A full-stack CRM with Kanban pipelines, AI lead scoring, and automated email drafting.",
    description:
      "A full-stack CRM featuring a Kanban deal pipeline, real-time interaction timeline, and a suite of AI capabilities: lead scoring, deal forecasting, sentiment analysis, and automated email drafting, powered by HuggingFace embeddings, Ollama, and Groq.",
    stack: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "HuggingFace",
      "Ollama",
      "Groq",
      "BullMQ",
    ],
    caseStudy: {
      challenge:
        "Integrating LLM inference into a CRM without introducing noticeable latency or high API costs. Needed to support both local (Ollama) and cloud (Groq) inference while maintaining data privacy for sensitive customer records.",
      approach:
        "Designed a modular AI layer behind a unified interface, allowing swap between local and cloud providers per task. Used HuggingFace embeddings for RAG-based lead enrichment and BullMQ to batch and queue inference jobs during off-peak hours.",
      highlights: [
        "Modular AI provider abstraction (Ollama / Groq)",
        "RAG pipeline with HuggingFace embeddings",
        "Scheduled lead scoring via BullMQ cron jobs",
        "Sentiment analysis dashboards with time-series views",
      ],
    },
  },
];

export const posts = [
  {
    title: "Why your business website takes 5+ seconds to load (and how to fix it)",
    description:
      "A practical breakdown of what slows small-business sites down (bloated templates, unoptimized images, too many plugins) and the quick wins that get you back under a second.",
    tags: ["Speed", "Small Business", "Performance"],
    url: "https://medium.com",
  },
  {
    title: "Custom website vs. template: what actually costs more in the long run",
    description:
      "Templates look cheap up front but quietly cost you in SEO, load time, and rework. Here's how to weigh build vs. ownership for a site you'll keep for years.",
    tags: ["Templates vs Custom", "Pricing", "Ownership"],
    url: "https://medium.com",
  },
  {
    title: "Designing for your customer, not your competitor",
    description:
      "Too many small businesses copy their bigger competitors' sites. A look at designing around what your customers actually need to do, not what looks impressive in a portfolio.",
    tags: ["Web Design", "Small Business", "Conversion"],
    url: "https://medium.com",
  },
  {
    title: "How much should a small business website cost?",
    description:
      "A transparent walkthrough of what actually drives website pricing: scope, copy, integrations, maintenance, and the questions to ask before you sign a proposal.",
    tags: ["Pricing", "Small Business", "Hiring a Developer"],
    url: "https://medium.com",
  },
];

export const calendar = {
  url: "https://calendly.com/your-username/30min",
  label: "Working on something? Let's talk.",
};

export const showreel = {
  id: "",
  title: "Demo",
  subtitle:
    "A walkthrough of recent builds, how they work, what they solve, and the decisions behind them.",
};

export const education = {
  degree: "BS in Information Technology",
  school: "Bahauddin Zakariya University, Multan",
  period: "2023-2027",
};

export const services: Array<{ title: string; desc: string; icon: string }> = [
  {
    title: "Web Applications",
    desc: "Full-stack MERN products built for real users",
    icon: "Globe",
  },
  {
    title: "AI Integration",
    desc: "LLMs, RAG pipelines, and agentic workflows wired into your product",
    icon: "Brain",
  },
  {
    title: "API & Backend",
    desc: "Scalable REST/GraphQL services, queues, and real-time systems",
    icon: "Server",
  },
  {
    title: "Performance & Scaling",
    desc: "Caching, Docker, and CI/CD built to handle production load",
    icon: "Zap",
  },
];

export const workProcess: Array<{ step: string; title: string; desc: string }> = [
  {
    step: "01",
    title: "Understand",
    desc: "I start by understanding what you're building and why, not just the spec.",
  },
  {
    step: "02",
    title: "Build",
    desc: "Clean, tested code shipped in small increments so you see progress early.",
  },
  {
    step: "03",
    title: "Iterate",
    desc: "Feedback loops are short. Changes don't require a new contract.",
  },
  {
    step: "04",
    title: "Ship",
    desc: "Deployed, monitored, and handed over with documentation.",
  },
];
