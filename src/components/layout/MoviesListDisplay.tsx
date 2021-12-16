import React from 'react';
import { MovieObject } from '../../datatypes';
import fallBack from '../images/manipulation.jpg'
import { Wrapper } from '../styles/MoviesListDisplay.styles';
import { Link } from 'react-router-dom';

interface Props {
    moviesList: null | MovieObject
}

const MoviesListDisplay: React.FC<Props> = ({ moviesList }) => {
    return (
        <div>
            <h2 style={{ color: 'aliceblue' }}>Noteworthy</h2>
            {moviesList?.results ? (
                <Wrapper>
                    {
                        moviesList.results.slice(3).map(movie => (
                            <div key={movie.id} className='movie'>
                                <div className='movie-pic'><img src={fallBack/*`https://image.tmdb.org/t/p/original/${movie.poster_path}`*/} alt={movie.title} /></div>
                                <div className='content'>
                                    <div>
                                    <Link to={`movie/${movie.id}`} ><span> {movie.original_title}</span></Link>
                                    <div className='rating'>
                                        Rating : <span>{movie.vote_average}</span>
                                    </div>
                                    </div>
                                    <div className='price'>$45</div>
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

export default MoviesListDisplay
