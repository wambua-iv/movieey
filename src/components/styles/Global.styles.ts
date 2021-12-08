import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body{
        box-sizing:border-box;
        -webkit-box-sizing: border-box;
        margin: 0;
        padding:  0;
        margin: 0 auto;
        background-color: #15202b;

        .hide-for-mobile{
            @media screen and (max-width : 769px){
		            display: none;
            }
        }

        .hide-for-desktop{
            @media screen and (min-width: 768px){
		            display: none;
	        }
        }

        .App{
            display: flex;
        }
    }
`;