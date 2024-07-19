import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MoviesList';
import { fetchMovies, fetchRandomDogImage} from "./components/Apis"
import NavScrollExample from './components/Navbar';
import {ColorRing} from "react-loader-spinner"

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show,setShow]=useState(true);
  const [dataerr,setDataerr]=useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setMovies([]);
    setDataerr(false);
    setLoading(true);
    setShow(false);
    setError(null);
    try {
      const movieData = await fetchMovies(query);
      const moviesWithImages = await Promise.all(
        movieData.map(async (movie) => {
          const imageUrl = await fetchRandomDogImage();
          return { ...movie, imageUrl };
        })
      );
      if(moviesWithImages.length<=0)
      {
        setDataerr(true);
      }
      setMovies(moviesWithImages);
    } catch (error) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

const Loader=()=>
{    
  return(
    <div className='loader-con'>
    <ColorRing
    visible={true}
    height="60"
    width="60"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    wrapperClass="color-ring-wrapper"
    colors={['white',"white","white","white","white"]}
    />
    </div>
) 
}

const networnErr=()=>
{
  return(
    <div className='nofoundimgcon'>
      <img className='nodatafoundimg' alt="networkerr" src='https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-network-error-alert-internet-connection-png-image_5248864.png' />
      <h1 className='text-white no-data-text'>Network error.Try again or Try again later!!</h1>
    </div>
  )
}

   console.log(movies);
  return (
    <div className="bg-con">
      <NavScrollExample  onSearch={handleSearch}/>
      
      {/* <SearchBar onSearch={handleSearch} /> */}
      {loading &&  Loader()}
      {show && (<div className='nofoundimgcon'>
      <img alt='nofound' className='nofoundimg' src='https://cdni.iconscout.com/illustration/premium/thumb/no-search-found-2511608-2133696.png'/>
      </div>)}
     {dataerr && (<div className='nofoundimgcon'>
      <img alt='nodata' className='nodatafoundimg' src='https://hadafakvideos.com/new/images2/no_data.png' />
      <h1 className='text-white no-data-text'>No data found Search again!!</h1>
      </div>)}
      {error && networnErr()}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
