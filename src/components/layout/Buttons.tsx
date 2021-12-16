import React from 'react';
import styled from 'styled-components';

const Btn = styled.div`
        padding: 1rem;
        border: 1px solid aliceblue;
        border-radius: 1rem;
        max-width: 6rem;

        &:hover{
            background-color: #fff2;
        }
`;

const Buttons: React.FC = ({children}) => {
    return (
        <Btn>
            {children}
        </Btn>
    )
}

export default Buttons


