import styled from "styled-components";

export const Wrapper = styled.div`
    .back-drop{
        width: 100vw;
        height: 50vh;

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
                width: 55rem;
                position: absolute;
                margin: 8rem 0 0 5rem;
                color: white;

                h2{
                    font-size: 2.5rem;
                }

                p{
                    /* color: #104568f7; */
                    font-size: 1.5rem;
                }
            }
        }

`;

