import styled from 'styled-components';
export const Header = styled.div`
  background-color: #20c29c;
  padding: 100px 0px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
`;

export const HeaderImage = styled.img`
  position: absolute;
  top: 15%;
  border-radius: 10px;
  ${props => props.right ? 'right: 10px;' : 'left: 10px;'}
  transform: translateY(-50%);
  width: ${props => props.right ? '165px' : '210px'};
  @media screen and (max-width:768px){
    width: ${props => props.right ? '120px' : '150px'};
  }
  @media screen and (max-width:425px){
    width: ${props => props.right ? '115px' : '145px'};
  }
`;

export const Title = styled.h2`
  text-align: center;
  text-shadow: 1px 1px 5px #000;
`;