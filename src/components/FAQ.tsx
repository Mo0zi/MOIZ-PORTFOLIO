import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import "./styles/FAQ.css";

interface FAQItem {
  question: string;
  answer: string;
}

/**
 * FAQ Component — Frequently Asked Questions
 *
 * SEO Notes:
 * - Uses both JSON-LD FAQPage schema (in index.html) and inline microdata
 * - Questions optimized for "People Also Ask" (PAA) features in Google
 * - Answers structured for AI Overviews (Google), ChatGPT, Perplexity citation
 * - Covers high-intent keywords: AI developer, n8n expert, RAG pipeline, Agentic AI,
 *   full stack developer Pakistan, Shopify developer, automation expert
 */
const faqData: FAQItem[] = [
  {
    question: "What core services does Moiz Ahmed offer?",
    answer:
      "Moiz Ahmed specializes in three key pillars: (1) Full Stack Web Engineering — React.js, Node.js, Express, PHP MVC, MySQL, MongoDB; (2) Agentic AI & Automation — LangChain RAG pipelines, FAISS vector search, n8n workflow automation, Gemini & OpenAI APIs, AI chatbot development; and (3) Social Media Marketing & Paid Ads — Meta Ads, Google Ads, content strategy, and brand scaling for international clients.",
  },
  {
    question: "What is Agentic AI and how are RAG pipelines built?",
    answer:
      "Agentic AI refers to autonomous AI systems that execute complex multi-step tasks without human intervention. Moiz builds Retrieval-Augmented Generation (RAG) pipelines using LangChain, FAISS vector databases, and LLM APIs (Gemini, OpenAI) — enabling AI to reason over proprietary enterprise documents with high accuracy and low latency. These systems power AI chatbots, document QA, and automated knowledge retrieval.",
  },
  {
    question: "Is Moiz Ahmed an n8n expert and workflow automation specialist?",
    answer:
      "Yes. Moiz is an experienced n8n automation expert who builds custom visual workflow automations, API integrations, WhatsApp automation, CRM automation, email automation, and AI-powered business process automation pipelines. He has delivered n8n automation solutions for enterprises needing to eliminate manual, repetitive operational tasks.",
  },
  {
    question: "Does Moiz Ahmed build custom PHP MVC applications and Shopify stores?",
    answer:
      "Yes. Moiz has extensive experience building custom PHP MVC enterprise applications — including CCPD Enterprise Platform and Haash Wears B2B eCommerce — as well as high-converting Shopify stores with custom Liquid themes. His Shopify work prioritizes Core Web Vitals performance, zero third-party script bloat, and mobile-first responsive design.",
  },
  {
    question: "How can I hire Moiz Ahmed for a project or consulting?",
    answer:
      "You can reach Moiz directly via WhatsApp (+92 324 9670130), email (moizmalikofficiall@gmail.com), or through his 5-star Fiverr seller profile with a 99% response rate. He is available for international remote freelance projects, AI consulting, full-stack development contracts, and marketing management.",
  },
  {
    question: "What AI technologies does Moiz Ahmed work with?",
    answer:
      "Moiz works with LangChain, FAISS vector databases, Google Gemini API, OpenAI API (GPT-4, GPT-3.5 Turbo), Retrieval-Augmented Generation (RAG), Agentic AI multi-agent frameworks, n8n automation, prompt engineering, AI chatbot development, WhatsApp AI bots, and custom LLM inference pipeline engineering using Python, Node.js, and React.",
  },
  {
    question: "What countries and markets has Moiz Ahmed worked with?",
    answer:
      "Moiz has delivered projects for clients across Dubai (UAE), Venezuela, Pakistan, and globally via remote contracting. He managed paid advertising campaigns for ACG (Dubai, GCC markets) and MAMI (Venezuela), built enterprise software for local and international businesses, and is actively available for worldwide remote work.",
  },
  {
    question: "Is Moiz Ahmed available for remote freelance or full-time positions?",
    answer:
      "Yes. Moiz Ahmed is actively available for international remote freelance projects, long-term consulting engagements, and full-time software engineering or AI development roles. He is particularly open to positions involving Agentic AI development, RAG system engineering, full-stack web development, or automation engineering.",
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
      aria-label="Frequently Asked Questions about Moiz Ahmed's Services"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h2 className="faq-title">
        Frequently <span>Asked Questions</span>
      </h2>
      <p className="faq-subtitle" style={{ textAlign: "center", opacity: 0.6, marginBottom: "2rem", fontSize: "0.95rem" }}>
        Common questions about AI development, full stack engineering, n8n automation, and hiring Moiz Ahmed.
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
