import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Reviews from "./Reviews";
import FAQ from "./FAQ";
import setSplitText from "./utils/splitText";
import TechStack from "./TechStack";

import { ServiceModal } from "./ServiceModal";
import { BlogModal } from "./BlogModal";
import CaseStudyModal from "./CaseStudyModal";

import { servicesData, ServiceDetail } from "../data/servicesData";
import { projectsData, CaseStudy } from "../data/projectsData";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  // Modal State
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [isBlogOpen, setIsBlogOpen] = useState<boolean>(false);
  const [activeBlogSlug, setActiveBlogSlug] = useState<string | null>(null);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  // Handle Hash Routing Deep-Links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#services-") || hash.startsWith("#service-")) {
        const slug = hash.replace("#services-", "").replace("#service-", "");
        const matched = servicesData.find((s) => s.slug === slug || s.id === slug);
        if (matched) setSelectedService(matched);
      } else if (hash.startsWith("#blog")) {
        setIsBlogOpen(true);
        if (hash.startsWith("#blog-")) {
          const postSlug = hash.replace("#blog-", "");
          setActiveBlogSlug(postSlug);
        }
      } else if (hash.startsWith("#work-") || hash.startsWith("#project-")) {
        const pId = hash.replace("#work-", "").replace("#project-", "");
        const matchedP = projectsData.find((p) => p.id === pId);
        if (matchedP) setSelectedProject(matchedP);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Listen for global custom events from Navbar & WhatIDo & Work components
  useEffect(() => {
    const handleOpenBlog = (e: Event) => {
      const customEvt = e as CustomEvent;
      setIsBlogOpen(true);
      if (customEvt.detail?.slug) {
        setActiveBlogSlug(customEvt.detail.slug);
      }
    };

    const handleOpenService = (e: Event) => {
      const customEvt = e as CustomEvent;
      if (customEvt.detail?.serviceId) {
        const found = servicesData.find((s) => s.id === customEvt.detail.serviceId || s.slug === customEvt.detail.serviceId);
        if (found) setSelectedService(found);
      }
    };

    const handleOpenProject = (e: Event) => {
      const customEvt = e as CustomEvent;
      if (customEvt.detail?.projectId) {
        const found = projectsData.find((p) => p.id === customEvt.detail.projectId);
        if (found) setSelectedProject(found);
      }
    };

    window.addEventListener("open-blog", handleOpenBlog);
    window.addEventListener("open-service", handleOpenService);
    window.addEventListener("open-project", handleOpenProject);

    return () => {
      window.removeEventListener("open-blog", handleOpenBlog);
      window.removeEventListener("open-service", handleOpenService);
      window.removeEventListener("open-project", handleOpenProject);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar onOpenBlog={() => setIsBlogOpen(true)} />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="container-main" id="main-content">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo onSelectService={(sId) => {
              const matched = servicesData.find((s) => s.id === sId || s.slug === sId);
              if (matched) setSelectedService(matched);
            }} />
            <Career />
            <Work onSelectProject={(pId) => {
              const matched = projectsData.find((p) => p.id === pId);
              if (matched) setSelectedProject(matched);
            }} />
            {isDesktopView && <TechStack />}
            <Reviews />
            <FAQ />
            <Contact />
          </main>
        </div>
      </div>

      {/* Modals & Pages */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectProject={(pId) => {
          const foundP = projectsData.find((p) => p.id === pId);
          if (foundP) setSelectedProject(foundP);
        }}
      />

      <BlogModal
        isOpen={isBlogOpen}
        onClose={() => {
          setIsBlogOpen(false);
          setActiveBlogSlug(null);
        }}
        initialPostSlug={activeBlogSlug}
        onSelectService={(sId) => {
          const foundS = servicesData.find((s) => s.id === sId);
          if (foundS) setSelectedService(foundS);
        }}
        onSelectProject={(pId) => {
          const foundP = projectsData.find((p) => p.id === pId);
          if (foundP) setSelectedProject(foundP);
        }}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectService={(sId) => {
          const foundS = servicesData.find((s) => s.id === sId);
          if (foundS) setSelectedService(foundS);
        }}
      />
    </div>
  );
};

export default MainContainer;
