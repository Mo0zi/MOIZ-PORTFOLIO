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
          A{" "}
          <strong>
            5-Star rated freelancer on Fiverr with a 99% response rate
          </strong>
          , Moiz has successfully delivered enterprise ERP systems, AI-powered
          eCommerce SaaS platforms, Agentic AI marketing tools, B2B web
          applications, and comprehensive digital marketing campaigns. He is
          currently pursuing a{" "}
          <strong>
            BS Computer Sciences at the University of Central Punjab, Lahore
          </strong>{" "}
          (2022–2026).
        </p>
      </div>
    </section>
  );
};

export default About;
