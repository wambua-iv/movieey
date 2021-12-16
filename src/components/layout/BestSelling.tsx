import React from 'react';
import { MovieObject } from '../../datatypes';
import { Wrapper } from '../styles/BestSelling.styles'

interface Props {
    moviesList : null | MovieObject
}

const BestSelling: React.FC<Props> = ({moviesList}) => {
    return (
        <Wrapper>
            <h3>Best Selling this week</h3>
            {
                moviesList?.results.map(movie =>(
                    <div key={movie.id}>
                        {movie.title}
                        <hr />
                    </div>
                ))
            }
        </Wrapper>
    )
}

export default BestSelling
