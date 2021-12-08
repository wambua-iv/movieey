import { LinearProgress } from '@mui/material';
import React from 'react';
import { MovieObject } from '../../datatypes';
import Buttons from '../layout/Buttons';
import Hero from '../layout/Hero';
import MoviesListDisplay from '../layout/MoviesListDisplay';
import { Wrapper } from '../styles/Home.styles';

interface Props {
    moviesObj: {
        data: null | MovieObject;
        loading: boolean
    }
}

const Home: React.FC<Props> = ({ moviesObj }) => {
    console.log(moviesObj.data?.results)
    return (
        <Wrapper>
            {moviesObj.loading ? (
                <LinearProgress />
            ) : (
                <div>
                    <Hero moviesList = {moviesObj.data}  />
                    <MoviesListDisplay moviesList = {moviesObj.data} />
                    <Buttons>load more..</Buttons>
                </div>
            )}
        </Wrapper>
    )
}

export default Home;
