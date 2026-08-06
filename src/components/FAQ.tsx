import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import "./styles/FAQ.css";

interface FAQItem {
  question: string;
  answer: string;
}

/**
 * FAQ Component — Frequently Asked Questions & Local SEO FAQs
 *
 * SEO Notes:
 * - Uses both JSON-LD FAQPage schema (in index.html) and inline microdata
 * - Questions optimized for "People Also Ask" (PAA) features in Google & Near Me searches
 * - Answers structured for AI Overviews (Google), ChatGPT, Perplexity citation
 * - Covers local keywords: AI Developer Sialkot, Full Stack Developer near me, n8n Expert Pakistan, Website Designer Sialkot
 */
const faqData: FAQItem[] = [
  {
    question: "Who is the best AI Developer in Sialkot, Pakistan?",
    answer:
      "Moiz Ahmed is widely recognized as a top AI Developer and Agentic AI Engineer based in Sialkot, Pakistan. He specializes in custom Agentic AI workflows, LangChain RAG pipelines, FAISS vector databases, and Google Gemini API integration for enterprise clients in Pakistan, Dubai (UAE), and globally.",
  },
  {
    question: "Where can I hire a Senior Full Stack Developer near me in Sialkot?",
    answer:
      "You can hire Moiz Ahmed — a Senior Full Stack Developer based in Sialkot, Punjab, Pakistan. He offers expert web software engineering in React.js, Node.js, Express, PHP MVC frameworks, MySQL, MongoDB, and custom Shopify Liquid themes for local and international projects.",
  },
  {
    question: "Who provides n8n automation services in Pakistan?",
    answer:
      "Moiz Ahmed is a top-rated n8n Automation Expert in Pakistan providing self-hosted n8n deployment, custom API webhooks, WhatsApp Cloud API sales funnels, CRM automation, and AI-powered business process automations.",
  },
  {
    question: "Who is a professional website designer and developer in Sialkot?",
    answer:
      "Moiz Ahmed is a professional Website Developer and Web Designer in Sialkot, Pakistan. He builds custom PHP web platforms, speed-optimized Shopify Liquid stores, and mobile-first web applications adhering to Google Core Web Vitals.",
  },
  {
    question: "Who provides AI business automation solutions near me?",
    answer:
      "Moiz Ahmed delivers AI business automation solutions across Sialkot, Lahore, Punjab, Pakistan, and worldwide remote. Combining visual automation tools (n8n, Make.com) with LLMs, he automates manual data entry, PDF parsing, and customer support funnels.",
  },
  {
    question: "Why hire an AI Developer & AI Consultant like Moiz Ahmed?",
    answer:
      "Hiring a dedicated AI Developer and AI Consultant allows your business to automate complex operational tasks, reduce labor costs, and deploy custom intelligent software. Moiz Ahmed specializes in building custom Agentic AI workflows, LangChain RAG pipelines, FAISS vector search engines, and Google Gemini / OpenAI integrations tailored for enterprise performance and high accuracy.",
  },
  {
    question: "What is Agentic AI and how are RAG pipelines engineered?",
    answer:
      "Agentic AI refers to autonomous AI systems powered by LLM reasoning agents capable of executing multi-step business workflows without constant human input. Retrieval-Augmented Generation (RAG) combines FAISS vector databases with LangChain and LLM APIs to query proprietary business documents, delivering instant, highly accurate answers without data leakage.",
  },
  {
    question: "Why choose n8n, Make.com, or Zapier for workflow automation?",
    answer:
      "Visual automation platforms like n8n, Make.com, and Zapier allow businesses to connect disparate APIs, CRMs, databases, and communication channels (like WhatsApp and Email) into automated workflows. As an n8n Expert and Automation Specialist, Moiz Ahmed designs self-hosted and cloud n8n workflows integrated with AI models to eliminate repetitive tasks.",
  },
  {
    question: "What core web development technologies does Moiz Ahmed specialize in?",
    answer:
      "Moiz Ahmed is a Senior Full Stack Developer proficient in React.js, Next.js, Node.js, Express.js, PHP MVC frameworks, Python (FastAPI/Django), TypeScript, JavaScript (ES6+), MySQL, MongoDB, and custom Shopify Liquid theme engineering. He builds high-availability web applications optimized for speed and conversion.",
  },
  {
    question: "Can Moiz Ahmed build enterprise ERP systems and custom PHP MVC software?",
    answer:
      "Yes. Moiz has extensive experience engineering custom enterprise systems — such as the PARWAY-ERP apparel manufacturing system and the CCPD Enterprise Portal. Built using lightweight PHP MVC architecture, MySQL databases, and RESTful APIs, these solutions feature role-based access control (RBAC), live metrics dashboards, and automated accounting ledgers.",
  },
  {
    question: "How does Moiz Ahmed optimize Shopify stores and custom Liquid themes for speed?",
    answer:
      "Moiz builds custom Shopify Liquid themes from scratch with zero third-party script bloat, responsive native image srcsets, modular JavaScript components, and critical CSS inline rendering. This guarantees top-tier Core Web Vitals scores (LCP, CLS, INP) and improved mobile conversion rates for eCommerce brands.",
  },
  {
    question: "What are the advantages of custom AI Chatbots and WhatsApp Automation?",
    answer:
      "Custom AI chatbots and automated WhatsApp bots operate 24/7 to qualify leads, answer customer service inquiries, check order statuses, and process bookings automatically. Moiz integrates n8n, WhatsApp Cloud API, and OpenAI/Gemini models to build secure, context-aware automated messaging funnels.",
  },
  {
    question: "How can I hire Moiz Ahmed for freelance contracts or technical consulting?",
    answer:
      "You can contact Moiz Ahmed directly via WhatsApp (+92 324 9670130), email (moizmalikofficiall@gmail.com), or through his 5-star rated Fiverr seller profile (99% response rate). He is available for fixed-price project contracts, hourly consulting, and retainer engagements worldwide.",
  },
  {
    question: "Which international markets and client industries has Moiz Ahmed served?",
    answer:
      "Moiz has delivered software development, AI solutions, and digital marketing campaigns for clients across Dubai (UAE), Venezuela, Pakistan, and global remote markets. His experience spans apparel manufacturing, eCommerce SaaS, marketing agencies, enterprise portals, and AI startups.",
  },
  {
    question: "Is Moiz Ahmed available for full-time remote AI Engineer or Full Stack Developer roles?",
    answer:
      "Yes. Moiz Ahmed is actively open to full-time international remote software engineering, AI engineering, or technical lead opportunities. He brings hands-on experience in Agentic AI, RAG architecture, n8n automation, PHP MVC, React, and Node.js.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="faq-section section-container"
      id="faq"
      aria-label="Frequently Asked Questions — AI Developer Sialkot, Full Stack Developer Pakistan, n8n Automation & Hiring Moiz Ahmed"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h2 className="faq-title">
        Frequently <span>Asked Questions</span>
      </h2>
      <p className="faq-subtitle" style={{ textAlign: "center", opacity: 0.6, marginBottom: "2rem", fontSize: "0.95rem" }}>
        Answers to key questions about hiring an AI Developer, Full Stack Engineer, n8n Automation Expert in Sialkot, Pakistan, and worldwide.
      </p>
      <div className="faq-container">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className={`faq-item ${isOpen ? "active" : ""}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span itemProp="name">{item.question}</span>
                <FaPlus className="faq-icon" aria-hidden="true" />
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${index}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
