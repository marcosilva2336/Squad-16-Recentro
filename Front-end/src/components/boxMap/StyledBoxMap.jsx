import styled from 'styled-components'

export const StyledBoxMap = styled.section`

    display: flex;
    justify-content: center;
    margin-top: 3%;
    margin-bottom: 10% ;
    min-height: 120vh;
    position: relative;


    .container {
    height: 57.5rem;
    width: 95vw;
    }
    .boxPesquisa {
        width: 95vw;
        display: flex;
        margin-top: 30px;
        position: absolute;
        z-index: 1;
        justify-content: center;
    }

.material-symbols-outlined {
    margin-top: 8px;
  font-size: 50px;
  color: white;
}

    .menu {
        min-height: 25vh;
        margin-top: -0.8rem;
        padding: 2.5rem;
        width: 95vw;
        background-color: #FD832E;
        height: 12rem;
        border-radius: 0px 0px 20px 20px;
        animation: 0.2s;
        animation-name: boxAnimation ;

    }

    .container-check {
        display: inline-grid;
        justify-content: center;
        margin: auto;
        grid-template-columns: 1fr 1fr 1fr 0fr;
        grid-template-rows: 5rem;
        width: 100%;
        animation: 400ms;
        overflow: auto;
        animation-name: checkAnimation ;
    }

    @keyframes checkAnimation {

        0% {

            opacity: 0;
        }

    }



    @keyframes boxAnimation {
        0% {


            height: 0px;
        }
        100% {

           height: 20%;
        }
    }


    .menuP {
        color: white;
        text-transform: uppercase;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #FF6900;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 7vh;
        border-radius: 0px 0px 10px 10px;
        box-shadow: 0px 3px #F26500;
    }



    #buttonMenu {
     position: absolute;
     right: 60px;
     border: none;
     background-color: transparent;
    }

    .arrowButton {
        margin-top: 10px;
        width: 35px;

    }

    .sumir {
        display: none;

    }

    @media (max-width: 1440px) {
      .menu{
        height: 50vh;
      }
    }

`