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
                <h3>Social Media Marketing Expert</h3>
                <h4>Haash Wears</h4>
              </div>
              <span className="career-year">2023 — Present</span>
            </div>
            <p>
              Running end-to-end social media marketing for a fashion brand —
              content strategy, paid campaigns, and growing the brand's presence
              across Instagram and Facebook. Went from zero structured marketing
              to consistent monthly engagement growth and measurable sales
              impact.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>Social Media & Full Stack Developer</h3>
                <h4>CCPD</h4>
              </div>
              <span className="career-year">2024</span>
            </div>
            <p>
              Handled two things at once — building and maintaining the web
              platform using PHP MVC and MySQL, while also managing the
              organisation's social media channels. Not the typical combo, but
              it's where I realised how much better products get when the person
              building them also understands how they'll be marketed.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h3>Freelance Marketing Agent & AI Developer</h3>
                <h4>Self-Employed — International Clients</h4>
              </div>
              <span className="career-year">2024 — Present</span>
            </div>
            <p>
              Working independently with clients across the globe. Built and
              executed digital marketing campaigns for ACG (Dubai) and MAMI
              (Venezuela) — handling ad strategy, content, and performance
              tracking. Alongside marketing, delivering custom AI solutions:
              agentic workflows, RAG pipelines, and LLM integrations for clients
              who need more than a standard web app.
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
              Studying Computer Science at UCP — where the degree gave me the
              fundamentals and the projects gave me the real skills. Most of
              what I've built professionally started as something I was learning
              in a lab or trying to solve on my own after class.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Career;
