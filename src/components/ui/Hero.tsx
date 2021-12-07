import React from 'react';
import { MovieObject } from '../../datatypes';

interface Props {
    moviesList : null | MovieObject 
}

const Hero: React.FC<Props> = ({moviesList}) => {

    const data = moviesList?.results[0]
    {console.log(data)}
    return (
        <div>
            {data?.original_title}
        </div>
    )
}

export default Hero
