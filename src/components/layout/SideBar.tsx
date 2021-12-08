import { Movie } from '@mui/icons-material';
import React from 'react';
import { Wrapper } from '../styles/SideBar.styles';

const SideBar: React.FC = () => {
    return (
        <Wrapper>
            <div className= 'user-img'>
            </div>
            <div>
                <Movie color='primary' fontSize='large'/>
            </div>
        </Wrapper>
    )
}

export default SideBar
