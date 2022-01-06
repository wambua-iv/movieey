import styled from "styled-components";

export const Wrapper = styled.div`
    .wrapped{
        margin: 0 auto;
        width: 96vw;
    }

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
            display: flex;
            justify-content: space-between;

            .rating{
                width: 4rem;
                height: 4rem;
                margin: 35vh 0 0 5vw;
                color: white;
            }

            .btn{
                height: 3rem;
                margin: 35vh 0 0 35vw;
                color: white;
            }

            .cast{
                font-size: 2rem;
                margin: 35vh 0 0 35vw;
                color: white;
                cursor: pointer;
            }
        }

`;

export const Details = styled.div`

.content{
    margin: 2rem 4rem;
    
}

.title-area{
    display: flex;
}
 
 .poster{
     width: 8rem;
     height: 12rem;

     img{
         width: 100%;
         height: 100%;
         border-radius: 1rem ;
     }
 }

 .title{
     margin-left: 1rem;
     color: white ;

 }


`;