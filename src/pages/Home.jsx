import SEO from "../components/SEO";
import { Hero } from "../container";
import TrendingMovie from "../container/Home/TrendingMovie";
import TrendingTv from "../container/Home/TrendingTv";

const Home = () => {
  return (
    <>
      <SEO title="Finding Movies" />
      <section>
        <Hero />
        <TrendingMovie />
        <TrendingTv />
      </section>
    </>
  );
};

export default Home;
