import { Movie, Search, TvOutlined } from '@mui/icons-material';
import React from 'react';
import { Wrapper } from '../styles/SideBar.styles';
import User from '../images/user.png'

const SideBar: React.FC = () => {
    return (
        <Wrapper>
            <div className= 'logo-img'>
                <Movie color='primary' fontSize='large'/>
            </div>
            <div className='center'>
                <Search color='primary' fontSize='large' />
                <TvOutlined color='primary' fontSize='large' />
            </div>
            <div className='user-img'>
                <img src={User} alt='user' />
            </div>
        </Wrapper>
    )
}

export default SideBar
