import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_REACT_API_TOKEN;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: () => `/discover/movie`,
    }),
    getPopularMovie: builder.query({
      query: (pageNum) => `/movie/popular?page=${pageNum}`,
    }),
    getUpcomingMovie: builder.query({
      query: (pageNum) => `/movie/upcoming?page=${pageNum}`,
    }),
    getTvPopular: builder.query({
      query: (pageNum) => `/tv/popular?page=${pageNum}`,
    }),
    getGenresData: builder.query({
      query: (media_type) => `genre/${media_type}/list`,
    }),
  }),
});

export const { 
  useGetMovieQuery,
  useGetPopularMovieQuery,
  useGetUpcomingMovieQuery,
  useGetTvPopularQuery,
  useGetGenresDataQuery 
} = tmdbApi;
