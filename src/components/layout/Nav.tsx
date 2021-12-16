import React from 'react';
import { Wrapper } from '../styles/Nav.styles';
import Buttons from './Buttons';

const Nav: React.FC = () => {
    return (
        <Wrapper>
            <div className='logo'>
                <h2>Movie-ey</h2>
            </div>
            <div className='auth'>
                    <Buttons>Sign-in</Buttons>
            </div>
        </Wrapper>
    )
}

export default Nav;
