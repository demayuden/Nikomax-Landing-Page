import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import bgVideo from "../../assets/videos/5.mp4";

const FinalCTA = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // slightly slower for dramatic ending
    }
  }, []);

  return (
    <section className="section video-section final-cta">
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

      {/* Overlay */}
      <div className="section-overlay" />

      {/* Content */}
      <div className="section-center">
        <h2>Ready to Level Up Your Business?</h2>

        <p>
          Don’t leave your project’s longevity to chance. Join the next
          certification wave and start offering the reliability Nikomax
          is known for worldwide.
        </p>

        <button
          className="btn-primary"
          onClick={() => navigate("/register")}
        >
          Register for Certification
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
