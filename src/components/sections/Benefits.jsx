import { useEffect, useRef } from "react";
import benefitVideo from "../../assets/videos/1.mp4";

const Benefits = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // 🔽 slower (0.5–0.7 is ideal)
    }
  }, []);

  return (
    <section className="section benefits video-section">
      <video
        ref={videoRef}
        className="section-video"
        src={benefitVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="section-overlay" />

      {/* Content */}
      <div className="section-center">
        <h2 className="section-title">Why Get Certified?</h2>

        <div className="benefits-wrapper">
          <ul className="benefits-list">
            <li>
              <strong>25-Year System Warranty</strong> – Offer a quarter-century
              of guaranteed performance on full Nikomax installations.
            </li>
            <li>
              <strong>Direct Technical Support</strong> – Priority access to
              expert engineers for project design and troubleshooting.
            </li>
            <li>
              <strong>Boost Your Win Rate</strong> – Stand out in tenders that
              require manufacturer-backed certification.
            </li>
            <li>
              <strong>Advanced Training</strong> – Hands-on workshops covering
              the latest copper and fiber optic technologies.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
