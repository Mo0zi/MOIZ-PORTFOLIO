import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import "./styles/FAQ.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What core services does Moiz Ahmed offer?",
    answer: "Moiz specializes in three key pillars: 1) Full Stack Web Engineering (React, Node.js, Express, PHP MVC, MySQL, MongoDB), 2) Agentic AI & Automation (LangChain, RAG pipelines, FAISS vector search, n8n workflows, Gemini & OpenAI APIs), and 3) Social Media Marketing & Paid Ads (Meta Ads, Google Ads, content strategy, brand scaling)."
  },
  {
    question: "How does Moiz handle Social Media Marketing for international clients?",
    answer: "Moiz manages end-to-end digital marketing campaigns for global brands — including ACG (Dubai, UAE), MAMI (Venezuela), and Haash Wears. He combines audience targeting, ad creative optimization, content strategy, and AI automation to deliver high ROI and organic growth."
  },
  {
    question: "What is Agentic AI and how are workflow automations built?",
    answer: "Agentic AI systems use autonomous LLM reasoning agents to handle multi-step tasks. Moiz builds custom RAG architectures and n8n visual workflows integrated with FAISS vector databases, enabling businesses to automate customer support, lead qualification, and complex data processes."
  },
  {
    question: "How can I hire Moiz for a project or consulting?",
    answer: "You can reach out directly via WhatsApp (+92 324 9670130), order directly on his 5-Star Fiverr seller profile (99% response rate), or email moizmalikofficiall@gmail.com for freelance projects, marketing management, or full-stack/AI engineering contracts."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-container" id="faq" aria-label="Frequently Asked Questions">
      <h2 className="faq-title">
        Frequently <span>Asked Questions</span>
      </h2>
      <div className="faq-container">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className={`faq-item ${isOpen ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span>{item.question}</span>
                <FaPlus className="faq-icon" aria-hidden="true" />
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
