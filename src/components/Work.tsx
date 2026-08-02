import { useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import CaseStudyModal from "./CaseStudyModal";
import { projectsData, CaseStudy } from "../data/projectsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length > 0) {
        const rectLeft = document
          .querySelector(".work-container")!
          .getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
        let padding: number =
          parseInt(window.getComputedStyle(box[0]).padding) / 2;
        translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      }
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    setTimeout(() => {
      setTranslateX();
      ScrollTrigger.refresh();
    }, 1500);

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <>
      <section className="work-section" id="work" aria-label="Featured Software and AI Projects">
        <div className="work-container section-container">
          <h2>
            Featured <span>Projects &amp; Case Studies</span>
          </h2>
          <div className="work-flex">
            {projectsData.map((project, index) => (
              <div className="work-box" key={project.id}>
                <div className="work-info">
                  <div className="work-title">
                    <span className="work-num" style={{ fontSize: "28px", fontWeight: 700, opacity: 0.6, marginRight: "15px" }}>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Tools &amp; Features</h4>
                  <p>{project.tools}</p>
                  <button
                    className="case-study-btn"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Read case study for ${project.title}`}
                    style={{
                      marginTop: "12px",
                      background: "transparent",
                      border: "1px solid var(--accentColor)",
                      color: "var(--accentColor)",
                      padding: "6px 14px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontFamily: "Geist, sans-serif",
                      fontSize: "13px",
                      fontWeight: 500
                    }}
                  >
                    View Technical Case Study →
                  </button>
                </div>
                <WorkImage image={project.image} alt={project.title} link={project.link} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Work;
