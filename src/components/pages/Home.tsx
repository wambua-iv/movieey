import { LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MovieObject } from '../../datatypes';
import BestSelling from '../layout/BestSelling';
import Buttons from '../layout/Buttons';
import Hero from '../layout/Hero';
import MoviesListDisplay from '../layout/MoviesListDisplay';
import Trending from '../layout/Trending';
import { Wrapper } from '../styles/Home.styles';

interface Props {
    moviesObj: {
        data: null | MovieObject;
        loading: boolean
    }
}

const Home: React.FC<Props> = ({ moviesObj }) => {
    const [movies, setMovieData] = useState({data : {} as MovieObject | null, loading: true });
    useEffect(()=>{
        setMovieData(()=>({data : moviesObj.data, loading: moviesObj.loading}))
      },[moviesObj, setMovieData])
    return (
        <Wrapper>
            {movies.loading ? (
                <LinearProgress />
            ) : (
                <div>
                    <Hero moviesList = {movies.data}  />
                    <Trending moviesList={movies.data} />
                    <div className='main-content'>
                    <MoviesListDisplay moviesList = {movies.data} />
                    <BestSelling moviesList = {movies.data} />
                    </div>
                    <Buttons>load more..</Buttons>
                </div>
            )}
        </Wrapper>
    )
}

export default Home;
