import { useEffect, useRef } from "react";
import bgVideo from "../../assets/videos/bg.mp4";

const Context = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // smooth professional speed
    }
  }, []);

  return (
    <section className="section video-section">
    {/* Background Video */}
    <video
      ref={videoRef}
      className="section-video"
      src={bgVideo}
      autoPlay
      loop
      muted
      playsInline
    />

    {/* Overlay (THIS WAS MISSING) */}
    <div className="section-overlay" />

    {/* Content */}
    <div className="section-center context-layout">
      <div className="context-left">
        <div className="context-line" />

        <h2 className="context-title">
          Why Guarantees Matter in Structured Cabling
        </h2>

        <p className="context-text">
          In the world of <span className="highlight">Structured Cabling Systems (SCS)</span>, 
          the difference between a "job done" and a "job secured" lies in the guarantee.
        </p>

        <p className="context-text">
          As connectivity demands reach new heights, clients are no longer
          looking for cables—they are looking for <span className="highlight">long-term peace of mind</span>.
        </p>

        <p className="context-text">
          A certified installation ensures performance, compliance,
          and manufacturer-backed reliability across the entire system lifecycle.
        </p>
      </div>
    </div>
  </section>

  );
};

export default Context;
