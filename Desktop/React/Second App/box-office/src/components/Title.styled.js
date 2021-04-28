import styled from "styled-components";


export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;

  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }

  .myne {
    color: ${({ theme }) => theme.mainColors.blue};
    font-size: 14px;
    text-decoration: double;
  }

  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
    
  }

`;
