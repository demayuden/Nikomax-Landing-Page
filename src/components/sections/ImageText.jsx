import certImage from "../../assets/images/certified-installer.png";

const ImageText = () => {
  return (
    <section className="section">
      <div className="image-text">
        <div className="image-text-content">
          <h2 className="section-title">
            More Than Installation — It’s a Certification
          </h2>
          <p className="section-text">
            Becoming a Nikomax Authorized Installer positions your business
            as a trusted, manufacturer-backed partner capable of delivering
            long-term structured cabling reliability.
          </p>
        </div>

        <div className="image-text-image">
          <img src={certImage} alt="Certified Installer" />
        </div>
      </div>
    </section>
  );
};

export default ImageText;
