import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
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
                <h4>Full Stack Developer</h4>
                <h5>CCPD</h5>
              </div>
              <h3>2024</h3>
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
                <h4>Full Stack Developer</h4>
                <h5>Haash Wears</h5>
              </div>
              <h3>2024</h3>
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
                <h4>Shopify Store Developer</h4>
                <h5>Freelance — Silk School & Others</h5>
              </div>
              <h3>2025</h3>
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
                <h4>Freelance Full Stack & AI Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2025 — Present</h3>
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
                <h4>BS Computer Sciences</h4>
                <h5>University of Central Punjab, Lahore</h5>
              </div>
              <h3>2022 — 2026</h3>
            </div>
            <p>
              Pursuing a Bachelor's degree in Computer Science with a strong focus
              on software engineering, artificial intelligence, and full-stack
              development. Actively applying academic knowledge to real-world projects.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
