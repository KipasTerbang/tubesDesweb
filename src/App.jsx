import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home, Search, MovieDetails, TvDetails } from "./pages";
import { Popular, Upcoming } from "./pages/Movie";
import { PopularTv } from "./pages/Tv";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Favorite from "./pages/Favorite";

const App = () => {
  return (
    <>
      <section className="w-full mx-auto overflow-hidden bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/popular" element={<Popular />} />
          <Route path="/movie/upcoming" element={<Upcoming />} />
          <Route path="/tv/popular-tv" element={<PopularTv />} />
          <Route path="/movie/:movie_id" element={<MovieDetails />} />
          <Route path="/tv/:tv_id" element={<TvDetails />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </section>
    </>
  );
};

export default App;
