import styled from 'styled-components';

export const ScrollableTableContainer = styled.div`
  overflow-x: auto;
  max-width: 100%;
  
`;

export const TableContainer = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  position: relative;
  
  box-shadow: ${props => props.darkMode ? '0px 4px 12px rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1) 0px 4px 12px'};
 
  @media screen and (max-width:1400px){
    width: 92.5%;
  }
`;

export const Table = styled.table`
  width: 100%;
  
`;

export const TableHeader = styled.thead`
  background: #FF6900; 
  padding: 10px;
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
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ccc;
  padding: 10px 20px;
`;



export const SearchInput = styled.input`
  margin-left: 22px;
  margin-top: 18px;
  width: 280px;
  padding: 10px 40px 10px 20px;
  border:none;
  border-radius: 7px;
  background-color: ${props => props.darkMode ? '#202529' : '#fff'};
  color: ${props => props.darkMode ? '#fff' : '#333'};
  box-shadow: ${props => props.darkMode ? '0 2rem 3rem rgba(0, 0, 0, 0.4)' : '0px 4px 12px rgba(0, 0, 0, 0.1)'};
`;

export const Title = styled.h1`
  color: ${props => props.darkMode ? '#fff' : '#333'};
  text-align: center;
  margin-top: 45px;
  font-weight: 600;
`;

export const ShowMoreButton = styled.button`
 display: block;
  width: max-content;
  padding: 10px 20px;
  margin: 10px 20px;
  background: transparent;
  padding: 10px 20px;
  border: 2px dashed #f09611;
  box-shadow: ${props => props.darkMode ? '2px 2px 4px rgba(255, 255, 255, 0.2)' : '2px 2px 4px rgba(0, 0, 0, 0.2)'};
  border-radius: 6px;
  text-decoration: none;
  color: ${props => props.darkMode ? '#fff' : '#000'};

  &:hover {
    background-color: ${props => props.darkMode ? '#f17f21' : '#f09611'};
  }
`;
