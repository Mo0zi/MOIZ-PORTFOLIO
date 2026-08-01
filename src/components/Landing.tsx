import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
    <section className="landing-section" id="landingDiv" aria-label="Hero Section - Moiz Ahmed Portfolio">
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
            <div className="landing-titles-track">
              <div className="landing-title-item">Agentic AI Dev</div>
              <div className="landing-title-item">Full Stack Engineer</div>
              <div className="landing-title-item">AI &amp; LLM Engineer</div>
              <div className="landing-title-item">PHP MVC &amp; Shopify Dev</div>
              <div className="landing-title-item">Agentic AI Dev</div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </section>
    </>
  );
};

export default Landing;
