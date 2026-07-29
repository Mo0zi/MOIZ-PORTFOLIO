import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
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

  // Re-calculate and refresh after everything loads to sync ScrollTrigger
  setTimeout(() => {
    setTranslateX();
    ScrollTrigger.refresh();
  }, 1500);

  // Clean up
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  const projects = [
    {
      title: "StitchSmart",
      category: "AI · eCommerce · Full Stack",
      tools: "React, Node.js, MongoDB, Google Gemini API, RAG, FAISS",
      link: "https://github.com/Mo0zi",
      image: "/images/ecommerce_project.png",
    },
    {
      title: "MarketGO AI",
      category: "Agentic AI · Marketing SaaS",
      tools: "LangChain, Agentic AI, React, Express.js, OpenAI API",
      link: "https://github.com/Mo0zi",
      image: "/images/ml_dashboard.png",
    },
    {
      title: "Haash Wears",
      category: "Full Stack · B2B · Web",
      tools: "PHP MVC, MySQL, JavaScript, SEO",
      link: "https://github.com/Mo0zi",
      image: "/images/portfolio_project.png",
    },
    {
      title: "CCPD Web Platform",
      category: "Full Stack · Enterprise",
      tools: "PHP MVC, MySQL, JavaScript, REST APIs",
      link: "https://github.com/Mo0zi",
      image: "/images/python_project.png",
    },
    {
      title: "Shopify Stores",
      category: "eCommerce · Shopify",
      tools: "Shopify, Liquid, JavaScript, SEO, Theme Dev",
      link: "https://github.com/Mo0zi",
      image: "/images/task_manager.png",
    },
    {
      title: "AI-Powered Solutions",
      category: "Freelance · AI · Full Stack",
      tools: "LangChain, RAG, FAISS, Gemini API, React, Node.js",
      link: "https://github.com/Mo0zi",
      image: "/images/api_service.png",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
