import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
`

export const Box = styled.div`
    display: flex;
    position: relative;
    padding: 15px;
    width: 500px;
    height: 145px;
    background-color: #FFF;
    margin: 10px;
    border-radius: 20px;
    box-shadow: 4px 4px 12px #aaa;
    

    h1{
        position: absolute;
        top: 25px;
        left: 20px;
        color: #222222;
        font-size: 25px;
    }

    p {
        position: absolute;
        top: 70px;
        left: 60px;
        color: #000;
        font-size: 30px;
        text-shadow: 1px 1px 3px #ccc;
    }
    .icon {
        position: absolute;
        top: 45px;
        left: 350px; 
    }

    // media query do card
    @media (max-width: 1440px) {
        width: 400px;
        .icon {
            left: 300px; /* Adjust the position for smaller screens */
        }
    }

    @media (max-width: 375px) {
        .icon {
            left: 250px; /* Adjust the position for smaller screens */
        }
    }

   
`
