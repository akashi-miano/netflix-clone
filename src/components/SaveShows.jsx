import {useState, useEffect} from 'react'
import { UserAuth } from '../context/AuthContext'
import {db} from "../firebase"
import {updateDoc, doc, onSnapshot} from "firebase/firestore"
import {AiOutlineClose} from "react-icons/ai"

const SaveShows = () => {
    const [movies, setMovies] = useState([]);
    const {user} = UserAuth();

    useEffect(() => {
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
            setMovies(doc.data()?.saveShows)
        })
    }, [user?.email])

    const movieRef = doc(db, "users", `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
            const result = movies.filter((item) =>  item.id !== passedID);
            await updateDoc(movieRef, {
                saveShows: result,
            })
        } catch (error) {
            console.log(error);       
        }
    }

  return (
    <section className="py-16">
      <div className="container !mt-4">
        <header className="mb-4 text-center md:text-left">
          <h2 className="text-white font-bold text-4xl">My Shows</h2>
        </header>
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-0">
            {movies.map((item, id) => (
    <div key={id} className="flex justify-center">
      <div className="inline-block cursor-pointer relative p-2" key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
          className="w-full"
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full duration-300 hover:bg-black/80 opacity-0 text-white hover:opacity-100 flex justify-center items-center">
          <p className="text-xs md:text-sm font-bold">{item?.title}</p>
          <AiOutlineClose size={20} className='absolute top-4 right-4'
          onClick={() => deleteShow(item.id)}
           />
        </div>
      </div>
    </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SaveShows