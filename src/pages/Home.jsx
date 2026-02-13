import Hero from "../components/sections/Hero";
import Context from "../components/sections/Context";
import Benefits from "../components/sections/Benefits";
import FinalCTA from "../components/sections/FinalCTA";

const Home = () => {
  return (
    <main className="snap-container">
      <section className="snap-section">
        <Hero />
      </section>

      <section className="snap-section">
        <Context />
      </section>

      <section className="snap-section">
        <Benefits />
      </section>

      <section className="snap-section">
        <FinalCTA />
      </section>
    </main>
  );
};

export default Home;
