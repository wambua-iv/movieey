import React from 'react';
import {MovieItem, MovieObject} from '../../datatypes'

interface Props {
    moviesList : null | MovieObject 
}

const MoviesListDisplay: React.FC<Props> = ({moviesList}) => {
    return (
        <div>
            {moviesList?.results ? (
                moviesList.results.map(movie =>(
                    <div key={movie.id}>
                        <a href = " ">
                            {movie.original_title}
                        </a>
                    </div>
                ))
            ):(
                <div> </div>
            )}
        </div>
    )
}

export default MoviesListDisplay
