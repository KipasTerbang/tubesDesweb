import SEO from "../components/SEO";
import { Hero } from "../container";
import TrendingMovie from "../container/Home/TrendingMovie";
import TrendingPeople from "../container/Home/TrendingPeople";

const Home = () => {
  return (
    <>
    <SEO title="The Movie Database (TMDB)"/>
      <section>
        <Hero />
        <TrendingMovie/>
        <TrendingPeople/>
      </section>
    </>
  );
};

export default Home;
