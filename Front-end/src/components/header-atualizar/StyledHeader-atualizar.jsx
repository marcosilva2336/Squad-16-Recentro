import styled from 'styled-components';


export const Header = styled.div`
  background-color: #fff;
  padding: 25px 0px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: white;
  position: relative;

 
`;

export const HeaderImage = styled.img`
  position: absolute;
  top: 45%;
  ${props => props.right ? 'right: 10px;' : 'left: 10px;'}
  transform: translateY(-50%);
  width: ${props => props.right ? '150px' : '190px'};

  @media screen and (max-width:768px){
    width: ${props => props.right ? '120px' : '150px'};
  }
  @media screen and (max-width:425px){
    width: ${props => props.right ? '90px' : '100px'};
  }
`;

export const Title = styled.h2`
  text-align: center;
  text-shadow: 1px 1px 5px #000;

  @media screen and (max-width:425px){
   font-size:15px;
  }
`;