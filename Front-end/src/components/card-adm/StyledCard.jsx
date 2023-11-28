import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    width: 100%;
    margin-left: 1%; 
    margin-top: 2rem;
    justify-content:center;
    align-items: center; 
    /* flex-wrap: wrap; */
    /* flex-direction: row; */

    @media (max-width: 768px) {
        height: 190px;
    }

    @media (max-width: 425px) {
        width: 420px;
        margin-left: 5%;
    }

    @media (max-width: 375px) {
        width: 375px;
        margin-left: 3%;
    }
`
export const Box = styled.div`
  display: flex;
  position: relative;
  padding: 15px;
  width: 370px;
  height: 145px;
  background-color: ${props => props.darkMode ? '#202529' : '#FFF'}; 
  margin: 10px 35px;
  border-radius: 20px;
  box-shadow: ${props => props.darkMode ? '0 2rem 3rem rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}; // Sombra removida no darkMode

  h1{
      position: absolute;
      top: 25px;
      left: 20px;
      color: ${props => props.darkMode ? '#FFF' : '#FFF'}; 
      font-size: 25px;
  }

  p {
      position: absolute;
      top: 70px;
      left: 60px;
      color: ${props => props.darkMode ? '#FFF' : '#FFF'}; 
      font-size: 30px;
      text-shadow: ${props => props.darkMode ? 'none' : '1px 1px 3px #070707'}; 
  }


    .icon {
        position: absolute;
        top: 45px;
        left: 14em; 
        color: white;

    }

    // media query do card
    @media (max-width: 1400px) {
        width: 291px;
         .icon {
             left: 200px;
         }
    }
      
    @media (max-width: 991px){
        margin-left: 0.2rem;
        margin-top: 5%;
        width: 70%;
       height: 70%;
         h1{
         font-size: 16px;
         margin-top: -10px;
         
         }

         p{
            font-size: 24px;
            margin-left: -30px;
            margin-top: -20px;
         }
         .icon {
            font-size: 12px;
           /* margin-left: 30px; */
        }
        
    }
    @media (max-width: 768px){
        .icon {
            font-size: 10px;
            left: 12em;
           /* margin-left: 30px; */
        }
    }
    @media (max-width: 624px){
        height: 100px;
        margin-top: 1rem;
        .icon {
            display: none;
        }
        h1{
            font-size: 12px;
            margin-right: 12px;
        }
        p{
            font-size: 20px;
        }
    }

    @media (max-width: 375px){
       height: 90px;
        h1{
            font-size: 10px;
        }
        p{
            font-size: 18px;
        }
    }
    
   

   
`