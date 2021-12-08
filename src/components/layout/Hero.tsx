import React from 'react';
import { MovieObject } from '../../datatypes';
import {Wrapper } from '../styles/Hero.styles';
import BackDrop from '../../components/images/backDrop.jpg'

interface Props {
    moviesList : null | MovieObject 
}

const Hero: React.FC<Props> = ({moviesList}) => {

    const data = moviesList?.results[0]
    {console.log(data)}
    return (
        <Wrapper>
            <div className='back-drop'>
                <img src = {BackDrop} alt = "back_drop" />
            </div>
            <div className='content'>

            </div>
        </Wrapper>
    )
}

export default Hero
