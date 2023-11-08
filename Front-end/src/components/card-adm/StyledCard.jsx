import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    /* background-color: aqua; */
    height: 168px;
    width: 100%;
    /* margin-left: 2%; */
    margin-top: 2rem;
    justify-content:center;
    /* align-items: center; */
    /* flex-wrap: wrap; */
    /* flex-direction: row; */
`
export const Box = styled.div`
  display: flex;
  position: relative;
  padding: 15px;
  width: 370px;
  height: 145px;
  background-color: ${props => props.darkMode ? '#202529' : '#FFF'}; // Fundo muda com darkMode
  margin: 10px 35px;
  border-radius: 20px;
  box-shadow: ${props => props.darkMode ? '0 2rem 3rem rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}; // Sombra removida no darkMode

  h1{
      position: absolute;
      top: 25px;
      left: 20px;
      color: ${props => props.darkMode ? '#FFF' : '#000000'}; // Cor do texto muda com darkMode
      font-size: 25px;
  }

  p {
      position: absolute;
      top: 70px;
      left: 60px;
      color: ${props => props.darkMode ? '#FFF' : '#000'}; // Cor do texto muda com darkMode
      font-size: 30px;
      text-shadow: ${props => props.darkMode ? 'none' : '1px 1px 3px #ccc'}; // Sombra do texto removida no darkMode
  }


    .icon {
        position: absolute;
        top: 45px;
        left: 290px; 
        color: #FF6900;
    }

    // media query do card
    @media (max-width: 1400px) {
        width: 291px;
        .icon {
            left: 220px; 
        }
    }
      
    @media (max-width: 991px){
       width: 100%;
         h1{
         font-size: 22px;
         }

         p{
            font-size: 40px;
         }
         .icon {
          display: none;
        }
    }
   

   
`
