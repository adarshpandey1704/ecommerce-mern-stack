import styled from '@emotion/styled';
import { Card, Box } from '@mui/material';

export const StyledCard = styled(Card)`
  width: 50%;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledBox = styled(Box)`
  margin-top: 20px;
`;

export const UserLinkBox = styled(Box)`
  border: 1px solid black;
  background: cadetblue;
  display: flex;
  flex-direction: column;
  .styledLink {
    height: 25px;
    padding: 5px;
    color: white;
    margin-left: 10px;
    border-bottom: 1px solid white;
  }
`;
export const AdminDashboardWrapper = styled.div`
  padding: 20px;
  background-color: #ffe6e6;
`;

export const StyledDivCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: ${(props) => (props.height ? props.height : '400px')};
`;

export const StyledImgBox = styled(Box)`
  width: 80%;
  margin-top: 10px;
`;

export const CartBox = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 200px;
`;

export const StyledDivCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin: 5px;
  padding: 10px;
`;

export const StyledShippingBox = styled(Box)`
  background-color: #fee;
  border-radius: 2px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
`;
