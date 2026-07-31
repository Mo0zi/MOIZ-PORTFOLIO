import { useEffect, useRef } from "react";
import { useLoading } from "../../context/LoadingProvider";

const Scene = () => {
  const { setLoading, setIsLoading } = useLoading();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const onLoad = () => {
      setTimeout(() => {
        setLoading(100);
        setTimeout(() => {
          setIsLoading(false);
          containerRef.current?.classList.add("character-loaded");
        }, 600);
      }, 800);
    };

    if (img.complete) {
      onLoad();
    } else {
      img.addEventListener("load", onLoad);
    }

    // Subtle parallax mouse-tilt — replaces 3D head-bone rotation
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      if (imgRef.current) {
        imgRef.current.style.transform = `
          translateX(-50%)
          rotateY(${dx * 6}deg)
          rotateX(${-dy * 4}deg)
          scale(1.02)
        `;
      }
    };

    const handleMouseLeave = () => {
      if (imgRef.current) {
        imgRef.current.style.transform =
          "translateX(-50%) rotateY(0deg) rotateX(0deg) scale(1)";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      img.removeEventListener("load", onLoad);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [setLoading, setIsLoading]);

  return (
    <div className="character-container">
      <div className="character-model avatar-image-model" ref={containerRef}>
        <div className="character-rim" />
        <img
          ref={imgRef}
          src="/images/moiz-avatar.png"
          alt="Moiz Ahmed — Avatar"
          className="avatar-img"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Scene;
