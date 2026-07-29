import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import "./styles/FAQ.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does Moiz Ahmed specialize in?",
    answer: "Moiz Ahmed specializes in Full-Stack Web Development (PHP MVC, React, Node.js, Express, MongoDB, MySQL), Agentic AI & RAG Pipeline Integration (LangChain, FAISS, Gemini API), and Custom Shopify Store & Theme Development."
  },
  {
    question: "What is Agentic AI and how does Moiz implement RAG pipelines?",
    answer: "Agentic AI refers to autonomous AI systems capable of executing complex multi-step workflows. Moiz implements Retrieval-Augmented Generation (RAG) using LangChain, vector embeddings, FAISS databases, and LLM APIs to allow AI to reason over proprietary data with low latency and high precision."
  },
  {
    question: "Does Moiz Ahmed build custom PHP MVC applications and Shopify stores?",
    answer: "Yes, Moiz has extensive experience building custom PHP MVC enterprise applications (like CCPD and Haash Wears) and high-converting Shopify eCommerce stores with custom Liquid themes, payment gateways, and speed optimizations."
  },
  {
    question: "Is Moiz Ahmed available for remote freelance work or full-time engineering roles?",
    answer: "Yes, Moiz Ahmed is available for international remote freelance projects, AI/web consulting engagements, and full-stack or AI software engineering positions."
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
