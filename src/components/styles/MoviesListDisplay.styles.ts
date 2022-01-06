import styled from "styled-components";
import breakPoints from "./breakPoints";

export const Wrapper = styled.div`
    margin-top: 4rem;
    width: 70%;
    display: grid;
    grid-gap: 1rem;
    margin-top: 1.25rem;
    color: aliceblue;

    @media only screen and ${breakPoints.device.sm}{
        grid-template-columns: repeat(1, 2fr);
    }

    @media only screen and ${breakPoints.device.md}{
        grid-template-columns: repeat(2, 2fr);
    }

    @media only screen and ${breakPoints.device.lg}{
        grid-template-columns: repeat(3, 2fr);
    }
  


    .movie{
        width: 350px;
        height: 150px;
        margin: 1rem auto;
        padding-bottom: 1.5rem;
        border-radius: 1.5rem;
        display: flex;
        background-color: #fff2;
        position: relative;

        .content{
            margin-top: .475rem;
            padding-left: .475rem ;
            display: flex;
            flex-direction: column;
        }

        a{
            color: #a9abab;
            text-decoration: none;
            cursor: pointer;
           

            span{
                font-weight: 400;
                text-transform: capitalize;
            }
        }

        .movie-pic{
            width: 140px;
            height: 200px;
            position: relative;
            top: 10%;
            left: 5%;
            padding-right: 1rem;

            img{
            width: 140px;
            height: 200px;
            border-radius: 1.5rem;
        }
        }

        .rating{
            display: inline-block;
            margin-left: .875rem;
            font-size: .825rem;

            span{
                background-color: aqua;
                border-radius: 30%;
                color: #000;
                padding: .125rem;
            }
        }

        .price{
            margin-left:4rem ;
        }

        .description{
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            margin-top: 1rem;
        }

       
    }

`;