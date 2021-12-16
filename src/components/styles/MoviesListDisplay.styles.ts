import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 4rem;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 1rem;
    margin-top: 1.25rem;
    color: aliceblue;
  

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
            justify-content: space-between;
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
            font-size: .675rem;
            display: 'flex';
            padding-top: 1rem;
            font-size: .625rem;

            span{
                background-color: aqua;
                border-radius: 50%;
                color: #000;
                padding: .125rem;
            }
        }

        .price{
            margin-left:4rem ;
        }

       
    }

`;