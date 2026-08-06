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
    ]
  },
  {
    id: "stitchsmart",
    title: "StitchSmart AI eCommerce",
    category: "AI SaaS · B2B & B2C eCommerce · RAG Architecture",
    tools: "React, Node.js, Express, MongoDB, LangChain, FAISS, Gemini API, RAG",
    link: "https://wa.me/923249670130",
    image: "/images/ecommerce_project.png",
    summary: "AI-powered eCommerce SaaS platform automating online stores with a custom RAG-based AI chatbot. Evolved from a university project into a production SaaS solution offering B2B wholesale and B2C retail capabilities in a single unified web platform.",
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
    ]
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
    ]
  },
  {
    id: "haash-wears",
    title: "Haash Wears B2B Platform",
    category: "Full Stack · PHP MVC · B2B eCommerce",
    tools: "PHP MVC, MySQL, JavaScript, Custom SEO",
    link: "https://wa.me/923249670130",
    image: "/images/portfolio_project.png",
    summary: "Custom B2B eCommerce web platform built with a high-performance PHP MVC framework and SEO architecture.",
    problem: "Existing B2B wholesale portal suffered from slow catalog pagination and low visibility on search engine result pages.",
    architecture: [
      "Core Framework: Custom lightweight PHP MVC framework adhering to PSR-12 coding standards.",
      "Database: Optimized MySQL schema with indexed relational foreign keys and catalog caching.",
      "Frontend: Vanilla JavaScript with asynchronous AJAX cart updates and mobile-first CSS."
    ],
    challenges: "Rendering catalog databases containing high SKU variant counts without server response lag.",
    solution: "Designed a multi-level server query cache and database index strategy for accelerated catalog delivery.",
    metrics: [
      "Custom lightweight PHP MVC architecture",
      "Indexed relational MySQL database design",
      "SEO-optimized semantic HTML rendering"
    ]
  },
  {
    id: "ccpd-platform",
    title: "CCPD Enterprise Platform",
    category: "Full Stack · PHP MVC · Enterprise",
    tools: "PHP MVC, MySQL, JavaScript, REST APIs",
    link: "https://wa.me/923249670130",
    image: "/images/python_project.png",
    summary: "Enterprise web management portal providing secure user authentication, role-based access control, and API integrations.",
    problem: "Legacy administrative systems had fragmented user access controls and vulnerability risks.",
    architecture: [
      "Backend: PHP MVC with strict CSRF protection, password hashing, and role middleware.",
      "Database: Relational MySQL instance designed for audit log integrity.",
      "Integrations: Custom RESTful API endpoints for institutional reporting tools."
    ],
    challenges: "Enforcing granular role permissions across multiple institutional user tiers without bottlenecking request speed.",
    solution: "Built a bitwise permission middleware system that validates access rights efficiently.",
    metrics: [
      "Bitwise role-based access control middleware",
      "Relational MySQL audit logging schema",
      "RESTful API enterprise integration"
    ]
  },
  {
    id: "shopify-stores",
    title: "Shopify Custom Stores & Liquid Themes",
    category: "eCommerce · Shopify Theme Dev",
    tools: "Shopify, Liquid, JavaScript, Speed SEO, Theme Dev",
    link: "https://wa.me/923249670130",
    image: "/images/task_manager.png",
    summary: "Custom Shopify Liquid themes engineered for maximum speed, usability, and mobile responsiveness.",
    problem: "Standard off-the-shelf Shopify templates had bloated JavaScript files causing slow mobile loading.",
    architecture: [
      "Theme Engine: Custom Shopify Liquid codebase built modularly without reliance on heavy apps.",
      "Frontend: Modular JS components utilizing native Web APIs and lazy-loaded media assets."
    ],
    challenges: "Achieving fast mobile load times while preserving complex product image galleries and variants.",
    solution: "Eliminated third-party script bloat, implemented native responsive image srcsets, and optimized critical CSS.",
    metrics: [
      "Custom Liquid theme engine architecture",
      "Zero third-party script bloat",
      "Native responsive image srcsets"
    ]
  },
  {
    id: "ai-solutions",
    title: "AI & RAG Custom Solutions",
    category: "Agentic AI · FAISS Vector Search · LLM Pipelines",
    tools: "LangChain, RAG, FAISS, Gemini API, React, Node.js",
    link: "https://wa.me/923249670130",
    image: "/images/api_service.png",
    summary: "Bespoke artificial intelligence solutions integrating vector search databases and custom LLM inference pipelines.",
    problem: "Enterprise clients needed secure local document search over internal knowledge bases without data leakage.",
    architecture: [
      "Ingestion Engine: Python/Node.js pipeline parsing PDFs, Markdown, and DB records into chunked embeddings.",
      "Vector DB: Embedded FAISS vector indices for semantic similarity matching.",
      "API Layer: RESTful interface wrapping Gemini API with custom prompt templates."
    ],
    challenges: "Parsing complex unformatted PDF documents into coherent text chunks for vector indexing.",
    solution: "Developed custom semantic section boundary chunkers that preserve document context across boundaries.",
    metrics: [
      "Semantic chunking PDF parser pipeline",
      "Embedded FAISS vector similarity search",
      "REST API integration with Gemini API"
    ]
  },
  {
    id: "portfolio-website",
    title: "Official Engineering & AI Portfolio",
    category: "Full Stack · Technical SEO · WebGL & React",
    tools: "React, Vite, Three.js, TypeScript, Technical SEO, Schema Graph, n8n",
    link: "https://www.moizahmed.online/",
    image: "/images/developer_coding.png",
    summary: "Enterprise-grade developer portfolio built with React, Vite, Three.js, and a 14-node Schema.org JSON-LD graph. Engineered for sub-second page loads, Core Web Vitals excellence, and top rankings across Google and AI search engines.",
    problem: "Modern single-page React portfolio websites often suffer from poor SEO indexability, missing microdata schemas, and invisible WebGL canvas elements for AI search engine crawlers.",
    architecture: [
      "Frontend & 3D Visualization: Built with React, Vite, TypeScript, and Three.js physics simulation with accessible semantic HTML fallbacks.",
      "Structured Data Engine: Integrated 14-node JSON-LD graph (Person, LocalBusiness, FAQPage, OfferCatalog, ItemList, Review, AggregateRating).",
      "AI & Performance Stack: Complete robots.txt AI bot directives, master sitemap index, Netlify/Apache headers, and GZIP compression."
    ],
    challenges: "Making complex WebGL 3D physics scenes fully crawlable and indexable by search engines and LLM answer engines.",
    solution: "Engineered accessible semantic fallback elements, speakable specification meta tags, and structured JSON-LD graphs.",
    metrics: [
      "14-Node JSON-LD Schema Graph Integration",
      "Crawlable WebGL Accessible Semantic Fallbacks",
      "Full AI Search Engine (GEO/AEO) Optimization"
    ]
  }
];
