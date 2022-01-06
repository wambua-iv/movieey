import React from 'react';
import { MovieObject } from '../../datatypes';
import {Wrapper } from '../styles/Hero.styles';
import BackDrop from '../images/backDrop.jpg'
import Nav from './Nav';

interface Props {
    moviesList : null | MovieObject 
}

const Hero: React.FC<Props> = ({moviesList}) => {
    return (
        <Wrapper>
                 <div className='content'>
                    <Nav />
                    <div className='popular' >
                        <h2>Get your movie on with <span>Movie-ey</span></h2>
                        <p>Your one-stop stop for all your entertainment needs, rent, buy or binge watch online what you want when you want  </p>
                    </div>
            </div>
            <div className='back-drop'>
            <img src={`https://image.tmdb.org/t/p/original/${moviesList?.results[0].backdrop_path}`}  alt = "back_drop" />
            </div>
        </Wrapper>
    )
}

export default Hero
