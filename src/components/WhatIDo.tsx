import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesData } from "../data/servicesData";
import { MdArrowOutward } from "react-icons/md";

interface WhatIDoProps {
  onSelectService?: (serviceId: string) => void;
}

const WhatIDo = ({ onSelectService }: WhatIDoProps) => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (container: HTMLDivElement) => {
    container.classList.toggle("what-content-active");
  };

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <section
      className="whatIDO"
      id="what-i-do"
      aria-label="Services: Full Stack Development, Agentic AI, n8n Automation, Shopify & Digital Marketing by Moiz Ahmed"
    >
      <div className="what-box" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
        <span className="what-instruction">( Hover over cards to expand · Click tags for deep service details )</span>
      </div>

      {/* 15 Specialized Service Pills Bar */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          margin: "15px 0 30px 0",
          width: "100%",
        }}
        aria-label="15 Specialized Engineering Services"
      >
        {servicesData.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              if (onSelectService) onSelectService(s.id);
              else window.dispatchEvent(new CustomEvent("open-service", { detail: { serviceId: s.id } }));
            }}
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#fff",
              padding: "6px 14px",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "0.82rem",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accentColor)";
              e.currentTarget.style.background = "rgba(123, 47, 255, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
            }}
            aria-label={`View detailed ${s.title} service page`}
          >
            {s.title} <MdArrowOutward style={{ fontSize: "0.75rem", opacity: 0.7 }} />
          </button>
        ))}
      </div>

      <div className="what-box">
        <div className="what-box-in what-box-in--three">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* ── Card 1: Full Stack Development ── */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
            role="button"
            tabIndex={0}
            aria-label="Expand Full Stack Web Development capabilities — React, Node.js, PHP MVC, Shopify"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                const el = containerRef.current[0];
                if (el) handleClick(el);
              }
            }}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>Full Stack Web Engineering</h3>
              <h4>Description</h4>
              <p>
                Architecting high-availability full-stack web applications, custom PHP MVC enterprise platforms, and high-converting Shopify stores. Delivering seamless, performance-optimized digital experiences with React.js, Node.js, Express, MongoDB, MySQL, and Shopify Liquid development.
              </p>
              <h5>Skillset &amp; Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags" onClick={() => onSelectService && onSelectService("full-stack-development")}>React.js</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("full-stack-development")}>Node.js</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("api-integration")}>Express.js</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("custom-website-development")}>PHP MVC</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("full-stack-development")}>TypeScript</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("full-stack-development")}>JavaScript</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("full-stack-development")}>MongoDB</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("full-stack-development")}>MySQL</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("api-integration")}>REST APIs</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("custom-website-development")}>Shopify Liquid</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* ── Card 2: Agentic AI, RAG & n8n Automation ── */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
            role="button"
            tabIndex={0}
            aria-label="Expand Agentic AI, RAG Pipeline, and n8n Automation capabilities"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                const el = containerRef.current[1];
                if (el) handleClick(el);
              }
            }}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>Agentic AI, RAG &amp; n8n Automation</h3>
              <h4>Description</h4>
              <p>
                Engineering autonomous Agentic AI workflows, Retrieval-Augmented Generation (RAG) pipelines, FAISS vector search indexing, and n8n business process automations. Integrating LangChain, Google Gemini API, and OpenAI to automate complex enterprise operations end-to-end.
              </p>
              <h5>Skillset &amp; Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags" onClick={() => onSelectService && onSelectService("agentic-ai-development")}>LangChain</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("rag-development")}>RAG Pipelines</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("rag-development")}>FAISS Vector DB</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("agentic-ai-development")}>Agentic AI</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("llm-integration")}>Google Gemini API</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("llm-integration")}>OpenAI API</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("n8n-automation")}>n8n Automation</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("prompt-engineering")}>Prompt Engineering</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("ai-chatbot-development")}>AI Chatbots</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* ── Card 3: Digital Marketing & Brand Growth ── */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
            role="button"
            tabIndex={0}
            aria-label="Expand Digital Marketing, Meta Ads, and Social Media Growth capabilities"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                const el = containerRef.current[2];
                if (el) handleClick(el);
              }
            }}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>Digital Marketing &amp; Brand Growth</h3>
              <h4>Description</h4>
              <p>
                Executing performance-driven digital marketing campaigns, Meta Ads (Facebook &amp; Instagram) management, Google Ads PPC optimization, and AI-automated marketing funnels for global clients across Dubai (UAE), Venezuela, and Pakistan. Driving qualified traffic, brand awareness, and maximizing conversion rates.
              </p>
              <h5>Skillset &amp; Tools</h5>
              <div className="what-content-flex">
                <div className="what-tags" onClick={() => onSelectService && onSelectService("digital-marketing")}>Meta Ads</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("digital-marketing")}>Google Ads</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("digital-marketing")}>Content Strategy</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("technical-seo")}>Technical SEO</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("ai-automation")}>AI Automation</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("digital-marketing")}>Analytics</div>
                <div className="what-tags" onClick={() => onSelectService && onSelectService("technical-seo")}>GEO &amp; AEO</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
