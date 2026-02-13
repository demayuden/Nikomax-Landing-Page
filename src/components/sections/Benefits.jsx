import { useEffect, useRef } from "react";
import benefitVideo from "../../assets/videos/1.mp4";

const Benefits = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // 🔽 slower (0.5–0.7 is ideal)
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
        <h2 className="section-title">
          More Than Installation — It’s a Certification
        </h2>

        <p className="section-text">
          Becoming a Nikomax Authorized Installer positions your business
          as a trusted, manufacturer-backed partner capable of delivering
          long-term structured cabling reliability.
        </p>

        <h2 className="section-title">Why Get Certified?</h2>

        <div className="benefits-cards">
          <div className="benefit-card">
            <h3>25-Year System Warranty</h3>
            <p>
              Offer a quarter-century of guaranteed performance on full
              Nikomax installations.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Direct Technical Support</h3>
            <p>
              Gain priority access to expert engineers for project design
              and troubleshooting.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Boost Your Win Rate</h3>
            <p>
              Stand out in tenders that require manufacturer-backed certification.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Advanced Training</h3>
            <p>
              Master the latest copper and fiber optic technologies through
              hands-on workshops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
