import React from 'react';
import { MovieObject } from '../../datatypes';
import Buttons from '../ui/Buttons';
import Hero from '../ui/Hero';
import MoviesListDisplay from '../ui/MoviesListDisplay';

interface Props {
    moviesObj: {
        data: null | MovieObject;
        loading: boolean
    }
}

const Home: React.FC<Props> = ({ moviesObj }) => {
    console.log(moviesObj.data?.results)
    return (
        <div>
            {moviesObj.loading ? (
                <div> </div>
            ) : (
                <div>
                    <Hero moviesList = {moviesObj.data}  />
                    <MoviesListDisplay moviesList = {moviesObj.data} />
                    <Buttons>load more..</Buttons>
                </div>
            )}
        </div>
    )
}

export default Home;
