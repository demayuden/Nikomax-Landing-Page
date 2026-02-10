import heroImage from "../../assets/images/hero-cabling.png";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(
          rgba(2,6,23,0.75),
          rgba(2,6,23,0.85)
        ), url(${heroImage})`,
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Unlock the 25-Year Advantage</h1>
        <h2 className="hero-subtitle">
          Become a Nikomax Certified Installer
        </h2>
        <p className="hero-description">
          Move beyond standard installations. Offer your clients
          manufacturer-backed reliability with a 25-year system warranty.
        </p>
        <button className="btn-primary">
          Register for Certification
        </button>
      </div>
    </section>
  );
};

export default Hero;
