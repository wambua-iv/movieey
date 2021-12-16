import styled from 'styled-components';

export const Wrapper = styled.div`
        width: 5%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #192734;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .logo-img{
                padding-left: .625rem;
        }

        .center{
                padding-left: .625rem;
        }

        .user-img{
                padding-left: 5%;
                padding-bottom: 30%;
                width: 90%;
                height: 10%;

            img{
                width: 100%;
                height: 100%;
            }
        }
`;