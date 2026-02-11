import certImage from "../../assets/images/certified-installer.png";

const ImageText = () => {
  return (
    <section
      className="section image-text-bg"
      style={{
        backgroundImage: `linear-gradient(
          rgba(2,6,23,0.7),
          rgba(2,6,23,0.85)
        ), url(${certImage})`,
      }}
    >
      <div className="section-center">
        <h2 className="section-title">
          More Than Installation — It’s a Certification
        </h2>

        <p className="section-text">
          Becoming a Nikomax Authorized Installer positions your business
          as a trusted, manufacturer-backed partner capable of delivering
          long-term structured cabling reliability.
        </p>
      </div>
    </section>
  );
};

export default ImageText;
