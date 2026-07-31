import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
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
            <h3>A Professional</h3>
            <div className="landing-titles-wrap">
              <div className="landing-titles-track">
                <div className="landing-title-item">Agentic AI Dev</div>
                <div className="landing-title-item">Full Stack Engineer</div>
                <div className="landing-title-item">AI &amp; LLM Engineer</div>
                <div className="landing-title-item">Social Media Expert</div>
                <div className="landing-title-item">Agentic AI Dev</div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
