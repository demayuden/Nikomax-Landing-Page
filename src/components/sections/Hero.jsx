import heroVideo from "../../assets/videos/hero-bg.mp4";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero video-hero">
      {/* Background Video */}
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">Unlock the 25-Year Advantage</h1>
        <h2 className="hero-subtitle">
          Become a Nikomax Certified Installer
        </h2>
        <p className="hero-description">
          Move beyond standard installations. Offer your clients
          manufacturer-backed reliability with a 25-year system warranty.
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

export default Hero;
