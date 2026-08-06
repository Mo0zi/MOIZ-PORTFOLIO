import { PropsWithChildren } from "react";
import "./styles/Landing.css";

/**
 * Landing / Hero Section
 *
 * SEO Notes:
 * - Single H1 on the page (critical for on-page SEO) with full name
 * - H2 contains primary job title keyword phrase
 * - Animated title ticker adds semantic variety without keyword stuffing
 * - aria-label on section provides context for crawlers & screen readers
 * - Hidden but accessible descriptive paragraph for AI search engines (GEO/AEO)
 *   that prefer dense factual paragraphs for citation
 */
const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <section
        className="landing-section"
        id="landingDiv"
        aria-label="Moiz Ahmed — AI Developer, Full Stack Engineer & Automation Expert — Hero Section"
      >
        <div className="landing-container">
          <div className="landing-intro">
            <p className="landing-greeting">Hello! I'm</p>
            <h1>
              MOIZ
              <br />
              <span>AHMED</span>
            </h1>
          </div>
          <div className="landing-info">
            <h2>Senior Full Stack Developer &amp; Agentic AI Engineer</h2>
            <div className="landing-titles-wrap">
              <div
                className="landing-titles-track"
                aria-label="Specializations: Agentic AI Developer, Full Stack Engineer, AI & LLM Engineer, n8n Automation Expert, PHP MVC & Shopify Developer"
              >
                <div className="landing-title-item">Agentic AI Dev</div>
                <div className="landing-title-item">Full Stack Engineer</div>
                <div className="landing-title-item">AI &amp; LLM Engineer</div>
                <div className="landing-title-item">n8n Automation Expert</div>
                <div className="landing-title-item">PHP MVC &amp; Shopify Dev</div>
                {/* Duplicate for seamless infinite scroll */}
                <div className="landing-title-item" aria-hidden="true">Agentic AI Dev</div>
                <div className="landing-title-item" aria-hidden="true">Full Stack Engineer</div>
                <div className="landing-title-item" aria-hidden="true">AI &amp; LLM Engineer</div>
                <div className="landing-title-item" aria-hidden="true">n8n Automation Expert</div>
                <div className="landing-title-item" aria-hidden="true">PHP MVC &amp; Shopify Dev</div>
              </div>
            </div>
            {/* Visually hidden but crawlable description — feeds AI Overview & entity extraction */}
            <p
              className="landing-seo-description"
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
                whiteSpace: "nowrap",
              }}
            >
              Moiz Ahmed is a Senior Full Stack Developer, Agentic AI Engineer, and Automation Expert
              based in Sialkot, Pakistan. He specializes in building Agentic AI systems,
              LangChain RAG pipelines, n8n workflow automations, React.js web applications,
              Node.js APIs, PHP MVC enterprise systems, and custom Shopify Liquid themes.
              Available for remote freelance and full-time contracts worldwide.
            </p>
          </div>
        </div>
        {children}
      </section>
    </>
  );
};

export default Landing;
