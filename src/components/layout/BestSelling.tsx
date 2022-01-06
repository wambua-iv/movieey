import React from 'react';
import { MovieObject } from '../../datatypes';
import { Wrapper } from '../styles/BestSelling.styles'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


interface Props {
    moviesList: null | MovieObject
}

const BestSelling: React.FC<Props> = ({ moviesList }) => {
    return (
        <Wrapper>
            <h3>Best Selling this week</h3>
            {
                moviesList?.results.map(movie => (
                    <div key={movie.id}>
                        {movie.title}
                        <div className='rating'>
                            <CircularProgressbar 
                                    value={movie.vote_average * 10} 
                                    text={`${movie.vote_average}`} 
                                    styles={buildStyles({ textSize: '32px' })} />
                        </div>
                        <hr />
                    </div>
                ))
            }
        </Wrapper>
    )
}

export default BestSelling
