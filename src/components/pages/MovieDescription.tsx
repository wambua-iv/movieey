import React from 'react';
import { useParams } from 'react-router-dom';
import { MovieObject } from '../../datatypes';
import { Wrapper } from '../styles/MovieDescription.styles';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Props {
    movie : null | MovieObject
}



const MovieDescription: React.FC<Props> = ({movie}) => {
    const {id} = useParams()
    const getData =  movie?.results.filter(movie =>String(movie.id) == id)
    if(getData) {console.log(getData)}
    return (
        <Wrapper>
              {/* <div className='rating'>
                        <CircularProgressbar value={movie.vote_average * 10} text={`${movie.vote_average}`} styles={buildStyles({ textSize: '20px' })} />
                    </div> */}
        </Wrapper>
    )
}

export default MovieDescription
