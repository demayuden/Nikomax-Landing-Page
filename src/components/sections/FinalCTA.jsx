import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="section final-cta">
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
    </section>
  );
};

export default FinalCTA;
