import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  return (
    <section className="">
      <div className="container !mt-4">
        <header className="mb-4 text-center md:text-left">
          <h2 className="text-white font-bold text-4xl">{title}</h2>
        </header>
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-0">
            {movies.map((item, id) => (
              <Movie item={item} key={id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Row;
