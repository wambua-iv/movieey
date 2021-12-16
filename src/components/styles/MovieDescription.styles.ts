import styled from "styled-components";

export const Wrapper = styled.div`
    .back-drop{
        width: 92vw;
        height: 40vh;

        img{
            height: 100%;
            width: 100%;
            border-radius: 0 0 0 30px;
        }
    }
        .content{
            z-index: 100;
            position: absolute;

            .popular{
                width: 40rem;
                position: absolute;
                margin: 5rem 0 0 5rem;
                color: white;
            }
        }

`;