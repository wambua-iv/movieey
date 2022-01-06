import React from 'react';
import { useParams } from 'react-router-dom';
import { MovieObject, MovieItem } from '../../datatypes';
import { Details, Wrapper } from '../styles/MovieDescription.styles';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Buttons from '../layout/Buttons';

interface Props {
    movie: null | MovieObject
}



const MovieDescription: React.FC<Props> = ({ movie }) => {
    const { id } = useParams()
    const Movie = movie?.results.filter(movie => String(movie.id) == id);
    console.log(Movie)
    return (
        <Wrapper>
            {Movie?.map(movieData => (
                <div className='wrapped'>
                        <div className='content'>
                            <div className='rating'>
                                <CircularProgressbar 
                                        value={movieData?.vote_average * 10} 
                                        text={`${movieData.vote_average}`} 
                                        styles={buildStyles({ textSize: '32px', backgroundColor: '#3e98c7'})} 
                                        />
                            </div>
                            <div className='btn'>
                                <Buttons>Trailer</Buttons>
                            </div>
                           <div className='cast'><a>...</a></div>
                        </div>
                        <div className='back-drop'>
                            <img src={`https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}`} alt="back_drop" />
                        </div>
                        <Details>
                            <div>
                                <div className='content'>
                                    <div className='title-area'>
                                        <div className='poster'>
                                            <img src={`https://image.tmdb.org/t/p/original/${movieData?.poster_path}`} alt='poster' />
                                            {/* {console.log(`https://api.themoviedb.org/3/genre/${movieData?.id}/list?api_key=${process.env.REACT_APP_API_KEY}`)} */}
                                        </div>
                                        <div className='title'>
                                            <h2>{movieData.title}</h2>
                                            <div>
                                                <span></span>
                                                <span></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='more-like-this'></div>
                            </div>
                        </Details>
                </div>
            ))}
        </Wrapper>
    )
}

export default MovieDescription

