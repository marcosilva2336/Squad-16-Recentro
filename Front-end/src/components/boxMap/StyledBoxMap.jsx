import styled from 'styled-components'

export const StyledBoxMap = styled.section`

    display: flex;
    justify-content: center;
    margin-top: 3%;
    margin-bottom: 10% ;
    min-height: 120vh;

    .container {
    height: 920px;
    width: 90vw;
    }

    .boxPesquisa {
        width: 90vw;
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
        margin-top: -10px;
        padding: 30px;
        width: 90vw;
        background-color: #FD832E;
        height: 25vh;
        border-radius: 0px 0px 20px 20px;
        animation: 0.3s;
        animation-name: boxAnimation ;
        animation-direction: alternate;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        


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
