import styled from 'styled-components';
import { Grid, Box, Link } from '@material-ui/core';

const StyledImage = styled.img`
  max-width: 217px;
  width: 100%;
  max-height: 190px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StyledLogo = styled.img`
  max-width: 120px;
  width: 100%;
  max-height: 40px;
  bottom: 25px;
  right: 7px;
  box-shadow: 0px 0px 15px #d3d3d3;
  position: absolute;

  @media (max-width: 768px) {
    max-width: 98px;
    max-height: 30px;
    width: 100%;
    float: right;
  }
`;

const StyledGrid = styled(Grid)`
  min-height: 170px;
  transition: 0.3s;

  @media (max-width: 768px) {
    min-height: 140px;
  }

  &:hover {
    div {
      text-decoration: underline;
    }
  }
`;

const StyledPriceBox = styled.div`
  background-image: url('/assets/images/common/red-strike.png');
  background-position: left center;
  width: 146px;
  height: 138px;
  background-size: contain;
  position: absolute;
  background-repeat: no-repeat;
  margin-top: -10px;
`;

const MobileStyledPriceBox = styled.div`
  background-image: url('/assets/images/common/red-strike.png');
  background-position: left center;
  width: 100px;
  height: 125px;
  background-size: contain;
  position: absolute;
  background-repeat: no-repeat;
  margin-top: -10px;
`;

const StyledTextBox = styled(Box)`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  max-width: 160px;
  width: 100%;
`;

const StyledStoreLink = styled(Link)`
  position: absolute;
  bottom: 5px;
  right: 7px;

  font-family: 'Roboto-Regular', sans-serif;
  font-size: 12px;
  transition: 0.3s;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export { StyledImage, StyledLogo, StyledGrid, StyledPriceBox, MobileStyledPriceBox, StyledTextBox, StyledLink, StyledStoreLink };
