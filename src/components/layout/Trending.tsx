import React from 'react';
import { Link } from 'react-router-dom'
import { MovieObject } from '../../datatypes';
import fallBack from '../images/fallBack.jpg'
import { Wrapper } from '../styles/Trending.styles'

interface Props {
    moviesList: null | MovieObject
}

const Trending: React.FC<Props> = ({ moviesList }) => {
    // const getDisplaySize = () =>{
    //         window.screen
    // }
    return (
        <div>
            <h2 style={{color : 'aliceblue'}}>Trending</h2>
            {moviesList?.results ? (
                <Wrapper>
                    {
                        moviesList.results.slice(0, 4).map(movie => (
                            <div key={movie.id}>

                                <div className='movie'>
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}  alt={movie.title} />
                                    <Link to={`movie/${movie.id}`} ><span> {movie.original_title}</span></Link>
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
