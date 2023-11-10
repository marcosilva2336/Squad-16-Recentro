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
`;

export const Title = styled.h2`
  text-align: center;
  text-shadow: 1px 1px 5px #000;
`;