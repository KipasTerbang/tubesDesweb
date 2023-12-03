import { SEO } from "../components";
import { Hero, TrendingMovie, TrendingTv } from "../container";

const Home = () => {
  return (
    <>
      <SEO title="FindingMovies" />
      <section>
        <Hero />
        <TrendingMovie />
        <TrendingTv />
      </section>
    </>
  );
};

export default Home;
