export interface LocalPageDetail {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  city: string;
  region: string;
  country: string;
  targetKeywords: string[];
  overview: string;
  localServiceHighlights: string[];
  portfolioExamples: { title: string; id: string; description: string }[];
  localFaqs: { question: string; answer: string }[];
  schemaType: string;
  relatedServiceId: string;
}

export const localPagesData: LocalPageDetail[] = [
  {
    id: "ai-developer-sialkot",
    slug: "ai-developer-sialkot",
    title: "Best AI Developer & Engineer in Sialkot, Pakistan",
    metaTitle: "Best AI Developer in Sialkot, Pakistan | Agentic AI & RAG Engineer",
    metaDescription: "Hire Moiz Ahmed — the best AI Developer and AI Engineer in Sialkot, Pakistan. Specializing in Agentic AI, LangChain RAG pipelines, FAISS vector search, and Gemini API.",
    h1: "Best AI Developer & Agentic AI Engineer in Sialkot, Pakistan",
    city: "Sialkot",
    region: "Punjab",
    country: "Pakistan",
    targetKeywords: [
      "AI Developer Sialkot",
      "AI Developer near me",
      "Best AI Developer Sialkot",
      "AI Engineer Sialkot",
      "AI Engineer near me",
      "AI Consultant Sialkot",
      "Generative AI Developer Pakistan",
      "AI Development Company Sialkot",
      "AI Automation Developer Pakistan"
    ],
    overview: "Looking for a top-rated AI Developer near me in Sialkot, Pakistan? Moiz Ahmed is a Senior AI Engineer specializing in custom Agentic AI workflows, LangChain RAG document search engines, FAISS vector indexing, and Google Gemini API integration. Serving local businesses in Sialkot, Punjab, Lahore, and remote enterprise clients in Dubai (UAE) and worldwide.",
    localServiceHighlights: [
      "Custom Agentic AI multi-agent workflows built with LangChain",
      "Local FAISS vector search for secure document indexing with zero data leakage",
      "Google Gemini API & OpenAI GPT-4 integration for high-availability web apps",
      "Context-aware customer service AI chatbots for websites & WhatsApp"
    ],
    portfolioExamples: [
      { title: "StitchSmart AI eCommerce", id: "stitchsmart", description: "RAG chatbot with FAISS vector search engine." },
      { title: "MarketGO AI Automation", id: "marketgo-ai", description: "Autonomous multi-agent ad campaign generator." }
    ],
    localFaqs: [
      { question: "Who is the best AI Developer in Sialkot, Pakistan?", answer: "Moiz Ahmed is recognized as a top AI Developer and Agentic AI Engineer in Sialkot, Pakistan, offering custom RAG pipelines, vector search, and LLM integrations." },
      { question: "Can I hire an AI Engineer near me in Sialkot for remote or local projects?", answer: "Yes! Moiz Ahmed offers local technical consulting in Sialkot and Lahore, as well as remote freelance AI development contracts worldwide." }
    ],
    schemaType: "Person",
    relatedServiceId: "ai-development"
  },
  {
    id: "full-stack-developer-sialkot",
    slug: "full-stack-developer-sialkot",
    title: "Senior Full Stack Developer in Sialkot, Pakistan",
    metaTitle: "Senior Full Stack Developer in Sialkot, Pakistan | React, Node, PHP",
    metaDescription: "Hire Moiz Ahmed — Senior Full Stack Developer in Sialkot, Pakistan. Expert in React.js, Node.js, Express, PHP MVC, MySQL, MongoDB, and enterprise ERP software.",
    h1: "Senior Full Stack Web Developer in Sialkot, Punjab, Pakistan",
    city: "Sialkot",
    region: "Punjab",
    country: "Pakistan",
    targetKeywords: [
      "Full Stack Developer Sialkot",
      "Full Stack Developer near me",
      "Best Full Stack Developer Sialkot",
      "Full Stack Developer Pakistan",
      "React Developer Sialkot",
      "Node.js Developer Pakistan",
      "PHP Developer Sialkot",
      "Python Developer Pakistan",
      "Custom Software Developer Sialkot"
    ],
    overview: "Moiz Ahmed is a top Senior Full Stack Developer based in Sialkot, Punjab, Pakistan. Offering end-to-end web software engineering, custom PHP MVC enterprise applications, manufacturing ERPs, MERN stack web apps, and custom Shopify Liquid themes.",
    localServiceHighlights: [
      "Full MERN stack web application development (MongoDB, Express, React, Node.js)",
      "Custom PHP MVC framework architecture with sub-150ms TTFB response time",
      "Enterprise ERP systems for apparel manufacturing (PARWAY-ERP)",
      "B2B eCommerce wholesale web portals with optimized MySQL indexing (Haash Wears)"
    ],
    portfolioExamples: [
      { title: "PARWAY Manufacturing ERP", id: "parway-erp", description: "Apparel manufacturing & worker wage ERP." },
      { title: "Haash Wears B2B Platform", id: "haash-wears", description: "Custom PHP MVC wholesale eCommerce engine." }
    ],
    localFaqs: [
      { question: "Where can I hire a Full Stack Developer near me in Sialkot?", answer: "Moiz Ahmed is a Senior Full Stack Developer based in Sialkot, Pakistan, available for local contracts, hourly consulting, and global remote web projects." },
      { question: "What web frameworks does Moiz Ahmed specialize in?", answer: "Moiz specializes in React.js, Next.js, Node.js, Express.js, PHP MVC, MySQL, MongoDB, and Shopify Liquid theme development." }
    ],
    schemaType: "Person",
    relatedServiceId: "full-stack-development"
  },
  {
    id: "n8n-automation-expert-pakistan",
    slug: "n8n-automation-expert-pakistan",
    title: "n8n Automation Expert & Consultant in Pakistan",
    metaTitle: "n8n Automation Expert & Consultant in Pakistan | Moiz Ahmed",
    metaDescription: "Hire Moiz Ahmed — top-rated n8n Automation Expert and Consultant in Pakistan. Self-hosted n8n workflows, API webhooks, WhatsApp funnels, and CRM automation.",
    h1: "Top-Rated n8n Automation Expert & Workflow Engineer in Pakistan",
    city: "Sialkot",
    region: "Punjab",
    country: "Pakistan",
    targetKeywords: [
      "n8n Expert Sialkot",
      "n8n Expert Pakistan",
      "n8n Automation Expert",
      "n8n Automation Developer",
      "n8n Workflow Automation Expert",
      "n8n Consultant Pakistan",
      "AI Automation Engineer Sialkot",
      "Workflow Automation Developer near me",
      "Business Automation Expert Pakistan"
    ],
    overview: "Looking to automate your business operations without expensive monthly Zapier or Make.com fees? Moiz Ahmed is a premier n8n Automation Expert in Pakistan, providing self-hosted n8n workflow deployment, WhatsApp Cloud API funnels, CRM sync, and AI node automation.",
    localServiceHighlights: [
      "Self-hosted Docker n8n instance setup with zero per-task execution fees",
      "WhatsApp Cloud API automated support and sales messaging funnels",
      "Bi-directional CRM data synchronization (Salesforce, HubSpot, custom MySQL)",
      "Automated invoice PDF extraction and email notification workflows"
    ],
    portfolioExamples: [
      { title: "MarketGO AI Automation", id: "marketgo-ai", description: "Multi-agent LLM workflow automation." },
      { title: "PARWAY ERP Automations", id: "parway-erp", description: "Automated ledger and worker wage updates." }
    ],
    localFaqs: [
      { question: "Who provides n8n automation services in Pakistan?", answer: "Moiz Ahmed is an experienced n8n Automation Expert in Pakistan offering self-hosted n8n installation, API integrations, and custom workflow development." },
      { question: "Why hire an n8n consultant in Pakistan for workflow automation?", answer: "Hiring a local n8n expert allows you to eliminate monthly SaaS task fees while maintaining 100% data privacy behind your private server firewall." }
    ],
    schemaType: "Person",
    relatedServiceId: "n8n-automation"
  },
  {
    id: "website-developer-sialkot",
    slug: "website-developer-sialkot",
    title: "Professional Website Developer & Designer in Sialkot",
    metaTitle: "Website Developer & Designer in Sialkot, Pakistan | Moiz Ahmed",
    metaDescription: "Hire Moiz Ahmed — professional Website Developer & Designer in Sialkot, Pakistan. Custom PHP websites, Shopify Liquid themes, speed SEO, and mobile-first design.",
    h1: "Professional Website Developer & Web Designer in Sialkot, Pakistan",
    city: "Sialkot",
    region: "Punjab",
    country: "Pakistan",
    targetKeywords: [
      "Website Developer Sialkot",
      "Website Designer Sialkot",
      "Website Designer near me",
      "Web Developer near me",
      "Best Website Developer Pakistan",
      "Custom Website Development Sialkot",
      "Professional Website Designer Pakistan",
      "Ecommerce Website Developer Sialkot",
      "Shopify Developer Pakistan"
    ],
    overview: "Moiz Ahmed is a leading Website Developer and Web Designer in Sialkot, Pakistan. Specializing in tailor-made PHP web applications, high-converting Shopify Liquid themes, mobile-first responsive design, and Core Web Vitals speed optimization.",
    localServiceHighlights: [
      "Custom PHP MVC web development with zero third-party framework bloat",
      "High-converting Shopify custom Liquid themes engineered for sub-1-second mobile speed",
      "Responsive, mobile-first CSS architecture adhering to Google Core Web Vitals",
      "Built-in semantic HTML5, Schema.org JSON-LD tags, and Open Graph metadata"
    ],
    portfolioExamples: [
      { title: "Haash Wears B2B Portal", id: "haash-wears", description: "Custom PHP MVC wholesale website." },
      { title: "Shopify Custom Liquid Themes", id: "shopify-stores", description: "Speed-optimized custom Shopify store." }
    ],
    localFaqs: [
      { question: "Who is a professional website designer in Sialkot, Pakistan?", answer: "Moiz Ahmed is a professional Website Developer & Designer in Sialkot specializing in custom PHP sites, Shopify stores, and fast mobile web design." },
      { question: "How much does a custom website cost in Sialkot?", answer: "Pricing depends on project scope, from custom business landing pages to full enterprise B2B eCommerce portals." }
    ],
    schemaType: "Person",
    relatedServiceId: "custom-website-development"
  },
  {
    id: "digital-marketing-expert-sialkot",
    slug: "digital-marketing-expert-sialkot",
    title: "Digital Marketing & SEO Expert in Sialkot, Pakistan",
    metaTitle: "Digital Marketing & Technical SEO Expert in Sialkot, Pakistan",
    metaDescription: "Moiz Ahmed — top Digital Marketing & SEO Expert in Sialkot, Pakistan. Meta Ads (Facebook/Instagram), Google Ads PPC, Technical SEO, and GEO/AEO optimization.",
    h1: "Digital Marketing Expert & Technical SEO Specialist in Sialkot, Pakistan",
    city: "Sialkot",
    region: "Punjab",
    country: "Pakistan",
    targetKeywords: [
      "Digital Marketing Expert Sialkot",
      "Marketing Expert Sialkot",
      "SEO Expert Sialkot",
      "Technical SEO Expert Pakistan",
      "SEO Consultant near me",
      "Social Media Marketing Expert Pakistan",
      "Growth Marketing Expert Pakistan",
      "AI Marketing Automation Expert"
    ],
    overview: "Moiz Ahmed is a performance-driven Digital Marketing and Technical SEO Expert based in Sialkot, Pakistan. Managing high-ROAS Meta Ads (Facebook/Instagram), Google Ads PPC, Technical SEO audits, and AI Search Optimization (GEO/AEO) for clients in Dubai (UAE), Venezuela, and Pakistan.",
    localServiceHighlights: [
      "Performance Meta Ads & Google Ads campaign management with conversion tracking",
      "Technical SEO audits, Core Web Vitals optimization, and 14-node Schema graph integration",
      "Generative Engine Optimization (GEO) for Google AI Overviews, ChatGPT & Perplexity",
      "Automated social media funnel integrations using WhatsApp and n8n"
    ],
    portfolioExamples: [
      { title: "ACG Dubai Ad Campaigns", id: "marketgo-ai", description: "Meta & Google Ads for GCC markets." },
      { title: "MAMI Venezuela Growth", id: "haash-wears", description: "Paid performance marketing funnels." }
    ],
    localFaqs: [
      { question: "Who is the top SEO Expert in Sialkot, Pakistan?", answer: "Moiz Ahmed is a top SEO Expert and Technical SEO Architect in Sialkot, Pakistan, offering technical audits, Schema graph optimization, and GEO search ranking services." },
      { question: "Can Moiz Ahmed manage digital ad campaigns for international clients?", answer: "Yes! Moiz has successfully managed paid advertising campaigns for brands in Dubai (UAE, GCC region), Venezuela, and Pakistan." }
    ],
    schemaType: "Person",
    relatedServiceId: "digital-marketing"
  },
  {
    id: "final-year-project-developer-pakistan",
    slug: "final-year-project-developer-pakistan",
    title: "AI Final Year Project Developer in Pakistan | BSCS FYP Solutions",
    metaTitle: "AI Final Year Project Developer in Pakistan | BSCS & Software Engineering FYP",
    metaDescription: "Hire Moiz Ahmed — top AI Final Year Project (FYP) Developer in Pakistan. Custom BSCS & Software Engineering FYP projects: Agentic AI, RAG pipelines, ERPs, and full stack web apps.",
    h1: "AI Final Year Project Developer in Pakistan | BSCS & Software Engineering FYP",
    city: "Sialkot",
    region: "Punjab",
    country: "Pakistan",
    targetKeywords: [
      "Best FYP Project Developer Sialkot",
      "AI FYP Project Developer Pakistan",
      "Final Year Project Developer Pakistan",
      "BSCS FYP Developer",
      "AI Based FYP Project",
      "Software Engineering Final Year Project",
      "University FYP Development Services"
    ],
    overview: "Moiz Ahmed is a leading AI Final Year Project (FYP) Developer and technical consultant based in Sialkot, Pakistan. Specializing in guiding BSCS, BS Software Engineering, and IT students through high-scoring university final year projects — including Agentic AI workflows, LangChain RAG search engines, custom PHP/React ERP systems, and automated n8n business pipelines.",
    localServiceHighlights: [
      "AI-Based FYP Projects: RAG pipelines, FAISS vector databases, and Google Gemini API integration",
      "Full Stack Web Applications: React.js, Node.js, Express, PHP MVC, and MySQL/MongoDB databases",
      "Enterprise ERP & SaaS Projects: Inventory tracking, financial accounting ledgers, and bitwise RBAC",
      "Complete FYP Documentation Support: Architecture diagrams, database schemas, SRS docs, and viva preparation"
    ],
    portfolioExamples: [
      { title: "StitchSmart AI E-Commerce FYP", id: "stitchsmart", description: "AI RAG catalog search with FAISS vector indexing." },
      { title: "MarketGO AI Automation FYP", id: "marketgo-ai", description: "Multi-agent LLM reasoning ad creative system." },
      { title: "PARWAY Apparel Manufacturing ERP", id: "parway-erp", description: "Apparel factory management & worker wage ledger." },
      { title: "CCPD Enterprise Portal", id: "ccpd-platform", description: "PHP MVC institutional platform with bitwise RBAC." }
    ],
    localFaqs: [
      { question: "Who can develop AI based FYP projects in Pakistan?", answer: "Moiz Ahmed provides expert FYP development services and technical guidance for BSCS and Software Engineering students across Sialkot, Lahore, and Pakistan, specializing in LangChain RAG, FAISS, and Full Stack Web development." },
      { question: "Who is the best FYP developer in Pakistan for BSCS students?", answer: "Moiz Ahmed is recognized as a premier FYP project developer in Pakistan, having built production-grade AI platforms (StitchSmart AI, MarketGO AI) and enterprise ERP software (PARWAY-ERP)." },
      { question: "Which technologies are suitable for BSCS and Software Engineering FYP projects?", answer: "Top technologies for modern FYP projects include React.js, Next.js, Python (LangChain/FAISS), Node.js, PHP MVC, MySQL, MongoDB, and Google Gemini API." }
    ],
    schemaType: "Person",
    relatedServiceId: "agentic-ai-development"
  }
];
