import fiberImage from "../../assets/images/fiber-installation.png";

const Context = () => {
  return (
    <section
      className="section context-bg"
      style={{
        backgroundImage: `linear-gradient(
          rgba(255,255,255,0.9),
          rgba(255,255,255,0.9)
        ), url(${fiberImage})`,
      }}
    >
      <div className="section-center">
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
    </section>
  );
};

export default Context;
