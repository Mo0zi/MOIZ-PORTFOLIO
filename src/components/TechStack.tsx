import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";
import { MdClose, MdArrowOutward, MdCheckCircle, MdCode, MdLayers } from "react-icons/md";
import "./styles/CaseStudyModal.css";

interface TechItem {
  id: string;
  name: string;
  category: string;
  proficiency: string;
  textureUrl: string;
  description: string;
  keySkills: string[];
  featuredProjects: { title: string; id: string }[];
  relatedServiceId: string;
}

const techListData: TechItem[] = [
  {
    id: "react",
    name: "React.js",
    category: "Frontend Framework",
    proficiency: "Expert (95%)",
    textureUrl: "/images/react2.webp",
    description: "Architecting high-performance single page applications (SPAs), reactive state management, custom hook libraries, and dynamic WebGL 3D canvas integrations.",
    keySkills: ["React 18+", "Custom Hooks", "Context API", "Vite", "GSAP Animations", "WebGL Integration"],
    featuredProjects: [
      { title: "StitchSmart AI eCommerce", id: "stitchsmart" },
      { title: "MarketGO AI Automation", id: "marketgo-ai" },
      { title: "Moiz Ahmed Portfolio", id: "portfolio-website" }
    ],
    relatedServiceId: "full-stack-development"
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "React Framework",
    proficiency: "Expert (90%)",
    textureUrl: "/images/next2.webp",
    description: "Building production server-side rendered (SSR) web platforms, static site generation (SSG), App Router API endpoints, and Core Web Vitals speed optimization.",
    keySkills: ["App Router", "SSR / SSG", "API Routes", "Core Web Vitals", "SEO Optimization"],
    featuredProjects: [
      { title: "StitchSmart AI SaaS", id: "stitchsmart" }
    ],
    relatedServiceId: "custom-website-development"
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend Runtime",
    proficiency: "Expert (95%)",
    textureUrl: "/images/node2.webp",
    description: "Event-driven asynchronous backend servers, high-concurrency API gateways, Server-Sent Events (SSE) LLM response streaming, and microservice architectures.",
    keySkills: ["Event Loop", "Asynchronous I/O", "REST API Gateways", "SSE Streaming", "npm Packages"],
    featuredProjects: [
      { title: "StitchSmart AI RAG Gateway", id: "stitchsmart" },
      { title: "MarketGO AI Task Queue", id: "marketgo-ai" }
    ],
    relatedServiceId: "full-stack-development"
  },
  {
    id: "express",
    name: "Express.js",
    category: "Node.js Web Framework",
    proficiency: "Expert (95%)",
    textureUrl: "/images/express.webp",
    description: "Lightweight backend API framework managing CORS, OAuth2 security, rate-limiting middleware, webhook endpoints, and database connection pooling.",
    keySkills: ["REST Gateways", "Middleware Chains", "JWT Authentication", "Rate Limiting"],
    featuredProjects: [
      { title: "StitchSmart AI REST Gateway", id: "stitchsmart" },
      { title: "MarketGO AI Backend", id: "marketgo-ai" }
    ],
    relatedServiceId: "api-integration"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "NoSQL Database",
    proficiency: "Advanced (90%)",
    textureUrl: "/images/mongo.webp",
    description: "High-volume document database modeling, index optimization, aggregation pipelines, and JSON document store architectures for SaaS applications.",
    keySkills: ["BSON Schemas", "Aggregation Pipelines", "Mongoose ODM", "Index Tuning"],
    featuredProjects: [
      { title: "StitchSmart AI eCommerce", id: "stitchsmart" }
    ],
    relatedServiceId: "full-stack-development"
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Relational Database",
    proficiency: "Expert (98%)",
    textureUrl: "/images/mysql.webp",
    description: "Transaction-safe relational database schemas, complex multi-table JOIN indexing, financial ledger tracking, and piece-rate manufacturing worker accounting.",
    keySkills: ["Relational ERD Design", "ACID Transactions", "Query Optimization", "Stored Procedures"],
    featuredProjects: [
      { title: "PARWAY Manufacturing ERP", id: "parway-erp" },
      { title: "Haash Wears B2B Portal", id: "haash-wears" },
      { title: "CCPD Enterprise Platform", id: "ccpd-platform" }
    ],
    relatedServiceId: "full-stack-development"
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Programming Language",
    proficiency: "Expert (92%)",
    textureUrl: "/images/typescript.webp",
    description: "Statically typed JavaScript for robust full stack application development, interface contracts, strict compile-time error detection, and clean code maintenance.",
    keySkills: ["Generic Types", "Interface Schemas", "Strict Mode", "Vite TS Build"],
    featuredProjects: [
      { title: "Moiz Ahmed Portfolio Platform", id: "portfolio-website" },
      { title: "MarketGO AI Suite", id: "marketgo-ai" }
    ],
    relatedServiceId: "full-stack-development"
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Core Web Language",
    proficiency: "Expert (98%)",
    textureUrl: "/images/javascript.webp",
    description: "Modern JavaScript development spanning async/await promises, ES6+ modules, DOM manipulation, custom animation pipelines, and WebGL 3D canvas rendering.",
    keySkills: ["ES6+ Modules", "Async / Await", "DOM Performance", "WebGL Canvas"],
    featuredProjects: [
      { title: "PARWAY Manufacturing ERP", id: "parway-erp" },
      { title: "Haash Wears B2B Engine", id: "haash-wears" }
    ],
    relatedServiceId: "full-stack-development"
  },
  {
    id: "python-langchain",
    name: "Python & LangChain",
    category: "AI & Machine Learning",
    proficiency: "Expert (95%)",
    textureUrl: "/images/react2.webp",
    description: "Building autonomous Agentic AI systems, LangChain multi-agent orchestration, FAISS vector indexing, and Google Gemini API / OpenAI LLM integrations.",
    keySkills: ["LangChain Agents", "FAISS Vector DB", "RAG Architecture", "Gemini API", "FastAPI"],
    featuredProjects: [
      { title: "StitchSmart AI RAG Pipeline", id: "stitchsmart" },
      { title: "MarketGO Multi-Agent SaaS", id: "marketgo-ai" }
    ],
    relatedServiceId: "agentic-ai-development"
  },
  {
    id: "n8n-automation",
    name: "n8n & Workflow Automation",
    category: "Automation Engine",
    proficiency: "Expert (95%)",
    textureUrl: "/images/node2.webp",
    description: "Self-hosted Docker n8n workflows, WhatsApp Cloud API sales funnels, CRM synchronization, automated PDF invoice processing, and zero per-task execution fees.",
    keySkills: ["n8n Self-Hosted", "WhatsApp Cloud API", "Webhook Gateways", "CRM Automation"],
    featuredProjects: [
      { title: "MarketGO AI Workflows", id: "marketgo-ai" },
      { title: "PARWAY ERP Automations", id: "parway-erp" }
    ],
    relatedServiceId: "n8n-automation"
  },
  {
    id: "php-mvc",
    name: "PHP MVC Architecture",
    category: "Enterprise Backend",
    proficiency: "Expert (95%)",
    textureUrl: "/images/express.webp",
    description: "Lightweight custom PHP MVC framework development with sub-150ms TTFB response times, bitwise role-based access control (RBAC), and manufacturing ERP software.",
    keySkills: ["Custom PHP MVC", "Bitwise RBAC", "MySQL PDO", "CSRF Security", "Query Caching"],
    featuredProjects: [
      { title: "PARWAY Apparel ERP", id: "parway-erp" },
      { title: "Haash Wears B2B Wholesale", id: "haash-wears" },
      { title: "CCPD Institutional Portal", id: "ccpd-platform" }
    ],
    relatedServiceId: "custom-website-development"
  }
];

const textureLoader = new THREE.TextureLoader();
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheresData = [...Array(30)].map((_, idx) => ({
  scale: [0.7, 1, 0.8, 1, 1][idx % 5],
  techItem: techListData[idx % techListData.length]
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
  techItem: TechItem;
  onSelect: (tech: TechItem) => void;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
  techItem,
  onSelect,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(techItem);
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const targetElem = document.getElementById("work");
      if (targetElem) {
        const threshold = targetElem.getBoundingClientRect().top;
        setIsActive(scrollY > threshold);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const materialsMap = useMemo(() => {
    const map = new Map<string, THREE.MeshPhysicalMaterial>();
    techListData.forEach((t) => {
      const tex = textureLoader.load(t.textureUrl);
      map.set(
        t.id,
        new THREE.MeshPhysicalMaterial({
          map: tex,
          emissive: "#ffffff",
          emissiveMap: tex,
          emissiveIntensity: 0.3,
          metalness: 0.5,
          roughness: 1,
          clearcoat: 0.1,
        })
      );
    });
    return map;
  }, []);

  return (
    <section
      className="techstack"
      id="tech-stack"
      aria-label="Technology Stack — Programming Languages & Frameworks used by Moiz Ahmed"
      style={{ position: "relative", zIndex: 10 }}
    >
      <h2 style={{ textAlign: "center" }}> My Techstack</h2>
      <p style={{ textAlign: "center", opacity: 0.7, fontSize: "0.88rem", marginTop: "-10px", marginBottom: "20px" }}>
        💡 Click any 3D ball or technology badge below for skill details, proficiency metrics & case studies.
      </p>

      {/* Interactive Tech Badge Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          maxWidth: "900px",
          margin: "0 auto 25px auto",
          padding: "0 15px",
        }}
      >
        {techListData.map((tech) => (
          <button
            key={tech.id}
            onClick={() => setSelectedTech(tech)}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              color: "#fff",
              padding: "6px 14px",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "0.82rem",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accentColor)";
              e.currentTarget.style.background = "rgba(123, 47, 255, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
            }}
          >
            <MdLayers style={{ color: "var(--accentColor)" }} /> {tech.name}
          </button>
        ))}
      </div>

      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
        aria-label="Interactive 3D Tech Stack Visualization — React, Next.js, Node.js, Express, MongoDB, MySQL, TypeScript, JavaScript"
        role="img"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheresData.map((props, i) => {
            const mat = materialsMap.get(props.techItem.id) || Array.from(materialsMap.values())[0];
            return (
              <SphereGeo
                key={i}
                scale={props.scale}
                techItem={props.techItem}
                material={mat}
                isActive={isActive}
                onSelect={(t) => setSelectedTech(t)}
              />
            );
          })}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>

      {/* Technology Detail Modal Popup */}
      {selectedTech && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedTech(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="tech-modal-title"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "650px", padding: "30px" }}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedTech(null)}
              aria-label="Close tech detail modal"
            >
              <MdClose aria-hidden="true" />
            </button>

            <div className="modal-header">
              <span className="modal-category" style={{ color: "var(--accentColor)", fontWeight: 600 }}>
                {selectedTech.category} · {selectedTech.proficiency}
              </span>
              <h2 id="tech-modal-title" style={{ fontSize: "1.8rem", color: "#fff", margin: "8px 0" }}>
                {selectedTech.name}
              </h2>
            </div>

            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#ddd", margin: "15px 0 20px 0" }}>
              {selectedTech.description}
            </p>

            <div className="modal-section" style={{ marginBottom: "20px" }}>
              <h4 style={{ color: "#fff", margin: "0 0 10px 0", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "6px" }}>
                <MdCode style={{ color: "var(--accentColor)" }} /> Key Concepts & Architecture Skills:
              </h4>
              <div className="what-content-flex">
                {selectedTech.keySkills.map((skill, idx) => (
                  <span key={idx} className="what-tags" style={{ fontSize: "0.78rem" }}>
                    <MdCheckCircle style={{ color: "var(--accentColor)", display: "inline", marginRight: "3px" }} /> {skill}
                  </span>
                ))}
              </div>
            </div>

            {selectedTech.featuredProjects.length > 0 && (
              <div className="modal-section" style={{ marginBottom: "20px" }}>
                <h4 style={{ color: "#fff", margin: "0 0 10px 0", fontSize: "0.9rem" }}>
                  Featured Case Studies & Projects Built With {selectedTech.name}:
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {selectedTech.featuredProjects.map((p, idx) => (
                    <a
                      key={idx}
                      href={`#work-${p.id}`}
                      onClick={() => setSelectedTech(null)}
                      style={{
                        background: "rgba(123, 47, 255, 0.15)",
                        border: "1px solid var(--accentColor)",
                        color: "#fff",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontSize: "0.82rem",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px"
                      }}
                    >
                      {p.title} <MdArrowOutward style={{ fontSize: "0.75rem" }} />
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-actions" style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
              <a
                href={`#services-${selectedTech.relatedServiceId}`}
                onClick={() => setSelectedTech(null)}
                className="modal-btn"
                style={{ background: "var(--accentColor)", color: "#fff", border: "none", cursor: "pointer" }}
              >
                View Related Services <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechStack;
