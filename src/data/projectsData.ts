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
    title: "PARWAY-ERP Software System",
    category: "Full Stack · Enterprise ERP · Supply Chain & Financial Management",
    tools: "PHP MVC, React, MySQL, Node.js, REST APIs, Role-Based Access Control",
    link: "https://wa.me/923249670130",
    image: "/images/parway_erp.png",
    summary: "Comprehensive Enterprise Resource Planning (ERP) platform built for end-to-end business operation automation, multi-warehouse inventory control, automated financial ledger tracking, human resources, and real-time executive analytics.",
    problem: "Growing enterprise organizations encounter operational friction due to disconnected legacy systems for inventory tracking, payroll, order fulfillment, and client billing—causing data silos, audit errors, and delayed decision making.",
    architecture: [
      "Core ERP Engine: Custom lightweight PHP MVC framework delivering high-performance API endpoints, atomic database operations, and bitwise role-based access control.",
      "Relational Database Architecture: Normalized MySQL database schema engineered with strict foreign key constraints and ACID transaction isolation for multi-tenant financial ledgers and inventory audit trails.",
      "Interactive ERP Dashboard: Responsive React & TypeScript interface featuring real-time data visualizer charts, batch stock updates, supply chain tracking, and exportable financial reports."
    ],
    challenges: "Maintaining strict data consistency and low latency during high-concurrency multi-warehouse inventory sync while concurrently processing complex financial ledger transactions.",
    solution: "Engineered an event-driven queue buffer and optimized transaction isolation levels, guaranteeing zero ledger variance and real-time inventory updates across enterprise divisions.",
    metrics: [
      "Multi-warehouse inventory & financial ledger automation",
      "Bitwise role-based security & comprehensive audit logging",
      "High-concurrency MySQL transaction architecture"
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
  }
];
