import styled from 'styled-components';

export const ScrollableTableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
 

`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  position: relative;
  box-shadow: ${props => props.darkMode ? '0px 4px 12px rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1) 0px 4px 12px'};

  @media screen and (max-width: 768px) {
    margin: 10px;
  }

  @media screen and (max-width: 375px) {
    margin: 5px;
    width: auto;
  }
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableHeader = styled.thead`
  background: #FF6900;
  font-weight: 600;
  text-shadow: ${props => props.darkMode ? '1px 1px 4px #000' : '1px 1px 4px #222'};
  color: #fff;
`;

export const TableBody = styled.tbody`
  background: ${props => props.darkMode ? '#202529' : '#f9f9f9'};
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background: ${props => props.darkMode ? '#303840' : '#f2f2f2'};
  }
`;

export const TableCell = styled.td`
  text-align: left;
  border-bottom: 2px solid #ccc;
  padding: 10px;
  font-size: 12px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    padding: 5px;
  }

  @media screen and (max-width: 375px) {
    font-size: 9px;
    padding: 3px;
  }
`;

export const SearchInput = styled.input`
  margin-left: 22px;
  margin-top: 18px;
  width: 280px;
  padding: 10px 40px 10px 20px;
  border: none;
  border-radius: 7px;
  background-color: ${props => props.darkMode ? '#202529' : '#fff'};
  color: ${props => props.darkMode ? '#fff' : '#333'};
  box-shadow: ${props => props.darkMode ? '0 2rem 3rem rgba(0, 0, 0, 0.4)' : '0px 4px 12px rgba(0, 0, 0, 0.1)'};

  @media screen and (max-width: 768px) {
    width: 200px;

  }

  @media screen and (max-width: 375px) {
    width: 150px;
    padding: 5px;
  }
`;

export const Title = styled.h1`
  color: ${props => props.darkMode ? '#fff' : '#333'};
  text-align: center;
  margin-top: 45px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 45px;
  }

  @media screen and (max-width: 375px) {
    font-size: 18px;
    margin-top: 15px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 375px) {
    margin: 10px 0;
  }
`;

export const ColumnRangeButton = styled.button`
  width: 40px;
  height: 40px;
  margin: 10px;
  background: transparent;
  border: 2px dashed #f09611;
  border-radius: 50%;
  text-decoration: none;
  background: ${props => props.isActive ? '#ff6900' : 'transparent'};
  color: ${props => props.darkMode ? '#fff' : '#000'};
  box-shadow: ${props => props.darkMode ? '2px 2px 4px rgba(255, 255, 255, 0.2)' : '2px 2px 4px rgba(0, 0, 0, 0.2)'};

  &:hover {
    background-color: ${props => props.darkMode ? '#f17f21' : '#f09611'};
  }

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
    margin-top: 30px;
  }

  @media screen and (max-width: 375px) {
    width: 30px;
    height: 30px;
  }
`;

export const SearchAndTabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 375px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    margin: 0 50px;
  }

  @media screen and (max-width: 375px) {
    margin: 10px;
  }
`;

export const Tab = styled.button`
  margin-left: 1px;
  margin-top: 18px;
  padding: 10px 20px;
  border: none;
  background-color: ${props => props.isActive ? '#ff6900' : (props.darkMode ? '#303840' : '#fff')};
  color: ${props => props.isActive ? '#fff' : (props.darkMode ? '#fff' : '#333')};
  border-bottom: ${props => props.isActive ? 'none' : '2px solid #ff6900'};
  border-radius: 5px 5px 0 0;
  position: relative;
  z-index: ${props => props.isActive ? 1 : 0};
  transform: ${props => props.isActive ? 'translateY(-5px)' : 'none'};
  box-shadow: ${props => props.isActive ? '0px 2px 4px rgba(0, 0, 0, 0.25)' : 'none'};

  &:hover {
    background-color: #ff6900;
    color: #fff;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    padding: 5px 10px;
  }

  @media screen and (max-width: 375px) {
    padding: 7px;
    font-size: 10px;
    
  }
`;
