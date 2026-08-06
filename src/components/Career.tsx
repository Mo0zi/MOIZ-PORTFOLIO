import "./styles/Career.css";

/**
 * Career / Experience Timeline Section
 *
 * SEO Notes:
 * - WorkExperience schema microdata for each role
 * - EducationalOccupationalCredential for degree
 * - Rich career narrative establishes E-E-A-T signals
 * - Role titles contain high-value keyword entities:
 *   "AI Developer", "Full Stack Developer", "Social Media Marketing Expert",
 *   "n8n Automation Expert", "Agentic AI Engineer", "Shopify Developer"
 */
const Career = () => {
  return (
    <section
      className="career-section section-container"
      id="career"
      aria-label="Career Experience Timeline — Moiz Ahmed"
      itemScope
      itemType="https://schema.org/Person"
    >
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
              <div
                className="career-role"
                itemScope
                itemProp="hasOccupation"
                itemType="https://schema.org/Occupation"
              >
                <h3 itemProp="name">Social Media Marketing Expert & Digital Growth Strategist</h3>
                <h4 itemProp="occupationLocation">
                  <span itemScope itemType="https://schema.org/Organization">
                    <span itemProp="name">Haash Wears</span>
                  </span>
                </h4>
              </div>
              <span
                className="career-year"
                itemProp="workLocation"
                itemScope
                itemType="https://schema.org/AdministrativeArea"
              >
                <time dateTime="2023/2026">2023 — Present</time>
              </span>
            </div>
            <p>
              Running end-to-end social media marketing for a fashion brand —
              content strategy, paid Meta & Google Ads campaigns, and growing
              the brand's presence across Instagram and Facebook. Grew from zero
              structured digital marketing to consistent monthly engagement
              growth and measurable direct sales impact. Managed marketing
              automation workflows to streamline content scheduling and audience
              retargeting.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div
                className="career-role"
                itemScope
                itemProp="hasOccupation"
                itemType="https://schema.org/Occupation"
              >
                <h3 itemProp="name">Full Stack Developer & Social Media Manager</h3>
                <h4>
                  <span itemScope itemType="https://schema.org/Organization">
                    <span itemProp="name">CCPD</span>
                  </span>
                </h4>
              </div>
              <span className="career-year">
                <time dateTime="2024">2024</time>
              </span>
            </div>
            <p>
              Handled two simultaneous responsibilities — building and
              maintaining the enterprise web platform using <strong>PHP MVC</strong> and{" "}
              <strong>MySQL</strong>, while also managing the organisation's
              social media channels and digital presence. Implemented
              role-based access control (RBAC), CSRF protection, audit logging,
              and <strong>RESTful API</strong> integrations. This dual-role
              experience strengthened the understanding of how technical products
              need to be positioned and marketed to their target users.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div
                className="career-role"
                itemScope
                itemProp="hasOccupation"
                itemType="https://schema.org/Occupation"
              >
                <h3 itemProp="name">
                  Freelance AI Developer, Automation Engineer & Marketing Consultant
                </h3>
                <h4>
                  <span itemScope itemType="https://schema.org/Organization">
                    <span itemProp="name">Self-Employed — International Remote Clients</span>
                  </span>
                </h4>
              </div>
              <span className="career-year">
                <time dateTime="2024/2026">2024 — Present</time>
              </span>
            </div>
            <p>
              Operating as an independent AI Developer and automation consultant
              for global clients. Built and executed digital marketing campaigns
              for <strong>ACG (Dubai, UAE)</strong> and{" "}
              <strong>MAMI (Venezuela)</strong> — handling ad strategy, content
              creation, and performance analytics. Alongside marketing, delivering
              custom <strong>Agentic AI solutions</strong>:{" "}
              <strong>
                n8n workflow automations, RAG pipelines, LangChain integrations,
                and LLM-powered AI chatbots
              </strong>{" "}
              for clients needing intelligent automation beyond standard web
              applications. Rated <strong>5 stars on Fiverr</strong> with a{" "}
              <strong>99% response rate</strong>.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div
                className="career-role"
                itemScope
                itemProp="alumniOf"
                itemType="https://schema.org/CollegeOrUniversity"
              >
                <h3>BS Computer Sciences</h3>
                <h4>
                  <span itemProp="name">University of Central Punjab, Lahore</span>
                </h4>
              </div>
              <span className="career-year">
                <time dateTime="2022/2026">2022 — 2026</time>
              </span>
            </div>
            <p>
              Studying <strong>Computer Science</strong> at{" "}
              <strong>UCP Lahore</strong> — where academic foundations in
              algorithms, data structures, software engineering, and AI provided
              the theoretical grounding that powers practical project delivery.
              Most professional work — including enterprise ERP systems,
              AI eCommerce platforms, and Agentic AI pipelines — began as
              academic explorations extended into production-grade solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
