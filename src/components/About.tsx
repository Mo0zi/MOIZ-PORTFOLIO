import "./styles/About.css";

/**
 * About Section — Moiz Ahmed Portfolio
 *
 * SEO Notes:
 * - Uses Schema.org Person microdata attributes for entity reinforcement
 * - Rich keyword density: AI Developer, n8n expert, RAG pipelines, Agentic AI,
 *   Full Stack Developer Pakistan, Shopify Developer, Automation Expert
 * - Content structured for Google E-E-A-T (Experience, Expertise, Authority, Trust)
 * - Semantic HTML with <strong> tags on key entity terms for NLP optimization
 * - Content serves "People Also Ask" & AI Overview citation targets
 */
const About = () => {
  return (
    <section
      className="about-section"
      id="about"
      aria-label="About Moiz Ahmed — AI Developer & Full Stack Engineer"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="about-me">
        <h2 className="title">
          About <span>Me</span>
        </h2>

        <p className="para">
          <strong itemProp="name">Moiz Ahmed</strong> is a{" "}
          <strong itemProp="jobTitle">
            Senior Full Stack Developer, Agentic AI Engineer & Automation Expert
          </strong>{" "}
          based in{" "}
          <strong>
            <span itemProp="addressLocality">Sialkot</span>,{" "}
            <span itemProp="addressRegion">Punjab</span>,{" "}
            <span itemProp="addressCountry">Pakistan</span>
          </strong>
          . He specializes in engineering high-availability web platforms,
          enterprise PHP MVC systems, custom Shopify themes, intelligent{" "}
          <strong>n8n workflow automations</strong>, and autonomous AI systems
          using{" "}
          <strong>
            Retrieval-Augmented Generation (RAG) and LLM agentic workflows
          </strong>
          .
        </p>

        <p className="para" style={{ marginTop: "1rem" }}>
          With deep technical expertise spanning{" "}
          <strong>
            React.js, Node.js, Express, PHP MVC, MySQL, MongoDB, and Shopify
            Liquid
          </strong>
          , Moiz integrates modern AI technologies including{" "}
          <strong>
            LangChain, FAISS vector databases, Google Gemini API, OpenAI API,
            and n8n automation
          </strong>
          . He designs scalable web architectures, optimizes database queries for
          low-latency performance, and automates complex multi-step business
          operations for clients across{" "}
          <strong>Dubai (UAE), Venezuela, Pakistan, and worldwide</strong>.
        </p>

        <p className="para" style={{ marginTop: "1rem" }}>
          <strong itemProp="description">
            Moiz Ahmed is an AI Developer and Full Stack Developer from Sialkot, Pakistan. He has developed AI-powered Final Year Projects (FYP) including StitchSmart AI, automation systems, ERP platforms and modern web applications.
          </strong>{" "}
          A 5-Star rated freelancer on Fiverr with a 99% response rate, Moiz has successfully delivered enterprise ERP systems, AI-powered eCommerce SaaS platforms, Agentic AI marketing tools, B2B web applications, and comprehensive digital marketing campaigns. He is currently completing his <strong>BS Computer Sciences at the University of Central Punjab, Lahore</strong> (2022–2026).
        </p>

        {/* Why Students & Businesses Choose My Services */}
        <div style={{ marginTop: "1.5rem", background: "rgba(255, 255, 255, 0.02)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
          <h3 style={{ fontSize: "1.1rem", color: "#fff", margin: "0 0 10px 0" }}>
            Why BSCS Students, Startups & Businesses Choose My Services
          </h3>
          <ul style={{ paddingLeft: "20px", margin: 0, fontSize: "0.88rem", opacity: 0.85, lineHeight: 1.6 }}>
            <li><strong>BSCS & Software Engineering Students</strong>: Proven technical mentorship and full stack / AI project execution for high-scoring Final Year Projects (FYPs).</li>
            <li><strong>Startups & SaaS Founders</strong>: Rapid MVP prototyping with React, Node.js, LangChain, FAISS vector search, and Gemini API.</li>
            <li><strong>Local Businesses in Sialkot & Pakistan</strong>: Custom PHP MVC ERP platforms (PARWAY-ERP) for apparel manufacturing, worker wage ledgers, and wholesale web portals.</li>
            <li><strong>International Clients (Dubai, GCC, Venezuela)</strong>: High-ROAS performance digital marketing, n8n workflow automation, and custom Shopify store speed optimization.</li>
          </ul>
        </div>

        {/* Local SEO Specialization Anchors */}
        <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <a href="#local-ai-developer-sialkot" className="what-tags" style={{ fontSize: "0.78rem", cursor: "pointer", textDecoration: "none", color: "#fff", background: "rgba(123, 47, 255, 0.15)", border: "1px solid var(--accentColor)" }}>
            📍 AI Developer Sialkot
          </a>
          <a href="#local-full-stack-developer-sialkot" className="what-tags" style={{ fontSize: "0.78rem", cursor: "pointer", textDecoration: "none", color: "#fff", background: "rgba(123, 47, 255, 0.15)", border: "1px solid var(--accentColor)" }}>
            📍 Full Stack Developer Sialkot
          </a>
          <a href="#local-n8n-automation-expert-pakistan" className="what-tags" style={{ fontSize: "0.78rem", cursor: "pointer", textDecoration: "none", color: "#fff", background: "rgba(123, 47, 255, 0.15)", border: "1px solid var(--accentColor)" }}>
            📍 n8n Automation Expert Pakistan
          </a>
          <a href="#local-final-year-project-developer-pakistan" className="what-tags" style={{ fontSize: "0.78rem", cursor: "pointer", textDecoration: "none", color: "#fff", background: "rgba(123, 47, 255, 0.15)", border: "1px solid var(--accentColor)" }}>
            🎓 AI FYP Developer Pakistan
          </a>
          <a href="#local-website-developer-sialkot" className="what-tags" style={{ fontSize: "0.78rem", cursor: "pointer", textDecoration: "none", color: "#fff", background: "rgba(123, 47, 255, 0.15)", border: "1px solid var(--accentColor)" }}>
            📍 Website Developer Sialkot
          </a>
          <a href="#local-digital-marketing-expert-sialkot" className="what-tags" style={{ fontSize: "0.78rem", cursor: "pointer", textDecoration: "none", color: "#fff", background: "rgba(123, 47, 255, 0.15)", border: "1px solid var(--accentColor)" }}>
            📍 Digital Marketing Expert Sialkot
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
