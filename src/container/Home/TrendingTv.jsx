import { useState } from "react";
import ContentWrapper from "../../Hoc/SectionWrapper";
import { useGetTrendingTvQuery } from "../../redux/TMDB";
import Error from "../../components/Error";
import TabSwitch from "../../components/TabSwitch";
import MovieCard from "../../components/MovieCard";

const TrendingTv = () => {
  const [time, setTime] = useState("day");
  const { data: TvShows, isFetching, error } = useGetTrendingTvQuery(time);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 8;

  const handleTabChange = (tab) => {
    setTime(tab);
    setStartIndex(0);
  };

  const nextSlide = () => {
    setStartIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const Skeleton = () => {
    return (
      <main className="w-36 sm:w-40 h-60  animate-pulse flex flex-col items-center justify-center gap-2">
        <div className="w-full h-full bg-skeleton rounded " />
        <section className="w-full flex flex-col gap-2 ">
          <div className="w-full h-4 bg-skeleton rounded" />
          <div className="w-[80%] h-4 bg-skeleton rounded" />
        </section>
      </main>
    );
  };

  if (error) return <Error />;

  return (
    <>
      <ContentWrapper>
        <div className="w-full h-full py-1 flex flex-col gap-10 overflow-x-auto">
          <section className="w-full flex items-center gap-10">
            <h1 className="textheader">Trending Tv Shows </h1>
            <TabSwitch onTabChange={handleTabChange} />
          </section>
          <div className="flex-shrink-0 overflow-x-auto relative">
            {!isFetching ? (
              <>
                <main className="flex gap-5">
                  {TvShows?.results
                    ?.slice(startIndex, startIndex + itemsPerPage)
                    .map((Media) => (
                      <div key={Media.id}>
                        <MovieCard Media={Media} />
                      </div>
                    ))}
                </main>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <button
                    onClick={prevSlide}
                    className={`btn btn-circle ${
                      startIndex === 0 ? "hidden" : ""
                    } text-xl text-blue font-bold`}
                  >
                    ❮
                  </button>
                  <button
                    onClick={nextSlide}
                    className={`btn btn-circle ${
                      startIndex + itemsPerPage >=
                      (TvShows?.results?.length || 0)
                        ? "hidden"
                        : ""
                    } text-xl text-blue font-bold`}
                  >
                    ❯
                  </button>
                </div>
              </>
            ) : (
              <div className="flex gap-2">
                {Array.from({ length: itemsPerPage }).map((_, index) => (
                  <div key={index}>
                    <Skeleton />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default TrendingTv;
