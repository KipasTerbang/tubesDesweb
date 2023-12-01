import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home } from "./pages";
import { Popular, Upcoming } from "./pages/Movie";
import { PopularTv } from "./pages/Tv";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

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
