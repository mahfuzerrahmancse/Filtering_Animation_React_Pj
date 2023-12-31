import './App.css';
import { useEffect, useState } from 'react'
import Movie from './functions/Movie';
import { Filter } from './functions/Filter';
import {motion, AnimatePresence} from 'framer-motion'

function App() {
  const [popular,setPopular]=useState([]);
  const [filtered,setFiltered]=useState([]);
  const [activeGenre,setActiveGenre]=useState(0);

  useEffect(()=>{
    fetchPopular();
  },[]);

  const fetchPopular=async()=>{
    // const data =await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a37df64b3019c16fa89b3640985b747e&language=en-US&page=1`);
    const data =await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=1`);
    const movies=await data.json();
    // console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  }

  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} layout className='popular-movies'>
        <AnimatePresence>
          {filtered.map(movie => {
          return <Movie key={movie.id} movie={movie} />;
})}

        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
