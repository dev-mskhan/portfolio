export const profile = {
  name: "Muhammad Shahzaib",
  role: "Full Stack Developer | MERN & Agentic AI",
  location: "Multan, Pakistan",
  email: "dev.mskhan@gmail.com",
  phone: "0318 4606617",
  summary:
    "Full Stack Software Developer with experience across frontend, backend, and building agentic AI solutions. Passionate about clean code, problem-solving, and collaborating with cross-functional teams to deliver innovative",
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
    title: "AI-Powered Multi-Vendor E-Commerce Platform",
    tag: "MERN + OpenAI",
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
    title: "Dark Auction — Real-time Auction Platform",
    tag: "Realtime + Blockchain",
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
    title: "AI-Powered Customer Relationship Management",
    tag: "Agentic AI + RAG",
    description:
      "A full-stack CRM featuring a Kanban deal pipeline, real-time interaction timeline, and a suite of AI capabilities: lead scoring, deal forecasting, sentiment analysis, and automated email drafting — powered by HuggingFace embeddings, Ollama, and Groq.",
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

export const research = [
  {
    index: "01",
    title: "Agentic AI Orchestration",
    summary:
      "Designing autonomous multi-step agents that plan, call tools, and self-correct. Exploring reliable agent loops, tool-calling guardrails, and evaluation strategies for production agent systems.",
    keywords: ["Planning", "Tool Use", "Self-Correction", "Evaluation"],
  },
  {
    index: "02",
    title: "Retrieval-Augmented Generation (RAG)",
    summary:
      "Building grounded LLM systems on top of vector databases (Pinecone) with HuggingFace embeddings. Investigating chunking strategies, hybrid retrieval, and relevance ranking to reduce hallucination.",
    keywords: ["Vector DB", "Embeddings", "Hybrid Search", "Grounding"],
  },
  {
    index: "03",
    title: "Blockchain-Backed Bid Integrity",
    summary:
      "Applying cryptographic bid-chaining to real-time auctions so that every bid is tamper-evident and verifiable. Researching lightweight, encrypted chaining schemes suited to high-frequency bidding.",
    keywords: ["Bid-Chaining", "Encryption", "Integrity", "Realtime"],
  },
  {
    index: "04",
    title: "LLM-Driven Business Intelligence",
    summary:
      "Operationalizing LLMs for lead scoring, deal forecasting, and sentiment analysis inside CRM workflows. Studying how local (Ollama) and hosted (Groq) inference trade off latency, cost, and accuracy.",
    keywords: ["Lead Scoring", "Forecasting", "Sentiment", "Inference"],
  },
];

export const education = {
  degree: "BS in Information Technology",
  school: "Bahauddin Zakariya University, Multan",
  period: "2023 — 2027",
};
