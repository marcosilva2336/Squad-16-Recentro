import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';



export const Container = styled.div`
  max-width: 1200px;
  height: 500px;
  margin: 30px auto 20px;
  padding: 50px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  z-index: 2;
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
  margin-left: 250px;
  margin-right: 250px;

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
  margin-bottom: 20px;
  box-sizing: border-box;

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
`;

export const ArrowIcon = styled(FaArrowLeft)`
  position: absolute;
  top: 30px;
  left: 5%;
  transform: translateX(-50%);
  font-size: 24px;
  z-index: 3;
`;


export const Title2 = styled.h2`
  text-align: center;
`;
