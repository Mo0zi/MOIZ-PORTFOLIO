import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
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
    <section className="whatIDO" id="what-i-do" aria-label="Services: Full Stack Development, Agentic AI, n8n Automation, Shopify & Digital Marketing by Moiz Ahmed">
      <div className="what-box" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
        <span className="what-instruction">( Hover over cards to expand )</span>
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
              <line
                x1="100%"
                y1="0"
                x2="100%"
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
                <div className="what-tags">React.js</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">PHP MVC</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Shopify Liquid</div>
                <div className="what-tags">Next.js</div>
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
                <div className="what-tags">LangChain</div>
                <div className="what-tags">RAG Pipelines</div>
                <div className="what-tags">FAISS Vector DB</div>
                <div className="what-tags">Agentic AI</div>
                <div className="what-tags">Google Gemini API</div>
                <div className="what-tags">OpenAI API</div>
                <div className="what-tags">n8n Automation</div>
                <div className="what-tags">Prompt Engineering</div>
                <div className="what-tags">LLM Integration</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">WhatsApp Automation</div>
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
                <div className="what-tags">Meta Ads</div>
                <div className="what-tags">Google Ads</div>
                <div className="what-tags">Content Strategy</div>
                <div className="what-tags">SEO</div>
                <div className="what-tags">AI Automation</div>
                <div className="what-tags">Analytics</div>
                <div className="what-tags">Copywriting</div>
                <div className="what-tags">Brand Growth</div>
                <div className="what-tags">Email Marketing</div>
                <div className="what-tags">CRM Automation</div>
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

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
