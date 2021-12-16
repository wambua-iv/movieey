import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-top: 1.25rem;
  

    .movie{
        width: 300px;
        height: 200px;
        padding-bottom: .925rem;

        a{
            color: #1b4456;
            text-decoration: none;
            cursor: pointer;
            font-weight: 600;
        }

        img{
            width: 100%;
            height: 100%;
            border-radius: 1rem;
        }
    }

`;