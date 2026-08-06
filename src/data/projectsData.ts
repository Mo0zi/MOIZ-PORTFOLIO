export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  tools: string;
  link: string;
  image: string;
  summary: string;
  problem: string;
  architecture: string[];
  challenges: string;
  solution: string;
  metrics: string[];
  fypContext?: string;
  keywords?: string[];
}

export const projectsData: CaseStudy[] = [
  {
    id: "parway-erp",
    title: "Parway Industry - Manufacturing ERP System",
    category: "Full Stack · Enterprise ERP · Manufacturing & Financial Control",
    tools: "PHP, MySQL, JavaScript, Custom MVC, REST APIs, Role-Based Access Control",
    link: "https://wa.me/923249670130",
    image: "/images/parway_erp.png",
    summary: "Custom Enterprise Resource Planning (ERP) system engineered for apparel and clothing manufacturing—featuring live production metrics, lot management tracking, worker wages & payables, customer ledgers, and financial overview dashboards.",
    problem: "Apparel manufacturing plants face complex tracking bottlenecks across worker daily wages, production lot completion status, customer receivables, and raw material inventory when reliant on manual entry or disconnected spreadsheets.",
    architecture: [
      "Manufacturing & Financial Control Panel: Real-time dashboard displaying 7-day sales vs. wages performance trends, lot completion status (% done), and worker production leaderboards.",
      "Core Accounting & Wages Engine: Automated calculation of worker daily wages, customer ledgers, worker payables, and sales invoices with instant PDF reporting.",
      "Database & Inventory Tracking: Relational MySQL database schema supporting lot sheet tracking, item master catalogs, personal ledgers, and system backups."
    ],
    challenges: "Synchronizing real-time piece-rate worker wage calculations with lot sheet progress updates while maintaining accurate customer accounts receivable balances.",
    solution: "Built a transaction-safe relational schema with automated ledger calculation modules and live production metrics visualization.",
    metrics: [
      "Clothing manufacturing & lot completion tracking",
      "Worker daily wages & customer ledger automation",
      "Real-time sales vs. wages performance analytics"
    ],
    fypContext: "Enterprise-grade Software Engineering Final Year Project showcasing relational MySQL architecture, custom PHP MVC, and real-world industrial financial control in Sialkot, Pakistan.",
    keywords: ["ERP Development Pakistan", "Software Engineering Final Year Project", "PHP MVC ERP Sialkot", "Apparel Manufacturing Software"]
  },
  {
    id: "stitchsmart",
    title: "StitchSmart AI eCommerce",
    category: "AI SaaS · B2B & B2C eCommerce · RAG Architecture",
    tools: "React, Node.js, Express, MongoDB, LangChain, FAISS, Gemini API, RAG",
    link: "https://wa.me/923249670130",
    image: "/images/ecommerce_project.png",
    summary: "AI-powered eCommerce SaaS platform automating online stores with a custom RAG-based AI chatbot. Evolved from a university final year project into a production SaaS solution offering B2B wholesale and B2C retail capabilities in a single unified web platform.",
    problem: "eCommerce businesses struggle to manage separate platforms for wholesale B2B buyers and retail B2C shoppers while lacking intelligent AI assistance for complex product catalog queries.",
    architecture: [
      "Unified B2B & B2C Architecture: Single web platform supporting dual-mode tier pricing, wholesale bulk ordering, and instant retail checkout.",
      "Custom RAG AI Pipeline: Built with LangChain, FAISS vector search, and Google Gemini API to index full product catalogs and deliver real-time AI customer assistance.",
      "eCommerce Automation SaaS: Automated inventory sync, order processing workflows, and intelligent customer query handling."
    ],
    challenges: "Building a single architecture that handles complex B2B bulk pricing contracts alongside B2C retail flows while maintaining low vector search query latencies.",
    solution: "Engineered a unified REST API gateway with an in-memory FAISS semantic query index, enabling efficient hybrid B2B/B2C store management.",
    metrics: [
      "Unified B2B & B2C single-platform architecture",
      "Custom RAG AI chatbot with LangChain & FAISS",
      "In-memory vector embedding query index"
    ],
    fypContext: "Premier BSCS Final Year Project demonstrating state-of-the-art AI integration (RAG + FAISS + Gemini API) evolved into a commercial B2B/B2C SaaS platform in Pakistan.",
    keywords: ["AI FYP Project Pakistan", "BSCS Final Year Project", "RAG Pipeline FYP", "AI Based FYP Project Sialkot"]
  },
  {
    id: "marketgo-ai",
    title: "MarketGO AI Automation",
    category: "Agentic AI · Marketing SaaS · Multi-Agent",
    tools: "LangChain, Agentic AI, React, Express.js, OpenAI API",
    link: "https://wa.me/923249670130",
    image: "/images/ml_dashboard.png",
    summary: "Autonomous marketing automation SaaS that generates end-to-end multi-channel ad campaigns using agentic reasoning.",
    problem: "Marketing teams spend excessive hours manually planning, writing, and formatting multi-platform digital marketing campaigns.",
    architecture: [
      "Frontend: React.js dashboard with interactive campaign analytics and live agent progress updates.",
      "Backend: Express.js microservice managing autonomous multi-agent task queues.",
      "AI Engine: LangChain Agentic framework orchestrating specialized content, SEO, and audience analysis LLM agents."
    ],
    challenges: "Preventing infinite execution loops and managing token rate limits across multi-agent delegation chains.",
    solution: "Implemented strict state-machine controls and token-aware queue throttling, guaranteeing execution reliability.",
    metrics: [
      "Autonomous multi-agent execution pipeline",
      "LangChain LLM orchestration architecture",
      "Token-aware rate limiting microservice"
    ],
    fypContext: "Advanced Computer Science FYP showcasing autonomous multi-agent systems and LLM orchestration using LangChain and OpenAI API.",
    keywords: ["Agentic AI FYP Project", "Multi-Agent System Pakistan", "BSCS AI Project Sialkot"]
  },
  {
    id: "haash-wears",
    title: "Haash Wears B2B Wholesale Web Platform",
    category: "Full Stack · Custom PHP MVC · B2B Wholesale",
    tools: "PHP, MySQL, JavaScript, Custom MVC, HTML5, CSS3, Meta & Google Ads",
    link: "https://wa.me/923249670130",
    image: "/images/digital_marketing.png",
    summary: "Custom B2B wholesale eCommerce platform engineered with a lightweight PHP MVC framework, MySQL query caching, and SEO-optimized HTML rendering for rapid product catalog browsing.",
    problem: "Wholesale clothing suppliers require fast bulk product browsing and quote requests without the heavy overhead of generic eCommerce plugins.",
    architecture: [
      "Lightweight PHP MVC Engine: Zero third-party bloat framework delivering sub-150ms TTFB server response times.",
      "Optimized MySQL Catalog Schema: Relational database indexing for multi-attribute clothing categories and bulk pricing tiers.",
      "Integrated Digital Marketing Funnel: Seamless integration with Meta Ads pixel tracking and Google Ads conversion funnels."
    ],
    challenges: "Achieving top mobile performance speeds while rendering thousands of wholesale product variations and custom pricing logic.",
    solution: "Implemented server-side query caching and responsive image srcsets delivering instant page loads.",
    metrics: [
      "Sub-150ms TTFB server response time",
      "Zero-framework lightweight PHP MVC architecture",
      "High-converting B2B lead generation funnel"
    ],
    fypContext: "Full Stack Web Engineering project demonstrating lightweight PHP MVC design patterns, database optimization, and speed-first web development in Pakistan.",
    keywords: ["Full Stack Developer Sialkot", "PHP MVC B2B Web App", "Web Developer Pakistan"]
  },
  {
    id: "ccpd-platform",
    title: "CCPD Enterprise Portal & Access System",
    category: "Full Stack · PHP MVC · Institutional Management",
    tools: "PHP MVC, MySQL, JavaScript, REST APIs, CSRF Security, Bitwise RBAC",
    link: "https://wa.me/923249670130",
    image: "/images/social_media.png",
    summary: "Enterprise portal engineered for CCPD featuring bitwise role-based access control (RBAC), multi-level authorization, CSRF protection, and audit logging.",
    problem: "Institutional platforms face security vulnerabilities and access management complexities across multiple user roles and administrative tiers.",
    architecture: [
      "Bitwise Role-Based Access Control (RBAC): High-performance authorization engine managing fine-grained user permissions.",
      "PHP MVC Core Framework: Modular separation of business logic, database queries, and view templates.",
      "Security & Audit Logging Subsystem: CSRF protection, parameterized SQL queries, and complete audit tracking."
    ],
    challenges: "Implementing a flexible permission system capable of dynamically assigning multiple roles without complicating database join overhead.",
    solution: "Designed a bitwise bitmask permission structure enabling O(1) permission evaluations.",
    metrics: [
      "Bitwise RBAC O(1) authorization engine",
      "Zero-vulnerability security auditing",
      "Modular PHP MVC codebase"
    ],
    fypContext: "Software Engineering Project demonstrating advanced security architecture, bitwise RBAC, and PHP MVC design patterns for institutions in Pakistan.",
    keywords: ["Software Engineering FYP Developer", "Bitwise RBAC Security", "PHP Development Sialkot"]
  },
  {
    id: "shopify-stores",
    title: "Custom Shopify Liquid Stores & Speed Optimization",
    category: "eCommerce · Shopify Liquid · Core Web Vitals",
    tools: "Shopify Liquid, HTML5, CSS3, JavaScript, Theme Development, Speed Optimization",
    link: "https://wa.me/923249670130",
    image: "/images/shopify_store.png",
    summary: "Tailor-made Shopify Liquid eCommerce store themes engineered for top Core Web Vitals scores and high mobile conversion rates.",
    problem: "Standard Shopify themes often suffer from heavy third-party app scripts, causing slow mobile load times and lost sales conversions.",
    architecture: [
      "Custom Shopify Liquid Theme Engine: Custom HTML5/CSS3 templates without reliance on bloated visual page builders.",
      "Core Web Vitals Optimization: Preloading critical assets, inline critical CSS, and deferred non-essential JavaScript execution.",
      "Conversion Rate Optimization (CRO) Layouts: Frictionless mobile checkout flows and sticky Add-to-Cart drawer interfaces."
    ],
    challenges: "Eliminating render-blocking resources while maintaining rich visual storytelling and interactive product customizers.",
    solution: "Engineered modular vanilla JavaScript widgets and implemented native browser lazy-loading strategies.",
    metrics: [
      "90+ Mobile Google PageSpeed Insights score",
      "Sub-1-second mobile page load speed",
      "Enhanced conversion rate checkout interface"
    ],
    fypContext: "eCommerce Development Project demonstrating front-end performance tuning, Shopify Liquid theme customization, and Core Web Vitals optimization.",
    keywords: ["Shopify Developer Pakistan", "Website Developer Sialkot", "Core Web Vitals Optimization"]
  }
];
