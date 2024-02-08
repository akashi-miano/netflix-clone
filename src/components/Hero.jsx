import axios from "axios";
import requests from "../Requests";
import { useEffect, useState } from "react";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  return (
    <section className="w-full h-[575px] text-white mb-20">
      <div className="w-full h-full">
        <div className="gradient"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="container">
        <header className="absolute top-1/4  flow-content--m">
          <h1 className="text-5xl font-bold max-w-[550px]">{movie?.title}</h1>
          <div className="btn-wrapper flex items-center gap-4">
            <a
              href=""
              className="btn bg-white text-zinc-900 text-md rounded-md hover:bg-black hover:text-white duration-300 focus:bg-black focus:text-white px-8 py-2"
            >
              Play
            </a>
            <a
              href=""
              className="btn bg-transparent text-zinc-200 text-md border-2 border-zinc-500 rounded-md hover:bg-zinc-500 hover:text-white duration-300 focus:bg-zinc-400 focus:text-white px-8 py-2"
            >
              Watch Later
            </a>
          </div>
          <span className="block text-zinc-300">{movie?.release_date}</span>
          <p className="text-md max-w-[550px]">{movie?.overview}</p>
        </header>
      </div>
    </section>
  );
};

export default Hero;
