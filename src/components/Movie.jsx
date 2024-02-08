import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const Movie = ({ item, id }) => {
  const [like, setLike] = useState(false);
  return (
    <div key={id} className="flex justify-center">
      <div className="inline-block cursor-pointer relative p-2" key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          className="w-full"
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full duration-300 hover:bg-black/80 opacity-0 text-white hover:opacity-100 flex justify-center items-center">
          <p className="text-xs md:text-sm font-bold">{item?.title}</p>
          <p className="text-xs md:text-sm font-bold absolute top-5 left-5">
            {like ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
