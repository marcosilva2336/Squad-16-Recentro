import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';



export const Container = styled.div`
  max-width: 1300px;
  height: 550px;
  margin: 120px auto 20px;
  padding: 50px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  z-index: 2;
    
  @media screen and (max-width:1300px){
    width: 1150px;
    margin: 70px auto 10px;
  }

  @media screen and (max-width:768px){
    width: 670px;
    margin: 100px auto 10px;
  }

  @media screen and (max-width:425px){
    width: 418px;
    margin: 100px auto 10px;
    height: 650px;
    padding: 15px;
  }

  @media screen and (max-width:375px){
    width: 360px;
    margin: 100px auto 5px;
    padding: 1px;
  }
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
  margin-left: 250px;
  margin-right: 250px;

  @media screen and (max-width:768px){
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 50px;
  }
  @media screen and (max-width:425px){
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 60px;
  }
  @media screen and (max-width:375px){
    margin-left: 1px;
    margin-right: 1px;
    margin-bottom: 70px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 5px;
    background-color: #ddd;
    z-index: 1;
    transition: background-color 0.4s ease;
  }
`;

export const Step = styled.div`
  width: 60px;
  height: 60px;
  line-height: 200px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#ffa500' : '#ddd'};
  color: white;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  position: relative;
  transition: background-color 0.4s ease;
  z-index: 2;
  @media screen and (max-width:768px){
   width: 45px;
   height: 45px;
  }

  @media screen and (max-width:375px){
    width: 40px;
   height: 40px;
  }
  &::before {
    content: attr(data-step);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
`;

export const FormFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FormField = styled.div`
  flex: 0 0 calc(33.333% - 30px);
  margin-bottom: 40px;
  box-sizing: border-box;

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }



  @media screen and (max-width:768px){
   flex: 0 0 calc(36% - 30px);
   label{
    font-size: 11.5px;
   }
  }

  @media screen and (max-width: 425px) {
    flex: 0 0 calc(50% - 20px);
  }
`;

export const FormActions = styled.div`
  text-align: right;
`;

export const Button = styled.button`
  padding: 6px 30px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.className === 'cancel' ? '#ccc' : '#ffa500'};
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-right: 10px;
  margin-top: 20px;
`;

export const ArrowIcon = styled(FaArrowLeft)`
  position: absolute;
  top: 30px;
  left: 5%;
  transform: translateX(-50%);
  font-size: 24px;
  z-index: 3;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 300px;
  padding: 10px 40px 10px 20px;
  border:none;
  border-radius: 7px;
  background-color:  #fff;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width:768px){
  width: 140px;
margin-bottom: 10px;
  }
`;

export const Title2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  
  @media screen and (max-width:768px){
  margin-bottom: 30px;
  }
  @media screen and (max-width:375px){
  margin-bottom: 40px;
  }
`;