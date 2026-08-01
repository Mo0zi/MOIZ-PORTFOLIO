import { CaseStudy } from "../data/projectsData";
import { MdClose, MdArrowOutward } from "react-icons/md";
import "./styles/CaseStudyModal.css";

interface Props {
  project: CaseStudy | null;
  onClose: () => void;
}

const CaseStudyModal = ({ project, onClose }: Props) => {
  if (!project) return null;

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
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close Case Study Modal"
        >
          <MdClose aria-hidden="true" />
        </button>

        <div className="modal-header">
          <h2 id="case-study-title" itemProp="name">{project.title}</h2>
          <p className="modal-category">
            <span itemProp="applicationCategory">{project.category}</span> · <span itemProp="operatingSystem">Web</span> · {project.tools}
          </p>
        </div>

        <p className="modal-summary" itemProp="description">{project.summary}</p>

        <div className="modal-section">
          <h3>Problem Statement</h3>
          <p>{project.problem}</p>
        </div>

        <div className="modal-section">
          <h3>System Architecture</h3>
          <ul>
            {project.architecture.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <h3>Technical Challenge & Solution</h3>
          <p><strong>Challenge:</strong> {project.challenges}</p>
          <p style={{ marginTop: "8px" }}><strong>Solution:</strong> {project.solution}</p>
        </div>

        <div className="modal-section">
          <h3>Performance Metrics & Results</h3>
          <div className="modal-metrics">
            {project.metrics.map((metric, idx) => (
              <div className="metric-card" key={idx}>
                {metric}
              </div>
            ))}
          </div>
        </div>

        <div className="modal-actions">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn"
            aria-label={`View ${project.title} GitHub Repository`}
          >
            View GitHub Repository <MdArrowOutward aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
