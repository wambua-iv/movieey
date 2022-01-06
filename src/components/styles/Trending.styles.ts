import styled from "styled-components";
import breakPoints from "./breakPoints";


export const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 1rem;
    margin-top: 1.25rem;
  
    @media only screen and ${breakPoints.device.sm}{
        grid-template-columns: repeat(1, 2fr);
    }

    @media only screen and ${breakPoints.device.md}{
        grid-template-columns: repeat(3, 2fr);
    }

    @media only screen and ${breakPoints.device.lg}{
        grid-template-columns: repeat(4, 2fr);
    }
  

    .movie{
        width: 300px;
        height: 225px;
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