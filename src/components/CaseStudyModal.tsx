import { CaseStudy } from "../data/projectsData";
import { servicesData } from "../data/servicesData";
import { MdClose, MdArrowOutward, MdCheckCircle, MdHelpOutline } from "react-icons/md";
import "./styles/CaseStudyModal.css";

interface Props {
  project: CaseStudy | null;
  onClose: () => void;
  onSelectService?: (serviceId: string) => void;
}

const CaseStudyModal = ({ project, onClose, onSelectService }: Props) => {
  if (!project) return null;

  // Find related services by comparing tags/tools
  const matchingServices = servicesData.filter((s) =>
    project.tools.toLowerCase().includes(s.title.toLowerCase().split(" ")[0]) ||
    s.relatedCaseStudyIds.includes(project.id)
  );

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        itemScope
        itemType="https://schema.org/SoftwareApplication"
        style={{ maxWidth: "850px", maxHeight: "90vh", overflowY: "auto" }}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label={`Close ${project.title} Case Study`}
        >
          <MdClose aria-hidden="true" />
        </button>

        {/* Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": project.title,
              "description": project.summary,
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "author": {
                "@type": "Person",
                "name": "Moiz Ahmed",
                "url": "https://www.moizahmed.online/"
              },
              "keywords": project.tools
            })
          }}
        />

        <div className="modal-header">
          <span className="modal-category" itemProp="applicationCategory">
            {project.category}
          </span>
          <h1 id="case-study-title" itemProp="name" style={{ fontSize: "1.8rem", margin: "10px 0", color: "#fff" }}>
            {project.title}
          </h1>
          <p style={{ opacity: 0.7, fontSize: "0.85rem", margin: 0 }}>
            <strong>Tech Stack:</strong> {project.tools}
          </p>
        </div>

        <p className="modal-summary" itemProp="description" style={{ fontSize: "0.95rem", lineHeight: 1.6, margin: "20px 0" }}>
          {project.summary}
        </p>

        <div className="modal-section">
          <h3>The Challenge & Problem Statement</h3>
          <p style={{ lineHeight: 1.6, opacity: 0.85 }}>{project.problem}</p>
        </div>

        <div className="modal-section">
          <h3>System Architecture & Technical Solution</h3>
          <ul style={{ paddingLeft: "20px", lineHeight: 1.6 }}>
            {project.architecture.map((item, idx) => (
              <li key={idx} style={{ marginBottom: "8px" }}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h3>Engineering Bottleneck & Solution</h3>
          <div style={{ background: "rgba(255,255,255,0.03)", borderLeft: "3px solid var(--accentColor)", padding: "14px", borderRadius: "0 6px 6px 0" }}>
            <p style={{ margin: "0 0 8px 0" }}><strong>Technical Challenge:</strong> {project.challenges}</p>
            <p style={{ margin: 0 }}><strong>Engineering Solution:</strong> {project.solution}</p>
          </div>
        </div>

        <div className="modal-section">
          <h3>Performance Metrics & Production Impact</h3>
          <div className="modal-metrics" style={{ display: "grid", gap: "10px", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {project.metrics.map((metric, idx) => (
              <div className="metric-card" key={idx} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MdCheckCircle style={{ color: "var(--accentColor)", flexShrink: 0 }} />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study FAQs */}
        <div className="modal-section">
          <h3>Case Study Technical FAQs</h3>
          <div style={{ background: "rgba(255,255,255,0.02)", padding: "12px", borderRadius: "6px", marginBottom: "10px" }}>
            <h4 style={{ margin: "0 0 4px 0", color: "#fff", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "6px" }}>
              <MdHelpOutline style={{ color: "var(--accentColor)" }} /> How long did this project take from initial design to launch?
            </h4>
            <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.8 }}>Production delivery ranged from 4 to 8 weeks, including architecture design, testing, and cloud deployment.</p>
          </div>
        </div>

        {/* Interlinked Related Services */}
        {matchingServices.length > 0 && (
          <div className="modal-section">
            <h3>Related Services & Specializations</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
              {matchingServices.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    onClose();
                    if (onSelectService) onSelectService(s.id);
                  }}
                  style={{
                    background: "var(--accentColor)",
                    color: "#fff",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "0.8rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                  }}
                >
                  {s.title} <MdArrowOutward />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="modal-actions" style={{ marginTop: "25px" }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn"
            aria-label={`Inquire about ${project.title} architecture via WhatsApp`}
            style={{ background: "var(--accentColor)", color: "#fff", border: "none" }}
          >
            Inquire About Similar Architecture <MdArrowOutward aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
