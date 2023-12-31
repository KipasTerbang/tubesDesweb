import ContentWrapper from "../Hoc/SectionWrapper";
import { Error, SEO } from "../components";
import {
  Cast,
  DetailsHeader,
  Recommend,
  Reviews,
  Similar,
  VideoClips,
} from "../container";
import {
  useGetTvCraditsQuery,
  useGetTvDetailsQuery,
  useGetTvRecommendQuery,
  useGetTvReviewsQuery,
  useGetTvSimilarQuery,
  useGetTvVideoQuery,
  useGetWatchTvQuery,
} from "../redux/TMDB";
import { useParams } from "react-router-dom";

const TvDetails = () => {
  const { tv_id } = useParams();
  const { data: details, isFetching, error } = useGetTvDetailsQuery(tv_id);
  const { data: platforms } = useGetWatchTvQuery(tv_id);
  const { data: credits, isFetching: castLoading } =
    useGetTvCraditsQuery(tv_id);
  const { data: videos, isFetching: videosLoading } = useGetTvVideoQuery(tv_id);
  const { data: reviews, isFetching: reviewsLoading } =
    useGetTvReviewsQuery(tv_id);
  const { data: similars, isFetching: similarsLoading } =
    useGetTvSimilarQuery(tv_id);
  const { data: recommends, isFetching: recommendsLoading } =
    useGetTvRecommendQuery(tv_id);

  console.log(videos);

  console.log(credits);

  const skeleton = () => {
    return (
      <ContentWrapper>
        <section className="w-full h-[600px] relative">
          <section className="w-full h-full flex justify-center items-start gap-10 p-10 absolute top-0 right-0 left-0 z-50 opacity-100 animate-pulse">
            <section className="w-[400px] h-[480px] bg-skeleton animate-pulse">
              <div className="w-full h-full object-cover object-center rounded " />
            </section>
            <section className="w-full h-full flex flex-col items-start justify-start gap- animate-pulse">
              <section className="w-[80%] full flex flex-col animate-pulse gap-5">
                <div className="w-[80%] h-6 bg-skeleton" />
                <div className="w-[70%] h-6 bg-skeleton"></div>
              </section>
              <section className="w-full h-full flex flex-col items-start gap-5 animate-pulse">
                <div className="w-[40%] h-6 bg-skeleton" />
                <div className="w-[50%] h-6 bg-skeleton" />
                <div className="w-full h-8 bg-skeleton" />
              </section>
              <section className="w-[70%] h- flex flex-col gap-5  animate-pulse">
                <div className="w-[50%] h-6 bg-skeleton" />
                <div className="w-[60%] h-6 bg-skeleton" />
                <div className="w-[65%] h-6 bg-skeleton" />
              </section>
            </section>
          </section>
        </section>
      </ContentWrapper>
    );
  };

  if (error) return <Error />;

  return (
    <>
      <SEO title={`${details?.name || details?.title} - Finding Movies`} />
      {!isFetching ? (
        <>
          {details && (
            <div className="w-full h-full mt-10 mb-20">
              <DetailsHeader
                details={details}
                platforms={platforms?.results?.IN}
                crew={credits?.crew}
                video={videos?.results?.[0]}
              />
              {credits?.cast && credits?.cast.length > 0 ? (
                <section className="py-10 flex flex-row gap-5">
                  <Cast casts={credits?.cast} loading={castLoading} />
                </section>
              ) : (
                <>
                  <ContentWrapper>No Cast Available </ContentWrapper>
                </>
              )}
              {videos && videos.length > 0 ? (
                <section className="py-10 flex flex-row gap-5">
                  <VideoClips videos={videos} loading={videosLoading} />
                </section>
              ) : (
                <ContentWrapper>No Videos Available</ContentWrapper>
              )}
              {reviews && reviews.results.length > 0 && (
                <section className="py-10 flex flex-row gap-5">
                  <Reviews reviews={reviews} loading={reviewsLoading} />
                </section>
              )}
              {similars && similars?.results?.length > 0 ? (
                <section className="py-10  flex flex-row gap-5">
                  <Similar similars={similars} loading={similarsLoading} />
                </section>
              ) : (
                <ContentWrapper>Not Available</ContentWrapper>
              )}
              {recommends && recommends?.results?.length > 0 ? (
                <section className="py-10 flex flex-row gap-5">
                  <Recommend
                    recommends={recommends}
                    loading={recommendsLoading}
                  />
                </section>
              ) : (
                <ContentWrapper>No Recomandation Available</ContentWrapper>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="">{skeleton()}</div>
      )}
    </>
  );
};

export default TvDetails;
