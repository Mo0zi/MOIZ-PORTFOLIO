import "./styles/Career.css";

const Career = () => {
  return (
    <section className="career-section section-container" id="career" aria-label="Career and Experience Timeline">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>Full Stack Developer</h3>
                <h4>CCPD</h4>
              </div>
              <span className="career-year">2024</span>
            </div>
            <p>
              Developed and maintained responsive web applications using PHP MVC,
              MySQL, and JavaScript while optimizing backend performance and user
              experience across enterprise-grade systems.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>Full Stack Developer</h3>
                <h4>Haash Wears</h4>
              </div>
              <span className="career-year">2024</span>
            </div>
            <p>
              Built and enhanced a B2B business website by implementing responsive
              interfaces, backend functionality, and SEO-friendly features to
              drive organic traffic and improve user engagement.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>Shopify Store Developer</h3>
                <h4>Freelance — Silk School &amp; Others</h4>
              </div>
              <span className="career-year">2025</span>
            </div>
            <p>
              Developed fully functional Shopify stores for eCommerce businesses,
              integrating custom themes, payment gateways, and SEO strategies to
              maximize online sales and brand presence.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>Freelance Full Stack &amp; AI Developer</h3>
                <h4>Self-Employed</h4>
              </div>
              <span className="career-year">2025 — Present</span>
            </div>
            <p>
              Designing and delivering custom web applications, AI-powered solutions,
              and Shopify stores for clients using modern web technologies and LLM
              integrations including LangChain, RAG, FAISS, and Google Gemini API.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>BS Computer Sciences</h3>
                <h4>University of Central Punjab, Lahore</h4>
              </div>
              <span className="career-year">2022 — 2026</span>
            </div>
            <p>
              Pursuing a Bachelor's degree in Computer Science with a strong focus
              on software engineering, artificial intelligence, and full-stack
              development. Actively applying academic knowledge to real-world projects.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Career;
