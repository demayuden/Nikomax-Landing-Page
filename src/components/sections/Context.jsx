import fiberImage from "../../assets/images/fiber-installation.png";

const Context = () => {
  return (
    <section className="section">
      <div className="image-text">
        <div className="image-text-content">
          <h2 className="section-title">
            Why Guarantees Matter in Structured Cabling
          </h2>

          <p className="section-text">
            In the world of Structured Cabling Systems (SCS), the difference
            between a "job done" and a "job secured" lies in the guarantee.
            As connectivity demands reach new heights, clients are no longer
            looking for cables—they are looking for long-term peace of mind.
          </p>

          <p className="section-text">
            A certified installation ensures performance, compliance,
            and manufacturer-backed reliability across the entire system lifecycle.
          </p>
        </div>

        <div className="image-text-image">
          <img src={fiberImage} alt="Fiber optic cabling installation" />
        </div>
      </div>
    </section>
  );
};

export default Context;
