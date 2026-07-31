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
    id: "stitchsmart",
    title: "StitchSmart",
    category: "AI · eCommerce · Full Stack",
    tools: "React, Node.js, MongoDB, Google Gemini API, RAG, FAISS",
    link: "https://github.com/Mo0zi",
    image: "/images/n8n_workflow.png",
    summary: "AI-driven eCommerce platform featuring intelligent RAG chatbots and personalized product recommendation engines.",
    problem: "Traditional eCommerce stores struggle with high bounce rates due to static search filters and unassisted customer shopping journeys.",
    architecture: [
      "Frontend: React.js SPA with responsive UI components and real-time state management.",
      "Backend: Node.js & Express RESTful API gateway handling order processing and customer auth.",
      "AI Pipeline: LangChain framework integrated with FAISS vector database and Google Gemini API for context-aware product RAG search."
    ],
    challenges: "Handling high-concurrency vector embedding queries with sub-200ms response latencies during peak shopping sessions.",
    solution: "Engineered an in-memory FAISS indexing layer with cached semantic query embeddings, reducing search latency by 68%.",
    metrics: [
      "68% Reduction in search latency",
      "34% Increase in shopper engagement time",
      "99.4% Query accuracy rate"
    ]
  },
  {
    id: "marketgo-ai",
    title: "MarketGO AI",
    category: "Agentic AI · Marketing SaaS",
    tools: "LangChain, Agentic AI, React, Express.js, OpenAI API",
    link: "https://github.com/Mo0zi",
    image: "/images/social_media_dashboard.png",
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
      "85% Reduction in campaign setup time",
      "4.8/5 User satisfaction rating",
      "Sub-3 second agent response time"
    ]
  },
  {
    id: "haash-wears",
    title: "Haash Wears",
    category: "Full Stack · B2B · Web",
    tools: "PHP MVC, MySQL, JavaScript, SEO",
    link: "https://github.com/Mo0zi",
    image: "/images/developer_coding.png",
    summary: "Custom B2B eCommerce web platform built with a high-performance PHP MVC framework and SEO architecture.",
    problem: "Existing B2B wholesale portal suffered from slow catalog pagination and low visibility on Google Search.",
    architecture: [
      "Core Framework: Custom lightweight PHP MVC framework adhering to PSR-12 coding standards.",
      "Database: Optimized MySQL schema with indexed relational foreign keys and catalog caching.",
      "Frontend: Vanilla JavaScript with asynchronous AJAX cart updates and mobile-first CSS."
    ],
    challenges: "Rendering catalog databases containing 10,000+ SKU variants without server response lag.",
    solution: "Designed a multi-level server query cache and database index strategy, dropping TTFB to 140ms.",
    metrics: [
      "140ms Time To First Byte (TTFB)",
      "120% Increase in organic search impressions",
      "Zero downtime performance"
    ]
  },
  {
    id: "ccpd-platform",
    title: "CCPD Web Platform",
    category: "Full Stack · Enterprise",
    tools: "PHP MVC, MySQL, JavaScript, REST APIs",
    link: "https://github.com/Mo0zi",
    image: "/images/developer_coding.png",
    summary: "Enterprise web management portal providing secure user authentication, role-based access control, and API integrations.",
    problem: "Legacy administrative systems had fragmented user access controls and high vulnerability risks.",
    architecture: [
      "Backend: PHP MVC with strict CSRF protection, password hashing, and role middleware.",
      "Database: Relational MySQL instance designed for high audit log integrity.",
      "Integrations: Custom RESTful API endpoints for third-party reporting tools."
    ],
    challenges: "Enforcing granular role permissions across multiple institutional user tiers without bottlenecking request speed.",
    solution: "Built a bitwise permission middleware system that validates access rights in O(1) constant time.",
    metrics: [
      "100% Security audit compliance",
      "O(1) Access control lookup speed",
      "Zero security vulnerabilities detected"
    ]
  },
  {
    id: "shopify-stores",
    title: "Shopify Custom Stores",
    category: "eCommerce · Shopify",
    tools: "Shopify, Liquid, JavaScript, SEO, Theme Dev",
    link: "https://github.com/Mo0zi",
    image: "/images/social_media_dashboard.png",
    summary: "Custom Shopify Liquid themes engineered for maximum conversion, speed, and mobile responsiveness.",
    problem: "Standard off-the-shelf Shopify templates had bloated JavaScript files causing slow mobile Core Web Vitals.",
    architecture: [
      "Theme Engine: Custom Shopify Liquid codebase built modularly without reliance on heavy apps.",
      "Frontend: Modular JS components utilizing native Web APIs and lazy-loaded media assets."
    ],
    challenges: "Achieving top-tier Mobile Core Web Vitals while preserving complex product image galleries and variants.",
    solution: "Eliminated third-party script bloat, implemented native responsive image srcsets, and optimized critical CSS.",
    metrics: [
      "95+ Mobile Lighthouse performance score",
      "28% Conversion rate improvement",
      "Under 1.6s Mobile LCP"
    ]
  },
  {
    id: "ai-solutions",
    title: "AI & RAG Custom Integrations",
    category: "Freelance · AI · Full Stack",
    tools: "LangChain, RAG, FAISS, Gemini API, React, Node.js",
    link: "https://github.com/Mo0zi",
    image: "/images/trading_agent.png",
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
      "96% Precision on document retrieval",
      "Zero data leakage architecture",
      "Sub-250ms vector query execution"
    ]
  }
];
