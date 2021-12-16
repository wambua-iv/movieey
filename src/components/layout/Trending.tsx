import React from 'react';
import { MovieObject } from '../../datatypes';
import fallBack from '../images/fallBack.jpg'
import { Wrapper } from '../styles/Trending.styles'

interface Props {
    moviesList: null | MovieObject
}

const Trending: React.FC<Props> = ({ moviesList }) => {
    return (
        <div>
            <h2 style={{color : 'aliceblue'}}>Trending</h2>
            {moviesList?.results ? (
                <Wrapper>
                    {
                        moviesList.results.slice(0, 3).map(movie => (
                            <div key={movie.id}>

                                <div className='movie'>
                                    <img src={fallBack/*`https://image.tmdb.org/t/p/original/${movie.poster_path}`*/}   alt={movie.title} />
                                    <a href=" "> {movie.original_title}</a>
                                </div>
                            </div>
                        ))
                    }
                </Wrapper>
            ) : (
                <div> </div>
            )}
        </div>
    )
}

export default Trending;
